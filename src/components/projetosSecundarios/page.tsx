// /src/components/projetosSecundarios/page.tsx
import Link from "next/link";

type TipoProjeto = "Site" | "App" | "Dashboard";

interface ProjetoSecundario {
  title: string;
  description: string;
  stack: string;
  role: string;
  href: string;
  type: TipoProjeto;
}

/**
 * ProjetosSecundarios (ARC)
 * - Cards simples (grid) com estética glass alinhada ao site ARC
 * - Link externo para o projeto (target=_blank)
 * - Exclui SolarMetrics, ViaMobility e Conexão Anjo (já estão no carrossel principal)
 *
 * Ajuste de padronização:
 * - Título e descrição com clamp (linhas limitadas)
 * - Espaços mínimos fixos (min-h) para evitar “pular” layout quando quebra linha
 */
const projetos: ProjetoSecundario[] = [
  {
    title: "Site Ávila Cred",
    description:
      "Redesign de site corporativo no segmento financeiro, priorizando autoridade, clareza e conversão.",
    stack: "Next.js, React, TypeScript, Tailwind CSS",
    role: "Front-end",
    href: "https://www.avilacred.com.br",
    type: "Site"
  },
  {
    title: "Site GETIPI",
    description:
      "Página para a GETIPI, empresa especializada em Restituição de IPI.",
    stack: "Next.js, React, TypeScript, Tailwind CSS",
    role: "Front-end",
    href: "https://www.avilacred.com.br",
    type: "Site"
  },
  {
    title: "Site Bianca Balaciano Marketing",
    description:
      "Página de portfólio para profissional de marketing, com destaque para projetos e serviços.",
    stack: "Next.js, Tailwind CSS, TypeScript",
    role: "Full-stack",
    href: "https://bianca-balaciano.vercel.app",
    type: "Site"
  },
  {
    title: "Site e Dashboard DADODADO",
    description:
      "Portal institucional e dashboard de inteligência de dados integrado a ETL em Python.",
    stack: "Next.js, TypeScript, Tailwind CSS, Python",
    role: "Full-stack",
    href: "https://www.dadodado.com.br",
    type: "Dashboard"
  }
];

