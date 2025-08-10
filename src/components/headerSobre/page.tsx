// components/headerSobre/page.tsx
'use client';

import Image from 'next/image';
import Nav from '../nav/page';

export default function HeaderSobre() {
  return (
    <header
      className="
        relative isolate w-full font-spaceMono overflow-hidden
        min-h-[70vh] sm:min-h-[80vh] lg:min-h-screen
      "
    >
      {/* Background + overlays */}
      <Image
        src="/bannerSobre.png"
        alt=""
        priority
        fill
        sizes="100vw"
        className="absolute inset-0 -z-10 object-cover object-center"
      />
      <div className="absolute inset-0 -z-10 bg-black/50" aria-hidden />
      <div
        className="
          absolute inset-0 -z-10 opacity-[0.06]
          [background-image:radial-gradient(#ffffff_0.6px,transparent_0.6px)]
          [background-size:18px_18px]
        "
        aria-hidden
      />

      {/* Conteúdo */}
      <div className="relative">
        <Nav />

        {/* Texto responsivo (alinha à esquerda, com respiro em cada breakpoint) */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div
            className="
              pt-20 sm:pt-28 md:pt-36
              pb-16 sm:pb-24 lg:pb-32
              max-w-3xl
            "
          >
            <h1
              className="
                text-white font-bold tracking-tight leading-[1.1]
                text-[clamp(32px,6vw,64px)]
              "
            >
              Nossa essência
            </h1>

            <p
              className="
                mt-4 sm:mt-6
                text-white/80 leading-relaxed
                text-[clamp(14px,2.4vw,20px)]
              "
            >
              Conectamos pessoas, tecnologia e propósito para criar soluções
              digitais que transformam vidas e organizações.
            </p>
          </div>
        </div>
      </div>

      {/* Gradiente inferior para transição suave */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 sm:h-24 md:h-28 bg-gradient-to-b from-transparent to-black/40" />
    </header>
  );
}
