// app/estrategia-360/page.tsx
'use client'

import LandingProduto from '@/components/landingProduto/page';

export default function MinhaLanding() {
  return (
    <LandingProduto
      titulo="Todos os Canais, Uma Só Estratégia"
      subtitulo="Integração coordenada para potencializar resultados."
      descricao="Planejamos e executamos estratégias que integram redes sociais, mídia paga, SEO, branding e outros canais para gerar resultados sólidos."
      bgHeader="/headerLP.png"

      // Benefícios
      iconeb1={<div />} // insira seu SVG aqui
      beneficio1="Ações coordenadas"
      descricaobeneficio1="Planejamento unificado para todos os canais, evitando esforços duplicados."

      iconeb2={<div />} // insira seu SVG aqui
      beneficio2="Maior alcance"
      descricaobeneficio2="Combinação de tráfego orgânico e pago para expandir a presença da marca."

      iconeb3={<div />} // insira seu SVG aqui
      beneficio3="Mensagem consistente"
      descricaobeneficio3="Diretrizes claras para manter tom de voz e identidade em todos os pontos de contato."

      // FAQ
      pergunta1="Como vocês integram redes sociais, mídia paga, SEO e branding em uma estratégia única?"
      resposta1="Começamos com diagnóstico de público, jornada e canais; definimos objetivos por etapa do funil e um calendário unificado. Daí orquestramos conteúdo, mídia e SEO com rituais semanais de análise e ajuste."

      pergunta2="Em quanto tempo costumo ver resultados com uma estratégia 360º?"
      resposta2="Mídia paga pode gerar impacto imediato; ganhos orgânicos (SEO, social) tendem a aparecer entre 6 e 12 semanas. Consolidamos aprendizados por sprint para acelerar o que funciona."

      pergunta3="Como medem e otimizam o desempenho da estratégia?"
      resposta3="Acompanhamos KPIs por canal e por etapa (alcance, CTR, CPA/CAC, conversões e LTV). Rodamos testes A/B e revisões quinzenais para realocar verba e ajustar mensagens."

      // CTA
      cta="Criar minha estratégia 360º"
      ctaForm="Quero uma estratégia 360º"
      onCtaClick={() => window.open('https://seulink.com/contato', '_blank')}
    />
  );
}
