// app/blog/page.tsx
"use client";

import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { motion } from "framer-motion";
import { blogData } from "./data/blog-data";
import { BlogHeader, PostCardGrid } from "./sections";

export default function BlogListPage() {
  return (
    <main className="bg-background min-h-screen">
      <Navbar />

      {/* Background decorativo */}
      <div className="fixed inset-0 z-[-1]">
        <div className="absolute inset-0 bg-linear-to-b from-emerald-50/20 via-transparent to-transparent dark:from-emerald-900/5" />
        <div className="absolute top-1/4 right-0 h-96 w-96 rounded-full bg-linear-to-r from-emerald-200/10 to-green-200/10 blur-3xl dark:from-emerald-900/10 dark:to-green-900/10" />
        <div className="absolute bottom-1/4 left-0 h-96 w-96 rounded-full bg-linear-to-r from-amber-200/5 to-orange-200/5 blur-3xl dark:from-amber-900/5 dark:to-orange-900/5" />
      </div>

      <BlogHeader />

      <section className="relative py-24">
        <div className="absolute inset-0 bg-linear-to-b from-transparent via-emerald-50/20 to-transparent dark:via-emerald-900/10" />

        <div className="relative container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end"
          >
            <div>
              <div className="mb-4 flex items-center gap-3">
                <span className="text-xs font-bold tracking-wider text-emerald-700 uppercase dark:text-emerald-300">
                  Acervo Completo
                </span>
              </div>
              <h2 className="mb-4 text-5xl leading-tight font-black">
                <span className="text-zinc-900 dark:text-white">Todos os</span>
                <br />
                <span className="bg-linear-to-r from-emerald-600 to-green-500 bg-clip-text text-transparent">
                  Artigos
                </span>
              </h2>
              <p className="text-lg text-zinc-600 dark:text-zinc-400">
                Explore nosso acervo completo de conteúdo educativo e político
              </p>
            </div>
            <div className="flex items-center gap-4">
              <span className="rounded-full bg-emerald-100 px-4 py-2 text-sm font-bold tracking-wider text-emerald-700 uppercase dark:bg-emerald-900/30 dark:text-emerald-300">
                {blogData.length} Publicações
              </span>
            </div>
          </motion.div>

          <PostCardGrid posts={blogData} />
        </div>
      </section>

      {/* CTA Final para o Blog */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative container mx-auto px-4 pb-24"
      >
        <div className="relative overflow-hidden rounded-[3rem] bg-linear-to-br from-emerald-950 to-zinc-900 p-12 text-center">
          <div className="absolute top-0 right-0 h-32 w-32 translate-x-16 -translate-y-16 rounded-full bg-emerald-500/10 blur-3xl" />
          <div className="absolute bottom-0 left-0 h-32 w-32 -translate-x-16 translate-y-16 rounded-full bg-emerald-500/5 blur-3xl" />

          <div className="relative z-10">
            <h2 className="mb-4 text-4xl leading-tight font-black text-white md:text-5xl">
              Quer colaborar com o<br />
              <span className="bg-linear-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent">
                Blog Canábico?
              </span>
            </h2>
            <p className="mx-auto mb-8 max-w-xl text-lg text-emerald-200 italic">
              Se você tem relatos, análises jurídicas ou conteúdos sobre redução
              de danos, entre em contato conosco.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="https://instagram.com/marchadamaconhabh"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden rounded-full bg-linear-to-r from-emerald-600 to-green-600 px-12 py-4 text-sm font-bold tracking-widest text-white uppercase shadow-2xl shadow-emerald-600/30 transition-all hover:scale-105 hover:shadow-emerald-600/50"
              >
                <span className="relative z-10">Chamar no Direct</span>
              </a>
              <a
                href="mailto:comunicacao@marchadamaconhabh.org"
                className="rounded-full border-2 border-emerald-200 bg-white/80 px-10 py-4 text-sm font-bold tracking-widest text-emerald-700 uppercase backdrop-blur-sm transition-all hover:bg-emerald-50 dark:border-emerald-800 dark:bg-zinc-800/80 dark:text-emerald-300 dark:hover:bg-zinc-800"
              >
                Enviar Email
              </a>
            </div>
          </div>
        </div>
      </motion.section>

      <Footer />
    </main>
  );
}
