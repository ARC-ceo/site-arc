'use client';

import Nav from '../nav/page';
import RotatingWords from '../../components/rotatingWords/page';

export default function Header() {
    return (
        <header
            className="
        relative isolate h-screen w-full font-spaceMono
        overflow-hidden
      "
        >
            {/* Background + overlay */}
            <div
                className="
          absolute inset-0 -z-10 bg-center bg-cover bg-no-repeat
        "
                style={{
                    backgroundImage: `url('/headerBg.png')`,
                }}
                aria-hidden
            />
            <div className="absolute inset-0 -z-10 bg-black/50" aria-hidden />

            {/* Conteúdo */}
            <div className="relative">
                <Nav />

                {/* Bloco de texto centralizado/à esquerda responsivo */}
                <div
                    className="
            mx-auto max-w-7xl px-4 sm:px-6 lg:px-8
            mt-20 sm:mt-28 md:mt-36
          "
                >
                    <div className="max-w-3xl">
                        <RotatingWords
                            baseText=""
                            rotatingWords={[
                                'Conectamos tecnologia e design para dar vida às suas ideias.',
                                'Transformamos desafios em soluções digitais sob medida.',
                                'Inovamos com você, criando soluções digitais completas.',
                                'Seu projeto, nossa expertise: juntos, criamos o extraordinário.',
                            ]}
                            rotateInterval={4000}
                            animationDuration={500}
                            textClassName="font-bold text-white text-[22px] xs:text-[28px] sm:text-3xl md:text-5xl leading-tight"
                            rotatingWordClassName="text-white whitespace-pre-line"
                        />

                    </div>
                </div>
            </div>

            {/* Rodapé do header (opcional): gradiente para transição suave com o próximo bloco */}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-black/30" />
        </header>
    );
}
