"use client";

import { useEffect, useRef } from "react";
import type { CSSProperties } from "react";
import { Icon } from "@/components/Icon";

type SpotifyController = {
  play: () => void;
  pause: () => void;
  addListener?: (event: string, callback: () => void) => void;
};

type SpotifyIframeAPI = {
  createController: (
    element: HTMLElement,
    options: {
      uri: string;
      width?: string | number;
      height?: string | number;
    },
    callback: (controller: SpotifyController) => void
  ) => void;
};

declare global {
  interface Window {
    onSpotifyIframeApiReady?: (api: SpotifyIframeAPI) => void;
    __spotifyIframeApi?: SpotifyIframeAPI;
  }
}

const TRACK_URI = "spotify:track:4qvUtYRNwmFzfJ2loWkQCH";

export function VinylPlayer() {
  const mountRef = useRef<HTMLDivElement | null>(null);
  const controllerRef = useRef<SpotifyController | null>(null);

  const hoveringRef = useRef(false);
  const pauseTimerRef = useRef<number | null>(null);

  useEffect(() => {
    let disposed = false;

    const attemptPlay = () => {
      if (!hoveringRef.current) return;

      try {
        controllerRef.current?.play();
      } catch {
        // navegador pode bloquear o primeiro autoplay
      }
    };

    const createController = (api: SpotifyIframeAPI) => {
      if (
        disposed ||
        !mountRef.current ||
        controllerRef.current
      ) {
        return;
      }

      api.createController(
        mountRef.current,
        {
          uri: TRACK_URI,
          width: "100%",
          height: 152,
        },
        (controller) => {
          if (disposed) return;

          controllerRef.current = controller;

          controller.addListener?.(
            "ready",
            attemptPlay
          );

          window.setTimeout(
            attemptPlay,
            450
          );
        }
      );
    };

    if (window.__spotifyIframeApi) {
      createController(
        window.__spotifyIframeApi
      );
    } else {
      const previousReady =
        window.onSpotifyIframeApiReady;

      window.onSpotifyIframeApiReady = (
        api
      ) => {
        window.__spotifyIframeApi = api;

        previousReady?.(api);

        createController(api);
      };

      if (
        !document.querySelector(
          'script[data-spotify-iframe-api="true"]'
        )
      ) {
        const script =
          document.createElement("script");

        script.src =
          "https://open.spotify.com/embed/iframe-api/v1";

        script.async = true;

        script.dataset.spotifyIframeApi =
          "true";

        document.body.appendChild(script);
      }
    }

    return () => {
      disposed = true;

      if (
        pauseTimerRef.current !== null
      ) {
        window.clearTimeout(
          pauseTimerRef.current
        );

        pauseTimerRef.current = null;
      }
    };
  }, []);

  const playOnHover = () => {
    if (
      pauseTimerRef.current !== null
    ) {
      window.clearTimeout(
        pauseTimerRef.current
      );

      pauseTimerRef.current = null;
    }

    /*
      Evita chamar play novamente
      enquanto o mouse já está dentro.
    */
    if (hoveringRef.current) return;

    hoveringRef.current = true;

    try {
      controllerRef.current?.play();
    } catch {
      // mantém o player utilizável
    }
  };

  const pauseOnLeave = () => {
    if (!hoveringRef.current) return;

    if (
      pauseTimerRef.current !== null
    ) {
      window.clearTimeout(
        pauseTimerRef.current
      );
    }

    /*
      Aguarda 220ms antes de pausar.

      Isso evita que o iframe interno do
      Spotify provoque:

      play → pause → play → pause
    */
    pauseTimerRef.current =
      window.setTimeout(() => {
        hoveringRef.current = false;

        pauseTimerRef.current = null;

        try {
          controllerRef.current?.pause();
        } catch {
          // no-op
        }
      }, 220);
  };

  return (
    <article
      className="
        bento-card
        vinyl-card
        vinyl-card--v8
        vinyl-card--stable
      "
      data-cursor="PLAY"
      data-reveal
      onPointerEnter={playOnHover}
      onPointerLeave={pauseOnLeave}
    >
      <div className="vinyl-meta vinyl-meta--v8">
        <span className="spotify-dot">
          ●
        </span>

        <div>
          <small>
            TOCANDO AGORA
          </small>

          <strong>
            Vilarejo
          </strong>

          <p>
            Marisa Monte ·
            Infinito Particular
          </p>
        </div>

        <Icon name="music" />
      </div>

      <div
        className="
          vinyl-stage
          vinyl-stage--v8
        "
        aria-hidden="true"
      >
        <div
          className="
            vinyl-record
            vinyl-record--v8
          "
        >
          <span
            className="
              vinyl-groove
              vinyl-groove--1
            "
          />

          <span
            className="
              vinyl-groove
              vinyl-groove--2
            "
          />

          <span className="vinyl-label">
            <b>V</b>
            <small>MM</small>
          </span>
        </div>

        <div
          className="
            vinyl-arm
            vinyl-arm--v8
          "
        >
          <i />
          <b />
        </div>

        <div
          className="
            vinyl-waveform
            vinyl-waveform--v8
          "
        >
          {Array.from({
            length: 22,
          }).map((_, index) => (
            <i
              key={index}
              style={
                {
                  "--bar": index,
                } as CSSProperties
              }
            />
          ))}
        </div>
      </div>

      <div
        className="vinyl-autoplay-note"
        aria-live="polite"
      >
        <span className="status-dot" />
        {" "}
        passe o mouse para tocar ·
        clique no player se o navegador
        bloquear o primeiro autoplay
      </div>

      <div
        className="
          vinyl-player
          vinyl-player--v8
        "
        ref={mountRef}
      />
    </article>
  );
}