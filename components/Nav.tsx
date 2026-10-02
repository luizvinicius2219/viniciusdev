"use client";

import { useEffect, useState } from "react";

const items = [
  ["Início", "#home"],
  ["Carreira", "#work"],
  ["Projetos", "#projects"],
  ["Stack", "#stack"],
  ["Contato", "#contact"],
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`nav-shell ${scrolled ? "nav-shell--solid" : ""}`}>
      <a className="brand" href="#home" aria-label="Ir para o início">
        <span className="brand-mark">LV</span>
        <span className="brand-copy">vinicius.dev</span>
      </a>
      <nav className="nav-links" aria-label="Navegação principal">
        {items.map(([label, href]) => (
          <a key={href} href={href}>{label}</a>
        ))}
      </nav>
      <a className="nav-resume" href="/curriculo-luiz-vinicius.pdf" target="_blank" rel="noreferrer">
        Currículo ↗
      </a>
    </header>
  );
}
