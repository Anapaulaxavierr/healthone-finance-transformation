import type { Metadata } from "next";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { InfoCard } from "@/components/info-card";
import { SectionHeading } from "@/components/section-heading";

export const metadata: Metadata = {
  title: "Gestão Inteligente do Fluxo de Caixa | HealthOne",
  description: "Como transformar um processo financeiro manual em um processo orientado por indicadores e automação.",
};

const problems = [
  "Baixa previsibilidade do fluxo de caixa",
  "Alto volume de atividades manuais",
  "Informações descentralizadas",
  "Dificuldade para antecipar riscos financeiros",
  "Indicadores pouco confiáveis",
];

const answers = ["Ciclo financeiro", "Fluxo de caixa projetado", "Inadimplência", "Pagamentos críticos", "Previsto x realizado"];

const objectives = [
  "Melhorar previsibilidade financeira",
  "Automatizar atividades repetitivas",
  "Apoiar decisões estratégicas",
  "Criar indicadores confiáveis",
];

const methodology = ["Diagnóstico", "Mapeamento do Processo", "Definição dos KPIs", "Automação", "Dashboard Executivo"];

const indicators = [
  { title: "Saldo de Caixa Atual", description: "Posição consolidada dos recursos disponíveis no início do dia.", decision: "Priorizar pagamentos e avaliar a liquidez imediata." },
  { title: "Saldo Projetado (30 dias)", description: "Visão futura que combina entradas e saídas previstas para os próximos 30 dias.", decision: "Antecipar necessidades de capital e negociar prazos." },
  { title: "Inadimplência", description: "Acompanhamento dos valores vencidos e da evolução dos recebimentos em atraso.", decision: "Direcionar ações de cobrança e proteger a geração de caixa." },
  { title: "Previsto x Realizado", description: "Comparação entre o planejamento financeiro e os movimentos efetivamente registrados.", decision: "Identificar desvios e recalibrar projeções." },
  { title: "Pagamentos Críticos", description: "Compromissos prioritários por valor, vencimento ou impacto na operação assistencial.", decision: "Reduzir atrasos, multas e riscos de descontinuidade." },
];

const technologies = ["TOTVS ERP", "Microsoft Power Automate", "Excel", "GitHub", "Next.js", "TypeScript"];
const roadmap = ["Fluxograma AS IS", "Fluxograma TO BE", "Automação Power Automate", "Dashboard Executivo", "Conclusões"];

