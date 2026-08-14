import type { Metadata } from "next";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { SectionHeading } from "@/components/section-heading";

export const metadata: Metadata = {
  title: "Gestão Inteligente do Fluxo de Caixa | HealthOne",
  description: "Projeto de transformação financeira focado em previsibilidade, automação e indicadores executivos.",
};

const results = [
  { title: "Previsibilidade", text: "Visão antecipada do caixa e dos riscos financeiros." },
  { title: "Eficiência", text: "Menos controles manuais e mais fluidez operacional." },
  { title: "Decisão", text: "Indicadores executivos para orientar prioridades." },
];

const roles = [
  { title: "Diagnóstico", text: "Análise do processo e dos pontos críticos." },
  { title: "Estruturação", text: "Desenho de indicadores e automações." },
  { title: "Entrega", text: "Visão executiva orientada à decisão." },
];

const problems = ["Baixa previsibilidade", "Rotinas manuais", "Dados dispersos", "Ausência de KPIs"];
const methodology = ["Diagnóstico", "Mapeamento", "KPIs", "Automação", "Dashboard"];

const indicators = [
  { title: "Saldo Atual", summary: "Liquidez para decisões imediatas." },
  { title: "Saldo Projetado", summary: "Riscos financeiros antecipados." },
  { title: "Inadimplência", summary: "Prioridades de cobrança." },
  { title: "Previsto x Realizado", summary: "Desvios do planejamento." },
  { title: "Pagamentos Críticos", summary: "Compromissos essenciais." },
];

const skills = ["Business Partner", "Controladoria", "Fluxo de Caixa", "Indicadores", "Power Automate", "Excel", "BPM", "Melhoria Contínua", "Automação"];
const technologies = ["TOTVS", "Power Automate", "Excel", "GitHub", "Next.js", "TypeScript"];

