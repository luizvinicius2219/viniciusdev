"use client";

import { Icon } from "@/components/Icon";
import { profile, projects } from "@/data/portfolio";

type IconName = Parameters<typeof Icon>[0]["name"];

const careerNodes = [
  {
    year: "2023 – 2024",
    company: "Grupo Parvi",
    role: "Data Analyst Intern",
    icon: "chart" as IconName,
    note: "Analytics, BI e automações que abriram caminho para engenharia de dados.",
  },
  {
    year: "2024 – 2025",
    company: "Grupo Parvi",
    role: "Data Engineer",
    icon: "database" as IconName,
    note: "Pipelines, Data Warehouse, Pentaho, Jenkins, Python, SQL e integrações em escala.",
  },
  {
    year: "2025",
    hoverYear: "2025 – Atual",
    company: "Magnum Tires",
    role: "Data Engineer Pleno",
    icon: "code" as IconName,
    note: "Auditoria Contínua, BigQuery, SAP S/4HANA, FastAPI, automação e produtos internos.",
    current: true,
  },
];

export function BentoDashboard() {
  const previewProjects = projects.slice(0, 4);

  return (
    <section id="home" className="bento-shell bento-shell--v8 section-shell">
      <div className="hero-signature hero-signature--v8" data-reveal>
        <span className="hero-kicker"><i /> DATA ENGINEERING / AUTOMATION / AUDIT TECH</span>
        <strong aria-hidden="true">LUIZ</strong>
        <h1>Luiz Vinícius</h1>
        <small>turning controls into software</small>
      </div>

      <div className="bento-grid bento-grid--top bento-grid--top-v8">
        <article
          className="bento-card portrait-card portrait-card--v8 portrait-card--wave interactive-card"
          data-tilt
          data-reveal
          onPointerMove={(event) => {
            const rect = event.currentTarget.getBoundingClientRect();
            event.currentTarget.style.setProperty("--wave-x", `${event.clientX - rect.left}px`);
            event.currentTarget.style.setProperty("--wave-y", `${event.clientY - rect.top}px`);
          }}
        >
          <span className="portrait-wave-label" aria-hidden="true"><b>◌</b> Wave</span>
          <img className="portrait-avatar-image" src={profile.mascot} alt="Mascote em pixel art de Luiz Vinícius" />
          <span className="portrait-dissolve" aria-hidden="true" />
          <span className="portrait-wave portrait-wave--pointer" aria-hidden="true"><i /><b /><em /></span>
          <div className="portrait-caption"><span>DATA ENGINEER</span><strong>{profile.name}</strong></div>
        </article>

        <article className="bento-card intro-card intro-card--v8 interactive-card" data-tilt data-reveal>
          <span className="quote-mark">LV</span>
          <p className="profile-bio-line">{profile.headline}</p>
          <p className="intro-sub">Hoje atuo na Magnum Tires conectando SAP S/4HANA, BigQuery, Python, FastAPI, BI e IA a produtos de Auditoria Contínua.</p>
          <div className="intro-tags">
            <span>Python</span><span>BigQuery</span><span>SAP</span><span>FastAPI</span><span>Qlik</span>
          </div>
          <div className="intro-signature"><span className="status-dot" /> Recife, PE · sistemas que deixam trilha</div>
        </article>

        <a className="bento-card resume-tile resume-tile--v8 interactive-card magnetic" data-tilt data-reveal data-cursor="PDF" href="/curriculo-luiz-vinicius.pdf" target="_blank" rel="noreferrer">
          <div className="resume-paper" aria-hidden="true"><span /><span /><span /><span /></div>
          <div className="tile-action"><Icon name="file" /><strong>Currículo</strong><small>PDF · abrir</small><Icon name="external" /></div>
        </a>
      </div>

      <div className="bento-grid bento-grid--middle bento-grid--middle-v8">
        <article id="work" className="bento-card career-preview career-preview--v8 interactive-card" data-tilt data-reveal>
          <div className="preview-heading preview-heading--career">
            <div><span><Icon name="briefcase" /></span><strong>Experiência profissional</strong><small>$ git log --career</small></div>
            <a href="/curriculo-luiz-vinicius.pdf" target="_blank" rel="noreferrer" className="preview-text-link magnetic" data-cursor="PDF">ver currículo <Icon name="arrow" /></a>
          </div>

          <div className="career-preview__graph career-preview__graph--v8">
            {careerNodes.map((node, index) => (
              <div className="career-preview__step" key={`${node.year}-${node.company}`}>
                <button
                  type="button"
                  className={`career-preview__experience career-preview__experience--v8 ${node.current ? "is-current" : ""}`}
                  data-cursor="CAREER"
                  aria-label={`${node.year} ${node.company} ${node.role}`}
                >
                  {node.current && <em>ATUAL</em>}
                  <small>{node.year}</small>
                  <span><Icon name={node.icon} /></span>
                  <b>{node.company}</b>
                  <p>{node.role}</p>
                  <div className="career-preview__hover" aria-hidden="true">
                    <strong>{"hoverYear" in node ? node.hoverYear : node.year}</strong>
                    <span>{node.note}</span>
                  </div>
                </button>
                {index < careerNodes.length - 1 && <i className="career-connector" />}
              </div>
            ))}
          </div>
        </article>

        <article id="projects" className="bento-card projects-preview projects-preview--v9 interactive-card" data-tilt data-reveal>
          <div className="preview-heading">
            <div><span><Icon name="layers" /></span><strong>Projetos</strong><small>{projects.length} cases selecionados</small></div>
            <a className="preview-text-link magnetic" href="/projects" data-cursor="PROJECTS">ver projetos <Icon name="arrow" /></a>
          </div>

          <div className="project-mini-grid project-mini-grid--v9">
            {previewProjects.map((project) => (
              <a
                href={project.caseStudy ? `/projects/${project.slug}` : `/projects#${project.slug}`}
                key={project.number}
                data-cursor="OPEN"
                aria-label={`Abrir ${project.title} na página de projetos`}
              >
                <small>{project.number}</small>
                <span>{project.title.split(" ")[0].slice(0, 2).toUpperCase()}</span>
                <strong>{project.title}</strong>
                <p>{project.subtitle}</p>
                <Icon name="arrow" />
              </a>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
}
