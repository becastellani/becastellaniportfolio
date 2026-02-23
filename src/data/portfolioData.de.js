export const portfolioData = {
  personal: {
    name: "Bernardo",
    lastName: "Castellani",
    fullName: "Bernardo Castellani",
    role: "Full Stack Developer",
    brandRole: "Full Stack Dev",
    tagline:
      "Hochskalierte Finanzsysteme. Architektur, die Produktion überlebt.",
    description:
      "Full Stack Entwickler mit Schwerpunkt auf kritischen Systemen, Microservices und Infrastruktur. Ich transformiere komplexe Anforderungen in zuverlässigen Code, von optimierten Queries bis zu in Kubernetes orchestrierten Pipelines.",
    location: "Toledo — Paraná, Brasilien",
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
      role: "Full Stack Entwickler",
      period: "Jul 2025 — Heute",
      location: "Palotina — PR",
      type: "Kreditgenossenschaft",
      current: true,
      highlights: [
        "Entwicklung und Wartung des Satellitensystems der Genossenschaft — Schuldeninkasso und -verhandlung in Produktion",
        "RESTful API-Integrationen mit Banking-Core und Kreditbüros, die Synchronisation und regulatorische Compliance sicherstellen",
        "Wartung von PHP-Microservices, orchestriert in Kubernetes, mit Fokus auf Verfügbarkeit und Observability",
        "Produktions-Troubleshooting: SQL Server/PostgreSQL Query-Optimierung und Performance-Analyse kritischer Endpoints",
        "Ad-hoc ETLs mit Python/Pandas für Finanzmigration und -abstimmung",
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
      role: "Full Stack Entwickler",
      period: "Aug 2023 — Jun 2025",
      location: "Toledo — PR (Remote)",
      type: "ERP / Telekommunikation",
      current: false,
      highlights: [
        "Refactoring von Legacy-ERP-Modulen in PHP (Laravel/Symfony), Modernisierung von Patterns und Eliminierung veralteter Abhängigkeiten",
        "Optimierung kritischer APIs mit Redis Distributed Cache und Query-Umstrukturierung — 30% Reduzierung der Antwortzeit",
        "Puppeteer/Selenium-Automatisierungen für die Integration mit API-losen Systemen, ~20 Wochenstunden manuelle Arbeit eliminiert",
        "Implementierung von RabbitMQ-Queues für asynchrone Verarbeitung: Rechnungen, E-Mails und Datensynchronisation",
        "Produktions-Troubleshooting: MySQL-Deadlock-Analyse, Optimierung geplanter Jobs und Untersuchung von Integrationsfehlern",
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
      role: "Technischer Support N2/N3",
      period: "Mai 2023 — Jul 2023",
      location: "Toledo — PR",
      type: "Support / Datenbank",
      current: false,
      highlights: [
        "N2/N3-Support für Anwendungs- und Datenbankincidents in Produktion",
        "MySQL-Query-Optimierung in Management-Berichten — 35% Reduzierung durch Indizes und JOIN-Umstrukturierung",
        "Automatisierung von Systemüberprüfungen mit Python/Selenium",
      ],
      tech: ["MySQL", "Python", "Selenium"],
    },
  ],

  projects: [
    {
      id: 1,
      name: "Veracy",
      description:
        "SaaS-Analytics-Plattform für digitale Influencer. Instagram-Daten-Scraping via Apify, Engagement-Metriken und strategische Berichte für Content-Creator.",
      longDescription:
        "Vollständige Social-Media-Intelligence-Plattform mit Datenerfassungs-Pipeline, asynchroner Verarbeitung und Echtzeit-Analytics-Dashboard.",
      tech: ["Laravel", "Apify", "MySQL", "Queue Jobs", "React", "TypeScript"],
      github: null,
      deploy: null,
      status: "In Entwicklung",
      featured: true,
      category: "SaaS",
    },
    {
      id: 2,
      name: "FD SmartCheck",
      description:
        "Akademisches Check-in-System per QR-Code mit Geolokalisierungsvalidierung. Sicherheit via HMAC-SHA256 und Echtzeit-Anti-Replay-Schutz.",
      longDescription:
        "Mehrschichtige Sicherheitsarchitektur für akademische Anwesenheitskontrolle mit kryptografischen Signaturen, geospatial Validierung und Echtzeit-Dashboard.",
      tech: [
        "Node.js",
        "React",
        "PostgreSQL",
        "HMAC-SHA256",
        "Geolocation API",
      ],
      github: null,
      deploy: null,
      status: "In Bearbeitung",
      featured: true,
      category: "Systeme",
    },
    {
      id: 3,
      name: "ActionPlanner",
      description:
        "Aufgabenverwaltungssystem mit professionellem Dashboard, vollständigem CRUD und Authentifizierung. Frontend in Angular, Backend in Node.js.",
      longDescription:
        "Aufgabenverwaltung mit Projekthierarchie, Team-Zuweisung, Fortschrittsverfolgung und exportierbaren Berichten.",
      tech: ["Angular", "Node.js", "TypeScript", "PostgreSQL", "JWT"],
      github: "https://github.com/becastellani/ActionPlanner",
      deploy: null,
      status: "Abgeschlossen",
      featured: false,
      category: "Produktivität",
    },
    {
      id: 4,
      name: "Price Tracker",
      description:
        "Preisverfolgungssystem mit nebenläufigem Web-Scraping in Go. Überwacht Produkte auf mehreren E-Commerce-Plattformen gleichzeitig mit konfigurierbaren Alerts.",
      longDescription:
        "Paralleles Scraping mit Goroutines, Preishistorie-Speicherung, Alert-System und REST API für externe Nutzung.",
      tech: ["Go", "Goroutines", "PostgreSQL", "REST API", "Cron Jobs"],
      github: "https://github.com/becastellani/go-price-tracker",
      deploy: null,
      status: "Abgeschlossen",
      featured: false,
      category: "Automatisierung",
    },
    {
      id: 5,
      name: "CorpSync MDM",
      description:
        "System zur Überwachung und Verwaltung mobiler Unternehmensgeräte mit Flutter/Kotlin-Datenerfassung und Echtzeit-Analytics-Dashboard.",
      longDescription:
        "Vollständige MDM-Lösung für Unternehmen mit Flutter/Kotlin-Mobile-Agent zur Gerätemetrik-Erfassung, Node.js-Backend zur Datenverarbeitung und React-Dashboard für zentrales Flottenmanagement.",
      tech: ["Flutter", "Kotlin", "Node.js", "PostgreSQL", "React"],
      github: "https://github.com/becastellani/CorpSyncMDM",
      deploy: null,
      status: "Abgeschlossen",
      featured: false,
      category: "Systeme",
    },
    {
      id: 6,
      name: "RitmoApp",
      description:
        "Flutter-App für Remote-Produktivität mit Spracherkennung und künstlicher Intelligenz.",
      longDescription:
        "Produktivitätsassistent für Remote-Mitarbeiter mit Spracherkennung, lokalem Speicher und KI für personalisierte Fokus-, Pausen- und Organisationsvorschläge basierend auf der Routine des Nutzers.",
      tech: ["Flutter", "Dart", "Firebase", "AI/ML"],
      github: "https://github.com/becastellani/RitmoApp",
      deploy: null,
      status: "Abgeschlossen",
      featured: false,
      category: "Produktivität",
    },
    {
      id: 7,
      name: "RemoteMouse",
      description:
        "Flutter-App zur Fernsteuerung des Computers per Smartphone, mit Python-Backend-Server.",
      longDescription:
        "Flutter-Mobile-Client kommuniziert via Socket.IO mit Python-Server zur Fernsteuerung des Computers. Ermöglicht Lautstärkeregelung, Mausbewegung, Klicks und Scrollen direkt vom Smartphone.",
      tech: ["Flutter", "Dart", "Python", "Socket.IO"],
      github: "https://github.com/becastellani/Flutter-RemoteMouse",
      deploy: null,
      status: "Abgeschlossen",
      featured: false,
      category: "Automatisierung",
    },
    {
      id: 8,
      name: "User Management API",
      description:
        "REST API für Benutzer- und Produktverwaltung mit Authentifizierung, gebaut mit Node.js, Express und MongoDB.",
      longDescription:
        "REST API mit vollständigen CRUD-Operationen für Benutzer und Produkte, JWT-Authentifizierung, Datenvalidierung und modularer Express-Struktur. MongoDB-Datenbank via Mongoose.",
      tech: ["Node.js", "Express", "MongoDB", "JWT"],
      github: "https://github.com/becastellani/UserManagementMongoDB",
      deploy: null,
      status: "Abgeschlossen",
      featured: false,
      category: "Systeme",
    },
    {
      id: 9,
      name: "Humidity Controller",
      description:
        "Eingebettetes automatisches Feuchtigkeitssteuerungssystem mit Arduino, DHT11-Sensor, LCD-Display und Relais.",
      longDescription:
        "IoT-System zur Überwachung und Steuerung der Umgebungsfeuchtigkei. Liest DHT11-Sensordaten, zeigt sie auf LCD an und schaltet das Relais automatisch zum Ein- oder Ausschalten des Luftbefeuchters basierend auf einem konfigurierbaren Schwellenwert.",
      tech: ["Arduino", "IoT", "C++", "DHT11", "LCD"],
      github: "https://github.com/becastellani/UmidificadorAutomatico",
      deploy: null,
      status: "Abgeschlossen",
      featured: false,
      category: "Systeme",
    },
  ],

  education: [
    {
      institution: "Biopark Educação",
      degree: "Bachelor in Software Engineering",
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
    "Forschungsdirektor — Akademische Liga für Software Engineering und ADS, Biopark (2024–2025)",
    "Lehrbeauftragter für Datenabstraktion, -modellierung und -persistenz — Biopark (2023–2024)",
  ],

  navigation: {
    home: "Startseite",
    about: "Über mich",
    experience: "Erfahrung",
    projects: "Projekte",
    contact: "Kontakt",
    navigationLabel: "Navigation",
    terminal: "Terminal",
    theme: { dark: "Dunkel", light: "Hell" },
  },

  hero: {
    statsYearsLabel: "Jahre Erf.",
    statsProjectsLabel: "Stunden Code",
    viewProjectsButton: "Projekte ansehen",
    resumeButton: "Lebenslauf",
  },

  about: {
    sectionLabel: "Über mich",
    sectionTitle: "Full-Stack Entwickler mit",
    sectionTitleAccent: "Infrastruktur-Fokus",
    bio: "Ich bin Full-Stack-Entwickler mit Fokus auf kritische Systeme. Derzeit arbeite ich bei Sicredi Vale do Piquiri, wo ich am Hauptsystem der Genossenschaft arbeite. Davor habe ich zwei Jahre damit verbracht, ein Legacy-ERP in PHP zu modernisieren — Workflows zu automatisieren und die Produktionsleistung zu optimieren.",
    languages: [
      { name: "Portugiesisch", level: "Muttersprache" },
      { name: "Englisch", level: "Fortgeschritten — B2" },
      { name: "Spanisch", level: "Anfänger — A1" },
    ],
    softSkills: [
      "Problemlösung",
      "Systemdenken",
      "Ownership",
      "Technische Kommunikation",
      "Proaktivität",
      "Technische Führung",
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
        label: "Datenbanken",
        items: ["MySQL", "PostgreSQL", "Oracle", "SQL Server", "Redis"],
      },
      {
        label: "Infrastruktur",
        items: ["Kubernetes", "Docker", "RabbitMQ", "CI/CD", "Linux"],
      },
      {
        label: "Werkzeuge",
        items: ["Git", "Selenium", "Puppeteer", "REST APIs", "WebScraping"],
      },
    ],
    softSkillsLabel: "Soft Skills",
    academicLabel: "Akademische Tätigkeit",
    certificationsLabel: "Zertifizierungen",
  },

  experience: {
    sectionLabel: "Werdegang",
    sectionTitle: "Berufliche",
    sectionTitleAccent: "Erfahrung",
  },

  projectsConfig: {
    sectionLabel: "Portfolio",
    sectionTitle: "Projekte",
    categories: ["Alle", "SaaS", "Systeme", "Automatisierung", "Produktivität"],
    privateLabel: "Privat / WIP",
    demoLabel: "Demo",
  },

  contact: {
    sectionLabel: "Kontakt",
    sectionTitle: "Lass uns",
    sectionTitleAccent: "reden?",
    tagline:
      "Ich bin offen für Gespräche. Wenn Sie etwas Interessantes zu besprechen haben, schreiben Sie mir.",
    emailLabel: "Email",
    phoneLabel: "Telefon",
    locationLabel: "Standort",
    footerText: "Erstellt mit React + Vite",
    formTitle: "Nachricht senden",
    formSubtitle:
      "Ich antworte innerhalb von 24h. Es kann um Jobmöglichkeiten, technische Zusammenarbeit oder einfach ein Gespräch über Technologie gehen.",
    formNameLabel: "Name",
    formNamePlaceholder: "Ihr Name",
    formEmailLabel: "Email",
    formEmailPlaceholder: "ihre@email.com",
    formMessageLabel: "Nachricht",
    formMessagePlaceholder: "Worüber möchten Sie sprechen?",
    formSubmitButton: "Nachricht senden",
    formSubmitting: "E-Mail-Client wird geöffnet...",
    emailSubject: "Kontakt über Portfolio",
  },
};
