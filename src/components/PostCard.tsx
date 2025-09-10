import React from "react";
import Link from "next/link";
import type { Post } from "@/content/posts";

export default function PostCard({ post }: { post: Post }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group block rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-cyan-400/40 hover:bg-white/10"
    >
      <p className="text-xs uppercase tracking-widest text-white/60">{post.keyword}</p>
      <h3 className="mt-2 line-clamp-2 text-xl font-semibold text-white group-hover:text-cyan-300">
        {post.title}
      </h3>
      <p className="mt-3 line-clamp-3 text-white/70">{post.summary}</p>
      <span className="mt-4 inline-flex items-center gap-2 text-cyan-300">
        Ler mais →
      </span>
    </Link>
  );
}
