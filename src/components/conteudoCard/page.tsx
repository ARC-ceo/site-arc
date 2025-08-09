interface ConteudoCardProps {
  imagem: string;
  data: string;
  mes: string;
  titulo: string;
  texto: string;
  link?: string;
}

export default function ConteudoCard({
  imagem,
  data,
  mes,
  titulo,
  texto,
  link = "#",
}: ConteudoCardProps) {
  return (
    <div className="w-full h-full text-center flex flex-col">
      {/* Imagem com altura fixa para estabilizar o layout */}
      <div className="relative">
        <img
          src={imagem}
          alt={titulo}
          className="w-full h-44 sm:h-48 md:h-56 object-cover rounded-4xl"
        />
        <div className="absolute top-3 right-3 text-white rounded-md px-2 py-1 text-xs font-bold leading-tight text-center">
          <span className="block text-lg leading-none">{data}</span>
          <span className="block text-[20px] pt-1">{mes}</span>
        </div>
      </div>

      {/* Conteúdo cresce e mantém altura estável */}
      <div className="p-4 text-white flex flex-col grow">
        <h3 className="text-lg font-bold mb-2 min-h-[48px]">
          {titulo}
        </h3>

        {/* Descrição com altura mínima para não “pular” */}
        <p className="text-sm text-gray-300 leading-snug mb-4 min-h-[60px]">
          {texto}
        </p>

        <a
          href={link}
          className="mt-auto inline-flex items-center gap-1 text-white font-semibold text-sm hover:underline"
        >
          Saiba mais <span className="text-lg">→</span>
        </a>
      </div>
    </div>
  );
}
