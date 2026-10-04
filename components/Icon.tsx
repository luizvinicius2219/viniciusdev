import type { ReactNode, SVGProps } from "react";

type IconName =
  | "home" | "briefcase" | "layers" | "book" | "file" | "sun" | "moon"
  | "github" | "linkedin" | "instagram" | "youtube" | "mail" | "orcid"
  | "arrow" | "external" | "calendar" | "map" | "music" | "research"
  | "copy" | "check" | "close" | "chevronLeft" | "chevronRight" | "terminal"
  | "database" | "code" | "chart" | "sparkles" | "download";

export function Icon({ name, ...props }: { name: IconName } & SVGProps<SVGSVGElement>) {
  const common = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
    ...props,
  };

  const paths: Record<IconName, ReactNode> = {
    home: <><path d="M3 11.5 12 4l9 7.5"/><path d="M5.5 10.5V20h13v-9.5"/><path d="M9.5 20v-6h5v6"/></>,
    briefcase: <><rect x="3" y="7" width="18" height="12" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><path d="M3 12h18"/></>,
    layers: <><path d="m12 3 8 4-8 4-8-4 8-4Z"/><path d="m4 12 8 4 8-4"/><path d="m4 17 8 4 8-4"/></>,
    book: <><path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H11v16H6.5A2.5 2.5 0 0 0 4 21.5v-16Z"/><path d="M20 5.5A2.5 2.5 0 0 0 17.5 3H13v16h4.5A2.5 2.5 0 0 1 20 21.5v-16Z"/></>,
    file: <><path d="M6 2h8l4 4v16H6z"/><path d="M14 2v5h5"/><path d="M9 12h6M9 16h6"/></>,
    sun: <><circle cx="12" cy="12" r="3.5"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/></>,
    moon: <path d="M21 15.5A9 9 0 0 1 8.5 3 9.5 9.5 0 1 0 21 15.5Z"/>,
    github: <><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3.3-.4 6.8-1.6 6.8-7.3A5.7 5.7 0 0 0 19.3 3 5.3 5.3 0 0 0 19.1 0S17.9-.4 15 1.6a13.4 13.4 0 0 0-6 0C6.1-.4 4.9 0 4.9 0A5.3 5.3 0 0 0 4.7 3a5.7 5.7 0 0 0-1.5 4.2c0 5.7 3.5 6.9 6.8 7.3A4.8 4.8 0 0 0 9 18v4"/><path d="M9 19c-3 .9-3-1.5-4.2-2"/></>,
    linkedin: <><rect x="3" y="9" width="4" height="12"/><circle cx="5" cy="5" r="2"/><path d="M11 21V9h4v2c1-1.6 2.4-2.3 4.1-2.1 2.3.3 2.9 2.1 2.9 4.6V21h-4v-6.5c0-1.8-.6-2.8-1.9-2.8-1.4 0-2.1 1.1-2.1 3.1V21z"/></>,
    instagram: <><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></>,
    youtube: <><path d="M22 12s0-4-1-5-5-1-9-1-8 0-9 1-1 5-1 5 0 4 1 5 5 1 9 1 8 0 9-1 1-5 1-5Z"/><path d="m10 9 5 3-5 3Z" fill="currentColor" stroke="none"/></>,
    mail: <><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></>,
    orcid: <><circle cx="12" cy="12" r="9"/><path d="M8 9v7M8 6.7v.1M11 9h2.5a3.5 3.5 0 0 1 0 7H11z"/></>,
    arrow: <><path d="M5 12h14"/><path d="m13 6 6 6-6 6"/></>,
    external: <><path d="M14 5h5v5"/><path d="M10 14 19 5"/><path d="M19 13v6H5V5h6"/></>,
    calendar: <><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M8 3v4M16 3v4M3 10h18"/><path d="M8 14h2M14 14h2M8 17h2M14 17h2"/></>,
    map: <><path d="m3 6 6-3 6 3 6-3v15l-6 3-6-3-6 3V6Z"/><path d="M9 3v15M15 6v15"/></>,
    music: <><path d="M9 18V5l10-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="16" cy="16" r="3"/></>,
    research: <><circle cx="10" cy="10" r="6"/><path d="m14.5 14.5 5 5"/><path d="M8 10h4M10 8v4"/></>,
    copy: <><rect x="8" y="8" width="11" height="11" rx="2"/><path d="M16 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h3"/></>,
    check: <path d="m5 12 4 4L19 6"/>,
    close: <path d="M5 5l14 14M19 5 5 19"/>,
    chevronLeft: <path d="m15 18-6-6 6-6"/>,
    chevronRight: <path d="m9 18 6-6-6-6"/>,
    terminal: <><path d="m4 6 5 6-5 6"/><path d="M11 18h9"/></>,
    database: <><ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v6c0 1.7 3.6 3 8 3s8-1.3 8-3V5"/><path d="M4 11v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6"/></>,
    code: <><path d="m8 9-3 3 3 3"/><path d="m16 9 3 3-3 3"/><path d="m14 6-4 12"/></>,
    chart: <><path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/></>,
    sparkles: <><path d="m12 3 1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5L12 3Z"/><path d="m19 15 .8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8L19 15Z"/></>,
    download: <><path d="M12 3v12"/><path d="m7 10 5 5 5-5"/><path d="M5 21h14"/></>,
  };

  return <svg {...common}>{paths[name]}</svg>;
}
