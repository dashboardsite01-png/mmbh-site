// app/blog/[id]/page.tsx
"use client";

import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  Clock,
  Facebook,
  Linkedin,
  MessageCircle,
  Share2,
  Twitter,
  User,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useState } from "react";
import { blogData } from "../data/blog-data";
import { PostCard } from "../sections";

export default function BlogPostPage() {
  const params = useParams();
  const post = blogData.find((p) => p.id === Number(params.id));
  const [shareOpen, setShareOpen] = useState(false);

  if (!post)
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <h1 className="mb-4 text-4xl font-bold text-zinc-900 dark:text-white">
            Artigo não encontrado
          </h1>
          <p className="mb-8 text-zinc-600 dark:text-zinc-400">
            O artigo que você está procurando não existe.
          </p>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 rounded-full bg-linear-to-r from-emerald-600 to-green-600 px-6 py-3 text-sm font-bold text-white"
          >
            <ArrowLeft className="h-5 w-5" />
            Voltar para o Blog
          </Link>
        </div>
      </div>
    );

  // Encontrar posts relacionados (mesma categoria, excluindo o atual)
  const relatedPosts = blogData
    .filter((p) => p.category === post.category && p.id !== post.id)
    .slice(0, 3);

  return (
    <main className="bg-background min-h-screen">
      {/* Background decorativo */}
      <div className="fixed inset-0 z-[-1]">
        <div className="absolute inset-0 bg-linear-to-b from-emerald-50/20 via-transparent to-transparent dark:from-emerald-900/5" />
        <div className="absolute top-1/4 right-0 h-96 w-96 rounded-full bg-linear-to-r from-emerald-200/10 to-green-200/10 blur-3xl dark:from-emerald-900/10 dark:to-green-900/10" />
        <div className="absolute bottom-1/4 left-0 h-96 w-96 rounded-full bg-linear-to-r from-amber-200/5 to-orange-200/5 blur-3xl dark:from-amber-900/5 dark:to-orange-900/5" />
      </div>

      {/* Hero Banner - Mesmo estilo das outras páginas */}
      <section className="relative flex w-full items-center justify-center overflow-hidden bg-linear-to-br from-emerald-950 via-zinc-900 to-emerald-900">
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

        <div className="relative z-10 h-full w-full max-w-6xl px-6 pt-30">
          <div className="0 mb-14 flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
            {/* Conteúdo principal do banner */}
            <div className="flex-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 flex items-center gap-3"
              >
                {/* <Sparkles className="h-4 w-4 text-emerald-400" /> */}
                <span className="rounded-full bg-white/10 px-5 py-2 text-xs font-bold tracking-[0.3em] text-white uppercase backdrop-blur-md">
                  {post.category}
                </span>
                {/* <Sparkles className="h-4 w-4 text-emerald-400" /> */}
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="mb-6 text-4xl leading-[1.1] font-black tracking-tight text-white md:text-6xl"
              >
                <span className="bg-linear-to-r from-white via-emerald-100 to-emerald-300 bg-clip-text text-transparent">
                  {post.title}
                </span>
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="flex flex-wrap items-center gap-6 text-sm text-emerald-300"
              >
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  <span>{post.author}</span>
                </div>
                <div className="h-4 w-px bg-emerald-400/30" />
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>{post.date}</span>
                </div>
                <div className="h-4 w-px bg-emerald-400/30" />
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>8 min de leitura</span>
                </div>
              </motion.div>
            </div>
          </div>
          {/* Botão de voltar ao lado direito */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-6 flex justify-start"
          >
            <Link
              href="/blog"
              className="group inline-flex items-center gap-2 rounded-full py-3 text-sm font-normal tracking-wider text-white/70 uppercase backdrop-blur-md transition-all duration-300 hover:text-white"
            >
              <ArrowLeft className="size-5 transition-transform group-hover:-translate-x-4" />
              <span className="transition-transform duration-300 group-hover:-translate-x-2">
                Voltar para o blog
              </span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Conteúdo principal do artigo */}
      <article className="py-20">
        <div className="container mx-auto px-4">
          {/* Imagem de Destaque */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative mx-auto mb-16 aspect-video max-w-6xl overflow-hidden rounded-[2.5rem] shadow-2xl"
          >
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
              sizes="100vw"
              priority
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/40 via-black/20 to-transparent" />
          </motion.div>

          {/* Conteúdo do Artigo */}
          <div className="mx-auto max-w-3xl">
            {/* Resumo destacado */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mb-12 overflow-hidden rounded-[2rem] border-l-4 border-emerald-500 bg-linear-to-r from-emerald-50 to-white p-8 shadow-xl dark:from-emerald-900/20 dark:to-zinc-800"
            >
              <p className="text-lg leading-relaxed text-emerald-800 italic dark:text-emerald-200">
                {post.excerpt}
              </p>
            </motion.div>

            {/* Conteúdo principal */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="prose prose-lg dark:prose-invert max-w-none"
            >
              <div className="space-y-8 text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
                {post.content.split("\n\n").map((paragraph, index) => (
                  <p key={index} className="leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Conclusão */}
              <div className="my-12 overflow-hidden rounded-[2rem] bg-linear-to-br from-emerald-50 to-white p-8 shadow-xl dark:from-zinc-800 dark:to-zinc-700">
                <h3 className="mb-4 text-2xl font-black text-zinc-900 dark:text-white">
                  A luta continua
                </h3>
                <p className="text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
                  A luta da Marcha da Maconha Belo Horizonte é contínua. Para
                  além das manifestações de rua, nosso blog serve como uma
                  ferramenta de educação popular. Acreditamos que o acesso à
                  informação de qualidade é o primeiro passo para a quebra de
                  estigmas seculares que cercam a planta. Cada artigo publicado
                  aqui é revisado por nossos núcleos jurídico, médico e de
                  redução de danos para garantir que você tenha em mãos dados
                  concretos e orientações seguras.
                </p>
              </div>
            </motion.div>

            {/* Compartilhamento */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="my-12 overflow-hidden rounded-[2rem] border border-emerald-100 bg-white p-8 shadow-xl dark:border-emerald-800 dark:bg-zinc-800"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="mb-2 text-xl font-black text-zinc-900 dark:text-white">
                    Compartilhe esta informação
                  </h4>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">
                    Ajude a disseminar conhecimento de qualidade
                  </p>
                </div>
                <Button
                  onClick={() => setShareOpen(!shareOpen)}
                  variant="outline"
                  className="rounded-full border-emerald-200"
                >
                  <Share2 className="h-5 w-5" />
                </Button>
              </div>

              {shareOpen && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  className="mt-6 overflow-hidden border-t border-emerald-100 pt-6 dark:border-emerald-800"
                >
                  <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                    <Button
                      variant="outline"
                      className="gap-3 rounded-xl border-emerald-200 text-sm font-bold hover:border-emerald-500 hover:bg-emerald-50 dark:border-emerald-800 dark:hover:bg-emerald-900/20"
                    >
                      <MessageCircle className="h-4 w-4" />
                      WhatsApp
                    </Button>
                    <Button
                      variant="outline"
                      className="gap-3 rounded-xl border-emerald-200 text-sm font-bold hover:border-emerald-500 hover:bg-emerald-50 dark:border-emerald-800 dark:hover:bg-emerald-900/20"
                    >
                      <Facebook className="h-4 w-4" />
                      Facebook
                    </Button>
                    <Button
                      variant="outline"
                      className="gap-3 rounded-xl border-emerald-200 text-sm font-bold hover:border-emerald-500 hover:bg-emerald-50 dark:border-emerald-800 dark:hover:bg-emerald-900/20"
                    >
                      <Twitter className="h-4 w-4" />
                      Twitter
                    </Button>
                    <Button
                      variant="outline"
                      className="gap-3 rounded-xl border-emerald-200 text-sm font-bold hover:border-emerald-500 hover:bg-emerald-50 dark:border-emerald-800 dark:hover:bg-emerald-900/20"
                    >
                      <Linkedin className="h-4 w-4" />
                      LinkedIn
                    </Button>
                  </div>
                </motion.div>
              )}
            </motion.div>

            {/* Rodapé do Artigo */}
            <motion.footer
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="mt-20 overflow-hidden rounded-[2rem] border border-emerald-100 bg-linear-to-r from-white to-emerald-50 p-8 dark:border-emerald-800 dark:from-zinc-800 dark:to-emerald-900/20"
            >
              <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
                <div className="flex items-center gap-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-linear-to-br from-emerald-500 to-green-500 shadow-lg">
                    <User className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <p className="text-xs font-bold tracking-wider text-zinc-500 uppercase dark:text-zinc-400">
                      Escrito por
                    </p>
                    <p className="text-xl font-bold text-zinc-900 dark:text-white">
                      {post.author}
                    </p>
                  </div>
                </div>

                <div className="text-center md:text-right">
                  <p className="text-sm font-bold tracking-wider text-zinc-500 uppercase dark:text-zinc-400">
                    Publicado na categoria
                  </p>
                  <p className="text-xl font-bold text-emerald-600 dark:text-emerald-400">
                    {post.category}
                  </p>
                </div>
              </div>
            </motion.footer>
          </div>

          {/* Posts Relacionados */}
          {relatedPosts.length > 0 && (
            <motion.section
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-32"
            >
              <div className="mb-12">
                <div className="mb-4 flex items-center gap-3">
                  <span className="text-xs font-bold tracking-wider text-emerald-700 uppercase dark:text-emerald-300">
                    Continue Explorando
                  </span>
                </div>
                <h2 className="mb-6 text-5xl leading-tight font-black">
                  <span className="text-zinc-900 dark:text-white">
                    Artigos sobre
                  </span>
                  <br />
                  <span className="bg-linear-to-r from-emerald-600 to-green-500 bg-clip-text text-transparent">
                    {post.category}
                  </span>
                </h2>
                <p className="text-lg text-zinc-600 dark:text-zinc-400">
                  Descubra mais conteúdo relacionado a este tema
                </p>
              </div>

              <div className="grid gap-8 md:grid-cols-3">
                {relatedPosts.map((relatedPost) => (
                  <PostCard key={relatedPost.id} post={relatedPost} />
                ))}
              </div>

              <div className="mt-12 text-center">
                <Link
                  href="/blog"
                  className="group inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 text-sm font-bold tracking-widest text-emerald-600 uppercase shadow-lg transition-all hover:-translate-y-1 hover:bg-emerald-50 hover:shadow-xl dark:bg-zinc-800 dark:text-emerald-400"
                >
                  Ver Todos os Artigos
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-2" />
                </Link>
              </div>
            </motion.section>
          )}
        </div>
      </article>

      {/* Newsletter */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="container mx-auto px-4 pb-24"
      >
        <div className="relative overflow-hidden rounded-[3rem] bg-linear-to-br from-emerald-600 to-green-600 p-12 text-center">
          <div className="absolute top-0 right-0 h-32 w-32 translate-x-16 -translate-y-16 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute bottom-0 left-0 h-32 w-32 -translate-x-16 translate-y-16 rounded-full bg-white/5 blur-3xl" />

          <div className="relative z-10">
            <h2 className="mb-4 text-4xl leading-tight font-black text-white md:text-5xl">
              Não perca nenhum
              <br />
              <span className="text-emerald-100">artigo novo</span>
            </h2>
            <p className="mx-auto mb-8 max-w-xl text-lg text-emerald-200 italic">
              Se inscreva para receber nossos artigos por email
            </p>
            <div className="mx-auto flex max-w-md flex-col gap-4 sm:flex-row">
              <input
                type="email"
                placeholder="seu@email.com"
                className="flex-1 rounded-full border-2 border-white/30 bg-white/10 px-6 py-4 text-white backdrop-blur-sm placeholder:text-emerald-300 focus:border-white focus:outline-none"
              />
              <Button className="rounded-full bg-white px-8 py-4 font-bold text-emerald-700 hover:bg-emerald-50">
                Inscrever
              </Button>
            </div>
            <p className="mt-4 text-sm text-emerald-300">
              Sem spam. Apenas conteúdo relevante sobre a luta
              antiproibicionista.
            </p>
          </div>
        </div>
      </motion.section>

      <Footer />
    </main>
  );
}
