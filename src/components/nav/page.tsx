'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Nav() {
  const [open, setOpen] = useState(false);

  const links = [
    { href: '/Sobre', label: 'sobre' },
    { href: '/Servicos', label: 'serviços' },
    { href: '/Blogs', label: 'blogs' },
    { href: '/Projetos', label: 'projetos' },
  ];

  return (
    <header className="z-50 sticky top-0 bg-transparent">
      <nav className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <img
            src="/logoAzul.png"
            alt="Logo"
            width={180}
            height={40}
            className="h-auto w-[160px] sm:w-[180px]"
          />
        </Link>

        {/* Botão Mobile */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="primary-menu"
          className="lg:hidden inline-flex items-center justify-center rounded-xl px-3 py-2 ring-1 ring-white/15 bg-white/5 backdrop-blur hover:bg-white/10 transition"
        >
          <span className="sr-only">Abrir menu</span>
          {/* Ícone hambúrguer / close */}
          <svg
            className={`h-6 w-6 ${open ? 'hidden' : 'block'}`}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
          >
            <path strokeWidth="2" strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
          </svg>
          <svg
            className={`h-6 w-6 ${open ? 'block' : 'hidden'}`}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
          >
            <path strokeWidth="2" strokeLinecap="round" d="M6 6l12 12M18 6l-12 12" />
          </svg>
        </button>

        {/* Menu Desktop */}
        <ul className="hidden lg:flex items-center gap-10 text-[18px]">
          {links.map((l) => (
            <li key={l.href} className="group relative">
              <Link href={l.href} className="inline-block capitalize">
                {l.label}
              </Link>
              {/* underline animado */}
              <span
                aria-hidden
                className="pointer-events-none absolute left-0 -bottom-1 h-0.5 w-0 bg-[#00C0FF] transition-all duration-300 ease-out group-hover:w-full"
              />
            </li>
          ))}
          <li>
            <Link
              href="/Contato"
              className="inline-flex rounded-full bg-[#00C0FF] px-6 py-2 font-medium text-black shadow-[0_8px_24px_rgba(0,192,255,0.35)] hover:bg-[#00A7DE] transition"
            >
              contato
            </Link>
          </li>
        </ul>
      </nav>

      {/* Menu Mobile (dropdown) */}
      <div
        id="primary-menu"
        className={`lg:hidden transition-[grid-template-rows] duration-300 ease-out ${
          open ? 'grid grid-rows-[1fr]' : 'grid grid-rows-[0fr]'
        }`}
      >
        <div className="overflow-hidden">
          <ul className="mx-4 mb-4 space-y-2 rounded-2xl bg-white/8 p-4 backdrop-blur ring-1 ring-white/15">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block w-full rounded-xl px-3 py-2 capitalize hover:bg-white/10 transition"
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <Link
                href="/Contato"
                onClick={() => setOpen(false)}
                className="block w-full rounded-full bg-[#00C0FF] px-4 py-2 text-center font-medium text-black hover:bg-[#00A7DE] transition"
              >
                contato
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
