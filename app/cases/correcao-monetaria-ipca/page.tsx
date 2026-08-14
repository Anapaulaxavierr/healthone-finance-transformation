/* eslint-disable @next/next/no-img-element -- evidências locais preservam a resolução original da planilha */
import type { Metadata } from "next";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { SectionHeading } from "@/components/section-heading";

export const metadata: Metadata = {
  title: "Correção Monetária utilizando IPCA | HealthOne",
  description: "Automação financeira auditável com Google Sheets, Apps Script e dados oficiais do Banco Central.",
};

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const results = [
  { value: "63/63", label: "verificações aprovadas" },
  { value: "SGS 433", label: "IPCA oficial do Banco Central" },
  { value: "2 chamadas", label: "máximo por cálculo em lote" },
];

const roles = [
  { title: "Regra financeira", text: "Competências mensais e precisão sem arredondamento intermediário." },
  { title: "Automação", text: "Consulta oficial, cálculo e escrita em lote no Google Sheets." },
  { title: "Experiência", text: "Entradas simples, resultado destacado e memória auditável." },
];

const steps = ["Preencher", "Consultar IPCA", "Calcular", "Validar", "Explicar"];
const skills = ["Finanças", "Google Apps Script", "APIs", "Google Sheets", "Testes", "Arquitetura", "UX Financeira", "IA Aplicada", "Automação"];
const technologies = ["Google Sheets", "Apps Script", "BCB SGS", "JavaScript", "GitHub", "IA"];

