import type { Project } from "@/data/portfolio";

export function ProjectCard({ project }: { project: Project }) {
  const body = (
    <article className={`project-card ${project.featured ? "project-card--featured" : ""}`}>
      <div className="project-topline">
        <span className="project-number">{project.number}</span>
        <span className="project-arrow">↗</span>
      </div>
      <div>
        <p className="project-kicker">{project.subtitle}</p>
        <h3>{project.title}</h3>
        <p className="project-description">{project.description}</p>
      </div>
      <p className="project-impact">{project.impact}</p>
      <div className="tag-list">
        {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
      </div>
      {project.cta && <span className="project-cta">{project.cta} ↗</span>}
    </article>
  );

  if (!project.href) return body;
  return <a className="project-link" href={project.href} target="_blank" rel="noreferrer">{body}</a>;
}
