import Nav from "../nav/page";
import RotatingWords from '@/components/rotatingWords/page';

export default function Header() {
    return (
        <header className="h-screen font-spaceMono">
            <img src="headerBg.png" className="absolute z-0 brightness-50 w-full h-screen" />
            <div>
                
                <Nav />
                {/* Outro exemplo com configurações diferentes */}
                <div className="mt-40 ml-30">
                    <RotatingWords
                        baseText=""
                        rotatingWords={['Conectamos tecnologia e design \npara dar vida às suas ideias.', 'Transformamos desafios em \nsoluções digitais sob medida.', 'Inovamos com você, criando \nsoluções digitais completas.', 'Seu projeto, nossa expertise: \njuntos, criamos o extraordinário.']}
                        rotateInterval={4000}
                        animationDuration={500}
                        textClassName="text-[36px] font-bold text-teal-400"
                        rotatingWordClassName="text-white whitespace-pre"
                    />
                </div>
            </div>
        </header>
    );
}