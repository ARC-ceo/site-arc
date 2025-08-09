'use client';

import React, { useCallback, useMemo, useRef, useState } from 'react';

type Stage = {
  title: string;
  description: string;
  image: React.ReactElement<React.ImgHTMLAttributes<HTMLImageElement>>;
};

const CreationJourneyPage: React.FC = () => {
  const [activeStage, setActiveStage] = useState(0);
  const [hint, setHint] = useState<'prev' | 'next' | null>(null);
  const [direction, setDirection] = useState<1 | -1>(1); // 1: next, -1: prev

  // swipe refs
  const touchStartX = useRef<number | null>(null);
  const touchDeltaX = useRef<number>(0);

  const stages: Stage[] = useMemo(
    () => [
      {
        title: 'Entendimento do \nDesafio',
        description:
          'Conversamos com os envolvidos, entendemos o cenário e definimos claramente o objetivo da solução. Foi assim que nasceu o ViaMobility, por exemplo: com base na experiência dos usuários das linhas metropolitanas.',
        image: <img src="/carroselimg1.png" width={1280} height={720} alt="" />,
      },
      {
        title: 'Prototipação e \nDesign',
        description:
          'Criamos wireframes e interfaces acessíveis. Priorizamos um design responsivo, amigável e inclusivo. Cada tela é pensada para facilitar a jornada do usuário e destacar as informações mais importantes.',
        image: <img src="/carroselimg2.png" width={1280} height={720} alt="" />,
      },
      {
        title: 'Desenvolvimento \nÁgil',
        description:
          'Utilizamos tecnologias modernas como React, Next.js, Tailwind e TypeScript. Entregamos com velocidade e qualidade, aplicando práticas ágeis para que o produto evolua de forma constante e segura.',
        image: <img src="/carroselimg3.png" width={1280} height={720} alt="" />,
      },
      {
        title: 'Integração com \nDados e Hardware',
        description:
          'Conectamos seu software a APIs, bancos de dados e dispositivos físicos. Garantimos comunicação eficiente entre sistemas heterogêneos e integração perfeita com soluções existentes.',
        image: <img src="/carroselimg4.png" width={1280} height={720} alt="" />,
      },
      {
        title: 'Validação e \nLançamento',
        description:
          'Realizamos testes rigorosos em diversos cenários para garantir qualidade e estabilidade. Implementamos estratégias de lançamento controlado e monitoramento contínuo pós-implantação.',
        image: <img src="/carroselimg5.png" width={1280} height={720} alt="" />,
      },
      {
        title: 'Suporte e \nEvolução',
        description:
          'Oferecemos suporte contínuo e planos de evolução para manter seu software atualizado e competitivo. Implementamos melhorias incrementais baseadas em feedback e mudanças de mercado.',
        image: <img src="/carroselimg6.png" width={1280} height={720} alt="" />,
      },
    ],
    []
  );

  const lastIndex = stages.length - 1;
  const prevIndex = activeStage === 0 ? 0 : activeStage - 1;
  const nextIndex = activeStage === lastIndex ? lastIndex : activeStage + 1;

  const goTo = useCallback(
    (idx: number, dir: 1 | -1) => {
      const clamped = Math.max(0, Math.min(lastIndex, idx));
      setDirection(dir);
      setActiveStage(clamped);
    },
    [lastIndex]
  );

  const goPrev = useCallback(() => goTo(activeStage - 1, -1), [activeStage, goTo]);
  const goNext = useCallback(() => goTo(activeStage + 1, 1), [activeStage, goTo]);

  // touch/swipe handlers
  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchDeltaX.current = 0;
  };
  const onTouchMove = (e: React.TouchEvent) => {
    if (touchStartX.current == null) return;
    touchDeltaX.current = e.touches[0].clientX - touchStartX.current;
  };
  const onTouchEnd = () => {
    const delta = touchDeltaX.current;
    touchStartX.current = null;
    touchDeltaX.current = 0;
    if (Math.abs(delta) < 48) return; // threshold
    if (delta < 0 && activeStage < lastIndex) goNext();
    if (delta > 0 && activeStage > 0) goPrev();
  };

  return (
    <div className="min-h-[820px] md:min-h-[900px] text-white mt-10 mb-10 overflow-x-hidden">
      {/* keyframes locais para a transição */}
      <style jsx global>{`
        @keyframes fadeSlideInR {
          from {
            opacity: 0;
            transform: translateX(12px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes fadeSlideInL {
          from {
            opacity: 0;
            transform: translateX(-12px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>

      <div className="container mx-auto px-4 touch-pan-y">
        <div className="text-center mb-10 md:mb-16">
          <h1 className="text-[28px] md:text-[40px] mb-4">Nossa Jornada de Criação</h1>
          <p className="text-[16px] md:text-[20px] mx-0 md:mx-28 my-6 md:my-10">
            Cada solução começa com um problema real. No Grupo ARC, unimos estratégia, design e
            tecnologia para transformar ideias em produtos digitais impactantes.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* MENU LATERAL (Desktop) */}
          <div className="hidden lg:block lg:w-1/3 pl-10">
            <div className="space-y-1">
              {stages.map((stage, index) => {
                const isActive = activeStage === index;
                const isHinted =
                  (hint === 'prev' && index === prevIndex) ||
                  (hint === 'next' && index === nextIndex);
                return (
                  <div
                    key={index}
                    className="relative py-5 pl-8 pr-4 rounded-lg cursor-pointer transition-all duration-300"
                    onClick={() => goTo(index, index > activeStage ? 1 : -1)}
                  >
                    {/* Linha vertical do item ativo */}
                    {isActive && (
                      <div className="absolute left-1 top-0 bottom-0 w-px z-[1] bg-gradient-to-b from-[#00C0FF] to-white" />
                    )}
                    {/* Trilha (decorativa) */}
                    <div className="absolute left-1 top-0 bottom-0 w-px z-0 h-44 bg-[#dad9d9]" />

                    <h2
                      className={`text-[16px] mb-1 transition-colors whitespace-pre
                        ${isActive ? 'text-[#00C0FF]' : isHinted ? 'text-white' : 'text-gray-300'}`}
                    >
                      {stage.title}
                    </h2>

                    {/* Linha horizontal do ativo */}
                    {isActive && (
                      <div
                        className="h-px w-80 bg-[#00C0FF] transition-all duration-300"
                        style={{ marginLeft: '-3rem' }}
                      />
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* CONTEÚDO À DIREITA */}
          <div className="w-full lg:w-2/3">
            <div
              className="p-4 md:p-8 select-none"
              onTouchStart={onTouchStart}
              onTouchMove={onTouchMove}
              onTouchEnd={onTouchEnd}
            >
              {/* Imagem (aspect ratio fixo) */}
              <div className="mb-6 md:mb-8 w-full max-w-[720px] aspect-[16/9] overflow-hidden rounded-2xl bg-white/5 ring-1 ring-white/10">
                {React.cloneElement(
                  stages[activeStage].image as React.ReactElement<
                    React.ImgHTMLAttributes<HTMLImageElement>
                  >,
                  {
                    className: 'h-full w-full object-cover block',
                    draggable: false,
                    style: {
                      animation: `${direction === 1 ? 'fadeSlideInR' : 'fadeSlideInL'} 320ms ease`,
                    },
                  }
                )}
              </div>

              {/* Texto com altura reservada */}
              <div className="space-y-4 md:space-y-6 min-h-[120px] md:min-h-[140px]">
                <p className="text-[16px] md:text-[20px] text-gray-300 leading-relaxed max-w-[680px]">
                  {stages[activeStage].description}
                </p>
              </div>

              {/* Controles Mobile + Dots */}
              <div className="mt-6 flex items-center justify-between md:justify-start md:gap-6">
                {/* Prev */}
                <button
                  className="inline-flex items-center gap-2 rounded-full px-4 py-2 ring-1 ring-white/15 bg-white/10 hover:bg-white/15 transition disabled:opacity-40 disabled:cursor-not-allowed"
                  onMouseEnter={() => setHint('prev')}
                  onMouseLeave={() => setHint(null)}
                  onClick={goPrev}
                  disabled={activeStage === 0}
                >
                  ← <span className="hidden sm:inline">Anterior</span>
                </button>

                {/* Dots */}
                <div className="flex-1 flex items-center justify-center gap-2 md:gap-3">
                  {stages.map((_, i) => {
                    const isActive = i === activeStage;
                    const isHinted =
                      (hint === 'prev' && i === prevIndex) || (hint === 'next' && i === nextIndex);
                    return (
                      <button
                        key={i}
                        aria-label={`Ir para etapa ${i + 1}`}
                        className={`
                          h-2 w-2 rounded-full transition-all
                          ${isActive ? 'w-6 bg-[#00C0FF]' : isHinted ? 'bg-white/80' : 'bg-white/40'}
                        `}
                        onClick={() => goTo(i, i > activeStage ? 1 : -1)}
                      />
                    );
                  })}
                </div>

                {/* Next */}
                <button
                  className="inline-flex items-center gap-2 rounded-full px-4 py-2 ring-1 ring-white/15 bg-white/10 hover:bg-white/15 transition disabled:opacity-40 disabled:cursor-not-allowed"
                  onMouseEnter={() => setHint('next')}
                  onMouseLeave={() => setHint(null)}
                  onClick={goNext}
                  disabled={activeStage === lastIndex}
                >
                  <span className="hidden sm:inline">Próximo</span> →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreationJourneyPage;
