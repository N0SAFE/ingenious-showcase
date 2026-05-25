import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Briefcase, GraduationCap, Award, X, ArrowRight } from "lucide-react";
import { experiences, projects, skills, type Experience } from "@/data/portfolio";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const Route = createFileRoute("/journey")({
  head: () => ({
    meta: [
      { title: "Parcours — Mathis Sebille" },
      {
        name: "description",
        content: "Mon parcours professionnel et académique, présenté de manière antichronologique.",
      },
      { property: "og:title", content: "Parcours — Mathis Sebille" },
      { property: "og:description", content: "Expériences, formations et certifications." },
    ],
  }),
  component: JourneyPage,
});

const iconFor = {
  entreprise: Briefcase,
  formation: GraduationCap,
  certification: Award,
} as const;

function JourneyPage() {
  const [openId, setOpenId] = useState<string | null>(null);
  const sorted = [...experiences].sort((a, b) => b.startYear - a.startYear);
  const open = experiences.find((e) => e.id === openId) ?? null;

  return (
    <div className="mx-auto max-w-5xl px-6 py-20">
      <p className="text-xs uppercase tracking-[0.2em] text-teal-soft mb-4">Parcours</p>
      <h1 className="font-display text-4xl md:text-5xl font-semibold leading-tight max-w-3xl">
        Une frise antichronologique — du présent vers les fondations.
      </h1>

      <div className="mt-16 relative">
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border/60" aria-hidden />

        <ol className="space-y-10">
          {sorted.map((exp, i) => {
            const Icon = iconFor[exp.kind];
            const side = i % 2 === 0 ? "md:pr-[52%] md:text-right" : "md:pl-[52%]";
            return (
              <li key={exp.id} className="relative">
                <button
                  onClick={() => setOpenId(exp.id)}
                  className={`group w-full text-left ${side}`}
                >
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 top-2 h-3 w-3 rounded-full bg-teal shadow-glow" />
                  <div className="pl-12 md:pl-0">
                    <div className="inline-flex items-center gap-2 rounded-xl border border-border/50 bg-card/40 backdrop-blur p-5 hover:bg-card/70 transition shadow-card max-w-md">
                      <Icon className="h-5 w-5 text-teal shrink-0" />
                      <TimelineLogo experience={exp} />
                      <div>
                        <p className="text-xs text-muted-foreground">{exp.period}</p>
                        <p className="font-display font-semibold mt-0.5 group-hover:text-teal-soft transition">
                          {exp.position ?? exp.diploma ?? exp.title}
                        </p>
                        {(exp.company || exp.school) && (
                          <p className="text-sm text-muted-foreground mt-0.5">
                            {exp.company ?? exp.school}
                          </p>
                        )}
                        {exp.location && (
                          <p className="text-xs text-muted-foreground mt-0.5">{exp.location}</p>
                        )}
                      </div>
                    </div>
                  </div>
                </button>
              </li>
            );
          })}
        </ol>
      </div>

      {open && <ExperienceModal experience={open} onClose={() => setOpenId(null)} />}
    </div>
  );
}

