// app/criacao-e-reformulacao-de-identidade-visual/page.tsx
'use client'

import LandingProduto from '@/components/landingProduto/page';

export default function MinhaLanding() {
  return (
    <LandingProduto
      titulo="Uma Marca que Transmite Confiança"
      subtitulo="Construa ou renove a identidade visual da sua empresa."
      descricao="Nossa equipe desenvolve identidades visuais que fortalecem o posicionamento da sua marca, criando reconhecimento e conexão com o público."
      bgHeader="/headerLP.png"

      // Benefícios
      iconeb1={<div />} // insira seu SVG aqui
      beneficio1="Logotipo exclusivo"
      descricaobeneficio1="Criação de marca única, alinhada ao propósito e público do seu negócio."

      iconeb2={<div />} // insira seu SVG aqui
      beneficio2="Paleta de cores estratégica"
      descricaobeneficio2="Cores e tipografia pensadas para reforçar credibilidade e diferenciação."

      iconeb3={<div />} // insira seu SVG aqui
      beneficio3="Manual de marca completo"
      descricaobeneficio3="Guia de uso com padrões, aplicações e boas práticas para consistência."

      // FAQ
      pergunta1="Quanto tempo leva para criar ou reformular uma identidade visual?"
      resposta1="O prazo varia conforme a complexidade do projeto, mas em média entregamos entre 2 e 4 semanas, incluindo apresentação de propostas e ajustes."

      pergunta2="Vocês entregam os arquivos editáveis da marca?"
      resposta2="Sim. Entregamos todos os arquivos finais em formatos editáveis e prontos para uso, incluindo versões para impressão e para uso digital."

      pergunta3="Posso solicitar alterações após a entrega final?"
      resposta3="Sim, oferecemos um período de ajustes após a entrega para garantir que sua marca fique exatamente como você deseja."

      // CTA
      cta="Renovar minha marca"
      ctaForm="Quero fortalecer minha marca"
      onCtaClick={() => window.open('https://seulink.com/contato', '_blank')}
    />
  );
}
