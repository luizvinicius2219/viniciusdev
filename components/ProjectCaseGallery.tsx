"use client";

import { useEffect, useState } from "react";
import styles from "./ProjectCaseGallery.module.css";

type GalleryItem = {
  src: string;
  title: string;
  caption: string;
};

export function ProjectCaseGallery({ items }: { items: GalleryItem[] }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [open, setOpen] = useState(false);

  const prev = () => setIndex((current) => (current - 1 + items.length) % items.length);
  const next = () => setIndex((current) => (current + 1) % items.length);

  useEffect(() => {
    if (paused || open || items.length < 2) return;
    const timer = window.setInterval(next, 5200);
    return () => window.clearInterval(timer);
  }, [paused, open, items.length]);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
      if (event.key === "ArrowLeft") prev();
      if (event.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const current = items[index];

  return (
    <div className={styles.gallery} onPointerEnter={() => setPaused(true)} onPointerLeave={() => setPaused(false)}>
      <div className={styles.stage}>
        <button className={`${styles.arrow} ${styles.left}`} type="button" onClick={prev} aria-label="Imagem anterior">‹</button>
        <button className={styles.imageButton} type="button" onClick={() => setOpen(true)} aria-label={`Abrir ${current.title}`}>
          <img src={current.src} alt={current.title} />
          <span className={styles.zoom}>abrir imagem</span>
        </button>
        <button className={`${styles.arrow} ${styles.right}`} type="button" onClick={next} aria-label="Próxima imagem">›</button>
        <div className={styles.caption}>
          <span>{String(index + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}</span>
          <div><strong>{current.title}</strong><p>{current.caption}</p></div>
        </div>
      </div>

      <div className={styles.thumbs} aria-label="Miniaturas da galeria">
        {items.map((item, itemIndex) => (
          <button
            type="button"
            className={itemIndex === index ? styles.active : ""}
            onClick={() => setIndex(itemIndex)}
            key={item.src}
            aria-label={`Mostrar ${item.title}`}
          >
            <img src={item.src} alt="" />
            <span>{String(itemIndex + 1).padStart(2, "0")}</span>
          </button>
        ))}
      </div>

      {open && (
        <div className={styles.lightbox} role="dialog" aria-modal="true" aria-label={current.title} onClick={() => setOpen(false)}>
          <button className={styles.close} type="button" onClick={() => setOpen(false)} aria-label="Fechar">×</button>
          <button className={`${styles.lightboxArrow} ${styles.lightboxLeft}`} type="button" onClick={(event) => { event.stopPropagation(); prev(); }} aria-label="Imagem anterior">‹</button>
          <div className={styles.lightboxInner} onClick={(event) => event.stopPropagation()}>
            <img src={current.src} alt={current.title} />
            <div><strong>{current.title}</strong><p>{current.caption}</p></div>
          </div>
          <button className={`${styles.lightboxArrow} ${styles.lightboxRight}`} type="button" onClick={(event) => { event.stopPropagation(); next(); }} aria-label="Próxima imagem">›</button>
        </div>
      )}
    </div>
  );
}
