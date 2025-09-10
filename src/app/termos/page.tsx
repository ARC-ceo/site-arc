"use client";

import Nav from "@/components/nav/page";
import Footer from "@/components/footer/page";
import React from "react";

const DPO_EMAIL = "contato@grouparc.com.br"; // altere se quiser
const EMPRESA = "Grupo ARC";
const DOMINIO = "site.grouparc.com.br";
const ULTIMA_ATUALIZACAO = "09/09/2025";

export default function TermosPagina() {
  return (
    <div className="min-h-screen bg-[#0C0F1A] text-white">
      <Header />
      <main className="mx-auto max-w-4xl px-6 py-12">
        <Intro />
        <Sumario />
        <Section id="termos">
          <H2>1. Termos de Uso</H2>
          <Sub>
            <H3>1.1. Aceitação</H3>
            <P>
              Ao acessar e utilizar o website <b>{DOMINIO}</b>, você concorda
              com estes Termos de Uso e com o Aviso de Privacidade (LGPD). Se não
              concordar com qualquer item, recomendamos não utilizar o website.
            </P>
          </Sub>
          <Sub>
            <H3>1.2. Elegibilidade e Conta</H3>
            <P>
              O uso do site é destinado a maiores de 18 anos. Caso crie conta
              ou formulário recorrente, você é responsável por manter a
              confidencialidade das credenciais e por todas as atividades sob o
              seu acesso.
            </P>
          </Sub>
          <Sub>
            <H3>1.3. Conteúdos e Propriedade Intelectual</H3>
            <P>
              Todo o conteúdo (textos, imagens, marcas, layouts e código) é de
              titularidade do <b>{EMPRESA}</b> ou licenciado a nós e é
              protegido por lei. É vedada a reprodução, distribuição ou
              engenharia reversa sem autorização expressa.
            </P>
          </Sub>
          <Sub>
            <H3>1.4. Uso Aceitável</H3>
            <UL>
              <LI>Não inserir conteúdo ilegal, ofensivo ou que viole direitos de terceiros.</LI>
              <LI>Não realizar tentativas de invasão, scraping abusivo ou sobrecarga do serviço.</LI>
              <LI>Respeitar nossas políticas de segurança, inclusive mecanismos anti-spam.</LI>
            </UL>
          </Sub>
          <Sub>
            <H3>1.5. Disponibilidade, Alterações e Encerramento</H3>
            <P>
              Podemos modificar funcionalidades, suspender ou encerrar o acesso
              ao site a qualquer tempo, mediante aviso quando cabível. Atualizações
              destes Termos serão publicadas nesta página, com a data de
              “Última atualização”.
            </P>
          </Sub>
          <Sub>
            <H3>1.6. Isenções e Limitação de Responsabilidade</H3>
            <P>
              O site é disponibilizado “no estado em que se encontra”. Na
              máxima extensão permitida em lei, não nos responsabilizamos por
              danos indiretos, lucros cessantes ou indisponibilidades alheias ao
              nosso controle (ex.: provedores de hospedagem/terceiros).
            </P>
          </Sub>
          <Sub>
            <H3>1.7. Lei Aplicável e Foro</H3>
            <P>
              Estes Termos regem-se pelas leis brasileiras. Fica eleito o foro
              da comarca do domicílio do usuário, conforme o art. 101, I, do
              CDC, quando aplicável; nos demais casos, o foro da comarca de São
              Paulo/SP.
            </P>
          </Sub>
        </Section>

        <Section id="privacidade">
          <H2>2. Aviso de Privacidade (LGPD)</H2>
          <P>
            Este Aviso descreve como o <b>{EMPRESA}</b> coleta, utiliza, compartilha
            e protege seus <b>dados pessoais</b>, e como você pode exercer seus
            direitos como titular nos termos da <b>Lei nº 13.709/2018 (LGPD)</b>.
          </P>

          <Sub>
            <H3>2.1. Controlador e Encarregado (DPO)</H3>
            <P>
              Controlador: <b>{EMPRESA}</b>. Encarregado (DPO):{" "}
              <a className="text-[#00C0FF] underline" href={`mailto:${DPO_EMAIL}`}>
                {DPO_EMAIL}
              </a>.
            </P>
          </Sub>

          <Sub>
            <H3>2.2. Dados que Coletamos</H3>
            <UL>
              <LI>
                <b>Formulários de contato/landing pages:</b> nome, e-mail, telefone
                (opcional), mensagens livres e metadados técnicos (IP, data/hora).
              </LI>
              <LI>
                <b>Cookies e similares:</b> para funcionamento do site, métricas de
                uso e segurança anti-spam (ex.: Turnstile).
              </LI>
            </UL>
          </Sub>

          <Sub>
            <H3>2.3. Bases Legais</H3>
            <UL>
              <LI><b>Consentimento</b> (art. 7º, I) — quando aplicável.</LI>
              <LI>
                <b>Execução de Contrato</b> ou procedimentos preliminares (art. 7º, V).
              </LI>
              <LI>
                <b>Legítimo Interesse</b> (art. 7º, IX) — para segurança, prevenção a
                fraudes/abuso e melhorias do site, com avaliação de impacto.
              </LI>
              <LI><b>Cumprimento de obrigação legal</b> (art. 7º, II) — quando exigido.</LI>
            </UL>
          </Sub>

          <Sub>
            <H3>2.4. Finalidades de Uso</H3>
            <UL>
              <LI>Responder solicitações e orçamentos enviados pelos formulários.</LI>
              <LI>Registrar contatos em planilha/CRM para follow-up comercial.</LI>
              <LI>Assegurar a segurança do site (anti-spam, mitigação de abuso).</LI>
              <LI>Analisar métricas de uso para aprimorar conteúdos e UX.</LI>
            </UL>
          </Sub>

          <Sub>
            <H3>2.5. Compartilhamento com Terceiros</H3>
            <P>
              Podemos utilizar provedores para envio de e-mails e hospedagem
              (ex.: Vercel, Resend, Cloudflare Turnstile, Google Sheets/Apps
              Script). O compartilhamento limita-se ao necessário para as
              finalidades acima, com medidas contratuais e técnicas adequadas.
            </P>
          </Sub>

          <Sub>
            <H3>2.6. Cookies e Tecnologias Similares</H3>
            <P>
              Utilizamos cookies essenciais e ferramentas de terceiros para
              segurança e métricas. Você pode ajustar preferências no navegador.
              Cookies essenciais não podem ser desativados por serem necessários
              ao funcionamento básico do site.
            </P>
          </Sub>

          <Sub>
            <H3>2.7. Direitos do Titular</H3>
            <P>
              Você pode solicitar, a qualquer tempo: confirmação de tratamento,
              acesso, correção, anonimização, portabilidade, eliminação dos
              dados tratados com consentimento e informações sobre compartilhamentos.
              Para exercer, contate o DPO em{" "}
              <a className="text-[#00C0FF] underline" href={`mailto:${DPO_EMAIL}`}>
                {DPO_EMAIL}
              </a>.
            </P>
          </Sub>

          <Sub>
            <H3>2.8. Segurança da Informação</H3>
            <P>
              Adotamos medidas técnicas e organizacionais proporcionais aos
              riscos, como criptografia em trânsito (HTTPS), controles de acesso
              e registros de atividade. Nenhuma medida é absoluta, mas buscamos
              continuamente aprimorar a proteção.
            </P>
          </Sub>

          <Sub>
            <H3>2.9. Retenção e Eliminação</H3>
            <P>
              Mantemos dados pelo tempo necessário às finalidades e exigências
              legais/contratuais. Ao término, eliminamos ou anonimizamos de
              acordo com práticas de mercado e requisitos da LGPD.
            </P>
          </Sub>

          <Sub>
            <H3>2.10. Transferências Internacionais</H3>
            <P>
              Alguns provedores podem operar fora do Brasil. Nesses casos,
              adotamos salvaguardas adequadas (art. 33 e seguintes da LGPD),
              tais como cláusulas contratuais específicas e avaliação de
              conformidade.
            </P>
          </Sub>

          <Sub>
            <H3>2.11. Contato do DPO</H3>
            <P>
              Dúvidas, solicitações de direitos e reclamações:{" "}
              <a className="text-[#00C0FF] underline" href={`mailto:${DPO_EMAIL}`}>
                {DPO_EMAIL}
              </a>.
            </P>
          </Sub>
        </Section>

        <Section id="atualizacoes">
          <H2>3. Atualizações deste Documento</H2>
          <P>
            Podemos atualizar este documento para refletir mudanças legislativas
            ou operacionais. A versão vigente será sempre a disponível nesta
            página, com a data de última atualização indicada abaixo.
          </P>
          <div className="mt-6 rounded-xl border border-white/10 bg-white/5 p-4">
            <p className="text-sm text-white/70">
              <b>Última atualização:</b> {ULTIMA_ATUALIZACAO}
            </p>
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  );
}

