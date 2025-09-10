//app/UX-Design/page.tsx

'use client'

import LandingProduto from '@/components/landingProduto/page';

export default function MinhaLanding() {
    return (
        <LandingProduto
            titulo="Interfaces que Encantam e Convertem"
            subtitulo="Crie experiências digitais que unem estética e funcionalidade, mantendo o usuário no centro."
            descricao="No Grupo ARC, desenvolvemos interfaces que transformam interações comuns em experiências memoráveis. Utilizamos princípios de UX/UI para criar layouts visualmente atraentes e fáceis de usar, aumentando a satisfação e a retenção de usuários."
            bgHeader="/headerLP.png"
            // ícones: cole seus SVGs aqui (ou deixe vazio)
            iconeb1={<div />}
            beneficio1="Design e Experiência"
            descricaobeneficio1="Interfaces bonitas, acessíveis e intuitivas."
            iconeb2={<div />}
            beneficio2="Integrações/API"
            descricaobeneficio2="Conectamos seu produto a serviços e dados."
            iconeb3={<div />}
            beneficio3="Suporte Contínuo"
            descricaobeneficio3="Evolução e manutenção para crescer com segurança."
            pergunta1="Como é o processo de desenvolvimento?"
            resposta1="Começamos pelo discovery, definimos escopo e prototipamos. Depois, desenvolvemos em sprints com checkpoints."
            pergunta2="Vocês cuidam da hospedagem?"
            resposta2="Podemos configurar e/ou gerenciar a infraestrutura conforme a necessidade do projeto."
            pergunta3="Qual o prazo típico?"
            resposta3="Varia conforme o escopo, mas landing pages costumam levar de 1 a 3 semanas."
            cta="Falar com a ARC"
            ctaForm="Quero um design de alto impacto"
            onCtaClick={() => window.open('https://seulink.com/contato', '_blank')}
        />
    );
}
