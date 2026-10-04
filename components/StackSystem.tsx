"use client";

import { useMemo, useState } from "react";
import type { CSSProperties } from "react";
import { Icon } from "@/components/Icon";
import { stackGroups } from "@/data/portfolio";

const icons: Record<string, string> = {
  Python: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
  PostgreSQL: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
  Docker: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
  Git: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
  GitHub: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
  React: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
  "Next.js": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
  JavaScript: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
  TypeScript: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
  Selenium: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/selenium/selenium-original.svg",
  "SQL Server": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/microsoftsqlserver/microsoftsqlserver-original.svg",
  "Power BI": "https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg",
  GCP: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-original.svg",
  Supabase: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg",
  Jenkins: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jenkins/jenkins-original.svg",
  FastAPI: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg",
  pandas: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg",
  Airflow: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/apacheairflow/apacheairflow-original.svg",
};

function StackMark({ name }: { name: string }) {
  const src = icons[name];
  if (src) return <img src={src} alt="" />;
  if (/sql|hana|bigquery|analysis/i.test(name)) return <Icon name="database" />;
  if (/api|fastapi|react|next|javascript|typescript/i.test(name)) return <Icon name="code" />;
  if (/power|qlik|monitor|audit/i.test(name)) return <Icon name="chart" />;
  return <Icon name="sparkles" />;
}

export function StackSystem() {
  const [active, setActive] = useState(0);
  const flat = useMemo(
    () => stackGroups.flatMap((group, groupIndex) => group.items.map((name) => ({ name, groupIndex, group: group.label }))),
    []
  );
  const activeGroup = stackGroups[active];

  return (
    <section id="stack" className="section-shell section-block stack-system" data-reveal>
      <div className="section-heading section-heading--compact">
        <div><p className="eyebrow">TECH SYSTEM</p><h2>Camadas que trabalham juntas.</h2></div>
        <p>Passe o mouse pelas tecnologias. O sistema destaca a camada onde elas entram no produto.</p>
      </div>

      <div className="stack-console">
        <div className="stack-layers" aria-label="Camadas da stack">
          {stackGroups.map((group, index) => (
            <button
              type="button"
              className={`stack-layer ${active === index ? "is-active" : ""}`}
              style={{ "--layer": index } as CSSProperties}
              onMouseEnter={() => setActive(index)}
              onFocus={() => setActive(index)}
              onClick={() => setActive(index)}
              key={group.label}
              data-cursor="LAYER"
            >
              <span>{group.short}</span>
              <b>{group.label}</b>
            </button>
          ))}
        </div>

        <div className="stack-inspector">
          <div className="stack-inspector__head">
            <div><small>ACTIVE LAYER</small><strong>{activeGroup.label}</strong><p>{activeGroup.description}</p></div>
            <span>{String(active + 1).padStart(2, "0")}/{String(stackGroups.length).padStart(2, "0")}</span>
          </div>

          <div className="stack-active-items">
            {activeGroup.items.map((item) => (
              <span key={item}><StackMark name={item} /><b>{item}</b></span>
            ))}
          </div>

          <div className="stack-marquee" aria-label="Carrossel de tecnologias">
            <div className="stack-track stack-track--a">
              {[...flat, ...flat].map((item, index) => (
                <button
                  type="button"
                  key={`a-${item.name}-${index}`}
                  className={active === item.groupIndex ? "is-active" : ""}
                  onMouseEnter={() => setActive(item.groupIndex)}
                  onFocus={() => setActive(item.groupIndex)}
                  title={`${item.name} · ${item.group}`}
                  data-cursor="STACK"
                ><StackMark name={item.name} /><span>{item.name}</span></button>
              ))}
            </div>
            <div className="stack-track stack-track--b">
              {[...flat].reverse().concat([...flat].reverse()).map((item, index) => (
                <button
                  type="button"
                  key={`b-${item.name}-${index}`}
                  className={active === item.groupIndex ? "is-active" : ""}
                  onMouseEnter={() => setActive(item.groupIndex)}
                  onFocus={() => setActive(item.groupIndex)}
                  title={`${item.name} · ${item.group}`}
                  data-cursor="STACK"
                ><StackMark name={item.name} /><span>{item.name}</span></button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
