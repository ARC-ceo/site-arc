import Link from "next/link";

export default function Nav() {
    return (
            <nav className="flex flex-row w-full justify-around">
                <Link href="/">
                    <div className="flex flex-row items-center">
                        <img src="/logoAzul.png" alt="Logo" className="z-1" width={200} height={200}/>                        
                    </div>
                </Link>
                <ul className="flex flex-row justify-around w-[60%] text-[20px] pt-14">
                    <li className="group relative mb-5">
                        <a href="/Sobre" className="inline-block">sobre</a>
                        <span className="absolute left-0 bottom-22 h-0.5 bg-current transition-all duration-500 ease-in-out w-0 group-hover:w-full"></span>
                    </li>
                    <li className="group relative mb-5">
                        <a href="/Servicos" className="inline-block">serviços</a>
                        <span className="absolute left-0 bottom-22 h-0.5 bg-current transition-all duration-500 ease-in-out w-0 group-hover:w-full"></span>
                    </li>
                    <li className="group relative mb-5">
                        <a href="/" className="inline-block">blogs</a>
                        <span className="absolute left-0 bottom-22 h-0.5 bg-current transition-all duration-500 ease-in-out w-0 group-hover:w-full"></span>
                    </li>
                    <li className="group relative mb-5">
                        <a href="/Projetos" className="inline-block">projetos</a>
                        <span className="absolute left-0 bottom-22 h-0.5 bg-current transition-all duration-500 ease-in-out w-0 group-hover:w-full"></span>
                    </li>
                    <li className="group relative">
                        <a href="/Contato" className="flex bg-[#00C0FF] px-8 rounded-4xl">contato</a>
                    </li>
                </ul>
            </nav>
    );
}