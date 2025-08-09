// components/secaoBlog/page.tsx
import CardBlog from "@/components/cardBlog/page";
import Link from "next/link";

export default function SecaoBlog() {
  return (
    <div className="relative">
      <section className="grid grid-cols-1 justify-items-center gap-6 py-16 sm:grid-cols-2 lg:grid-cols-3">
        <CardBlog
          data="21/07"
          imagem="Blog1.png"
          titulo="Abacates Verdes: A Nova Tendendência em Nanotecnologia"
          tags={["hashtag 1", "hashtag 2"]}
          link="#"
        />
        <CardBlog
          data="21/07"
          imagem="Blog1.png"
          titulo="Como Usar IA Generativa Para Aprender Mais Rápido"
          tags={["hashtag 1", "hashtag 2"]}
          link="#"
        />
        <CardBlog
          data="21/07"
          imagem="Blog1.png"
          titulo="Danoninho ou Danonão? Eis a Questão"
          tags={["hashtag 1", "hashtag 2"]}
          link="#"
        />
        <CardBlog
          data="21/07"
          imagem="Blog1.png"
          titulo="Parmegiana de Fritas Com Batata à Milanesa"
          tags={["hashtag 1", "hashtag 2"]}
          link="#"
        />
        <CardBlog
          data="21/07"
          imagem="Blog1.png"
          titulo="Criando Tendências: Como Lançar uma Moda"
          tags={["hashtag 1", "hashtag 2"]}
          link="#"
        />
        <CardBlog
          data="21/07"
          imagem="Blog1.png"
          titulo="Projeto ‘ViaMobility’ é o mais novo ganhador do NEXT!"
          tags={["hashtag 1", "hashtag 2"]}
          link="#"
        />

        <div className="col-span-full pt-10">
          <Link
            href="/Blog"
            className="
              rounded-2xl border border-white/20 px-5 py-2 text-white
              hover:bg-white/5
            "
          >
            Carregar mais
          </Link>
        </div>
      </section>
    </div>
  );
}
