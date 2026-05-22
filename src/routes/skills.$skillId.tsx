import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { skills, projects } from "@/data/portfolio";

export const Route = createFileRoute("/skills/$skillId")({
  loader: ({ params }) => {
    const skill = skills.find((s) => s.id === params.skillId);
    if (!skill) throw notFound();
    return { skill };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.skill.name ?? "Compétence"} — Mathis Sebille` },
      { name: "description", content: loaderData?.skill.shortDescription ?? "" },
      { property: "og:title", content: `${loaderData?.skill.name ?? "Compétence"} — Mathis Sebille` },
      { property: "og:description", content: loaderData?.skill.shortDescription ?? "" },
    ],
  }),
  component: SkillDetail,
  notFoundComponent: () => (
    <div className="mx-auto max-w-3xl px-6 py-20 text-center">
      <h1 className="font-display text-3xl font-semibold">Compétence introuvable</h1>
      <Link to="/skills" className="mt-6 inline-block text-teal-soft hover:underline">
        Retour aux compétences
      </Link>
    </div>
  ),
});

function SkillDetail() {
  const { skill } = Route.useLoaderData();
  const related = projects.filter((p) => skill.relatedProjectIds.includes(p.id));
  const otherSkills = skills.filter((s) => s.id !== skill.id);

  return (
    <article className="mx-auto max-w-3xl px-6 py-20">
      <Link
        to="/skills"
        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8"
      >
        <ArrowLeft className="h-4 w-4" /> Toutes les compétences
      </Link>

      <p className="text-xs uppercase tracking-[0.2em] text-teal-soft mb-3">
        {skill.category === "technique" ? "Compétence technique" : "Compétence humaine"} · niveau {skill.level}
      </p>
      <h1 className="font-display text-4xl md:text-5xl font-semibold leading-tight">
        {skill.name}
      </h1>
      <p className="mt-5 text-lg text-muted-foreground">{skill.shortDescription}</p>

      {/* Sous-menu vers autres compétences */}
      <nav className="mt-8 -mx-1 overflow-x-auto">
        <div className="flex gap-2 px-1 pb-2">
          {otherSkills.map((s) => (
            <Link
              key={s.id}
              to="/skills/$skillId"
              params={{ skillId: s.id }}
              className="shrink-0 text-xs rounded-full border border-border/50 bg-card/40 px-3 py-1.5 hover:bg-card/70 transition text-muted-foreground hover:text-foreground"
            >
              {s.name}
            </Link>
          ))}
        </div>
      </nav>

      <Section title="Ma définition">
        <p>{skill.definition}</p>
      </Section>

      <Section title="Mes éléments de preuve">
        <div className="space-y-8">
          {skill.anecdotes.map((a, i) => {
            const linked = a.projectId ? projects.find((p) => p.id === a.projectId) : null;
            return (
              <div key={i} className="border-l-2 border-teal/40 pl-5">
                <h3 className="font-display font-semibold text-lg text-foreground">{a.title}</h3>
                <p className="mt-2">{a.body}</p>
                <p className="mt-3">
                  <strong className="text-foreground">Résultat&nbsp;:</strong> {a.result}
                </p>
                <p className="mt-1">
                  <strong className="text-foreground">Ma valeur ajoutée&nbsp;:</strong> {a.valueAdded}
                </p>
                {linked && (
                  <Link
                    to="/projects/$projectId"
                    params={{ projectId: linked.id }}
                    className="mt-3 inline-flex items-center gap-1 text-sm text-teal-soft hover:underline"
                  >
                    Voir la réalisation : {linked.name} <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                )}
              </div>
            );
          })}
        </div>
      </Section>

      <Section title="Mon autocritique">
        <ul>
          <li><strong className="text-foreground">Maîtrise&nbsp;:</strong> {skill.selfCritique.mastery}</li>
          <li><strong className="text-foreground">Priorité dans mon profil&nbsp;:</strong> {skill.selfCritique.priority}</li>
          {skill.selfCritique.acquisitionSpeed && (
            <li><strong className="text-foreground">Vitesse d'acquisition&nbsp;:</strong> {skill.selfCritique.acquisitionSpeed}</li>
          )}
          <li><strong className="text-foreground">Mon recul / conseil&nbsp;:</strong> {skill.selfCritique.advice}</li>
        </ul>
      </Section>

      <Section title="Mon évolution">
        <p><strong className="text-foreground">Cap visé&nbsp;:</strong> {skill.evolution.targetLevel}</p>
        <p className="mt-3"><strong className="text-foreground">Formations en cours ou à venir&nbsp;:</strong></p>
        <ul>
          {skill.evolution.trainings.map((t, i) => (<li key={i}>{t}</li>))}
        </ul>
      </Section>

      {related.length > 0 && (
        <Section title="Réalisations rattachées">
          <div className="grid gap-3 md:grid-cols-2 not-prose">
            {related.map((p) => (
              <Link
                key={p.id}
                to="/projects/$projectId"
                params={{ projectId: p.id }}
                className="group rounded-lg border border-border/50 bg-card/40 p-4 hover:bg-card/70 transition"
              >
                <p className="font-display font-medium group-hover:text-teal-soft transition">{p.name}</p>
                <p className="text-xs text-muted-foreground mt-1 line-clamp-2">{p.shortDescription}</p>
              </Link>
            ))}
          </div>
        </Section>
      )}
    </article>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-12">
      <h2 className="font-display text-2xl font-semibold mb-4">{title}</h2>
      <div className="prose prose-invert max-w-none text-muted-foreground leading-relaxed [&>p]:mt-3 [&>ul]:mt-3 [&>ul]:space-y-2 [&>ul]:list-disc [&>ul]:pl-6">
        {children}
      </div>
    </section>
  );
}
