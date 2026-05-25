import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { profile, skills, projects, experiences } from "@/data/portfolio";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `${profile.firstName} ${profile.lastName} — ${profile.title}` },
      { name: "description", content: profile.tagline },
    ],
  }),
  component: Home,
});

const pad = (n: number) => String(n).padStart(2, "0");

const marqueeTags = [
  "Architecture logicielle",
  "Code lisible",
  "Tests & CI/CD",
  "Revue de code",
  "Design système",
  "Performance",
  "Sécurité",
  "Pédagogie",
  "TypeScript",
  "Systèmes distribués",
];

function Home() {
  const featured = projects.slice(0, 4);
  const currentExp = [...experiences]
    .filter((e) => e.kind === "entreprise")
    .sort((a, b) => b.startYear - a.startYear)[0];

  const stats = [
    { label: "Réalisations détaillées", value: pad(projects.length) },
    { label: "Compétences cartographiées", value: pad(skills.length) },
    { label: "Années d'expérience", value: "05+" },
  ];

  return (
    <>
      {/* ============ HERO ============ */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden">
        <div className="absolute -top-[10%] -left-[5%] w-[500px] h-[500px] bg-teal/15 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute -bottom-[10%] -right-[5%] w-[600px] h-[600px] bg-deep/40 rounded-full blur-[140px] pointer-events-none" />

        <div className="relative mx-auto max-w-7xl w-full px-6 md:px-10 pt-16 pb-24 grid grid-cols-12 gap-8 items-end">
          <div className="col-span-12 lg:col-span-8">
            <div className="flex items-center gap-4 mb-8">
              <span className="h-px w-12 bg-teal/60 block line-grow" />
              <span
                className="font-display text-teal-soft tracking-[0.3em] text-[10px] uppercase font-bold reveal"
                style={{ animationDelay: "0.1s" }}
              >
                Expert ingénierie du logiciel
              </span>
            </div>

            <h1
              className="font-display text-[15vw] sm:text-7xl md:text-8xl lg:text-[7.5rem] font-bold leading-[0.9] tracking-[-0.04em] reveal"
              style={{ animationDelay: "0.2s" }}
            >
              {profile.firstName}{" "}
              <span className="text-gradient">{profile.lastName}</span>,
              <br />
              <span className="font-light italic text-muted-foreground">
                ingénieur logiciel
              </span>
            </h1>

            <p
              className="mt-10 font-sans text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed reveal"
              style={{ animationDelay: "0.35s" }}
            >
              {profile.tagline}
            </p>

            <div
              className="mt-10 flex flex-wrap gap-6 items-center reveal"
              style={{ animationDelay: "0.5s" }}
            >
              <Button asChild variant="editorial" size="xl">
                <Link to="/projects">
                  <span className="relative z-10">Voir mes réalisations</span>
                  <ArrowRight className="absolute right-5 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                </Link>
              </Button>
              <Button asChild variant="editorial-link" size="sm" className="h-auto px-0 text-sm">
                <Link to="/about">Qui je suis →</Link>
              </Button>
            </div>
          </div>

          {/* Right — editorial stats */}
          <div className="col-span-12 lg:col-span-4 flex flex-col justify-end lg:pb-4">
            <div className="space-y-10 border-l border-border/40 pl-8">
              <Reveal delay={600}>
                <Badge
                  variant="outline"
                  className="border-teal/30 bg-teal/10 text-teal-soft/90 rounded-full gap-2 px-3 py-1 text-[10px] uppercase tracking-[0.3em] font-display"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-teal blink" />
                  Disponible — 2026
                </Badge>
              </Reveal>
              {stats.map((s, i) => (
                <Reveal key={s.label} delay={700 + i * 120}>
                  <div className="group">
                    <div className="font-display text-5xl font-bold tabular-nums text-foreground group-hover:text-teal-soft transition-colors">
                      {s.value}
                    </div>
                    <div className="font-display text-[10px] uppercase tracking-[0.25em] text-muted-foreground mt-2">
                      {s.label}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>

        <div
          className="pointer-events-none select-none absolute -bottom-12 md:-bottom-20 -right-6 md:-right-12 font-display font-bold text-[20vw] leading-none tracking-tighter text-foreground/[0.025] reveal-fade"
          style={{ animationDelay: "1s" }}
          aria-hidden
        >
          {profile.lastName.toUpperCase()}
        </div>
      </section>

      {/* ============ MARQUEE ============ */}
      <section className="border-y border-border/40 bg-card/20 overflow-hidden py-6">
        <div className="flex marquee-track whitespace-nowrap gap-6">
          {Array.from({ length: 2 }).map((_, k) => (
            <div key={k} className="flex items-center gap-6 shrink-0 pr-6">
              {marqueeTags.map((tag) => (
                <Badge
                  key={`${k}-${tag}`}
                  variant="outline"
                  className="border-border/40 bg-transparent text-muted-foreground/80 font-display font-medium uppercase tracking-[0.2em] text-xs px-4 py-1.5 rounded-full"
                >
                  {tag}
                </Badge>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* ============ INTRO ============ */}
      <section className="mx-auto max-w-7xl px-6 md:px-10 py-28 grid grid-cols-12 gap-8">
        <Reveal className="col-span-12 lg:col-span-4">
          <p className="text-[10px] font-display uppercase tracking-[0.3em] text-teal-soft mb-4">
            Aujourd'hui
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-semibold leading-tight">
            En poste, en mouvement,
            <br />
            <span className="italic font-light text-muted-foreground">
              et toujours curieux.
            </span>
          </h2>
        </Reveal>
        <Reveal className="col-span-12 lg:col-span-7 lg:col-start-6" delay={150}>
          <p className="text-lg text-foreground/90 leading-relaxed">
            {currentExp ? (
              <>
                Actuellement{" "}
                <span className="text-teal-soft font-medium">{currentExp.position}</span>{" "}
                chez{" "}
                <span className="text-teal-soft font-medium">{currentExp.company}</span>.{" "}
                {currentExp.missions ?? ""}
              </>
            ) : (
              "Ingénieur logiciel passionné par la conception de produits robustes, lisibles et durables."
            )}
          </p>
          <Button
            asChild
            variant="link"
            className="mt-6 px-0 font-display uppercase tracking-[0.2em] text-foreground hover:text-teal-soft hover:no-underline"
          >
            <Link to="/about">
              Lire l'article complet
              <ArrowUpRight />
            </Link>
          </Button>
        </Reveal>
      </section>

      {/* ============ FEATURED PROJECTS ============ */}
      <section className="mx-auto max-w-7xl px-6 md:px-10 pb-28">
        <div className="flex items-end justify-between mb-14">
          <Reveal>
            <p className="text-[10px] font-display uppercase tracking-[0.3em] text-teal-soft mb-3">
              Sélection — 2024 / 2026
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-semibold tracking-tight">
              Quelques réalisations.
            </h2>
          </Reveal>
          <Reveal delay={150}>
            <Button
              asChild
              variant="ghost"
              className="hidden md:inline-flex font-display uppercase tracking-[0.2em] text-xs text-muted-foreground hover:text-foreground hover:bg-transparent"
            >
              <Link to="/projects">
                Tout voir <ArrowRight />
              </Link>
            </Button>
          </Reveal>
        </div>

        <Card className="rounded-none border-x-0 bg-transparent shadow-none">
          <ul>
            {featured.map((p, i) => (
              <li key={p.id}>
                {i > 0 && <Separator className="bg-border/40" />}
                <Reveal delay={i * 80}>
                  <Link
                    to="/projects/$projectId"
                    params={{ projectId: p.id }}
                    className="group flex items-center gap-6 md:gap-10 py-8 md:py-10 px-4 -mx-4 transition-colors hover:bg-card/30"
                  >
                    <span className="font-display text-xs text-muted-foreground tabular-nums w-10 shrink-0">
                      {pad(i + 1)}
                    </span>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-display text-2xl md:text-4xl font-semibold tracking-tight transition-colors group-hover:text-teal-soft">
                        {p.name}
                      </h3>
                      <p className="mt-2 text-sm text-muted-foreground line-clamp-1">
                        {p.shortDescription}
                      </p>
                    </div>
                    <div className="hidden md:flex flex-wrap gap-1.5 max-w-[260px] justify-end">
                      {p.relatedSkillIds.slice(0, 2).map((sid) => (
                        <Badge
                          key={sid}
                          variant="outline"
                          className="border-border/60 bg-transparent text-muted-foreground text-[10px] uppercase tracking-wider rounded-full px-2.5 py-1 font-normal"
                        >
                          {sid.replace(/-/g, " ")}
                        </Badge>
                      ))}
                    </div>
                    <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-all duration-300 group-hover:text-teal-soft group-hover:rotate-12 shrink-0" />
                  </Link>
                </Reveal>
              </li>
            ))}
          </ul>
        </Card>
      </section>

      {/* ============ CTA ============ */}
      <section className="mx-auto max-w-7xl px-6 md:px-10 pb-28">
        <Reveal>
          <Card className="relative rounded-none border-x-0 border-y border-border/40 bg-transparent shadow-none py-20 md:py-28 px-0 overflow-hidden">
            <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-teal/10 blur-3xl pointer-events-none" />
            <p className="text-[10px] font-display uppercase tracking-[0.3em] text-teal-soft mb-6">
              Travaillons ensemble
            </p>
            <h2 className="font-display text-4xl md:text-6xl font-semibold leading-[1.05] max-w-3xl tracking-tight">
              Un projet, une équipe à renforcer,
              <br />
              <span className="italic font-light text-muted-foreground">
                une discussion à ouvrir ?
              </span>
            </h2>
            <Button
              asChild
              variant="link"
              className="mt-10 px-0 h-auto font-display font-bold uppercase text-sm tracking-[0.2em] text-foreground hover:text-teal-soft hover:no-underline group"
            >
              <Link to="/contact">
                <span className="h-px w-12 bg-teal group-hover:w-20 transition-all duration-300" />
                {profile.email}
                <ArrowUpRight />
              </Link>
            </Button>
          </Card>
        </Reveal>
      </section>
    </>
  );
}
