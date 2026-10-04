import { Icon } from "@/components/Icon";
import type { Project } from "@/data/portfolio";

export function ProjectCard({ project }: { project: Project }) {
  const body = (
    <article className={`project-card project-card--v6 interactive-card ${project.featured ? "project-card--featured" : ""}`} data-tilt data-cursor="PROJECT">
      <div className="project-topline">
        <span className="project-number">{project.number}</span>
        <span className="project-arrow"><Icon name="arrow" /></span>
      </div>
      <div className="project-core">
        <p className="project-kicker">{project.subtitle}</p>
        <h3>{project.title}</h3>
        <div className="project-hover-copy">
          <p className="project-description">{project.description}</p>
          <p className="project-impact">{project.impact}</p>
        </div>
      </div>
      <div className="tag-list">
        {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
      </div>
      <span className="project-cta">{project.cta ?? "Explorar case"} ↗</span>
      <div className="project-scan" aria-hidden="true" />
    </article>
  );

  if (!project.href) return body;
  return <a className="project-link" href={project.href} target="_blank" rel="noreferrer">{body}</a>;
}