export default function IpcaCasePage() {
  return (
    <div className="min-h-screen bg-[#f5f7f7] text-[#102f35]">
      <Header />
      <main>
        <section className="relative isolate overflow-hidden bg-[#0d3137] px-6 py-14 sm:py-16 lg:px-8">
          <div aria-hidden="true" className="hero-grid absolute inset-0 -z-10 opacity-20" />
          <div className="mx-auto max-w-6xl">
            <span className="inline-flex rounded-full border border-[#8de0c1]/40 bg-[#8de0c1]/10 px-4 py-2 text-[0.68rem] font-bold uppercase tracking-[0.18em] text-[#8de0c1]">Case 02 <span aria-hidden="true" className="mx-2 opacity-60">·</span> Finance Automation</span>
            <h1 className="mt-6 max-w-4xl text-4xl font-semibold leading-[1.06] tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">Correção Monetária utilizando IPCA</h1>
            <p className="mt-4 max-w-3xl text-base leading-7 text-[#c8d8d8] sm:text-lg">Automação financeira que transforma três entradas em um cálculo oficial, preciso e auditável.</p>
            <div className="mt-5 flex flex-wrap gap-2" aria-label="Competências-chave do Case">
              {["Finanças", "Automação", "IA aplicada"].map((item) => <span key={item} className="rounded-full border border-white/15 bg-white/[0.05] px-3 py-1.5 text-xs font-medium text-[#d8e6e4]">{item}</span>)}
            </div>
          </div>
        </section>

        <section className="px-6 py-14 sm:py-16 lg:px-8">
          <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
            <h2 className="text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">Desafio</h2>
            <div className="space-y-3 text-base leading-7 text-[#4d686e] sm:text-lg">
              <p>Processos manuais podem usar competências incorretas, índices desatualizados e arredondamentos prematuros.</p>
              <p>O desafio: entregar simplicidade sem perder a explicação de cada centavo.</p>
            </div>
          </div>
        </section>

        <section className="bg-[#0d3137] px-6 py-16 sm:py-20 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <SectionHeading eyebrow="Resultado validado" title="Valor corrigido com memória completa" light />
            <div className="mt-10 grid gap-5 lg:grid-cols-[0.8fr_1.2fr]">
              <div className="flex flex-col justify-between rounded-2xl border border-[#8de0c1]/20 bg-white/[0.07] p-7 sm:p-8">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#8de0c1]">Cenário demonstrativo</p>
                  <p className="mt-8 text-sm text-[#c8d8d8]">R$ 1.000,00 · 15 jan a 31 mar 2024</p>
                  <strong className="mt-3 block text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">R$ 1.009,91</strong>
                  <p className="mt-3 text-sm text-[#c8d8d8]">Fator acumulado: 1,00991328</p>
                </div>
                <a href="https://docs.google.com/spreadsheets/d/1rwtRgUkiyb4zlMn7hd6YBxb9DJJ4N7I_m6aCC8cwn6k/copy" target="_blank" rel="noreferrer" className="mt-10 inline-flex w-fit rounded-full bg-[#8de0c1] px-5 py-3 text-sm font-bold text-[#0d3137] transition hover:bg-white">Criar uma cópia da planilha</a>
              </div>
              <figure className="overflow-hidden rounded-2xl border border-white/10 bg-white p-3">
                <img src={`${basePath}/images/cases/ipca/calculo-validado.png`} alt="Planilha com cálculo individual validado pelo IPCA" width="742" height="424" className="h-full w-full rounded-xl object-contain" />
              </figure>
            </div>
            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              {results.map((result) => <div key={result.value} className="rounded-xl border border-white/10 bg-white/[0.05] p-5"><strong className="text-xl text-white">{result.value}</strong><span className="mt-1 block text-xs text-[#c8d8d8]">{result.label}</span></div>)}
            </div>
          </div>
        </section>

        <section className="px-6 py-16 sm:py-20 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <SectionHeading eyebrow="Minha atuação" title="Finanças, automação e experiência" />
            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {roles.map((role) => <article key={role.title} className="rounded-2xl border border-[#dbe4e3] bg-white p-7 shadow-[0_12px_36px_rgba(13,49,55,0.05)]"><h3 className="text-xl font-semibold text-[#153a40]">{role.title}</h3><p className="mt-3 text-sm leading-6 text-[#587076]">{role.text}</p></article>)}
            </div>
          </div>
        </section>

        <section className="border-y border-[#e2e9e8] bg-white px-6 py-16 sm:py-20 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <SectionHeading eyebrow="Experiência construída" title="Três entradas. Um resultado explicável." />
            <ol className="mt-10 grid gap-3 lg:grid-cols-5">
              {steps.map((step, index) => <li key={step} className="relative flex min-h-24 items-center justify-center rounded-xl border border-[#dbe4e3] bg-[#f5f7f7] p-4 text-center text-sm font-semibold"><span className="mr-2 text-xs text-[#62a991]">0{index + 1}</span>{step}{index < steps.length - 1 ? <span aria-hidden="true" className="absolute -bottom-5 z-10 text-lg text-[#62a991] lg:-right-3 lg:bottom-auto lg:top-1/2 lg:-translate-y-1/2 lg:rotate-[-90deg]">↓</span> : null}</li>)}
            </ol>
          </div>
        </section>

        <section className="px-6 py-16 sm:py-20 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <SectionHeading eyebrow="Auditabilidade" title="Resultado primeiro. Memória quando importa." />
            <div className="mt-10 grid gap-5 lg:grid-cols-2">
              <figure className="rounded-2xl border border-[#dbe4e3] bg-white p-4"><img src={`${basePath}/images/cases/ipca/memoria-auditavel.png`} alt="Memória mensal com taxas e fatores do IPCA" width="655" height="188" className="w-full rounded-lg" /><figcaption className="mt-4 text-sm text-[#587076]"><strong className="text-[#153a40]">Memória auditável.</strong> Competências, taxas e fatores preservados.</figcaption></figure>
              <div className="rounded-2xl bg-[#e8f0ee] p-7 sm:p-8"><p className="text-xs font-bold uppercase tracking-[0.18em] text-[#267a67]">Precisão financeira</p><code className="mt-10 block text-xl text-[#153a40]">1,0083 × 1,0016</code><strong className="mt-2 block text-3xl tracking-[-0.03em] text-[#0d3137]">= 1,00991328</strong><p className="mt-5 max-w-sm text-sm leading-6 text-[#587076]">O arredondamento monetário ocorre somente na apresentação.</p></div>
            </div>
          </div>
        </section>

        <section className="bg-[#0d3137] px-6 py-16 sm:py-20 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <SectionHeading eyebrow="Aplicação em lote" title="Cinco posições. Uma única regra financeira." light />
            <div className="mt-10 overflow-hidden rounded-2xl border border-white/10 bg-white p-3"><img src={`${basePath}/images/cases/ipca/simulacao-titulos.png`} alt="Simulação de cinco títulos fictícios corrigidos pelo IPCA" width="1168" height="500" className="w-full rounded-xl" /></div>
            <div className="mt-5 grid gap-3 sm:grid-cols-3"><div className="rounded-xl bg-white/[0.06] p-5"><span className="text-xs text-[#c8d8d8]">Original</span><strong className="mt-1 block text-xl text-white">R$ 80.500,00</strong></div><div className="rounded-xl border border-[#8de0c1]/30 bg-[#8de0c1]/10 p-5"><span className="text-xs text-[#c8d8d8]">Corrigido</span><strong className="mt-1 block text-xl text-white">R$ 81.298,02</strong></div><div className="rounded-xl bg-white/[0.06] p-5"><span className="text-xs text-[#c8d8d8]">Acréscimo</span><strong className="mt-1 block text-xl text-white">R$ 798,02</strong></div></div>
            <p className="mt-4 text-xs text-[#9fb4b5]">Dados fictícios. Correção monetária não equivale a preço ou rentabilidade.</p>
          </div>
        </section>

        <section className="bg-[#e8f0ee] px-6 py-16 sm:py-20 lg:px-8">
          <div className="mx-auto max-w-6xl"><SectionHeading eyebrow="Perfil profissional" title="Competências Demonstradas" /><div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">{skills.map((skill) => <span key={skill} className="flex min-h-16 items-center justify-center rounded-xl bg-[#0d3137] px-4 py-3 text-center text-sm font-semibold text-white">{skill}</span>)}</div></div>
        </section>

        <section className="px-6 py-12 lg:px-8">
          <div className="mx-auto flex max-w-6xl flex-col gap-6 lg:flex-row lg:items-center lg:justify-between"><h2 className="text-xl font-semibold tracking-[-0.02em]">Tecnologias</h2><div className="flex flex-wrap gap-2">{technologies.map((technology) => <span key={technology} className="rounded-full border border-[#bfd4cf] bg-white px-4 py-2 text-xs font-bold text-[#21474d]">{technology}</span>)}</div></div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
