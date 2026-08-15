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

const challengeItems = [
  {
    title: "Escolha do período",
    text: "A correção não começa simplesmente na data digitada. É preciso transformar datas em competências mensais e aplicar a regra a partir do mês seguinte ao fato gerador.",
  },
  {
    title: "Fonte do índice",
    text: "Copiar taxas manualmente aumenta o risco de usar um valor desatualizado, omitir um mês ou consultar uma fonte que não seja oficial.",
  },
  {
    title: "Precisão do cálculo",
    text: "Arredondar cada mês antes de concluir a composição altera o resultado. A precisão deve ser preservada durante toda a operação.",
  },
  {
    title: "Rastreabilidade",
    text: "Informar apenas o valor final não permite revisão. A solução precisa demonstrar quais índices entraram e como cada um afetou o saldo.",
  },
];

const sheetTabs = [
  {
    tab: "Cálculo",
    role: "Operação principal",
    text: "Recebe o valor e as datas, inicia a automação e apresenta o resultado consolidado.",
  },
  {
    tab: "Memória",
    role: "Trilha de auditoria",
    text: "Expõe mês a mês os índices oficiais, fatores compostos e evolução do valor.",
  },
  {
    tab: "Simulação",
    role: "Processamento em lote",
    text: "Demonstra a mesma regra aplicada a cinco posições financeiras fictícias.",
  },
  {
    tab: "Instruções",
    role: "Apoio ao usuário",
    text: "Explica o uso, a regra de cálculo, a fonte dos dados e os limites da solução.",
  },
];

const calculationFields = [
  ["Valor original", "Base monetária que será atualizada."],
  ["Data inicial", "Data do fato gerador. O primeiro índice aplicado pertence ao mês seguinte."],
  ["Data de referência", "Data até a qual o usuário deseja atualizar o valor."],
  ["Status", "Informa se o cálculo foi integral, limitado pelo último índice oficial ou interrompido."],
  ["Competência inicial", "Primeiro mês efetivamente incluído na composição do IPCA."],
  ["Competência final efetiva", "Último mês usado, respeitando a disponibilidade oficial do Banco Central."],
  ["Fator acumulado", "Produto matemático dos fatores mensais, mantido com precisão interna."],
  ["Variação acumulada", "Percentual total correspondente ao fator composto do período."],
  ["Valor corrigido", "Valor original multiplicado pelo fator acumulado e arredondado só na apresentação."],
];

const apiSteps = [
  {
    title: "O usuário executa o menu IPCA",
    text: "O Apps Script adiciona um menu próprio ao abrir a planilha. A opção “Calcular correção” chama a função pública da automação.",
    code: "onOpen() → calculateIpcaAdjustment()",
  },
  {
    title: "O controlador protege a operação",
    text: "Antes de calcular, o script cria um bloqueio do documento. Isso impede que duas execuções concorrentes sobrescrevam o mesmo resultado.",
    code: "OperationController + LockService",
  },
  {
    title: "A planilha entrega as três entradas",
    text: "O gateway lê os intervalos nomeados, converte as datas da planilha e limpa somente a apresentação anterior.",
    code: "SpreadsheetGateway",
  },
  {
    title: "O domínio interpreta a regra financeira",
    text: "O JavaScript valida valor e datas, transforma cada data em competência AAAA-MM e define o intervalo do mês seguinte à data inicial até o mês de referência.",
    code: "Domain",
  },
  {
    title: "O cliente consulta o Banco Central",
    text: "Primeiro identifica a última competência publicada. Depois solicita à API SGS somente o intervalo necessário da série 433, o IPCA mensal oficial.",
    code: "UrlFetchApp → api.bcb.gov.br → SGS 433",
  },
  {
    title: "A resposta da API é validada",
    text: "O JSON recebido é convertido em competências e percentuais. O script rejeita datas inválidas, duplicidades, lacunas e respostas incompletas.",
    code: "SgsClient",
  },
  {
    title: "Resultado e memória voltam à planilha",
    text: "Os fatores são compostos sem arredondamento intermediário. O gateway escreve o resumo na aba Cálculo e toda a memória mensal na aba Memória.",
    code: "Domain → SpreadsheetGateway",
  },
];

const memoryColumns = [
  ["Competência", "Mês do índice no formato AAAA-MM."],
  ["IPCA mensal (%)", "Percentual oficial retornado pela série 433."],
  ["Fator mensal", "Conversão da taxa: 1 + IPCA ÷ 100."],
  ["Fator acumulado", "Produto do fator atual por todos os anteriores."],
  ["Valor atualizado", "Evolução do valor original após cada competência."],
];

