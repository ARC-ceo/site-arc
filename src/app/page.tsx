import Apresentacao from "@/components/apresentacao/page";
import Header from "@/components/header/page";
import ProductJourney from "@/components/jornada/page";

export default function Home() {
  return (
    <div className="h-screen">
      <Header />
      <Apresentacao />    
      <ProductJourney />
    </div>
  );
}
