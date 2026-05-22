// Types pour back-office futur. Tout le contenu ci-dessous est du contenu d'exemple
// (placeholder) destiné à être remplacé via un back-office.

export type SkillCategory = "technique" | "humaine";

export interface Skill {
  id: string;
  name: string;
  category: SkillCategory;
  level: number; // 0-100, pour le schéma synthétique
  shortDescription: string;
  definition: string; // définition + contexte professionnel + actualité
  anecdotes: {
    title: string;
    body: string;
    result: string;
    valueAdded: string;
    projectId?: string; // lien vers réalisation
  }[];
  selfCritique: {
    mastery: string; // niveau de maîtrise
    priority: string; // place / importance dans le profil
    acquisitionSpeed?: string;
    advice: string;
  };
  evolution: {
    targetLevel: string;
    trainings: string[];
  };
  relatedProjectIds: string[];
}

export interface Project {
  id: string;
  name: string; // nom évocateur indépendant du contexte
  shortDescription: string;
  presentation: string; // présentation / définition
  objectives: string; // objectifs, contexte, enjeu, risques
  steps: string[]; // étapes - ce que j'ai fait
  actors: string; // acteurs, interactions
  results: string; // résultats pour moi / pour l'entreprise
  aftermath: string; // lendemains : immédiat, à distance, aujourd'hui
  critique: string; // regard critique
  relatedSkillIds: string[];
  cover?: string;
}

export type ExperienceKind = "entreprise" | "formation" | "certification";

export interface Experience {
  id: string;
  kind: ExperienceKind;
  period: string; // ex: "Sept. 2024 — aujourd'hui"
  startYear: number;
  // entreprise
  position?: string;
  company?: string;
  companyLogo?: string;
  responsibility?: string;
  status?: string; // stagiaire / alternant
  missions?: string;
  vision?: string;
  // formation
  diploma?: string;
  school?: string;
  schoolUrl?: string;
  schoolLogo?: string;
  pedagogy?: string;
  // certification
  title?: string;
  date?: string;
  relatedSkillIds?: string[];
  relatedProjectIds?: string[];
}

export interface Profile {
  firstName: string;
  lastName: string;
  title: string;
  tagline: string;
  email: string;
  phone: string;
  location: string;
  linkedin?: string;
  github?: string;
  photoUrl?: string;
  initials: string;
}

export const profile: Profile = {
  firstName: "Mathis",
  lastName: "Sebille",
  title: "Expert en ingénierie du logiciel",
  tagline:
    "Concevoir des systèmes logiciels robustes, lisibles et durables — au service de personnes réelles.",
  email: "contact@mathis-sebille.dev",
  phone: "+33 6 00 00 00 00",
  location: "France",
  linkedin: "https://www.linkedin.com/",
  github: "https://github.com/",
  initials: "MS",
};