export default function ProjetosSecundarios() {
  return (
    <section className="w-full px-4 sm:px-6 lg:px-12 py-10">
      <div className="mx-auto max-w-7xl">
        {/* Header (ARC style) */}
        <div className="mx-auto max-w-3xl text-center mb-10">
          <div className="relative rounded-2xl border border-white/12 bg-white/6 backdrop-blur-xl px-6 py-7 shadow-[0_14px_40px_rgba(0,0,0,0.45)]">
            {/* micro aura */}
            <div
              className="pointer-events-none absolute -inset-1 rounded-[22px] blur-xl opacity-40"
              style={{
                background:
                  "linear-gradient(135deg, rgba(0,192,255,0.16), rgba(0,0,90,0.14), rgba(0,224,255,0.12))"
              }}
            />
            <h2 className="relative text-2xl sm:text-3xl font-extrabold text-white">
              Outros projetos
            </h2>
            <p className="relative mt-2 text-sm sm:text-base text-white/75">
              Seleção de sites e soluções criadas com foco em performance, estética premium e conversão.
            </p>
          </div>
        </div>

        {/* Grid de cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projetos.map((item) => (
            <CardProjeto key={item.title} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CardProjeto({ item }: { item: ProjetoSecundario }) {
  const typeColor: Record<TipoProjeto, string> = {
    Site: "#00C0FF",
    App: "#00E0FF",
    Dashboard: "#7C3AED"
  };

  // clamp helper (sem plugin)
  const clamp = (lines: number): React.CSSProperties => ({
    display: "-webkit-box",
    WebkitBoxOrient: "vertical" as any,
    WebkitLineClamp: lines,
    overflow: "hidden"
  });

  return (
    <article className="relative h-full">
      {/* aura externa suave */}
      <div
        className="absolute -inset-1 rounded-[22px] blur-xl opacity-30"
        style={{
          background:
            "linear-gradient(135deg, rgba(0,192,255,0.14), rgba(0,0,90,0.12), rgba(255,255,255,0.06))"
        }}
      />

      {/* card glass */}
      <div
        className={[
          "relative h-full flex flex-col",
          "rounded-2xl overflow-hidden",
          "border border-white/12",
          "bg-white/8 backdrop-blur-2xl",
          "shadow-[0_14px_40px_rgba(0,0,0,0.5)]",
          "p-6",
          "transition-all duration-200",
          "hover:bg-white/10 hover:border-white/20"
        ].join(" ")}
      >
        {/* sheen interno */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.10]"
          style={{
            backgroundImage:
              "linear-gradient(135deg, rgba(255,255,255,0.12), transparent 35%, rgba(255,255,255,0.06) 55%, transparent 75%)"
          }}
        />

        {/* header (altura padronizada) */}
        <div className="relative flex items-start justify-between gap-3 mb-4">
          <div className="min-w-0">
            {/* TÍTULO: clamp 2 linhas + min-height para padronizar */}
            <h3
              className="text-lg font-bold text-white leading-snug min-h-[3.0rem]"
              style={clamp(2)}
              title={item.title}
            >
              {item.title}
            </h3>

            {/* ROLE: mantém 1 linha e altura fixa */}
            <p
              className="mt-1 text-xs text-white/60 min-h-[1rem]"
              style={clamp(1)}
              title={item.role}
            >
              {item.role}
            </p>
          </div>

          <span
            className="shrink-0 text-[10px] font-extrabold px-2.5 py-1 rounded-full border border-white/10 bg-white/5"
            style={{ color: typeColor[item.type] }}
          >
            {item.type}
          </span>
        </div>

        {/* DESCRIÇÃO: clamp 3 linhas + min-height para padronizar */}
        <p
          className="relative text-sm text-white/80 mb-5 min-h-[4.25rem]"
          style={clamp(3)}
          title={item.description}
        >
          {item.description}
        </p>

        {/* stack chips (fica consistente porque header/descrição não expandem mais) */}
        <div className="relative mb-6">
          <p className="text-[10px] uppercase tracking-[0.18em] text-white/50 mb-2">
            Stack
          </p>
          <div className="flex flex-wrap gap-2">
            {item.stack.split(",").map((raw) => {
              const label = raw.trim();
              return (
                <span
                  key={`${item.title}-${label}`}
                  className="text-[10px] font-semibold text-white/80 px-2.5 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur"
                >
                  {label}
                </span>
              );
            })}
          </div>
        </div>

        {/* empurra rodapé/CTA sempre pro fim */}
        <div className="flex-1" />

        {/* footer / CTA sempre alinhado */}
        <div className="relative flex items-center justify-between gap-3 pt-4 border-t border-white/10">
          <span
            className="text-[10px] font-semibold text-white/55"
            style={{ letterSpacing: "0.14em" }}
          >
            {item.type.toUpperCase()}
          </span>

          <Link
            href={item.href}
            target="_blank"
            rel="noreferrer"
            className={[
              "group/cta relative inline-flex items-center justify-center",
              "px-4 py-2 rounded-md text-sm font-bold",
              "text-white",
              "bg-white/10 border border-white/12",
              "hover:bg-white/15 hover:border-white/20",
              "transition-all duration-200",
              "hover:scale-[1.03]"
            ].join(" ")}
            aria-label={`Ver projeto ${item.title}`}
          >
            <span className="mr-2">Ver projeto</span>
            <span
              className="inline-block translate-x-0 group-hover/cta:translate-x-0.5 transition-transform"
              aria-hidden="true"
            >
              ↗
            </span>

            {/* glow controlado */}
            <span
              className="pointer-events-none absolute inset-0 rounded-md opacity-0 group-hover/cta:opacity-100 transition-opacity duration-200"
              style={{
                boxShadow:
                  "0 0 0 1px rgba(0,192,255,0.35), 0 0 16px rgba(0,192,255,0.22), 0 0 26px rgba(0,224,255,0.14)"
              }}
            />
          </Link>
        </div>

        {/* micro corner glow */}
        <div
          className="pointer-events-none absolute -top-10 -right-10 h-24 w-24 rounded-full blur-xl opacity-10"
          style={{
            background:
              "radial-gradient(circle at center, rgba(0,192,255,0.55), transparent 70%)"
          }}
        />
      </div>
    </article>
  );
}