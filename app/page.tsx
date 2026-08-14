import { CaseCard } from "@/components/case-card";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

const cases = [
  { title: "Gestão Inteligente do Fluxo de Caixa", href: "/cases/gestao-inteligente-fluxo-caixa/" },
  { title: "Correção Monetária utilizando IPCA", href: "/cases/correcao-monetaria-ipca/" },
  { title: "Automação de Contas a Pagar" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f5f7f7] text-[#102f35]">
      <Header />
      <main>
        <section className="relative isolate overflow-hidden bg-[#0d3137] px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
          <div aria-hidden="true" className="hero-grid absolute inset-0 -z-10 opacity-25" />
          <div aria-hidden="true" className="absolute -right-28 top-1/2 -z-10 size-96 -translate-y-1/2 rounded-full bg-[#71d1ad]/20 blur-3xl" />
          <div className="mx-auto max-w-6xl">
            <div className="mb-8 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.28em] text-[#8de0c1]">
              <span className="h-px w-10 bg-current" />
              Estratégia · Processos · Performance
            </div>
            <h1 className="max-w-4xl text-5xl font-semibold leading-[1.05] tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl">
              HealthOne Finance Transformation
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-[#c8d8d8] sm:text-xl">
              Transformando dados financeiros em decisões estratégicas.
            </p>
            <a
              href="#cases"
              className="mt-10 inline-flex min-h-12 items-center justify-center rounded-full bg-[#8de0c1] px-7 py-3 text-sm font-bold text-[#0d3137] transition hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#8de0c1]"
            >
              Conhecer Cases
              <span aria-hidden="true" className="ml-3">↓</span>
            </a>
          </div>
        </section>

        <section id="cases" className="scroll-mt-20 px-6 py-20 sm:py-28 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="max-w-2xl">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#267a67]">Portfólio</p>
              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.03em] text-[#102f35] sm:text-5xl">Cases</h2>
              <p className="mt-5 text-base leading-7 text-[#587076]">
                Iniciativas que conectam visão financeira, eficiência operacional e decisões baseadas em dados.
              </p>
            </div>
            <div className="mt-12 grid gap-5 md:grid-cols-3">
              {cases.map(({ title, href }, index) => (
                <CaseCard key={title} title={title} href={href} number={String(index + 1).padStart(2, "0")} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
