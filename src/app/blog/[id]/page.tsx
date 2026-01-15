import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  Calendar,
  Clock,
  Facebook,
  MessageCircle,
  Twitter,
  User,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogData } from "../data/blog-data";

export default async function PostPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const post = blogData.find((p) => p.id === parseInt(id));

  if (!post) notFound();

  // Encontrar posts relacionados (mesma categoria, excluindo o atual)
  const relatedPosts = blogData
    .filter((p) => p.category === post.category && p.id !== post.id)
    .slice(0, 3);

  return (
    <main className="bg-background min-h-screen">
      <Navbar />

      <article className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          {/* Voltar */}
          <Link
            href="/blog"
            className="group mb-12 flex items-center gap-2 text-sm font-bold tracking-wider text-emerald-600 uppercase transition-colors hover:text-emerald-700 dark:text-emerald-400"
          >
            <ArrowLeft className="h-5 w-5 transition-transform group-hover:-translate-x-1" />
            Voltar para o blog
          </Link>

          {/* Header do Post */}
          <header className="mx-auto mb-16 max-w-4xl">
            {/* Categoria */}
            <span className="inline-flex items-center rounded-full bg-emerald-100 px-4 py-1.5 text-xs font-bold tracking-[0.2em] text-emerald-700 uppercase dark:bg-emerald-900/50 dark:text-emerald-300">
              {post.category}
            </span>

            {/* Título */}
            <h1 className="mt-8 mb-8 text-4xl leading-tight font-black tracking-tight md:text-6xl">
              {post.title}
            </h1>

            {/* Metadados */}
            <div className="flex flex-wrap items-center gap-6 border-t border-b border-zinc-200 py-6 dark:border-zinc-800">
              <div className="flex items-center gap-3">
                <User className="h-5 w-5 text-emerald-500" />
                <div>
                  <p className="text-xs font-bold tracking-wider text-zinc-500 uppercase dark:text-zinc-400">
                    Autor
                  </p>
                  <p className="font-bold text-zinc-900 dark:text-white">
                    {post.author}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Calendar className="h-5 w-5 text-emerald-500" />
                <div>
                  <p className="text-xs font-bold tracking-wider text-zinc-500 uppercase dark:text-zinc-400">
                    Publicado
                  </p>
                  <p className="font-bold text-zinc-900 dark:text-white">
                    {post.date}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-emerald-500" />
                <div>
                  <p className="text-xs font-bold tracking-wider text-zinc-500 uppercase dark:text-zinc-400">
                    Tempo de Leitura
                  </p>
                  <p className="font-bold text-zinc-900 dark:text-white">
                    8 min
                  </p>
                </div>
              </div>
            </div>
          </header>

          {/* Imagem de Destaque */}
          <div className="relative mx-auto mb-16 aspect-video max-w-6xl overflow-hidden rounded-[2.5rem]">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              sizes="100vw"
              priority
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/30 via-transparent to-transparent" />
          </div>

          {/* Conteúdo do Artigo */}
          <div className="mx-auto max-w-3xl">
            {/* Resumo destacado */}
            <div className="mb-12 rounded-[2rem] border-l-4 border-emerald-500 bg-emerald-50/50 p-8 dark:bg-emerald-900/20">
              <p className="text-lg leading-relaxed text-zinc-900 dark:text-zinc-300">
                {post.excerpt}
              </p>
            </div>

            {/* Conteúdo principal */}
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <div className="space-y-6 text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
                {post.content.split("\n\n").map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>

              {/* Conclusão */}
              <div className="my-12 rounded-[2rem] bg-linear-to-br from-emerald-50 to-green-50 p-8 dark:from-zinc-800/50 dark:to-zinc-800/30">
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
            </div>

            {/* Compartilhamento */}
            <div className="my-12 rounded-[2rem] border border-zinc-200 p-8 dark:border-zinc-800">
              <h4 className="mb-6 text-xl font-black text-zinc-900 dark:text-white">
                Compartilhe esta informação
              </h4>
              <div className="flex flex-wrap gap-4">
                <Button
                  variant="outline"
                  className="gap-3 rounded-full border-emerald-200 text-sm font-bold tracking-wider uppercase hover:border-emerald-500 hover:bg-emerald-50 dark:border-emerald-800 dark:hover:bg-emerald-900/20"
                >
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp
                </Button>
                <Button
                  variant="outline"
                  className="gap-3 rounded-full border-emerald-200 text-sm font-bold tracking-wider uppercase hover:border-emerald-500 hover:bg-emerald-50 dark:border-emerald-800 dark:hover:bg-emerald-900/20"
                >
                  <Facebook className="h-4 w-4" />
                  Facebook
                </Button>
                <Button
                  variant="outline"
                  className="gap-3 rounded-full border-emerald-200 text-sm font-bold tracking-wider uppercase hover:border-emerald-500 hover:bg-emerald-50 dark:border-emerald-800 dark:hover:bg-emerald-900/20"
                >
                  <Twitter className="h-4 w-4" />
                  Twitter
                </Button>
              </div>
            </div>

            {/* Rodapé do Artigo */}
            <footer className="mt-20 flex flex-col items-center justify-between gap-8 border-t border-zinc-200 pt-10 md:flex-row dark:border-zinc-800">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-linear-to-br from-emerald-500 to-green-500">
                  <User className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="text-xs font-bold tracking-wider text-zinc-500 uppercase dark:text-zinc-400">
                    Escrito por
                  </p>
                  <p className="text-lg font-bold text-zinc-900 dark:text-white">
                    {post.author}
                  </p>
                </div>
              </div>

              <div className="text-center md:text-right">
                <p className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
                  Publicado na categoria
                </p>
                <p className="text-lg font-bold text-emerald-600 dark:text-emerald-400">
                  {post.category}
                </p>
              </div>
            </footer>
          </div>

          {/* Posts Relacionados */}
          {relatedPosts.length > 0 && (
            <section className="mt-32">
              <div className="mb-12">
                <h2 className="mb-4 text-3xl font-black text-zinc-900 dark:text-white">
                  Continue lendo sobre{" "}
                  <span className="bg-linear-to-r from-emerald-600 to-green-500 bg-clip-text text-transparent">
                    {post.category}
                  </span>
                </h2>
                <p className="text-lg text-zinc-600 dark:text-zinc-400">
                  Descubra mais artigos relacionados a este tema
                </p>
              </div>

              <div className="grid gap-8 md:grid-cols-3">
                {relatedPosts.map((relatedPost) => (
                  <Link
                    key={relatedPost.id}
                    href={`/blog/${relatedPost.id}`}
                    className="group block"
                  >
                    <div className="overflow-hidden rounded-[2rem] bg-white p-6 shadow-xl transition-all hover:shadow-2xl dark:bg-zinc-800">
                      <div className="mb-4 flex items-center gap-2">
                        <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold tracking-wider text-emerald-700 uppercase dark:bg-emerald-900/50 dark:text-emerald-300">
                          {relatedPost.category}
                        </span>
                        <span className="text-xs font-medium text-zinc-500 dark:text-zinc-400">
                          {relatedPost.date}
                        </span>
                      </div>

                      <h3 className="mb-3 text-xl font-bold text-zinc-900 transition-colors group-hover:text-emerald-600 dark:text-white">
                        {relatedPost.title}
                      </h3>

                      <p className="line-clamp-2 text-zinc-600 dark:text-zinc-400">
                        {relatedPost.excerpt}
                      </p>

                      <div className="mt-6 flex items-center gap-2">
                        <span className="text-sm font-bold tracking-wider text-emerald-600 uppercase dark:text-emerald-400">
                          Ler agora
                        </span>
                        <ArrowLeft className="h-4 w-4 rotate-180 text-emerald-600 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </div>
      </article>

      <Footer />
    </main>
  );
}
