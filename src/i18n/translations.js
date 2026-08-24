export const languages = [
  { code: "pt", label: "Português", short: "PT" },
  { code: "en", label: "English", short: "EN" },
  { code: "es", label: "Español", short: "ES" },
];

export const translations = {
  pt: {
    nav: {
      sobre: "Sobre",
      habilidades: "Habilidades",
      projetos: "Projetos",
      certificados: "Certificados",
      contato: "Contato",
      idioma: "Idioma",
      github: "GitHub",
      linkedin: "LinkedIn",
    },
    hero: {
      subtitle: "Full Stack · Design UI/UX",
      downloadCv: "Download CV",
      contato: "Contato",
      badge: "Disponível para contratação",
    },
    sobre: {
      eyebrow: "sobre mim",
      heading: "Código e design, a mesma linguagem",
      paragraph1:
        "Desenvolvedora Full-Stack e UI/UX Designer em busca da minha primeira oportunidade profissional. Unindo a lógica de programação ao olhar estético do UI Design, dedico-me a criar interfaces modernas, intuitivas e totalmente responsivas.",
      paragraph2:
        "Em constante aprimoramento das habilidades e pronta para aplicar meu ecossistema de competências em projetos reais, colaborando com equipes dinâmicas e gerando valor por meio do código e do design.",
      formacaoEyebrow: "formação acadêmica",
      formacao: [
        {
          periodo: "2026 – 2027",
          curso: "Análise e Desenvolvimento de Sistemas",
          instituicao: "Fatec Taubaté",
        },
        {
          periodo: "2023 – 2025",
          curso: "Técnico em Desenvolvimento de Sistemas",
          instituicao: "Etec João Gomes de Araújo",
        },
      ],
    },
    habilidades: {
      eyebrow: "habilidades & competências",
      heading: "O que carrego para o time",
      hardTitle: "Hard Skills",
      hardSuffix: "(Técnicas)",
      softTitle: "Soft Skills",
      softSuffix: "(Comportamentais)",
      hard: [
        "HTML5 / CSS3",
        "JavaScript",
        "Git & GitHub",
        "Lógica de Programação",
        "SQL / Banco de Dados",
        "Excel & Office 365",
        "SharePoint",
        "UI Design (Canva/Figma)",
      ],
      soft: [
        "Proatividade",
        "Organização",
        "Adaptabilidade",
        "Comunicação Assertiva",
        "Trabalho em Equipe",
        "Raciocínio Lógico",
      ],
    },
    portfolio: {
      heading: "Portfolio",
      items: [
        {
          tag: "DEV",
          titulo: "Aplicações Web & Mobile",
          desc: "Painéis, dashboards e apps voltados a experiências web e mobile completas.",
        },
        {
          tag: "DESIGN",
          titulo: "Design UI/UX & Design Gráfico",
          desc: "Convites, identidade visual e artes interativas com foco em experiência.",
        },
      ],
    },
    certificados: {
      eyebrow: "certificados",
      heading: "Aprendizado contínuo",
      subtitle: "Filtre por área para encontrar o que é relevante para você.",
      viewCertificate: "Ver certificado",
      categories: {
        all: "Todos",
        tech: "Tecnologia & Dev",
        management: "Gestão & Agilidade",
        productivity: "Produtividade",
        creative: "Criatividade & Mídia",
      },
    },
    footer: {
      eyebrow: "contato",
      heading: "Vamos construir algo juntos?",
      paragraph:
        "Estou disponível para novas oportunidades como desenvolvedora Full-Stack e designer UI/UX.",
      sendEmail: "Enviar e-mail",
      madeBy: "Feito por Giovanna Camargo · Pindamonhangaba, SP",
    },
    projetosDevPage: {
      eyebrow: "desenvolvimento",
      heading: "Aplicações Web & Mobile",
      subtitle: "Projetos focados em código: painéis, dashboards e apps completos.",
      back: "Voltar",
      viewMore: "Ver mais",
      items: [
        {
          slug: "projeto-dev-1",
          titulo: "PREVER - Sistema de Monitoramento de Desastres",
          desc: "Plataforma bidirecional que centraliza dados do INMET e CEMADEN com relatos da comunidade via crowdsourcing, reduzindo falhas no envio de alertas e otimizando a resposta de órgãos de segurança e saúde.",
          data: "Fevereiro de 2026",
          repoLink: "https://visualizersmdn.vercel.app/",
          demoLink: "",
          tecnologias: ["Flutter", "Dart", "React", "Supabase", "PostGIS", "Vercel", "Figma", "GitHub"],
          caracteristicas: [
            "Totalmente responsivo",
            "Suporte a múltiplos idiomas",
            "Design com foco em performance",
          ],
        },
        {
          slug: "projeto-dev-2",
          titulo: "Ecommerce Maré Mansa",
          desc: "E-commerce multimarcas de moda, calçados e acessórios com entrega nacional. A plataforma cobre toda a jornada de compra: catálogo com filtros por preço, tipo, cor e marca; página de produtos com seletor de cor/tamanho e guia de medids; favoritos; carrinho de cálculode desconto e total; e checkout integrdo à API de pagamento do Nubank. Inclui ainda páginas de suporte, entregas, trocas, devoluções e a história da marca.",
          data: "Agosto de 2026",
          repoLink: "",
          demoLink: "",
          tecnologias: ["React", "Supabase", "PostGIS", "Vercel", "Figma", "GitHub"],
          caracteristicas: [
            "Recurso completo de e-commerce", 
            "Integração pagamento via API do Nubank",
            "Seletor de cor e tamanho com acompanhamento de imagem",
          ],
        },
        {
          slug: "projeto-dev-3",
          titulo: "Dashboard Maré Mansa",
          desc: "Dashboard administrativo desenvolvido para uma loja que vende simultaneamente pelo site, WhatsApp, Instagram e na Loja Física. Centraliza estoque, pedidos, vendas e relatórios financeiros em um só lugar, com controle de acesso por perfil e integração direta com o catálogo do e-commerce.",
          data: "Agosto de 2026",
          repoLink: "",
          demoLink: "",
          tecnologias: ["React", "Supabase", "PostGIS", "Vercel", "Figma", "GitHub"],
          caracteristicas: [
            "Controle de acesso hierárquico", 
            "Variantes de produtos com fotos por cor",
            "Relatórios com filtro de período e exportação"
          ],
        },
      ],
    },
    projetosDesignPage: {
      eyebrow: "design",
      heading: "Design UI/UX & Design Gráfico",
      subtitle: "Convites, identidade visual e artes interativas com foco em experiência.",
      back: "Voltar",
      items: [
        {
          titulo: "PREVER - Sistema de Monitoramento de Desastres",
          desc: "Breve descrição do projeto.",
        },
        {
          titulo: "Ecommerce Maré Mansa",
          desc: "Breve descrição do projeto.",
        },
        
      ],
    },
    projetoDetalhe: {
      back: "Voltar",
      tecCount: "Tecnologias utilizadas",
      caracCount: "Principais características",
      tecTitle: "Tecnologias utilizadas",
      caracTitle: "Principais características",
      repo: "Landing Page",
      demo: "Demonstração",
      noLink: "Sem link",
      notFound: "Projeto não encontrado.",
    },
  },

  en: {
    nav: {
      sobre: "About",
      habilidades: "Skills",
      projetos: "Projects",
      certificados: "Certificates",
      contato: "Contact",
      idioma: "Language",
      github: "GitHub",
      linkedin: "LinkedIn",
    },
    hero: {
      subtitle: "Full Stack · UI/UX Design",
      downloadCv: "Download CV",
      contato: "Contact",
      badge: "Available for hire",
    },
    sobre: {
      eyebrow: "about me",
      heading: "Code and design, the same language",
      paragraph1:
        "Full-Stack Developer and UI/UX Designer looking for my first professional opportunity. Combining programming logic with a design-focused eye, I create modern, intuitive, and fully responsive interfaces.",
      paragraph2:
        "Constantly improving my skills and ready to apply my toolkit on real projects, collaborating with dynamic teams and creating value through code and design.",
      formacaoEyebrow: "education",
      formacao: [
        {
          periodo: "2026 – 2027",
          curso: "Systems Analysis and Development",
          instituicao: "Fatec Taubaté",
        },
        {
          periodo: "2023 – 2025",
          curso: "Technical Degree in Systems Development",
          instituicao: "Etec João Gomes de Araújo",
        },
      ],
    },
    habilidades: {
      eyebrow: "skills & competencies",
      heading: "What I bring to the team",
      hardTitle: "Hard Skills",
      hardSuffix: "(Technical)",
      softTitle: "Soft Skills",
      softSuffix: "(Behavioral)",
      hard: [
        "HTML5 / CSS3",
        "JavaScript",
        "Git & GitHub",
        "Programming Logic",
        "SQL / Databases",
        "Excel & Office 365",
        "SharePoint",
        "UI Design (Canva/Figma)",
      ],
      soft: [
        "Proactivity",
        "Organization",
        "Adaptability",
        "Assertive Communication",
        "Teamwork",
        "Logical Reasoning",
      ],
    },
    portfolio: {
      heading: "Portfolio",
      items: [
        {
          tag: "DEV",
          titulo: "Web & Mobile Applications",
          desc: "Panels, dashboards, and apps built for complete web and mobile experiences.",
        },
        {
          tag: "DESIGN",
          titulo: "UI/UX & Graphic Design",
          desc: "Invitations, visual identity, and interactive artwork focused on experience.",
        },
      ],
    },
    certificados: {
      eyebrow: "certificates",
      heading: "Continuous learning",
      subtitle: "Filter by area to find what's relevant to you.",
      viewCertificate: "View certificate",
      categories: {
        all: "All",
        tech: "Technology & Dev",
        management: "Management & Agile",
        productivity: "Productivity",
        creative: "Creativity & Media",
      },
    },
    footer: {
      eyebrow: "contact",
      heading: "Let's build something together?",
      paragraph:
        "I'm available for new opportunities as a Full-Stack developer and UI/UX designer.",
      sendEmail: "Send email",
      madeBy: "Made by Giovanna Camargo · Pindamonhangaba, SP",
    },
  },

  es: {
    nav: {
      sobre: "Sobre mí",
      habilidades: "Habilidades",
      projetos: "Proyectos",
      certificados: "Certificados",
      contato: "Contacto",
      idioma: "Idioma",
      github: "GitHub",
      linkedin: "LinkedIn",
    },
    hero: {
      subtitle: "Full Stack · Diseño UI/UX",
      downloadCv: "Descargar CV",
      contato: "Contacto",
      badge: "Disponible para contratación",
    },
    sobre: {
      eyebrow: "sobre mí",
      heading: "Código y diseño, el mismo idioma",
      paragraph1:
        "Desarrolladora Full-Stack y Diseñadora UI/UX en busca de mi primera oportunidad profesional. Uniendo la lógica de programación con una mirada estética, creo interfaces modernas, intuitivas y totalmente responsivas.",
      paragraph2:
        "En constante mejora de mis habilidades y lista para aplicar mi ecosistema de competencias en proyectos reales, colaborando con equipos dinámicos y generando valor a través del código y el diseño.",
      formacaoEyebrow: "formación académica",
      formacao: [
        {
          periodo: "2026 – 2027",
          curso: "Análisis y Desarrollo de Sistemas",
          instituicao: "Fatec Taubaté",
        },
        {
          periodo: "2023 – 2025",
          curso: "Técnico en Desarrollo de Sistemas",
          instituicao: "Etec João Gomes de Araújo",
        },
      ],
    },
    habilidades: {
      eyebrow: "habilidades y competencias",
      heading: "Lo que aporto al equipo",
      hardTitle: "Hard Skills",
      hardSuffix: "(Técnicas)",
      softTitle: "Soft Skills",
      softSuffix: "(Blandas)",
      hard: [
        "HTML5 / CSS3",
        "JavaScript",
        "Git & GitHub",
        "Lógica de Programación",
        "SQL / Bases de Datos",
        "Excel & Office 365",
        "SharePoint",
        "Diseño UI (Canva/Figma)",
      ],
      soft: [
        "Proactividad",
        "Organización",
        "Adaptabilidad",
        "Comunicación Asertiva",
        "Trabajo en Equipo",
        "Razonamiento Lógico",
      ],
    },
    portfolio: {
      heading: "Portafolio",
      items: [
        {
          tag: "DEV",
          titulo: "Aplicaciones Web & Mobile",
          desc: "Paneles, dashboards y apps orientados a experiencias web y móviles completas.",
        },
        {
          tag: "DESIGN",
          titulo: "Diseño UI/UX & Diseño Gráfico",
          desc: "Invitaciones, identidad visual y artes interactivas enfocadas en la experiencia.",
        },
      ],
    },
    certificados: {
      eyebrow: "certificados",
      heading: "Aprendizaje continuo",
      subtitle: "Filtra por área para encontrar lo que es relevante para ti.",
      viewCertificate: "Ver certificado",
      categories: {
        all: "Todos",
        tech: "Tecnología & Dev",
        management: "Gestión & Agilidad",
        productivity: "Productividad",
        creative: "Creatividad & Medios",
      },
    },
    footer: {
      eyebrow: "contacto",
      heading: "¿Construimos algo juntos?",
      paragraph:
        "Estoy disponible para nuevas oportunidades como desarrolladora Full-Stack y diseñadora UI/UX.",
      sendEmail: "Enviar correo",
      madeBy: "Hecho por Giovanna Camargo · Pindamonhangaba, SP",
    },
  },
};