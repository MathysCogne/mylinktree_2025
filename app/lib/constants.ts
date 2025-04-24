export type ProjectLink = {
  readonly label: string
  readonly url: string
  readonly icon: 'globe' | 'github' | 'book' | 'chart'
}

export type Language = 'fr' | 'en'

export type Project = {
  readonly title: string
  readonly description: string
  readonly tags: readonly string[]
  readonly image: string
  readonly links: readonly ProjectLink[]
  readonly expanded: {
    readonly features: readonly string[]
    readonly technicalDetails: string
  }
}

export type Event = {
  readonly title: string
  readonly date: string
  readonly description: string
  readonly tags: readonly string[]
  readonly image?: string
  readonly link?: {
    readonly url: string
    readonly label: string
  }
}

export type SocialLink = {
  readonly title: string
  readonly description: string
  readonly url: string
  readonly icon: 'linkedin' | 'github' | 'twitter' | 'phone' | 'globe' | 'calendar'
  readonly color: string
}

export const texts = {
  fr: {
  metadata: {
    siteTitle: "Mathys Cogné Foucault - Développeur | Portfolio",
    siteDescription: "Développeur Web3 & IA spécialisé en blockchain, React, TypeScript et Next.js. Étudiant à 42, passionné par l'innovation technologique et les hackathons. Découvrez mes projets et compétences.",
    siteKeywords: "développeur web3, blockchain, intelligence artificielle, React, TypeScript, Next.js, École 42, développeur frontend, portfolio, hackathons, projets tech, cybersécurité, no-code, IA",
    authorName: "Mathys Cogné Foucault",
    twitterHandle: "@MathysCF",
    siteLocale: "fr-FR",
    siteType: "website",
    siteCategory: "Technology"
  },
  hero: {
    title: "Développeur Web3",
    name: "Mathys Cogné-Foucault",
    description1: "Étudiant à l'École 42, passionné par les hackathons et les défis innovants. La recherche de solutions créatives et l'exploration des frontières technologiques.",
    description2: "Spécialisé en Web3 et IA, je m'épanouis dans l'univers de la blockchain, de l'intelligence artificielle et de la cybersécurité."
  },
  notFound: {
    title: "404",
    heading: "Oups ! On dirait que vous vous êtes perdu dans le métaverse...",
    description: "Pas de panique ! Même les meilleurs développeurs se perdent parfois.",
    buttonText: "Retour à la terre ferme"
  },
  resume: {
    beforetitle: "Mon",
    title: "Parcours",
    subtitle: "De l'expérience terrain à l'expertise technique",
    experience: {
      title: "Mon Parcours Professionnel",
      items: [
        {
          company: "XRPL Commons - Cohorte Blockchain & AI",
          role: "Aquarium Residency",
          period: "avril 2025 - juillet 2025",
          logo: "/images/companies/xrpl_commons.jpeg",
          url: "https://www.xrpl-commons.org/residency"
        },
        {
          company: "42Blockchain",
          role: "Membre - Contributeur",
          period: "février 2025 - Présent",
          logo: "/images/companies/42blockchain.svg",
          url: "https://42blockchain.com/"
        },
        {
          company: "Café Joyeux",
          role: "Superviseur",
          period: "novembre 2024 - Présent",
          logo: "/images/companies/cafe-joyeux.jpeg",
          url: "https://www.cafejoyeux.com"
        },
        {
          company: "POKAWA",
          role: "Directeur Multisite",
          period: "mars 2021 - avril 2023",
          logo: "/images/companies/pokawa.jpeg",
          url: "https://pokawa.com"
        },
        {
          company: "Les Burgers de Papa",
          role: "Directeur Adjoint",
          period: "août 2020 - mars 2021",
          logo: "/images/companies/burgers-papa.jpeg",
          url: "https://lesburgersdepapa.fr"
        },
        {
          company: "McDonald's",
          role: "Manager Opérationnel",
          period: "octobre 2017 - août 2020",
          logo: "/images/companies/mcdonalds.jpeg",
          url: "https://www.mcdonalds.fr"
        }
      ]
    },
    education: {
      title: "Mon Parcours Académique",
      items: [
        {
          school: "42 Paris",
          degree: "Ingenieur logiciel",
          period: "2024 - 2026",
          logo: "/images/education/42born2code_logo.jpeg",
          url: "https://42.fr"
        },
        {
          school: "OpenClassrooms",
          degree: "Developpeur Front-End",
          period: "2024",
          logo: "/images/education/openclassrooms_logo.jpeg",
          url: "https://openclassrooms.com"
        }
      ]
    },
    skills: {
      title: "Mes Technologies Maîtrisées",
      items: [
        "React JS",
        "Next.js",
        "TypeScript",
        "Node.js",
        "Postgres",
        "Docker",
        "C",
        "C++"
      ]
    }
  },
  projects: {
    title: "Mes Projets",
    subtitle: "Innovation et créativité",
    features: "Fonctionnalités",
    technicalDetails: "Détails Techniques",
    viewMore: "Voir plus",
    items: [
      {
        title: "PatcherAI",
        description: "Un builder no-code d'agents IA intuitif avec interface drag and drop. Permet de créer et déployer des agents IA personnalisés sans écrire de code.",
        tags: ["React", "TypeScript", "AI", "No-Code", "Drag and Drop", "LLM"],
        image: "/images/projects/patcherai.webp",
        links: [
          { label: "En développement", url: "#", icon: "globe" }
        ],
        expanded: {
          features: [
            "Interface drag and drop intuitive",
            "Création d'agents IA sans code",
            "Personnalisation complète des comportements",
            "Intégration avec différents modèles de langage",
            "Déploiement simplifié",
            "Monitoring des performances",
            "Bibliothèque de composants réutilisables"
          ],
          technicalDetails: "PatcherAI est développé avec React et TypeScript, utilisant une architecture modulaire pour permettre la création visuelle d'agents IA. Le système utilise une approche basée sur les composants pour assembler différentes capacités d'IA, avec un moteur d'exécution qui traduit les configurations visuelles en instructions pour les LLM. L'interface utilisateur est conçue pour être accessible aux non-développeurs tout en offrant des fonctionnalités avancées pour les utilisateurs expérimentés."
        }
      },
      {
        title: "42 Blockchain Website",
        description: "Contribution au développement du site web officiel de l'association 42 Blockchain, une communauté dédiée à l'apprentissage et à la promotion des technologies blockchain au sein de l'École 42.",
        tags: ["React", "Next.js", "TypeScript", "TailwindCSS", "Web3"],
        image: "/images/projects/42blockchain.jpeg",
        links: [
          { label: "Site", url: "https://42blockchain.com/", icon: "globe" },
          { label: "GitHub", url: "https://github.com/iceywil/42Blockchain-Website", icon: "github" }
        ],
        expanded: {
          features: [
            "Interface moderne et responsive",
            "Présentation des événements et ateliers de l'association",
            "Ressources éducatives sur la blockchain",
            "Présentation des projets des membres",
            "Intégration avec les réseaux sociaux",
            "Section actualités et blog"
          ],
          technicalDetails: "Site développé avec Next.js et TypeScript, utilisant TailwindCSS pour le styling. L'architecture est basée sur des composants réutilisables et une approche JAMstack pour des performances optimales. Le site sert de vitrine pour l'association 42 Blockchain et facilite la diffusion de connaissances sur les technologies blockchain au sein de la communauté de l'École 42."
        }
      },
      {
        title: "Cub3D",
        description: "Un projet inspiré de Wolfenstein 3D, l'un des premiers jeux de tir à la première personne. Exploration des techniques de ray-casting pour créer une représentation 3D d'un labyrinthe.",
        tags: ["C", "Ray-casting", "3D", "Game Development", "42 School"],
        image: "/images/projects/cub3dm.png",
        links: [
          { label: "GitHub", url: "https://github.com/MathysCogne/42_Cub3D", icon: "github" }
        ],
        expanded: {
          features: [
            "Rendu 3D utilisant le ray-casting",
            "Textures personnalisées et carte configurable",
            "Mouvements et interactions du joueur",
            "Affichage d'une mini-carte",
            "Sprites animés",
            "Système de portes",
            "Gestion complète du point de vue à 360 degrés",
            "Interaction à la souris pour un ciblage précis et un contrôle de la caméra",
            "Armes et statistiques du joueur (Santé, endurance...)"
          ],
          technicalDetails: "Développé en C, ce projet met en œuvre des techniques avancées de ray-casting pour simuler un environnement 3D à partir d'une carte 2D. Le moteur graphique gère les collisions, les textures, l'éclairage et les interactions. Le format de carte .cub personnalisé permet de définir les textures et la disposition du labyrinthe. L'implémentation comprend des calculs trigonométriques précis pour la projection des rayons et la détection des murs."
        }
      },
      {
        title: "Philosophers",
        description: "Une implémentation du célèbre problème des philosophes dînants, explorant les défis de concurrence et de synchronisation en programmation.",
        tags: ["C", "Threads", "Mutexes", "Processes", "Semaphores", "42 School"],
        image: "/images/projects/philosophersm.png",
        links: [
          { label: "GitHub", url: "https://github.com/MathysCogne/42_Philosophers", icon: "github" },
          { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Dining_philosophers_problem", icon: "book" }
        ],
        expanded: {
          features: [
            "Version obligatoire : Threads et Mutexes",
            "Gestion des ressources partagées avec des mutexes",
            "Simulation multi-thread avec un philosophe par thread",
            "Surveillance des états et détection de la mort par famine",
            "Version bonus : Processus et Sémaphores",
            "Simulation multi-processus avec des philosophes indépendants",
            "Synchronisation efficace avec des sémaphores",
            "Surveillance centralisée par un processus parent"
          ],
          technicalDetails: "Ce projet aborde le défi classique de la gestion des ressources partagées en informatique. La version principale utilise des threads et des mutexes pour synchroniser l'accès aux fourchettes entre les philosophes, évitant les interblocages tout en surveillant avec précision les timestamps. La version bonus implémente la même simulation avec des processus séparés et des sémaphores, démontrant une approche différente de la synchronisation et de la communication inter-processus. Les deux versions nécessitent une gestion précise du temps pour détecter quand un philosophe meurt de faim."
        }
      }
    ]
  },
  blog: {
    title: "Blog Tech & Web3",
    description: "Découvrez mes articles sur le développement web, la blockchain, l'IA et les technologies émergentes. Tutoriels, analyses et retours d'expérience d'un développeur passionné."
  },
  hackathons: {
    title: "Hackathons & Événements",
    subtitle: "Mes aventures dans le monde des défis technologiques",
    events: [
      {
        title: "Hackathon ETHGlobal Cannes",
        date: "Juillet 2025",
        description: "## ETH Global Cannes\n\n **Comming soon** \n\n.\n\n.\n\n.\n\n.",
        tags: ["ETH", "Web3"],
        link: {
          url: "https://ethglobal.com/events/cannes",
          label: "Site de l'événement"
        }
      },
      {
        title: "Paris Blockchain Week",
        date: "Avril 2025",
        description: "## 🏆 Hackathon Hack The Block - PBW\n\n **1ère place** pour notre projet Sentinel Wallet sur la track XRPL !\n\n Notre idée ? Simple mais puissante : améliorer l'expérience utilisateur sur XRPL et renforcer la sécurité grâce au multi-sign... de façon totalement transparente pour l'utilisateur.\n\nC'est comme ça qu'est né Sentinel Wallet : un agrégateur de wallet XRPL qui intègre un LLM pour interagir on-chain par simple prompt, et permet en un clic de configurer son wallet en dual-sign. \n\n Le second signataire ? Une IA qui analyse les transactions en temps réel pour détecter les scams et schémas frauduleux.",
        tags: ["XRPL", "IA", "Web3"],
        link: {
          url: "https://github.com/MathysCogne/hackathon_pbw_sentinel_wallet",
          label: "Voir le projet"
        },
        image: "images/events/pbw-hackathon.jpeg"
      },
      {
        title: "AI Action Summit Hackathon",
        date: "Février 2025",
        description: "## Doctolib, Paris\n\nNous avons développé un agent IA pour réduire l'attente lors des appels aux numéros d'urgence en santé (trois minutes en moyenne, avec des pics à 30 minutes en hiver).\n\nNotre solution prend le relais pendant ces périodes d'attente, recueille les informations essentielles (nom, prénom, localisation, description de l'incident) et guide l'appelant à travers les gestes de premiers secours via un dialogue interactif et modulaire jusqu'à ce que l'opérateur prenne le relais.\n\nUn super week-end avec peu de sommeil avec notre équipe \"Les Hackatistes du Dimanche\" dans les locaux de Doctolib.",
        tags: ["IA", "Santé", "Agent IA", "Urgences"],
        link: {
          url: "https://github.com/MathysCogne/Hackathon_AI-Action-Summit_2025",
          label: "Voir le projet"
        }
      },
      {
        title: "Kiln Hackathon",
        date: "Janvier 2025",
        description: "## 🏆  Kiln, Paris\n\n **2ème place** dans la catégorie Kiln Connect avec notre équipe \"Les Hackatistes du Dimanche\". \n\n Nous avons développé un Agent IA connecté en temps réel à l'API de Kiln pour faciliter l'accès aux données blockchain.\n\nNotre solution vectorise les requêtes utilisateurs, détermine l'appel API le plus pertinent, enrichit les données récupérées et les transmet à un LLM avec un pré-prompt dynamique.\n\nL'outil fournit des insights précis et actualisés sur la blockchain : suivi des rewards, statut des validateurs, analyse de wallet et plus encore.\n\n",
        tags: ["IA", "Blockchain", "LLM", "Kiln"],
        link: {
          url: "https://github.com/MathysCogne/hackathon_kiln",
          label: "Voir le projet"
        },
      },
    ]
  },
  footer: {
    morphingTexts: [
      "Créons l'avenir",
      "Discutons ensemble",
      "Innovons ensemble",
      "Concrétisons vos idées",
      "Travaillons ensemble",
      "Créons l'avenir"
    ]
  },
  links: {
    title: "My Links",
    subtitle: "Let's connect",
    items: [
      {
        title: "LinkedIn",
        description: "My professional profile",
        url: "https://www.linkedin.com/in/mathys-cogne-foucault/",
        icon: "linkedin",
        color: "#0077B5"
      },
      {
        title: "GitHub",
        description: "Check out my open-source projects",
        url: "https://github.com/MathysCogne",
        icon: "github",
        color: "#333333"
      },
      {
        title: "Twitter/X",
        description: "Follow my tech updates",
        url: "https://x.com/MattCogne",
        icon: "twitter",
        color: "#1DA1F2"
      },
      {
        title: "Website",
        description: "My personal portfolio",
        url: "https://www.mathys-cognefoucault.fr/",
        icon: "globe",
        color: "#9C27B0"
      },
      {
        title: "Schedule a Meeting",
        description: "Book a slot in my calendar",
        url: "https://calendar.app.google/9Btfik6pCrQMSr7s6",
        icon: "calendar",
        color: "#FF5722"
      }
    ]
  }
  },
  en: {
    metadata: {
      siteTitle: "Mathys Cogné Foucault - Developer | Portfolio",
      siteDescription: "Web3 & AI Developer specialized in blockchain, React, TypeScript, and Next.js. 42 School student, passionate about technological innovation and hackathons. Discover my projects and skills.",
      siteKeywords: "web3 developer, blockchain, artificial intelligence, React, TypeScript, Next.js, 42 School, frontend developer, portfolio, hackathons, tech projects, cybersecurity, no-code, AI",
      authorName: "Mathys Cogné Foucault",
      twitterHandle: "@MathysCF",
      siteLocale: "en-US",
      siteType: "website",
      siteCategory: "Technology"
    },
    hero: {
      title: "Web3 Developer",
      name: "Mathys Cogné-Foucault",
      description1: "42 School student, passionate about hackathons and innovative challenges. Always seeking creative solutions and exploring technological boundaries.",
      description2: "Specialized in Web3 and AI, I thrive in the world of blockchain, artificial intelligence, and cybersecurity."
    },
    notFound: {
      title: "404",
      heading: "Oops! Looks like you got lost in the metaverse...",
      description: "Don't panic! Even the best developers get lost sometimes.",
      buttonText: "Back to solid ground"
    },
    resume: {
      beforetitle: "My",
      title: "Resume",
      subtitle: "From field experience to technical expertise",
      experience: {
        title: "My Professional Journey",
        items: [
          {
            company: "XRPL Commons - Cohorte Blockchain & AI",
            role: "Aquarium Residency",
            period: "April 2025 - July 2025",
            logo: "/images/companies/xrpl_commons.jpeg",
            url: "https://www.xrpl-commons.org/residency"
          },
          {
            company: "42Blockchain",
            role: "Member - Contributor",
            period: "February 2025 - Present",
            logo: "/images/companies/42blockchain.svg",
            url: "https://42blockchain.com/"
          },
          {
            company: "Café Joyeux",
            role: "Supervisor",
            period: "November 2024 - Present",
            logo: "/images/companies/cafe-joyeux.jpeg",
            url: "https://www.cafejoyeux.com"
          },
          {
            company: "POKAWA",
            role: "Multi-site Director",
            period: "March 2021 - April 2023",
            logo: "/images/companies/pokawa.jpeg",
            url: "https://pokawa.com"
          },
          {
            company: "Les Burgers de Papa",
            role: "Deputy Director",
            period: "August 2020 - March 2021",
            logo: "/images/companies/burgers-papa.jpeg",
            url: "https://lesburgersdepapa.fr"
          },
          {
            company: "McDonald's",
            role: "Operations Manager",
            period: "October 2017 - August 2020",
            logo: "/images/companies/mcdonalds.jpeg",
            url: "https://www.mcdonalds.fr"
          }
        ]
      },
      education: {
        title: "My Academic Journey",
        items: [
          {
            school: "42 Paris",
            degree: "Software Engineer",
            period: "2024 - 2026",
            logo: "/images/education/42born2code_logo.jpeg",
            url: "https://42.fr"
          },
          {
            school: "OpenClassrooms",
            degree: "Front-End Developer",
            period: "2024",
            logo: "/images/education/openclassrooms_logo.jpeg",
            url: "https://openclassrooms.com"
          }
        ]
      },
      skills: {
        title: "My Tech Stack",
        items: [
          "React JS",
          "Next.js",
          "TypeScript",
          "Node.js",
          "Postgres",
          "Docker",
          "C",
          "C++"
        ]
      }
    },
    projects: {
      title: "My Projects",
      subtitle: "Innovation and creativity",
      features: "Features",
      technicalDetails: "Technical Details",
      viewMore: "View more",
      items: [
        {
          title: "PatcherAI",
          description: "An intuitive no-code AI agent builder with drag and drop interface. Create and deploy custom AI agents without writing code.",
          tags: ["React", "TypeScript", "AI", "No-Code", "Drag and Drop", "LLM"],
          image: "/images/projects/patcherai.webp",
          links: [
            { label: "In development", url: "#", icon: "globe" }
          ],
          expanded: {
            features: [
              "Intuitive drag and drop interface",
              "No-code AI agent creation",
              "Complete behavior customization",
              "Integration with various language models",
              "Simplified deployment",
              "Performance monitoring",
              "Reusable component library"
            ],
            technicalDetails: "PatcherAI is developed with React and TypeScript, using a modular architecture to enable visual creation of AI agents. The system uses a component-based approach to assemble different AI capabilities, with an execution engine that translates visual configurations into instructions for LLMs. The user interface is designed to be accessible to non-developers while offering advanced features for experienced users."
          }
        },
        {
          title: "42 Blockchain Website",
          description: "Contributing to the development of the official 42 Blockchain association website, a community dedicated to learning and promoting blockchain technologies at École 42.",
          tags: ["React", "Next.js", "TypeScript", "TailwindCSS", "Web3"],
          image: "/images/projects/42blockchain.jpeg",
          links: [
            { label: "Website", url: "https://42blockchain.com/", icon: "globe" },
            { label: "GitHub", url: "https://github.com/iceywil/42Blockchain-Website", icon: "github" }
          ],
          expanded: {
            features: [
              "Modern and responsive interface",
              "Association events and workshops showcase",
              "Blockchain educational resources",
              "Member projects showcase",
              "Social media integration",
              "News and blog section"
            ],
            technicalDetails: "Website developed with Next.js and TypeScript, using TailwindCSS for styling. The architecture is based on reusable components and a JAMstack approach for optimal performance. The site serves as a showcase for the 42 Blockchain association and facilitates the dissemination of blockchain knowledge within the École 42 community."
          }
        },
        {
          title: "Cub3D",
          description: "A project inspired by Wolfenstein 3D, one of the first first-person shooter games. Exploring ray-casting techniques to create a 3D representation of a maze.",
          tags: ["C", "Ray-casting", "3D", "Game Development", "42 School"],
          image: "/images/projects/cub3dm.png",
          links: [
            { label: "GitHub", url: "https://github.com/MathysCogne/42_Cub3D", icon: "github" }
          ],
          expanded: {
            features: [
              "3D rendering using ray-casting",
              "Custom textures and configurable map",
              "Player movements and interactions",
              "Mini-map display",
              "Animated sprites",
              "Door system",
              "Complete 360-degree view management",
              "Mouse interaction for precise targeting and camera control",
              "Weapons and player stats (Health, stamina...)"
            ],
            technicalDetails: "Developed in C, this project implements advanced ray-casting techniques to simulate a 3D environment from a 2D map. The graphics engine handles collisions, textures, lighting, and interactions. The custom .cub map format allows defining textures and maze layout. The implementation includes precise trigonometric calculations for ray projection and wall detection."
          }
        },
        {
          title: "Philosophers",
          description: "An implementation of the famous dining philosophers problem, exploring concurrency and synchronization challenges in programming.",
          tags: ["C", "Threads", "Mutexes", "Processes", "Semaphores", "42 School"],
          image: "/images/projects/philosophersm.png",
          links: [
            { label: "GitHub", url: "https://github.com/MathysCogne/42_Philosophers", icon: "github" },
            { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Dining_philosophers_problem", icon: "book" }
          ],
          expanded: {
            features: [
              "Mandatory version: Threads and Mutexes",
              "Shared resource management with mutexes",
              "Multi-thread simulation with one philosopher per thread",
              "State monitoring and starvation detection",
              "Bonus version: Processes and Semaphores",
              "Multi-process simulation with independent philosophers",
              "Efficient synchronization with semaphores",
              "Centralized monitoring by parent process"
            ],
            technicalDetails: "This project addresses the classic challenge of shared resource management in computer science. The main version uses threads and mutexes to synchronize fork access between philosophers, avoiding deadlocks while precisely monitoring timestamps. The bonus version implements the same simulation with separate processes and semaphores, demonstrating a different approach to synchronization and inter-process communication. Both versions require precise time management to detect when a philosopher dies of starvation."
          }
        }
      ]
    },
    blog: {
      title: "Tech & Web3 Blog",
      description: "Discover my articles about web development, blockchain, AI, and emerging technologies. Tutorials, analyses, and experience feedback from a passionate developer."
    },
    hackathons: {
      title: "Hackathons & Events",
      subtitle: "My adventures in the world of technological challenges",
      events: [
        {
          title: "ETHGlobal Cannes Hackathon",
          date: "July 2025",
          description: "## ETH Global Cannes\n\n **Coming soon** \n\n.\n\n.\n\n.\n\n.",
          tags: ["ETH", "Web3"],
          link: {
            url: "https://ethglobal.com/events/cannes",
            label: "Event website"
          }
        },
        {
          title: "Paris Blockchain Week",
          date: "April 2025",
          description: "## 🏆 Hackathon Hack The Block - PBW\n\n **1st place** for our Sentinel Wallet project on the XRPL track!\n\nOur idea? Simple but powerful: improve the user experience on XRPL and enhance security through multi-sign... completely transparently for the user.\n\nThat's how Sentinel Wallet was born: an XRPL wallet aggregator that integrates an LLM to interact on-chain through simple prompts, and allows users to configure their wallet in dual-sign with one click.\n\nThe second signer? An AI that analyzes transactions in real-time to detect scams and fraudulent schemes.",
          tags: ["XRPL", "AI", "Web3"],
          link: {
            url: "https://github.com/MathysCogne/hackathon_pbw_sentinel_wallet",
            label: "View project"
          },
          image: "images/events/pbw-hackathon.jpeg"
        },
        {
          title: "AI Action Summit Hackathon",
          date: "February 2025",
          description: "## Doctolib, Paris\n\nWe developed an AI agent to reduce waiting times for health emergency calls (three minutes on average, with peaks of 30 minutes in winter).\n\nOur solution takes over during these waiting periods, collects essential information (name, location, incident description) and guides the caller through first aid steps via an interactive and modular dialogue until the operator takes over.\n\nA great weekend with little sleep with our team \"Les Hackatistes du Dimanche\" at Doctolib's offices.",
          tags: ["AI", "Healthcare", "AI Agent", "Emergency"],
          link: {
            url: "https://github.com/MathysCogne/Hackathon_AI-Action-Summit_2025",
            label: "View project"
          }
        },
        {
          title: "Kiln Hackathon",
          date: "January 2025",
          description: "## 🏆  Kiln, Paris\n\n **2nd place** in the Kiln Connect category with our team \"Les Hackatistes du Dimanche\". \n\n We developed an AI Agent connected in real-time to Kiln's API to facilitate access to blockchain data.\n\nOur solution vectorizes user queries, determines the most relevant API call, enriches the retrieved data, and transmits it to an LLM with a dynamic pre-prompt.\n\nThe tool provides accurate and up-to-date blockchain insights: reward tracking, validator status, wallet analysis, and more.\n\n",
          tags: ["AI", "Blockchain", "LLM", "Kiln"],
          link: {
            url: "https://github.com/MathysCogne/hackathon_kiln",
            label: "View project"
          }
        }
      ]
    },
    footer: {
      morphingTexts: [
        "Let's create the future",
        "Let's discuss together",
        "Let's innovate together",
        "Let's bring your ideas to life",
        "Let's work together",
        "Let's create the future"
      ]
    },
    links: {
      title: "My Links",
      subtitle: "Let's connect",
      items: [
        {
          title: "LinkedIn",
          description: "My professional profile",
          url: "https://www.linkedin.com/in/mathys-cogne-foucault/",
          icon: "linkedin",
          color: "#0077B5"
        },
        {
          title: "GitHub",
          description: "Check out my open-source projects",
          url: "https://github.com/MathysCogne",
          icon: "github",
          color: "#333333"
        },
        {
          title: "Twitter/X",
          description: "Follow my tech updates",
          url: "https://x.com/MattCogne",
          icon: "twitter",
          color: "#1DA1F2"
        },
        {
          title: "Website",
          description: "My personal portfolio",
          url: "https://www.mathys-cognefoucault.fr/",
          icon: "globe",
          color: "#9C27B0"
        },
        {
          title: "Schedule a Meeting",
          description: "Book a slot in my calendar",
          url: "https://calendar.app.google/9Btfik6pCrQMSr7s6",
          icon: "calendar",
          color: "#FF5722"
        }
      ]
    }
  }
} as const

export function getTexts(lang: Language) {
  return texts[lang]
} 