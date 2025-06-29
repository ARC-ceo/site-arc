import Link from "next/link";

export default function Nav() {
    return (
            <nav className="flex flex-row w-full justify-around">
                <Link href="/">
                    <div className="flex flex-row items-center">
                        <img src="/logoArc.png" alt="Logo" />
                        <h1 className="pb-2 text-2xl ml-2">ARC Group</h1>
                        
                    </div>
                </Link>
                <ul className="flex flex-row justify-around w-[60%] text-xl pt-5">
                    <li className="group relative mb-5">
                        <a href="#" className="inline-block">serviços</a>
                        <span className="absolute left-0 bottom-0 h-0.5 bg-current transition-all duration-500 ease-in-out w-0 group-hover:w-full"></span>
                    </li>
                    <li className="group relative mb-5">
                        <a href="#" className="inline-block">blog</a>
                        <span className="absolute left-0 bottom-0 h-0.5 bg-current transition-all duration-500 ease-in-out w-0 group-hover:w-full"></span>
                    </li>
                    <li className="group relative mb-5">
                        <a href="#" className="inline-block">sobre</a>
                        <span className="absolute left-0 bottom-0 h-0.5 bg-current transition-all duration-500 ease-in-out w-0 group-hover:w-full"></span>
                    </li>
                    <li className="group relative mb-5">
                        <a href="#" className="inline-block">projetos</a>
                        <span className="absolute left-0 bottom-0 h-0.5 bg-current transition-all duration-500 ease-in-out w-0 group-hover:w-full"></span>
                    </li>
                    <li className="group relative mb-5">
                        <a href="#" className="inline-block">contato</a>
                        <span className="absolute left-0 bottom-0 h-0.5 bg-current transition-all duration-500 ease-in-out w-0 group-hover:w-full"></span>
                    </li>
                </ul>
            </nav>
    );
}