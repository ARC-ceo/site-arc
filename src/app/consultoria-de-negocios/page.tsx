// app/consultoria-de-negocios/page.tsx
'use client'

import LandingProduto from '@/components/landingProduto/page';

export default function MinhaLanding() {
  return (
    <LandingProduto
      titulo="Direção Certa para Crescer"
      subtitulo="Decisões estratégicas baseadas em análise e experiência."
      descricao="Ajudamos sua empresa a identificar oportunidades, resolver problemas e implementar estratégias que aceleram o crescimento."
      bgHeader="/headerLP.png"

      // Benefícios
      iconeb1={<div />} // insira seu SVG aqui
      beneficio1="Diagnóstico completo"
      descricaobeneficio1="Mapeamos processos, indicadores e riscos para entender a sua operação de ponta a ponta."

      iconeb2={<div />} // insira seu SVG aqui
      beneficio2="Planos de ação claros"
      descricaobeneficio2="Roadmap com prioridades, responsáveis e metas mensuráveis para avançar rápido."

      iconeb3={<div />} // insira seu SVG aqui
      beneficio3="Acompanhamento contínuo"
      descricaobeneficio3="Monitoramos a execução e ajustamos o curso para manter resultados sustentáveis."

      // FAQ
      pergunta1="Como é o diagnóstico inicial?"
      resposta1="Realizamos entrevistas, análise de dados e benchmarking do setor para identificar oportunidades, gargalos e riscos, consolidando um relatório objetivo com recomendações."

      pergunta2="Vocês apoiam a implementação das recomendações?"
      resposta2="Sim. Além do plano de ação, atuamos na execução junto às equipes, definindo responsáveis, metas, prazos e ritos de acompanhamento."

      pergunta3="Como medem resultados e ROI da consultoria?"
      resposta3="Estabelecemos indicadores antes do projeto (crescimento, eficiência, custos, NPS, etc.) e acompanhamos a evolução por meio de metas e checkpoints periódicos."

      // CTA
      cta="Receber consultoria"
      ctaForm="Quero uma consultoria de negócios"
      onCtaClick={() => window.open('https://seulink.com/contato', '_blank')}
    />
  );
}
