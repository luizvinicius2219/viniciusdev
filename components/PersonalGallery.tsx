"use client";

import { useEffect, useState } from "react";
import { Icon } from "@/components/Icon";
import { profile } from "@/data/portfolio";

const gallery = [
  { src: "/viagem-brasilia-congresso.jpg", label: "Brasília · Congresso", position: "50% 48%" },
  { src: "/viagem-galeria.jpg", label: "arte & repertório", position: "50% 44%" },
  { src: "/viagem-praia.jpg", label: "fora da tela", position: "50% 50%" },
  { src: "/viagem-brasilia-catedral.jpg", label: "Brasília · Catedral", position: "50% 38%" },
  { src: profile.speakerPhoto, label: "dados em palco", position: "50% 30%" },
];

export function PersonalGallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setLightboxIndex(null);
      if (event.key === "ArrowLeft") setLightboxIndex((lightboxIndex - 1 + gallery.length) % gallery.length);
      if (event.key === "ArrowRight") setLightboxIndex((lightboxIndex + 1) % gallery.length);
    };
    document.body.classList.add("lightbox-open");
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.classList.remove("lightbox-open");
      window.removeEventListener("keydown", onKey);
    };
  }, [lightboxIndex]);

  return (
    <section id="life" className="section-shell section-block personal-section" data-reveal>
      <div className="personal-heading">
        <div><p className="eyebrow">BEYOND WORK</p><h2>Fora do terminal.</h2></div>
        <p>Viagens, arte, repertório e momentos que não precisam virar KPI.</p>
      </div>

      <div className="personal-gallery">
        {gallery.map((item, index) => (
          <button
            type="button"
            key={item.src}
            className={`personal-photo personal-photo--${index + 1}`}
            onClick={() => setLightboxIndex(index)}
            data-cursor="ZOOM"
          >
            <img src={item.src} alt={item.label} style={{ objectPosition: item.position }} />
            <span>{item.label}</span>
            <i><Icon name="external" /></i>
          </button>
        ))}
        <div className="personal-signature">
          <strong>{profile.name}</strong>
          <small>DATA ENGINEER · RECIFE</small>
          <span>work hard · stay curious · keep moving</span>
        </div>
      </div>

      {lightboxIndex !== null && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label="Visualização da foto">
          <button className="lightbox-close" type="button" onClick={() => setLightboxIndex(null)} aria-label="Fechar"><Icon name="close" /></button>
          <button className="lightbox-arrow lightbox-arrow--left" type="button" onClick={() => setLightboxIndex((lightboxIndex - 1 + gallery.length) % gallery.length)} aria-label="Foto anterior"><Icon name="chevronLeft" /></button>
          <figure>
            <img src={gallery[lightboxIndex].src} alt={gallery[lightboxIndex].label} />
            <figcaption><span>{String(lightboxIndex + 1).padStart(2, "0")}/{String(gallery.length).padStart(2, "0")}</span><strong>{gallery[lightboxIndex].label}</strong></figcaption>
          </figure>
          <button className="lightbox-arrow lightbox-arrow--right" type="button" onClick={() => setLightboxIndex((lightboxIndex + 1) % gallery.length)} aria-label="Próxima foto"><Icon name="chevronRight" /></button>
        </div>
      )}
    </section>
  );
}
