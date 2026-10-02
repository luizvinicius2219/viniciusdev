import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Luiz Vinícius · Data Engineer",
  description:
    "Portfólio de Luiz Vinícius — Data Engineer com foco em dados, automação, auditoria contínua, analytics e IA.",
  metadataBase: new URL("https://viniciusdev.vercel.app"),
  openGraph: {
    title: "Luiz Vinícius · Data Engineer",
    description: "Dados, automação e produtos para transformar processos em decisões auditáveis.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
