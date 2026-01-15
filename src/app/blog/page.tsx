import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import Link from "next/link";
import { blogData } from "./data/blog-data";
import { BlogHeader, PostCard } from "./sections";

export default function BlogListPage() {
  return (
    <main className="bg-background min-h-screen">
      <Navbar />
      <BlogHeader />

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 flex items-center justify-between">
            <div>
              <h2 className="mb-4 text-4xl leading-tight font-black">
                <span className="text-zinc-900 dark:text-white">Todos os</span>
                <br />
                <span className="bg-linear-to-r from-emerald-600 to-green-500 bg-clip-text text-transparent">
                  Artigos
                </span>
              </h2>
              <p className="text-lg text-zinc-600 dark:text-zinc-400">
                Explore nosso acervo completo de conteúdo educativo
              </p>
            </div>
            <div className="hidden md:block">
              <span className="rounded-full bg-emerald-100 px-4 py-2 text-sm font-bold tracking-wider text-emerald-700 uppercase dark:bg-emerald-900/30 dark:text-emerald-300">
                {blogData.length} Publicações
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-x-8 gap-y-16 md:grid-cols-2 lg:grid-cols-3">
            {blogData.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final para o Blog */}
      <section className="container mx-auto px-4 pb-24">
        <div className="relative overflow-hidden rounded-[3rem] bg-linear-to-br from-zinc-900 to-zinc-950 p-12 text-center">
          <div className="absolute top-0 right-0 h-32 w-32 translate-x-16 -translate-y-16 rounded-full bg-emerald-500/10 blur-3xl" />

          <h2 className="mb-4 text-3xl font-black text-white">
            Quer colaborar com o blog?
          </h2>
          <p className="mx-auto mb-8 max-w-xl text-lg text-zinc-400 italic">
            Se você tem relatos, análises jurídicas ou conteúdos sobre redução
            de danos, entre em contato conosco.
          </p>
          <Link
            href="https://instagram.com/marchadamaconhabh"
            target="_blank"
            className="inline-flex h-12 items-center justify-center rounded-full bg-linear-to-r from-emerald-600 to-green-600 px-8 text-sm font-bold tracking-widest text-white uppercase transition-all hover:scale-105 hover:shadow-lg"
          >
            Chamar no Direct
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
