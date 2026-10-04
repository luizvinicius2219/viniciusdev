import { BentoDashboard } from "@/components/BentoDashboard";
import { InteractionLayer } from "@/components/InteractionLayer";
import { Nav } from "@/components/Nav";
import { PersonalGallery } from "@/components/PersonalGallery";
import { SignalDashboard } from "@/components/SignalDashboard";
import { StackSystem } from "@/components/StackSystem";
import { SiteFooter } from "@/components/SiteFooter";

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
      <InteractionLayer />
      <Nav />

      <div className="site-code-rain" aria-hidden="true">
        {stream.concat(stream, stream).map((line, index) => (
          <span
            key={`${line}-${index}`}
            style={{ top: `${2 + index * 5.5}%`, animationDelay: `${index * -1.9}s` }}
          >
            {line}
          </span>
        ))}
      </div>

      <BentoDashboard />
      <StackSystem />
      <SignalDashboard />
      <PersonalGallery />

      <SiteFooter />
    </main>
  );
}
