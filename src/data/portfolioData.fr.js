export const portfolioData = {
  personal: {
    name: "Bernardo",
    lastName: "Castellani",
    fullName: "Bernardo Castellani",
    role: "Full Stack Developer",
    brandRole: "Full Stack Dev",
    tagline:
      "Systèmes financiers haute échelle. Architecture qui survit à la production.",
    description:
      "Développeur Full Stack spécialisé dans les systèmes critiques, microservices et infrastructure. Je transforme des exigences complexes en code fiable, des requêtes optimisées aux pipelines orchestrés dans Kubernetes.",
    location: "Toledo — Paraná, Brésil",
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
      "Microservices",
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
      role: "Développeur Full Stack",
      period: "Juil 2025 — Présent",
      location: "Palotina — PR",
      type: "Coopérative de Crédit",
      current: true,
      highlights: [
        "Développement et maintenance du système satellite de la coopérative — recouvrement et négociation de dettes en production",
        "Intégrations via APIs RESTful avec le core bancaire et les bureaux de crédit, garantissant la synchronisation et la conformité réglementaire",
        "Maintenance de microservices PHP orchestrés dans Kubernetes, axés sur la disponibilité et l'observabilité",
        "Dépannage en production : optimisation de requêtes SQL Server/PostgreSQL et analyse de performance sur les endpoints critiques",
        "ETLs ponctuels avec Python/Pandas pour la migration et la réconciliation financière",
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
      role: "Développeur Full Stack",
      period: "Août 2023 — Juin 2025",
      location: "Toledo — PR (Télétravail)",
      type: "ERP / Télécom",
      current: false,
      highlights: [
        "Refactorisation de modules ERP legacy en PHP (Laravel/Symfony), modernisation des patterns et élimination des dépendances dépréciées",
        "Optimisation d'APIs critiques avec cache distribué Redis et restructuration des requêtes — réduction de 30% du temps de réponse",
        "Automatisations Puppeteer/Selenium pour l'intégration avec des systèmes sans API, éliminant ~20h hebdomadaires de travail manuel",
        "Implémentation de files RabbitMQ pour les traitements asynchrones : factures, emails et synchronisation de données",
        "Dépannage en production : analyse des deadlocks MySQL, optimisation des jobs planifiés et investigation des pannes d'intégration",
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
      role: "Support Technique N2/N3",
      period: "Mai 2023 — Juil 2023",
      location: "Toledo — PR",
      type: "Support / Base de Données",
      current: false,
      highlights: [
        "Support N2/N3 pour les incidents d'application et de base de données en production",
        "Optimisation des requêtes MySQL dans les rapports de gestion — réduction de 35% via les index et restructuration des JOINs",
        "Automatisation des vérifications système avec Python/Selenium",
      ],
      tech: ["MySQL", "Python", "Selenium"],
    },
  ],

  projects: [
    {
      id: 1,
      name: "Veracy",
      description:
        "Plateforme SaaS d'analytics pour influenceurs digitaux. Scraping de données Instagram via Apify, métriques d'engagement et rapports stratégiques pour créateurs de contenu.",
      longDescription:
        "Plateforme complète d'intelligence pour les réseaux sociaux avec pipeline de collecte de données, traitement asynchrone et dashboard analytique en temps réel.",
      tech: ["Laravel", "Apify", "MySQL", "Queue Jobs", "React", "TypeScript"],
      github: null,
      deploy: null,
      status: "En Développement",
      featured: true,
      category: "SaaS",
    },
    {
      id: 2,
      name: "FD SmartCheck",
      description:
        "Système académique de check-in par QR Code avec validation par géolocalisation. Sécurité via HMAC-SHA256 et protection anti-replay en temps réel.",
      longDescription:
        "Architecture de sécurité en couches pour le contrôle de présence académique, avec signatures cryptographiques, validation géospatiale et dashboard en temps réel.",
      tech: [
        "Node.js",
        "React",
        "PostgreSQL",
        "HMAC-SHA256",
        "Geolocation API",
      ],
      github: null,
      deploy: null,
      status: "En Cours",
      featured: true,
      category: "Systèmes",
    },
    {
      id: 3,
      name: "ActionPlanner",
      description:
        "Système de gestion de tâches avec dashboard professionnel, CRUD complet et authentification. Frontend en Angular, backend en Node.js.",
      longDescription:
        "Gestion de tâches avec hiérarchie de projets, attribution d'équipes, suivi de progression et rapports exportables.",
      tech: ["Angular", "Node.js", "TypeScript", "PostgreSQL", "JWT"],
      github: "https://github.com/becastellani/ActionPlanner",
      deploy: null,
      status: "Terminé",
      featured: false,
      category: "Productivité",
    },
    {
      id: 4,
      name: "Price Tracker",
      description:
        "Système de suivi de prix avec web scraping concurrent en Go. Surveille les produits sur plusieurs e-commerces simultanément avec des alertes configurables.",
      longDescription:
        "Scraping parallèle avec goroutines, stockage de l'historique des prix, système d'alertes et API REST pour consommation externe.",
      tech: ["Go", "Goroutines", "PostgreSQL", "REST API", "Cron Jobs"],
      github: "https://github.com/becastellani/go-price-tracker",
      deploy: null,
      status: "Terminé",
      featured: false,
      category: "Automatisation",
    },
    {
      id: 5,
      name: "CorpSync MDM",
      description:
        "Système de surveillance et gestion de dispositifs mobiles d'entreprise avec collecte de données Flutter/Kotlin et dashboard analytique en temps réel.",
      longDescription:
        "Solution MDM complète pour entreprises, avec agent mobile Flutter/Kotlin collectant les métriques des appareils, backend Node.js traitant les données et dashboard React pour la gestion centralisée de la flotte.",
      tech: ["Flutter", "Kotlin", "Node.js", "PostgreSQL", "React"],
      github: "https://github.com/becastellani/CorpSyncMDM",
      deploy: null,
      status: "Terminé",
      featured: false,
      category: "Systèmes",
    },
    {
      id: 6,
      name: "RitmoApp",
      description:
        "Application Flutter pour la productivité à distance avec reconnaissance vocale et intelligence artificielle.",
      longDescription:
        "Assistant de productivité pour les travailleurs à distance avec reconnaissance vocale, stockage local et IA pour des suggestions personnalisées de focus, pauses et organisation basées sur la routine de l'utilisateur.",
      tech: ["Flutter", "Dart", "Firebase", "AI/ML"],
      github: "https://github.com/becastellani/RitmoApp",
      deploy: null,
      status: "Terminé",
      featured: false,
      category: "Productivité",
    },
    {
      id: 7,
      name: "RemoteMouse",
      description:
        "Application Flutter pour le contrôle à distance d'un ordinateur via smartphone, avec serveur backend en Python.",
      longDescription:
        "Client mobile Flutter communiquant via Socket.IO avec un serveur Python pour le contrôle à distance de l'ordinateur. Permet d'ajuster le volume, déplacer la souris, cliquer et scroller directement depuis le smartphone.",
      tech: ["Flutter", "Dart", "Python", "Socket.IO"],
      github: "https://github.com/becastellani/Flutter-RemoteMouse",
      deploy: null,
      status: "Terminé",
      featured: false,
      category: "Automatisation",
    },
    {
      id: 8,
      name: "User Management API",
      description:
        "API REST pour la gestion d'utilisateurs et de produits avec authentification, construite avec Node.js, Express et MongoDB.",
      longDescription:
        "API REST avec opérations CRUD complètes pour utilisateurs et produits, authentification JWT, validation des données et structure modulaire Express. Base de données MongoDB via Mongoose.",
      tech: ["Node.js", "Express", "MongoDB", "JWT"],
      github: "https://github.com/becastellani/UserManagementMongoDB",
      deploy: null,
      status: "Terminé",
      featured: false,
      category: "Systèmes",
    },
    {
      id: 9,
      name: "Humidity Controller",
      description:
        "Système embarqué de contrôle automatique d'humidité avec Arduino, capteur DHT11, afficheur LCD et relais.",
      longDescription:
        "Système IoT pour la surveillance et le contrôle de l'humidité ambiante. Lit les données du capteur DHT11, les affiche sur LCD et déclenche automatiquement le relais pour allumer ou éteindre l'humidificateur selon un seuil configurable.",
      tech: ["Arduino", "IoT", "C++", "DHT11", "LCD"],
      github: "https://github.com/becastellani/UmidificadorAutomatico",
      deploy: null,
      status: "Terminé",
      featured: false,
      category: "Systèmes",
    },
  ],

  education: [
    {
      institution: "Biopark Educação",
      degree: "Licence en Génie Logiciel",
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
    "Directeur de Recherche — Ligue Académique de Génie Logiciel et ADS, Biopark (2024–2025)",
    "Assistant d'enseignement en Abstraction, Modélisation et Persistance de Données — Biopark (2023–2024)",
  ],

  navigation: {
    home: "Accueil",
    about: "À propos",
    experience: "Expérience",
    projects: "Projets",
    contact: "Contact",
    navigationLabel: "Navigation",
    terminal: "Terminal",
    theme: { dark: "Sombre", light: "Clair" },
  },

  hero: {
    statsYearsLabel: "ans d'exp.",
    statsProjectsLabel: "heures de code",
    viewProjectsButton: "Voir les Projets",
    resumeButton: "CV",
  },

  about: {
    sectionLabel: "À propos de moi",
    sectionTitle: "Développeur Full-Stack avec",
    sectionTitleAccent: "focus infrastructure",
    bio: "Je suis développeur Full Stack spécialisé dans les systèmes critiques. Actuellement chez Sicredi Vale do Piquiri, où je travaille sur le système principal de la coopérative. Avant cela, j'ai passé deux ans à moderniser un ERP legacy en PHP — en automatisant les flux et en optimisant les performances en production.",
    languages: [
      { name: "Portugais", level: "Natif" },
      { name: "Anglais", level: "Avancé — B2" },
      { name: "Espagnol", level: "Débutant — A1" },
    ],
    softSkills: [
      "Résolution de Problèmes",
      "Pensée Systémique",
      "Ownership",
      "Communication Technique",
      "Proactivité",
      "Leadership Technique",
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
        label: "Bases de Données",
        items: ["MySQL", "PostgreSQL", "Oracle", "SQL Server", "Redis"],
      },
      {
        label: "Infrastructure",
        items: ["Kubernetes", "Docker", "RabbitMQ", "CI/CD", "Linux"],
      },
      {
        label: "Outils",
        items: ["Git", "Selenium", "Puppeteer", "REST APIs", "WebScraping"],
      },
    ],
    softSkillsLabel: "Soft skills",
    academicLabel: "Activité Académique",
    certificationsLabel: "Certifications",
  },

  experience: {
    sectionLabel: "Parcours",
    sectionTitle: "Expérience",
    sectionTitleAccent: "Professionnelle",
  },

  projectsConfig: {
    sectionLabel: "Portfolio",
    sectionTitle: "Projets",
    categories: ["Tous", "SaaS", "Systèmes", "Automatisation", "Productivité"],
    privateLabel: "Privé / WIP",
    demoLabel: "Démo",
  },

  contact: {
    sectionLabel: "Contact",
    sectionTitle: "Parlons-en ?",
    sectionTitleAccent: "",
    tagline:
      "Je suis ouvert aux conversations. Si vous avez quelque chose d'intéressant à discuter, envoyez-moi un message.",
    emailLabel: "Email",
    phoneLabel: "Téléphone",
    locationLabel: "Localisation",
    footerText: "Construit avec React + Vite",
    formTitle: "Envoyer un message",
    formSubtitle:
      "Je réponds sous 24h. Cela peut concerner des opportunités d'emploi, des collaborations techniques ou simplement une discussion sur la technologie.",
    formNameLabel: "Nom",
    formNamePlaceholder: "Votre nom",
    formEmailLabel: "Email",
    formEmailPlaceholder: "votre@email.com",
    formMessageLabel: "Message",
    formMessagePlaceholder: "De quoi souhaitez-vous parler ?",
    formSubmitButton: "Envoyer le message",
    formSubmitting: "Ouverture du client email...",
    emailSubject: "Contact via portfolio",
  },
};
