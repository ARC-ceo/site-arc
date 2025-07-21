import Footer from "@/components/footer/page";
import Nav from "@/components/nav/page";
import React from "react";

const projects = [
    {
        name: "ViaMobility",
        description:
            "Aplicativo que informa status em tempo real das linhas de trem e metrô operadas pela ViaMobilidade, com dashboard integrado para recebimento de ocorrências dos usuários.",
        link: "https://via-mobility-vercell-ybs9-git-main-csclementinos-projects.vercel.app/",
        image: "/bannerViaMobility.png",
        tags: ["Dashboard", "Transporte", "Tempo Real"],
        tech: ["React", "Next.js", "Tailwind", "API"]
    },
    {
        name: "SolarMetrics",
        description:
            "Sistema com dashboard e integração a hardware para monitoramento de geração e consumo de energia solar em tempo real.",
        link: "https://solarmetrics.siick.com.br/",
        image: "bannerSolarMetrics.jpg",
        tags: ["Energia", "Dashboard", "Hardware"],
        tech: ["React", "IoT", "Tailwind"]
    },
    {
        name: "Conexão Anjo",
        description:
            "Aplicativo que conecta pessoas em situações de desastre ambiental, integrando notificações e suporte de ONGs, voluntários e órgãos oficiais.",
        link: "https://conexao-anjo-vercell.vercel.app/TelaPrincipal",
        image: "/ConexaoAnjo.png",
        tags: ["Emergência", "Social", "Notificações"],
        tech: ["React", "Next.js"]
    },
    {
        name: "Estância Gourmet",
        description:
            "Site demonstrativo de restaurante com cardápio digital.",
        link: "https://conexao-anjo-vercell.vercel.app/TelaPrincipal",
        image: "/ConexaoAnjo.png",
        tags: ["Gastronomia", "Menu", "Notificações"],
        tech: ["React", "Next.js", "Firebase"]
    },
];

export default function ProjectsSection() {
    return (
        <div>
            <Nav />
            <section className="py-16 px-4 max-w-6xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold mb-4">Nossos Projetos</h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Soluções reais criadas para resolver problemas reais — conheça alguns dos nossos projetos mais impactantes.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <a
                            key={index}
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block bg-white rounded-2xl shadow-md hover:shadow-xl transform hover:-translate-y-1 transition duration-300"
                        >
                            <img
                                src={project.image}
                                alt={project.name}
                                className="w-full h-40 object-cover rounded-t-xl"
                            />
                            <div className="p-6">
                                <h3 className="text-xl font-semibold mb-2 text-blue-600">{project.name}</h3>
                                <p className="text-gray-600 text-sm mb-4">{project.description}</p>
                                <div className="flex flex-wrap gap-2 mb-2">
                                    {project.tags.map((tag, i) => (
                                        <span
                                            key={i}
                                            className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full"
                                        >
                                            #{tag}
                                        </span>
                                    ))}
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {project.tech.map((tech, i) => (
                                        <span
                                            key={i}
                                            className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </section>
            <Footer />
        </div>
    );
}
