export default function Apresentacao() {
    return (
        <div className="flex flex-col text-[24px] pl-20 pr-20 pb-20 font-spaceMono mt-20">
            <p>Criamos softwares personalizados que resolvem seus desafios. Como especialistas em <span className="border-b border-[#00C0FF]">desenvolvimento</span>, unimos <span className="border-b border-[#00C0FF]">design inteligente</span> e <span className="border-b border-[#00C0FF]">tecnologia</span> para construir as <span className="border-b border-[#00C0FF]">soluções</span> criativas que sua empresa precisa, transformando conceitos em <span className="border-b border-[#00C0FF]">realidade</span>.</p>      
            <img src="imagensApresentacao.png" className="mt-20"/>
        </div>
    );
}