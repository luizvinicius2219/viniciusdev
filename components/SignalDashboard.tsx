"use client";

import { useMemo } from "react";
import { Icon } from "@/components/Icon";
import { LocationGlobe } from "@/components/LocationGlobe";
import { QuoteSamurai } from "@/components/QuoteSamurai";
import { VinylPlayer } from "@/components/VinylPlayer";
import { profile } from "@/data/portfolio";
import { workGithubActivity } from "@/data/githubActivity";

function activityLevel(count: number) {
  if (count <= 0) return 0;
  if (count <= 2) return 1;
  if (count <= 5) return 2;
  if (count <= 14) return 3;
  return 4;
}

export function SignalDashboard() {
  const days = useMemo(() => {
    const end = new Date(`${workGithubActivity.snapshotDate}T00:00:00Z`);
    const start = new Date(end);
    start.setUTCDate(end.getUTCDate() - 370);

    return Array.from({ length: 371 }, (_, index) => {
      const date = new Date(start);
      date.setUTCDate(start.getUTCDate() + index);
      const key = date.toISOString().slice(0, 10);
      const count = workGithubActivity.daily[key] ?? 0;
      return { key, count, level: activityLevel(count) };
    });
  }, []);

  return (
    <section className="section-shell signal-dashboard signal-dashboard--v7 section-block" aria-label="Localização, música, agenda e atividade">
      <div className="dashboard-row dashboard-row--media">
        <LocationGlobe />
        <VinylPlayer />
      </div>

      <div className="dashboard-row dashboard-row--activity">
        <a className="bento-card meeting-card meeting-card--v7 magnetic" data-cursor="BOOK" data-reveal href={profile.calendar} target="_blank" rel="noreferrer">
          <div className="meeting-calendar meeting-calendar--v7" aria-hidden="true">
            <span>09:00</span><span>10:00</span><span className="meeting-slot">11:00 <i /></span><span>12:00</span>
          </div>
          <div className="meeting-copy"><Icon name="calendar" /><div><small>VAMOS CONVERSAR</small><strong>Marque uma reunião comigo</strong><p>Escolha um horário disponível no Cal.com</p></div><Icon name="arrow" /></div>
        </a>

        <a className="bento-card contribution-card contribution-card--v7 contribution-card--work magnetic" data-cursor="GITHUB" data-reveal href={workGithubActivity.url} target="_blank" rel="noreferrer">
          <div className="contrib-header">
            <span><Icon name="github" /> WORK GITHUB ACTIVITY</span>
            <div><strong>{workGithubActivity.displayTotal.toLocaleString("pt-BR")}</strong><small>COMMITS</small></div>
          </div>
          <h3>Contribuições da conta corporativa</h3>
          <div className="contribution-grid contribution-grid--work" aria-label="Atividade de commits dos últimos 371 dias">
            {days.map((day, index) => (
              <i
                key={day.key}
                data-level={day.level}
                title={`${day.key}: ${day.count} commit${day.count === 1 ? "" : "s"}`}
                style={{ animationDelay: `${(index % 19) * 45}ms` }}
              />
            ))}
          </div>
          <div className="contrib-footer">
            <span>github.com/{workGithubActivity.account} · {workGithubActivity.repositories} repositórios · total informado</span>
            <span>snapshot {workGithubActivity.snapshotDate.split("-").reverse().join("/")} ↗</span>
          </div>
        </a>
      </div>

      <QuoteSamurai />

      <div className="dashboard-row dashboard-row--connect" data-reveal>
        <article className="bento-card compact-contact-card">
          <div><small>CONTACT</small><strong>Vamos conversar sobre dados, automação ou novos produtos.</strong></div>
          <a className="compact-contact-cta magnetic" data-cursor="MAIL" href={`mailto:${profile.publicEmail}`}><Icon name="mail" /> Enviar mensagem <Icon name="arrow" /></a>
        </article>

        <div className="compact-socials">
          <a className="bento-card magnetic" data-cursor="LINKEDIN" href={profile.linkedin} target="_blank" rel="noreferrer"><Icon name="linkedin" /><span>LinkedIn</span></a>
          <a className="bento-card magnetic" data-cursor="GITHUB" href={profile.github} target="_blank" rel="noreferrer"><Icon name="github" /><span>GitHub</span></a>
          <a className="bento-card magnetic" data-cursor="INSTAGRAM" href={profile.instagram} target="_blank" rel="noreferrer"><Icon name="instagram" /><span>Instagram</span></a>
          <a className="bento-card magnetic" data-cursor="ORCID" href={profile.orcid} target="_blank" rel="noreferrer"><Icon name="orcid" /><span>ORCID</span></a>
        </div>
      </div>
    </section>
  );
}
