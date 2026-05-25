import { createFileRoute } from "@tanstack/react-router";
import { profile } from "@/data/portfolio";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: `À propos — ${profile.firstName} ${profile.lastName}` },
      {
        name: "description",
        content: `Présentation détaillée de ${profile.firstName} ${profile.lastName}, expert en ingénierie du logiciel : valeurs, projet professionnel, qualités humaines, centres d'intérêt.`,
      },
      { property: "og:title", content: `À propos — ${profile.firstName} ${profile.lastName}` },
      { property: "og:description", content: profile.tagline },
    ],
  }),
  component: About,
});

function About() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-20">
      <p className="text-xs uppercase tracking-[0.2em] text-teal-soft mb-4">Présentation</p>
      <h1 className="font-display text-4xl md:text-5xl font-semibold leading-tight">
        Développeur web — curieux, autonome, orienté DX.
      </h1>
      <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
        Je suis {profile.firstName} {profile.lastName}, {profile.title.toLowerCase()}. J'aime
        construire des API, des bibliothèques et des webapps qui simplifient la vie des autres
        développeurs, tout en gardant une approche simple, lisible et durable.
      </p>

      <Section title="Mes valeurs">
        <p>
          Je veux rester un ingénieur <strong className="text-foreground">curieux</strong>,
          <strong className="text-foreground"> autonome</strong> et <strong className="text-foreground">orienté équipe</strong>.
          Le code que j'écris doit servir des personnes réelles : des utilisateurs, des collègues,
          et parfois même mon futur moi quand il faudra revenir dessus six mois plus tard.
        </p>
        <p>
          Dans cet ordre, mes trois valeurs principales sont&nbsp;:
        </p>
        <ul>
          <li>
            <strong className="text-foreground">Curiosité</strong> — aller chercher la réponse moi-même, tester, comparer et comprendre.
          </li>
          <li>
            <strong className="text-foreground">Team spirit</strong> — avancer avec les autres, partager le contexte et construire ensemble.
          </li>
          <li>
            <strong className="text-foreground">Autonomie</strong> — savoir avancer sans attendre qu'on me tienne la main.
          </li>
        </ul>
      </Section>

      <Section title="Mon projet professionnel & personnel">
        <p>
          À court et moyen terme, je veux faire grandir mon projet de plateforme de déploiement
          self-hosted jusqu'à en faire quelque chose de vraiment utile, puis continuer à travailler
          sur des produits SaaS et des outils pour développeurs.
        </p>
        <p>
          Sur le plan professionnel, j'aimerais garder un rôle proche du produit et de la technique,
          là où je peux encore apprendre vite tout en rendant les choses plus simples pour l'équipe.
        </p>
        <p>
          Sur le plan personnel, mon vrai objectif est de continuer à apprendre par moi-même,
          de rester sportif, de voyager davantage et de garder un bon équilibre dans le temps.
        </p>
      </Section>

      <Section title="Mes principales qualités humaines">
        <ul>
          <li>
            <strong className="text-foreground">Esprit d'analyse</strong> — je décompose les problèmes avant de proposer une solution.
          </li>
          <li>
            <strong className="text-foreground">Écoute active</strong> — je pose les bonnes questions pour comprendre le besoin réel.
          </li>
          <li>
            <strong className="text-foreground">Adaptabilité</strong> — je change de contexte sans perdre le fil.
          </li>
          <li>
            <strong className="text-foreground">Empathie</strong> — j'essaie de comprendre la perspective des autres avant de répondre.
          </li>
          <li>
            <strong className="text-foreground">Initiative</strong> — si je vois une amélioration utile, j'essaie de la pousser plutôt que d'attendre.
          </li>
        </ul>
      </Section>

      <Section title="Mes principaux centres d'intérêt">
        <p>
          En dehors du clavier, je nourris ma pratique avec :
        </p>
        <ul>
          <li>
            et <em>The Design of Everyday Things</em>.
          </li>
          <li>
            <strong className="text-foreground">La randonnée</strong> — pour le silence, le temps
            long, et la déconnexion réelle.
          </li>
          <li>
            <strong className="text-foreground">L'open-source</strong> — je contribue ponctuellement
            sur des projets qui me servent au quotidien.
          </li>
          <li>
            <strong className="text-foreground">La photographie argentique</strong> — pour
            réapprendre la patience et le cadrage avant le déclic.
          </li>
        </ul>
      </Section>
    </article>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-14">
      <h2 className="font-display text-2xl md:text-3xl font-semibold mb-5">{title}</h2>
      <div className="prose prose-invert max-w-none text-muted-foreground leading-relaxed [&>p]:mt-4 [&>ul]:mt-4 [&>ul]:space-y-2 [&>ul]:list-disc [&>ul]:pl-6">
        {children}
      </div>
    </section>
  );
}