/* ====== Componentes visuais e utilitários ====== */

function Header() {
  return (
    <div className="relative isolate">
      <Nav />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#0C0F1A] via-[#0F1322] to-[#0C0F1A]" />
      <div className="absolute -top-28 -left-28 h-[28rem] w-[28rem] rounded-full bg-[#00C0FF]/15 blur-3xl" />
      <div className="absolute -bottom-32 right-[-10%] h-[32rem] w-[32rem] rounded-full bg-[#00C0FF]/10 blur-3xl" />
      <div className="mx-auto max-w-4xl px-6 py-16">
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">Termos de Uso & Privacidade (LGPD)</h1>
        <p className="mt-3 text-white/75">
          Transparência no uso de dados e nas condições de utilização do {DOMINIO}.
        </p>
      </div>
    </div>
  );
}

function Intro() {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
      <p className="text-white/85 text-sm">
        Este documento reúne os <b>Termos de Uso</b> e o <b>Aviso de Privacidade</b> em conformidade com a
        <b> LGPD</b>. Para dúvidas ou solicitações de direitos do titular, fale com nosso DPO em{" "}
        <a className="text-[#00C0FF] underline" href={`mailto:${DPO_EMAIL}`}>
          {DPO_EMAIL}
        </a>.
      </p>
    </div>
  );
}

