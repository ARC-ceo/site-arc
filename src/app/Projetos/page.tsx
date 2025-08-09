// app/projetos/page.tsx
import CarrosselProjetos from "@/components/carrosselProjetos/page";
import Nav from "@/components/nav/page";

function Separator() {
  return (
    <div className="mx-10 my-6 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent" />
  );
}

export default function ProjectsSection() {
  return (
    <main className="relative overflow-hidden">
      {/* FUNDO ÚNICO (mesmo da página Serviços) */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0C0F1A] via-[#0F1322] to-[#0C0F1A]" />
        <div className="absolute -top-20 -left-20 h-[36rem] w-[36rem] rounded-full bg-[#00C0FF]/15 blur-3xl" />
        <div className="absolute -bottom-32 right-[-10%] h-[40rem] w-[40rem] rounded-full bg-[#00005A]/30 blur-3xl" />
      </div>

      <Nav />

      {/* Barra separadora pós-Nav */}
      <Separator />

      {/* HERO */}
      <section className="w-full px-6 py-12 md:px-12">
        <div className="mx-auto max-w-5xl text-center">
          <h1 className="text-[40px] font-extrabold leading-tight text-[#00C0FF]">
            Criando a próxima <br /> experiência
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-[20px] leading-relaxed text-white/85">
            Descubra como nossa tecnologia e soluções sob medida estão
            revolucionando setores da mobilidade à sustentabilidade com
            inteligência, propósito e precisão.
          </p>
        </div>
      </section>

      {/* Separador antes do carrossel */}
      <Separator />

      <section className="px-4 md:px-8">
        <CarrosselProjetos />
      </section>

      {/* Separador final opcional */}
      <Separator />
      <div className="h-10" />
    </main>
  );
}
