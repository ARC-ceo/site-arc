'use client';

import React, { useEffect, useRef, useState } from 'react';
import ConteudoCard from '../../components/conteudoCard/page';
import Link from 'next/link';

// 👉 importa os posts tipados do seu conteúdo
import { posts as allPosts } from '@/content/posts';

/** Util: formata dd e MMM (PT-BR, em CAIXA ALTA) */
function extrairDiaEMes(iso?: string) {
  const d = iso ? new Date(iso) : new Date();
  const dia = d.toLocaleDateString('pt-BR', { day: '2-digit' });
  const mes = d
    .toLocaleDateString('pt-BR', { month: 'short' })
    .replace('.', '') // alguns ambientes retornam "set."
    .toUpperCase();
  return { dia, mes };
}

/** Caminho para imagem do post com base no slug */
function imagemDoPost(slug: string) {
  // Coloque suas capas em /public/blog/covers/<slug>.jpg
  return `/blog/covers/${slug}.jpg`;
}

/** Ordena por updatedAt desc; sem data vai para o fim */
function ordenarPorDataDesc(a: { updatedAt?: string }, b: { updatedAt?: string }) {
  const ta = a.updatedAt ? new Date(a.updatedAt).getTime() : -Infinity;
  const tb = b.updatedAt ? new Date(b.updatedAt).getTime() : -Infinity;
  return tb - ta;
}

export default function CarrosselBlog() {
  const viewportRef = useRef<HTMLDivElement | null>(null);
  const slidesRef = useRef<(HTMLDivElement | null)[]>([]);
  const [active, setActive] = useState(0);

  // 👉 pega os 3 mais recentes
  const latest = React.useMemo(() => {
    const ordenados = [...allPosts].sort(ordenarPorDataDesc);
    return ordenados.slice(0, 3).map((p) => {
      const { dia, mes } = extrairDiaEMes(p.updatedAt);
      return {
        imagem: imagemDoPost(p.slug),
        data: dia,
        mes,
        titulo: p.title,
        texto: p.summary, // usa o summary como descrição do card
        slug: p.slug,
      };
    });
  }, []);

  useEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;

    viewport.scrollLeft = 0;
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
  }, [latest.length]);

  const scrollToIndex = (idx: number) => {
    const viewport = viewportRef.current;
    const target = slidesRef.current[idx];
    if (!viewport || !target) return;
    const left = target.offsetLeft - (viewport.clientWidth - target.clientWidth) / 2;
    viewport.scrollTo({ left, behavior: 'smooth' });
  };

  const intensityFor = (idx: number) => {
    if (idx === active) return 'opacity-100 scale-100 ring-1 ring-white/15';
    if (idx === active - 1 || idx === active + 1) return 'opacity-90 scale-[0.985]';
    return 'opacity-75 scale-[0.965]';
  };

  return (
    <section className="relative w-full">
      <h2 className="mb-8 text-center text-2xl sm:text-3xl font-bold text-white">
        Últimos Conteúdos
      </h2>

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
          {latest.map((p, idx) => (
            <div
              key={p.slug}
              ref={(el) => { slidesRef.current[idx] = el; }}
              className={`snap-center flex min-w-0 transition duration-300 ${intensityFor(idx)}`}
            >
                <div className="w-full rounded-3xl p-[1px] bg-gradient-to-b from-white/15 via-white/8 to-white/5">
                  <div className="h-full rounded-3xl bg-white/10 p-3 backdrop-blur-xl ring-1 ring-white/12">
                    <Link href={`/Blogs/${p.slug}`} className="w-full">
                    <ConteudoCard
                      imagem={p.imagem}
                      data={p.data}
                      mes={p.mes}
                      titulo={p.titulo}
                      texto={p.texto}
                    />
                    </Link>
                  </div>
                </div>
            </div>
          ))}
        </div>

        {/* bolinhas mobile */}
        <div className="mt-6 flex items-center justify-center gap-2 md:hidden">
          {latest.map((_, idx) => (
            <button
              key={idx}
              aria-label={`Ir para slide ${idx + 1}`}
              onClick={() => scrollToIndex(idx)}
              className={`h-2.5 w-2.5 rounded-full transition ${idx === active ? 'bg-white scale-100' : 'bg-white/35 scale-95 hover:bg-white/60'
                }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
