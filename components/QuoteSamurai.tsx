import type { CSSProperties } from "react";
import { profile } from "@/data/portfolio";

export function QuoteSamurai() {
  return (
    <article className="bento-card quote-banner samurai-quote" data-reveal>
      <div className="samurai-particles" aria-hidden="true">
        {Array.from({ length: 12 }).map((_, index) => <i key={index} style={{ "--p": index } as CSSProperties} />)}
      </div>
      <div className="quote-copy">
        <span>“</span>
        <blockquote>{profile.quote}</blockquote>
        <small>— Bushidō · princípio samurai de disciplina pessoal</small>
      </div>
      <div className="samurai-stage" aria-hidden="true">
        <div className="samurai-moon" />
        <img src="/samurai-ronin.webp" alt="" />
        <div className="samurai-slash" />
      </div>
    </article>
  );
}
