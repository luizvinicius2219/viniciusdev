import { Icon } from "@/components/Icon";
import { profile } from "@/data/portfolio";

const footerTech = [
  ["Python", "https://cdn.simpleicons.org/python/FFD43B"],
  ["BigQuery", "https://cdn.simpleicons.org/googlebigquery/669DF6"],
  ["GCP", "https://cdn.simpleicons.org/googlecloud/4285F4"],
  ["PostgreSQL", "https://cdn.simpleicons.org/postgresql/7EA8C9"],
  ["pandas", "https://cdn.simpleicons.org/pandas/FFFFFF"],
  ["Airflow", "https://cdn.simpleicons.org/apacheairflow/017CEE"],
  ["SAP", "https://cdn.simpleicons.org/sap/0FAAFF"],
  ["Qlik", "https://cdn.simpleicons.org/qlik/009848"],
];

export function SiteFooter() {
  return (
    <footer className="footer footer--v9 section-shell">
      <div className="footer-main">
        <div className="footer-identity">
          <strong>Luiz Vinícius <i className="footer-online" /></strong>
          <p>{profile.headline}</p>
          <a href={`mailto:${profile.publicEmail}`}><Icon name="mail" /> {profile.publicEmail}</a>
          <span><span className="status-dot" /> Recife, PE · disponível para dados, automação e produtos</span>
        </div>

        <div className="footer-links footer-links--v8">
          <div>
            <small>NAVEGAR</small>
            <a href="/">Home</a>
            <a href="/#work">Carreira</a>
            <a href="/projects">Projetos</a>
            <a href="/#stack">Tech System</a>
            <a href="/#life">Beyond Work</a>
          </div>
          <div>
            <small>CONECTAR</small>
            <a href={profile.github} target="_blank" rel="noreferrer"><Icon name="github" /> GitHub</a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer"><Icon name="linkedin" /> LinkedIn</a>
            <a href={profile.instagram} target="_blank" rel="noreferrer"><Icon name="instagram" /> Instagram</a>
            <a href={profile.orcid} target="_blank" rel="noreferrer"><Icon name="orcid" /> ORCID</a>
            <a href={profile.calendar} target="_blank" rel="noreferrer"><Icon name="calendar" /> Cal.com</a>
          </div>
        </div>
      </div>

      <div className="footer-tech footer-tech--data" aria-label="Stack principal de engenharia de dados">
        <div className="footer-tech-copy">
          <small>DATA ENGINEERING TOOLCHAIN</small>
          <p>Pipelines, modelagem, analytics e automação construídos com ferramentas do ecossistema de dados.</p>
        </div>
        <div>
          {footerTech.map(([name, src]) => (
            <span key={name} title={name}><img src={src} alt="" /><b>{name}</b></span>
          ))}
        </div>
      </div>

      <div className="footer-bottom">
        <span>© 2026 Luiz Vinícius · data systems · pipelines · automation</span>
        <a href="#home" className="footer-up magnetic" data-cursor="TOP" aria-label="Voltar ao topo"><Icon name="arrow" /></a>
      </div>
    </footer>
  );
}
