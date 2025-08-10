// app/consultoria-em-ti/page.tsx
'use client'

import LandingProduto from '@/components/landingProduto/page';

export default function MinhaLanding() {
  return (
    <LandingProduto
      titulo="Estratégia Tecnológica Sob Medida"
      subtitulo="Alinhe tecnologia e negócios para crescer de forma sustentável."
      descricao="Nossa consultoria analisa sua operação, identifica melhorias e propõe soluções que aumentam a eficiência e reduzem custos."
      bgHeader="/headerLP.png"

      // Benefícios
      iconeb1={<div />} // insira seu SVG aqui
      beneficio1="Avaliação de infraestrutura"
      descricaobeneficio1="Levantamento técnico do ambiente atual para mapear riscos, gargalos e oportunidades."

      iconeb2={<div />} // insira seu SVG aqui
      beneficio2="Recomendação de soluções"
      descricaobeneficio2="Plano de ação com tecnologias, integrações e prioridades alinhadas ao seu objetivo."

      iconeb3={<div />} // insira seu SVG aqui
      beneficio3="Otimização de recursos"
      descricaobeneficio3="Uso eficiente de orçamento e equipe, com foco em ROI e escalabilidade."

      // FAQ
      pergunta1="Como funciona o processo de consultoria?"
      resposta1="Iniciamos com diagnóstico, entrevistas e levantamento do ambiente; em seguida apresentamos um roadmap com quick wins e etapas, e acompanhamos a execução conforme sua necessidade."

      pergunta2="Vocês atendem empresas de qualquer porte?"
      resposta2="Sim. Adaptamos a abordagem para startups, PMEs e empresas maiores, sempre priorizando impacto rápido e sustentabilidade das mudanças."

      pergunta3="Qual é o modelo de contratação e prazos?"
      resposta3="Podemos atuar por projeto ou em plano mensal. Um diagnóstico inicial costuma levar de 2 a 4 semanas; a implementação segue por sprints conforme o escopo."

      // CTA
      cta="Consultar especialistas"
      ctaForm="Quero uma consultoria de TI"
      onCtaClick={() => window.open('https://seulink.com/contato', '_blank')}
    />
  );
}
