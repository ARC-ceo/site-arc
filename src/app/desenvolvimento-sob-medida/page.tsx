// app/desenvolvimento-sob-medida/page.tsx
'use client'

import LandingProduto from '@/components/landingProduto/page';

export default function MinhaLanding() {
  return (
    <LandingProduto
      titulo="Tecnologia Feita para Sua Empresa"
      subtitulo="Soluções criadas sob medida para atender necessidades únicas."
      descricao="Criamos softwares adaptados à realidade do seu negócio, otimizando fluxos, eliminando gargalos e potencializando resultados."
      bgHeader="/headerLP.png"

      // Benefícios
      iconeb1={<div />} // insira seu SVG aqui
      beneficio1="100% personalizável"
      descricaobeneficio1="Funcionalidades feitas sob medida para o seu processo e objetivo."

      iconeb2={<div />} // insira seu SVG aqui
      beneficio2="Escalável e seguro"
      descricaobeneficio2="Arquitetura preparada para crescer com segurança e estabilidade."

      iconeb3={<div />} // insira seu SVG aqui
      beneficio3="Tecnologias modernas"
      descricaobeneficio3="Stack atual para performance, manutenção e longevidade do produto."

      // FAQ
      pergunta1="Qual metodologia de desenvolvimento vocês utilizam?"
      resposta1="Trabalhamos com sprints ágeis (Scrum/Kanban), com checkpoints e entregas iterativas para validar rapidamente com as partes interessadas."

      pergunta2="Como vocês estimam prazo e custo de um software sob medida?"
      resposta2="Fazemos discovery para mapear escopo, definimos épicos e histórias, e então estimamos esforço por sprint. Projetos simples levam semanas; escopos maiores são divididos em fases."

      pergunta3="Existe suporte e evolução após o lançamento?"
      resposta3="Sim. Oferecemos planos de suporte, correções, melhorias contínuas e novos módulos conforme o produto cresce."

      // CTA
      cta="Criar meu software personalizado"
      ctaForm="Quero um software sob medida"
      onCtaClick={() => window.open('https://seulink.com/contato', '_blank')}
    />
  );
}
