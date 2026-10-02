export type Experience = {
  company: string;
  role: string;
  period: string;
  location: string;
  summary: string;
  tags: string[];
};

export type Project = {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  impact: string;
  tags: string[];
  href?: string;
  cta?: string;
  featured?: boolean;
};

export const profile = {
  name: "Luiz Vinícius",
  shortName: "Luiz V.",
  role: "Data Engineer",
  headline: "Dados, automação e produtos para transformar processos em decisões auditáveis.",
  summary:
    "Data Engineer com experiência em engenharia e análise de dados, automação de processos e desenvolvimento de soluções corporativas. Minha atuação conecta SQL, Python, GCP/BigQuery, SAP S/4HANA, APIs, BI e IA Generativa para criar pipelines, monitoramentos e produtos de Auditoria Contínua.",
  location: "Recife, PE · Brasil",
  publicEmail: "devluizvinicius@gmail.com",
  github: "https://github.com/luizvinicius2219",
  linkedin: "https://www.linkedin.com/in/devluizvinicius/",
  youtube: "https://www.youtube.com/@VinickDev",
  avatar: "https://avatars.githubusercontent.com/u/70649351?v=4",
};

export const experiences: Experience[] = [
  {
    company: "Magnum Tires",
    role: "Data Engineer Pleno · Dados, Automação e Soluções para Auditoria",
    period: "Dez/2025 — Atual",
    location: "Recife, PE",
    summary:
      "Construção de soluções de dados, automações e aplicações para Auditoria Interna, transformando dados SAP S/4HANA e GCP/BigQuery em testes, indicadores, exceções, monitoramentos e análises de risco.",
    tags: ["BigQuery", "SAP S/4HANA", "Python", "SQL", "FastAPI", "Auditoria Contínua"],
  },
  {
    company: "Grupo Parvi",
    role: "Data Engineer",
    period: "Mai/2024 — Dez/2025",
    location: "Recife, PE",
    summary:
      "Atuação end-to-end em dados: ingestão, transformação, Data Warehouse, Analysis Services e Power BI, com forte foco em automação, integração de fontes e otimização de cargas.",
    tags: ["Pentaho", "Jenkins", "Python", "SQL", "Power BI", "Selenium"],
  },
  {
    company: "Grupo Parvi",
    role: "Data Analyst Intern",
    period: "Set/2023 — Mai/2024",
    location: "Recife, PE",
    summary:
      "Desenvolvimento de análises, automações e integrações que apoiaram processos operacionais, financeiros, experiência do cliente e Departamento Pessoal.",
    tags: ["Python", "SQL", "Power BI", "RPA", "ETL"],
  },
];

export const projects: Project[] = [
  {
    number: "01",
    title: "SAM · Sistema de Auditoria e Monitoramento Contínuo",
    subtitle: "Auditoria como produto de dados",
    description:
      "Plataforma que centraliza execução de testes, seleção de anomalias, papéis de trabalho, evidências, comunicação com áreas responsáveis, respostas da gestão e planos de ação em um único fluxo.",
    impact: "Redução estimada de 60% a 75% no esforço operacional por teste.",
    tags: ["Python", "BigQuery", "PostgreSQL", "Airflow", "Jenkins", "OpenAI API"],
    featured: true,
  },
  {
    number: "02",
    title: "AuditCount / ContaEstoque",
    subtitle: "Inventário operacional multiusuário",
    description:
      "Aplicação web para posição de estoque, contagens, divergências, justificativas, fotos, evidências, termos e papel de trabalho, com tratamento de arquivos SAP/MB52 e leitura por código de barras.",
    impact: "Economia estimada de 6 a 12 horas por inventário no pós-contagem.",
    tags: ["FastAPI", "SQLModel", "PostgreSQL", "pandas", "OpenPyXL", "JWT"],
    featured: true,
  },
  {
    number: "03",
    title: "Plataforma de Análise e Relatórios de Fraude",
    subtitle: "Evidência, investigação e IA Generativa",
    description:
      "Estrutura o papel de trabalho de fraude, centraliza casos e evidências, analisa metadados e características internas de PDFs e usa IA contextual para apoiar análise e redação técnica.",
    impact: "Triagem documental com redução estimada de 60% a 75% no esforço operacional.",
    tags: ["React", "Vite", "FastAPI", "Supabase", "OpenAI API", "PyMuPDF"],
    featured: true,
  },
  {
    number: "04",
    title: "Biblioteca de Auditoria Contínua & Analytics",
    subtitle: "Regras de auditoria transformadas em software",
    description:
      "Biblioteca de testes SQL e Python para processos financeiros, contábeis, comerciais, faturamento, estoques, logística e cadastros, com execução recorrente e análise de exceções.",
    impact: "Maior cobertura analítica e menor dependência de extrações manuais.",
    tags: ["SQL", "Python", "BigQuery", "SAP S/4HANA", "GCP", "pandas"],
  },
  {
    number: "05",
    title: "Fipei",
    subtitle: "Consulta FIPE em lote com exportação",
    description:
      "Aplicação web para consultar códigos FIPE manualmente ou via arquivo, com normalização, concorrência controlada, tratamento de erros e exportação JSON/CSV.",
    impact: "Projeto público full-stack focado em integração com API e UX simples.",
    tags: ["Node.js", "Express", "JavaScript", "REST API", "Vercel"],
    href: "https://fipei.vercel.app/",
    cta: "Abrir demo",
  },
  {
    number: "06",
    title: "Controle de Frotas · Parvi Auditoria",
    subtitle: "Operação antes manual, agora centralizada",
    description:
      "Aplicação multiplataforma que substituiu controles por planilhas e centralizou status de veículos, atualização em tempo real e rastreabilidade operacional.",
    impact: "Menos retrabalho, maior padronização e informação operacional em tempo real.",
    tags: ["AppSheet", "SQL", "Automação", "Auditoria"],
    href: "https://github.com/luizvinicius2219/CONTROLE-DE-FROTAS",
    cta: "Ver repositório",
  },
];

export const stackGroups = [
  {
    label: "Data & Engineering",
    items: ["Python", "SQL", "pandas", "ETL", "BigQuery", "PostgreSQL", "SQL Server", "SAP HANA"],
  },
  {
    label: "Backend & Automation",
    items: ["FastAPI", "SQLModel", "APIs REST", "Selenium", "Airflow", "Jenkins", "Pentaho"],
  },
  {
    label: "Analytics",
    items: ["Power BI", "Qlik", "Analysis Services", "Auditoria Contínua", "Monitoramento Contínuo"],
  },
  {
    label: "Cloud & Delivery",
    items: ["GCP", "Supabase", "Docker", "Git", "GitHub", "Vercel", "Render"],
  },
  {
    label: "Web & AI",
    items: ["React", "Next.js", "JavaScript", "TypeScript", "OpenAI API", "IA Generativa"],
  },
];

export const education = [
  { title: "Sistemas de Informação", place: "UNINASSAU", period: "2020 — 2024" },
  { title: "Análise e Desenvolvimento de Sistemas", place: "Ampli", period: "2024 — 2026" },
  { title: "Bootcamp FAP 2026", place: "Formação complementar", period: "2026" },
];

export const publicRepos = [
  "Fipei",
  "CONTROLE-DE-FROTAS",
  "Vacina-o-Covid-19",
  "Teste-Dados-Touti",
  "RPA-Google",
  "FAP-ATIVIDADE",
  "Larissakich",
];
