import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SkillsChart } from "@/components/SkillsChart";
import { skills } from "@/data/portfolio";

export const Route = createFileRoute("/skills/")({
  head: () => ({
    meta: [
      { title: "Compétences — Mathis Sebille" },
      {
        name: "description",
        content:
          "Cartographie comparée de mes compétences techniques et humaines en ingénierie du logiciel.",
      },
      { property: "og:title", content: "Compétences — Mathis Sebille" },
      {
        property: "og:description",
        content: "Cartographie comparée de mes compétences techniques et humaines.",
      },
    ],
  }),
  component: SkillsPage,
});

function SkillsPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      <p className="text-xs uppercase tracking-[0.2em] text-teal-soft mb-4">Compétences</p>
      <h1 className="font-display text-4xl md:text-5xl font-semibold leading-tight max-w-3xl">
        Une carte pour situer chaque compétence par rapport aux autres.
      </h1>
      <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
        Les 10 compétences sont réparties en deux domaines — six techniques et quatre humaines — et
        chaque barre indique mon niveau relatif par rapport aux autres. Cliquez sur une compétence
        pour lire son article détaillé : définition, preuves, autocritique et évolution.
      </p>

      <div className="mt-14">
        <SkillsChart />
      </div>

      {/* Liste détaillée */}
      <div className="mt-20">
        <h2 className="font-display text-2xl md:text-3xl font-semibold mb-8">
          Toutes les compétences
        </h2>
        <div className="grid gap-3 md:grid-cols-2">
          {skills.map((s) => (
            <Link
              key={s.id}
              to="/skills/$skillId"
              params={{ skillId: s.id }}
              className="group flex items-center justify-between rounded-lg border border-border/50 bg-card/40 backdrop-blur p-4 hover:bg-card/70 transition"
            >
              <div>
                <p className="font-display font-medium group-hover:text-teal-soft transition">
                  {s.name}
                </p>
                <p className="text-xs text-muted-foreground mt-0.5">
                  {s.category === "technique" ? "Technique" : "Humaine"} · niveau {s.level}
                </p>
              </div>
              <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-teal-soft transition" />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
