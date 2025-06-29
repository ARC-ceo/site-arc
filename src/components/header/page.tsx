import Nav from "../nav/page";
import RotatingWords from '@/components/rotatingWords/page';

export default function Header() {
    return (
        <header className="h-screen">
            <div>
                <Nav />
                {/* Outro exemplo com configurações diferentes */}
                <div className="mt-50 ml-30">
                    <RotatingWords
                        baseText="Construímos incríveis"
                        rotatingWords={['apps', 'softwares', 'soluções', 'sites']}
                        rotateInterval={3000}
                        animationDuration={500}
                        textClassName="text-4xl font-bold text-teal-400"
                        rotatingWordClassName="text-white"
                    />
                </div>
            </div>
        </header>
    );
}