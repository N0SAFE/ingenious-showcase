import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { projects } from "@/data/portfolio";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Réalisations — Mathis Sebille" },
      {
        name: "description",
        content: "Mes principales réalisations en ingénierie du logiciel, détaillées étape par étape.",
      },
      { property: "og:title", content: "Réalisations — Mathis Sebille" },
      {
        property: "og:description",
        content: "Mes principales réalisations en ingénierie du logiciel.",
      },
    ],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      <p className="text-xs uppercase tracking-[0.2em] text-teal-soft mb-4">Réalisations</p>
      <h1 className="font-display text-4xl md:text-5xl font-semibold leading-tight max-w-3xl">
        Cinq projets qui racontent ma manière de faire.
      </h1>
      <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
        Chaque réalisation est présentée par un nom évocateur, indépendant du contexte
        d'entreprise, et détaillée dans un article dédié.
      </p>

      <div className="mt-14 grid gap-5 md:grid-cols-2">
        {projects.map((p, i) => (
          <Link
            key={p.id}
            to="/projects/$projectId"
            params={{ projectId: p.id }}
            className="group rounded-xl border border-border/50 bg-card/40 backdrop-blur p-6 hover:bg-card/70 transition shadow-card"
          >
            <div className="flex items-start justify-between">
              <span className="text-xs text-muted-foreground tabular-nums">
                {String(i + 1).padStart(2, "0")}
              </span>
              <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-teal-soft transition" />
            </div>
            <h2 className="mt-6 font-display text-2xl font-semibold group-hover:text-teal-soft transition">
              {p.name}
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">{p.shortDescription}</p>
            <div className="mt-5 flex flex-wrap gap-1.5">
              {p.relatedSkillIds.slice(0, 3).map((sid) => (
                <span
                  key={sid}
                  className="text-[10px] uppercase tracking-wider rounded-full bg-secondary/60 px-2 py-1 text-muted-foreground"
                >
                  {sid.replace(/-/g, " ")}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
