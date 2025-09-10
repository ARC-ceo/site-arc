// src/app/Blogs/[slug]/page.tsx
import React from "react";
import { notFound } from "next/navigation";

import Nav from "@/components/nav/page";
import Footer from "@/components/footer/page";
import BlogPost from "@/components/BlogPost";
import { posts } from "@/content/posts";

// Gera rotas estáticas para todos os slugs (ok manter síncrono)
export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

// ✅ generateMetadata agora é async e aguarda params
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params; // 👈 aguarda
  const post = posts.find((p) => p.slug === slug);
  if (!post) return {};

  const url = `https://site.grouparc.com.br/Blogs/${post.slug}`;

  return {
    title: `${post.title} – Grupo ARC`,
    description: post.summary,
    keywords: post.keyword,
    openGraph: {
      title: post.title,
      description: post.summary,
      url,
      type: "article",
      siteName: "Grupo ARC",
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.summary,
    },
    alternates: { canonical: url },
  };
}

// ✅ Page também pode receber params como Promise (por consistência)
export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params; // 👈 aguarda
  const post = posts.find((p) => p.slug === slug);
  if (!post) return notFound();

  return (
    <main className="relative overflow-x-hidden font-spaceMono">
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0C0F1A] via-[#0F1322] to-[#0C0F1A]" />
        <div className="absolute -top-20 -left-20 h-[36rem] w-[36rem] rounded-full bg-[#00C0FF]/15 blur-3xl" />
        <div className="absolute -bottom-32 right-0 translate-x-1/4 h-[40rem] w-[40rem] rounded-full bg-[#00005A]/30 blur-3xl" />
      </div>

      <Nav />
      <div className="mx-auto w-full max-w-[1100px] px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="h-6" />
        <BlogPost post={post} />
      </div>
      <div className="h-6" />
      <Footer />
    </main>
  );
}