function ExperienceModal({ experience: e, onClose }: { experience: Experience; onClose: () => void }) {
  const linkedSkills = skills.filter((s) => e.relatedSkillIds?.includes(s.id));
  const linkedProjects = projects.filter((p) => e.relatedProjectIds?.includes(p.id));

  return (
    <div
      className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="relative max-w-2xl w-full max-h-[85vh] overflow-y-auto rounded-2xl border border-border/50 bg-card shadow-card p-8"
        onClick={(ev) => ev.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-md hover:bg-secondary/60"
          aria-label="Fermer"
        >
          <X className="h-4 w-4" />
        </button>

        <p className="text-xs uppercase tracking-[0.2em] text-teal-soft">{e.period}</p>
        <div className="mt-3 flex items-center gap-4">
          <TimelineLogo experience={e} size="lg" />
          <div>
            <h2 className="font-display text-2xl font-semibold">
              {e.position ?? e.diploma ?? e.title}
            </h2>
            {(e.company || e.school) && (
              <p className="text-muted-foreground mt-1">{e.company ?? e.school}</p>
            )}
            {e.location && <p className="text-xs text-muted-foreground mt-1">{e.location}</p>}
          </div>
        </div>

        {e.kind === "entreprise" && (
          <div className="mt-6 space-y-4 text-sm">
            {e.responsibility && (
              <p><strong className="text-foreground">Responsabilité&nbsp;:</strong> {e.responsibility}</p>
            )}
            {e.status && (
              <p><strong className="text-foreground">Statut&nbsp;:</strong> {e.status}</p>
            )}
            {e.missions && (
              <div>
                <strong className="text-foreground">Missions&nbsp;:</strong>
                <p className="mt-1 text-muted-foreground">{e.missions}</p>
              </div>
            )}
            {e.vision && (
              <div>
                <strong className="text-foreground">Ma vision&nbsp;:</strong>
                <p className="mt-1 text-muted-foreground">{e.vision}</p>
              </div>
            )}
          </div>
        )}

        {e.kind === "formation" && (
          <div className="mt-6 space-y-4 text-sm">
            {e.pedagogy && (
              <div>
                <strong className="text-foreground">Pédagogie&nbsp;:</strong>
                <p className="mt-1 text-muted-foreground">{e.pedagogy}</p>
              </div>
            )}
            {e.schoolUrl && (
              <a
                href={e.schoolUrl}
                target="_blank"
                rel="noreferrer"
                className="text-teal-soft hover:underline inline-flex items-center gap-1"
              >
                Site de l'établissement <ArrowRight className="h-3.5 w-3.5" />
              </a>
            )}
          </div>
        )}

        {e.kind === "certification" && e.date && (
          <p className="mt-4 text-sm text-muted-foreground">Obtenue en {e.date}.</p>
        )}

        {linkedSkills.length > 0 && (
          <div className="mt-8">
            <h3 className="text-sm font-display font-semibold mb-3">Compétences associées</h3>
            <div className="flex flex-wrap gap-2">
              {linkedSkills.map((s) => (
                <Link
                  key={s.id}
                  to="/skills/$skillId"
                  params={{ skillId: s.id }}
                  onClick={onClose}
                  className="text-xs rounded-full border border-border/50 bg-secondary/40 px-3 py-1.5 hover:bg-secondary/70 transition"
                >
                  {s.name}
                </Link>
              ))}
            </div>
          </div>
        )}

        {linkedProjects.length > 0 && (
          <div className="mt-6">
            <h3 className="text-sm font-display font-semibold mb-3">Réalisations associées</h3>
            <div className="flex flex-wrap gap-2">
              {linkedProjects.map((p) => (
                <Link
                  key={p.id}
                  to="/projects/$projectId"
                  params={{ projectId: p.id }}
                  onClick={onClose}
                  className="text-xs rounded-full border border-border/50 bg-secondary/40 px-3 py-1.5 hover:bg-secondary/70 transition"
                >
                  {p.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function TimelineLogo({
  experience,
  size = "md",
}: {
  experience: Experience;
  size?: "md" | "lg";
}) {
  const src = experience.companyLogo ?? experience.schoolLogo;
  const label = experience.company ?? experience.school ?? experience.title ?? experience.position ?? "Expérience";
  const className = size === "lg" ? "h-14 w-14 rounded-2xl" : "h-10 w-10 rounded-xl";

  return (
    <Avatar className={`shrink-0 border border-border/50 bg-background ${className}`}>
      <AvatarImage src={src} alt={label} />
      <AvatarFallback className="bg-secondary/60 text-xs font-display font-semibold">
        {label.slice(0, 2).toUpperCase()}
      </AvatarFallback>
    </Avatar>
  );
}
