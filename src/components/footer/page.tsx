// components/footer/page.tsx
'use client';

import Link from 'next/link';
import type { ReactNode } from 'react';

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        // cria stacking context e evita overflow horizontal causado pelos blobs absolutos
        <footer className="relative isolate overflow-hidden z-0 mt-20 text-white">
            {/* fundo */}
            <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-[#0F1322] via-[#0D1117] to-[#0A0A0A]" />
                <div className="absolute -top-24 -left-24 h-80 w-80 rounded-full bg-[#00C0FF]/15 blur-[100px]" />
                {/* evita empurrar o layout para fora: usar translate ao invés de right negativo */}
                <div className="absolute -bottom-24 right-0 translate-x-[10%] h-96 w-96 rounded-full bg-[#6f5bff]/15 blur-[120px]" />
                <div className="absolute inset-0 opacity-[0.07] [background-image:radial-gradient(#ffffff_0.6px,transparent_0.6px)] [background-size:18px_18px]" />
            </div>

            {/* divisor superior */}
            <div className="mx-4 sm:mx-8 lg:mx-12 mb-10 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent" />

            {/* conteúdo acima do fundo */}
            <div className="relative z-10 mx-auto max-w-[1440px] px-6">
                <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
                    {/* Brand */}
                    <div className="space-y-4">
                        <div className="inline-flex items-center gap-3">
                            <div className="grid h-20 w-20 place-items-center">
                                <img src="/logoAzul.png" alt="Logo Grupo ARC" />
                            </div>
                            <span className="text-lg font-semibold tracking-wide">Grupo ARC</span>
                        </div>
                        <p className="text-white/70 text-sm leading-relaxed">
                            Tecnologia, design e dados para transformar ideias em produtos digitais que geram impacto real.
                        </p>
                    </div>

                    {/* Navegação */}
                    <nav aria-label="Principal" className="grid grid-cols-2 gap-8">
                        <div>
                            <h4 className="text-sm font-semibold text-[#00C0FF]">Empresa</h4>
                            <ul className="mt-4 space-y-3 text-sm text-white/80">
                                <li><Link href="/Sobre" className="hover:text-[#00C0FF]">Sobre</Link></li>
                                <li><Link href="/Projetos" className="hover:text-[#00C0FF]">Projetos</Link></li>
                                <li><Link href="/Servicos" className="hover:text-[#00C0FF]">Serviços</Link></li>
                                <li><Link href="/Contato" className="hover:text-[#00C0FF]">Contato</Link></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-sm font-semibold text-[#00C0FF]">Recursos</h4>
                            <ul className="mt-4 space-y-3 text-sm text-white/80">
                                <li><Link href="/termos" className="hover:text-[#00C0FF]">Termos de Uso</Link></li>
                                <li><Link href="/Blogs" className="hover:text-[#00C0FF]">Blog</Link></li>
                            </ul>
                        </div>
                    </nav>

                    {/* Produtos (exemplos) */}
                    <div>
                        <h4 className="text-sm font-semibold text-[#00C0FF]">Produtos & Soluções</h4>
                        <ul className="mt-4 grid grid-cols-1 gap-3 text-sm text-white/80">
                            <li><Link href="/ux-design" className="hover:text-[#00C0FF]">UX Design</Link></li>
                            <li><Link href="/criacao-de-sites" className="hover:text-[#00C0FF]">Criação de Sites</Link></li>
                            <li><Link href="/integracao-com-apis" className="hover:text-[#00C0FF]">Integração com APIs</Link></li>
                            <li><Link href="/desenvolvimento-sob-medida" className="hover:text-[#00C0FF]">Softwares Sob Medida</Link></li>
                            <li><Link href="/automacoes-e-agentes-de-ia" className="hover:text-[#00C0FF]">Automações & IA</Link></li>
                            <li><Link href="/seo-e-impulsionamento" className="hover:text-[#00C0FF]">SEO & Impulsionamento</Link></li>
                            <li className="pt-1">
                                <Link href="/Servicos" className="inline-flex items-center gap-1 text-white hover:text-[#00C0FF]">
                                    Ver todos <span aria-hidden>→</span>
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Social */}
                    <div>
                        <div className="mt-6 flex items-center gap-3">
                            <Social href="https://linkedin.com/company/arc-grupo" label="LinkedIn">
                                <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden><path fill="currentColor" d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 8h5v16H0zM8 8h4.8v2.2h.07c.67-1.2 2.32-2.46 4.78-2.46 5.12 0 6.07 3.37 6.07 7.75V24h-5v-7.1c0-1.69-.03-3.86-2.35-3.86-2.35 0-2.71 1.83-2.71 3.73V24H8z" /></svg>
                            </Social>
                            <Social href="https://instagram.com" label="Instagram">
                                <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden><path fill="currentColor" d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm10 2c1.66 0 3 1.34 3 3v10c0 1.66-1.34 3-3 3H7c-1.66 0-3-1.34-3-3V7c0-1.66 1.34-3 3-3h10zM12 7a5 5 0 100 10 5 5 0 000-10zm0 2.2A2.8 2.8 0 1112 14.8 2.8 2.8 0 0112 9.2zm5.35-2.55a1.15 1.15 0 100 2.3 1.15 1.15 0 000-2.3z" /></svg>
                            </Social>
                            <Social href="https://github.com/arc-CEO" label="GitHub">
                                <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden><path fill="currentColor" d="M12 .5a12 12 0 00-3.79 23.39c.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.54-1.36-1.32-1.73-1.32-1.73-1.08-.74.08-.73.08-.73 1.2.08 1.83 1.23 1.83 1.23 1.06 1.81 2.78 1.28 3.46.98.11-.77.41-1.28.75-1.57-2.66-.3-5.46-1.33-5.46-5.92 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.49 11.49 0 016 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.24 2.87.12 3.17.77.84 1.24 1.91 1.24 3.22 0 4.6-2.8 5.61-5.47 5.91.42.36.8 1.07.8 2.16v3.2c0 .32.22.7.82.58A12 12 0 0012 .5z" /></svg>
                            </Social>
                            <Social href="https://www.youtube.com/@GrupoARC-c6z" label="YouTube">
                                <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden><path fill="currentColor" d="M23.5 6.2a3 3 0 00-2.1-2.1C19.4 3.5 12 3.5 12 3.5s-7.4 0-9.4.6A3 3 0 00.5 6.2 31 31 0 000 12a31 31 0 00.5 5.8 3 3 0 002.1 2.1c2 .6 9.4.6 9.4.6s7.4 0 9.4-.6a3 3 0 002.1-2.1A31 31 0 0024 12a31 31 0 00-.5-5.8zM9.8 15.5V8.5l6.2 3.5-6.2 3.5z" /></svg>
                            </Social>
                        </div>
                    </div>
                </div>

                {/* barra inferior */}
                <div className="mt-12 flex flex-col-reverse items-center justify-between gap-4 border-t border-white/10 py-6 text-xs sm:flex-row text-white/60">
                    <p>© {year} ARC Group — Todos os direitos reservados.</p>
                    <div className="flex items-center gap-4">
                        <Link href="/politica-de-privacidade" className="hover:text-[#00C0FF]">Privacidade</Link>
                        <Link href="/termos" className="hover:text-[#00C0FF]">Termos</Link>
                        <a
                            href="#topo"
                            onClick={(e) => {
                                e.preventDefault();
                                window.scrollTo({ top: 0, behavior: 'smooth' });
                            }}
                            className="inline-flex items-center gap-1 hover:text-[#00C0FF]"
                        >
                            Voltar ao topo <span aria-hidden>↑</span>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

function Social({ href, label, children }: { href: string; label: string; children: ReactNode }) {
    return (
        <a
            href={href}
            aria-label={label}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 ring-1 ring-white/15 text-white/80 hover:text-black hover:bg-[#00C0FF] hover:ring-[#00C0FF]/50 transition"
        >
            <span className="sr-only">{label}</span>
            {children}
        </a>
    );
}
