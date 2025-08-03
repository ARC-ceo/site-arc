import Apresentacao from "@/components/apresentacao/page";
import CreationJourneyPage from "@/components/criacao/page";
import Footer from "@/components/footer/page";
import Header from "@/components/header/page";
import ConteudoCard from "@/components/conteudoCard/page";

export default function Home() {
  return (
    <div className="h-screen font-spaceMono">
      <Header />
      <Apresentacao />
      <CreationJourneyPage />
      <section className="mt-32 px-6 md:px-12">
        <h2 className="text-white text-3xl font-bold text-center mb-12">Últimos Conteúdos</h2>

        <div className="flex flex-col md:flex-row justify-center gap-8">
          <ConteudoCard
            imagem="Blog1.png"
            data="21"
            mes="JUN"
            titulo="Softwares sob medida"
            texto="Entenda em que situações desenvolver um software sob medida pode ser a escolha ideal para otimizar processos"
          />

          <ConteudoCard
            imagem="Blog2.png"
            data="22"
            mes="JUN"
            titulo="Estratégia 360°"
            texto="Descubra como integrar canais, dados e tecnologia em uma estratégia 360° para potencializar resultados"
          />
        </div>
      </section>
      <Footer />
    </div>
  );
}
