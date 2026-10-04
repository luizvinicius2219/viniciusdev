export type Experience = {
  company: string;
  role: string;
  period: string;
  location: string;
  summary: string;
  tags: string[];
  metrics?: { value: string; label: string }[];
  highlights?: { title: string; description: string; metric?: string; icon?: string }[];
};

export type Project = {
  number: string;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  impact: string;
  tags: string[];
  href?: string;
  github?: string;
  cta?: string;
  featured?: boolean;
};

export const profile = {
  name: "Luiz Vinícius",
  shortName: "Luiz V.",
  role: "Data Engineer",
  headline: "Data Engineer & Data Analyst | ETL • Data Pipelines • Data Modeling | Python | SQL | GCP | SAP | Automation, APIs & Web Scraping | Palestrante | Qlik",
  summary:
    "Data Engineer com atuação em SQL, Python, GCP/BigQuery, SAP S/4HANA, Power BI, PostgreSQL, ETL, APIs e construção de pipelines. Nos projetos mais recentes, foco em Auditoria Contínua, Monitoramento Contínuo, exceções, automação de papéis de trabalho e IA Generativa aplicada a processos reais.",
  location: "Recife, PE · Brasil",
  publicEmail: "devluizvinicius@gmail.com",
  github: "https://github.com/luizvinicius2219",
  linkedin: "https://www.linkedin.com/in/devluizvinicius/",
  youtube: "https://www.youtube.com/@VinickDev",
  instagram: "https://www.instagram.com/vinick.dev/",
  orcid: "https://orcid.org/0009-0000-0637-6824",
  calendar: "https://cal.com/luiz-vinicius-o3tez5",
  spotify: "https://open.spotify.com/track/4qvUtYRNwmFzfJ2loWkQCH",
  mascot: "/mascote-luiz-vinicius.png",
  speakerPhoto: "/palestra-luiz-vinicius.jpg",
  avatar: "https://avatars.githubusercontent.com/u/70649351?v=4",
  quote: "Não sei nada sobre superar os outros. Só sei superar a mim mesmo.",
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
    metrics: [
      { value: "60–75%", label: "redução estimada de esforço por teste no SAM" },
      { value: ">R$ 14 mi", label: "inventários atendidos pelo AuditCount" },
      { value: ">50%", label: "das unidades visitadas na implantação nacional" },
    ],
    highlights: [
      {
        title: "SAM · Auditoria & Monitoramento Contínuo",
        description: "Plataforma que conecta testes, anomalias, evidências, comunicação, respostas da gestão e planos de ação em um único fluxo rastreável.",
        metric: "60–75% menos esforço por teste",
        icon: "layers",
      },
      {
        title: "AuditCount / ContaEstoque",
        description: "Aplicação multiusuário para posição de estoque, contagem, divergências, evidências, termos, leitura de código de barras e geração do papel de trabalho.",
        metric: "6–12h economizadas no pós-contagem",
        icon: "database",
      },
      {
        title: "Análise e Relatórios de Fraude",
        description: "Triagem de documentos, análise de metadados de PDFs e IA contextual para apoiar investigação, redação técnica e identificação de lacunas de evidência.",
        metric: ">50% menos esforço na estruturação do relatório",
        icon: "research",
      },
      {
        title: "Biblioteca de Auditoria Contínua",
        description: "Testes SQL e Python para finanças, contabilidade, comercial, faturamento, estoque, logística e cadastros executados de forma reproduzível.",
        metric: "cobertura recorrente de exceções",
        icon: "terminal",
      },
    ],
  },
  {
    company: "Grupo Parvi",
    role: "Data Engineer",
    period: "Mai/2024 — Dez/2025",
    location: "Recife, PE",
    summary:
      "Atuação end-to-end em dados: coleta, ingestão, transformação, Data Warehouse, Analysis Services e Power BI, com forte foco em automação e integração de fontes corporativas e externas.",
    tags: ["Pentaho", "Jenkins", "Python", "SQL", "Power BI", "Selenium"],
    metrics: [
      { value: "até 60%", label: "de redução em determinadas cargas" },
      { value: "20+", label: "automações Python/Selenium" },
      { value: "120+", label: "concessionárias monitoradas" },
    ],
    highlights: [
      {
        title: "Pipelines & Data Warehouse",
        description: "Pipelines com Pentaho, SQL, procedures e Jenkins, trabalhando com staging, camadas intermediárias, Data Warehouse e otimização de cargas.",
        metric: "até 60% de redução em cargas selecionadas",
        icon: "database",
      },
      {
        title: "Automações em Python & Selenium",
        description: "Coleta, tratamento, consolidação e preparação de dados provenientes de sistemas internos e fontes externas.",
        metric: "20+ automações",
        icon: "code",
      },
      {
        title: "Experiência do Cliente em escala",
        description: "Integração de Reclame Aqui, Google e plataformas de NPS para alimentar dashboards de acompanhamento da rede.",
        metric: "120+ concessionárias",
        icon: "chart",
      },
      {
        title: "Frota, telemetria & financeiro",
        description: "Soluções de abastecimento, conciliação, telemetria, títulos, documentos não compensados e reportes padronizados para diretoria.",
        metric: "operações convertidas em dados acionáveis",
        icon: "sparkles",
      },
    ],
  },
  {
    company: "Grupo Parvi",
    role: "Data Analyst Intern",
    period: "Set/2023 — Mai/2024",
    location: "Recife, PE",
    summary:
      "Desenvolvimento de análises, automações e integrações para processos operacionais, financeiros, experiência do cliente e Departamento Pessoal, antes da evolução para Data Engineer.",
    tags: ["Python", "SQL", "Power BI", "RPA", "ETL"],
    metrics: [{ value: "base", label: "para evolução à engenharia de dados" }],
    highlights: [
      {
        title: "Analytics & BI",
        description: "Dashboards, medidas e indicadores conectando múltiplas fontes para áreas operacionais e administrativas.",
        icon: "chart",
      },
      {
        title: "Controles de DP",
        description: "Relatórios de acompanhamento para cotas de PCD e Jovem Aprendiz, transformando bases sem mensuração consolidada em indicadores.",
        icon: "briefcase",
      },
    ],
  },
];

