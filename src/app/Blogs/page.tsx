// app/blog/page.tsx
import Nav from "@/components/nav/page";
import CarrosselBlog from "@/components/carrosselBlog/page";
import SecaoBlog from "@/components/secaoBlog/page";

function Separator() {
  return (
    <div className="mx-10 my-6 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent" />
  );
}

export default function Blog() {
  return (
    <main className="relative overflow-x-hidden font-spaceMono">
      {/* FUNDO ÚNICO (mesmo estilo da página Serviços) */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0C0F1A] via-[#0F1322] to-[#0C0F1A]" />
        <div className="absolute -top-20 -left-20 h-[36rem] w-[36rem] rounded-full bg-[#00C0FF]/15 blur-3xl" />
        {/* Mantém o translate-x para posicionar, mas agora contido pelo overflow-hidden do wrapper */}
        <div className="absolute -bottom-32 right-0 translate-x-1/4 h-[40rem] w-[40rem] rounded-full bg-[#00005A]/30 blur-3xl" />
      </div>

      <Nav />
      <Separator />

      {/* centraliza e limita largura pra evitar “empurrões” */}
      <div className="mx-auto w-full max-w-[1400px]">
        <section className="px-4 sm:px-6 md:px-8 lg:px-12">
          <CarrosselBlog />
        </section>

        <Separator />

        <section className="px-4 sm:px-6 md:px-8 lg:px-12">
          <SecaoBlog />
        </section>
      </div>

      <Separator />
      <div className="h-10" />
    </main>
  );
}