export const skills: Skill[] = [
  // --- COMPÉTENCES TECHNIQUES (5) ---
  {
    id: "architecture-logicielle",
    name: "Architecture logicielle",
    category: "technique",
    level: 85,
    shortDescription: "Concevoir des systèmes maintenables et évolutifs.",
    definition:
      "L'architecture logicielle consiste à structurer un système — ses modules, ses frontières, ses flux de données — pour qu'il reste compréhensible et modifiable dans le temps. Dans un contexte où l'IA générative pousse à produire du code plus vite que jamais, savoir poser des frontières nettes devient une compétence critique pour éviter la dette architecturale.",
    anecdotes: [
      {
        title: "Refonte d'un monolithe legacy",
        body: "J'ai mené le découpage progressif d'un monolithe PHP de 400k lignes en modules métier autonomes, en appliquant les principes du Domain-Driven Design.",
        result: "Temps de déploiement réduit de 45 minutes à 6 minutes.",
        valueAdded:
          "J'ai cartographié les dépendances cachées et défini des contrats d'API entre modules, ce qui a permis à 4 équipes de livrer en parallèle.",
        projectId: "refonte-atlas",
      },
    ],
    selfCritique: {
      mastery: "Maîtrise avancée — je suis à l'aise sur des systèmes distribués de taille moyenne.",
      priority:
        "Compétence pivot de mon profil : tout le reste (qualité, sécurité, performance) en découle.",
      acquisitionSpeed: "Acquise sur 4 ans, accélérée par l'exposition à des systèmes legacy variés.",
      advice:
        "Commencer simple. Une architecture juste ce qu'il faut bat toujours une architecture parfaite mais prématurée.",
    },
    evolution: {
      targetLevel: "Devenir référent architecture sur des systèmes event-driven à grande échelle.",
      trainings: [
        "Formation interne sur l'event sourcing (Q1 2026)",
        "Lecture en cours : Software Architecture: The Hard Parts (Ford & Richards)",
      ],
    },
    relatedProjectIds: ["refonte-atlas", "plateforme-orion"],
  },
  {
    id: "developpement-fullstack",
    name: "Développement fullstack",
    category: "technique",
    level: 90,
    shortDescription: "Du schéma de base de données à l'interface utilisateur.",
    definition:
      "Maîtriser l'ensemble de la chaîne — base de données, API, front — pour livrer des fonctionnalités de bout en bout. Avec la généralisation des frameworks fullstack comme Next.js ou TanStack Start, cette polyvalence est devenue la norme dans les équipes produit modernes.",
    anecdotes: [
      {
        title: "Lancement d'un MVP en 6 semaines",
        body: "Conception du schéma Postgres, des API REST, et de l'interface React pour un SaaS de gestion de planning.",
        result: "30 clients pilotes signés dans les 3 mois suivant le lancement.",
        valueAdded:
          "Ma capacité à arbitrer entre front et back en autonomie a évité 2 allers-retours coûteux entre équipes.",
        projectId: "plateforme-orion",
      },
    ],
    selfCritique: {
      mastery: "Maîtrise solide sur le stack TypeScript / React / Node / Postgres.",
      priority: "Compétence socle au quotidien.",
      advice: "Ne pas confondre fullstack et superficiel — il faut investir en profondeur sur chaque couche.",
    },
    evolution: {
      targetLevel: "Élargir vers les runtimes edge et les architectures serverless.",
      trainings: ["Auto-formation sur Cloudflare Workers et Durable Objects"],
    },
    relatedProjectIds: ["plateforme-orion", "outil-meridian"],
  },
  {
    id: "qualite-tests",
    name: "Qualité & tests automatisés",
    category: "technique",
    level: 78,
    shortDescription: "Construire une confiance durable dans le code livré.",
    definition:
      "La qualité logicielle ne se résume pas aux tests : elle inclut la lisibilité, la couverture, les revues et l'outillage. À l'heure où le code généré par IA inonde les dépôts, les tests deviennent le filet de sécurité indispensable pour distinguer ce qui marche de ce qui semble marcher.",
    anecdotes: [
      {
        title: "Mise en place d'une stratégie de tests à 3 niveaux",
        body: "Introduction de tests unitaires, d'intégration et end-to-end avec Vitest et Playwright sur un projet sans aucune couverture.",
        result: "Régressions en production divisées par 5 en 6 mois.",
        valueAdded: "J'ai formé 6 développeurs à écrire des tests utiles plutôt que des tests cosmétiques.",
        projectId: "refonte-atlas",
      },
    ],
    selfCritique: {
      mastery: "Bonne maîtrise, je continue d'affiner mon jugement sur ce qui mérite d'être testé.",
      priority: "Compétence haute priorité : c'est elle qui rend une base de code modifiable sans peur.",
      advice: "Tester le comportement, pas l'implémentation.",
    },
    evolution: {
      targetLevel: "Approfondir le contract testing pour les architectures distribuées.",
      trainings: ["Lecture : Software Engineering at Google, chapitres sur les tests"],
    },
    relatedProjectIds: ["refonte-atlas", "outil-meridian"],
  },
  {
    id: "devops-cicd",
    name: "DevOps & CI/CD",
    category: "technique",
    level: 72,
    shortDescription: "Industrialiser le chemin du commit à la production.",
    definition:
      "Automatiser les étapes de build, test, déploiement et observation pour livrer en continu, en sécurité. Les pratiques DevOps sont aujourd'hui la condition pour absorber le rythme imposé par les cycles produit modernes.",
    anecdotes: [
      {
        title: "Pipeline GitHub Actions multi-environnements",
        body: "Conception d'une CI complète avec environnements de preview, tests de migration et déploiement blue-green.",
        result: "Délai entre merge et production passé de 2 jours à 20 minutes.",
        valueAdded: "J'ai écrit les workflows réutilisables qui sont aujourd'hui utilisés sur 4 projets.",
        projectId: "plateforme-orion",
      },
    ],
    selfCritique: {
      mastery: "Maîtrise opérationnelle, je délègue volontiers les sujets d'infra pure.",
      priority: "Compétence transversale, importante mais pas centrale dans mon métier.",
      advice: "Investir tôt dans l'outillage : chaque heure gagnée se multiplie sur toute la durée du projet.",
    },
    evolution: {
      targetLevel: "Monter en compétence sur l'observabilité (OpenTelemetry, traces distribuées).",
      trainings: ["Formation OpenTelemetry prévue Q2 2026"],
    },
    relatedProjectIds: ["plateforme-orion"],
  },
  {
    id: "securite-applicative",
    name: "Sécurité applicative",
    category: "technique",
    level: 68,
    shortDescription: "Penser l'attaque pour mieux concevoir la défense.",
    definition:
      "Identifier les surfaces d'attaque, appliquer les bonnes pratiques (OWASP, RGPD) et défendre la donnée utilisateur. Avec la multiplication des fuites de données et l'arrivée du Cyber Resilience Act européen, la sécurité est devenue un sujet de direction.",
    anecdotes: [
      {
        title: "Audit de sécurité interne",
        body: "Conduite d'un audit OWASP Top 10 sur une application B2B, suivi de la priorisation et de la correction des vulnérabilités majeures.",
        result: "12 vulnérabilités critiques corrigées en 4 sprints.",
        valueAdded:
          "J'ai introduit une revue de sécurité systématique sur chaque PR touchant l'authentification.",
        projectId: "refonte-atlas",
      },
    ],
    selfCritique: {
      mastery: "Maîtrise intermédiaire — je sais identifier les angles morts, je continue à monter en gamme.",
      priority: "Compétence stratégique : son absence peut détruire la confiance en un seul incident.",
      advice: "Ne jamais coder l'authentification soi-même quand une solution éprouvée existe.",
    },
    evolution: {
      targetLevel: "Obtenir une certification offensive (type OSCP allégé) d'ici 2 ans.",
      trainings: ["Plateforme Hack The Box, parcours débutant en cours"],
    },
    relatedProjectIds: ["refonte-atlas"],
  },

  // --- COMPÉTENCES HUMAINES (5) ---
  {
    id: "communication",
    name: "Communication technique",
    category: "humaine",
    level: 88,
    shortDescription: "Traduire la complexité pour qu'elle devienne décision.",
    definition:
      "Savoir expliquer un choix technique à un public non technique, et inversement formuler un besoin métier en exigences techniques claires. Avec la diversification des profils dans les équipes produit, cette traduction est devenue un superpouvoir.",
    anecdotes: [
      {
        title: "Présentation d'une refonte au COMEX",
        body: "Préparation et animation d'une présentation de 30 minutes pour justifier un investissement de refonte technique.",
        result: "Budget de 250k€ validé en une séance.",
        valueAdded: "J'ai traduit la dette technique en risques métier mesurables.",
        projectId: "refonte-atlas",
      },
    ],
    selfCritique: {
      mastery: "Compétence travaillée depuis longtemps, à l'aise en public comme en écrit.",
      priority: "Compétence multiplicatrice : elle décuple l'impact de tout le reste.",
      advice: "Préparer la première phrase, improviser le reste.",
    },
    evolution: {
      targetLevel: "Intervenir comme speaker en meetup technique d'ici 1 an.",
      trainings: ["Atelier d'écriture technique (Q1 2026)"],
    },
    relatedProjectIds: ["refonte-atlas", "plateforme-orion"],
  },
  {
    id: "esprit-critique",
    name: "Esprit critique",
    category: "humaine",
    level: 92,
    shortDescription: "Questionner avant d'accepter, valider avant de livrer.",
    definition:
      "Tenir une distance bienveillante face aux modes, aux outils et à ses propres certitudes. Dans un secteur où une nouvelle techno émerge chaque semaine, l'esprit critique évite de jeter ce qui marche pour ce qui brille.",
    anecdotes: [
      {
        title: "Refus argumenté d'une migration framework",
        body: "Étude comparative démontrant qu'une migration coûteuse n'apportait pas le ROI attendu.",
        result: "Économie estimée à 6 mois-homme pour l'équipe.",
        valueAdded: "J'ai produit une matrice de décision réutilisable pour les arbitrages futurs.",
      },
    ],
    selfCritique: {
      mastery: "Très bonne maîtrise, parfois à modérer pour ne pas devenir frein.",
      priority: "Compétence centrale dans un métier où l'enthousiasme technologique peut coûter cher.",
      advice: "Distinguer le scepticisme du cynisme. Le premier construit, le second paralyse.",
    },
    evolution: {
      targetLevel: "Formaliser un cadre personnel d'analyse d'opportunités techniques.",
      trainings: ["Lecture en cours : Thinking, Fast and Slow (Kahneman)"],
    },
    relatedProjectIds: ["refonte-atlas"],
  },
  {
    id: "collaboration",
    name: "Travail en équipe",
    category: "humaine",
    level: 85,
    shortDescription: "Faire grandir le collectif plus vite que soi-même.",
    definition:
      "Adapter sa posture entre contribution individuelle, mentorat et leadership selon le moment du projet. Le télétravail généralisé a rendu la collaboration intentionnelle indispensable.",
    anecdotes: [
      {
        title: "Onboarding accéléré d'un alternant",
        body: "Conception d'un parcours d'onboarding de 4 semaines avec pair-programming et missions progressives.",
        result: "Alternant autonome sur des features en production au bout de 6 semaines.",
        valueAdded: "J'ai documenté le parcours, désormais utilisé pour tous les nouveaux arrivants.",
        projectId: "outil-meridian",
      },
    ],
    selfCritique: {
      mastery: "Bonne maîtrise, je continue à travailler l'écoute active.",
      priority: "Compétence essentielle dès qu'on dépasse 3 personnes sur un projet.",
      advice: "Demander avant de proposer.",
    },
    evolution: {
      targetLevel: "Prendre un rôle de tech lead sur une équipe de 5-7 personnes.",
      trainings: ["Coaching individuel en cours sur le leadership technique"],
    },
    relatedProjectIds: ["outil-meridian", "plateforme-orion"],
  },
  {
    id: "responsabilite",
    name: "Responsabilité & éthique",
    category: "humaine",
    level: 80,
    shortDescription: "Mesurer l'impact réel des systèmes que je conçois.",
    definition:
      "Intégrer la dimension humaine, sociétale et environnementale dans les choix techniques. Avec l'AI Act européen et la sensibilité croissante à l'empreinte numérique, c'est une compétence en pleine émergence.",
    anecdotes: [
      {
        title: "Arbitrage RGPD sur la collecte de données",
        body: "Remise en question d'une feature de tracking poussée par le marketing, proposition d'une alternative respectueuse de la vie privée.",
        result: "Adoption d'une approche analytics anonyme, conforme RGPD by design.",
        valueAdded: "J'ai construit le dossier d'analyse d'impact qui a convaincu le DPO.",
      },
    ],
    selfCritique: {
      mastery: "Compétence en construction, je l'aborde de manière encore intuitive.",
      priority: "Compétence d'avenir : elle deviendra non négociable d'ici 5 ans.",
      advice: "Se demander qui paie le vrai coût d'une fonctionnalité.",
    },
    evolution: {
      targetLevel: "Devenir référent green IT et numérique responsable dans mon équipe.",
      trainings: ["MOOC INR — Numérique Responsable (en cours)"],
    },
    relatedProjectIds: ["plateforme-orion"],
  },
  {
    id: "apprentissage",
    name: "Apprentissage continu",
    category: "humaine",
    level: 90,
    shortDescription: "Apprendre vite, oublier ce qui n'a plus de sens.",
    definition:
      "Choisir ses apprentissages, structurer ses notes, restituer pour mieux retenir. La vitesse de renouvellement des outils impose une discipline d'apprentissage active plutôt que passive.",
    anecdotes: [
      {
        title: "Montée en compétence Rust en 3 mois",
        body: "Apprentissage de Rust en parallèle d'un projet personnel pour comprendre les concepts d'ownership.",
        result: "Première contribution open-source en Rust acceptée.",
        valueAdded: "J'ai partagé un retour d'expérience interne qui a inspiré 3 collègues à se lancer.",
      },
    ],
    selfCritique: {
      mastery: "Très bonne maîtrise — c'est sans doute ma compétence la plus naturelle.",
      priority: "Compétence racine : elle nourrit toutes les autres.",
      acquisitionSpeed: "Apprentissage rapide observé depuis l'école d'ingénieur.",
      advice: "Ne pas confondre consommer du contenu et apprendre.",
    },
    evolution: {
      targetLevel: "Construire une routine de veille hebdomadaire formalisée.",
      trainings: ["Méthode Zettelkasten en cours d'adoption"],
    },
    relatedProjectIds: ["outil-meridian"],
  },
];

