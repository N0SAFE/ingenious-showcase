import { createFileRoute } from "@tanstack/react-router";
import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";
import { profile } from "@/data/portfolio";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Mathis Sebille" },
      {
        name: "description",
        content: `Contacter ${profile.firstName} ${profile.lastName} — ${profile.email}`,
      },
      { property: "og:title", content: "Contact — Mathis Sebille" },
      { property: "og:description", content: "Échangeons autour de vos enjeux d'ingénierie logicielle." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-20">
      <p className="text-xs uppercase tracking-[0.2em] text-teal-soft mb-4">Contact</p>
      <h1 className="font-display text-4xl md:text-5xl font-semibold leading-tight">
        Discutons de votre projet.
      </h1>
      <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
        Disponible pour des missions de tech lead, d'architecture, d'audit ou de mentorat
        technique. Le plus simple reste un email — je réponds sous 48h.
      </p>

      <div className="mt-12 grid gap-4 md:grid-cols-2">
        <ContactCard icon={Mail} label="Email" value={profile.email} href={`mailto:${profile.email}`} />
        <ContactCard icon={Phone} label="Téléphone" value={profile.phone} href={`tel:${profile.phone.replace(/\s/g, "")}`} />
        <ContactCard icon={MapPin} label="Localisation" value={profile.location} />
        {profile.linkedin && (
          <ContactCard icon={Linkedin} label="LinkedIn" value="Profil LinkedIn" href={profile.linkedin} external />
        )}
        {profile.github && (
          <ContactCard icon={Github} label="GitHub" value="Profil GitHub" href={profile.github} external />
        )}
      </div>
    </div>
  );
}

function ContactCard({
  icon: Icon,
  label,
  value,
  href,
  external,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
  href?: string;
  external?: boolean;
}) {
  const inner = (
    <div className="rounded-xl border border-border/50 bg-card/40 backdrop-blur p-6 hover:bg-card/70 transition shadow-card h-full">
      <Icon className="h-5 w-5 text-teal mb-3" />
      <p className="text-xs uppercase tracking-wider text-muted-foreground">{label}</p>
      <p className="font-display font-medium mt-1">{value}</p>
    </div>
  );
  if (!href) return inner;
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className="block"
    >
      {inner}
    </a>
  );
}