export default function CashFlowCasePage() {
  return (
    <div className="min-h-screen bg-[#f5f7f7] text-[#102f35]">
      <Header />
      <main>
        <section className="relative isolate overflow-hidden bg-[#0d3137] px-6 py-14 sm:py-16 lg:px-8">
          <div aria-hidden="true" className="hero-grid absolute inset-0 -z-10 opacity-20" />
          <div className="mx-auto max-w-6xl">
            <span className="inline-flex rounded-full border border-[#8de0c1]/40 bg-[#8de0c1]/10 px-4 py-2 text-[0.68rem] font-bold uppercase tracking-[0.18em] text-[#8de0c1]">Case 01 <span aria-hidden="true" className="mx-2 opacity-60">·</span> Finance Transformation</span>
            <h1 className="mt-6 max-w-4xl text-4xl font-semibold leading-[1.06] tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">Gestão Inteligente do Fluxo de Caixa</h1>
            <p className="mt-4 max-w-3xl text-base leading-7 text-[#c8d8d8] sm:text-lg">Previsibilidade financeira, automação e indicadores executivos para transformar dados em decisão.</p>
            <div className="mt-5 flex flex-wrap gap-2" aria-label="Competências-chave do Case">
              {["Fluxo de Caixa", "Automação", "Visão Executiva"].map((highlight) => <span key={highlight} className="rounded-full border border-white/15 bg-white/[0.05] px-3 py-1.5 text-xs font-medium text-[#d8e6e4]">{highlight}</span>)}
            </div>
          </div>
        </section>

        <section className="px-6 py-14 sm:py-16 lg:px-8">
          <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-start lg:gap-20">
            <h2 className="text-3xl font-semibold tracking-[-0.03em] text-[#102f35] sm:text-4xl">Desafio</h2>
            <div className="space-y-3 text-base leading-7 text-[#4d686e] sm:text-lg">
              <p>A operação gerava dados diariamente, mas ainda sem visão estratégica.</p>
              <p>O desafio: transformar volume operacional em previsibilidade e decisão.</p>
            </div>
          </div>
        </section>

        <section className="bg-[#0d3137] px-6 py-16 sm:py-20 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <SectionHeading eyebrow="Valor entregue" title="Resultado do Projeto" light />
            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {results.map((result, index) => (
                <article key={result.title} className="rounded-2xl border border-[#8de0c1]/20 bg-white/[0.07] p-7 sm:p-8">
                  <span className="text-xs font-bold tracking-[0.18em] text-[#8de0c1]">0{index + 1}</span>
                  <h3 className="mt-10 text-2xl font-semibold text-white">{result.title}</h3>
                  <p className="mt-3 max-w-xs text-sm leading-6 text-[#c8d8d8]">{result.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-16 sm:py-20 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <SectionHeading eyebrow="Papel no projeto" title="Minha Atuação" />
            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {roles.map((role) => (
                <article key={role.title} className="rounded-2xl border border-[#dbe4e3] bg-white p-7 shadow-[0_12px_36px_rgba(13,49,55,0.05)]">
                  <h3 className="text-xl font-semibold text-[#153a40]">{role.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-[#587076]">{role.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-[#e2e9e8] bg-white px-6 py-16 sm:py-20 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <SectionHeading eyebrow="Diagnóstico" title="Principais Desafios" />
            <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {problems.map((problem) => (
                <div key={problem} className="flex items-center gap-4 rounded-xl bg-[#fffafa] p-5 text-sm font-semibold text-[#153a40]">
                  <span aria-hidden="true" className="size-2.5 shrink-0 rounded-sm bg-[#c75151]" />{problem}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-16 sm:py-20 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <SectionHeading eyebrow="Metodologia" title="Do diagnóstico à gestão" />
            <ol className="mt-10 grid gap-3 lg:grid-cols-5">
              {methodology.map((step, index) => (
                <li key={step} className={`relative flex min-h-24 items-center justify-center rounded-xl border p-4 text-center text-sm font-semibold ${index >= 3 ? "border-[#8bcab5] bg-[#e8f4f0] text-[#174d43]" : "border-[#dbe4e3] bg-white text-[#153a40]"}`}>
                  <span className="mr-2 text-xs text-[#62a991]">0{index + 1}</span>{step}
                  {index < methodology.length - 1 ? <span aria-hidden="true" className="absolute -bottom-5 z-10 text-lg text-[#62a991] lg:-right-3 lg:bottom-auto lg:top-1/2 lg:-translate-y-1/2 lg:rotate-[-90deg]">↓</span> : null}
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="bg-[#0d3137] px-6 py-16 sm:py-20 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <SectionHeading eyebrow="Decisão financeira" title="Indicadores Estratégicos" light />
            <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
              {indicators.map((indicator) => (
                <article key={indicator.title} className="min-h-36 rounded-xl border border-white/10 bg-white/[0.06] p-5">
                  <div aria-hidden="true" className="mb-6 h-1 w-8 rounded-full bg-[#8de0c1]" />
                  <h3 className="font-semibold leading-snug text-white">{indicator.title}</h3>
                  <p className="mt-2 text-sm leading-5 text-[#c8d8d8]">{indicator.summary}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#e8f0ee] px-6 py-16 sm:py-20 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <SectionHeading eyebrow="Perfil profissional" title="Competências Demonstradas" />
            <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
              {skills.map((skill) => <span key={skill} className="flex min-h-16 items-center justify-center rounded-xl bg-[#0d3137] px-4 py-3 text-center text-sm font-semibold text-white">{skill}</span>)}
            </div>
          </div>
        </section>

        <section className="px-6 py-12 lg:px-8">
          <div className="mx-auto flex max-w-6xl flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <h2 className="text-xl font-semibold tracking-[-0.02em] text-[#102f35]">Tecnologias</h2>
            <div className="flex flex-wrap gap-2">
              {technologies.map((technology) => <span key={technology} className="rounded-full border border-[#bfd4cf] bg-white px-4 py-2 text-xs font-bold text-[#21474d]">{technology}</span>)}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
