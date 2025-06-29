import Link from "next/link";

export default function Footer() {
    return (
        <div>
            <footer className="py-6 px-12 flex flex-row justify-between items-center">
                <p>Copyright © 2025 ARC Group. Todos os direitos reservados.</p>
                <div className="flex">
                    <Link href="https://www.linkedin.com/company/arc-grupo/" target="_blank" rel="noopener noreferrer"><img src="iconein.png" className="w-9"/></Link>
                    <Link href="https://www.linkedin.com/company/arc-grupo/" target="_blank" rel="noopener noreferrer"><img src="iconegithub.png" className="w-9"/></Link>
                    <Link href="https://www.linkedin.com/company/arc-grupo/" target="_blank" rel="noopener noreferrer"><img src="iconeig.png" className="w-9"/></Link>
                </div>
            </footer>      
        </div>
    );
}