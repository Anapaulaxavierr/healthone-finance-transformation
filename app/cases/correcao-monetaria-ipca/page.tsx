/* eslint-disable @next/next/no-img-element -- capturas reais da planilha preservam a resolução original */
import type { Metadata } from "next";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { SectionHeading } from "@/components/section-heading";

export const metadata: Metadata = {
  title: "Correção Monetária utilizando IPCA | HealthOne",
  description:
    "Case de automação financeira em Google Sheets e Apps Script, com IPCA oficial e memória de cálculo auditável.",
};

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const architecture = [
  {
    number: "01",
    title: "Interface",
    technology: "Google Sheets",
    text: "Três entradas, estados claros e resultado em primeiro plano.",
  },
  {
    number: "02",
    title: "Orquestração",
    technology: "OperationController",
    text: "Valida a execução, controla concorrência e coordena o fluxo.",
  },
  {
    number: "03",
    title: "Dados oficiais",
    technology: "SgsClient",
    text: "Consulta e normaliza exclusivamente a série 433 do Banco Central.",
  },
  {
    number: "04",
    title: "Regra financeira",
    technology: "Domain",
    text: "Define competências e compõe fatores sem arredondamento intermediário.",
  },
  {
    number: "05",
    title: "Persistência",
    technology: "SpreadsheetGateway",
    text: "Centraliza intervalos, formatos, memória e escrita em lote.",
  },
];

const proofPoints = [
  { value: "63/63", label: "verificações aprovadas" },
  { value: "39", label: "cenários automatizados" },
  { value: "SGS 433", label: "fonte oficial do IPCA" },
  { value: "1 consulta", label: "de índices para o lote" },
];

const skills = [
  "Automação financeira",
  "Google Apps Script",
  "Google Sheets",
  "Integração com API",
  "Regra de negócio",
  "Testes automatizados",
  "Arquitetura modular",
  "UX para finanças",
  "Auditabilidade",
  "Tratamento de falhas",
];

const technologies = ["Google Sheets", "Apps Script", "BCB SGS", "JavaScript", "GitHub"];

function EvidenceFigure({
  src,
  alt,
  caption,
}: {
  src: string;
  alt: string;
  caption: string;
}) {
  return (
    <figure className="overflow-hidden rounded-2xl border border-[#dbe4e3] bg-white p-2 shadow-[0_18px_50px_rgba(13,49,55,0.08)] sm:p-3">
      <img src={`${basePath}${src}`} alt={alt} width="1280" height="720" className="w-full rounded-xl" />
      <figcaption className="px-3 pb-2 pt-4 text-xs leading-5 text-[#587076] sm:px-4">
        {caption}
      </figcaption>
    </figure>
  );
}

