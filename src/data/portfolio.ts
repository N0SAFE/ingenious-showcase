export type SkillCategory = "technique" | "humaine";

export interface Skill {
  id: string;
  name: string;
  category: SkillCategory;
  level: number;
  shortDescription: string;
  definition: string;
  anecdotes: { title: string; body: string; result: string; valueAdded: string; projectId?: string }[];
  selfCritique: { mastery: string; priority: string; acquisitionSpeed?: string; advice: string };
  useFor?: string;
  avoidFor?: string;
  evolution: { targetLevel: string; trainings: string[] };
  relatedProjectIds: string[];
}

export interface Project {
  id: string;
  name: string;
  shortDescription: string;
  presentation: string;
  objectives: string;
  steps: string[];
  results: string;
  aftermath: string;
  critique: string;
  relatedSkillIds: string[];
  cover?: string;
}

export type ExperienceKind = "entreprise" | "formation" | "certification";

export interface Experience {
  id: string;
  kind: ExperienceKind;
  period: string;
  startYear: number;
  location?: string;
  position?: string;
  company?: string;
  companyLogo?: string;
  responsibility?: string;
  status?: string;
  missions?: string;
  vision?: string;
  diploma?: string;
  school?: string;
  schoolUrl?: string;
  schoolLogo?: string;
  pedagogy?: string;
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
  title: "Développeur web",
  tagline:
    "Développeur web de 23 ans, je construis des API, des outils et des interfaces qui simplifient la vie des autres développeurs. J'aime remettre de l'ordre dans les bases de code, rendre les stacks plus lisibles et faire avancer les projets sans les alourdir.",
  email: "sebillemathisps@gmail.com",
  phone: "07 80 04 20 46",
  location: "Therdonne, France",
  linkedin: "https://www.linkedin.com/in/mathis-sebille-68b791396/",
  github: "https://github.com/N0SAFE",
  initials: "MS",
};

