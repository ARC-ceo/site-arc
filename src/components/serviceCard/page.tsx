// components/serviceCard/page.tsx
import React from "react";

type ServiceCardProps = {
  title: string;
  description?: string;
  bullets?: string[];
  ctaHref?: string;
  ctaLabel?: string;
  icon?: React.ReactNode;
};

export default function ServiceCard({
  title,
  description,
  bullets = [],
  ctaHref = "#",
  ctaLabel = "Saiba mais",
  icon,
}: ServiceCardProps) {
  return (
    <article
      className="
        group relative h-full rounded-3xl p-[1px]
        bg-gradient-to-b from-white/15 via-white/8 to-white/5
        shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)]
        transition-transform duration-300 ease-out hover:-translate-y-1
      "
    >
      {/* Painel de vidro interno */}
      <div
        className="
          relative h-full rounded-3xl
          bg-white/10 dark:bg-white/5
          backdrop-blur-xl
          ring-1 ring-white/12
          p-6 flex flex-col
        "
      >
        {/* Reflexo superior sutil */}
        <div
          className="
            pointer-events-none absolute -top-2 left-6 right-6 h-8
            rounded-full bg-white/20 blur-md opacity-50
          "
        />

        {/* Glow lateral mais discreto no hover */}
        <div
          className="
            pointer-events-none absolute inset-0 rounded-3xl
            opacity-0 group-hover:opacity-70 transition-opacity duration-300
            [background:radial-gradient(60%_40%_at_10%_10%,rgba(0,192,255,0.12),transparent_60%)]
          "
        />

        {/* Header com ícone + título */}
        <div className="mb-4 relative">
          <div className="flex items-center gap-3">
            <div
              className="
                flex h-11 w-11 items-center justify-center rounded-2xl
                bg-white/15 ring-1 ring-white/15
              "
              title="Ícone"
            >
              {icon ?? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M3 5h18v14H3z" />
                  <path d="M3 9h18" />
                  <path d="M7 13h6M7 17h6" />
                </svg>
              )}
            </div>
            <h3 className="text-lg font-semibold text-white leading-snug">
              {title}
            </h3>
          </div>
        </div>

        {description && (
          <p className="text-[15px] leading-relaxed text-white/85">
            {description}
          </p>
        )}

        {bullets.length > 0 && (
          <ul className="mt-4 space-y-2 text-[15px] text-white/90">
            {bullets.map((b, i) => (
              <li key={i} className="flex gap-2">
                <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-[#00C0FF]" />
                <span className="leading-snug">{b}</span>
              </li>
            ))}
          </ul>
        )}

        <div className="mt-6 pt-4 border-t border-white/10">
          <a
            href={ctaHref}
            className="
              inline-flex items-center gap-2 text-sm font-semibold
              text-white hover:text-[#00E0FF]
            "
          >
            {ctaLabel}
            <span className="transition-transform duration-200 group-hover:translate-x-0.5">
              →
            </span>
          </a>
        </div>

        {/* Linha de brilho ultra sutil no topo */}
        <div
          className="
            pointer-events-none absolute -top-px left-4 right-4 h-px
            bg-gradient-to-r from-transparent via-white/50 to-transparent
          "
        />
      </div>
    </article>
  );
}
