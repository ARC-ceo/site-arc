// app/automacoes-e-agentes-de-ia/page.tsx
'use client'

import LandingProduto from '@/components/landingProduto/page';

export default function MinhaLanding() {
  return (
    <LandingProduto
      titulo="Menos Tarefas Repetitivas, Mais Resultados"
      subtitulo="Inteligência artificial aplicada ao seu negócio."
      descricao="Automatizamos tarefas operacionais e criamos agentes de IA que ajudam na tomada de decisões, otimizando recursos e aumentando a produtividade."
      bgHeader="/headerLP.png"

      // Benefícios
      iconeb1={<div />} // insira seu SVG aqui
      beneficio1="Ganho de tempo"
      descricaobeneficio1="Automatize rotinas repetitivas e libere sua equipe para atividades estratégicas."

      iconeb2={<div />} // insira seu SVG aqui
      beneficio2="Processos mais eficientes"
      descricaobeneficio2="Agentes orquestram etapas, integram sistemas e executam fluxos de ponta a ponta."

      iconeb3={<div />} // insira seu SVG aqui
      beneficio3="Redução de erros"
      descricaobeneficio3="Padronização e validações automáticas minimizam falhas humanas e retrabalho."

      // FAQ
      pergunta1="Que tipos de tarefas podemos automatizar com IA?"
      resposta1="Atendimento e triagem de chamados, qualificação de leads, geração de relatórios, coleta e tratamento de dados, integrações entre sistemas, alertas e aprovações com regras de negócio."

      pergunta2="Como os agentes de IA atuam no dia a dia?"
      resposta2="Eles interpretam instruções, consultam dados, chamam APIs e executam ações com base em regras e contexto. Mantemos ‘humano no loop’ quando decisões exigem validação."

      pergunta3="Quais são os requisitos e o prazo de implantação?"
      resposta3="Após um discovery rápido (processos, ferramentas e dados), configuramos um piloto em 1–3 semanas. Projetos maiores são organizados em sprints com metas claras."

      // CTA
      cta="Automatizar meu negócio"
      ctaForm="Quero automatizar meu negócio"
      onCtaClick={() => window.open('https://seulink.com/contato', '_blank')}
    />
  );
}
