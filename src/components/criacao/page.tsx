// pages/index.tsx
'use client'

// pages/index.tsx
'use client'

import { useState } from 'react';

const CreationJourneyPage = () => {
  const [activeStage, setActiveStage] = useState(0);

  const stages = [
    {
      title: "Entendimento do \nDesafio",
      description: "Conversamos com os envolvidos, entendemos o cenário e definimos claramente o objetivo da solução. Foi assim que nasceu o ViaMobility, por exemplo: com base na experiência dos usuários das linhas metropolitanas.",
      image: <img src="carroselimg1.png"></img>
    },
    {
      title: "Prototipação e \nDesign",
      description: "Criamos wireframes e interfaces acessíveis. Priorizamos um design responsivo, amigável e inclusivo. Cada tela é pensada para facilitar a jornada do usuário e destacar as informações mais importantes.",
      image: <img src="carroselimg2.png"></img>
    },
    {
      title: "Desenvolvimento \nÁgil",
      description: "Utilizamos tecnologias modernas como React, Next.js, Tailwind e TypeScript. Entregamos com velocidade e qualidade, aplicando práticas ágeis para que o produto evolua de forma constante e segura.",
      image: <img src="carroselimg3.png"></img>
    },
    {
      title: "Integração com \nDados e Hardware",
      description: "Conectamos seu software a APIs, bancos de dados e dispositivos físicos. Garantimos comunicação eficiente entre sistemas heterogêneos e integração perfeita com soluções existentes.",
      image: <img src="carroselimg4.png"></img>
    },
    {
      title: "Validação e \nLançamento",
      description: "Realizamos testes rigorosos em diversos cenários para garantir qualidade e estabilidade. Implementamos estratégias de lançamento controlado e monitoramento contínuo pós-implantação.",
      image: <img src="carroselimg5.png"></img>
    },
    {
      title: "Suporte e \nEvolução",
      description: "Oferecemos suporte contínuo e planos de evolução para manter seu software atualizado e competitivo. Implementamos melhorias incrementais baseadas em feedback e mudanças de mercado.",
      image: <img src="carroselimg6.png"></img>
    }
  ];

  return (
    <div className="min-h-screen text-white mt-10 mb-10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-[60px] mb-4">
            Nossa Jornada de Criação
          </h1>
          <p className="text-[48px] mx-28 my-10 text-left">
            Cada solução começa com um problema real. No Grupo ARC, unimos estratégia, design e tecnologia para transformar ideias em produtos digitais impactantes.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Menu Lateral */}
          <div className="w-full lg:w-1/3">
            <div className="space-y-1">
              {stages.map((stage, index) => (
                <div 
                  key={index}
                  className={`relative py-5 pl-8 pr-4 rounded-lg cursor-pointer transition-all duration-300`}
                  onClick={() => setActiveStage(index)}
                >
                  {/* Linha vertical - apenas no item ativo */}
                  {activeStage === index && (
                    <div className="absolute left-1 top-0 bottom-0 w-[1px] z-1 bg-radial from-[#00C0FF] from-0% to-white"></div>
                  )}

                  <div className="absolute left-1 top-0 bottom-0 w-[0.5] z-0 h-44 bg-[#dad9d9]"></div>                 
                  
                  <h2 
                    className={`text-[40px] mb-1 transition-colors whitespace-pre ${
                      activeStage === index ? 'text-[#00C0FF]' : 'text-gray-300'
                    }`}
                  >
                    {stage.title}
                  </h2>
                  
                  {/* Linha horizontal - apenas no item ativo */}
                  {activeStage === index && (
                    <div 
                      className={` h-[0.3px] w-100 bg-[#00C0FF] transition-all duration-300`}
                      style={{ marginLeft: '-3rem' }}
                    ></div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Conteúdo à Direita */}
          <div className="w-full lg:w-2/3">
            <div className="p-8">
              <div className="mb-8 overflow-hidden">
                {stages[activeStage].image}
              </div>
              
              <div className="space-y-6">
                
                <p className="text-[40px] text-gray-300 leading-relaxed max-w-[800px]">
                  {stages[activeStage].description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreationJourneyPage;