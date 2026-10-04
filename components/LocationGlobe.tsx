"use client";

import { Icon } from "@/components/Icon";
import { LocalClock } from "@/components/LocalClock";
import { profile } from "@/data/portfolio";

export function LocationGlobe() {
  return (
    <a
      className="bento-card location-card location-globe-card location-globe-card--v7 magnetic"
      data-reveal
      data-cursor="MAP"
      href="https://www.google.com/maps/search/?api=1&query=Recife%2C%20PE%2C%20Brasil"
      target="_blank"
      rel="noreferrer"
      aria-label="Abrir Recife no mapa"
    >
      <div className="location-topline">
        <span><Icon name="map" /> LOCALIZAÇÃO</span>
        <b>BR · UTC−03</b>
      </div>

      <div className="globe-shell globe-shell--v7" aria-hidden="true">
        <div className="globe-sphere globe-sphere--v7">
          <i className="globe-grid globe-grid--a" />
          <i className="globe-grid globe-grid--b" />
          <i className="globe-grid globe-grid--c" />
          <i className="continent continent--north" />
          <i className="continent continent--south" />
          <i className="continent continent--eurasia" />
          <i className="continent continent--africa" />
          <span className="recife-ping recife-ping--v7"><b /><i /></span>
          <span className="recife-label">RECIFE</span>
        </div>
        <div className="globe-orbit globe-orbit--1" />
        <div className="globe-orbit globe-orbit--2" />
      </div>

      <div className="location-copy location-copy--v7">
        <strong>{profile.location}</strong>
        <span><i className="status-dot" /> ONLINE · LOCAL TIME <LocalClock /></span>
        <small>Recife node · data products, automação e audit tech</small>
      </div>
    </a>
  );
}
