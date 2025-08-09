// components/apresentacao/page.tsx
export default function Apresentacao() {
  return (
    <section
      className="
        relative mx-auto max-w-6xl px-4 sm:px-6
      "
    >
      {/* Card em vidro com borda gradiente */}
      <div>
        <div
          className="            
            p-5 sm:p-8 md:p-10 lg:p-12
            text-white
          "
        >
          <p
            className="
              text-[16px] xs:text-[18px] sm:text-[19px] md:text-[20px] lg:text-[22px]
              leading-relaxed
            "
          >
            Criamos softwares personalizados que resolvem seus desafios. Como especialistas em{" "}
            <span className="border-b border-[#00C0FF]">desenvolvimento</span>, unimos{" "}
            <span className="border-b border-[#00C0FF]">design inteligente</span> e{" "}
            <span className="border-b border-[#00C0FF]">tecnologia</span> para construir as{" "}
            <span className="border-b border-[#00C0FF]">soluções</span> criativas que sua empresa precisa,
            transformando conceitos em <span className="border-b border-[#00C0FF]">realidade</span>.
          </p>

          {/* Box da imagem com aspect ratio para não “pular” */}
          <div
            className="
              mt-6 sm:mt-8 md:mt-10
              overflow-hidden
              w-full aspect-[16/9]
            "
          >
            <img
              src="/imagensApresentacao.png"
              alt="Apresentação"
              className="h-full w-full object-cover"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
