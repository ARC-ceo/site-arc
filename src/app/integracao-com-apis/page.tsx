// app/integracao-com-apis/page.tsx
'use client'

import LandingProduto from '@/components/landingProduto/page';

export default function MinhaLanding() {
  return (
    <LandingProduto
      titulo="Conexões Inteligentes, Resultados Reais"
      subtitulo="Amplie as funcionalidades do seu site conectando-o a sistemas externos."
      descricao="Conectamos seu site ou sistema a APIs confiáveis para agilizar processos, integrar dados e oferecer recursos avançados que economizam tempo e reduzem custos."
      bgHeader="/headerLP.png"

      // Benefícios
      iconeb1={<div />} // insira seu SVG aqui
      beneficio1="Processos automatizados"
      descricaobeneficio1="Automatize tarefas repetitivas e ganhe eficiência operacional."

      iconeb2={<div />} // insira seu SVG aqui
      beneficio2="Dados centralizados"
      descricaobeneficio2="Unifique informações de múltiplas fontes em um só lugar."

      iconeb3={<div />} // insira seu SVG aqui
      beneficio3="Melhor experiência do usuário"
      descricaobeneficio3="Recursos avançados e respostas mais rápidas para seus clientes."

      // FAQ
      pergunta1="Quais sistemas e APIs vocês conseguem integrar?"
      resposta1="Trabalhamos com APIs REST/GraphQL e integrações comuns no mercado (pagamentos, CRMs, ERPs, logística, autenticação, analytics), além de integrações customizadas conforme a documentação fornecida."

      pergunta2="A integração vai afetar a segurança do meu site?"
      resposta2="Não. Seguimos boas práticas de segurança (tokens, OAuth, rate limiting, logs e monitoramento) e implementamos camadas de proteção para garantir confidencialidade e integridade dos dados."

      pergunta3="Qual é o prazo típico para integrar uma API?"
      resposta3="Depende da complexidade e da qualidade da documentação. Em projetos simples, de 1 a 2 semanas; integrações mais amplas podem exigir sprints adicionais."

      // CTA
      cta="Integrar minha plataforma"
      ctaForm="Quero integrar minha plataforma"
      onCtaClick={() => window.open('https://seulink.com/contato', '_blank')}
    />
  );
}
