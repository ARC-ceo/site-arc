// src/app/sitemap.ts
import type { MetadataRoute } from "next";
import { posts } from "@/content/posts";

const baseUrl = "https://site.grouparc.com.br";

export default function sitemap(): MetadataRoute.Sitemap {
  // Páginas estáticas principais
  const staticPages: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/`, lastModified: new Date() },
    { url: `${baseUrl}/Sobre`, lastModified: new Date() },
    { url: `${baseUrl}/Projetos`, lastModified: new Date() },
    { url: `${baseUrl}/Servicos`, lastModified: new Date() }, // se existir
    { url: `${baseUrl}/Contato`, lastModified: new Date() },
    { url: `${baseUrl}/Blogs`, lastModified: new Date() },
  ];

  // Páginas de blog dinâmicas
  const blogPages: MetadataRoute.Sitemap = posts.map((p) => ({
    url: `${baseUrl}/Blogs/${p.slug}`,
    lastModified: p.updatedAt ? new Date(p.updatedAt) : new Date(),
  }));

  return [...staticPages, ...blogPages];
}