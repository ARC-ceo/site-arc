// app/criacao-de-apis-e-implementacao/page.tsx
'use client'

import LandingProduto from '@/components/landingProduto/page';

export default function MinhaLanding() {
  return (
    <LandingProduto
      titulo="APIs que Conectam e Otimizam"
      subtitulo="Comunicação perfeita entre diferentes sistemas."
      descricao="Desenvolvemos APIs que permitem que plataformas e sistemas conversem entre si de forma rápida, segura e eficiente, reduzindo tempo e aumentando a produtividade."
      bgHeader="/headerLP.png"

      // Benefícios
      iconeb1={<div />} // insira seu SVG
      beneficio1="Integração sem falhas"
      descricaobeneficio1="Endpoints projetados para interoperabilidade e baixa fricção entre sistemas."

      iconeb2={<div />} // insira seu SVG
      beneficio2="Alta performance"
      descricaobeneficio2="Arquitetura otimizada para throughput, baixa latência e escalabilidade."

      iconeb3={<div />} // insira seu SVG
      beneficio3="Segurança de dados garantida"
      descricaobeneficio3="Autenticação, autorização e observabilidade desde o primeiro dia."

      // FAQ
      pergunta1="Quais padrões e tipos de API vocês trabalham?"
      resposta1="Implementamos REST e GraphQL, além de webhooks e filas de mensageria quando necessário. A escolha é feita conforme o caso de uso e a maturidade do ecossistema do cliente."

      pergunta2="Como vocês garantem segurança e confiabilidade?"
      resposta2="Aplicamos autenticação via tokens/OAuth, rate limiting, versionamento, logs estruturados, monitoramento e testes automatizados. Também suportamos requisitos de compliance quando exigidos."

      pergunta3="Qual é o prazo típico para criar e publicar uma API?"
      resposta3="Para escopos enxutos, de 1 a 3 semanas entre discovery, implementação e publicação. Projetos maiores são divididos em sprints com entregas incrementais."

      // CTA
      cta="Implementar uma API"
      ctaForm="Quero implementar uma API"
      onCtaClick={() => window.open('https://seulink.com/contato', '_blank')}
    />
  );
}
