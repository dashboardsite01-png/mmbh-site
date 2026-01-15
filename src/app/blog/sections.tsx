"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Calendar, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Post } from "./data/blog-data";

// Card de Post individual para a listagem
export function PostCard({ post }: { post: Post }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative cursor-pointer overflow-hidden rounded-[2.5rem] bg-white p-8 shadow-xl transition-all hover:shadow-2xl dark:bg-zinc-800"
    >
      {/* Background gradiente no hover */}
      <div className="absolute inset-0 bg-linear-to-br from-emerald-500/5 to-green-500/5 opacity-0 transition-opacity group-hover:opacity-100" />

      <Link href={`/blog/${post.id}`}>
        {/* Imagem do post */}
        <div className="relative mb-6 aspect-video overflow-hidden rounded-[1.5rem]">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/20 via-transparent to-transparent" />

          {/* Badge da categoria */}
          <div className="absolute top-4 left-4">
            <span className="inline-flex items-center rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold tracking-wider text-emerald-700 uppercase dark:bg-emerald-900/50 dark:text-emerald-300">
              {post.category}
            </span>
          </div>
        </div>

        <div className="relative z-10 space-y-4">
          {/* Data e autor */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-emerald-500" />
              <span className="text-xs font-bold tracking-wider text-emerald-600 uppercase dark:text-emerald-400">
                {post.date}
              </span>
            </div>
            <div className="h-1 w-1 rounded-full bg-zinc-300 dark:bg-zinc-600" />
            <div className="flex items-center gap-2">
              <User className="h-4 w-4 text-zinc-500" />
              <span className="text-xs font-medium text-zinc-500 dark:text-zinc-400">
                {post.author}
              </span>
            </div>
          </div>

          {/* Título */}
          <h3 className="text-xl leading-tight font-bold text-zinc-900 transition-colors group-hover:text-emerald-600 dark:text-white">
            {post.title}
          </h3>

          {/* Resumo */}
          <p className="line-clamp-2 text-zinc-600 dark:text-zinc-400">
            {post.excerpt}
          </p>

          {/* Link para ler mais */}
          <div className="flex items-center gap-2 pt-4">
            <span className="text-sm font-bold tracking-wider text-emerald-600 uppercase dark:text-emerald-400">
              Ler artigo
            </span>
            <ArrowUpRight className="h-4 w-4 text-emerald-600 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

// Cabeçalho da página de Blog
export function BlogHeader() {
  return (
    <section className="relative overflow-hidden border-b border-zinc-200 py-32 dark:border-zinc-800">
      {/* Background gradiente */}
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-50/30 via-white to-transparent dark:from-emerald-900/10 dark:via-zinc-900 dark:to-transparent" />

      <div className="relative container mx-auto px-4">
        <div className="mb-6 flex items-center gap-3">
          <div className="h-px w-12 bg-linear-to-r from-emerald-500 to-transparent" />
          <span className="text-sm font-bold tracking-widest text-emerald-600 uppercase dark:text-emerald-400">
            Biblioteca de Conteúdo
          </span>
        </div>

        <h1 className="mb-6 text-5xl leading-tight font-black tracking-tight md:text-7xl">
          <span className="text-zinc-900 dark:text-white">Blog</span>
          <br />
          <span className="bg-linear-to-r from-emerald-600 to-green-500 bg-clip-text text-transparent">
            Canábico MMBH
          </span>
        </h1>

        <p className="max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
          Notícias, análises e relatos sobre a luta antiproibicionista e a
          regulamentação da cannabis em Belo Horizonte. Educação científica,
          jurídica e social para desconstruir o proibicionismo.
        </p>

        {/* Stats */}
        <div className="mt-12 flex flex-wrap gap-6">
          <div className="flex items-center gap-3">
            <div className="rounded-xl bg-linear-to-br from-emerald-500 to-green-500 p-3">
              <Calendar className="h-6 w-6 text-white" />
            </div>
            <div>
              <p className="text-sm font-bold tracking-wider text-zinc-500 uppercase dark:text-zinc-400">
                Atualizações
              </p>
              <p className="text-2xl font-black text-zinc-900 dark:text-white">
                Semanais
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="rounded-xl bg-linear-to-br from-emerald-500 to-green-500 p-3">
              <User className="h-6 w-6 text-white" />
            </div>
            <div>
              <p className="text-sm font-bold tracking-wider text-zinc-500 uppercase dark:text-zinc-400">
                Autores
              </p>
              <p className="text-2xl font-black text-zinc-900 dark:text-white">
                Especialistas
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
