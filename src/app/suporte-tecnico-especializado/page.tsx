// app/suporte-tecnico-especializado/page.tsx
'use client'

import LandingProduto from '@/components/landingProduto/page';

export default function MinhaLanding() {
  return (
    <LandingProduto
      titulo="Sua Tecnologia Sempre Funcionando"
      subtitulo="Equipe pronta para resolver qualquer problema técnico."
      descricao="Nossa equipe monitora, diagnostica e corrige problemas técnicos para garantir que seu negócio nunca pare por questões de tecnologia."
      bgHeader="/headerLP.png"

      // Benefícios
      iconeb1={<div />} // insira seu SVG aqui
      beneficio1="Resposta rápida"
      descricaobeneficio1="Atendimento ágil para reduzir indisponibilidade e retomar operações com segurança."

      iconeb2={<div />} // insira seu SVG aqui
      beneficio2="Atendimento personalizado"
      descricaobeneficio2="Suporte alinhado ao seu cenário: ambiente, ferramentas e prioridades do negócio."

      iconeb3={<div />} // insira seu SVG aqui
      beneficio3="Prevenção de falhas"
      descricaobeneficio3="Monitoramento e manutenção preventiva para evitar incidentes e perdas."

      // FAQ
      pergunta1="Como funciona o suporte e os prazos de atendimento (SLA)?"
      resposta1="Trabalhamos com planos sob medida, definindo canais, horários e SLAs por criticidade. O atendimento combina suporte remoto e, quando necessário, on-site, conforme o pacote contratado."

      pergunta2="Quais tipos de problemas e ambientes vocês atendem?"
      resposta2="Atuamos em sites, integrações, APIs, hospedagem e infraestrutura em nuvem, além de erros de aplicação, quedas de serviço, problemas de performance, segurança e deploys."

      pergunta3="Como é a contratação e quanto custa?"
      resposta3="Oferecemos planos mensais ou atendimento por demanda. Iniciamos com um diagnóstico rápido para entender o escopo e indicar o pacote mais adequado ao seu momento."

      // CTA
      cta="Solicitar suporte agora"
      ctaForm="Quero suporte especializado"
      onCtaClick={() => window.open('https://seulink.com/contato', '_blank')}
    />
  );
}
