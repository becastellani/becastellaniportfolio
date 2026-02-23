export const portfolioData = {
  personal: {
    name: "Bernardo",
    lastName: "Castellani",
    fullName: "Bernardo Castellani",
    role: "Full Stack Developer",
    brandRole: "Full Stack Dev",
    tagline:
      "Sistemas financeiros de alta escala. Arquitetura que sobrevive à produção.",
    description:
      "Desenvolvedor Full Stack com foco em sistemas críticos, microsserviços e infraestrutura. Transformo requisitos complexos em código confiável, de queries otimizadas a pipelines orquestrados em Kubernetes.",
    location: "Toledo — Paraná, Brasil",
    email: "becastellani10@gmail.com",
    phone: "+55 19 99905-0946",
    avatarInitials: "BC",
    social: {
      github: "https://github.com/becastellani",
      linkedin: "https://www.linkedin.com/in/bernardo-castellani-b515a0203/",
      discord: null,
    },
  },

  skills: {
    backend: [
      { name: "PHP (Laravel/Symfony)" },
      { name: "Node.js (NestJS)" },
      { name: "Python" },
      { name: "Go" },
      { name: "TypeScript" },
    ],
    frontend: [
      { name: "React" },
      { name: "JavaScript" },
      { name: "HTML5 / CSS3" },
    ],
    infra: [
      { name: "Kubernetes" },
      { name: "Docker" },
      { name: "RabbitMQ" },
      { name: "Redis" },
      { name: "CI/CD" },
    ],
    databases: ["PostgreSQL", "SQL Server", "MySQL", "Oracle", "MongoDB"],
    tags: [
      "PHP",
      "Laravel",
      "Symfony",
      "Node.js",
      "NestJS",
      "TypeScript",
      "Python",
      "Go",
      "React",
      "Kubernetes",
      "Docker",
      "RabbitMQ",
      "Redis",
      "MySQL",
      "PostgreSQL",
      "REST APIs",
      "Microsserviços",
      "CI/CD",
      "Linux",
      "Git",
      "WebScraping",
    ],
  },

  experiences: [
    {
      id: 1,
      company: "Sicredi Vale do Piquiri",
      role: "Desenvolvedor Full Stack",
      period: "Jul 2025 — Presente",
      location: "Palotina — PR",
      type: "Cooperativa de Crédito",
      current: true,
      highlights: [
        "Desenvolvimento e manutenção do sistema satélite da cooperativa — cobrança e negociação de dívidas em produção",
        "Integrações via APIs RESTful com core bancário e bureaus de crédito, garantindo sincronização e conformidade regulatória",
        "Manutenção de microsserviços PHP orquestrados em Kubernetes, com foco em disponibilidade e observabilidade",
        "Troubleshooting de produção: otimização de queries SQL Server/PostgreSQL e análise de performance em endpoints críticos",
        "ETLs pontuais com Python/Pandas para migração e reconciliação financeira",
      ],
      tech: [
        "PHP",
        "Kubernetes",
        "PostgreSQL",
        "SQL Server",
        "Python",
        "Pandas",
        "REST APIs",
      ],
    },
    {
      id: 2,
      company: "Alow Gestão e Telefonia",
      role: "Desenvolvedor Full Stack",
      period: "Ago 2023 — Jun 2025",
      location: "Toledo — PR (Remoto)",
      type: "ERP / Telecom",
      current: false,
      highlights: [
        "Refatoração de módulos legados de ERP em PHP (Laravel/Symfony), modernizando padrões e eliminando dependências deprecadas",
        "Otimização de APIs críticas com cache distribuído Redis e reestruturação de queries — redução de 30% no tempo de resposta",
        "Automações com Puppeteer/Selenium para integração com sistemas sem API, eliminando ~20h semanais de trabalho manual",
        "Implementação de filas RabbitMQ para processamentos assíncronos: boletos, e-mails e sincronização de dados",
        "Troubleshooting de produção: análise de deadlocks MySQL, otimização de jobs agendados e investigação de falhas de integração",
      ],
      tech: [
        "PHP",
        "Laravel",
        "Symfony",
        "Redis",
        "RabbitMQ",
        "Puppeteer",
        "Selenium",
        "MySQL",
      ],
    },
    {
      id: 3,
      company: "Alow Gestão e Telefonia",
      role: "Suporte Técnico N2/N3",
      period: "Mai 2023 — Jul 2023",
      location: "Toledo — PR",
      type: "Suporte / Banco de Dados",
      current: false,
      highlights: [
        "Suporte N2/N3 para incidentes de aplicação e banco de dados em produção",
        "Otimização de queries MySQL em relatórios gerenciais — redução de 35% via índices e reestruturação de JOINs",
        "Automação de verificações de sistema com Python/Selenium",
      ],
      tech: ["MySQL", "Python", "Selenium"],
    },
  ],

  projects: [
    {
      id: 1,
      name: "Veracy",
      description:
        "Plataforma SaaS de analytics para influenciadores digitais. Scraping de dados do Instagram via Apify, métricas de engajamento e relatórios estratégicos para criadores de conteúdo.",
      longDescription:
        "Plataforma completa de inteligência para redes sociais, com pipeline de coleta de dados, processamento assíncrono e dashboard analítico em tempo real.",
      tech: ["Laravel", "Apify", "MySQL", "Queue Jobs", "React", "TypeScript"],
      github: null,
      deploy: null,
      status: "Em desenvolvimento",
      featured: true,
      category: "SaaS",
    },
    {
      id: 2,
      name: "FD SmartCheck",
      description:
        "Sistema acadêmico de check-in por QR Code com validação por geolocalização. Segurança via HMAC-SHA256 e proteção anti-replay em tempo real.",
      longDescription:
        "Arquitetura de segurança em camadas para controle de presença acadêmica, com assinaturas criptográficas, validação geoespacial e dashboard em tempo real.",
      tech: [
        "Node.js",
        "React",
        "PostgreSQL",
        "HMAC-SHA256",
        "Geolocation API",
      ],
      github: null,
      deploy: null,
      status: "Em Andamento",
      featured: true,
      category: "Sistemas",
    },
    {
      id: 3,
      name: "ActionPlanner",
      description:
        "Sistema de gestão de tarefas com dashboard profissional, CRUD completo e autenticação. Frontend em Angular, backend em Node.js.",
      longDescription:
        "Task management com hierarquia de projetos, atribuição de times, tracking de progresso e relatórios exportáveis.",
      tech: ["Angular", "Node.js", "TypeScript", "PostgreSQL", "JWT"],
      github: "https://github.com/becastellani/ActionPlanner",
      deploy: null,
      status: "Concluído",
      featured: false,
      category: "Produtividade",
    },
    {
      id: 4,
      name: "Price Tracker",
      description:
        "Sistema de rastreamento de preços com web scraping concorrente em Go. Monitora produtos em múltiplos e-commerces simultaneamente com alertas configuráveis.",
      longDescription:
        "Scraping paralelo utilizando goroutines, armazenamento de histórico de preços, sistema de alertas e API REST para consumo externo.",
      tech: ["Go", "Goroutines", "PostgreSQL", "REST API", "Cron Jobs"],
      github: "https://github.com/becastellani/go-price-tracker",
      deploy: null,
      status: "Concluído",
      featured: false,
      category: "Automação",
    },
    {
      id: 5,
      name: "CorpSync MDM",
      description:
        "Sistema de monitoramento e gerenciamento de dispositivos móveis corporativos com coleta de dados via Flutter/Kotlin e dashboard analítico em tempo real.",
      longDescription:
        "Solução MDM completa para empresas, com agente mobile em Flutter/Kotlin coletando métricas do dispositivo, backend em Node.js processando os dados e dashboard React para gestão centralizada da frota.",
      tech: ["Flutter", "Kotlin", "Node.js", "PostgreSQL", "React"],
      github: "https://github.com/becastellani/CorpSyncMDM",
      deploy: null,
      status: "Concluído",
      featured: false,
      category: "Sistemas",
    },
    {
      id: 6,
      name: "RitmoApp",
      description:
        "Aplicativo Flutter para produtividade remota com reconhecimento de voz e inteligência artificial.",
      longDescription:
        "Assistente de produtividade para trabalhadores remotos com reconhecimento de voz, armazenamento local e IA para sugestões personalizadas de foco, pausas e organização baseadas na rotina do usuário.",
      tech: ["Flutter", "Dart", "Firebase", "AI/ML"],
      github: "https://github.com/becastellani/RitmoApp",
      deploy: null,
      status: "Concluído",
      featured: false,
      category: "Produtividade",
    },
    {
      id: 7,
      name: "RemoteMouse",
      description:
        "Aplicativo Flutter para controle remoto de computador via smartphone, com servidor backend em Python.",
      longDescription:
        "Cliente mobile em Flutter que se comunica via Socket.IO com servidor Python para controle remoto do computador. Permite ajustar volume, mover mouse, executar cliques e scroll diretamente do smartphone.",
      tech: ["Flutter", "Dart", "Python", "Socket.IO"],
      github: "https://github.com/becastellani/Flutter-RemoteMouse",
      deploy: null,
      status: "Concluído",
      featured: false,
      category: "Automação",
    },
    {
      id: 8,
      name: "User Management API",
      description:
        "API REST para gerenciamento de usuários e produtos com autenticação, construída com Node.js, Express e MongoDB.",
      longDescription:
        "API REST com operações CRUD completas para usuários e produtos, autenticação JWT, validação de dados e estrutura modular com Express. Banco de dados MongoDB via Mongoose.",
      tech: ["Node.js", "Express", "MongoDB", "JWT"],
      deploy: null,
      status: "Concluído",
      featured: false,
      category: "Sistemas",
      github: "https://github.com/becastellani/UserManagementMongoDB",
    },
    {
      id: 9,
      name: "Humidity Controller",
      description:
        "Sistema embarcado de controle automático de umidade com Arduino, sensor DHT11, display LCD e relé.",
      longDescription:
        "Sistema IoT para monitoramento e controle de umidade ambiente. Lê dados do sensor DHT11, exibe em display LCD e aciona relé automaticamente para ligar ou desligar umidificador conforme threshold configurável.",
      tech: ["Arduino", "IoT", "C++", "DHT11", "LCD"],
      github: "https://github.com/becastellani/UmidificadorAutomatico",
      deploy: null,
      status: "Concluído",
      featured: false,
      category: "Sistemas",
    },
  ],

  education: [
    {
      institution: "Biopark Educação",
      degree: "Bacharelado em Engenharia de Software",
      period: "2023 — 2026",
      highlight: "",
    },
  ],

  certifications: [
    {
      name: "Google Cloud Engineering Certification",
      issuer: "Google",
      year: "2025",
    },
    { name: "Laravel — Rocketseat", issuer: "Rocketseat", year: "2024" },
    { name: "PHP — Alura", issuer: "Alura", year: "2023" },
    { name: "Laravel e Symfony — Alura", issuer: "Alura", year: "2023" },
  ],

  achievements: [
    "Diretor de Pesquisa — Liga Acadêmica de Engenharia de Software e ADS, Biopark (2024–2025)",
    "Monitor de Abstração, Modelagem e Persistência de Dados — Biopark (2023–2024)",
  ],

  navigation: {
    home: "Home",
    about: "Sobre",
    experience: "Experiências",
    projects: "Projetos",
    contact: "Contato",
    navigationLabel: "Navegação",
    terminal: "Terminal",
    theme: {
      dark: "Dark",
      light: "Light",
    },
  },

  hero: {
    statsYearsLabel: "anos de exp.",
    statsProjectsLabel: "horas de código",
    viewProjectsButton: "Ver Projetos",
    resumeButton: "Currículo",
  },

  about: {
    sectionLabel: "Sobre mim",
    sectionTitle: "Desenvolvedor Full-Stack com",
    sectionTitleAccent: "viés de infraestrutura",
    bio: "Sou desenvolvedor Full Stack focado em sistemas críticos. Atualmente atuo no Sicredi Vale do Piquiri Abcd PR/SP, onde trabalho no principlamente sistema da cooperativa. Antes disso, passei dois anos modernizando um ERP legado em PHP — automatizando fluxos e otimizando performance em produção.",
    languages: [
      { name: "Português", level: "Nativo" },
      { name: "Inglês", level: "Avançado — B2" },
      { name: "Espanhol", level: "Iniciante — A1" },
    ],
    softSkills: [
      "Resolução de Problemas",
      "Pensamento Sistêmico",
      "Ownership",
      "Comunicação Técnica",
      "Proatividade",
      "Liderança Técnica",
    ],
    skillGroups: [
      {
        label: "Backend",
        items: [
          "PHP",
          "Laravel",
          "Symfony",
          "Node.js",
          "NestJS",
          "Python",
          "Go",
          "TypeScript",
        ],
      },
      {
        label: "Frontend",
        items: ["React", "JavaScript", "HTML5", "CSS3", "Blade", "Twig"],
      },
      {
        label: "Banco de Dados",
        items: ["MySQL", "PostgreSQL", "Oracle", "SQL Server", "Redis"],
      },
      {
        label: "Infraestrutura",
        items: ["Kubernetes", "Docker", "RabbitMQ", "CI/CD", "Linux"],
      },
      {
        label: "Ferramentas",
        items: ["Git", "Selenium", "Puppeteer", "REST APIs", "WebScraping"],
      },
    ],
    softSkillsLabel: "Soft skills",
    academicLabel: "Atuação Acadêmica",
    certificationsLabel: "Certificações",
  },

  experience: {
    sectionLabel: "Trajetória",
    sectionTitle: "Experiência",
    sectionTitleAccent: "Profissional",
  },

  projectsConfig: {
    sectionLabel: "Portfólio",
    sectionTitle: "Projetos",
    categories: ["Todos", "SaaS", "Sistemas", "Automação", "Produtividade"],
    privateLabel: "Privado / WIP",
    demoLabel: "Demo",
  },

  contact: {
    sectionLabel: "Contato",
    sectionTitle: "Vamos",
    sectionTitleAccent: "conversar?",
    tagline:
      "Estou aberto a conversas. Se você tem algo interessante para discutir, me manda uma mensagem.",
    emailLabel: "Email",
    phoneLabel: "Telefone",
    locationLabel: "Localização",
    footerText: "Construído com React + Vite",
    formTitle: "Envie uma mensagem",
    formSubtitle:
      "Respondo em até 24h. Pode ser sobre oportunidades de trabalho, colaborações técnicas ou apenas um papo sobre tecnologia.",
    formNameLabel: "Nome",
    formNamePlaceholder: "Seu nome",
    formEmailLabel: "Email",
    formEmailPlaceholder: "seu@email.com",
    formMessageLabel: "Mensagem",
    formMessagePlaceholder: "Sobre o que quer conversar?",
    formSubmitButton: "Enviar mensagem",
    formSubmitting: "Abrindo cliente de email...",
    emailSubject: "Contato via portfólio",
  },
};