const simulationGroups = [
  {
    title: "Identificação",
    text: "ID, tipo de título e emissor fictício permitem reconhecer cada posição sem usar dados reais.",
  },
  {
    title: "Posição original",
    text: "Quantidade e valor unitário formam o valor original que será corrigido.",
  },
  {
    title: "Período",
    text: "Datas civis são convertidas nas competências inicial e final efetivamente utilizadas.",
  },
  {
    title: "Resultado",
    text: "Fator, variação, valor corrigido e acréscimo tornam cada linha verificável.",
  },
];

const executiveValue = [
  {
    title: "Confiabilidade",
    text: "Índices oficiais consultados diretamente na fonte, sem transcrição manual.",
  },
  {
    title: "Produtividade",
    text: "Três entradas e um comando substituem pesquisa, composição e conferência manuais.",
  },
  {
    title: "Auditabilidade",
    text: "Cada taxa, fator e valor intermediário permanece disponível para revisão.",
  },
  {
    title: "Escalabilidade",
    text: "A mesma regra financeira pode processar várias posições sem duplicar fórmulas.",
  },
];

const contribution = [
  ["Diagnóstico", "Tradução dos riscos do processo manual em requisitos de negócio e controles."],
  ["Construção", "Modelagem da regra financeira, integração com a API e desenvolvimento em Apps Script."],
  ["Entrega", "Interface orientada ao usuário, memória auditável, simulação e bateria de validações."],
];

