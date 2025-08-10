// app/servicos/page.tsx
import Footer from "@/components/footer/page";
import Nav from "@/components/nav/page";
import ServiceCard from "@/components/serviceCard/page";

export const metadata = {
  title: "Serviços — Grupo ARC",
};

function Separator() {
  return (
    <div className="mx-10 my-6 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent" />
  );
}

export default function ServicosPage() {
  return (
    <main className="relative overflow-hidden">
      {/* FUNDO ÚNICO (se estende até o fim da página) */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0C0F1A] via-[#0F1322] to-[#0C0F1A]" />
        <div className="absolute -top-20 -left-20 h-[36rem] w-[36rem] rounded-full bg-[#00C0FF]/15 blur-3xl" />
        <div className="absolute -bottom-32 right-[-10%] h-[40rem] w-[40rem] rounded-full bg-[#00005A]/30 blur-3xl" />
      </div>

      <Nav />

      {/* HERO */}
      <section className="relative px-10 py-16">
        {/* barra separadora (logo abaixo do nav) */}

        <div className="grid gap-8 md:grid-cols-[1.15fr,0.85fr] items-stretch">
          <div className="relative">
            <div
              className="
                relative rounded-3xl p-8
                
              "
            >   
              <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
                Transformamos tecnologia<br /> em resultado.
              </h1>
              <p className="mt-6 max-w-2xl text-[18px] leading-relaxed text-white/80">
                Oferecemos soluções digitais completas, do planejamento à execução,
                com foco na inovação e nos resultados para o seu negócio.
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-4">                
                <a
                  href="/Contato"
                  className="
                    rounded-2xl border border-white/20 px-6 py-3 text-sm font-semibold text-white
                    hover:bg-white/5 transition-colors
                  "
                >
                  Fale com a gente
                </a>
              </div>
            </div>
          </div>

          {/* Painel lateral decorativo */}
          <div className="relative hidden md:block">
            <div
              className="
                relative h-full rounded-3xl p-6
                bg-white/5 backdrop-blur-xl ring-1 ring-white/10
                text-white
              "
            >
              <div className="text-sm opacity-90">
                <p className="mb-2 font-semibold">Por que o Grupo ARC?</p>
                <ul className="space-y-1 text-white/80">
                  <li>• Time ágil e multidisciplinar</li>
                  <li>• Foco em resultado e performance</li>
                  <li>• Integrações complexas de forma simples</li>
                  <li>• Design centrado no usuário</li>
                </ul>
              </div>
              
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO 1 */}
      <Separator />
      <section id="servicos" className="relative px-10 py-14">
        
        <header
          className="
            mb-8 rounded-3xl p-6
            bg-white/5 backdrop-blur-xl ring-1 ring-white/10
          "
        >
          <h2 className="text-2xl font-bold text-white">
            Criação de Sites e Produtos Web
          </h2>
          <p className="mt-2 max-w-3xl text-white/80">
            Desenvolvemos sites institucionais, sistemas web e landing pages que
            combinam performance, responsividade e design centrado no usuário.
            Cada projeto é pensado para gerar valor real, com interfaces intuitivas
            e visual moderno.
          </p>
        </header>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <ServiceCard
            title="Design de Interfaces e Experiência do Usuário"
            description="Criamos interfaces que unem estética e funcionalidade, garantindo uma navegação intuitiva e agradável."
            ctaHref = "/ux-design"
          />
          <ServiceCard
            title="Criação e Manutenção de Sites"
            description="Desenvolvimento e suporte contínuo para sites modernos, seguros e adaptados a diferentes dispositivos."
            ctaHref = "/criacao-de-sites"
          />
          <ServiceCard
            title="Integração com APIs"
            description="Conectamos seu site a sistemas externos para otimizar processos e oferecer funcionalidades avançadas."
            ctaHref = "/integracao-com-apis"
          />
          <ServiceCard
            title="Criação e Reformulação de Identidade Visual"
            description="Atualizamos ou criamos marcas com identidade visual coerente, fortalecendo a presença digital."
            ctaHref = "/criacao-e-reformulacao-de-identidade-visual"
          />
        </div>
      </section>

      {/* SEÇÃO 2 */}
      <Separator />
      <section className="relative px-10 py-14">
        <header
          className="
            mb-8 rounded-3xl p-6
            bg-white/5 backdrop-blur-xl ring-1 ring-white/10
          "
        >
          <h2 className="text-2xl font-bold text-white">
            Integrações Tecnológicas e Soluções Customizadas
          </h2>
          <p className="mt-2 max-w-3xl text-white/90">
            Criamos soluções digitais sob medida que conectam sistemas, APIs e até
            dispositivos físicos. Seja uma automação, painel administrativo ou
            aplicação embarcada, entregamos integração inteligente com foco em eficiência.
          </p>
        </header>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <ServiceCard
            title="Desenvolvimento de Softwares Sob Medida"
            description="Aplicações personalizadas para atender às necessidades específicas da sua empresa."
            ctaHref = "/desenvolvimento-sob-medida"
          />
          <ServiceCard
            title="Criação de APIs e Implementação"
            description="Projetamos e integramos APIs para comunicação eficiente entre diferentes sistemas."
            ctaHref = "/criacao-de-apis-e-implementacao"
          />
          <ServiceCard
            title="Suporte Técnico Especializado"
            description="Atendimento ágil e especializado para garantir estabilidade e evolução das suas soluções."
            ctaHref = "/suporte-tecnico-especializado"
          />
          <ServiceCard
            title="Automações e Agentes de IA"
            description="Automatizamos tarefas repetitivas e implementamos IA para ganho de produtividade."
            ctaHref = "/automacoes-e-agentes-de-ia"
          />
          <ServiceCard
            title="Ingestão de Dados & Big Data"
            description="Coletamos, processamos e estruturamos dados em larga escala para análises estratégicas."
            ctaHref = "/ingestao-de-dados"
          />
          <ServiceCard
            title="Consultoria em TI"
            description="Orientação especializada para otimizar recursos tecnológicos e processos internos."
            ctaHref = "/consultoria-em-ti"
          />
        </div>
      </section>

      {/* SEÇÃO 3 */}
      <Separator />
      <section className="relative px-10 py-14">
        <header
          className="
            mb-8 rounded-3xl p-6
            bg-white/5 backdrop-blur-xl ring-1 ring-white/10
          "
        >
          <h2 className="text-2xl font-bold text-white">Estratégia e Planejamento</h2>
          <p className="mt-2 max-w-3xl text-white/80">
            Desenvolvemos estratégias digitais completas, desde a captura de clientes até
            o fortalecimento da marca, utilizando dados e criatividade para maximizar resultados.
          </p>
        </header>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <ServiceCard
            title="SEO e Impulsionamento Digital"
            description="Otimização para buscadores e campanhas patrocinadas para aumentar visibilidade."
            ctaHref = "/seo-e-impulsionamento"
          />
          <ServiceCard
            title="Redes Sociais"
            description="Gestão e criação de conteúdo para fortalecer o relacionamento com o público."
            ctaHref = "/redes-sociais"
          />
          <ServiceCard
            title="Estratégia 360º"
            description="Planejamento completo que integra canais, mídias e ações para alcance total."
            ctaHref = "/estrategia-360"
          />
          <ServiceCard
            title="Captura de Leads"
            description="Criação de funis e formulários estratégicos para gerar contatos qualificados."
            ctaHref = "/captura-de-leads"
          />
          <ServiceCard
            title="Branding"
            description="Posicionamento e fortalecimento da marca com ações consistentes e direcionadas."
            ctaHref = "/branding"
          />
          <ServiceCard
            title="Consultoria de Negócios"
            description="Análise e direcionamento estratégico para crescimento sustentável."
            ctaHref = "/consultoria-de-negocios"
          />
        </div>
      </section>

      <div className="h-10" />
      <Footer />
    </main>
  );
}
