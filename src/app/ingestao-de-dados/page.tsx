// app/ingestao-de-dados-big-data-e-data-lakes/page.tsx
'use client'

import LandingProduto from '@/components/landingProduto/page';

export default function MinhaLanding() {
  return (
    <LandingProduto
      titulo="Transforme Dados em Decisões"
      subtitulo="Estruture, analise e extraia insights de grandes volumes de dados."
      descricao="Coletamos e processamos dados de diversas fontes, estruturando-os para análise e uso estratégico, impulsionando seus resultados."
      bgHeader="/headerLP.png"

      // Benefícios
      iconeb1={<div />} // insira seu SVG aqui
      beneficio1="Dados organizados"
      descricaobeneficio1="Pipelines de ingestão que estruturam e padronizam dados de múltiplas fontes."

      iconeb2={<div />} // insira seu SVG aqui
      beneficio2="Análises estratégicas"
      descricaobeneficio2="Modelos e painéis para identificar padrões, riscos e oportunidades de negócio."

      iconeb3={<div />} // insira seu SVG aqui
      beneficio3="Base para decisões inteligentes"
      descricaobeneficio3="Data Lakes e Big Data com governança e escalabilidade para crescer com segurança."

      // FAQ
      pergunta1="Quais tipos de dados e fontes vocês integram?"
      resposta1="Conectamos bancos relacionais e NoSQL, arquivos, APIs, eventos de aplicativos, planilhas e dados de terceiros. Definimos esquema e qualidade para garantir consistência."

      pergunta2="Qual stack vocês usam para ingestão e análise?"
      resposta2="Utilizamos pipelines em cloud e on-premise (ex.: orquestração, armazenamento em camadas, processamento batch/stream) conforme o cenário e o budget, priorizando performance e custos."

      pergunta3="Como vocês tratam segurança e conformidade (LGPD)?"
      resposta3="Aplicamos controles de acesso, criptografia em repouso e trânsito, mascaramento/anônimização quando necessário e políticas de retenção/consentimento alinhadas à LGPD."

      // CTA
      cta="Trabalhar com meus dados"
      ctaForm="Quero trabalhar meus dados"
      onCtaClick={() => window.open('https://seulink.com/contato', '_blank')}
    />
  );
}
