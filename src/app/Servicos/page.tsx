import Footer from "@/components/footer/page";
import Nav from "@/components/nav/page";
import React from "react";

const services = [
    {
        title: "Criação de Sites",
        description:
            "Desenvolvemos sites institucionais, landing pages e portais personalizados com foco em performance, acessibilidade e design responsivo.",
    },
    {
        title: "Desenvolvimento de Softwares Sob Medida",
        description:
            "Soluções digitais sob demanda, como sistemas web, painéis administrativos, automações e integrações personalizadas com APIs.",
    },
    {
        title: "Dashboards e Monitoramento",
        description:
            "Criamos interfaces para visualização de dados em tempo real, com gráficos, indicadores e painéis interativos, como no projeto SolarMetrics.",
    },
    {
        title: "Aplicações com Integração a Hardware",
        description:
            "Desenvolvimento de soluções integradas a dispositivos físicos e sensores, permitindo a coleta e exibição de dados de forma eficiente.",
    },
    {
        title: "Design de Interfaces e Experiência do Usuário",
        description:
            "Projetamos interfaces centradas no usuário, acessíveis e intuitivas, para garantir a melhor experiência possível em todos os dispositivos.",
    },
    {
        title: "Consultoria e Suporte Técnico",
        description:
            "Oferecemos consultoria técnica especializada, análise de requisitos e suporte contínuo para evolução de produtos digitais.",
    },
];

export default function ServicesPage() {
    return (
        <div>
            <Nav />
            <section className="py-16 px-4 max-w-6xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold mb-4">Nossos Serviços</h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Oferecemos soluções digitais completas, do planejamento à execução, com foco na inovação e nos resultados para o seu negócio.
                    </p>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="bg-white border border-gray-200 rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
                        >
                            <h3 className="text-gray-800 text-xl font-semibold mb-2">{service.title}</h3>
                            <p className="text-gray-600 text-sm">{service.description}</p>
                        </div>
                    ))}
                </div>
            </section>
            <Footer />
        </div>
    );
}
