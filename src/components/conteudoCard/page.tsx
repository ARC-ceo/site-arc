// components/conteudoCard/page.tsx

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
    <div className="overflow-hidden w-full md:w-[320px] text-center">
      <div className="relative">
        <img
          src={imagem}
          alt={titulo}
          className="w-full h-60 object-cover rounded-4xl"
        />
        <div className="absolute top-3 right-3 text-white rounded-md px-2 py-1 text-xs font-bold leading-tight text-center">
          <span className="block text-lg leading-none">{data}</span>
          <span className="block text-[20px] pt-1">{mes}</span>
        </div>
      </div>
      <div className="p-4 text-white">
        <h3 className="text-lg font-bold mb-2">{titulo}</h3>
        <p className="text-sm text-gray-300 mb-4 leading-snug">{texto}</p>
        <a href={link} className="text-white font-semibold text-sm hover:underline inline-flex items-center gap-1">
          Saiba mais <span className="text-lg">→</span>
        </a>
      </div>
    </div>
  );
}
