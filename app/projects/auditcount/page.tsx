import type { Metadata } from "next";
import { InteractionLayer } from "@/components/InteractionLayer";
import { Nav } from "@/components/Nav";
import { SiteFooter } from "@/components/SiteFooter";
import { ProjectCaseGallery } from "@/components/ProjectCaseGallery";
import styles from "./auditcount.module.css";

export const metadata: Metadata = {
  title: "AuditCount · Case Study | Luiz Vinícius",
  description: "Case study do AuditCount: plataforma web multiusuário para inventários, contagem em campo, evidências, termos, analytics e automação do pós-contagem.",
};

const gallery = [
  { src: "/projects/auditcount/01-login.webp", title: "Acesso ao AuditCount", caption: "Entrada da plataforma interna com autenticação e fluxo dedicado às rotinas de auditoria." },
  { src: "/projects/auditcount/02-dashboard.webp", title: "Dashboard operacional", caption: "Visão central dos módulos, pendências e atalhos usados no trabalho de campo." },
  { src: "/projects/auditcount/03-historico.webp", title: "Histórico de auditorias", caption: "Consulta rastreável das auditorias realizadas, com filtros e acesso rápido aos registros." },
  { src: "/projects/auditcount/04-termo.webp", title: "Termo de inventário", caption: "Geração estruturada de termo e consolidação do resultado do inventário em um único fluxo." },
  { src: "/projects/auditcount/05-evidencias.webp", title: "Evidências fotográficas", caption: "Fotos e evidências anexadas diretamente ao processo, reduzindo arquivos paralelos e retrabalho." },
  { src: "/projects/auditcount/06-contagem.webp", title: "Contagem em campo", caption: "Tela operacional para contagem, divergências, justificativas e ações durante o inventário." },
  { src: "/projects/auditcount/07-modulos.webp", title: "Módulos integrados", caption: "Histórico, imobilizados, analytics, prestação de viagem, caixa, e-mail e biblioteca no mesmo produto." },
  { src: "/projects/auditcount/08-analytics.webp", title: "Analytics", caption: "Indicadores e visualizações para apoiar a leitura de divergências e a priorização da análise." },
  { src: "/projects/auditcount/09-imobilizados.webp", title: "Imobilizados", caption: "Contagem e seleção de itens patrimoniais dentro da mesma experiência operacional." },
  { src: "/projects/auditcount/10-nova-auditoria.webp", title: "Criação de auditoria", caption: "Definição do escopo e do modo de trabalho antes do início da execução." },
];

const metrics = [
  ["> R$ 14 mi", "inventários atendidos em operações de grande porte"],
  ["35+ h", "pessoa consumidas apenas na contagem no processo anterior"],
  ["6–12 h", "economia estimada por inventário no pós-contagem"],
  ["> 50%", "das unidades visitadas no rollout nacional"],
];

const features = [
  "Contagem multiusuário em campo",
  "Processamento de arquivos SAP / MB52",
  "Leitura por código de barras em dispositivos móveis",
  "Divergências, justificativas e evidências no mesmo fluxo",
  "Geração de termos e papéis de trabalho",
  "Relatórios em PDF e exportações analíticas",
  "Módulos de Analytics, imobilizados e conferência de caixa",
  "Histórico centralizado e rastreabilidade operacional",
];

