export const portfolioData = {
  personal: {
    name: "Bernardo",
    lastName: "Castellani",
    fullName: "Bernardo Castellani",
    role: "Full Stack Developer",
    brandRole: "Full Stack Dev",
    tagline:
      "High-scale financial systems. Architecture that survives production.",
    description:
      "Full Stack Developer focused on critical systems, microservices and infrastructure. I transform complex requirements into reliable code, from optimized queries to pipelines orchestrated in Kubernetes.",
    location: "Toledo — Paraná, Brazil",
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
      role: "Full Stack Developer",
      period: "Jul 2025 — Present",
      location: "Palotina — PR",
      type: "Credit Cooperative",
      current: true,
      highlights: [
        "Development and maintenance of the cooperative's satellite system — debt collection and negotiation in production",
        "RESTful API integrations with banking core and credit bureaus, ensuring synchronization and regulatory compliance",
        "Maintenance of PHP microservices orchestrated in Kubernetes, focused on availability and observability",
        "Production troubleshooting: SQL Server/PostgreSQL query optimization and performance analysis on critical endpoints",
        "Ad-hoc ETLs with Python/Pandas for financial migration and reconciliation",
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
      role: "Full Stack Developer",
      period: "Aug 2023 — Jun 2025",
      location: "Toledo — PR (Remote)",
      type: "ERP / Telecom",
      current: false,
      highlights: [
        "Refactoring of legacy ERP modules in PHP (Laravel/Symfony), modernizing patterns and eliminating deprecated dependencies",
        "Critical API optimization with Redis distributed cache and query restructuring — 30% reduction in response time",
        "Puppeteer/Selenium automations for integration with API-less systems, eliminating ~20 weekly hours of manual work",
        "RabbitMQ queue implementation for async processing: invoices, emails and data synchronization",
        "Production troubleshooting: MySQL deadlock analysis, scheduled job optimization and integration failure investigation",
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
      role: "Technical Support N2/N3",
      period: "May 2023 — Jul 2023",
      location: "Toledo — PR",
      type: "Support / Database",
      current: false,
      highlights: [
        "N2/N3 support for application and database incidents in production",
        "MySQL query optimization in management reports — 35% reduction via indexes and JOIN restructuring",
        "System verification automation with Python/Selenium",
      ],
      tech: ["MySQL", "Python", "Selenium"],
    },
  ],

  projects: [
    {
      id: 1,
      name: "Veracy",
      description:
        "SaaS analytics platform for digital influencers. Instagram data scraping via Apify, engagement metrics and strategic reports for content creators.",
      longDescription:
        "Complete social media intelligence platform with data collection pipeline, async processing and real-time analytics dashboard.",
      tech: ["Laravel", "Apify", "MySQL", "Queue Jobs", "React", "TypeScript"],
      github: null,
      deploy: null,
      status: "In Development",
      featured: true,
      category: "SaaS",
    },
    {
      id: 2,
      name: "FD SmartCheck",
      description:
        "Academic check-in system via QR Code with geolocation validation. Security via HMAC-SHA256 and real-time anti-replay protection.",
      longDescription:
        "Layered security architecture for academic attendance control, with cryptographic signatures, geospatial validation and real-time dashboard.",
      tech: [
        "Node.js",
        "React",
        "PostgreSQL",
        "HMAC-SHA256",
        "Geolocation API",
      ],
      github: null,
      deploy: null,
      status: "In Progress",
      featured: true,
      category: "Systems",
    },
    {
      id: 3,
      name: "ActionPlanner",
      description:
        "Task management system with professional dashboard, complete CRUD and authentication. Frontend in Angular, backend in Node.js.",
      longDescription:
        "Task management with project hierarchy, team assignment, progress tracking and exportable reports.",
      tech: ["Angular", "Node.js", "TypeScript", "PostgreSQL", "JWT"],
      github: "https://github.com/becastellani/ActionPlanner",
      deploy: null,
      status: "Completed",
      featured: false,
      category: "Productivity",
    },
    {
      id: 4,
      name: "Price Tracker",
      description:
        "Price tracking system with concurrent web scraping in Go. Monitors products across multiple e-commerces simultaneously with configurable alerts.",
      longDescription:
        "Parallel scraping using goroutines, price history storage, alert system and REST API for external consumption.",
      tech: ["Go", "Goroutines", "PostgreSQL", "REST API", "Cron Jobs"],
      github: "https://github.com/becastellani/go-price-tracker",
      deploy: null,
      status: "Completed",
      featured: false,
      category: "Automation",
    },
    {
      id: 5,
      name: "CorpSync MDM",
      description:
        "Corporate mobile device monitoring and management system with Flutter/Kotlin data collection and real-time analytics dashboard.",
      longDescription:
        "Complete MDM solution for enterprises, with Flutter/Kotlin mobile agent collecting device metrics, Node.js backend processing data and React dashboard for centralized fleet management.",
      tech: ["Flutter", "Kotlin", "Node.js", "PostgreSQL", "React"],
      github: "https://github.com/becastellani/CorpSyncMDM",
      deploy: null,
      status: "Completed",
      featured: false,
      category: "Systems",
    },
    {
      id: 6,
      name: "RitmoApp",
      description:
        "Flutter app for remote productivity with voice recognition and artificial intelligence.",
      longDescription:
        "Productivity assistant for remote workers with voice recognition, local storage and AI for personalized focus, break and organization suggestions based on the user's routine.",
      tech: ["Flutter", "Dart", "Firebase", "AI/ML"],
      github: "https://github.com/becastellani/RitmoApp",
      deploy: null,
      status: "Completed",
      featured: false,
      category: "Productivity",
    },
    {
      id: 7,
      name: "RemoteMouse",
      description:
        "Flutter app for remote computer control via smartphone, with Python backend server.",
      longDescription:
        "Flutter mobile client communicating via Socket.IO with a Python server for remote computer control. Allows adjusting volume, moving the mouse, clicking and scrolling directly from your smartphone.",
      tech: ["Flutter", "Dart", "Python", "Socket.IO"],
      github: "https://github.com/becastellani/Flutter-RemoteMouse",
      deploy: null,
      status: "Completed",
      featured: false,
      category: "Automation",
    },
    {
      id: 8,
      name: "User Management API",
      description:
        "REST API for user and product management with authentication, built with Node.js, Express and MongoDB.",
      longDescription:
        "REST API with full CRUD operations for users and products, JWT authentication, data validation and modular Express structure. MongoDB database via Mongoose.",
      tech: ["Node.js", "Express", "MongoDB", "JWT"],
      github: "https://github.com/becastellani/UserManagementMongoDB",
      deploy: null,
      status: "Completed",
      featured: false,
      category: "Systems",
    },
    {
      id: 9,
      name: "Humidity Controller",
      description:
        "Embedded automatic humidity control system with Arduino, DHT11 sensor, LCD display and relay.",
      longDescription:
        "IoT system for ambient humidity monitoring and control. Reads DHT11 sensor data, displays on LCD and automatically triggers relay to turn humidifier on or off based on configurable threshold.",
      tech: ["Arduino", "IoT", "C++", "DHT11", "LCD"],
      github: "https://github.com/becastellani/UmidificadorAutomatico",
      deploy: null,
      status: "Completed",
      featured: false,
      category: "Systems",
    },
  ],

  education: [
    {
      institution: "Biopark Educação",
      degree: "Bachelor's in Software Engineering",
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
    "Research Director — Academic League of Software Engineering and ADS, Biopark (2024–2025)",
    "Teaching Assistant for Data Abstraction, Modeling and Persistence — Biopark (2023–2024)",
  ],

  navigation: {
    home: "Home",
    about: "About",
    experience: "Experience",
    projects: "Projects",
    contact: "Contact",
    navigationLabel: "Navigation",
    terminal: "Terminal",
    theme: { dark: "Dark", light: "Light" },
  },

  hero: {
    statsYearsLabel: "years exp.",
    statsProjectsLabel: "hours of code",
    viewProjectsButton: "View Projects",
    resumeButton: "Resume",
  },

  about: {
    sectionLabel: "About me",
    sectionTitle: "Full-Stack Developer with an",
    sectionTitleAccent: "infrastructure mindset",
    bio: "I'm a Full Stack developer focused on critical systems. Currently working at Sicredi Vale do Piquiri, where I work on the cooperative's main system. Before that, I spent two years modernizing a legacy PHP ERP — automating workflows and optimizing production performance.",
    languages: [
      { name: "Portuguese", level: "Native" },
      { name: "English", level: "Advanced — B2" },
      { name: "Spanish", level: "Beginner — A1" },
    ],
    softSkills: [
      "Problem Solving",
      "Systems Thinking",
      "Ownership",
      "Technical Communication",
      "Proactivity",
      "Technical Leadership",
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
        label: "Databases",
        items: ["MySQL", "PostgreSQL", "Oracle", "SQL Server", "Redis"],
      },
      {
        label: "Infrastructure",
        items: ["Kubernetes", "Docker", "RabbitMQ", "CI/CD", "Linux"],
      },
      {
        label: "Tools",
        items: ["Git", "Selenium", "Puppeteer", "REST APIs", "WebScraping"],
      },
    ],
    softSkillsLabel: "Soft skills",
    academicLabel: "Academic Involvement",
    certificationsLabel: "Certifications",
  },

  experience: {
    sectionLabel: "Career",
    sectionTitle: "Professional",
    sectionTitleAccent: "Experience",
  },

  projectsConfig: {
    sectionLabel: "Portfolio",
    sectionTitle: "Projects",
    categories: ["All", "SaaS", "Systems", "Automation", "Productivity"],
    privateLabel: "Private / WIP",
    demoLabel: "Demo",
  },

  contact: {
    sectionLabel: "Contact",
    sectionTitle: "Let's",
    sectionTitleAccent: "talk?",
    tagline:
      "I'm open to conversations. If you have something interesting to discuss, send me a message.",
    emailLabel: "Email",
    phoneLabel: "Phone",
    locationLabel: "Location",
    footerText: "Built with React + Vite",
    formTitle: "Send a message",
    formSubtitle:
      "I respond within 24h. It can be about job opportunities, technical collaborations or just a chat about technology.",
    formNameLabel: "Name",
    formNamePlaceholder: "Your name",
    formEmailLabel: "Email",
    formEmailPlaceholder: "your@email.com",
    formMessageLabel: "Message",
    formMessagePlaceholder: "What would you like to talk about?",
    formSubmitButton: "Send message",
    formSubmitting: "Opening email client...",
    emailSubject: "Contact via portfolio",
  },
};
