// app/branding/page.tsx
'use client'

import LandingProduto from '@/components/landingProduto/page';

export default function MinhaLanding() {
  return (
    <LandingProduto
      titulo="Posicione Sua Marca no Topo"
      subtitulo="Construa uma marca forte e memorável."
      descricao="Criamos e fortalecemos marcas para que transmitam confiança, credibilidade e se destaquem no mercado."
      bgHeader="/headerLP.png"

      // Benefícios
      iconeb1={<div />} // insira seu SVG aqui
      beneficio1="Diferenciação no mercado"
      descricaobeneficio1="Estratégias de posicionamento para destacar sua marca entre concorrentes."

      iconeb2={<div />} // insira seu SVG aqui
      beneficio2="Fortalecimento da identidade"
      descricaobeneficio2="Coerência visual e verbal que aumenta credibilidade e conexão com o público."

      iconeb3={<div />} // insira seu SVG aqui
      beneficio3="Maior reconhecimento"
      descricaobeneficio3="Consistência multicanal para ser lembrado e preferido."

      // FAQ
      pergunta1="Como vocês definem o posicionamento de marca?"
      resposta1="Realizamos diagnóstico do negócio, análise de concorrentes e público, mapeamos atributos e proposta de valor e consolidamos diretrizes para orientar comunicação e design."

      pergunta2="O que está incluído em um projeto de branding?"
      resposta2="Plataforma de marca (propósito, valores, personalidade), tom de voz, diretrizes de comunicação e identidade visual com orientações de uso e aplicações."

      pergunta3="Em quanto tempo vejo resultados de branding?"
      resposta3="Branding é construção contínua; sinais iniciais aparecem nas primeiras campanhas e no engajamento. Reconhecimento consistente surge no médio prazo com execução alinhada."

      // CTA
      cta="Trabalhar meu branding"
      ctaForm="Quero trabalhar meu branding"
      onCtaClick={() => window.open('https://seulink.com/contato', '_blank')}
    />
  );
}
