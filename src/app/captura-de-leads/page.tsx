// app/captura-de-leads/page.tsx
'use client'

import LandingProduto from '@/components/landingProduto/page';

export default function MinhaLanding() {
  return (
    <LandingProduto
      titulo="Mais Clientes Potenciais para o Seu Negócio"
      subtitulo="Atraia e converta contatos qualificados."
      descricao="Criamos processos e ferramentas para captar leads e nutrir relacionamentos, aumentando as chances de conversão."
      bgHeader="/headerLP.png"

      // Benefícios
      iconeb1={<div />} // insira seu SVG aqui
      beneficio1="Formulários estratégicos"
      descricaobeneficio1="Captação eficiente com campos e microcópias otimizadas para conversão."

      iconeb2={<div />} // insira seu SVG aqui
      beneficio2="Funis de conversão eficientes"
      descricaobeneficio2="Jornadas claras do primeiro contato até a qualificação e o fechamento."

      iconeb3={<div />} // insira seu SVG aqui
      beneficio3="Integração com CRM"
      descricaobeneficio3="Leads organizados automático no seu CRM para follow-up rápido."

      // FAQ
      pergunta1="Que tipos de estratégias vocês usam para captar leads?"
      resposta1="Criamos formulários otimizados, páginas de captura e fluxos de nutrição (e-mail/WhatsApp), além de integrações que reduzem atritos no cadastro."

      pergunta2="Vocês integram com meu CRM atual?"
      resposta2="Sim. Fazemos integrações com CRMs populares e também soluções customizadas via API, mantendo os dados sincronizados em tempo real."

      pergunta3="Em quanto tempo começo a ver resultados?"
      resposta3="Em cenários simples, as primeiras conversões podem aparecer já nos primeiros dias. Otimizamos continuamente para elevar taxa de conversão e qualidade do lead."

      // CTA
      cta="Gerar mais leads"
      ctaForm="Quero gerar mais leads"
      onCtaClick={() => window.open('https://seulink.com/contato', '_blank')}
    />
  );
}
