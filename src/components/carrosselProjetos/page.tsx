// components/carrosselProjetos/page.tsx
'use client';

import { useState } from "react";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

const projetos = [
  {
    id: 1,
    tituloImagem: "SMART SOLAR PERFORMANCE",
    subtituloImagem: "Solar   Metrics",
    titulo: "Solar Metrics – Energia solar com inteligência financeira",
    subtitulo: "Projeto ARC Sustentável",
    texto:
      "O Solar Metrics é uma solução inteligente para acompanhar a geração de energia solar e calcular o retorno financeiro do sistema, incentivando o uso sustentável e eficiente da energia.",
    tags: ["Energia Sustentável", "Dados em Tempo Real", "Experiência do Usuário"],
    imagem: "/metricsbanner.png",
    link: "/SolarMetrics",
  },
  {
    id: 2,
    tituloImagem: "URBAN MOBILITY INTELLIGENCE",
    subtituloImagem: "Via Mobility  Platform",
    titulo: "ViaMobility - Mobilidade Urbana Inteligente",
    subtitulo: "CCR x FIAP",
    texto:
      "A plataforma ViaMobility integra dados em tempo real para otimizar a operação de estações de metrô, promovendo segurança, eficiência e experiência aprimorada ao usuário.",
    tags: ["Mobilidade Urbana", "Dados em Tempo Real", "Experiência do Usuário"],
    imagem: "/viamob.png",
    link: "/ViaMobility",
  },
  {
    id: 3,
    tituloImagem: "COMMUNITARY PREVENTIONS APP",
    subtituloImagem: "Conexão   Anjo",
    titulo: "Conexão Anjo - Conectando Quem Precisa",
    subtitulo: "ARC Voluntários",
    texto:
      "A plataforma Conexão Anjo conecta voluntários a vítimas de desastres naturais, oferecendo apoio, doações e orientação sobre abrigos emergenciais em regiões afetadas.",
    tags: ["Doações", "Emergências", "Dados em Tempo Real", "Experiência do Usuário"],
    imagem: "/anjobanner.png",
    link: "/ConexaoAnjo",
  },
];