export default function CashFlowCasePage() {
  return (
    <div className="min-h-screen bg-[#f5f7f7] text-[#102f35]">
      <Header />
      <main>
        <section className="relative isolate overflow-hidden bg-[#0d3137] px-6 py-24 sm:py-32 lg:px-8 lg:py-36">
          <div aria-hidden="true" className="hero-grid absolute inset-0 -z-10 opacity-20" />
          <div className="mx-auto max-w-6xl">
            <span className="inline-flex rounded-full border border-[#8de0c1]/40 bg-[#8de0c1]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#8de0c1]">Case 01</span>
            <h1 className="mt-8 max-w-4xl text-5xl font-semibold leading-[1.06] tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl">Gestão Inteligente do Fluxo de Caixa</h1>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-[#c8d8d8] sm:text-xl">Como transformar um processo financeiro manual em um processo orientado por indicadores e automação.</p>
          </div>
        </section>

        <section className="px-6 py-20 sm:py-28 lg:px-8">
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <SectionHeading eyebrow="Contexto da empresa" title="Uma operação complexa que precisa enxergar além do registro." />
            <div className="space-y-5 text-base leading-8 text-[#4d686e] sm:text-lg">
              <p>A HealthOne é uma operadora de saúde de médio porte que realiza diariamente centenas de pagamentos relacionados a fornecedores, prestadores de serviços médicos, hospitais, laboratórios e despesas administrativas.</p>
              <p>Seu ERP é o <strong className="font-semibold text-[#153a40]">TOTVS</strong>. Apesar de os processos serem registrados corretamente, a tomada de decisão financeira ainda depende de controles paralelos em Excel e análises manuais.</p>
            </div>
          </div>
        </section>

        <section className="bg-white px-6 py-20 sm:py-28 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <SectionHeading eyebrow="O problema" title="Quando os dados existem, mas a visão financeira não acompanha." description="O diagnóstico inicial identificou cinco pontos que limitavam a capacidade de reação da área financeira." />
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {problems.map((problem, index) => <InfoCard key={problem} title={problem} number={String(index + 1).padStart(2, "0")} />)}
            </div>
          </div>
        </section>

        <section className="bg-[#0d3137] px-6 py-20 sm:py-28 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#8de0c1]">Pergunta de negócio</p>
            <blockquote className="mt-7 max-w-5xl text-3xl font-medium leading-tight tracking-[-0.025em] text-white sm:text-4xl lg:text-5xl">“Se você fosse a responsável financeira da HealthOne, quais informações gostaria de visualizar todos os dias para tomar melhores decisões?”</blockquote>
            <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
              {answers.map((answer) => <div key={answer} className="rounded-xl border border-white/10 bg-white/[0.06] p-5 text-sm font-semibold leading-6 text-[#e6eeee]">{answer}</div>)}
            </div>
          </div>
        </section>

        <section className="px-6 py-20 sm:py-28 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <SectionHeading eyebrow="Objetivos do projeto" title="Transformar informação em capacidade de decisão." />
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {objectives.map((objective, index) => <InfoCard key={objective} title={objective} number={String(index + 1).padStart(2, "0")} />)}
            </div>
          </div>
        </section>

        <section className="border-y border-[#dbe4e3] bg-white px-6 py-20 sm:py-28 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <SectionHeading eyebrow="Metodologia" title="Uma evolução estruturada, do diagnóstico à gestão executiva." />
            <ol className="mt-14 grid gap-4 lg:grid-cols-5">
              {methodology.map((step, index) => (
                <li key={step} className="relative rounded-2xl bg-[#f1f6f5] p-6 lg:min-h-44">
                  <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#267a67]">Etapa {index + 1}</span>
                  <p className="mt-8 text-lg font-semibold leading-snug text-[#153a40]">{step}</p>
                  {index < methodology.length - 1 ? <span aria-hidden="true" className="mt-6 block text-xl text-[#62a991] lg:absolute lg:-right-3 lg:top-1/2 lg:mt-0 lg:-translate-y-1/2 lg:rotate-[-90deg]">↓</span> : null}
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="bg-[#0d3137] px-6 py-20 sm:py-28 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <SectionHeading eyebrow="Indicadores estratégicos" title="Uma visão diária orientada à ação." description="Cada indicador responde a uma pergunta concreta e apoia uma decisão financeira." light />
            <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {indicators.map((indicator) => <InfoCard key={indicator.title} {...indicator} dark />)}
            </div>
          </div>
        </section>

        <section className="px-6 py-20 sm:py-28 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <SectionHeading eyebrow="Tecnologias utilizadas" title="Ecossistema conectado à realidade da operação." />
            <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
              {technologies.map((technology) => <div key={technology} className="flex min-h-28 items-center justify-center rounded-2xl border border-[#dbe4e3] bg-white p-5 text-center text-sm font-bold text-[#21474d] shadow-[0_10px_30px_rgba(13,49,55,0.04)]">{technology}</div>)}
            </div>
          </div>
        </section>

        <section className="bg-[#e8f0ee] px-6 py-20 sm:py-28 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <SectionHeading eyebrow="Próximas etapas" title="Roadmap de transformação" description="A construção do Case seguirá uma sequência progressiva, preservando clareza entre processo, automação e gestão." />
            <ol className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {roadmap.map((item, index) => <li key={item} className="rounded-2xl bg-white p-6"><span className="text-xs font-bold tracking-[0.18em] text-[#62a991]">{String(index + 1).padStart(2, "0")}</span><p className="mt-8 font-semibold leading-snug text-[#153a40]">{item}</p></li>)}
            </ol>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