const menuCommands = [
  {
    command: "Calcular correção",
    functionName: "calculateIpcaAdjustment()",
    text: "Lê as entradas, consulta o IPCA, calcula o valor e publica resumo e memória.",
  },
  {
    command: "Gerar simulação mockada",
    functionName: "generateMockIpcaSimulation()",
    text: "Processa o cenário fictício em lote para demonstrar a reutilização da regra.",
  },
  {
    command: "Limpar dados",
    functionName: "clearIpcaWorkspace()",
    text: "Remove entradas e saídas operacionais com confirmação, preservando a estrutura.",
  },
  {
    command: "Ver instruções",
    functionName: "showIpcaInstructions()",
    text: "Leva o usuário à orientação de uso e às premissas financeiras da solução.",
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
                href="#resumo-executivo"
                className="rounded-full bg-[#8de0c1] px-5 py-3 text-sm font-bold text-[#0d3137] transition hover:bg-white"
              >
                Ver resumo executivo
              </a>
              <a
                href="#dossie-tecnico"
                className="rounded-full border border-white/20 px-5 py-3 text-sm font-bold text-white transition hover:border-white/50"
              >
                Explorar parte técnica
              </a>
              <a
                href="https://docs.google.com/spreadsheets/d/1rwtRgUkiyb4zlMn7hd6YBxb9DJJ4N7I_m6aCC8cwn6k/copy"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center px-2 py-3 text-sm font-semibold text-[#8de0c1] transition hover:text-white"
              >
                Testar a planilha ↗
              </a>
            </div>
          </div>
        </section>

        <section className="border-b border-[#dbe4e3] bg-white px-6 py-6 lg:px-8">
          <div className="mx-auto grid max-w-6xl gap-3 sm:grid-cols-2">
            <a href="#resumo-executivo" className="group flex items-center justify-between rounded-xl border border-[#dbe4e3] px-5 py-4 transition hover:border-[#62a991]">
              <span><strong className="block text-sm text-[#153a40]">Leitura executiva</strong><span className="mt-1 block text-xs text-[#587076]">Problema, solução, valor e competências.</span></span>
              <span className="text-[#62a991] transition group-hover:translate-x-1">→</span>
            </a>
            <a href="#dossie-tecnico" className="group flex items-center justify-between rounded-xl border border-[#dbe4e3] px-5 py-4 transition hover:border-[#62a991]">
              <span><strong className="block text-sm text-[#153a40]">Dossiê técnico</strong><span className="mt-1 block text-xs text-[#587076]">Abas, JavaScript, API, arquitetura e testes.</span></span>
              <span className="text-[#62a991] transition group-hover:translate-x-1">→</span>
            </a>
          </div>
        </section>

        <section id="resumo-executivo" className="scroll-mt-24 px-6 py-14 sm:py-16 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-8 lg:grid-cols-[0.65fr_1.35fr] lg:gap-20">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#267a67]">Por que este projeto existe</p>
                <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">O desafio</h2>
              </div>
              <div className="space-y-4 text-base leading-7 text-[#4d686e]">
                <p>
                  Corrigir um valor pelo IPCA significa preservar seu poder de compra usando a inflação oficial acumulada entre duas datas. O processo parece simples, mas reúne decisões de período, fonte, precisão e auditoria.
                </p>
                <p>
                  Em uma planilha manual, essas decisões ficam espalhadas entre células e consultas externas. O objetivo foi transformar esse trabalho em um fluxo único, repetível e verificável, sem exigir que o usuário conheça programação.
                </p>
              </div>
            </div>
            <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {challengeItems.map((item) => (
                <article key={item.title} className="rounded-2xl border border-[#dbe4e3] bg-white p-6 shadow-[0_12px_36px_rgba(13,49,55,0.04)]">
                  <span aria-hidden="true" className="mb-5 block h-2 w-2 rounded-full bg-[#b56145]" />
                  <h3 className="text-base font-semibold text-[#153a40]">{item.title}</h3>
                  <p className="mt-3 text-xs leading-5 text-[#587076]">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-[#dbe4e3] bg-[#e8f0ee] px-6 py-16 sm:py-20 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <SectionHeading eyebrow="Visão geral" title="Quatro abas. Um fluxo completo." />
            <p className="mt-5 max-w-3xl text-sm leading-6 text-[#587076]">
              O Google Sheets funciona como interface; o código JavaScript executado pelo Apps Script funciona como motor da solução. Cada aba possui uma responsabilidade clara.
            </p>
            <div className="mt-10 grid gap-4 md:grid-cols-2">
              {sheetTabs.map((item, index) => (
                <article key={item.tab} className="grid gap-4 rounded-2xl bg-white p-6 shadow-[0_12px_36px_rgba(13,49,55,0.05)] sm:grid-cols-[auto_1fr]">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#0d3137] text-xs font-bold text-[#8de0c1]">0{index + 1}</span>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#267a67]">{item.role}</p>
                    <h3 className="mt-2 text-xl font-semibold text-[#153a40]">Aba {item.tab}</h3>
                    <p className="mt-3 text-sm leading-6 text-[#587076]">{item.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-16 sm:py-20 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-6 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
              <SectionHeading eyebrow="Destaque da solução" title="Um menu próprio dentro do Google Sheets" />
              <div className="space-y-3 text-sm leading-6 text-[#587076]">
                <p>
                  Ao abrir o arquivo, o usuário encontra a opção <strong className="text-[#153a40]">IPCA</strong> ao lado dos menus nativos do Google Sheets. Ela transforma quatro rotinas do código em comandos claros e acessíveis.
                </p>
                <p>
                  Isso elimina a necessidade de abrir o editor do Apps Script, executar funções manualmente ou conhecer a estrutura técnica da automação.
                </p>
              </div>
            </div>
            <div className="mt-10 overflow-hidden rounded-2xl border border-[#bfd4cf] bg-[#0d3137] p-2 shadow-[0_22px_60px_rgba(13,49,55,0.12)] sm:p-3">
              <img
                src={`${basePath}/images/cases/ipca/menu-ipca-personalizado.png`}
                alt="Menu personalizado IPCA aberto no cabeçalho do Google Sheets, com quatro comandos da automação"
                width="1280"
                height="720"
                className="w-full rounded-xl"
              />
              <div className="grid gap-3 p-3 pt-6 sm:grid-cols-2 sm:p-5 lg:grid-cols-4">
                {menuCommands.map((item, index) => (
                  <article key={item.command} className="rounded-xl border border-white/10 bg-white/[0.06] p-5">
                    <span className="text-xs font-bold text-[#8de0c1]">0{index + 1}</span>
                    <h3 className="mt-3 text-sm font-semibold text-white">{item.command}</h3>
                    <p className="mt-2 text-xs leading-5 text-[#c8d8d8]">{item.text}</p>
                    <code className="mt-4 block break-all text-[0.65rem] text-[#8de0c1]">{item.functionName}</code>
                  </article>
                ))}
              </div>
            </div>
            <div className="mt-6 grid gap-4 rounded-2xl border border-[#dbe4e3] bg-white p-6 sm:p-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#267a67]">Como o botão aparece</p>
                <h3 className="mt-3 text-xl font-semibold text-[#153a40]">Criado automaticamente pelo código</h3>
              </div>
              <div>
                <code className="block overflow-x-auto rounded-xl bg-[#e8f0ee] p-4 text-xs leading-6 text-[#153a40]">
                  onOpen() → SpreadsheetApp.getUi().createMenu(&apos;IPCA&apos;).addItem(...).addToUi()
                </code>
                <p className="mt-3 text-xs leading-5 text-[#587076]">
                  A função <code className="font-bold text-[#267a67]">onOpen()</code> é executada pelo Google sempre que a planilha é aberta. Ela monta o menu e associa cada opção à função JavaScript correspondente.
                </p>
              </div>
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

        <section className="px-6 py-16 sm:py-20 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <SectionHeading eyebrow="Valor entregue" title="O que a solução muda na prática" />
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {executiveValue.map((item) => (
                <article key={item.title} className="rounded-2xl border border-[#dbe4e3] bg-white p-6 shadow-[0_12px_36px_rgba(13,49,55,0.04)]">
                  <span aria-hidden="true" className="mb-5 block h-1 w-10 rounded-full bg-[#62a991]" />
                  <h3 className="text-lg font-semibold text-[#153a40]">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-[#587076]">{item.text}</p>
                </article>
              ))}
            </div>
            <div className="mt-14 grid gap-8 lg:grid-cols-[0.55fr_1.45fr] lg:gap-16">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#267a67]">Minha atuação</p>
                <h3 className="mt-3 text-2xl font-semibold tracking-[-0.02em] text-[#153a40]">Da regra à entrega</h3>
              </div>
              <div className="grid gap-3 md:grid-cols-3">
                {contribution.map(([title, text], index) => (
                  <article key={title} className="rounded-xl bg-[#e8f0ee] p-5">
                    <span className="text-xs font-bold text-[#267a67]">0{index + 1}</span>
                    <h4 className="mt-4 text-base font-semibold text-[#153a40]">{title}</h4>
                    <p className="mt-2 text-xs leading-5 text-[#587076]">{text}</p>
                  </article>
                ))}
              </div>
            </div>
            <div className="mt-10 flex flex-wrap gap-2">
              {skills.slice(0, 6).map((skill) => (
                <span key={skill} className="rounded-full border border-[#bfd4cf] bg-white px-4 py-2 text-xs font-bold text-[#21474d]">{skill}</span>
              ))}
            </div>
          </div>
        </section>

        <section id="dossie-tecnico" className="scroll-mt-24 bg-[#0d3137] px-6 py-16 sm:py-20 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-6 border-b border-white/10 pb-12 lg:grid-cols-[0.7fr_1.3fr]">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#8de0c1]">Dossiê técnico</p>
                <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-white sm:text-4xl">Por dentro da automação</h2>
              </div>
              <p className="max-w-2xl text-base leading-7 text-[#c8d8d8]">
                A partir daqui, o Case detalha a estrutura da planilha, o código JavaScript, a comunicação com o Banco Central, a matemática financeira e as decisões de engenharia.
              </p>
            </div>
            <div className="pt-12">
              <div className="grid gap-5 lg:grid-cols-[0.7fr_1.3fr]">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#8de0c1]">Aba Cálculo</p>
                  <h3 className="mt-3 text-2xl font-semibold tracking-[-0.02em] text-white">O que cada informação representa</h3>
                </div>
                <p className="max-w-2xl text-sm leading-6 text-[#c8d8d8]">
                  A área amarela contém as únicas células preenchidas pelo usuário. Todo o bloco de conferência é produzido pelo script para reduzir digitação, padronizar a análise e deixar explícito o período realmente considerado.
                </p>
              </div>
              <dl className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {calculationFields.map(([term, description]) => (
                  <div key={term} className="rounded-xl border border-white/10 bg-white/[0.05] p-5">
                    <dt className="text-sm font-semibold text-white">{term}</dt>
                    <dd className="mt-2 text-xs leading-5 text-[#c8d8d8]">{description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        <section className="px-6 py-16 sm:py-20 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <SectionHeading eyebrow="Integração técnica" title="O que acontece depois do clique" />
            <div className="mt-5 grid gap-4 text-sm leading-6 text-[#587076] lg:grid-cols-2">
              <p>
                Não existem fórmulas escondidas fazendo a consulta. A automação foi escrita em JavaScript no Google Apps Script, ambiente de programação integrado ao Google Sheets.
              </p>
              <p>
                O Apps Script lê a planilha, conversa com a API pública do Banco Central, executa a regra financeira e devolve os resultados ao próprio arquivo.
              </p>
            </div>
            <ol className="mt-10 grid gap-4">
              {apiSteps.map((step, index) => (
                <li key={step.title} className="grid gap-4 rounded-2xl border border-[#dbe4e3] bg-white p-6 shadow-[0_10px_30px_rgba(13,49,55,0.04)] sm:grid-cols-[3rem_1fr] lg:grid-cols-[3rem_0.8fr_1.2fr] lg:items-center">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#dcebe6] text-xs font-bold text-[#267a67]">0{index + 1}</span>
                  <div>
                    <h3 className="text-base font-semibold text-[#153a40]">{step.title}</h3>
                    <code className="mt-2 block text-[0.7rem] font-bold text-[#267a67]">{step.code}</code>
                  </div>
                  <p className="text-sm leading-6 text-[#587076] sm:col-start-2 lg:col-start-auto">{step.text}</p>
                </li>
              ))}
            </ol>
            <div className="mt-10 grid gap-4 lg:grid-cols-2">
              <article className="overflow-hidden rounded-2xl bg-[#102f35] p-6 sm:p-7">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#8de0c1]">Requisição ao SGS</p>
                <p className="mt-4 text-sm leading-6 text-[#c8d8d8]">
                  A execução individual faz uma chamada para descobrir o índice mais recente e outra para buscar somente o período necessário.
                </p>
                <code className="mt-6 block overflow-x-auto rounded-xl bg-black/20 p-4 text-[0.7rem] leading-6 text-[#d8e6e4]">
                  GET api.bcb.gov.br/dados/serie/bcdata.sgs.433/dados?formato=json&amp;dataInicial=01/02/2024&amp;dataFinal=31/03/2024
                </code>
              </article>
              <article className="overflow-hidden rounded-2xl bg-[#102f35] p-6 sm:p-7">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#8de0c1]">Núcleo do cálculo</p>
                <p className="mt-4 text-sm leading-6 text-[#c8d8d8]">
                  Depois de validar a sequência retornada, o domínio converte cada percentual em fator e mantém a precisão acumulada.
                </p>
                <code className="mt-6 block overflow-x-auto rounded-xl bg-black/20 p-4 text-[0.7rem] leading-6 text-[#d8e6e4]">
                  monthlyFactor = 1 + percentage / 100;<br />
                  accumulatedFactor *= monthlyFactor;<br />
                  adjustedValue = originalValue * accumulatedFactor;
                </code>
              </article>
            </div>
            <div className="mt-8 rounded-2xl border border-[#bfd4cf] bg-[#e8f0ee] p-6 sm:p-8">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#267a67]">Em termos simples</p>
              <p className="mt-4 max-w-4xl text-base leading-7 text-[#153a40]">
                A planilha é a tela. O Apps Script é o motor. A API do Banco Central fornece os índices. O módulo financeiro transforma esses índices no fator acumulado. O gateway apresenta o resultado e registra a memória.
              </p>
            </div>
          </div>
        </section>

        <section id="construcao" className="scroll-mt-24 border-y border-[#e2e9e8] bg-white px-6 py-16 sm:py-20 lg:px-8">
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
            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {[
                ["Por que separar?", "Uma mudança visual na planilha não deve alterar a matemática, e uma mudança na API não deve exigir reconstruir a interface."],
                ["Por que usar um gateway?", "Coordenadas de células, intervalos nomeados, formatos e escritas em lote ficam isolados do restante do código."],
                ["Por que domínio puro?", "A regra financeira pode ser testada fora do Google Sheets, sem depender de planilha aberta, internet ou relógio."],
              ].map(([title, text]) => (
                <article key={title} className="rounded-xl bg-[#e8f0ee] p-6">
                  <h3 className="text-sm font-semibold text-[#153a40]">{title}</h3>
                  <p className="mt-3 text-xs leading-5 text-[#587076]">{text}</p>
                </article>
              ))}
            </div>
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
            <div className="mt-10">
              <h3 className="text-xl font-semibold tracking-[-0.02em] text-[#153a40]">Como ler as colunas da aba Memória</h3>
              <dl className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
                {memoryColumns.map(([term, description]) => (
                  <div key={term} className="rounded-xl border border-[#dbe4e3] bg-[#f5f7f7] p-5">
                    <dt className="text-sm font-semibold text-[#153a40]">{term}</dt>
                    <dd className="mt-2 text-xs leading-5 text-[#587076]">{description}</dd>
                  </div>
                ))}
              </dl>
              <div className="mt-6 rounded-xl border-l-4 border-[#62a991] bg-[#e8f0ee] p-6 text-sm leading-6 text-[#4d686e]">
                <strong className="text-[#153a40]">Exemplo de leitura:</strong> se o IPCA mensal é 0,86%, o fator daquele mês é 1,0086. Esse fator multiplica o saldo anterior; no mês seguinte, o novo fator é aplicado sobre o valor já atualizado. É uma composição, não uma soma simples de percentuais.
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
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {simulationGroups.map((item) => (
                <article key={item.title} className="rounded-xl border border-white/10 bg-white/[0.05] p-5">
                  <h3 className="text-sm font-semibold text-white">{item.title}</h3>
                  <p className="mt-3 text-xs leading-5 text-[#c8d8d8]">{item.text}</p>
                </article>
              ))}
            </div>
            <div className="mt-6 grid gap-4 border-t border-white/10 pt-6 md:grid-cols-2">
              <p className="text-sm leading-6 text-[#c8d8d8]">
                <strong className="text-white">Por que existe:</strong> a aba demonstra que a regra não foi criada apenas para um exemplo. O mesmo motor pode receber diferentes valores e datas sem duplicar a lógica em fórmulas por linha.
              </p>
              <p className="text-sm leading-6 text-[#c8d8d8]">
                <strong className="text-white">Como o lote é otimizado:</strong> o controlador identifica o maior intervalo necessário, consulta os índices uma vez e reaproveita os registros para calcular cada posição.
              </p>
            </div>
            <p className="mt-4 text-xs text-[#9fb4b5]">Dados fictícios. Correção monetária não representa preço ou rentabilidade.</p>
          </div>
        </section>

        <section className="px-6 py-16 sm:py-20 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <SectionHeading eyebrow="Adoção" title="A automação também ensina a usar" />
            <p className="mt-5 max-w-3xl text-sm leading-6 text-[#587076]">
              A aba Instruções reduz dependência de treinamento externo. Ela foi incluída para que uma nova pessoa compreenda a operação, a origem do índice e a lógica de cálculo antes de executar o primeiro processamento.
            </p>
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
            <div className="mt-8 grid gap-3 md:grid-cols-2 lg:grid-cols-4">
              {menuCommands.map((item) => (
                <article key={item.command} className="rounded-xl border border-[#dbe4e3] bg-white p-5">
                  <code className="text-xs font-bold text-[#267a67]">IPCA › {item.command}</code>
                  <p className="mt-3 text-xs leading-5 text-[#587076]">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-[#e2e9e8] bg-white px-6 py-16 sm:py-20 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <SectionHeading eyebrow="Decisões do projeto" title="Escolhas técnicas com justificativa de negócio" />
            <div className="mt-10 grid gap-4 md:grid-cols-2">
              {[
                ["Por que Google Sheets?", "É uma ferramenta familiar para áreas financeiras. A interface reduz a barreira de adoção, enquanto o Apps Script adiciona automação sem exigir outro sistema."],
                ["Por que a API do Banco Central?", "A integração elimina a transcrição manual e mantém a fonte rastreável. A série 433 representa o IPCA mensal oficial."],
                ["Por que não usar apenas fórmulas?", "Validações, consulta externa, controle de concorrência, tratamento de falhas e geração de memória ficam mais consistentes em código modular."],
                ["Por que limitar pela última competência?", "O IPCA é publicado após o mês de referência. Se o usuário pedir uma data futura, a automação usa somente o último índice oficial e avisa a limitação."],
              ].map(([title, text]) => (
                <article key={title} className="rounded-2xl border border-[#dbe4e3] bg-[#f5f7f7] p-6">
                  <h3 className="text-base font-semibold text-[#153a40]">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-[#587076]">{text}</p>
                </article>
              ))}
            </div>
            <div className="mt-8 rounded-2xl bg-[#0d3137] p-7 sm:p-8">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#8de0c1]">Limite funcional</p>
              <p className="mt-4 max-w-4xl text-sm leading-6 text-[#d8e6e4]">
                A solução realiza correção monetária pelo IPCA. Ela não calcula juros, multas, impostos, rentabilidade, marcação a mercado ou risco de crédito. Separar esse limite evita apresentar a atualização inflacionária como retorno de investimento.
              </p>
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
