// app/seo-e-impulsionamento-digital/page.tsx
'use client'

import LandingProduto from '@/components/landingProduto/page';

export default function MinhaLanding() {
  return (
    <LandingProduto
      titulo="Seja Encontrado pelos Seus Clientes"
      subtitulo="Aumente sua visibilidade e alcance."
      descricao="Combinamos SEO e anúncios pagos para garantir que seu negócio apareça no topo das buscas e alcance o público certo."
      bgHeader="/headerLP.png"

      // Benefícios
      iconeb1={<div />} // insira seu SVG aqui
      beneficio1="SEO otimizado"
      descricaobeneficio1="Estratégias on-page e técnicas para melhorar posicionamento e tráfego orgânico."

      iconeb2={<div />} // insira seu SVG aqui
      beneficio2="Campanhas pagas segmentadas"
      descricaobeneficio2="Mídia paga com foco em ROI, segmentação precisa e testes contínuos."

      iconeb3={<div />} // insira seu SVG aqui
      beneficio3="Monitoramento e ajustes constantes"
      descricaobeneficio3="Acompanhamento de métricas e otimizações semanais para performance sustentável."

      // FAQ
      pergunta1="Como vocês trabalham SEO on-page e técnico?"
      resposta1="Realizamos auditoria técnica (velocidade, Core Web Vitals, sitemap/robots), organizamos arquitetura de informação, otimizamos metadados e conteúdo, implementamos marcações e monitoramos rankings/erros para ganhos contínuos."

      pergunta2="Quais plataformas vocês usam para anúncios e como definem a segmentação?"
      resposta2="Atuamos principalmente com Google Ads e Meta Ads. Definimos público por intenção de busca, interesse e remarketing; testamos criativos e palavras-chave com A/B e ajustamos lances e orçamentos conforme o funil."

      pergunta3="Em quanto tempo vejo resultados?"
      resposta3="Mídia paga pode gerar tráfego e conversões imediatamente. Em SEO, os ganhos costumam aparecer entre 2 e 3 meses, com crescimento progressivo conforme as otimizações e a produção de conteúdo."

      // CTA
      cta="Melhorar meu posicionamento"
      ctaForm="Quero melhorar meu posicionamento"
      onCtaClick={() => window.open('https://seulink.com/contato', '_blank')}
    />
  );
}
