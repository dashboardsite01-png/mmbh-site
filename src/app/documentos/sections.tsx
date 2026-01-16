// app/(pages)/documentos/sections/hero.tsx
"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Calendar,
  Download,
  Eye,
  FileText,
  Flame,
  Search,
  Share2,
  Sparkles,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { documentosData } from "./data/documentos-data";

export function HeroDocumentos() {
  return (
    <section className="relative flex h-full w-full items-center justify-center overflow-hidden bg-linear-to-br from-emerald-950 via-zinc-900 to-emerald-900 pt-30 pb-20">
      {/* Background com overlay sofisticado */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/11.jpg"
          fill
          className="object-cover object-center"
          alt="Arquivo de documentos da Marcha da Maconha BH"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-linear-to-t from-emerald-950 via-emerald-950/70 to-transparent" />
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

      <div className="relative z-10 max-w-6xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 flex items-center justify-center gap-3"
        >
          <Sparkles className="h-4 w-4 text-emerald-400" />
          <span className="rounded-full bg-white/10 px-5 py-2 text-xs font-bold tracking-[0.3em] text-white uppercase backdrop-blur-md">
            Biblioteca Digital
          </span>
          <Sparkles className="h-4 w-4 text-emerald-400" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-6 text-4xl leading-[1.1] font-black tracking-tight md:text-7xl"
        >
          <span className="bg-linear-to-r from-white via-emerald-100 to-emerald-300 bg-clip-text text-transparent">
            Documentos
          </span>
          <br />
          <span className="bg-linear-to-r from-emerald-400 via-green-400 to-amber-300 bg-clip-text text-transparent">
            Que Transformam
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mx-auto mb-10 max-w-2xl text-base leading-relaxed font-light text-zinc-300 md:text-xl"
        >
          Manifestos, pesquisas, guias e documentos jurídicos que fundamentam
          nossa luta. Conhecimento livre para desconstruir o proibicionismo e
          construir alternativas.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Button
            asChild
            size="lg"
            className="group relative h-auto overflow-hidden rounded-full bg-linear-to-r from-emerald-600 to-green-600 px-12 py-6 text-sm font-bold tracking-widest uppercase shadow-2xl shadow-emerald-600/30 transition-all hover:scale-105 hover:shadow-emerald-600/50"
          >
            <Link href="#biblioteca">
              <span className="relative z-10 flex items-center">
                Explorar Biblioteca
                <ArrowUpRight className="ml-3 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1.5 group-hover:rotate-45" />
              </span>
            </Link>
          </Button>

          <Button
            asChild
            variant="outline"
            className="group relative h-auto overflow-hidden rounded-full border-white/20 bg-white/5 px-12 py-6 text-sm font-bold tracking-widest text-white uppercase backdrop-blur-sm transition-all hover:bg-white/10 hover:shadow-lg"
          >
            <Link href="#destaque">
              <span className="relative z-10 flex items-center">
                Documento em Destaque
                <FileText className="ml-3 h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
              </span>
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

export function DestaqueDocumento() {
  const documentoDestaque = {
    id: "manifesto-2024",
    titulo: "Manifesto 2024: Bolando o Futuro",
    descricao:
      "Documento político da Marcha da Maconha BH para 2024. Apresenta nossa análise de conjuntura e propostas para a regulamentação democrática da cannabis. Inclui dados sobre impactos do proibicionismo em MG e caminhos para reparação histórica.",
    categoria: "manifestos",
    data: "Maio 2024",
    paginas: 12,
    tamanho: "2.4 MB",
    downloads: 1247,
    visualizacoes: 3842,
    cor: "bg-linear-to-r from-emerald-600 to-green-600",
    destaque: true,
  };

  return (
    <div className="relative py-24">
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-emerald-50/20 to-transparent dark:via-emerald-900/10" />

      <div className="relative container mx-auto px-4">
        <div className="mb-12">
          <div className="mb-6 inline-flex items-center gap-3">
            <Flame className="h-6 w-6 text-emerald-600" />
            <span className="text-xs font-bold tracking-wider text-emerald-700 uppercase dark:text-emerald-300">
              Em Destaque
            </span>
          </div>

          <h2 className="mb-6 text-5xl leading-tight font-black">
            <span className="text-zinc-900 dark:text-white">Leitura</span>
            <br />
            <span className="bg-linear-to-r from-emerald-600 to-green-500 bg-clip-text text-transparent">
              Obrigatória
            </span>
          </h2>
        </div>

        <div className="grid items-start gap-12 lg:grid-cols-2">
          {/* Card Principal do Destaque */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-2xl bg-linear-to-br from-white to-emerald-50 shadow-2xl dark:from-zinc-800 dark:to-emerald-900/20"
          >
            {/* Cabeçalio com gradiente */}
            <div
              className={`${documentoDestaque.cor} px-8 py-12 text-center text-white`}
            >
              <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
                <FileText className="h-10 w-10" />
              </div>
              <h3 className="mb-3 text-3xl font-bold">
                {documentoDestaque.titulo}
              </h3>
              <div className="flex items-center justify-center gap-4 text-sm">
                <span className="flex items-center gap-2">
                  <Calendar size={14} />
                  {documentoDestaque.data}
                </span>
                <span>•</span>
                <span>{documentoDestaque.paginas} páginas</span>
                <span>•</span>
                <span>{documentoDestaque.tamanho}</span>
              </div>
            </div>

            {/* Conteúdo */}
            <div className="p-8">
              <p className="mb-8 text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
                {documentoDestaque.descricao}
              </p>

              {/* Estatísticas */}
              <div className="mb-8 grid grid-cols-2 gap-4">
                <div className="rounded-xl bg-emerald-50 p-4 text-center dark:bg-emerald-900/30">
                  <div className="mb-2 text-2xl font-bold text-emerald-700 dark:text-emerald-300">
                    {documentoDestaque.downloads.toLocaleString()}
                  </div>
                  <div className="text-xs font-bold tracking-wider text-emerald-600 uppercase dark:text-emerald-400">
                    Downloads
                  </div>
                </div>
                <div className="rounded-xl bg-emerald-50 p-4 text-center dark:bg-emerald-900/30">
                  <div className="mb-2 text-2xl font-bold text-emerald-700 dark:text-emerald-300">
                    {documentoDestaque.visualizacoes.toLocaleString()}
                  </div>
                  <div className="text-xs font-bold tracking-wider text-emerald-600 uppercase dark:text-emerald-400">
                    Visualizações
                  </div>
                </div>
              </div>

              {/* Ações */}
              <div className="flex flex-col gap-4 sm:flex-row">
                <Button
                  asChild
                  className="flex-1 rounded-xl bg-linear-to-r from-emerald-600 to-green-600 py-6 text-sm font-bold uppercase"
                >
                  <Link href={`/documentos/${documentoDestaque.id}.pdf`}>
                    <Download className="mr-3 h-5 w-5" />
                    Baixar PDF
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  className="flex-1 rounded-xl border-emerald-200 py-6 text-sm font-bold uppercase hover:bg-emerald-50 dark:border-emerald-800"
                >
                  <Eye className="mr-3 h-5 w-5" />
                  Ler Online
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Informações Complementares */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="space-y-8"
          >
            <div className="rounded-2xl border border-emerald-100 bg-white p-8 dark:border-emerald-800 dark:bg-zinc-800">
              <h4 className="mb-6 text-xl font-bold text-zinc-900 dark:text-white">
                Por que este documento é importante?
              </h4>
              <ul className="space-y-4">
                {[
                  "Sintetiza 17 anos de experiência do movimento",
                  "Oferece dados inéditos sobre Minas Gerais",
                  "Apresenta propostas concretas para políticas públicas",
                  "Serve como referência para outros coletivos",
                  "Educa sobre a complexidade do tema",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="mt-1 h-2 w-2 rounded-full bg-emerald-500" />
                    <span className="text-zinc-700 dark:text-zinc-300">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-emerald-100 bg-linear-to-br from-emerald-50 to-white p-8 dark:border-emerald-800 dark:from-emerald-900/20 dark:to-zinc-800">
              <h4 className="mb-6 flex items-center gap-3 text-xl font-bold text-zinc-900 dark:text-white">
                <Share2 className="h-6 w-6 text-emerald-600" />
                Compartilhe nas Redes
              </h4>
              <p className="mb-6 text-zinc-700 dark:text-zinc-300">
                Ajude a amplificar este documento. Compartilhe com amigos,
                coletivos, pesquisadores e formuladores de políticas públicas.
              </p>
              <div className="flex gap-4">
                <Button
                  variant="outline"
                  className="flex-1 rounded-xl border-emerald-200 text-sm font-bold uppercase hover:bg-emerald-50 dark:border-emerald-800"
                >
                  Twitter
                </Button>
                <Button
                  variant="outline"
                  className="flex-1 rounded-xl border-emerald-200 text-sm font-bold uppercase hover:bg-emerald-50 dark:border-emerald-800"
                >
                  Instagram
                </Button>
              </div>
            </div>

            <div className="rounded-2xl bg-linear-to-r from-emerald-600 to-green-600 p-8 text-white">
              <h4 className="mb-4 text-xl font-bold">Versão Impressa</h4>
              <p className="mb-6 text-emerald-100">
                Disponibilizamos cópias impressas para eventos, formações e
                bibliotecas comunitárias.
              </p>
              <Button
                variant="outline"
                className="w-full rounded-xl border-white/30 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20"
              >
                <ArrowUpRight className="mr-3 h-5 w-5" />
                Solicitar Impressos
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

interface CategoriasDocumentosProps {
  categoriaAtiva: string;
  setCategoriaAtiva: (categoria: string) => void;
}

export function CategoriasDocumentos({
  categoriaAtiva,
  setCategoriaAtiva,
}: CategoriasDocumentosProps) {
  return (
    <div className="relative py-24">
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-zinc-50 to-transparent dark:via-zinc-900" />

      <div className="relative container mx-auto px-4">
        <div className="mb-16 text-center">
          <div className="mb-6 inline-flex items-center gap-3">
            <span className="text-xs font-bold tracking-wider text-emerald-700 uppercase dark:text-emerald-300">
              Navegue por Categoria
            </span>
          </div>

          <h2 className="mb-6 text-5xl leading-tight font-black">
            <span className="text-zinc-900 dark:text-white">Conhecimento</span>
            <br />
            <span className="bg-linear-to-r from-emerald-600 to-green-500 bg-clip-text text-transparent">
              Organizado
            </span>
          </h2>

          <p className="mx-auto max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
            Filtre os documentos por tipo e encontre exatamente o que precisa
            para sua pesquisa, atuação ou formação.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            {
              id: "todos",
              nome: "Todos",
              descricao: "Todos os documentos",
              icon: "📚",
              cor: "from-emerald-500 to-green-500",
            },
            ...documentosData.categorias,
          ].map((categoria, index) => (
            <motion.button
              key={categoria.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setCategoriaAtiva(categoria.id)}
              className={`group relative overflow-hidden rounded-2xl p-8 text-left transition-all ${
                categoriaAtiva === categoria.id
                  ? "bg-linear-to-br from-emerald-100 to-white shadow-2xl dark:from-emerald-900/30 dark:to-zinc-800"
                  : "bg-white shadow-xl hover:shadow-2xl dark:bg-zinc-800"
              }`}
            >
              <div className="relative z-10">
                <div className="mb-6">
                  <div
                    className={`inline-flex rounded-2xl bg-linear-to-br ${categoria.cor} p-4 text-2xl ${
                      categoriaAtiva === categoria.id
                        ? "text-white"
                        : "text-white"
                    }`}
                  >
                    {categoria.icon}
                  </div>
                </div>

                <h3 className="mb-3 text-xl font-bold text-zinc-900 dark:text-white">
                  {categoria.nome}
                </h3>

                <p className="text-sm text-zinc-600 dark:text-zinc-400">
                  {categoria.descricao}
                </p>

                {categoriaAtiva === categoria.id && (
                  <div className="mt-6 flex items-center justify-between">
                    <span className="text-xs font-bold tracking-wider text-emerald-600 uppercase dark:text-emerald-400">
                      Selecionado
                    </span>
                    <div className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
                  </div>
                )}
              </div>

              {/* Indicador de seleção */}
              {categoriaAtiva === categoria.id && (
                <div className="absolute right-0 bottom-0 left-0 h-1 bg-linear-to-r from-emerald-500 to-green-500" />
              )}
            </motion.button>
          ))}
        </div>
      </div>
    </div>
  );
}

interface BibliotecaDigitalProps {
  categoriaAtiva: string;
}

export function BibliotecaDigital({ categoriaAtiva }: BibliotecaDigitalProps) {
  const [busca, setBusca] = useState("");
  const [ordenacao, setOrdenacao] = useState("recentes");

  // Filtrar documentos
  const documentosFiltrados = documentosData.documentos.filter((doc) => {
    const categoriaMatch =
      categoriaAtiva === "todos" || doc.categoria === categoriaAtiva;
    const buscaMatch =
      doc.titulo.toLowerCase().includes(busca.toLowerCase()) ||
      doc.descricao.toLowerCase().includes(busca.toLowerCase());
    return categoriaMatch && buscaMatch;
  });

  // Ordenar documentos
  const documentosOrdenados = [...documentosFiltrados].sort((a, b) => {
    if (ordenacao === "recentes") {
      // Simulação de ordenação por data
      return new Date(b.data).getTime() - new Date(a.data).getTime();
    }
    if (ordenacao === "populares") {
      // Simulação de popularidade (destaque primeiro)
      if (a.destaque && !b.destaque) return -1;
      if (!a.destaque && b.destaque) return 1;
      return 0;
    }
    return 0;
  });

  return (
    <div className="relative py-24">
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-emerald-50/20 to-transparent dark:via-emerald-900/10" />

      <div className="relative container mx-auto px-4">
        <div className="mb-12">
          <div className="mb-6 flex items-center gap-3">
            <FileText className="h-6 w-6 text-emerald-600" />
            <span className="text-xs font-bold tracking-wider text-emerald-700 uppercase dark:text-emerald-300">
              Acervo Completo
            </span>
          </div>

          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div>
              <h2 className="mb-6 text-5xl leading-tight font-black">
                <span className="text-zinc-900 dark:text-white">
                  Biblioteca
                </span>
                <br />
                <span className="bg-linear-to-r from-emerald-600 to-green-500 bg-clip-text text-transparent">
                  Digital
                </span>
              </h2>
              <p className="text-lg text-zinc-600 dark:text-zinc-400">
                {documentosOrdenados.length} documentos disponíveis para
                download gratuito
              </p>
            </div>

            {/* Filtros e Busca */}
            <div className="flex flex-col gap-4 sm:flex-row">
              <div className="relative">
                <Search className="absolute top-1/2 left-4 h-5 w-5 -translate-y-1/2 text-zinc-400" />
                <input
                  type="text"
                  placeholder="Buscar documentos..."
                  value={busca}
                  onChange={(e) => setBusca(e.target.value)}
                  className="w-full rounded-xl border border-zinc-200 bg-white py-3 pr-4 pl-12 placeholder:text-zinc-400 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 focus:outline-none sm:w-64 dark:border-zinc-700 dark:bg-zinc-800"
                />
              </div>
              <select
                value={ordenacao}
                onChange={(e) => setOrdenacao(e.target.value)}
                className="rounded-xl border border-zinc-200 bg-white py-3 pr-10 pl-4 text-sm focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 focus:outline-none dark:border-zinc-700 dark:bg-zinc-800"
              >
                <option value="recentes">Mais recentes</option>
                <option value="populares">Mais populares</option>
              </select>
            </div>
          </div>
        </div>

        {/* Grid de Documentos */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {documentosOrdenados.map((doc, index) => (
            <motion.article
              key={doc.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group flex cursor-pointer flex-col overflow-hidden rounded-2xl bg-white shadow-xl transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl dark:bg-zinc-800"
            >
              {/* Cabeçalho com gradiente */}
              <div className={`${doc.cor} px-6 py-8 text-white`}>
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <FileText className="h-5 w-5" />
                    <span className="text-xs font-bold tracking-wider uppercase">
                      {doc.tamanho}
                    </span>
                  </div>
                  {doc.destaque && (
                    <span className="rounded-full bg-white/20 px-3 py-1 text-[10px] font-bold tracking-wider uppercase backdrop-blur-sm">
                      Destaque
                    </span>
                  )}
                </div>
                <h3 className="mb-2 text-xl font-bold">{doc.titulo}</h3>
                <div className="flex items-center gap-4 text-sm opacity-90">
                  <span className="flex items-center gap-2">
                    <Calendar size={12} />
                    {doc.data}
                  </span>
                  <span>•</span>
                  <span>{doc.paginas} páginas</span>
                </div>
              </div>

              {/* Conteúdo do Card */}
              <div className="flex flex-1 flex-col p-6">
                <p className="mb-6 line-clamp-3 text-zinc-700 dark:text-zinc-300">
                  {doc.descricao}
                </p>

                {/* Categoria */}
                <div className="mb-6">
                  <span className="inline-flex items-center rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold tracking-wider text-emerald-700 uppercase dark:bg-emerald-900/50 dark:text-emerald-300">
                    {
                      documentosData.categorias.find(
                        (c) => c.id === doc.categoria,
                      )?.nome
                    }
                  </span>
                </div>

                {/* Rodapé com ações */}
                <div className="mt-auto flex items-center justify-between border-t border-zinc-200 pt-6 dark:border-zinc-700">
                  <div className="flex gap-4">
                    <button
                      className="text-emerald-600 hover:text-emerald-700 dark:text-emerald-400"
                      onClick={(e) => {
                        e.stopPropagation();
                        // Ação de download
                      }}
                      title="Download"
                    >
                      <Download size={18} />
                    </button>
                    <button
                      className="text-emerald-600 hover:text-emerald-700 dark:text-emerald-400"
                      onClick={(e) => {
                        e.stopPropagation();
                        // Ação de visualizar
                      }}
                      title="Visualizar"
                    >
                      <Eye size={18} />
                    </button>
                  </div>
                  <div className="flex items-center gap-2 text-sm font-bold text-emerald-600 transition-all group-hover:gap-4 dark:text-emerald-400">
                    Detalhes{" "}
                    <ArrowRight
                      size={14}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {documentosOrdenados.length === 0 && (
          <div className="py-20 text-center">
            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-900/30">
              <Search className="h-10 w-10 text-emerald-600" />
            </div>
            <h3 className="mb-3 text-2xl font-bold text-zinc-900 dark:text-white">
              Nenhum documento encontrado
            </h3>
            <p className="text-zinc-600 dark:text-zinc-400">
              Tente ajustar sua busca ou selecione outra categoria
            </p>
          </div>
        )}

        {/* Paginação (simulada) */}
        {documentosOrdenados.length > 0 && (
          <div className="mt-12 flex items-center justify-between">
            <div className="text-sm text-zinc-600 dark:text-zinc-400">
              Mostrando {documentosOrdenados.length} de{" "}
              {documentosData.documentos.length} documentos
            </div>
            <div className="flex gap-2">
              <Button
                variant="outline"
                className="rounded-xl border-zinc-200 px-6 dark:border-zinc-700"
                disabled
              >
                Anterior
              </Button>
              <Button className="rounded-xl bg-linear-to-r from-emerald-600 to-green-600 px-6">
                Próxima
              </Button>
            </div>
          </div>
        )}

        {/* Acesso a mais documentos */}
        <div className="mt-16 rounded-2xl bg-linear-to-br from-emerald-50 to-white p-8 text-center dark:from-emerald-900/20 dark:to-zinc-800">
          <h3 className="mb-4 text-2xl font-bold text-zinc-900 dark:text-white">
            Precisa de documentos específicos?
          </h3>
          <p className="mx-auto mb-8 max-w-2xl text-zinc-700 dark:text-zinc-300">
            Temos mais documentos em nosso acervo físico e podemos ajudar na
            busca por materiais específicos para pesquisas acadêmicas ou ações
            jurídicas.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button className="rounded-xl bg-linear-to-r from-emerald-600 to-green-600 px-8 py-6">
              Solicitar Ajuda na Pesquisa
            </Button>
            <Button
              variant="outline"
              className="rounded-xl border-emerald-200 px-8 py-6 hover:bg-emerald-50 dark:border-emerald-800"
            >
              Acessar Acervo Completo
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
