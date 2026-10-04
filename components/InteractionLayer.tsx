"use client";

import { useEffect } from "react";

export function InteractionLayer() {
  useEffect(() => {
    const root = document.documentElement;
    const progress = document.querySelector<HTMLElement>(".scroll-progress__bar");
    const cursor = document.querySelector<HTMLElement>(".cursor-core");
    const ringA = document.querySelector<HTMLElement>(".cursor-ring--a");
    const ringB = document.querySelector<HTMLElement>(".cursor-ring--b");
    const label = document.querySelector<HTMLElement>(".cursor-label");

    let pointerX = window.innerWidth / 2;
    let pointerY = window.innerHeight / 2;
    let ringAX = pointerX;
    let ringAY = pointerY;
    let ringBX = pointerX;
    let ringBY = pointerY;
    let raf = 0;

    const updateScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const pct = max > 0 ? Math.min(1, window.scrollY / max) : 0;
      progress?.style.setProperty("transform", `scaleX(${pct})`);
    };

    const pointer = (event: PointerEvent) => {
      pointerX = event.clientX;
      pointerY = event.clientY;
      root.style.setProperty("--cursor-x", `${event.clientX}px`);
      root.style.setProperty("--cursor-y", `${event.clientY}px`);
      if (cursor) cursor.style.transform = `translate3d(${event.clientX}px,${event.clientY}px,0)`;
    };

    const loop = () => {
      ringAX += (pointerX - ringAX) * 0.2;
      ringAY += (pointerY - ringAY) * 0.2;
      ringBX += (pointerX - ringBX) * 0.095;
      ringBY += (pointerY - ringBY) * 0.095;
      if (ringA) ringA.style.transform = `translate3d(${ringAX}px,${ringAY}px,0)`;
      if (ringB) ringB.style.transform = `translate3d(${ringBX}px,${ringBY}px,0)`;
      raf = window.requestAnimationFrame(loop);
    };

    const revealNodes = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          (entry.target as HTMLElement).classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: "0px 0px -5% 0px" });
    revealNodes.forEach((node) => revealObserver.observe(node));

    const tiltNodes = Array.from(document.querySelectorAll<HTMLElement>("[data-tilt]"));
    const tiltCleanups = tiltNodes.map((node) => {
      const move = (event: PointerEvent) => {
        const rect = node.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width;
        const y = (event.clientY - rect.top) / rect.height;
        node.style.setProperty("--mx", `${x * 100}%`);
        node.style.setProperty("--my", `${y * 100}%`);
        node.style.setProperty("--rx", `${(0.5 - y) * 1.6}deg`);
        node.style.setProperty("--ry", `${(x - 0.5) * 1.8}deg`);
      };
      const leave = () => {
        node.style.setProperty("--rx", "0deg");
        node.style.setProperty("--ry", "0deg");
      };
      node.addEventListener("pointermove", move);
      node.addEventListener("pointerleave", leave);
      return () => {
        node.removeEventListener("pointermove", move);
        node.removeEventListener("pointerleave", leave);
      };
    });

    const magneticNodes = Array.from(document.querySelectorAll<HTMLElement>(".magnetic"));
    const magneticCleanups = magneticNodes.map((node) => {
      const move = (event: PointerEvent) => {
        const rect = node.getBoundingClientRect();
        const dx = event.clientX - (rect.left + rect.width / 2);
        const dy = event.clientY - (rect.top + rect.height / 2);
        const strength = Math.min(9, Math.max(3, rect.width / 80));
        node.style.setProperty("--mag-x", `${(dx / rect.width) * strength}px`);
        node.style.setProperty("--mag-y", `${(dy / rect.height) * strength}px`);
      };
      const leave = () => {
        node.style.setProperty("--mag-x", "0px");
        node.style.setProperty("--mag-y", "0px");
      };
      node.addEventListener("pointermove", move);
      node.addEventListener("pointerleave", leave);
      return () => {
        node.removeEventListener("pointermove", move);
        node.removeEventListener("pointerleave", leave);
      };
    });

    const cursorTargets = Array.from(document.querySelectorAll<HTMLElement>("a,button,[data-cursor]"));
    const cursorCleanups = cursorTargets.map((node) => {
      const enter = () => {
        document.body.classList.add("cursor-is-hovering");
        const text = node.dataset.cursor || (node.tagName === "A" ? "OPEN" : "CLICK");
        if (label) label.textContent = text;
      };
      const leave = () => {
        document.body.classList.remove("cursor-is-hovering");
        if (label) label.textContent = "";
      };
      node.addEventListener("pointerenter", enter);
      node.addEventListener("pointerleave", leave);
      return () => {
        node.removeEventListener("pointerenter", enter);
        node.removeEventListener("pointerleave", leave);
      };
    });

    const clickWave = (event: PointerEvent) => {
      const wave = document.createElement("span");
      wave.className = "click-wave";
      wave.style.left = `${event.clientX}px`;
      wave.style.top = `${event.clientY}px`;
      document.body.appendChild(wave);
      window.setTimeout(() => wave.remove(), 720);
    };

    window.addEventListener("scroll", updateScroll, { passive: true });
    window.addEventListener("pointermove", pointer, { passive: true });
    window.addEventListener("pointerdown", clickWave, { passive: true });
    updateScroll();
    raf = window.requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("scroll", updateScroll);
      window.removeEventListener("pointermove", pointer);
      window.removeEventListener("pointerdown", clickWave);
      window.cancelAnimationFrame(raf);
      revealObserver.disconnect();
      tiltCleanups.forEach((cleanup) => cleanup());
      magneticCleanups.forEach((cleanup) => cleanup());
      cursorCleanups.forEach((cleanup) => cleanup());
    };
  }, []);

  return (
    <>
      <div className="scroll-progress" aria-hidden="true"><i className="scroll-progress__bar" /></div>
      <div className="cursor-ring cursor-ring--b" aria-hidden="true" />
      <div className="cursor-ring cursor-ring--a" aria-hidden="true" />
      <div className="cursor-core" aria-hidden="true"><span className="cursor-label" /></div>
      <div className="cursor-aura" aria-hidden="true" />
    </>
  );
}
