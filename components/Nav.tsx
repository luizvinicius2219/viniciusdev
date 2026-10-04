"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Icon } from "@/components/Icon";

const items = [
  ["Home", "/", "#home"],
  ["Work", "/#work", "#work"],
  ["Projects", "/projects", "/projects"],
  ["Tech System", "/#stack", "#stack"],
  ["Beyond", "/#life", "#life"],
] as const;

export function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState(pathname.startsWith("/projects") ? "/projects" : "#home");
  const [graphite, setGraphite] = useState(false);

  useEffect(() => {
    const saved = window.localStorage.getItem("portfolio-tone");
    if (saved === "graphite") {
      document.documentElement.classList.add("tone-graphite");
      setGraphite(true);
    }

    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    if (pathname.startsWith("/projects")) {
      setActive("/projects");
      return () => window.removeEventListener("scroll", onScroll);
    }

    const sections = ["home", "work", "stack", "life"].map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[];
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible?.target.id) setActive(`#${visible.target.id}`);
    }, { threshold: [0.12, 0.32, 0.6], rootMargin: "-12% 0px -64% 0px" });
    sections.forEach((section) => observer.observe(section));

    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, [pathname]);

  function toggleTone() {
    const next = !graphite;
    setGraphite(next);
    document.documentElement.classList.toggle("tone-graphite", next);
    window.localStorage.setItem("portfolio-tone", next ? "graphite" : "obsidian");
  }

  return (
    <header className={`nav-shell nav-shell--v7 ${scrolled ? "nav-shell--solid" : ""}`}>
      <a className="brand magnetic" data-cursor="HOME" href="/" aria-label="Ir para o início">
        <span className="brand-dot"><i /></span><strong>LV</strong>
      </a>
      <span className="nav-divider" />
      <nav className="nav-links" aria-label="Navegação principal">
        {items.map(([label, href, key]) => (
          <a key={label} className={active === key ? "is-active" : ""} href={href} data-cursor={label.toUpperCase()}>
            <span>{label}</span>
          </a>
        ))}
      </nav>
      <span className="nav-divider" />
      <a className="nav-resume magnetic" data-cursor="PDF" href="/curriculo-luiz-vinicius.pdf" target="_blank" rel="noreferrer"><Icon name="file" /> Resume</a>
      <span className="nav-divider" />
      <button className="theme-orbit magnetic" data-cursor="TONE" type="button" onClick={toggleTone} aria-label="Alternar tom entre preto e grafite" title="Alternar preto/grafite">
        <Icon name={graphite ? "moon" : "sun"} />
      </button>
    </header>
  );
}