export default function CarrosselProjetos() {
  const [current, setCurrent] = useState(1);

  const handleNext = () => setCurrent((prev) => (prev + 1) % projetos.length);
  const handlePrev = () => setCurrent((prev) => (prev - 1 + projetos.length) % projetos.length);

  return (
    <div className="relative mx-auto w-full max-w-7xl pb-20">
      {/* Cards */}
      <div className="flex items-center justify-center gap-6">
        {projetos.map((projeto, index) => {
          const isActive = index === current;

          return (
            <article
              key={projeto.id}
              className={clsx(
                "relative w-[300px] min-h-[600px] rounded-3xl p-[1px] transition-all duration-300",
                isActive
                  ? "scale-100 opacity-100 z-10"
                  : "scale-95 opacity-40 -z-0",
                // Borda gradiente + vidro sutil (mesmo visual dos ServiceCards)
                "bg-gradient-to-b from-white/15 via-white/8 to-white/5 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)] hover:-translate-y-1"
              )}
            >
              {/* Painel de vidro interno */}
              <div className="flex h-full flex-col overflow-hidden rounded-3xl bg-white/10 backdrop-blur-xl ring-1 ring-white/12">
                {/* Imagem */}
                <div className="relative h-52 w-full">
                  <Image
                    src={projeto.imagem}
                    alt={projeto.tituloImagem}
                    fill
                    className="object-cover"
                    priority={isActive}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  {/* Legendas sobre a imagem */}
                  <div className="absolute inset-0 p-4 text-center text-white flex flex-col items-center justify-end">
                    <h4 className="text-sm font-bold tracking-wide">{projeto.tituloImagem}</h4>
                    <p className="text-xs opacity-90">{projeto.subtituloImagem}</p>
                  </div>
                  {/* Glare */}
                  <div className="pointer-events-none absolute -top-2 left-6 right-6 h-8 rounded-full bg-white/25 blur-md opacity-60" />
                </div>

                {/* Conteúdo */}
                <div className="flex flex-1 flex-col p-4">
                  <h3 className="mb-1 py-2 text-base font-bold text-white">{projeto.titulo}</h3>
                  <h4 className="mb-3 py-2 text-sm text-white/70">{projeto.subtitulo}</h4>

                  <p className="mb-4 py-2 text-sm text-white/85">
                    {projeto.texto}
                  </p>

                  {/* Tags em glass */}
                  <div className="mb-4 flex flex-wrap gap-2">
                    {projeto.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="rounded-full bg-white/15 px-2 py-1 text-xs text-white ring-1 ring-white/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* CTA no rodapé */}
                  <div className="mt-auto border-t border-white/10 pt-4">
                    {projeto.link ? (
                      <Link
                        href={projeto.link}
                        className="text-sm font-bold text-white hover:text-[#00E0FF]"
                      >
                        Saiba mais →
                      </Link>
                    ) : (
                      <span className="text-sm text-white/50">Em breve</span>
                    )}
                  </div>
                </div>
              </div>

              {/* Glow lateral sutil no hover */}
              <div
                className="
                  pointer-events-none absolute inset-0 -z-10 rounded-3xl opacity-0
                  transition-opacity duration-300
                  group-hover:opacity-70
                  [background:radial-gradient(60%_40%_at_10%_10%,rgba(0,192,255,0.12),transparent_60%)]
                "
              />
            </article>
          );
        })}
      </div>

      {/* Botões */}
      <button
        onClick={handlePrev}
        className="absolute left-2 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/10 p-2 ring-1 ring-white/15 backdrop-blur hover:bg-white/15"
        aria-label="Anterior"
      >
        <svg width="48" height="48" viewBox="0 0 125 125" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M31.25 62.4998C31.25 61.1185 31.7987 59.7937 32.7755 58.817C33.7522 57.8402 35.077 57.2915 36.4583 57.2915L88.5417 57.2915C89.923 57.2915 91.2478 57.8402 92.2245 58.817C93.2013 59.7937 93.75 61.1185 93.75 62.4998C93.75 63.8812 93.2013 65.2059 92.2245 66.1827C91.2478 67.1594 89.923 67.7082 88.5417 67.7082L36.4583 67.7082C35.077 67.7082 33.7522 67.1594 32.7755 66.1827C31.7987 65.2059 31.25 63.8812 31.25 62.4998Z" fill="#3ACEFF"/>
          <path d="M31.2502 62.5C31.2495 61.8159 31.3839 61.1385 31.6458 60.5066C31.9077 59.8746 32.2919 59.3007 32.7762 58.8177L58.8179 32.776C59.8002 31.8273 61.1158 31.3023 62.4815 31.3142C63.8471 31.326 65.1534 31.8738 66.119 32.8395C67.0847 33.8051 67.6325 35.1114 67.6443 36.477C67.6562 37.8426 67.1312 39.1583 66.1825 40.1406L43.8231 62.5L66.1825 84.8593C67.1312 85.8416 67.6562 87.1573 67.6443 88.5229C67.6325 89.8885 67.0847 91.1948 66.119 92.1605C65.1534 93.1261 63.8471 93.6739 62.4815 93.6858C61.1158 93.6976 59.8002 93.1727 58.8179 92.2239L32.7762 66.1823C32.2919 65.6992 31.9077 65.1253 31.6458 64.4934C31.3839 63.8614 31.2495 63.184 31.2502 62.5Z" fill="#3ACEFF"/>
        </svg>
      </button>

      <button
        onClick={handleNext}
        className="absolute right-2 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/10 p-2 ring-1 ring-white/15 backdrop-blur hover:bg-white/15"
        aria-label="Próximo"
      >
        <svg width="48" height="48" viewBox="0 0 125 125" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M93.75 62.5002C93.75 63.8815 93.2013 65.2063 92.2245 66.183C91.2478 67.1598 89.923 67.7085 88.5417 67.7085L36.4583 67.7085C35.077 67.7085 33.7522 67.1598 32.7755 66.183C31.7987 65.2063 31.25 63.8815 31.25 62.5002C31.25 61.1188 31.7987 59.7941 32.7755 58.8173C33.7522 57.8406 35.077 57.2918 36.4583 57.2918L88.5417 57.2918C89.923 57.2918 91.2478 57.8406 92.2245 58.8173C93.2013 59.7941 93.75 61.1188 93.75 62.5002Z" fill="#3ACEFF"/>
          <path d="M93.7498 62.5C93.7505 63.1841 93.6161 63.8615 93.3542 64.4934C93.0923 65.1254 92.7081 65.6993 92.2238 66.1823L66.1821 92.224C65.1998 93.1727 63.8842 93.6977 62.5185 93.6858C61.1529 93.674 59.8466 93.1262 58.881 92.1605C57.9153 91.1949 57.3675 89.8886 57.3557 88.523C57.3438 87.1574 57.8688 85.8417 58.8175 84.8594L81.1769 62.5L58.8175 40.1407C57.8688 39.1584 57.3438 37.8427 57.3557 36.4771C57.3675 35.1115 57.9153 33.8052 58.881 32.8395C59.8466 31.8739 61.1529 31.3261 62.5185 31.3142C63.8842 31.3024 65.1998 31.8273 66.1821 32.7761L92.2238 58.8177C92.7081 59.3008 93.0923 59.8747 93.3542 60.5066C93.6161 61.1386 93.7505 61.816 93.7498 62.5Z" fill="#3ACEFF"/>
        </svg>
      </button>
    </div>
  );
}
