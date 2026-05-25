import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { profile } from "@/data/portfolio";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const navItems = [
  { to: "/", label: "Accueil" },
  { to: "/about", label: "À propos" },
  { to: "/skills", label: "Compétences" },
  { to: "/projects", label: "Réalisations" },
  { to: "/journey", label: "Parcours" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-all duration-500",
        scrolled
          ? "backdrop-blur-xl bg-background/70 border-b border-border/40"
          : "bg-transparent border-b border-transparent",
      )}
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <Avatar className="h-10 w-10 border border-border/50 shadow-glow transition-transform group-hover:rotate-3">
            <AvatarImage src={profile.photoUrl} alt={`${profile.firstName} ${profile.lastName}`} />
            <AvatarFallback className="bg-teal text-background font-display font-bold text-sm tracking-tight rounded-full">
              {profile.initials}
            </AvatarFallback>
          </Avatar>
          <span className="hidden sm:flex flex-col leading-none">
            <span className="font-display font-bold text-sm tracking-tight">
              {profile.firstName} {profile.lastName}
            </span>
            <span className="text-[10px] uppercase tracking-[0.25em] text-teal-soft/70 mt-1">
              Ingénieur logiciel
            </span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-9">
          {navItems.map((item) => {
            const active = item.to === "/" ? pathname === "/" : pathname.startsWith(item.to);
            return (
              <Link
                key={item.to}
                to={item.to}
                className={cn(
                  "relative text-[10px] font-display font-bold uppercase tracking-[0.25em] transition-colors",
                  active ? "text-foreground" : "text-muted-foreground hover:text-foreground",
                )}
              >
                {item.label}
                <span
                  className={cn(
                    "absolute -bottom-2 left-0 h-px bg-teal transition-all duration-300",
                    active ? "w-full" : "w-0 group-hover:w-full",
                  )}
                />
              </Link>
            );
          })}
          <Link
            to="/contact"
            className="text-[10px] font-display font-bold uppercase tracking-[0.25em] px-4 py-2 rounded-full border border-teal/30 bg-teal/10 text-teal-soft hover:bg-teal/20 transition"
          >
            Contact
          </Link>
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
        <nav className="md:hidden border-t border-border/40 bg-background/95 backdrop-blur-xl">
          <div className="mx-auto max-w-7xl px-6 py-4 flex flex-col gap-1">
            {[...navItems, { to: "/contact", label: "Contact" }].map((item) => {
              const active = item.to === "/" ? pathname === "/" : pathname.startsWith(item.to);
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "px-3 py-3 text-sm font-display uppercase tracking-widest rounded-md transition-colors",
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
