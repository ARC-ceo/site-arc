import Apresentacao from "@/components/apresentacao/page";
import Header from "@/components/header/page";

export default function Home() {
  return (
    <div className="h-screen">
      <Header />
      <Apresentacao />      
    </div>
  );
}
