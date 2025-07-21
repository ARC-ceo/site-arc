import Apresentacao from "@/components/apresentacao/page";
import CreationJourneyPage from "@/components/criacao/page";
import Footer from "@/components/footer/page";
import Header from "@/components/header/page";

export default function Home() {
  return (
    <div className="h-screen">
      <Header />
      <Apresentacao />
      <CreationJourneyPage />    
      <Footer />
    </div>
  );
}
