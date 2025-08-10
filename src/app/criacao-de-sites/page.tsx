// app/criacao-de-sites/page.tsx

'use client'

import LandingProduto from '@/components/landingProduto/page';

export default function MinhaLanding() {
    return (
        <LandingProduto
            titulo="Seu Site Sempre Atual e Performático"
            subtitulo="Sites modernos, rápidos e adaptados a qualquer tela."
            descricao="Criamos sites institucionais, blogs e plataformas personalizadas, cuidando para que estejam sempre no ar, atualizados e alinhados com as últimas tendências de performance e segurança."
            bgHeader="/headerLP.png"

            // Benefícios
            iconeb1={<div />} // aqui você insere o SVG do ícone
            beneficio1="Desenvolvimento responsivo"
            descricaobeneficio1="Seu site adaptado para qualquer dispositivo, garantindo a melhor experiência ao usuário."

            iconeb2={<div />} // aqui você insere o SVG do ícone
            beneficio2="Otimização de velocidade"
            descricaobeneficio2="Carregamento rápido para melhorar o SEO e aumentar as conversões."

            iconeb3={<div />} // aqui você insere o SVG do ícone
            beneficio3="Suporte contínuo e seguro"
            descricaobeneficio3="Manutenção e segurança constantes para manter seu site estável e protegido."

            // FAQ
            pergunta1="Pergunta 01"
            resposta1="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa."

            pergunta2="Pergunta 02"
            resposta2="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa."

            pergunta3="Pergunta 03"
            resposta3="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa."

            // CTA
            cta="Construir meu site agora"
            ctaForm="Quero um site performático"
            onCtaClick={() => window.open('https://seulink.com/contato', '_blank')}
        />
    );
}
