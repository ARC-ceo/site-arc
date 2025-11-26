// O slug chama a foto de cover do post do blog, para adicionar uma foto, basta salvar a foto com o
// Mesmo nome do slug do post dentro da pasta public/blog/covers.

export type Section = {
  heading: string;
  paragraphs: string[];
};

export type Post = {
  slug: string;
  title: string;
  keyword: string;
  summary: string;
  sections: Section[];
  cta?: { label: string; href: string };
  updatedAt?: string;
};

export const posts: Post[] = [
  {
    slug: "sistemas-web-sob-medida",
    title: "O que são sistemas web sob medida e quando investir neles",
    keyword: "sistemas web sob medida",
    summary:
      "Entenda o que é um sistema feito para a sua operação, as vantagens sobre soluções prontas e quando faz sentido investir.",
    updatedAt: "2025-09-09",
    sections: [
      {
        heading: "Introdução",
        paragraphs: [
          "No mundo digital de hoje, as empresas convivem com uma infinidade de softwares prontos. Mas será que eles sempre atendem às necessidades específicas do seu negócio? É aqui que entram os sistemas web sob medida, soluções desenvolvidas para resolver problemas únicos e gerar eficiência."
        ],
      },
      {
        heading: "O que são sistemas sob medida",
        paragraphs: [
          "Um sistema sob medida é uma aplicação construída especificamente para a sua empresa, considerando fluxos de trabalho, integrações e objetivos de negócio.",
          "Enquanto softwares prontos atendem a um público genérico, os sistemas personalizados surgem do mapeamento real das dores e metas da organização."
        ],
      },
      {
        heading: "Vantagens sobre soluções prontas",
        paragraphs: [
          "Flexibilidade total — adapte a ferramenta ao seu processo, não o contrário.",
          "Escalabilidade — cresça sem se preocupar com limites de licenciamento.",
          "Integração com ferramentas já utilizadas, como ERPs, CRMs ou gateways de pagamento.",
          "Maior controle sobre segurança e governança dos dados."
        ],
      },
      {
        heading: "Quando vale a pena investir",
        paragraphs: [
          "Se sua empresa depende de processos internos complexos que mudam com frequência.",
          "Quando há uso excessivo de planilhas manuais e duplicação de dados.",
          "Se o crescimento está sendo limitado por gargalos operacionais.",
          "Quando há necessidade de diferenciação clara no mercado, com funcionalidades exclusivas."
        ],
      },
      {
        heading: "Conclusão",
        paragraphs: [
          "Se a sua empresa está travada em limitações de softwares prontos, talvez seja o momento de avaliar um sistema sob medida. No Grupo ARC, desenvolvemos soluções que crescem junto com o seu negócio."
        ],
      },
    ],
    cta: { label: "Fale com o Grupo ARC", href: "/Contato" },
  },
  {
    slug: "integracao-de-apis-produtividade",
    title: "Integração de APIs: como conectar ferramentas e ganhar produtividade",
    keyword: "integração de APIs",
    summary:
      "Conecte ERP, CRM, pagamentos e logística para reduzir tarefas manuais e erros, com dados fluindo em tempo real.",
    updatedAt: "2025-09-09",
    sections: [
      {
        heading: "Introdução",
        paragraphs: [
          "Cada vez mais empresas utilizam ferramentas digitais diferentes. Mas o que acontece quando elas não conversam entre si? É aí que entra a integração de APIs, conectando sistemas e criando fluxos automáticos."
        ],
      },
      {
        heading: "O que são APIs",
        paragraphs: [
          "APIs (Application Programming Interfaces) funcionam como pontes que permitem que softwares troquem informações em tempo real."
        ],
      },
      {
        heading: "Benefícios das integrações",
        paragraphs: [
          "Redução de tarefas manuais repetitivas.",
          "Menos erros de digitação e retrabalho.",
          "Acesso rápido a dados consolidados.",
          "Experiência unificada para o usuário final."
        ],
      },
      {
        heading: "Exemplos práticos",
        paragraphs: [
          "Integração de e-commerce com gateway de pagamento.",
          "CRM integrado a ferramentas de e-mail marketing.",
          "ERP conectado a sistemas de logística."
        ],
      },
      {
        heading: "Conclusão",
        paragraphs: [
          "Integrar ferramentas não é mais luxo: é requisito de produtividade. No Grupo ARC, já ajudamos clientes a unificar operações e ganhar tempo todos os dias."
        ],
      },
    ],
    cta: { label: "Quero integrar meus sistemas", href: "/Contato" },
  },
  {
    slug: "sinais-software-personalizado",
    title: "5 sinais de que sua empresa precisa de um software personalizado",
    keyword: "software personalizado para empresas",
    summary:
      "Checklist simples para identificar se chegou a hora de migrar para um sistema feito para sua realidade.",
    updatedAt: "2025-09-09",
    sections: [
      {
        heading: "Introdução",
        paragraphs: [
          "Muitos negócios começam com ferramentas prontas, mas chega um momento em que elas deixam de acompanhar o crescimento. Descubra se já é hora de migrar para um software feito para a sua realidade."
        ],
      },
      {
        heading: "5 sinais de alerta",
        paragraphs: [
          "1. Processos engessados — o sistema atual não se adapta à sua forma de trabalhar.",
          "2. Uso excessivo de planilhas — quando os dados estão espalhados e difíceis de consolidar.",
          "3. Crescimento sem escalabilidade — cada novo cliente gera sobrecarga.",
          "4. Integrações limitadas — softwares não falam entre si.",
          "5. Custos ocultos — licenças caras, suporte ineficiente e falta de personalização."
        ],
      },
      {
        heading: "Conclusão",
        paragraphs: [
          "Se você identificou dois ou mais sinais, já é hora de pensar em um software personalizado. O Grupo ARC desenvolve soluções sob medida para acelerar o crescimento do seu negócio."
        ],
      },
    ],
    cta: { label: "Avaliar meu cenário", href: "/Contato" },
  },
  {
    slug: "design-de-interfaces-ux-ui-vendas",
    title: "Design de interfaces: por que a experiência do usuário impacta nas vendas",
    keyword: "design de interfaces e experiência do usuário",
    summary:
      "UX/UI bem aplicados reduzem abandono, aceleram tarefas e aumentam conversão em canais digitais.",
    updatedAt: "2025-09-09",
    sections: [
      {
        heading: "Introdução",
        paragraphs: [
          "Não basta ter um sistema funcional. O design de interfaces é determinante para conquistar usuários e gerar conversões."
        ],
      },
      {
        heading: "O que é UX/UI",
        paragraphs: [
          "UX (User Experience): experiência do usuário em cada interação.",
          "UI (User Interface): parte visual e interativa que guia o uso."
        ],
      },
      {
        heading: "Como UX/UI impacta nos resultados",
        paragraphs: [
          "Interfaces confusas geram abandono.",
          "Fluxos simples reduzem tempo de tarefas.",
          "Um design intuitivo transmite confiança."
        ],
      },
      {
        heading: "Casos práticos",
        paragraphs: [
          "E-commerces com checkout simplificado aumentam vendas.",
          "Dashboards claros reduzem erros em operações internas."
        ],
      },
      {
        heading: "Conclusão",
        paragraphs: [
          "Investir em design de interfaces não é estética, é estratégia de negócios. No Grupo ARC, unimos tecnologia e design para criar experiências que vendem."
        ],
      },
    ],
    cta: { label: "Quero melhorar minha UX", href: "/Contato" },
  },
  {
    slug: "automacao-de-processos-reducao-de-custos",
    title: "Como a automação de processos pode reduzir custos operacionais",
    keyword: "automação de processos digitais",
    summary:
      "Automatizar rotinas repetitivas padroniza a operação, reduz erros e libera o time para tarefas de valor.",
    updatedAt: "2025-09-09",
    sections: [
      {
        heading: "Introdução",
        paragraphs: [
          "A automação é um dos maiores diferenciais competitivos para empresas que desejam crescer sem aumentar custos proporcionalmente."
        ],
      },
      {
        heading: "Benefícios da automação",
        paragraphs: [
          "Redução de mão de obra em tarefas repetitivas.",
          "Padronização de processos.",
          "Economia de tempo em atividades críticas.",
          "Aumento da produtividade geral."
        ],
      },
      {
        heading: "Exemplos de automação",
        paragraphs: [
          "Envio automático de relatórios financeiros.",
          "Disparo de e-mails em funil de vendas.",
          "Processamento de pedidos integrado ao estoque."
        ],
      },
      {
        heading: "Conclusão",
        paragraphs: [
          "Automatizar processos é cortar custos sem perder qualidade. O Grupo ARC entrega soluções digitais que transformam eficiência em lucro."
        ],
      },
    ],
    cta: { label: "Automatizar meu processo", href: "/Contato" },
  },
  {
    slug: "solucoes-digitais-para-pequenas-empresas",
    title: "Soluções digitais para pequenas empresas: o que cabe no seu orçamento",
    keyword: "soluções digitais pequenas empresas",
    summary:
      "Tecnologia acessível para começar certo: site responsivo, gestão simples, integrações de vendas e painéis.",
    updatedAt: "2025-09-09",
    sections: [
      {
        heading: "Introdução",
        paragraphs: [
          "Muitos pequenos empresários acreditam que investir em tecnologia é caro. A realidade é que hoje existem soluções digitais acessíveis que podem transformar o negócio."
        ],
      },
      {
        heading: "O que pequenas empresas podem adotar",
        paragraphs: [
          "Sites institucionais responsivos.",
          "Ferramentas de gestão simplificada.",
          "Integrações de vendas online.",
          "Painéis de acompanhamento em tempo real."
        ],
      },
      {
        heading: "Benefícios imediatos",
        paragraphs: [
          "Mais visibilidade online.",
          "Atendimento mais rápido.",
          "Controle financeiro mais claro.",
          "Mais tempo para focar no cliente."
        ],
      },
      {
        heading: "Conclusão",
        paragraphs: [
          "Tecnologia não é privilégio das grandes empresas. O Grupo ARC desenvolve soluções sob medida que cabem no seu orçamento."
        ],
      },
    ],
    cta: { label: "Escolher a melhor solução", href: "/Contato" },
  },
  {
    slug: "seguranca-de-dados-sistemas-web",
    title: "Segurança de dados em sistemas web: o que toda empresa deve saber",
    keyword: "segurança de dados sistemas web",
    summary:
      "Com LGPD, segurança deixa de ser opcional: entenda riscos, boas práticas e como se adequar.",
    updatedAt: "2025-09-09",
    sections: [
      {
        heading: "Introdução",
        paragraphs: [
          "Com a LGPD em vigor, a segurança de dados deixou de ser opcional. Empresas que não tratam o tema com seriedade correm riscos jurídicos e de reputação."
        ],
      },
      {
        heading: "Principais ameaças",
        paragraphs: [
          "Vazamento de informações sensíveis.",
          "Acessos não autorizados.",
          "Falta de backup de segurança."
        ],
      },
      {
        heading: "Boas práticas",
        paragraphs: [
          "Criptografia em dados sensíveis.",
          "Autenticação em dois fatores.",
          "Monitoramento de acessos.",
          "Backups regulares."
        ],
      },
      {
        heading: "Conclusão",
        paragraphs: [
          "A segurança é um dos pilares da confiança digital. No Grupo ARC, a proteção de dados está presente em todas as etapas de desenvolvimento."
        ],
      },
    ],
    cta: { label: "Revisar a segurança do meu sistema", href: "/Contato" },
  },
  {
    slug: "tendencias-tecnologia-2025",
    title: "Tendências em tecnologia para 2025: como preparar sua empresa",
    keyword: "tendências tecnologia 2025",
    summary:
      "IA aplicada, automação acessível, APIs abertas e interfaces mais inteligentes – prepare a estratégia.",
    updatedAt: "2025-09-09",
    sections: [
      {
        heading: "Introdução",
        paragraphs: [
          "A tecnologia muda rápido, e quem se antecipa ganha vantagem. Veja as principais tendências para 2025 que podem impactar diretamente a sua empresa."
        ],
      },
      {
        heading: "Principais tendências",
        paragraphs: [
          "Inteligência Artificial aplicada a decisões de negócio.",
          "Automação cada vez mais acessível.",
          "APIs abertas para ampliar integrações.",
          "Interfaces inteligentes e acessibilidade digital."
        ],
      },
      {
        heading: "Como se preparar",
        paragraphs: [
          "Investir em soluções escaláveis.",
          "Garantir segurança de dados.",
          "Monitorar inovação no seu setor."
        ],
      },
      {
        heading: "Conclusão",
        paragraphs: [
          "2025 será marcado por empresas que transformarem tecnologia em estratégia. O Grupo ARC está pronto para ajudar sua empresa a entrar no futuro digital."
        ],
      },
    ],
    cta: { label: "Planejar próximos passos", href: "/Contato" },
  },
];
