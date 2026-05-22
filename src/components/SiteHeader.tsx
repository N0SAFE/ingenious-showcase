import { useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { profile } from "@/data/portfolio";
import { cn } from "@/lib/utils";

const navItems = [
  { to: "/", label: "Accueil" },
  { to: "/about", label: "À propos" },
  { to: "/skills", label: "Compétences" },
  { to: "/projects", label: "Réalisations" },
  { to: "/journey", label: "Parcours" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-background/70 border-b border-border/50">
      <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <span className="h-9 w-9 rounded-full bg-gradient-accent flex items-center justify-center text-primary-foreground font-display font-bold text-sm shadow-glow">
            {profile.initials}
          </span>
          <span className="font-display font-semibold text-sm tracking-tight">
            {profile.firstName} <span className="text-muted-foreground">{profile.lastName}</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => {
            const active =
              item.to === "/" ? pathname === "/" : pathname.startsWith(item.to);
            return (
              <Link
                key={item.to}
                to={item.to}
                className={cn(
                  "px-3 py-2 text-sm rounded-md transition-colors",
                  active
                    ? "text-foreground bg-secondary/60"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary/30",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <button
          className="md:hidden p-2 rounded-md hover:bg-secondary/40"
          onClick={() => setOpen((v) => !v)}
          aria-label="Menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <nav className="md:hidden border-t border-border/50 bg-background/95">
          <div className="mx-auto max-w-6xl px-6 py-3 flex flex-col gap-1">
            {navItems.map((item) => {
              const active =
                item.to === "/" ? pathname === "/" : pathname.startsWith(item.to);
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "px-3 py-2 text-sm rounded-md transition-colors",
                    active
                      ? "text-foreground bg-secondary/60"
                      : "text-muted-foreground hover:text-foreground",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </nav>
      )}
    </header>
  );
}