function Sumario() {
  const itens = [
    { id: "termos", label: "1. Termos de Uso" },
    { id: "privacidade", label: "2. Aviso de Privacidade (LGPD)" },
    { id: "atualizacoes", label: "3. Atualizações" },
  ];
  return (
    <nav className="mt-8 mb-10 rounded-2xl border border-white/10 bg-white/5 p-4">
      <p className="text-sm mb-3 text-white/70">Sumário</p>
      <ul className="grid gap-2 sm:grid-cols-2">
        {itens.map((i) => (
          <li key={i.id}>
            <a
              href={`#${i.id}`}
              className="inline-flex w-full items-center justify-between rounded-lg bg-black/20 px-3 py-2 text-sm text-white/85 ring-1 ring-white/10 hover:ring-white/25"
            >
              {i.label} <span aria-hidden>↗</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

function Section({ id, children }: { id?: string; children: React.ReactNode }) {
  return (
    <section id={id} className="scroll-mt-24">
      <div className="prose prose-invert max-w-none">
        {children}
      </div>
      <div className="my-10 h-px w-full bg-white/10" />
    </section>
  );
}

function H2({ children }: { children: React.ReactNode }) {
  return <h2 className="mb-3 text-2xl font-bold">{children}</h2>;
}

function H3({ children }: { children: React.ReactNode }) {
  return <h3 className="mt-4 text-lg font-semibold">{children}</h3>;
}

function P({ children }: { children: React.ReactNode }) {
  return <p className="mt-2 leading-relaxed text-white/85">{children}</p>;
}

function Sub({ children }: { children: React.ReactNode }) {
  return <div className="mt-2">{children}</div>;
}

function UL({ children }: { children: React.ReactNode }) {
  return <ul className="mt-2 list-disc pl-6 text-white/85">{children}</ul>;
}

function LI({ children }: { children: React.ReactNode }) {
  return <li className="mt-1">{children}</li>;
}
