// app/blog/sections/post-card-grid.tsx
"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Calendar,
  Clock,
  FileText,
  Sparkles,
  User,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Post } from "./data/blog-data";

interface PostCardGridProps {
  posts: Post[];
}

export function BlogHeader() {
  return (
    <section className="relative h-full overflow-hidden bg-linear-to-br from-emerald-950 via-zinc-900 to-emerald-900 pt-30 pb-20 text-white">
      {/* Background com overlay sofisticado */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(120,179,65,0.15)_0%,transparent_70%)]" />
      </div>

      {/* Partículas decorativas */}
      <div className="absolute inset-0 z-0 opacity-30">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-px w-px rounded-full bg-emerald-400"
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.15,
            }}
            style={{
              left: `${(i * 5) % 100}%`,
              top: `${(i * 7) % 100}%`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 flex items-center justify-center gap-3"
        >
          <Sparkles className="h-4 w-4 text-emerald-400" />
          <span className="rounded-full bg-white/10 px-5 py-2 text-xs font-bold tracking-[0.3em] text-white uppercase backdrop-blur-md">
            Biblioteca de Conteúdo
          </span>
          <Sparkles className="h-4 w-4 text-emerald-400" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-6 text-center text-5xl leading-[1.1] font-black tracking-tight md:text-7xl"
        >
          <span className="bg-linear-to-r from-white via-emerald-100 to-emerald-300 bg-clip-text text-transparent">
            Blog
          </span>
          <br />
          <span className="bg-linear-to-r from-emerald-400 via-green-400 to-amber-300 bg-clip-text text-transparent">
            Canábico MMBH
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mx-auto mb-10 max-w-2xl text-center text-base leading-relaxed font-light text-zinc-300 md:text-xl"
        >
          Notícias, análises e relatos sobre a luta antiproibicionista e a
          regulamentação da cannabis em Belo Horizonte. Educação científica,
          jurídica e social para desconstruir o proibicionismo.
        </motion.p>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-12 flex flex-wrap justify-center gap-8"
        >
          <div className="flex items-center gap-4 rounded-2xl border border-emerald-500/20 bg-emerald-500/10 p-5 backdrop-blur-md">
            <div className="rounded-xl bg-emerald-500/20 p-3">
              <FileText className="h-6 w-6 text-emerald-400" />
            </div>
            <div>
              <p className="text-[10px] font-bold tracking-widest text-emerald-300 uppercase">
                Publicações
              </p>
              <p className="text-xl font-black text-white">25+</p>
            </div>
          </div>

          <div className="flex items-center gap-4 rounded-2xl border border-emerald-500/20 bg-emerald-500/10 p-5 backdrop-blur-md">
            <div className="rounded-xl bg-emerald-500/20 p-3">
              <Calendar className="h-6 w-6 text-emerald-400" />
            </div>
            <div>
              <p className="text-[10px] font-bold tracking-widest text-emerald-300 uppercase">
                Atualizações
              </p>
              <p className="text-xl font-black text-white">Semanais</p>
            </div>
          </div>

          <div className="flex items-center gap-4 rounded-2xl border border-emerald-500/20 bg-emerald-500/10 p-5 backdrop-blur-md">
            <div className="rounded-xl bg-emerald-500/20 p-3">
              <User className="h-6 w-6 text-emerald-400" />
            </div>
            <div>
              <p className="text-[10px] font-bold tracking-widest text-emerald-300 uppercase">
                Autores
              </p>
              <p className="text-xl font-black text-white">Especialistas</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function PostCardGrid({ posts }: PostCardGridProps) {
  return (
    <div className="grid grid-cols-1 gap-x-8 gap-y-16 md:grid-cols-2 lg:grid-cols-3">
      {posts.map((post, index) => (
        <motion.div
          key={post.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
        >
          <PostCard post={post} />
        </motion.div>
      ))}
    </div>
  );
}

export function PostCard({ post }: { post: Post }) {
  return (
    <Link href={`/blog/${post.id}`} className="block">
      <article className="group flex cursor-pointer flex-col overflow-hidden rounded-2xl bg-white shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl sm:rounded-3xl sm:hover:-translate-y-2 sm:hover:shadow-2xl dark:bg-zinc-800">
        {/* Container da Imagem */}
        <div className="relative aspect-16/10 overflow-hidden">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 33vw"
          />
          {/* Overlay gradiente */}
          <div className="absolute inset-0 bg-linear-to-t from-black/20 via-transparent to-transparent" />

          {/* Badge de Categoria */}
          <div className="absolute top-6 left-6">
            <span className="rounded-full bg-white/90 px-4 py-1.5 text-[10px] font-bold tracking-widest text-emerald-700 uppercase backdrop-blur-md dark:bg-emerald-900/90 dark:text-emerald-300">
              {post.category}
            </span>
          </div>
        </div>

        {/* Conteúdo do Card */}
        <div className="flex flex-1 flex-col p-6 md:p-8">
          <div className="mb-4 flex items-center justify-between">
            <div className="flex items-center gap-2 text-[10px] font-bold tracking-wider text-zinc-600 uppercase dark:text-zinc-400">
              <Calendar size={12} />
              {post.date}
            </div>
            <div className="flex items-center gap-1 text-[10px] font-bold tracking-wider text-zinc-600 uppercase dark:text-zinc-400">
              <Clock size={12} />5 min
            </div>
          </div>

          <h3 className="mb-3 text-lg leading-tight font-bold text-zinc-900 transition-colors group-hover:text-emerald-600 sm:mb-4 sm:text-xl dark:text-white dark:group-hover:text-emerald-400">
            {post.title}
          </h3>

          <p className="mb-4 line-clamp-3 text-xs text-zinc-600 sm:mb-6 sm:text-sm dark:text-zinc-400">
            {post.excerpt}
          </p>

          {/* Rodapé do Card */}
          <div className="mt-auto flex items-center justify-between border-t border-zinc-200 pt-6 dark:border-zinc-700">
            <span className="text-xs font-medium text-zinc-700 sm:text-sm dark:text-zinc-300">
              Por {post.author.split(" ")[1] || post.author}
            </span>
            <div className="flex items-center gap-2 text-xs font-bold text-emerald-600 transition-all group-hover:gap-4 dark:text-emerald-400">
              Ler mais{" "}
              <ArrowRight
                size={14}
                className="transition-transform group-hover:translate-x-1"
              />
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
}
