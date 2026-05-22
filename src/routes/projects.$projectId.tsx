import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { projects, skills } from "@/data/portfolio";

export const Route = createFileRoute("/projects/$projectId")({
  loader: ({ params }) => {
    const project = projects.find((p) => p.id === params.projectId);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.project.name ?? "Réalisation"} — Mathis Sebille` },
      { name: "description", content: loaderData?.project.shortDescription ?? "" },
      { property: "og:title", content: `${loaderData?.project.name ?? "Réalisation"} — Mathis Sebille` },
      { property: "og:description", content: loaderData?.project.shortDescription ?? "" },
    ],
  }),
  component: ProjectDetail,
  notFoundComponent: () => (
    <div className="mx-auto max-w-3xl px-6 py-20 text-center">
      <h1 className="font-display text-3xl font-semibold">Réalisation introuvable</h1>
      <Link to="/projects" className="mt-6 inline-block text-teal-soft hover:underline">
        Retour aux réalisations
      </Link>
    </div>
  ),
});

function ProjectDetail() {
  const { project } = Route.useLoaderData();
  const related = skills.filter((s) => project.relatedSkillIds.includes(s.id));
  const otherProjects = projects.filter((p) => p.id !== project.id);

  return (
    <article className="mx-auto max-w-3xl px-6 py-20">
      <Link
        to="/projects"
        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8"
      >
        <ArrowLeft className="h-4 w-4" /> Toutes les réalisations
      </Link>

      <p className="text-xs uppercase tracking-[0.2em] text-teal-soft mb-3">Réalisation</p>
      <h1 className="font-display text-4xl md:text-5xl font-semibold leading-tight">
        {project.name}
      </h1>
      <p className="mt-5 text-lg text-muted-foreground">{project.shortDescription}</p>

      {/* Sous-menu vers autres réalisations */}
      <nav className="mt-8 -mx-1 overflow-x-auto">
        <div className="flex gap-2 px-1 pb-2">
          {otherProjects.map((p) => (
            <Link
              key={p.id}
              to="/projects/$projectId"
              params={{ projectId: p.id }}
              className="shrink-0 text-xs rounded-full border border-border/50 bg-card/40 px-3 py-1.5 hover:bg-card/70 transition text-muted-foreground hover:text-foreground"
            >
              {p.name}
            </Link>
          ))}
        </div>
      </nav>

      <Section title="Présentation">
        <p>{project.presentation}</p>
      </Section>

      <Section title="Objectifs, contexte, enjeu, risques">
        <p>{project.objectives}</p>
      </Section>

      <Section title="Les étapes — ce que j'ai fait">
        <ul>
          {project.steps.map((s, i) => (<li key={i}>{s}</li>))}
        </ul>
      </Section>

      <Section title="Les acteurs — les interactions">
        <p>{project.actors}</p>
      </Section>

      <Section title="Les résultats">
        <p>{project.results}</p>
      </Section>

      <Section title="Les lendemains du projet">
        <p>{project.aftermath}</p>
      </Section>

      <Section title="Mon regard critique">
        <p>{project.critique}</p>
      </Section>

      {related.length > 0 && (
        <Section title="Compétences rattachées">
          <div className="grid gap-3 md:grid-cols-2 not-prose">
            {related.map((s) => (
              <Link
                key={s.id}
                to="/skills/$skillId"
                params={{ skillId: s.id }}
                className="group rounded-lg border border-border/50 bg-card/40 p-4 hover:bg-card/70 transition flex items-center justify-between"
              >
                <div>
                  <p className="font-display font-medium group-hover:text-teal-soft transition">
                    {s.name}
                  </p>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    {s.category === "technique" ? "Technique" : "Humaine"}
                  </p>
                </div>
                <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-teal-soft transition" />
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
