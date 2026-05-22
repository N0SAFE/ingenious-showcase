import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { skills, projects } from "@/data/portfolio";

const BASE_URL = "";

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const staticPaths = ["/", "/about", "/skills", "/projects", "/journey", "/contact"];
        const skillPaths = skills.map((s) => `/skills/${s.id}`);
        const projectPaths = projects.map((p) => `/projects/${p.id}`);
        const all = [...staticPaths, ...skillPaths, ...projectPaths];

        const urls = all.map(
          (p) => `  <url>\n    <loc>${BASE_URL}${p}</loc>\n    <changefreq>monthly</changefreq>\n  </url>`,
        );
        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...urls,
          `</urlset>`,
        ].join("\n");

        return new Response(xml, {
          headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=3600" },
        });
      },
    },
  },
});