const baseSkills: Skill[] = [
  {
    id: "typescript-javascript",
    name: "TypeScript / JavaScript",
    category: "technique",
    level: 90,
    shortDescription: "Le socle de presque tous mes projets web.",
    definition: "Je m'appuie sur TypeScript et JavaScript pour garder des applications lisibles, typées et faciles à faire évoluer.",
    anecdotes: [
      { title: "Langage commun sur mes projets", body: "J'utilise TypeScript partout où c'est possible pour garder un langage commun entre mes applications et mes scripts.", result: "Les refactorings sont plus sûrs et les échanges entre packages plus prévisibles.", valueAdded: "Je limite les écarts entre les couches techniques.", projectId: "template-monorepo" },
      { title: "Modernisation chez Affluences", body: "J'ai utilisé TypeScript pour moderniser des zones touchées par les features sans casser l'existant.", result: "Le code est resté plus cohérent pendant les migrations successives.", valueAdded: "J'ai pu avancer vite sans perdre la lisibilité du projet.", projectId: "admin-continuous-refactor" },
    ],
    selfCritique: { mastery: "Très bonne maîtrise sur les usages applicatifs.", priority: "Compétence centrale.", acquisitionSpeed: "J'ai progressé vite en la pratiquant tous les jours.", advice: "Être strict sans écrire du code compliqué pour le plaisir." },
    useFor: "Structurer des applications web, des contrats partagés et des scripts de transformation.",
    avoidFor: "Écrire du code 'smart' juste pour impressionner ou contourner un modèle plus simple.",
    evolution: { targetLevel: "Mieux tirer parti des types avancés.", trainings: ["Approfondir les patterns TypeScript dans les monorepos"] },
    relatedProjectIds: ["template-monorepo", "angularjs-angular18-migration", "admin-analysis-page", "admin-continuous-refactor", "self-hosted-deployment-platform"],
  },
  {
    id: "angular-development",
    name: "Angular",
    category: "technique",
    level: 84,
    shortDescription: "Construire des interfaces solides sur des applis métier.",
    definition: "J'utilise Angular surtout dans des contextes métier où la structure compte autant que la vitesse d'exécution.",
    anecdotes: [
      { title: "Migration AngularJS → Angular 18", body: "J'ai repris un monolithe ancien chez Affluences avec une logique de migration progressive.", result: "J'ai pu travailler sur une base moderne sans repartir de zéro.", valueAdded: "J'ai appris à faire évoluer une app Angular sans casser les usages existants.", projectId: "angularjs-angular18-migration" },
      { title: "Écrans métier", body: "J'ai aussi utilisé Angular pour des pages ciblées comme les écrans d'analyse.", result: "Les interfaces sont restées plus lisibles et plus simples à maintenir.", valueAdded: "Je garde mieux le cap entre UX, structure du code et contraintes métier.", projectId: "admin-analysis-page" },
    ],
    selfCritique: { mastery: "Bonne maîtrise sur les usages concrets.", priority: "Importante dans mon parcours.", advice: "Angular devient vraiment utile quand on garde une architecture simple." },
    useFor: "Des interfaces métiers avec beaucoup d'états, de règles et de composants partagés.",
    avoidFor: "Les mini-pages jetables ou les POCs ultra courts où le cadre devient trop lourd.",
    evolution: { targetLevel: "Aller plus loin sur les patterns d'architecture.", trainings: ["Approfondir les bonnes pratiques Angular"] },
    relatedProjectIds: ["angularjs-angular18-migration", "admin-analysis-page"],
  },
  {
    id: "nest-development",
    name: "NestJS",
    category: "technique",
    level: 82,
    shortDescription: "Structurer des backends propres et lisibles.",
    definition: "J'aime NestJS pour sa façon de cadrer les backends sans me forcer à écrire un code trop bavard.",
    anecdotes: [
      { title: "BFF pour la migration Affluences", body: "J'ai utilisé NestJS comme backend for frontend pour centraliser la logique serveur.", result: "Le front s'est appuyé sur une couche plus claire.", valueAdded: "J'ai simplifié l'intégration sans multiplier les points d'entrée.", projectId: "angularjs-angular18-migration" },
      { title: "Base API du template perso", body: "Mon template de monorepo repose aussi sur une API NestJS prête à repartir.", result: "Je peux démarrer plus vite avec une architecture déjà cadrée.", valueAdded: "Je réutilise une structure qui a déjà fait ses preuves chez moi.", projectId: "template-monorepo" },
    ],
    selfCritique: { mastery: "Bonne maîtrise pour les API métier.", priority: "Utile partout où il faut structurer un backend solide.", advice: "Un backend NestJS reste meilleur quand il sert le besoin avant le cadre." },
    useFor: "Structurer des APIs, des BFF et des services lisibles.",
    avoidFor: "Les petits scripts ou les tâches ponctuelles où un cadre complet serait excessif.",
    evolution: { targetLevel: "Écrire des backends encore plus simples à tester.", trainings: ["Approfondir les patterns NestJS"] },
    relatedProjectIds: ["template-monorepo", "angularjs-angular18-migration"],
  },
  {
    id: "docker-compose",
    name: "Docker & Compose",
    category: "technique",
    level: 79,
    shortDescription: "Rendre les environnements reproductibles et simples à lancer.",
    definition: "J'utilise Docker quand je veux éviter les installations manuelles qui finissent par diverger.",
    anecdotes: [
      { title: "Template de démarrage", body: "Le template démarre avec Docker et Compose pour lancer le front, l'API et les services utiles.", result: "Le projet est beaucoup plus simple à reprendre sur une nouvelle machine.", valueAdded: "J'ai évité au projet de dépendre de trucs installés à la main.", projectId: "template-monorepo" },
      { title: "Plateforme de déploiement", body: "Le projet self-hosted m'oblige à penser l'orchestration des services proprement.", result: "Je garde une vision plus claire de ce qui tourne.", valueAdded: "Docker m'aide à garder un projet plus portable.", projectId: "self-hosted-deployment-platform" },
    ],
    selfCritique: { mastery: "Bonne maîtrise pratique.", priority: "Très utile pour garder des projets reproductibles.", advice: "Docker doit simplifier l'accès au projet, pas le compliquer." },
    useFor: "Reproduire un environnement de dev ou d'intégration sans friction.",
    avoidFor: "Emballer artificiellement des composants simples qui peuvent tourner nativement.",
    evolution: { targetLevel: "Rendre mes setups encore plus rapides à lancer.", trainings: ["Approfondir l'orchestration locale"] },
    relatedProjectIds: ["template-monorepo", "self-hosted-deployment-platform"],
  },
  {
    id: "api-integration-development",
    name: "Intégration d'API",
    category: "technique",
    level: 88,
    shortDescription: "Faire dialoguer proprement plusieurs systèmes.",
    definition: "J'aime brancher des systèmes entre eux sans transformer l'intégration en usine à gaz.",
    anecdotes: [
      { title: "Affluences", body: "J'ai travaillé sur des intégrations d'API pour alimenter des pages d'analyse et des interfaces métier.", result: "Les données sont arrivées au bon endroit avec des flux plus clairs.", valueAdded: "J'ai gardé les contrats lisibles.", projectId: "admin-analysis-page" },
      { title: "Sitel Group", body: "J'ai intégré Facebook, Twitter et Twilio dans un contexte d'alternance.", result: "Le produit a pu centraliser plusieurs canaux.", valueAdded: "J'ai appris à composer avec des APIs différentes.", projectId: "angularjs-angular18-migration" },
    ],
    selfCritique: { mastery: "Bonne maîtrise quand l'API est proprement contractée.", priority: "Très visible dans mon profil.", advice: "Documenter les erreurs avant qu'elles ne deviennent invisibles." },
    useFor: "Brancher proprement un front, un backend et des services externes.",
    avoidFor: "Ajouter une couche d'intégration quand le besoin est encore flou.",
    evolution: { targetLevel: "Rendre mes intégrations plus résilientes.", trainings: ["Renforcer ma pratique des contrats typés"] },
    relatedProjectIds: ["template-monorepo", "angularjs-angular18-migration", "admin-analysis-page", "admin-continuous-refactor", "self-hosted-deployment-platform"],
  },
  {
    id: "dx-improvement",
    name: "Expérience développeur",
    category: "technique",
    level: 82,
    shortDescription: "Rendre le travail technique plus fluide pour les développeurs.",
    definition: "L'expérience développeur détermine si une équipe avance vite sans se fatiguer.",
    anecdotes: [
      { title: "Template repo", body: "J'ai construit un monorepo qui rassemble Docker, auth, ORPC, packages partagés et conventions communes.", result: "Je repars d'une base solide pour mes futurs projets.", valueAdded: "J'ai transformé des choix dispersés en une base cohérente.", projectId: "template-monorepo" },
      { title: "Refactoring continu", body: "Sur l'administration Affluences, je rends souvent le code plus simple à reprendre.", result: "Les zones touchées sortent souvent plus propres qu'à l'arrivée.", valueAdded: "J'essaie de laisser une base plus saine que celle que j'ai trouvée.", projectId: "admin-continuous-refactor" },
    ],
    selfCritique: { mastery: "Très bonne intuition sur ce qui ralentit un développeur.", priority: "Sujet central dans ma manière de travailler.", advice: "Le bon DX est invisible." },
    useFor: "Réduire les frictions de démarrage, de build et de maintenance.",
    avoidFor: "Multiplier les outils quand un simple script ou une convention suffit.",
    evolution: { targetLevel: "Construire des bases prêtes à démarrer vite.", trainings: ["Approfondir les patterns de monorepo"] },
    relatedProjectIds: ["template-monorepo", "admin-continuous-refactor", "self-hosted-deployment-platform"],
  },
  {
    id: "reusable-tooling",
    name: "Outils partagés",
    category: "technique",
    level: 81,
    shortDescription: "Extraire ce qui revient souvent pour le rendre partageable.",
    definition: "Quand un morceau de code revient souvent, j'aime le sortir en package ou en outil réutilisable.",
    anecdotes: [
      { title: "Packages partagés", body: "J'ai organisé des packages communs pour ESLint, Prettier, TypeScript, Vitest, l'UI et les utilitaires.", result: "Les futurs projets partent avec une base déjà pensée pour être cohérente.", valueAdded: "J'ai empaqueté de la répétition en outils réutilisables.", projectId: "template-monorepo" },
      { title: "Approche package-first", body: "Je pense souvent en composants et helpers réutilisables.", result: "Les chantiers suivants démarrent plus vite.", valueAdded: "Je laisse derrière moi des briques utiles.", projectId: "self-hosted-deployment-platform" },
    ],
    selfCritique: { mastery: "Bonne maîtrise quand le besoin est récurrent.", priority: "Soutient mon goût du DX et du monorepo.", advice: "Ne pas extraire trop tôt." },
    useFor: "Rendre réutilisable ce qui revient souvent dans plusieurs projets.",
    avoidFor: "Extraire un package avant d'avoir vraiment un motif répété.",
    evolution: { targetLevel: "Créer des briques plus simples à adopter.", trainings: ["Approfondir la structuration de packages internes"] },
    relatedProjectIds: ["template-monorepo", "self-hosted-deployment-platform", "admin-continuous-refactor"],
  },
  {
    id: "database-management",
    name: "Conception de données",
    category: "technique",
    level: 76,
    shortDescription: "Penser les données avant d'écrire la moindre requête.",
    definition: "J'aime structurer les données de façon simple, cohérente et durable.",
    anecdotes: [
      { title: "Données d'analyse", body: "J'ai travaillé sur des écrans capables de lire des métriques d'affluence et de les comparer.", result: "Les utilisateurs métiers lisent mieux les tendances.", valueAdded: "J'ai transformé des données techniques en information exploitable.", projectId: "admin-analysis-page" },
      { title: "Base du template", body: "Dans mon template, je prépare la place de la base, des migrations et de la logique de données dès le début.", result: "Je n'ai pas à recoller la couche data après coup.", valueAdded: "Je gagne du temps tout en gardant une structure saine.", projectId: "template-monorepo" },
    ],
    selfCritique: { mastery: "Maîtrise correcte avec attention à la lisibilité.", priority: "Importante pour les produits durables.", advice: "Un schéma simple vaut mieux qu'un modèle trop ambitieux." },
    useFor: "Modéliser une donnée métier claire et éviter les requêtes bancales.",
    avoidFor: "Sur-modéliser un besoin encore instable.",
    evolution: { targetLevel: "Aller vers des schémas plus robustes.", trainings: ["Approfondir la modélisation des données"] },
    relatedProjectIds: ["template-monorepo", "admin-analysis-page", "self-hosted-deployment-platform"],
  },
  {
    id: "automation-scripting",
    name: "Automatisation",
    category: "technique",
    level: 74,
    shortDescription: "Réduire les gestes répétitifs et fiabiliser les routines.",
    definition: "J'aime automatiser ce qui peut l'être : lancement de projets, scripts de build, orchestration Docker.",
    anecdotes: [
      { title: "Orchestration Docker", body: "J'ai structuré le lancement du projet pour que les services démarrent ensemble.", result: "Le projet est plus simple à reprendre.", valueAdded: "J'ai rendu le démarrage plus fiable.", projectId: "template-monorepo" },
      { title: "Déploiement self-hosted", body: "Le projet m'oblige à penser des routines de déploiement plus propres.", result: "Je vais vers une orchestration plus claire.", valueAdded: "Je transforme des procédures répétitives en routines plus sûres.", projectId: "self-hosted-deployment-platform" },
    ],
    selfCritique: { mastery: "Bonne maîtrise pratique.", priority: "Aide à gagner du temps et à éviter les erreurs.", advice: "Automatiser seulement ce qui est stable." },
    useFor: "Outiller les tâches répétitives et les démarrages de projet.",
    avoidFor: "Automatiser un processus qui change toutes les deux semaines.",
    evolution: { targetLevel: "Créer des automatisations plus fiables.", trainings: ["Approfondir les outils de script"] },
    relatedProjectIds: ["template-monorepo", "self-hosted-deployment-platform"],
  },
  {
    id: "react-nextjs",
    name: "React / Next.js",
    category: "technique",
    level: 78,
    shortDescription: "Construire des interfaces et des parcours cohérents côté web.",
    definition: "Je travaille avec React et Next.js pour construire des pages lisibles et faciles à faire évoluer.",
    anecdotes: [
      { title: "Showcase personnel", body: "Le portfolio lui-même est construit comme un vrai produit web.", result: "J'obtiens une vitrine qui me sert aussi de terrain d'expérimentation.", valueAdded: "Je montre mes projets dans une interface que je maîtrise de bout en bout.", projectId: "template-monorepo" },
    ],
    selfCritique: { mastery: "Bonne maîtrise sur les patterns de composants.", priority: "Très utile pour mes projets web.", advice: "Garder les composants simples." },
    useFor: "Construire des écrans produits et des parcours lisibles.",
    avoidFor: "Passer du temps sur du polish graphique quand le fond n'est pas prêt.",
    evolution: { targetLevel: "Aller plus loin sur la structure et les performances.", trainings: ["Renforcer ma pratique des patterns Next.js"] },
    relatedProjectIds: ["template-monorepo", "self-hosted-deployment-platform"],
  },
  {
    id: "git-github",
    name: "Git / GitHub",
    category: "technique",
    level: 87,
    shortDescription: "Garder un historique lisible et travailler proprement à plusieurs.",
    definition: "Git me sert au quotidien pour organiser mes branches, relire mes changements et garder une trace claire.",
    anecdotes: [
      { title: "Travail en continu sur Affluences", body: "Quand je fais du refactoring, je m'appuie sur des commits propres et des PR faciles à relire.", result: "Les changements sont plus simples à suivre.", valueAdded: "Je garde l'historique compréhensible.", projectId: "admin-continuous-refactor" },
    ],
    selfCritique: { mastery: "Très bonne maîtrise au quotidien.", priority: "Fondamental.", advice: "Des commits courts et lisibles valent mieux qu'un historique opaque." },
    useFor: "Tracer le travail, relire proprement, collaborer et revenir en arrière si besoin.",
    avoidFor: "Faire des commits énormes qui mélangent tout.",
    evolution: { targetLevel: "Mieux utiliser l'historique pour raconter le travail.", trainings: ["Approfondir les workflows de revue"] },
    relatedProjectIds: ["template-monorepo", "admin-continuous-refactor"],
  },
  {
    id: "clean-code",
    name: "Code propre",
    category: "technique",
    level: 83,
    shortDescription: "Écrire du code qu'on a envie de relire.",
    definition: "Le code propre, c'est surtout du code qu'on peut relire sans fatigue.",
    anecdotes: [
      { title: "Refactoring continu", body: "Sur l'admin Affluences, je simplifie le code au fil des modifications.", result: "Les zones touchées restent plus respirables.", valueAdded: "J'améliore la base au lieu de seulement ajouter une feature.", projectId: "admin-continuous-refactor" },
    ],
    selfCritique: { mastery: "Bonne sensibilité au lisible et au simple.", priority: "Très importante pour mes projets long terme.", advice: "Le clean code est une forme de respect pour le lecteur." },
    useFor: "Améliorer les zones que je touche déjà et garder le code respirable.",
    avoidFor: "Réécrire pour réécrire sans valeur ajoutée.",
    evolution: { targetLevel: "Mieux arbitrer ce qui mérite d'être simplifié tout de suite.", trainings: ["Continuer à pratiquer le refactoring"] },
    relatedProjectIds: ["admin-continuous-refactor", "template-monorepo"],
  },
  {
    id: "ui-ux",
    name: "UI / UX",
    category: "technique",
    level: 72,
    shortDescription: "Rendre l'interface compréhensible et agréable à parcourir.",
    definition: "Je fais attention aux hiérarchies visuelles, aux espaces et à la manière dont on parcourt une page.",
    anecdotes: [
      { title: "Page d'analyse", body: "L'écran d'analyse Affluences m'a demandé de simplifier une quantité de données pour qu'elle reste lisible.", result: "Les métriques sont plus faciles à comprendre rapidement.", valueAdded: "J'ai gardé l'interface utile sans la surcharger.", projectId: "admin-analysis-page" },
    ],
    selfCritique: { mastery: "Maîtrise fonctionnelle, avec une vraie attention au rendu.", priority: "Importante pour les produits que je montre ou utilise.", advice: "Une bonne UI fait moins d'effet qu'une mauvaise, et c'est plutôt bon signe." },
    useFor: "Hiérarchiser l'information et guider l'œil sur une page.",
    avoidFor: "Chercher à faire joli quand la lisibilité passe avant tout.",
    evolution: { targetLevel: "Mieux traduire les intentions produit en interface claire.", trainings: ["Poursuivre la veille sur les patterns d'interface"] },
    relatedProjectIds: ["admin-analysis-page", "template-monorepo"],
  },
  {
    id: "adaptability-flexibility",
    name: "Adaptabilité",
    category: "humaine",
    level: 86,
    shortDescription: "S'ajuster vite sans perdre le cap.",
    definition: "Je change facilement de contexte, de stack ou de contrainte quand le projet le demande.",
    anecdotes: [
      { title: "Migration AngularJS", body: "J'ai travaillé sur une migration qui demandait d'accepter l'existant tout en poussant vers une base plus moderne.", result: "Le projet a pu évoluer sans repartir de zéro.", valueAdded: "J'ai gardé un équilibre entre legacy et évolution progressive.", projectId: "angularjs-angular18-migration" },
    ],
    selfCritique: { mastery: "Bonne maîtrise : je m'adapte vite aux projets et aux contraintes.", priority: "Très utile dans les équipes qui bougent beaucoup.", advice: "L'adaptabilité doit rester guidée par une direction claire." },
    useFor: "Changer de contexte sans perdre le fil du projet.",
    avoidFor: "Accepter n'importe quelle direction au nom de la flexibilité.",
    evolution: { targetLevel: "Être encore plus à l'aise dans des contextes hybrides.", trainings: ["Continuer à travailler les migrations progressives"] },
    relatedProjectIds: ["angularjs-angular18-migration", "admin-continuous-refactor", "template-monorepo"],
  },
  {
    id: "communication-listening",
    name: "Communication",
    category: "humaine",
    level: 83,
    shortDescription: "Faire circuler l'information sans perdre le sens.",
    definition: "J'essaie de comprendre avant de répondre et de traduire le besoin sans le surcharger.",
    anecdotes: [
      { title: "Page d'analyse pour les équipes métier", body: "La refonte d'une page d'analyse m'a demandé d'écouter les besoins et de les traduire en interface claire.", result: "Les utilisateurs ont gagné en lisibilité.", valueAdded: "J'ai transformé une demande métier en interface compréhensible.", projectId: "admin-analysis-page" },
    ],
    selfCritique: { mastery: "Bonne maîtrise, surtout quand il faut clarifier un sujet technique.", priority: "Essentielle dans les projets collectifs.", advice: "Parler simplement n'enlève rien à la précision." },
    useFor: "Faire circuler le contexte et réduire les malentendus.",
    avoidFor: "Rester trop abstrait quand un exemple concret aiderait.",
    evolution: { targetLevel: "Mieux vulgariser mes choix techniques.", trainings: ["Travailler des restitutions plus courtes"] },
    relatedProjectIds: ["admin-analysis-page", "angularjs-angular18-migration", "admin-continuous-refactor"],
  },
  {
    id: "problem-solving",
    name: "Résolution de problèmes",
    category: "humaine",
    level: 87,
    shortDescription: "Chercher la cause réelle avant de corriger le symptôme.",
    definition: "J'aime comprendre ce qui bloque réellement puis choisir la solution la plus simple.",
    anecdotes: [
      { title: "Refactorings progressifs", body: "Sur le code ancien, je distingue ce qui peut être modernisé tout de suite de ce qui doit attendre.", result: "Le projet avance sans gros arrêt.", valueAdded: "Je choisis les bons points d'entrée.", projectId: "admin-continuous-refactor" },
    ],
    selfCritique: { mastery: "Bonne maîtrise, avec un vrai goût pour le diagnostic technique.", priority: "Structurante dans mes projets les plus complexes.", advice: "Une bonne solution est celle qui tient dans le temps." },
    useFor: "Trouver la cause racine plutôt que traiter seulement le symptôme.",
    avoidFor: "Multiplier les correctifs rapides sans comprendre le problème.",
    evolution: { targetLevel: "Renforcer ma capacité à arbitrer vite et proprement.", trainings: ["Continuer à pratiquer les migrations longues"] },
    relatedProjectIds: ["admin-continuous-refactor", "self-hosted-deployment-platform", "angularjs-angular18-migration"],
  },
  {
    id: "curiosity-learning",
    name: "Curiosité",
    category: "humaine",
    level: 92,
    shortDescription: "Apprendre en autonomie et aller chercher l'information soi-même.",
    definition: "J'aime comprendre par moi-même, croiser plusieurs sources et tester les choses directement.",
    anecdotes: [
      { title: "Auto-formation continue", body: "Je passe du temps à lire, tester et recouper des informations pour progresser.", result: "Je monte vite en compétence quand un nouveau sujet arrive.", valueAdded: "Je n'attends pas d'être formé de l'extérieur.", projectId: "template-monorepo" },
    ],
    selfCritique: { mastery: "C'est probablement ma compétence la plus naturelle.", priority: "Elle alimente toutes les autres.", acquisitionSpeed: "J'apprends vite quand le sujet me passionne.", advice: "Apprendre seul fonctionne mieux quand on prend aussi le temps de consolider." },
    useFor: "Explorer un sujet, lire, tester et consolider ce que je découvre.",
    avoidFor: "Chercher le raccourci quand je n'ai pas encore compris le sujet.",
    evolution: { targetLevel: "Mieux organiser ma veille et mes apprentissages.", trainings: ["Structurer ma recherche personnelle"] },
    relatedProjectIds: ["template-monorepo", "self-hosted-deployment-platform", "angularjs-angular18-migration"],
  },
];

