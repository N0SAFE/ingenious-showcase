import { Link } from "@tanstack/react-router";
import { skills, type Skill } from "@/data/portfolio";

/**
 * Schéma synthétique comparant toutes les compétences.
 * Barres horizontales groupées par domaine — on lit immédiatement la place
 * de chaque compétence par rapport aux autres.
 */
export function SkillsChart() {
  const tech = skills.filter((s) => s.category === "technique");
  const human = skills.filter((s) => s.category === "humaine");

  return (
    <div className="grid gap-10 md:grid-cols-2">
      <SkillColumn title="Compétences techniques" items={tech} accent="bg-teal" />
      <SkillColumn title="Compétences humaines" items={human} accent="bg-teal-soft" />
    </div>
  );
}

function SkillColumn({
  title,
  items,
  accent,
}: {
  title: string;
  items: Skill[];
  accent: string;
}) {
  const sorted = [...items].sort((a, b) => b.level - a.level);
  return (
    <div className="rounded-xl border border-border/50 bg-card/40 backdrop-blur p-6 shadow-card">
      <h3 className="font-display text-lg font-semibold mb-6 flex items-center gap-2">
        <span className={`h-2 w-2 rounded-full ${accent}`} />
        {title}
      </h3>
      <ul className="space-y-4">
        {sorted.map((s) => (
          <li key={s.id}>
            <Link
              to="/skills/$skillId"
              params={{ skillId: s.id }}
              className="block group"
            >
              <div className="flex items-baseline justify-between text-sm mb-1.5">
                <span className="font-medium group-hover:text-teal-soft transition-colors">
                  {s.name}
                </span>
                <span className="text-xs text-muted-foreground tabular-nums">{s.level}</span>
              </div>
              <div className="h-2 rounded-full bg-secondary/40 overflow-hidden">
                <div
                  className={`h-full ${accent} transition-all duration-700 group-hover:brightness-125`}
                  style={{ width: `${s.level}%` }}
                />
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