export default function AuditCountCasePage() {
  return (
    <main className={styles.page}>
      <InteractionLayer />
      <Nav />

      <div className={styles.gridNoise} aria-hidden="true" />

      <section className={styles.hero}>
        <a className={styles.back} href="/projects">← voltar para projetos</a>
        <div className={styles.heroTop}>
          <div>
            <span className={styles.badge}>SISTEMA INTERNO · CASE 02</span>
            <p className={styles.kicker}>AUDITCOUNT / CONTAESTOQUE</p>
            <h1>Inventário em campo virou <em>produto de software.</em></h1>
            <p className={styles.lead}>Plataforma web multiusuário criada para substituir planilhas paralelas, centralizar a contagem, registrar divergências e evidências e automatizar a geração de termos, papéis de trabalho e análises.</p>
          </div>
          <aside className={styles.heroAside}>
            <span>MEU PAPEL</span>
            <strong>Produto · Arquitetura · Backend · Dados · Rollout</strong>
            <p>Concepção do fluxo, modelagem, APIs, processamento de arquivos SAP, analytics, exportações e implantação em campo.</p>
          </aside>
        </div>

        <div className={styles.metrics}>
          {metrics.map(([value, label]) => <div key={value}><strong>{value}</strong><span>{label}</span></div>)}
        </div>
      </section>

      <section className={styles.splitSection}>
        <div className={styles.sectionLabel}>01 · PROBLEMA</div>
        <div className={styles.sectionCopy}>
          <h2>O processo anterior não escalava.</h2>
          <p>Inventários de grande porte eram executados com múltiplas planilhas distribuídas entre os auditores. Depois da contagem ainda existia uma etapa extensa de consolidação manual, tratamento das divergências, organização de evidências e preparação dos documentos finais.</p>
          <p>Em um inventário acima de R$ 14 milhões, sete auditores consumiam mais de cinco horas apenas na contagem — mais de 35 horas-pessoa antes mesmo da reconciliação e do fechamento documental.</p>
        </div>
      </section>

      <section className={styles.architecture}>
        <div className={styles.sectionLabel}>02 · SOLUÇÃO</div>
        <div className={styles.sectionCopy}>
          <h2>Um fluxo único do SAP ao papel de trabalho.</h2>
          <div className={styles.flow}>
            <span>SAP MB52</span><i>→</i><span>Python / pandas</span><i>→</i><span>FastAPI REST</span><i>→</i><span>SQLModel / PostgreSQL</span><i>→</i><span>Web + Campo</span><i>→</i><span>PDF / Analytics</span>
          </div>
          <p>O sistema processa a posição de estoque, organiza a execução multiusuário, registra contagens e exceções, concentra as evidências e mantém o fechamento no mesmo ambiente. A autenticação usa JWT e o fluxo foi pensado para uso real em estoque, inclusive com leitura por código de barras.</p>
        </div>
      </section>

      <section className={styles.featureSection}>
        <div className={styles.sectionLabel}>03 · CAPACIDADES</div>
        <div className={styles.sectionCopy}>
          <h2>Menos planilha. Mais rastreabilidade.</h2>
          <div className={styles.featureGrid}>{features.map((feature, index) => <div key={feature}><span>{String(index + 1).padStart(2, "0")}</span><p>{feature}</p></div>)}</div>
        </div>
      </section>

      <section className={styles.gallerySection}>
        <div className={styles.galleryHeading}>
          <div><span className={styles.sectionLabel}>04 · PRODUTO</span><h2>O AuditCount em uso.</h2></div>
          <p>As telas abaixo foram tratadas para ocultar nomes, valores, unidades e demais informações operacionais sensíveis.</p>
        </div>
        <ProjectCaseGallery items={gallery} />
      </section>

      <section className={styles.rollout}>
        <div className={styles.sectionLabel}>05 · ROLLOUT</div>
        <div className={styles.sectionCopy}>
          <h2>Construído com feedback de quem usa no estoque.</h2>
          <p>Além do desenvolvimento, participei pessoalmente da implantação nacional do produto. Visitei mais de 50% das unidades da companhia, acompanhei inventários em campo, treinei equipes e trouxe o feedback operacional para dentro do ciclo de evolução do sistema.</p>
          <div className={styles.rolloutCards}>
            <div><strong>Uso nacional</strong><span>padronização do processo entre unidades</span></div>
            <div><strong>Campo → produto</strong><span>feedback direto transformado em melhoria</span></div>
            <div><strong>6–12 h</strong><span>economia estimada no pós-contagem por inventário</span></div>
          </div>
        </div>
      </section>

      <section className={styles.stack}>
        <span>STACK</span>
        <div>{["Python","FastAPI","SQLModel","PostgreSQL","pandas","OpenPyXL","JavaScript","REST APIs","JWT","SAP MB52"].map((item) => <em key={item}>{item}</em>)}</div>
      </section>

      <SiteFooter />
    </main>
  );
}