export default function IpcaCasePage() {
  return (
    <div className="min-h-screen bg-[#f5f7f7] text-[#102f35]">
      <Header />
      <main>
        <section className="relative isolate overflow-hidden bg-[#0d3137] px-6 py-14 sm:py-16 lg:px-8">
          <div aria-hidden="true" className="hero-grid absolute inset-0 -z-10 opacity-20" />
          <div className="mx-auto max-w-6xl">
            <span className="inline-flex rounded-full border border-[#8de0c1]/40 bg-[#8de0c1]/10 px-4 py-2 text-[0.68rem] font-bold uppercase tracking-[0.18em] text-[#8de0c1]">
              Case 02 <span aria-hidden="true" className="mx-2 opacity-60">·</span> Spreadsheet Automation
            </span>
            <h1 className="mt-6 max-w-4xl text-4xl font-semibold leading-[1.06] tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
              Correção Monetária utilizando IPCA
            </h1>
            <p className="mt-4 max-w-3xl text-base leading-7 text-[#c8d8d8] sm:text-lg">
              Uma automação em planilha que consulta o Banco Central, aplica a regra financeira e explica cada centavo do resultado.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="https://docs.google.com/spreadsheets/d/1rwtRgUkiyb4zlMn7hd6YBxb9DJJ4N7I_m6aCC8cwn6k/copy"
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-[#8de0c1] px-5 py-3 text-sm font-bold text-[#0d3137] transition hover:bg-white"
              >
                Testar uma cópia
              </a>
              <a
                href="#construcao"
                className="rounded-full border border-white/20 px-5 py-3 text-sm font-bold text-white transition hover:border-white/50"
              >
                Ver como foi construída
              </a>
            </div>
          </div>
        </section>

        <section className="px-6 py-14 sm:py-16 lg:px-8">
          <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
            <h2 className="text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">O desafio</h2>
            <div className="grid gap-3 sm:grid-cols-3">
              {["Competências incorretas", "Índices desatualizados", "Cálculo sem memória"].map((item) => (
                <div key={item} className="rounded-xl border border-[#dbe4e3] bg-white p-5 text-sm font-semibold text-[#153a40]">
                  <span aria-hidden="true" className="mb-4 block h-2 w-2 rounded-full bg-[#b56145]" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#0d3137] px-6 py-16 sm:py-20 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <SectionHeading eyebrow="Solução entregue" title="Do dado de entrada ao resultado auditável" light />
            <div className="mt-10 grid gap-6 lg:grid-cols-[1.35fr_0.65fr] lg:items-start">
              <EvidenceFigure
                src="/images/cases/ipca/calculo-automatizado.png"
                alt="Tela real da automação com entradas, status, competências, fator e valor corrigido"
                caption="Execução real na aba Cálculo. Captura da planilha demonstrativa em 9 de agosto de 2026."
              />
              <ol className="grid gap-3">
                {[
                  ["1", "Entrada controlada", "Valor original e datas ficam isolados em uma única área."],
                  ["2", "Execução pelo menu", "A ação IPCA > Calcular correção aciona todo o fluxo."],
                  ["3", "Resposta explicável", "Status, limite oficial, fator, variação e valor são publicados juntos."],
                ].map(([number, title, text]) => (
                  <li key={number} className="rounded-xl border border-white/10 bg-white/[0.06] p-5">
                    <span className="text-xs font-bold text-[#8de0c1]">0{number}</span>
                    <strong className="ml-3 text-sm text-white">{title}</strong>
                    <p className="mt-2 text-xs leading-5 text-[#c8d8d8]">{text}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        <section id="construcao" className="scroll-mt-24 px-6 py-16 sm:py-20 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <SectionHeading eyebrow="Como foi construída" title="Uma planilha com arquitetura de aplicação" />
            <p className="mt-5 max-w-2xl text-sm leading-6 text-[#587076]">
              Regras, integração e apresentação foram separadas para tornar a solução testável, reutilizável e fácil de manter.
            </p>
            <ol className="mt-10 grid gap-3 lg:grid-cols-5">
              {architecture.map((item, index) => (
                <li key={item.title} className="relative rounded-2xl border border-[#dbe4e3] bg-white p-5 shadow-[0_12px_36px_rgba(13,49,55,0.05)]">
                  <span className="text-xs font-bold text-[#62a991]">{item.number}</span>
                  <h3 className="mt-5 text-lg font-semibold text-[#153a40]">{item.title}</h3>
                  <code className="mt-2 block text-[0.68rem] font-bold text-[#267a67]">{item.technology}</code>
                  <p className="mt-3 text-xs leading-5 text-[#587076]">{item.text}</p>
                  {index < architecture.length - 1 ? (
                    <span aria-hidden="true" className="absolute -bottom-5 left-1/2 z-10 -translate-x-1/2 text-[#62a991] lg:-right-3 lg:bottom-auto lg:left-auto lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-0">→</span>
                  ) : null}
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="border-y border-[#e2e9e8] bg-white px-6 py-16 sm:py-20 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <SectionHeading eyebrow="Auditabilidade" title="A memória mostra como o valor foi formado" />
            <div className="mt-10 grid gap-6 lg:grid-cols-[1.35fr_0.65fr] lg:items-start">
              <EvidenceFigure
                src="/images/cases/ipca/memoria-auditavel-detalhada.png"
                alt="Memória de cálculo com competência, IPCA mensal, fator mensal, fator acumulado e valor atualizado"
                caption="Cada competência preserva a taxa oficial, o fator mensal, o acumulado e a evolução do valor."
              />
              <div className="rounded-2xl bg-[#e8f0ee] p-7 sm:p-8">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#267a67]">Regra financeira</p>
                <code className="mt-8 block text-sm leading-7 text-[#153a40]">
                  fator mensal = 1 + IPCA / 100<br />
                  fator acumulado = produto dos fatores<br />
                  valor corrigido = valor × fator
                </code>
                <p className="mt-6 text-sm leading-6 text-[#587076]">O arredondamento monetário acontece apenas na apresentação final.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#0d3137] px-6 py-16 sm:py-20 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <SectionHeading eyebrow="Escala" title="A mesma regra processa várias posições" light />
            <div className="mt-10">
              <EvidenceFigure
                src="/images/cases/ipca/simulacao-em-lote.png"
                alt="Simulação em lote de cinco títulos com valores originais e corrigidos pelo IPCA"
                caption="Cinco posições fictícias processadas com um único conjunto de índices compartilhados."
              />
            </div>
            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              {[
                ["Original", "R$ 80.500,00"],
                ["Corrigido", "R$ 81.298,02"],
                ["Acréscimo", "R$ 798,02"],
              ].map(([label, value]) => (
                <div key={label} className="rounded-xl border border-white/10 bg-white/[0.06] p-5">
                  <span className="text-xs text-[#c8d8d8]">{label}</span>
                  <strong className="mt-1 block text-xl text-white">{value}</strong>
                </div>
              ))}
            </div>
            <p className="mt-4 text-xs text-[#9fb4b5]">Dados fictícios. Correção monetária não representa preço ou rentabilidade.</p>
          </div>
        </section>

        <section className="px-6 py-16 sm:py-20 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <SectionHeading eyebrow="Adoção" title="A automação também ensina a usar" />
            <div className="mt-10 grid gap-6 lg:grid-cols-[1.25fr_0.75fr] lg:items-center">
              <EvidenceFigure
                src="/images/cases/ipca/instrucoes-uso.png"
                alt="Aba de instruções da automação com cinco passos de uso e explicação do cálculo"
                caption="A orientação de uso e a lógica financeira permanecem dentro da própria planilha."
              />
              <div className="grid gap-3">
                {["Fluxo guiado em cinco passos", "Permissões limitadas à planilha e ao BCB", "Estados de sucesso, limite e falha", "Resultado válido preservado em concorrência"].map((item) => (
                  <div key={item} className="flex items-center gap-3 rounded-xl border border-[#dbe4e3] bg-white p-4 text-sm font-semibold text-[#153a40]">
                    <span aria-hidden="true" className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#dcebe6] text-xs text-[#267a67]">✓</span>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#e8f0ee] px-6 py-16 sm:py-20 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <SectionHeading eyebrow="Qualidade comprovada" title="Testada além do cenário ideal" />
            <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {proofPoints.map((item) => (
                <div key={item.value} className="rounded-2xl bg-[#0d3137] p-6">
                  <strong className="text-2xl text-white">{item.value}</strong>
                  <span className="mt-2 block text-xs leading-5 text-[#c8d8d8]">{item.label}</span>
                </div>
              ))}
            </div>
            <p className="mt-5 max-w-3xl text-sm leading-6 text-[#587076]">
              A validação cobriu domínio financeiro, normalização do SGS, integração real, layout, falha externa e concorrência.
            </p>
          </div>
        </section>

        <section className="px-6 py-16 sm:py-20 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <SectionHeading eyebrow="Perfil profissional" title="Competências demonstradas" />
            <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
              {skills.map((skill) => (
                <span key={skill} className="flex min-h-16 items-center justify-center rounded-xl border border-[#dbe4e3] bg-white px-4 py-3 text-center text-sm font-semibold text-[#153a40]">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-[#e2e9e8] px-6 py-12 lg:px-8">
          <div className="mx-auto flex max-w-6xl flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <h2 className="text-xl font-semibold tracking-[-0.02em]">Tecnologias</h2>
            <div className="flex flex-wrap gap-2">
              {technologies.map((technology) => (
                <span key={technology} className="rounded-full border border-[#bfd4cf] bg-white px-4 py-2 text-xs font-bold text-[#21474d]">
                  {technology}
                </span>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
