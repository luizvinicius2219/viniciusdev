"use client";

import { useMemo, useState } from "react";
import { Icon } from "@/components/Icon";
import { experiences } from "@/data/portfolio";

type IconName = Parameters<typeof Icon>[0]["name"];

export function ExperienceSystem() {
  const [activeExperience, setActiveExperience] = useState(0);
  const [activeHighlight, setActiveHighlight] = useState(0);
  const experience = experiences[activeExperience];
  const highlights = experience.highlights ?? [];
  const highlight = highlights[Math.min(activeHighlight, Math.max(0, highlights.length - 1))];

  const experienceLabel = useMemo(() => {
    if (activeExperience === 0) return "HEAD";
    return `HEAD~${activeExperience}`;
  }, [activeExperience]);

  function selectExperience(index: number) {
    setActiveExperience(index);
    setActiveHighlight(0);
  }

  return (
    <section id="work" className="section-shell section-block experience-section" data-reveal>
      <div className="section-heading section-heading--compact">
        <div>
          <p className="eyebrow">WORK EXPERIENCE</p>
          <h2>git log --career</h2>
        </div>
        <p>Uma trajetória em que dados, automação e processo precisam funcionar juntos — com impacto mensurável e rastreabilidade.</p>
      </div>

      <div className="experience-console">
        <aside className="experience-commits" aria-label="Histórico profissional">
          <div className="console-title"><Icon name="terminal" /><span>$ git log --graph --career</span></div>
          {experiences.map((item, index) => (
            <button
              type="button"
              key={`${item.company}-${item.period}`}
              onClick={() => selectExperience(index)}
              className={`commit-row ${activeExperience === index ? "is-active" : ""}`}
              data-cursor="OPEN"
            >
              <span className="commit-graph" aria-hidden="true"><i /><b /></span>
              <span className="commit-copy">
                <small>{index === 0 ? "HEAD → current" : `career~${index}`}</small>
                <strong>{item.company}</strong>
                <em>{item.role}</em>
              </span>
              <span className="commit-date">{item.period}</span>
            </button>
          ))}
        </aside>

        <div className="experience-stage">
          <div className="experience-stage__head">
            <div>
              <span className="stage-branch"><i /> {experienceLabel}</span>
              <p>{experience.period} · {experience.location}</p>
              <h3>{experience.company}</h3>
              <h4>{experience.role}</h4>
            </div>
            <span className="stage-seal"><Icon name="briefcase" /></span>
          </div>

          <p className="experience-summary">{experience.summary}</p>

          <div className="experience-metrics">
            {(experience.metrics ?? []).map((metric) => (
              <div key={`${metric.value}-${metric.label}`}>
                <strong>{metric.value}</strong>
                <span>{metric.label}</span>
              </div>
            ))}
          </div>

          {highlights.length > 0 && (
            <div className="experience-depth">
              <div className="depth-map" aria-label="Entregas em destaque">
                {highlights.map((item, index) => (
                  <button
                    type="button"
                    key={item.title}
                    onClick={() => setActiveHighlight(index)}
                    onMouseEnter={() => setActiveHighlight(index)}
                    className={`depth-node ${activeHighlight === index ? "is-active" : ""}`}
                    data-cursor="VIEW"
                  >
                    <span><Icon name={(item.icon ?? "layers") as IconName} /></span>
                    <b>{String(index + 1).padStart(2, "0")}</b>
                  </button>
                ))}
                <i className="depth-line" />
              </div>

              {highlight && (
                <article className="depth-detail">
                  <div className="depth-detail__icon"><Icon name={(highlight.icon ?? "layers") as IconName} /></div>
                  <div>
                    <small>SELECTED DELIVERY</small>
                    <h5>{highlight.title}</h5>
                    <p>{highlight.description}</p>
                    {highlight.metric && <strong>{highlight.metric}</strong>}
                  </div>
                </article>
              )}
            </div>
          )}

          <div className="experience-tags">
            {experience.tags.map((tag) => <span key={tag}>{tag}</span>)}
          </div>
        </div>
      </div>
    </section>
  );
}
