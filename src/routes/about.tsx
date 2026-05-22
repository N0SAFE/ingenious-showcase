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
        Ingénieur logiciel — humain, conscient, responsable.
      </h1>
      <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
        Je suis {profile.firstName} {profile.lastName}, {profile.title.toLowerCase()}. Voici, sans
        détour, comment je pense mon métier et ce que je cherche à construire.
      </p>

      <Section title="Mes valeurs">
        <p>
          Je crois que <strong className="text-foreground">l'ingénierie logicielle est d'abord un
          acte humain</strong>. Le code que j'écris influe sur des personnes — utilisateurs, collègues,
          décideurs — et c'est cette responsabilité, plus que la performance brute, qui guide mes
          choix.
        </p>
        <p>
          Trois valeurs orientent mon travail au quotidien&nbsp;:
        </p>
        <ul>
          <li>
            <strong className="text-foreground">La conscience</strong> — comprendre l'impact des
            systèmes que je conçois sur les utilisateurs, les équipes et l'environnement.
          </li>
          <li>
            <strong className="text-foreground">La responsabilité</strong> — assumer pleinement les
            décisions techniques, y compris celles que je ne ferais pas seul.
          </li>
          <li>
            <strong className="text-foreground">La lisibilité</strong> — préférer la solution qui se
            comprend en cinq minutes à celle qui en impose en cinq lignes.
          </li>
        </ul>
      </Section>

      <Section title="Mon projet professionnel & personnel">
        <p>
          À moyen terme, je veux assumer un rôle de <strong className="text-foreground">tech lead /
          architecte</strong> sur des produits à fort impact, dans des équipes qui investissent
          sérieusement dans la qualité technique sans pour autant tomber dans la sur-ingénierie.
        </p>
        <p>
          À plus long terme, je souhaite contribuer à la formation des prochains ingénieurs — par
          du mentorat, par des écrits, et peut-être en enseignant. Je crois que la transmission
          fait partie intégrante du métier.
        </p>
        <p>
          Sur le plan personnel, je cherche un équilibre durable entre exigence professionnelle,
          temps long pour les projets de fond, et qualité de vie au quotidien.
        </p>
      </Section>

      <Section title="Mes principales qualités humaines">
        <ul>
          <li>
            <strong className="text-foreground">Esprit d'analyse</strong> — je décompose les
            problèmes complexes avant de proposer.
          </li>
          <li>
            <strong className="text-foreground">Écoute active</strong> — je pose les questions qui
            font émerger le vrai besoin, pas seulement la demande exprimée.
          </li>
          <li>
            <strong className="text-foreground">Constance</strong> — je tiens le cap sur les projets
            longs, sans m'épuiser sur des sprints non soutenables.
          </li>
          <li>
            <strong className="text-foreground">Pédagogie</strong> — j'aime expliquer, vulgariser,
            mettre à niveau quand c'est utile.
          </li>
          <li>
            <strong className="text-foreground">Humilité technique</strong> — je sais reconnaître
            ce que je ne maîtrise pas et m'entourer en conséquence.
          </li>
        </ul>
      </Section>

      <Section title="Mes principaux centres d'intérêt">
        <p>
          En dehors du clavier, je nourris ma pratique avec :
        </p>
        <ul>
          <li>
            <strong className="text-foreground">La lecture</strong> — sciences cognitives, design,
            philosophie de la technique. Mes derniers coups de cœur : <em>Thinking, Fast and Slow</em>{" "}
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