export const projects: Project[] = [
  {
    number: "01",
    slug: "sam",
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
    slug: "auditcount",
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
    slug: "fraude",
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
    slug: "auditoria-continua",
    title: "Biblioteca de Auditoria Contínua & Analytics",
    subtitle: "Regras de auditoria transformadas em software",
    description:
      "Biblioteca de testes SQL e Python para processos financeiros, contábeis, comerciais, faturamento, estoques, logística e cadastros, com execução recorrente e análise de exceções.",
    impact: "Maior cobertura analítica e menor dependência de extrações manuais.",
    tags: ["SQL", "Python", "BigQuery", "SAP S/4HANA", "GCP", "pandas"],
  },
  {
    number: "05",
    slug: "fipei",
    title: "Fipei",
    subtitle: "Consulta FIPE em lote com exportação",
    description:
      "Aplicação web para consultar códigos FIPE manualmente ou via arquivo, com normalização, concorrência controlada, tratamento de erros e exportação JSON/CSV.",
    impact: "Projeto público full-stack focado em integração com API e UX simples.",
    tags: ["Node.js", "Express", "JavaScript", "REST API", "Vercel"],
    href: "https://fipei.vercel.app/",
    github: "https://github.com/luizvinicius2219/Fipei",
    cta: "Abrir demo",
  },
  {
    number: "06",
    slug: "controle-frotas",
    title: "Controle de Frotas · Parvi Auditoria",
    subtitle: "Operação antes manual, agora centralizada",
    description:
      "Aplicação multiplataforma que substituiu controles por planilhas e centralizou status de veículos, atualização em tempo real e rastreabilidade operacional.",
    impact: "Menos retrabalho, maior padronização e informação operacional em tempo real.",
    tags: ["AppSheet", "SQL", "Automação", "Auditoria"],
    href: "https://github.com/luizvinicius2219/CONTROLE-DE-FROTAS",
    github: "https://github.com/luizvinicius2219/CONTROLE-DE-FROTAS",
    cta: "Ver repositório",
  },
];

export const stackGroups = [
  {
    label: "Data Engineering",
    short: "DATA",
    description: "Ingestão, transformação, qualidade, modelagem e pipelines.",
    items: ["Python", "SQL", "PL/SQL", "pandas", "ETL", "BigQuery", "PostgreSQL", "SQL Server", "SAP HANA", "SAP S/4HANA"],
  },
  {
    label: "Backend & APIs",
    short: "BACK",
    description: "Serviços, integrações e persistência para produtos internos.",
    items: ["FastAPI", "SQLModel", "APIs REST", "PostgreSQL", "Supabase", "JWT", "OpenPyXL"],
  },
  {
    label: "Automation",
    short: "AUTO",
    description: "Rotinas repetitivas convertidas em software e jobs observáveis.",
    items: ["Python", "Selenium", "Jenkins", "Airflow", "Pentaho", "RPA", "OpenPyXL"],
  },
  {
    label: "Analytics & BI",
    short: "BI",
    description: "Indicadores, exceções, monitoramento e suporte à decisão.",
    items: ["Power BI", "Qlik", "Analysis Services", "BigQuery", "SQL", "Auditoria Contínua", "Monitoramento Contínuo"],
  },
  {
    label: "Cloud & Delivery",
    short: "OPS",
    description: "Entrega de aplicações e serviços com versionamento e observabilidade.",
    items: ["GCP", "Docker", "Git", "GitHub", "Vercel", "Render", "Supabase"],
  },
  {
    label: "Web & AI",
    short: "APP",
    description: "Interfaces, produtos web e IA aplicada a fluxos reais.",
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
