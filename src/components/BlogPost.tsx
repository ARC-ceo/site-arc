import React from "react";
import type { Post } from "@/content/posts";

type Props = { post: Post };

export default function BlogPost({ post }: Props) {
  return (
    <article className="mx-auto max-w-3xl px-4 py-10 text-white">
      <header className="mb-8">
        <p className="text-sm uppercase tracking-wider text-white/60">{post.keyword}</p>
        <h1 className="mt-1 text-3xl font-bold lg:text-4xl">{post.title}</h1>
        {post.updatedAt && (
          <p className="mt-2 text-sm text-white/60">
            Atualizado em {new Date(post.updatedAt).toLocaleDateString("pt-BR")}
          </p>
        )}
        {post.summary && (
          <p className="mt-4 text-lg text-white/80">{post.summary}</p>
        )}
      </header>

      <div className="space-y-8 leading-relaxed">
        {post.sections.map((sec, idx) => (
          <section key={idx}>
            <h2 className="mb-3 text-2xl font-semibold text-cyan-300">{sec.heading}</h2>
            <div className="space-y-4 text-white/90">
              {sec.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
            </div>
          </section>
        ))}
      </div>

      {post.cta && (
        <div className="mt-10">
          <a
            href={post.cta.href}
            className="inline-flex items-center gap-2 rounded-2xl bg-cyan-500/90 px-5 py-3 font-medium text-black transition hover:bg-cyan-400"
          >
            {post.cta.label}
          </a>
        </div>
      )}
    </article>
  );
}