export const projects: Project[] = [
  {
    id: "refonte-atlas",
    name: "Atlas — Refonte d'un système legacy",
    shortDescription: "Découpage progressif d'un monolithe en modules métier autonomes.",
    presentation:
      "Atlas désigne la refonte d'un système de gestion utilisé par plus de 200 utilisateurs internes quotidiennement, conçu il y a une dizaine d'années sous forme d'un monolithe PHP.",
    objectives:
      "Réduire le délai de mise en production, abaisser le taux de régression et permettre à 4 équipes de livrer en parallèle. Le risque principal : casser la production pendant la transition.",
    steps: [
      "Cartographie complète des dépendances entre modules",
      "Définition des contrats d'API et des frontières de domaine",
      "Mise en place d'une stratégie de tests rétroactive",
      "Découpage progressif module par module, avec strangler pattern",
      "Migration de l'authentification vers un service dédié",
    ],
    actors:
      "Équipe de 8 développeurs, 1 product owner, 1 architecte (moi), interactions régulières avec la DSI et les utilisateurs internes.",
    results:
      "Temps de déploiement divisé par 7, régressions divisées par 5, satisfaction interne en hausse mesurable. Pour moi : montée en gamme nette sur l'architecture.",
    aftermath:
      "Immédiat : adoption d'une cadence de release hebdomadaire. À distance : le framework de découpage a été réutilisé sur deux autres systèmes. Aujourd'hui : Atlas continue à évoluer sans ralentissement.",
    critique:
      "Avec le recul, j'aurais investi plus tôt dans l'observabilité. Nous avons découvert plusieurs problèmes en production qu'un meilleur monitoring aurait révélés en pré-production.",
    relatedSkillIds: [
      "architecture-logicielle",
      "qualite-tests",
      "securite-applicative",
      "communication",
      "esprit-critique",
    ],
  },
  {
    id: "plateforme-orion",
    name: "Orion — Plateforme SaaS de planification",
    shortDescription: "Conception et lancement d'un produit SaaS de bout en bout.",
    presentation:
      "Orion est une plateforme SaaS de gestion de planning pour PME de services, lancée en mode MVP puis itérée avec les premiers clients.",
    objectives:
      "Valider un product-market fit en moins de 6 mois avec un budget contraint. Enjeu : prouver la viabilité avant un second tour d'investissement. Risque : sur-investir sur des fonctionnalités sans demande.",
    steps: [
      "Atelier de cadrage produit avec les fondateurs",
      "Conception du schéma de données et des API",
      "Développement du front React et du back Node",
      "Mise en place de la CI/CD et des environnements de preview",
      "Onboarding manuel des 10 premiers clients",
    ],
    actors:
      "Équipe initiale de 2 personnes (moi en lead tech, un designer), interactions hebdomadaires avec les clients pilotes.",
    results:
      "30 clients signés en 3 mois, 0 incident majeur en production. Pour moi : confirmation de mon goût pour les phases d'amorçage produit.",
    aftermath:
      "Immédiat : levée de fonds réussie. À distance : équipe technique passée de 2 à 8 personnes. Aujourd'hui : produit utilisé par plus de 200 PME.",
    critique:
      "J'ai sous-estimé le coût du support utilisateur dans les premières semaines. À refaire, je prévoirais un canal de feedback dédié dès le jour 1.",
    relatedSkillIds: [
      "developpement-fullstack",
      "architecture-logicielle",
      "devops-cicd",
      "communication",
      "responsabilite",
      "collaboration",
    ],
  },
  {
    id: "outil-meridian",
    name: "Méridian — Outil interne d'observabilité",
    shortDescription: "Tableau de bord temps réel pour piloter la santé des services.",
    presentation:
      "Méridian est un outil interne qui agrège logs, métriques et alertes pour donner aux équipes une vue unifiée de la santé de leurs services.",
    objectives:
      "Réduire le temps moyen de détection des incidents (MTTD) et offrir un point d'entrée unique aux équipes de garde. Risque : ajouter un outil de plus sans qu'il soit adopté.",
    steps: [
      "Entretiens avec 6 équipes pour identifier les frictions actuelles",
      "Prototype rapide validé en interne en 2 semaines",
      "Industrialisation avec connecteurs OpenTelemetry",
      "Documentation et formation des premiers utilisateurs",
    ],
    actors:
      "Équipe de 3 personnes (moi + 1 développeur + 1 alternant), sponsors côté SRE et engineering management.",
    results:
      "MTTD passé de 12 min à 4 min sur les services équipés. Pour moi : première vraie expérience de produit interne avec utilisateurs exigeants.",
    aftermath:
      "Immédiat : adoption par 4 équipes. À distance : extension aux équipes data. Aujourd'hui : outil maintenu par une équipe dédiée que j'ai contribué à former.",
    critique:
      "J'ai trop attendu pour formaliser la gouvernance de l'outil, ce qui a créé une période floue de transition vers l'équipe pérenne.",
    relatedSkillIds: [
      "developpement-fullstack",
      "qualite-tests",
      "collaboration",
      "apprentissage",
    ],
  },
  {
    id: "audit-citadelle",
    name: "Citadelle — Audit de sécurité applicative",
    shortDescription: "Audit OWASP complet et plan de remédiation priorisé.",
    presentation:
      "Citadelle est une mission d'audit menée sur une application B2B critique, suivie de la priorisation et de la correction des vulnérabilités majeures.",
    objectives:
      "Identifier les vulnérabilités exploitables avant un audit externe imposé par un client grand compte. Enjeu : préserver un contrat à 7 chiffres.",
    steps: [
      "Revue de code orientée OWASP Top 10",
      "Tests d'intrusion manuels sur les surfaces critiques",
      "Rédaction d'un rapport priorisé par impact métier",
      "Accompagnement de l'équipe sur les corrections sprint après sprint",
    ],
    actors:
      "Moi en consultant interne, équipe produit de 5 personnes, RSSI en sponsor.",
    results:
      "12 vulnérabilités critiques corrigées, audit externe validé sans réserve majeure. Pour moi : approfondissement sur la sécurité offensive.",
    aftermath:
      "Immédiat : contrat client préservé. À distance : adoption d'une revue sécurité systématique sur les PR sensibles. Aujourd'hui : la culture sécurité de l'équipe est durablement renforcée.",
    critique:
      "Le rapport initial aurait gagné à être plus pédagogique. J'ai dû reformuler plusieurs sections pour qu'elles soient actionnables par l'équipe.",
    relatedSkillIds: ["securite-applicative", "esprit-critique", "communication"],
  },
  {
    id: "boreale",
    name: "Boréale — Plateforme open-source d'aide à la décision",
    shortDescription: "Contribution open-source sur un outil d'analyse de dépendances.",
    presentation:
      "Boréale est un projet open-source d'analyse de dépendances logicielles auquel j'ai contribué pour ajouter le support de nouveaux écosystèmes.",
    objectives:
      "Étendre la couverture de l'outil à un nouvel écosystème de paquets et apprendre Rust en profondeur. Enjeu personnel : sortir de ma zone de confort.",
    steps: [
      "Étude du codebase Rust existant",
      "Discussion du design avec les mainteneurs via issues GitHub",
      "Implémentation du parser pour le nouveau format",
      "Écriture des tests et de la documentation",
    ],
    actors:
      "Moi en contributeur externe, 2 mainteneurs en revue, communauté GitHub.",
    results:
      "Contribution mergée et utilisée en production par plusieurs organisations. Pour moi : montée en compétence rapide sur Rust et l'open-source.",
    aftermath:
      "Immédiat : reconnaissance dans la communauté Rust francophone. À distance : invitation à un meetup local. Aujourd'hui : je continue à contribuer ponctuellement.",
    critique:
      "J'ai sous-estimé la durée des revues. Apprendre à patienter et à itérer sur les retours fait partie de l'expérience open-source.",
    relatedSkillIds: ["apprentissage", "esprit-critique", "responsabilite"],
  },
];

