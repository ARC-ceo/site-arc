import React from "react";

const steps = [
  {
    title: "Entendimento do Desafio",
    description:
      "Conversamos com os envolvidos, entendemos o cenário e definimos claramente o objetivo da solução. Foi assim que nasceu o ViaMobility, por exemplo: com base na experiência dos usuários das linhas metropolitanas.",
  },
  {
    title: "Prototipação e Design",
    description:
      "Criamos wireframes e interfaces acessíveis. Priorizamos um design responsivo, amigável e inclusivo. Cada tela é pensada para facilitar a jornada do usuário e destacar as informações mais importantes.",
  },
  {
    title: "Desenvolvimento Ágil",
    description:
      "Utilizamos tecnologias modernas como React, Next.js, Tailwind e TypeScript. Entregamos com velocidade e qualidade, aplicando práticas ágeis para que o produto evolua de forma constante e segura.",
  },
  {
    title: "Integração com Dados e Hardware",
    description:
      "Em projetos como o SolarMetrics, conectamos hardware e software para monitoramento em tempo real. Nossa equipe domina a integração ponta a ponta.",
  },
  {
    title: "Validação e Lançamento",
    description:
      "Testamos, ouvimos feedbacks e ajustamos. Antes de lançar, validamos com usuários reais e corrigimos todos os detalhes para garantir performance, usabilidade e impacto positivo.",
  },
  {
    title: "Suporte e Evolução",
    description:
      "Acompanhamos o desempenho e oferecemos melhorias contínuas. Acreditamos em produtos vivos, que evoluem com as pessoas. Nossos sistemas são pensados para crescer junto com o cliente.",
  },
];

export default function ProductJourney() {
  return (
    <section className="py-16 px-4 max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">Nossa Jornada de Criação</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Cada solução começa com um problema real. No Grupo ARC, unimos estratégia, design e tecnologia para transformar ideias em produtos digitais impactantes.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        {steps.map((step, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
          >
            <h3 className="text-gray-800 text-xl font-semibold mb-2">{step.title}</h3>
            <p className="text-gray-600 text-sm">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
