import { ContactForm } from "@/components/ContactForm";
import { LocalClock } from "@/components/LocalClock";
import { Nav } from "@/components/Nav";
import { ProjectCard } from "@/components/ProjectCard";
import { education, experiences, profile, projects, publicRepos, stackGroups } from "@/data/portfolio";

const stream = [
  "SELECT * FROM audit_exceptions WHERE risk = 'high';",
  "pipeline.run(source='sap', target='bigquery')",
  "anomaly_score = model.predict(features)",
  "await api.monitor_continuous_controls()",
  "df.groupby('centro').agg({'despesa': 'sum'})",
  "git commit -m 'turning controls into software'",
];

export default function Home() {
  return (
    <main>
      <Nav />

      <section id="home" className="hero section-shell">
        <div className="code-haze" aria-hidden="true">
          {stream.concat(stream).map((line, index) => (
            <span key={`${line}-${index}`} style={{ top: `${8 + index * 8}%`, animationDelay: `${index * -2.3}s` }}>
              {line}
            </span>
          ))}
        </div>

        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">DATA ENGINEER · ANALYTICS · AUTOMATION · CONTINUOUS AUDIT</p>
            <h1>
              Luiz
              <br />
              <span>Vinícius.</span>
            </h1>
            <p className="hero-role">{profile.role}</p>
            <p className="hero-summary">{profile.headline}</p>
            <div className="hero-actions">
              <a className="button button--primary" href="#projects">Explorar projetos</a>
              <a className="button button--ghost" href="/curriculo-luiz-vinicius.pdf" target="_blank" rel="noreferrer">Abrir currículo ↗</a>
            </div>
          </div>

          <aside className="hero-terminal" aria-label="Resumo profissional">
            <div className="terminal-bar">
              <div><i /><i /><i /></div>
              <span>luiz@viniciusdev: ~/portfolio</span>
            </div>
            <div className="terminal-body">
              <p><b>$ whoami</b></p>
              <p>{profile.summary}</p>
              <p><b>$ focus --now</b></p>
              <p>Data products · Audit automation · AI-assisted workflows</p>
              <p><b>$ status</b></p>
              <p><span className="status-dot" /> available for challenging data problems</p>
            </div>
          </aside>
        </div>

        <div className="hero-meta">
          <div><span>BASE</span><strong>{profile.location}</strong></div>
          <div><span>LOCAL TIME</span><strong><LocalClock /></strong></div>
          <div><span>STACK MODE</span><strong>build · measure · automate</strong></div>
        </div>
      </section>

      <section id="work" className="section-shell section-block">
        <div className="section-heading">
          <div>
            <p className="eyebrow">RESUME</p>
            <h2>git log --career</h2>
          </div>
          <p>Uma carreira construída entre engenharia de dados, automação, analytics e controles que precisam funcionar no mundo real.</p>
        </div>

        <div className="career-shell">
          <div className="career-rail" aria-hidden="true" />
          {experiences.map((experience, index) => (
            <article className="career-item" key={`${experience.company}-${experience.period}`}>
              <div className="career-marker">{String(index + 1).padStart(2, "0")}</div>
              <div className="career-date">{experience.period}</div>
              <div className="career-card">
                <p className="career-company">{experience.company}</p>
                <h3>{experience.role}</h3>
                <p>{experience.summary}</p>
                <div className="tag-list">
                  {experience.tags.map((tag) => <span key={tag}>{tag}</span>)}
                </div>
                <small>{experience.location}</small>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="projects" className="section-shell section-block">
        <div className="section-heading section-heading--projects">
          <div>
            <p className="eyebrow">SELECTED WORK</p>
            <h2>Projetos que viraram operação.</h2>
          </div>
          <div className="repo-count"><strong>{publicRepos.length}+</strong><span>repositórios públicos</span></div>
        </div>
        <div className="project-grid">
          {projects.map((project) => <ProjectCard project={project} key={project.number} />)}
        </div>
      </section>

      <section id="stack" className="section-shell section-block stack-section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">TECH STACK</p>
            <h2>Ferramentas são meios. Entrega é o fim.</h2>
          </div>
          <p>Stack construída para atravessar o caminho completo: fonte, ingestão, transformação, regra, análise, API, automação e interface.</p>
        </div>

        <div className="stack-grid">
          {stackGroups.map((group) => (
            <article className="stack-card" key={group.label}>
              <h3>{group.label}</h3>
              <div className="stack-cloud">
                {group.items.map((item) => <span key={item}>{item}</span>)}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell section-block about-grid">
        <article className="about-card about-card--large">
          <p className="eyebrow">SYSTEM JOURNAL</p>
          <h2>O que eu gosto de construir</h2>
          <p>
            Sistemas que eliminam passos manuais, tornam exceções visíveis e deixam uma trilha de evidência confiável. Meu melhor trabalho costuma nascer quando dados, processo e software precisam conversar.
          </p>
          <div className="manifesto-grid">
            <div><strong>01</strong><span>Automatizar o repetitivo</span></div>
            <div><strong>02</strong><span>Medir antes de opinar</span></div>
            <div><strong>03</strong><span>Projetar para rastreabilidade</span></div>
            <div><strong>04</strong><span>Transformar regra em produto</span></div>
          </div>
        </article>

        <article className="about-card">
          <p className="eyebrow">EDUCATION</p>
          <h2>Formação</h2>
          <div className="education-list">
            {education.map((item) => (
              <div key={item.title}>
                <strong>{item.title}</strong>
                <span>{item.place}</span>
                <small>{item.period}</small>
              </div>
            ))}
          </div>
        </article>
      </section>

      <section className="section-shell section-block github-strip">
        <div>
          <p className="eyebrow">OPEN SOURCE ACTIVITY</p>
          <h2>GitHub como laboratório público.</h2>
          <p>Projetos, estudos e experimentos que complementam as soluções construídas em ambiente corporativo.</p>
        </div>
        <a className="github-profile" href={profile.github} target="_blank" rel="noreferrer">
          <img src={profile.avatar} alt="Avatar de Luiz Vinícius no GitHub" />
          <span><strong>github.com/luizvinicius2219</strong><small>Ver perfil e repositórios ↗</small></span>
        </a>
      </section>

      <section id="contact" className="section-shell section-block contact-section">
        <div className="contact-copy">
          <p className="eyebrow">LET&apos;S BUILD</p>
          <h2>Tem um processo confuso, manual ou difícil de medir?</h2>
          <p>Talvez exista um bom produto de dados escondido aí.</p>
          <a className="contact-email" href={`mailto:${profile.publicEmail}`}>{profile.publicEmail}</a>
          <div className="social-row">
            <a href={profile.github} target="_blank" rel="noreferrer">GitHub ↗</a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a>
            <a href={profile.youtube} target="_blank" rel="noreferrer">YouTube ↗</a>
          </div>
        </div>
        <ContactForm />
      </section>

      <footer className="footer section-shell">
        <div>
          <strong>Luiz Vinícius</strong>
          <span>Data Engineer · Recife, Brasil</span>
        </div>
        <div className="footer-status">
          <span className="status-dot" />
          <span>pipeline: healthy</span>
          <span>checks: passed</span>
          <span>anomalies: monitored</span>
        </div>
        <p>© 2026 · Designed & engineered as a data product.</p>
      </footer>
    </main>
  );
}
