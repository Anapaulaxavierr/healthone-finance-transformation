import type { Metadata } from "next";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { SectionHeading } from "@/components/section-heading";

export const metadata: Metadata = {
  title: "Gestão Inteligente do Fluxo de Caixa | HealthOne",
  description: "Projeto de transformação financeira focado em previsibilidade, automação e indicadores executivos.",
};

const problems = [
  "Baixa previsibilidade do fluxo de caixa",
  "Alto volume de atividades manuais",
  "Informações descentralizadas",
  "Ausência de indicadores executivos",
];

const methodology = ["Diagnóstico", "Mapeamento", "KPIs", "Automação", "Dashboard"];

const indicators = [
  { title: "Saldo de Caixa Atual", summary: "Orienta decisões de liquidez imediata." },
  { title: "Saldo Projetado", summary: "Antecipa riscos financeiros." },
  { title: "Inadimplência", summary: "Direciona ações de cobrança." },
  { title: "Previsto x Realizado", summary: "Evidencia desvios do planejamento." },
  { title: "Pagamentos Críticos", summary: "Prioriza compromissos essenciais." },
];

const technologies = ["TOTVS", "Power Automate", "Excel", "GitHub", "Next.js", "TypeScript"];

const skills = [
  "Business Partner",
  "Controladoria",
  "Fluxo de Caixa",
  "Indicadores",
  "Power Automate",
  "Excel",
  "BPM",
  "Melhoria Contínua",
  "Automação",
];

export default function CashFlowCasePage() {
  return (
    <div className="min-h-screen bg-[#f5f7f7] text-[#102f35]">
      <Header />
      <main>
        <section className="relative isolate overflow-hidden bg-[#0d3137] px-6 py-14 sm:py-16 lg:px-8 lg:py-16">
          <div aria-hidden="true" className="hero-grid absolute inset-0 -z-10 opacity-20" />
          <div className="mx-auto max-w-6xl">
            <span className="inline-flex rounded-full border border-[#8de0c1]/40 bg-[#8de0c1]/10 px-4 py-2 text-[0.68rem] font-bold uppercase tracking-[0.18em] text-[#8de0c1]">Case 01 <span aria-hidden="true" className="mx-2 opacity-60">·</span> Finance Transformation</span>
            <h1 className="mt-6 max-w-4xl text-4xl font-semibold leading-[1.06] tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">Gestão Inteligente do Fluxo de Caixa</h1>
            <p className="mt-4 max-w-3xl text-base leading-7 text-[#c8d8d8] sm:text-lg">Projeto de transformação financeira focado em previsibilidade, automação e indicadores executivos.</p>
            <div className="mt-5 flex flex-wrap gap-2" aria-label="Destaques do Case">
              {["Fluxo de Caixa", "Automação", "Dashboard Executivo"].map((highlight) => (
                <span key={highlight} className="rounded-full border border-white/15 bg-white/[0.05] px-3 py-1.5 text-xs font-medium text-[#d8e6e4]">{highlight}</span>
              ))}
            </div>
            <div className="mt-6 border-t border-white/10 pt-5">
              <p className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-[#8de0c1]">Foco do projeto</p>
              <ul className="mt-3 flex flex-wrap gap-x-7 gap-y-2 text-sm text-[#e6eeee]">
                {["Maior previsibilidade financeira", "Redução de atividades manuais", "Apoio à decisão executiva"].map((impact) => (
                  <li key={impact} className="flex items-center gap-2"><span aria-hidden="true" className="size-1.5 rounded-full bg-[#8de0c1]" />{impact}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="px-6 py-16 sm:py-20 lg:px-8">
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
            <SectionHeading eyebrow="Contexto" title="HealthOne" />
            <div className="space-y-4 text-base leading-7 text-[#4d686e] sm:text-lg">
              <p>Operadora de saúde de médio porte com centenas de pagamentos diários a fornecedores, hospitais, laboratórios e prestadores médicos.</p>
              <p>Embora os registros estejam no <strong className="font-semibold text-[#153a40]">TOTVS</strong>, decisões ainda dependem de controles paralelos em Excel e análises manuais.</p>
            </div>
          </div>
        </section>

        <section className="bg-white px-6 py-16 sm:py-20 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <SectionHeading eyebrow="Diagnóstico" title="Problemas Identificados" />
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {problems.map((problem) => (
                <article key={problem} className="flex min-h-40 flex-col justify-between rounded-2xl border border-[#eadfdf] bg-[#fffafa] p-6">
                  <span aria-hidden="true" className="size-3 rounded-sm bg-[#c75151]" />
                  <h3 className="mt-8 text-lg font-semibold leading-snug text-[#153a40]">{problem}</h3>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-[#dbe4e3] px-6 py-16 sm:py-20 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <SectionHeading eyebrow="Metodologia" title="Da análise à visão executiva" />
            <ol className="mt-10 grid gap-3 lg:grid-cols-5">
              {methodology.map((step, index) => (
                <li key={step} className={`relative flex min-h-28 items-center justify-center rounded-2xl border p-5 text-center text-base font-semibold ${index >= 3 ? "border-[#8bcab5] bg-[#e8f4f0] text-[#174d43]" : "border-[#dbe4e3] bg-white text-[#153a40]"}`}>
                  {step}
                  {index < methodology.length - 1 ? <span aria-hidden="true" className="absolute -bottom-5 z-10 text-xl text-[#62a991] lg:-right-3 lg:bottom-auto lg:top-1/2 lg:-translate-y-1/2 lg:rotate-[-90deg]">↓</span> : null}
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="bg-[#0d3137] px-6 py-16 sm:py-20 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <SectionHeading eyebrow="Indicadores estratégicos" title="Visão diária para decidir melhor" light />
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {indicators.map((indicator) => (
                <article key={indicator.title} className="min-h-44 rounded-2xl border border-white/10 bg-white/[0.06] p-6">
                  <div aria-hidden="true" className="mb-8 h-1 w-10 rounded-full bg-[#8de0c1]" />
                  <h3 className="text-lg font-semibold leading-snug text-white">{indicator.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-[#c8d8d8]">{indicator.summary}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-16 sm:py-20 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <SectionHeading eyebrow="Tecnologias" title="Stack do projeto" />
            <div className="mt-9 flex flex-wrap gap-3">
              {technologies.map((technology) => <span key={technology} className="rounded-full border border-[#bfd4cf] bg-white px-5 py-3 text-sm font-bold text-[#21474d]">{technology}</span>)}
            </div>
          </div>
        </section>

        <section className="bg-[#e8f0ee] px-6 py-16 sm:py-20 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <SectionHeading eyebrow="Perfil profissional" title="Competências Demonstradas" />
            <div className="mt-9 flex flex-wrap gap-3">
              {skills.map((skill) => <span key={skill} className="rounded-full bg-[#0d3137] px-5 py-3 text-sm font-semibold text-white">{skill}</span>)}
            </div>
            <div className="mt-14 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-dashed border-[#82b5a5] bg-white/60 p-7">
                <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#267a67]">Próximo módulo</span>
                <p className="mt-3 text-2xl font-semibold tracking-[-0.02em] text-[#153a40]">Fluxograma do Processo</p>
              </div>
              <div className="rounded-2xl border border-dashed border-[#82b5a5] bg-white/60 p-7">
                <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#267a67]">Próximo módulo</span>
                <p className="mt-3 text-2xl font-semibold tracking-[-0.02em] text-[#153a40]">Dashboard Executivo</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
