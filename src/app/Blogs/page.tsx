// src/app/Blogs/page.tsx
import Nav from "@/components/nav/page";
import CarrosselBlog from "@/components/carrosselBlog/page";
import Footer from "@/components/footer/page";
import CardBlog from "@/components/cardBlog/page";

// IMPORTA os posts tipados
import { posts } from "@/content/posts";

function Separator() {
  return (
    <div className="mx-10 my-6 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent" />
  );
}

// Util: formata a data (usa updatedAt se houver; senão, hoje)
function formatarData(iso?: string) {
  const d = iso ? new Date(iso) : new Date();
  return d.toLocaleDateString("pt-BR", { day: "2-digit", month: "2-digit", year: "numeric" });
}

// Caminho da imagem do post: tenta por slug, senão placeholder
function imagemDoPost(slug: string) {
  // coloque suas capas em /public/blog/covers/<slug>.jpg
  // enquanto isso, fallback para /blog/covers/placeholder.jpg
  return `/blog/covers/${slug}.jpg`;
}

export default function Blog() {
  return (
    <main className="relative overflow-x-hidden font-spaceMono">
      {/* FUNDO ÚNICO (mesmo estilo da página Serviços) */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0C0F1A] via-[#0F1322] to-[#0C0F1A]" />
        <div className="absolute -top-20 -left-20 h-[36rem] w-[36rem] rounded-full bg-[#00C0FF]/15 blur-3xl" />
        <div className="absolute -bottom-32 right-0 translate-x-1/4 h-[40rem] w-[40rem] rounded-full bg-[#00005A]/30 blur-3xl" />
      </div>

      <Nav />
      <Separator />

      {/* centraliza e limita largura pra evitar “empurrões” */}
      <div className="mx-auto w-full max-w-[1400px]">
        {/* Se quiser manter o carrossel atual */}
        <section className="px-4 sm:px-6 md:px-8 lg:px-12">
          <CarrosselBlog />
        </section>

        <Separator />

        {/* Grade de cards renderizada a partir do posts.ts */}
        <section className="px-4 sm:px-6 md:px-8 lg:px-12">
          <header className="mb-6">
            <h2 className="text-2xl font-bold text-white">Últimos artigos</h2>
            <p className="text-white/70">Conteúdos sobre sistemas sob medida, integrações, automação, UX/UI, segurança e tendências.</p>
          </header>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <CardBlog
                key={post.slug}
                data={formatarData(post.updatedAt)}
                imagem={imagemDoPost(post.slug)}
                titulo={post.title}
                // usa a keyword como única tag; adicione mais se quiser
                tags={[post.keyword]}
                // a sua página índice é /Blogs; vamos padronizar o detalhe como /Blogs/[slug]
                link={`/Blogs/${post.slug}`}
              />
            ))}
          </div>
        </section>
      </div>

      <Separator />
      <div className="h-10" />
      <Footer />
    </main>
  );
}
