// components/cardBlog/page.tsx
interface CardBlogProps {
  data: string;
  imagem: string;
  titulo: string;
  tags: string[];
  link: string;
}

export default function CardBlog({
  data,
  imagem,
  titulo,
  tags,
  link = "#",
}: CardBlogProps) {
  return (
    <article
      className="
    group relative w-full rounded-3xl p-[1px]
    bg-gradient-to-b from-white/15 via-white/8 to-white/5
    shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)]
    transition-transform duration-300 ease-out hover:-translate-y-1
  "
    >
      {/* Painel de vidro interno */}
      <div
        className="
          flex h-full flex-col overflow-hidden rounded-3xl
          bg-white/10 backdrop-blur-xl ring-1 ring-white/12
        "
      >
        {/* Topo: imagem em máscara de vidro */}
        <div className="relative">
          <img
            src={imagem}
            alt={titulo}
            className="h-60 w-full object-cover"
          />
          <div className="absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-black/30 to-transparent" />
          <div className="absolute top-3 right-3 rounded-md bg-black/40 px-2 py-1 text-center text-xs font-bold text-white backdrop-blur">
            <span className="block text-lg leading-none">{data}</span>
          </div>
          {/* glare sutil */}
          <div className="pointer-events-none absolute -top-2 left-6 right-6 h-8 rounded-full bg-white/25 blur-md opacity-60" />
        </div>

        {/* Conteúdo em 3 blocos: Título (fixo) / Tags (fixo) / CTA (rodapé) */}
        <div className="flex flex-1 flex-col p-4 text-white">
          {/* TÍTULO — altura fixa + overflow oculto + respiro */}
          <div className="mb-2 h-[96px] overflow-hidden">
            <h3 className="text-lg font-bold leading-tight">{titulo}</h3>
          </div>

          {/* TAGS — altura fixa + wrap */}
          <div className="h-[40px] overflow-hidden">
            <div className="flex flex-wrap items-start gap-2">
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className="rounded-full bg-white/15 px-2 py-1 text-sm leading-snug text-white ring-1 ring-white/10"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* CTA no rodapé */}
          <div className="mt-auto border-t border-white/10 pt-4">
            <a
              href={link}
              className="inline-flex items-center gap-1 text-sm font-semibold text-white hover:text-[#00E0FF]"
            >
              Saiba mais <span className="text-lg transition-transform duration-200 group-hover:translate-x-0.5">→</span>
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}