export const experiences: Experience[] = [
  {
    id: "exp-tech-lead",
    kind: "entreprise",
    period: "Sept. 2024 — aujourd'hui",
    startYear: 2024,
    position: "Tech Lead",
    company: "Société Exemple",
    responsibility: "Tech Lead — 6 développeurs",
    missions:
      "Pilotage technique d'une plateforme SaaS, arbitrage des choix d'architecture, mentorat de l'équipe, dialogue avec le produit et la direction.",
    vision:
      "Une entreprise produit qui investit sérieusement dans la qualité technique sans tomber dans la sur-ingénierie.",
    relatedSkillIds: ["architecture-logicielle", "collaboration", "communication"],
    relatedProjectIds: ["plateforme-orion", "outil-meridian"],
  },
  {
    id: "exp-dev-senior",
    kind: "entreprise",
    period: "Sept. 2022 — Août 2024",
    startYear: 2022,
    position: "Développeur fullstack senior",
    company: "Studio Logiciel Démo",
    responsibility: "Développeur référent sur 2 projets clients",
    missions:
      "Conception et développement de produits SaaS pour des clients PME, conseil sur l'architecture, mentorat des juniors.",
    relatedSkillIds: ["developpement-fullstack", "qualite-tests"],
    relatedProjectIds: ["refonte-atlas", "audit-citadelle"],
  },
  {
    id: "exp-alternance",
    kind: "entreprise",
    period: "Sept. 2020 — Août 2022",
    startYear: 2020,
    position: "Développeur fullstack — alternance",
    company: "Startup Démo",
    status: "Alternant",
    responsibility: "Développeur produit",
    missions:
      "Premiers pas en équipe produit, contributions sur l'ensemble du stack, prise en charge progressive de fonctionnalités complètes.",
    relatedSkillIds: ["developpement-fullstack", "apprentissage"],
    relatedProjectIds: ["plateforme-orion"],
  },
  {
    id: "form-ingenieur",
    kind: "formation",
    period: "Sept. 2019 — Août 2022",
    startYear: 2019,
    diploma: "Diplôme d'ingénieur — Spécialité ingénierie du logiciel",
    school: "École d'ingénieur (exemple)",
    schoolUrl: "https://example.com",
    pedagogy:
      "Formation en alternance, équilibre entre fondamentaux théoriques (algorithmique, génie logiciel, systèmes) et projets concrets en équipe.",
  },
  {
    id: "form-prepa",
    kind: "formation",
    period: "Sept. 2017 — Août 2019",
    startYear: 2017,
    diploma: "Classe préparatoire — Filière MPSI / MP",
    school: "Lycée (exemple)",
    pedagogy:
      "Deux années intenses qui m'ont appris à apprendre vite, à structurer un raisonnement et à ne pas paniquer face à l'inconnu.",
  },
  {
    id: "cert-aws",
    kind: "certification",
    period: "2024",
    startYear: 2024,
    title: "Certification AWS Solutions Architect — Associate",
    date: "Juin 2024",
  },
  {
    id: "cert-rgpd",
    kind: "certification",
    period: "2023",
    startYear: 2023,
    title: "Formation CNIL — Protection des données personnelles",
    date: "Novembre 2023",
  },
];
