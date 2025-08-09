'use client';

import React, { useEffect, useRef, useState } from 'react';
import ConteudoCard from '../../components/conteudoCard/page';

const posts = [
  { imagem: 'Blog1.png', data: '21', mes: 'JUN', titulo: 'Softwares sob medida', texto: 'Entenda em que situações desenvolver um software sob medida pode ser a escolha ideal para otimizar processos' },
  { imagem: 'Blog2.png', data: '22', mes: 'JUN', titulo: 'Estratégia 360°', texto: 'Descubra como integrar canais, dados e tecnologia em uma estratégia 360° para potencializar resultados' },
  { imagem: 'Blog3.png', data: '25', mes: 'JUN', titulo: 'Design centrado no usuário', texto: 'Como a pesquisa com usuários reduz risco e acelera a adoção do seu produto digital' },
];

export default function CarrosselBlog() {
  const viewportRef = useRef<HTMLDivElement | null>(null);
  const slidesRef = useRef<(HTMLDivElement | null)[]>([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;

    // 1º slide sem erro de tipo (use 'auto' em vez de 'instant')
    slidesRef.current[0]?.scrollIntoView({
      behavior: 'auto',
      inline: 'start',
      block: 'nearest',
    });
    setActive(0);

    const ios: IntersectionObserver[] = [];
    slidesRef.current.forEach((el, idx) => {
      if (!el) return;
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => entry.isIntersecting && setActive(idx));
        },
        { root: viewport, threshold: 0.6 }
      );
      io.observe(el);
      ios.push(io);
    });
    return () => ios.forEach((i) => i.disconnect());
  }, []);

  const scrollToIndex = (idx: number) => {
    slidesRef.current[idx]?.scrollIntoView({
      behavior: 'smooth',
      inline: 'center',
      block: 'nearest',
    });
  };

  const intensityFor = (idx: number) => {
    if (idx === active) return 'opacity-100 scale-100 ring-1 ring-white/15';
    if (idx === active - 1 || idx === active + 1) return 'opacity-90 scale-[0.985]';
    return 'opacity-75 scale-[0.965]';
  };

  return (
    <section className="relative w-full">
      <h2 className="mb-8 text-center text-2xl sm:text-3xl font-bold text-white">Últimos Conteúdos</h2>

      {/* clip pra não gerar barra global no Chrome */}
      <div className="relative mx-auto max-w-7xl px-4 overflow-x-clip">
        <div
          ref={viewportRef}
          className="
            relative mx-auto max-w-full min-w-0
            grid grid-flow-col
            auto-cols-[88%]
            max-[400px]:auto-cols-[260px]
            sm:auto-cols-[300px]
            md:auto-cols-[340px]
            lg:auto-cols-[360px]
            gap-6
            overflow-x-auto overflow-y-visible
            scroll-smooth
            snap-x snap-mandatory
            py-2 px-4
            justify-start items-stretch
            no-scrollbar
          "
          style={{ overscrollBehaviorX: 'contain' }}
        >
          {posts.map((p, idx) => (
            <div
              key={idx}
              // <<< ref callback PRECISA retornar void
              ref={(el) => { slidesRef.current[idx] = el; }}
              className={`
                snap-center flex min-w-0
                transition duration-300
                ${intensityFor(idx)}
              `}
            >
              <div className="w-full rounded-3xl p-[1px] bg-gradient-to-b from-white/15 via-white/8 to-white/5">
                <div className="h-full rounded-3xl bg-white/10 p-3 backdrop-blur-xl ring-1 ring-white/12">
                  <ConteudoCard
                    imagem={p.imagem}
                    data={p.data}
                    mes={p.mes}
                    titulo={p.titulo}
                    texto={p.texto}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* bolinhas mobile */}
        <div className="mt-6 flex items-center justify-center gap-2 md:hidden">
          {posts.map((_, idx) => (
            <button
              key={idx}
              aria-label={`Ir para slide ${idx + 1}`}
              onClick={() => scrollToIndex(idx)}
              className={`h-2.5 w-2.5 rounded-full transition ${idx === active ? 'bg-white scale-100' : 'bg-white/35 scale-95 hover:bg-white/60'}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
