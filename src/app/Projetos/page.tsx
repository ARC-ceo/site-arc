import CarrosselProjetos from "@/components/carrosselProjetos/page";
import Footer from "@/components/footer/page";
import Nav from "@/components/nav/page";
import React from "react";

export default function ProjectsSection() {
    return (
        <div>
            <Nav />
            <section className="w-full h-[50vh]">
                <div className="text-center">
                    <h1 className="text-[40px] text-[#00C0FF]">Criando a próxima <br></br>experiência</h1>
                    <p className="mx-40 mt-6 text-[24px]">Descubra como nossa tecnologia e soluções sob medida estão revolucionando setores da mobilidade à sustentabilidade com inteligência, propósito e precisão.</p>
                </div>
            </section>
            <CarrosselProjetos />
        </div>
    );
}