export const skills: Skill[] = baseSkills;

export const projects: Project[] = [
  {
    id: "template-monorepo",
    name: "Template de monorepo",
    shortDescription: "Une base TurboRepo pour lancer vite des projets web, API et SaaS.",
    presentation:
      "Ce monorepo est né d'un constat simple : je perdais trop de temps à reconstruire les mêmes fondations pour chaque nouveau projet. J'ai donc rassemblé dans une seule base cohérente tout ce dont j'ai besoin pour démarrer rapidement : une API NestJS, un front Next.js, des packages partagés pour la config, l'UI et les utilitaires, ainsi qu'une auth centralisée via ORPC. Le tout est orchestré avec Docker pour garantir un environnement reproductible d'un simple `docker-compose up`.",
    objectives:
      "L'objectif était double : gagner du temps sur le démarrage des futurs projets et imposer une architecture claire dès le départ. Je voulais éviter la dispersion technique et créer un socle suffisamment générique pour servir de point de départ à des side projects variés, tout en restant assez léger pour ne pas devenir une usine à gaz.",
    steps: [
      "Mise en place de TurboRepo et structuration des packages (config, UI, utils)",
      "Création de l'API NestJS avec auth ORPC et contrats typés",
      "Configuration du front Next.js avec Tailwind et composants partagés",
      "Mise en place de Docker et Docker Compose pour l'orchestration locale",
      "Documentation des conventions et scripts de bootstrap",
    ],
    results:
      "Le template est maintenant opérationnel et m'a déjà servi de base pour plusieurs projets. Le temps de setup est passé de plusieurs jours à quelques heures. La cohérence entre les packages rend les évolutions plus prévisibles et les refactorings moins risqués.",
    aftermath:
      "Le projet continue d'évoluer au fil de mes besoins. J'ajoute des briques au fur et à mesure que je rencontre de nouveaux patterns récurrents. C'est devenu un terrain d'expérimentation pour tester des outils et des architectures avant de les utiliser en production.",
    critique:
      "La base reste encore trop implicite : il faudrait mieux documenter les choix d'architecture et les patterns à suivre. Certains packages pourraient aussi être extraits en véritables librairies npm internes. Le principal risque est de trop complexifier la base au fil des ajouts.",
    relatedSkillIds: [
      "typescript-javascript",
      "dx-improvement",
      "reusable-tooling",
      "api-integration-development",
      "automation-scripting",
      "database-management",
    ],
    cover: "/project-covers/template-monorepo.svg",
  },
  {
    id: "angularjs-angular18-migration",
    name: "Migration AngularJS vers Angular 18",
    shortDescription: "Reprise d'un gros monolithe vers une base Angular plus moderne.",
    presentation:
      "Ce projet de migration concerne une application métier Affluences écrite en AngularJS, devenue difficile à maintenir et à faire évoluer. Plutôt qu'une réécriture complète, j'ai opté pour une approche progressive : construire un BFF NestJS pour centraliser la logique serveur, migrer zone par zone vers Angular 18, et maintenir les deux mondes cohabitants pendant la transition. L'objectif était de moderniser sans casser le produit existant.",
    objectives:
      "Sortir d'une base AngularJS vieillissante tout en garantissant la continuité du service. Il fallait permettre à l'équipe de continuer à livrer des features pendant la migration, tout en posant les fondations d'une architecture plus maintenable sur le long terme.",
    steps: [
      "Analyse de l'existant et identification des zones prioritaires",
      "Construction du BFF NestJS pour centraliser les appels API",
      "Mise en place d'Angular 18 en parallèle d'AngularJS",
      "Migration progressive des composants et services",
      "Refonte de l'authentification et harmonisation des règles de code",
    ],
    results:
      "La migration a permis de sortir d'AngularJS sans arrêt de production. Le code est maintenant plus cohérent, mieux typé et plus simple à faire évoluer. L'équipe a gagné en confiance pour toucher des zones auparavant considérées comme 'critiques'.",
    aftermath:
      "Ce chantier a posé des réflexes de migration progressive et de clean code dans l'équipe. Il a aussi démontré qu'on peut moderniser une base legacy sans tout casser, à condition d'avancer par petits pas et de garder une vision claire.",
    critique:
      "Une migration de cette taille demande beaucoup de patience et accepte des compromis temporaires. Certaines zones de transition auraient pu être simplifiées plus tôt. La cohabitation AngularJS/Angular a duré plus longtemps que prévu.",
    relatedSkillIds: [
      "typescript-javascript",
      "api-integration-development",
      "adaptability-flexibility",
      "problem-solving",
      "communication-listening",
    ],
    cover: "/project-covers/angularjs-angular18-migration.svg",
  },
  {
    id: "admin-analysis-page",
    name: "Page d'analyse Affluences",
    shortDescription: "Refonte d'une page d'analyse pour comparer des périodes de fréquentation.",
    presentation:
      "Cette page d'administration permet aux équipes métier de visualiser et comparer des données d'affluence entre différentes périodes. L'ancienne version était dense, peu lisible et rendait les comparaisons laborieuses. J'ai repensé l'interface pour hiérarchiser l'information, simplifier les comparaisons et rendre les tendances immédiatement lisibles, tout en conservant l'ensemble des données exploitables.",
    objectives:
      "Rendre l'analyse plus moderne, plus lisible et plus utile pour les équipes métier. L'enjeu était de transformer des données brutes en information exploitable sans surcharger l'interface ni perdre en précision.",
    steps: [
      "Audit de l'existant et collecte des retours utilisateurs",
      "Refonte de la hiérarchie visuelle et des composants",
      "Mise en place de la comparaison entre périodes",
      "Optimisation des performances et des requêtes API",
      "Tests utilisateurs et ajustements UX",
    ],
    results:
      "La page est maintenant utilisée quotidiennement par les équipes métier. Les comparaisons de périodes se font en quelques clics et les tendances sont immédiatement visibles. Les retours utilisateurs sont très positifs sur la lisibilité.",
    aftermath:
      "Cette refonte a ouvert la voie à d'autres améliorations de l'admin. Elle a aussi démontré l'importance de co-concevoir avec les utilisateurs finaux plutôt que de deviner leurs besoins.",
    critique:
      "Une page d'analyse doit rester sobre et aller à l'essentiel. J'aurais pu pousser plus loin l'accessibilité et les raccourcis clavier pour les utilisateurs power users.",
    relatedSkillIds: [
      "api-integration-development",
      "database-management",
      "communication-listening",
      "problem-solving",
      "dx-improvement",
    ],
    cover: "/project-covers/admin-analysis-page.svg",
  },
  {
    id: "admin-continuous-refactor",
    name: "Refactoring continu Affluences",
    shortDescription: "Modernisation progressive d'une base de code déjà existante.",
    presentation:
      "Ce n'est pas un projet avec une fin nette, mais une pratique continue : chaque fois que je touche une zone de code, j'essaie de la laisser plus propre qu'avant. Sur l'administration Affluences, cela se traduit par des modernisations progressives, des migrations vers les signaux Angular, un alignement ESLint et un nettoyage au fil des features. L'idée est d'améliorer la base sans bloquer le delivery.",
    objectives:
      "Garder une base ancienne compatible avec les nouvelles pratiques sans accumuler de dette technique. Il s'agit de trouver un équilibre entre livrer des features et maintenir la qualité du code sur le long terme.",
    steps: [
      "Identification des zones prioritaires à chaque intervention",
      "Migration progressive vers les signaux Angular",
      "Alignement des règles ESLint et Prettier",
      "Nettoyage et simplification au fil des modifications",
      "Documentation des patterns et conventions",
    ],
    results:
      "Le code est plus lisible, plus cohérent et plus simple à maintenir. Les nouvelles features s'intègrent plus naturellement et les bugs liés à la dette technique ont diminué.",
    aftermath:
      "Le refactoring continu demande de la discipline et une vision long terme. C'est devenu un réflexe d'équipe : on n'accepte plus d'ajouter du code 'sale' sous prétexte que la zone est déjà moche.",
    critique:
      "Si on relâche l'effort, la dette revient vite. Il faut aussi savoir accepter qu'une base vivante ne sera jamais parfaite et éviter le perfectionnisme qui bloque le delivery.",
    relatedSkillIds: [
      "dx-improvement",
      "typescript-javascript",
      "adaptability-flexibility",
      "problem-solving",
      "reusable-tooling",
    ],
    cover: "/project-covers/admin-continuous-refactor.svg",
  },
  {
    id: "self-hosted-deployment-platform",
    name: "Plateforme de déploiement self-hosted",
    shortDescription: "Un projet en cours pour contrôler une flotte de serveurs et automatiser les déploiements.",
    presentation:
      "Ce projet personnel vise à créer une plateforme autonome capable de gérer plusieurs serveurs et plusieurs sources de code. Construit sur une base Next.js, il permet de connecter des dépôts GitHub, de gérer des environnements multiples et d'automatiser les déploiements. C'est un terrain d'exploration pour apprendre l'infra, l'orchestration et les patterns de déploiement moderne.",
    objectives:
      "Créer une plateforme autonome qui me permet de déployer et gérer mes projets sans dépendre de services externes. L'objectif est aussi d'apprendre les contraintes réelles de l'infrastructure et de l'orchestration de serveurs.",
    steps: [
      "Définition de l'architecture et des contraintes",
      "Mise en place de la base Next.js pour le contrôle",
      "Intégration des webhooks GitHub et gestion des sources",
      "Développement des premiers scripts d'orchestration",
      "Mise en place des preview deployments",
    ],
    results:
      "Le projet est encore en exploration mais pose déjà le cadre de ce que je veux construire. Les premiers scripts d'orchestration fonctionnent et l'architecture commence à prendre forme.",
    aftermath:
      "Ce projet me fait progresser sur des sujets que je ne touche pas en entreprise : infra, orchestration, sécurité des déploiements. C'est un complément précieux à mon expérience professionnelle.",
    critique:
      "Le scope peut vite grossir et transformer le projet en usine à gaz. Il faut garder une vraie discipline et se concentrer sur l'essentiel. Le risque est de passer plus de temps à architecturer qu'à livrer.",
    relatedSkillIds: [
      "automation-scripting",
      "reusable-tooling",
      "api-integration-development",
      "database-management",
      "curiosity-learning",
      "dx-improvement",
    ],
    cover: "/project-covers/self-hosted-deployment-platform.svg",
  },
];

