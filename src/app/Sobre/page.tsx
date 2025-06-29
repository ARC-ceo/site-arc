import Footer from "@/components/footer/page";
import Nav from "@/components/nav/page";
import React from "react";

export default function AboutPage() {
    return (
        <div>
            <Nav />
            <section className="py-16 px-4 max-w-5xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold mb-4">Sobre o Grupo ARC</h2>
                    <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                        Unimos pessoas, tecnologia e propósito para criar soluções digitais que impactam positivamente o dia a dia das pessoas e organizações.
                    </p>
                </div>

                <div className="space-y-10 text-gray-200 text-base leading-relaxed">
                    <p>
                        O <strong>Grupo ARC</strong> foi fundado em agosto de 2024 com o objetivo de desenvolver uma solução inovadora em parceria com a FIAP, Grupo CCR e ViaMobilidade. Nosso primeiro grande desafio foi melhorar a qualidade do transporte metropolitano em São Paulo através de um aplicativo inteligente.
                    </p>

                    <p>
                        A partir dessa missão nasceu o <strong>ViaMobility</strong>, um app que permite o monitoramento das linhas de trem e metrô em tempo real, informando o status de operação, tempo para o próximo trem e recebendo ocorrências diretamente dos passageiros. A integração com um dashboard interno permite que a operadora aja com rapidez e eficiência.
                    </p>

                    <p>
                        Com base nesse projeto, expandimos nossa atuação e desenvolvemos outras soluções como o <strong>SolarMetrics</strong>, que conecta hardware e software para monitorar geração e consumo de energia solar, e o <strong>Conexão Anjo</strong>, uma plataforma para situações de desastres ambientais.
                    </p>

                    <p>
                        Hoje, oferecemos serviços completos de desenvolvimento web, sistemas personalizados, integração com APIs e sensores, design de interfaces e consultoria técnica. Somos movidos por desafios e apaixonados por criar produtos que realmente fazem a diferença.
                    </p>
                </div>
            </section>
            <Footer />
        </div>
    );
}