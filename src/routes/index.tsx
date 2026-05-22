import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Briefcase, GraduationCap, Sparkles } from "lucide-react";
import { profile, skills, projects } from "@/data/portfolio";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `${profile.firstName} ${profile.lastName} — ${profile.title}` },
      { name: "description", content: profile.tagline },
    ],
  }),
  component: Home,
});

function Home() {
  const featured = projects.slice(0, 3);
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-40" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,oklch(0.60_0.11_205/0.25),transparent_50%)]" />
        <div className="relative mx-auto max-w-6xl px-6 pt-24 pb-32">
          <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-teal-soft mb-6">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Portfolio — Expert ingénierie du logiciel</span>
          </div>
          <h1 className="font-display text-5xl md:text-7xl font-semibold leading-[1.05] max-w-4xl">
            {profile.firstName}{" "}
            <span className="text-gradient">{profile.lastName}</span>,
            <br />
            ingénieur logiciel
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-muted-foreground leading-relaxed">
            {profile.tagline}
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:opacity-90 transition shadow-glow"
            >
              Voir mes réalisations
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card/40 backdrop-blur px-6 py-3 text-sm font-medium hover:bg-card/70 transition"
            >
              Qui je suis
            </Link>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="mx-auto max-w-6xl px-6 -mt-16 relative z-10 grid gap-4 md:grid-cols-3">
        <Stat icon={Briefcase} label="Réalisations détaillées" value={String(projects.length)} />
        <Stat icon={Sparkles} label="Compétences cartographiées" value={String(skills.length)} />
        <Stat icon={GraduationCap} label="Années d'expérience" value="5+" />
      </section>

      {/* Featured projects */}
      <section className="mx-auto max-w-6xl px-6 mt-24">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-teal-soft mb-2">Sélection</p>
            <h2 className="font-display text-3xl md:text-4xl font-semibold">
              Quelques réalisations
            </h2>
          </div>
          <Link to="/projects" className="text-sm text-muted-foreground hover:text-foreground flex items-center gap-1">
            Tout voir <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {featured.map((p) => (
            <Link
              key={p.id}
              to="/projects/$projectId"
              params={{ projectId: p.id }}
              className="group rounded-xl border border-border/50 bg-card/40 backdrop-blur p-6 hover:bg-card/70 transition shadow-card"
            >
              <div className="h-32 rounded-lg bg-gradient-accent opacity-80 mb-5 group-hover:opacity-100 transition" />
              <h3 className="font-display font-semibold text-lg group-hover:text-teal-soft transition">
                {p.name}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{p.shortDescription}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-6 mt-24">
        <div className="rounded-2xl border border-border/50 bg-gradient-subtle p-10 md:p-14 shadow-card relative overflow-hidden">
          <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-gradient-accent opacity-20 blur-3xl" />
          <h2 className="font-display text-3xl md:text-4xl font-semibold max-w-2xl">
            Un projet, une équipe à renforcer, une discussion à ouvrir ?
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl">
            Je suis disponible pour échanger sur vos enjeux d'ingénierie logicielle.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:opacity-90 transition shadow-glow"
          >
            Me contacter <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}

function Stat({
  icon: Icon,
  label,
  value,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-xl border border-border/50 bg-card/60 backdrop-blur p-6 shadow-card">
      <Icon className="h-5 w-5 text-teal mb-3" />
      <p className="font-display text-3xl font-semibold">{value}</p>
      <p className="text-xs uppercase tracking-wider text-muted-foreground mt-1">{label}</p>
    </div>
  );
}