export const experiences: Experience[] = [
  { id: "exp-affluences", kind: "entreprise", period: "Nov. 2024 — aujourd'hui", startYear: 2024, location: "Paris Bastille", position: "Développeur full-stack", company: "Affluences", companyLogo: "/logos/affluences.svg", responsibility: "Alternant au sein de l'équipe produit", status: "Alternant", missions: "Développement d'applications web pour l'analyse d'affluence, intégration d'API, tests et amélioration continue.", vision: "Construire des outils utiles aux équipes et aux clients, avec une attention forte portée à la lisibilité.", relatedSkillIds: ["typescript-javascript", "api-integration-development", "dx-improvement", "problem-solving", "communication-listening", "database-management"], relatedProjectIds: ["admin-analysis-page", "admin-continuous-refactor", "self-hosted-deployment-platform"] },
  { id: "exp-sitel-dev", kind: "entreprise", period: "2022 — 2023", startYear: 2022, location: "Paris", position: "Développeur full-stack", company: "Sitel Group", companyLogo: "/logos/sitel-group.svg", responsibility: "Intégration d'API et contribution produit", missions: "Intégration d'API Facebook, Twitter et Twilio, développement, tests et collaboration.", relatedSkillIds: ["api-integration-development", "communication-listening", "adaptability-flexibility", "curiosity-learning", "problem-solving"], relatedProjectIds: ["angularjs-angular18-migration"] },
  { id: "exp-vas-stage", kind: "entreprise", period: "2021", startYear: 2021, location: "Cergy", position: "Développeur full-stack (stage)", company: "VAS", companyLogo: "/logos/vas.svg", responsibility: "Stage orienté produit et intégration", missions: "Projet SaaS, API REST, bases Python et gestion de projet.", relatedSkillIds: ["api-integration-development", "problem-solving", "curiosity-learning", "communication-listening"], relatedProjectIds: ["template-monorepo"] },
  { id: "exp-sitel-tech", kind: "entreprise", period: "2020", startYear: 2020, location: "Paris", position: "Technicien informatique", company: "Sitel Group", companyLogo: "/logos/sitel-group.svg", responsibility: "Support et formation aux outils", missions: "Formation aux outils et aux processus, support informatique et diagnostic.", relatedSkillIds: ["communication-listening", "adaptability-flexibility", "problem-solving", "curiosity-learning"], relatedProjectIds: ["template-monorepo"] },
  { id: "form-iscod", kind: "formation", period: "2024 — 2026", startYear: 2024, diploma: "Master Expert en Ingénierie Logicielle", school: "ISCOD", schoolUrl: "https://www.iscod.fr/", schoolLogo: "/logos/iscod.svg", pedagogy: "Alternance orientée mise en pratique, autonomie et montée en compétence continue." },
  { id: "form-licence", kind: "formation", period: "2022 — 2023", startYear: 2022, diploma: "Licence Informatique – option web", school: "Lycée Saint Vincent — Senlis", schoolLogo: "/logos/lycee-saint-vincent.svg", pedagogy: "Formation qui m'a permis d'affiner mes bases web." },
  { id: "form-bts", kind: "formation", period: "2020 — 2022", startYear: 2020, diploma: "BTS SIO", school: "Lycée Saint Vincent — Senlis", schoolLogo: "/logos/lycee-saint-vincent.svg", pedagogy: "Base technique solide et premières habitudes de travail en informatique." },
  { id: "form-bac", kind: "formation", period: "2017 — 2020", startYear: 2017, diploma: "BAC STI2D", school: "Lycée Jean Monnet — Crépy-en-Valois", schoolLogo: "/logos/lycee-jean-monnet.svg", pedagogy: "Une formation qui m'a donné le goût des systèmes techniques." },
];