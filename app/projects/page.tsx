import { InteractionLayer } from "@/components/InteractionLayer";
import { Nav } from "@/components/Nav";
import { SiteFooter } from "@/components/SiteFooter";
import { Icon } from "@/components/Icon";
import { projects } from "@/data/portfolio";

const stream = [
  "projects.load(scope='data_engineering')",
  "case_studies.sort(by=['impact','complexity'])",
  "pipeline.describe(problem, solution, stack, result)",
  "SELECT project, impact FROM portfolio WHERE shipped = TRUE;",
];

export default function ProjectsPage() {
  const featured = projects.filter((project) => project.featured);

  return (
    <main id="home" className="projects-page">
      <InteractionLayer />
      <Nav />

      <div className="site-code-rain" aria-hidden="true">
        {stream.concat(stream, stream, stream).map((line, index) => (
          <span key={`${line}-${index}`} style={{ top: `${4 + index * 6}%`, animationDelay: `${index * -2.1}s` }}>{line}</span>
        ))}
      </div>

      <section className="projects-page-hero section-shell" data-reveal>
        <a href="/" className="projects-back magnetic" data-cursor="BACK" aria-label="Voltar para a página inicial"><Icon name="chevronLeft" /></a>
        <div>
          <p className="eyebrow">PROJECT INDEX</p>
          <h1>Projetos</h1>
          <p>Sistemas de dados, automação, auditoria contínua e produtos web. Organizados pelo problema resolvido, arquitetura e impacto.</p>
        </div>
        <span className="projects-count"><i /> {projects.length} projetos</span>
      </section>

      <section className="projects-featured section-shell">
        <div className="projects-section-heading" data-reveal>
          <span><Icon name="layers" /></span>
          <div><h2>Projetos em destaque</h2><p>Os sistemas com maior profundidade técnica, uso real e impacto operacional.</p></div>
        </div>

        <div className="projects-featured-grid">
          {featured.map((project) => (
            <article id={project.slug} className="project-case-card interactive-card" data-tilt data-reveal key={project.slug}>
              <div className="project-case-visual" aria-hidden="true">
                <span>{project.number}</span>
                <div className="project-case-diagram">
                  <i /><i /><i /><i />
                  <b>{project.tags.slice(0, 3).join(" · ")}</b>
                </div>
              </div>
              <div className="project-case-copy">
                <small>{project.subtitle}</small>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <strong>{project.impact}</strong>
                <div className="project-case-tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                <div className="project-case-actions">
                  {project.href && <a href={project.href} target="_blank" rel="noreferrer" className="magnetic" data-cursor="OPEN">{project.cta || "Abrir projeto"} <Icon name="external" /></a>}
                  {project.github && project.github !== project.href && <a href={project.github} target="_blank" rel="noreferrer" className="magnetic project-case-secondary" data-cursor="GITHUB"><Icon name="github" /> GitHub</a>}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="projects-all section-shell">
        <div className="projects-section-heading" data-reveal>
          <span><Icon name="terminal" /></span>
          <div><h2>Todos os projetos</h2><p>A base já está pronta para receber as imagens e novos cases que você for adicionando.</p></div>
        </div>

        <div className="projects-all-grid">
          {projects.map((project) => (
            <article id={`all-${project.slug}`} className="project-list-card" data-reveal key={project.slug}>
              <small>{project.number}</small>
              <div>
                <span>{project.subtitle}</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div>{project.tags.map((tag) => <em key={tag}>{tag}</em>)}</div>
              </div>
              {project.href ? <a href={project.href} target="_blank" rel="noreferrer" data-cursor="OPEN" aria-label={`Abrir ${project.title}`}><Icon name="arrow" /></a> : <span className="project-list-status">CASE</span>}
            </article>
          ))}
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
