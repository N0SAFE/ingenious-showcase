import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone, Linkedin, Github } from "lucide-react";
import { profile } from "@/data/portfolio";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border/50 bg-gradient-subtle">
      <div className="mx-auto max-w-6xl px-6 py-12 grid gap-10 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-3">
            <span className="h-10 w-10 rounded-full bg-gradient-accent flex items-center justify-center text-primary-foreground font-display font-bold shadow-glow">
              {profile.initials}
            </span>
            <div>
              <p className="font-display font-semibold">
                {profile.firstName} {profile.lastName}
              </p>
              <p className="text-xs text-muted-foreground">{profile.title}</p>
            </div>
          </div>
          <p className="mt-4 text-sm text-muted-foreground max-w-xs">{profile.tagline}</p>
        </div>

        <div>
          <h3 className="text-sm font-display font-semibold mb-4">Navigation</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/about" className="hover:text-foreground">À propos</Link></li>
            <li><Link to="/skills" className="hover:text-foreground">Compétences</Link></li>
            <li><Link to="/projects" className="hover:text-foreground">Réalisations</Link></li>
            <li><Link to="/journey" className="hover:text-foreground">Parcours</Link></li>
            <li><Link to="/contact" className="hover:text-foreground">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-display font-semibold mb-4">Coordonnées</h3>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-teal" />
              <a href={`mailto:${profile.email}`} className="hover:text-foreground">{profile.email}</a>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-teal" />
              <span>{profile.phone}</span>
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-teal" />
              <span>{profile.location}</span>
            </li>
            <li className="flex items-center gap-4 pt-2">
              {profile.linkedin && (
                <a href={profile.linkedin} target="_blank" rel="noreferrer" className="hover:text-foreground">
                  <Linkedin className="h-4 w-4" />
                </a>
              )}
              {profile.github && (
                <a href={profile.github} target="_blank" rel="noreferrer" className="hover:text-foreground">
                  <Github className="h-4 w-4" />
                </a>
              )}
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/50">
        <div className="mx-auto max-w-6xl px-6 py-5 text-xs text-muted-foreground flex justify-between">
          <span>© {new Date().getFullYear()} {profile.firstName} {profile.lastName}</span>
          <span>Portfolio — Expert en ingénierie du logiciel</span>
        </div>
      </div>
    </footer>
  );
}
