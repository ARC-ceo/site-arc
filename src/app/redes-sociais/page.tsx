// app/redes-sociais/page.tsx
'use client'

import LandingProduto from '@/components/landingProduto/page';

export default function MinhaLanding() {
  return (
    <LandingProduto
      titulo="Conquiste e Engaje Seu Público"
      subtitulo="Estratégias criativas para fortalecer sua marca."
      descricao="Gerenciamos suas redes sociais com foco em criar conexão com seu público, aumentar engajamento e fortalecer a presença digital."
      bgHeader="/headerLP.png"

      // Benefícios
      iconeb1={<div />} // insira seu SVG aqui
      beneficio1="Conteúdo relevante"
      descricaobeneficio1="Calendários e posts alinhados ao seu público e objetivos de negócio."

      iconeb2={<div />} // insira seu SVG aqui
      beneficio2="Gestão profissional"
      descricaobeneficio2="Planejamento, produção, aprovação e publicação com consistência."

      iconeb3={<div />} // insira seu SVG aqui
      beneficio3="Crescimento orgânico"
      descricaobeneficio3="Boas práticas e estratégias de engajamento para ampliar alcance."

      // FAQ
      pergunta1="Quais redes vocês atendem e como definem a estratégia?"
      resposta1="Atuamos em Instagram, Facebook, LinkedIn, TikTok e YouTube. O plano nasce de um diagnóstico do público, benchmarks e metas (awareness, tráfego ou conversão)."

      pergunta2="Vocês produzem artes, textos e vídeos?"
      resposta2="Sim. Criamos artes, copy e roteiros curtos; também editamos vídeos curtos/reels. A aprovação é feita em calendário editorial."

      pergunta3="Em quanto tempo vejo resultados?"
      resposta3="Resultados iniciais podem aparecer nas primeiras semanas, mas crescimento consistente vem com constância e otimizações contínuas."

      // CTA
      cta="Fortalecer minhas redes"
      ctaForm="Quero fortalecer minhas redes"
      onCtaClick={() => window.open('https://seulink.com/contato', '_blank')}
    />
  );
}
