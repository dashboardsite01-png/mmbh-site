"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  ChevronRight,
  FileText,
  Gavel,
  Globe,
  HeartHandshake,
  Leaf,
  Scale,
  Shield,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  Target,
  Users,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { blogData } from "../blog/data/blog-data";

// --- HERO SECTION ---
export function Hero() {
  return (
    <section className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-linear-to-br from-zinc-900 via-zinc-900 to-emerald-950 pt-30 pb-12">
      {/* Background com overlay sofisticado */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/6.jpg"
          fill
          className="object-cover object-center"
          alt="Marcha da Maconha BH na Praça da Estação"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-linear-to-t from-zinc-900 via-zinc-900/70 to-transparent" />
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
            17 Anos de Resistência
          </span>
          <Sparkles className="h-4 w-4 text-emerald-400" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-6 text-4xl leading-[1.1] font-black tracking-tight md:text-8xl"
        >
          <span className="bg-linear-to-r from-white via-emerald-100 to-emerald-300 bg-clip-text text-transparent">
            Plantando para
          </span>
          <br />
          <span className="bg-linear-to-r from-emerald-400 via-green-400 to-amber-300 bg-clip-text text-transparent">
            Reparar Vidas.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mx-auto mb-10 max-w-2xl text-base leading-relaxed font-light text-zinc-300 md:text-xl"
        >
          Contra o racismo estrutural e o encarceramento em massa. Pela
          regulamentação democrática e o direito ao autocultivo.
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
            <Link href="#acolhimento">
              <span className="relative z-10 flex items-center">
                Preciso de Apoio
                <ArrowUpRight className="ml-3 size-5 transition-transform duration-300 group-hover:translate-x-1.5 group-hover:rotate-45" />
              </span>
            </Link>
          </Button>

          <Button
            asChild
            variant="outline"
            className="group relative h-auto overflow-hidden rounded-full border-white/20 bg-white/5 px-12 py-6 text-sm font-bold tracking-widest text-white uppercase backdrop-blur-sm transition-all hover:bg-white/10 hover:shadow-lg"
          >
            <Link
              href="https://instagram.com/marchadamaconhabh"
              target="_blank"
            >
              <span className="relative z-10 flex items-center">
                Preciso de Apoio
                <ChevronRight className="ml-3 size-5 transition-transform duration-300 group-hover:translate-x-2" />
              </span>
            </Link>
          </Button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 lg:block"
      >
        <div className="h-10 w-px bg-linear-to-b from-emerald-400/50 to-transparent" />
      </motion.div>
    </section>
  );
}

// --- QUEM SOMOS ---
export function SobreNos() {
  return (
    <div id="sobre" className="relative py-24">
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-zinc-50 to-transparent dark:via-zinc-900" />
      <div className="relative grid items-center gap-16 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative aspect-square overflow-hidden rounded-[2rem] shadow-2xl"
        >
          <Image
            src="/images/3.jpg"
            fill
            className="object-cover object-center"
            alt="Militantes da Marcha BH"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />
          <div className="absolute bottom-8 left-8">
            <div className="rounded-2xl bg-linear-to-r from-emerald-600/90 to-green-600/90 p-6 backdrop-blur-sm">
              <div className="flex items-end gap-3">
                <p className="text-4xl font-black text-white italic">BH</p>
                <div className="mb-1 h-px flex-1 bg-white/30" />
                <p className="text-xs font-bold tracking-tighter text-white/80 uppercase">
                  Desde 2008
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          <div className="mb-6 inline-flex items-center gap-3 rounded-full bg-emerald-50 px-4 py-2 dark:bg-emerald-900/30">
            <Users className="h-4 w-4 text-emerald-600" />
            <span className="text-xs font-bold tracking-wider text-emerald-700 uppercase dark:text-emerald-300">
              Movimento Social Independente
            </span>
          </div>
          <h2 className="mb-8 text-5xl leading-tight font-black tracking-tight">
            A Nossa{" "}
            <span className="bg-linear-to-r from-emerald-600 to-green-500 bg-clip-text text-transparent">
              Luta
            </span>
          </h2>
          <p className="mb-8 text-lg leading-relaxed text-zinc-600 dark:text-zinc-300">
            A Marcha da Maconha BH é um coletivo horizontal que há quase duas
            décadas ocupa o centro da capital mineira. Não marchamos apenas pela
            planta, marchamos pelo fim da guerra às pessoas negras e
            periféricas.
          </p>

          <div className="space-y-6">
            <div className="flex items-start gap-5">
              <div className="rounded-xl bg-linear-to-br from-emerald-500 to-green-500 p-3 shadow-lg">
                <Scale className="h-6 w-6 text-white" />
              </div>
              <div>
                <h4 className="mb-2 text-lg font-bold">Reparação Histórica</h4>
                <p className="text-zinc-600 dark:text-zinc-400">
                  Pela reparação dos danos causados pelo proibicionismo às
                  comunidades marginalizadas.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-5">
              <div className="rounded-xl bg-linear-to-br from-emerald-500 to-green-500 p-3 shadow-lg">
                <Leaf className="h-6 w-6 text-white" />
              </div>
              <div>
                <h4 className="mb-2 text-lg font-bold">Acesso Universal</h4>
                <p className="text-zinc-600 dark:text-zinc-400">
                  Pelo acesso gratuito à cannabis medicinal via SUS para todas
                  as pessoas.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

// --- CARTA DE PRINCÍPIOS ---
export function CartaPrincipios() {
  return (
    <div className="relative overflow-hidden rounded-[2rem] bg-linear-to-br from-zinc-900 to-zinc-950 p-8 shadow-2xl md:p-16">
      {/* Elementos de fundo decorativos */}
      <div className="absolute top-0 right-0 h-64 w-64 translate-x-32 -translate-y-32 rounded-full bg-linear-to-r from-emerald-500/10 to-green-500/10 blur-3xl" />
      <div className="absolute bottom-0 left-0 h-64 w-64 -translate-x-32 translate-y-32 rounded-full bg-linear-to-r from-emerald-500/5 to-green-500/5 blur-3xl" />

      <div className="relative z-10 max-w-3xl">
        <div className="mb-8 flex items-center gap-4">
          <div className="h-px w-16 bg-linear-to-r from-emerald-500 to-transparent" />
          <span className="text-sm font-bold tracking-widest text-emerald-400 uppercase">
            Documento Político Oficial
          </span>
        </div>

        <h2 className="mb-8 text-4xl leading-tight font-black md:text-6xl">
          <span className="block text-white">Carta de</span>
          <span className="bg-linear-to-r from-emerald-400 via-green-400 to-amber-300 bg-clip-text text-transparent">
            Princípios MMBH
          </span>
        </h2>

        <p className="mb-12 text-lg leading-relaxed text-zinc-300">
          Nosso guia ético para a construção de um futuro sem guerra. Defendemos
          a autonomia do corpo, a redução de danos como política pública e o fim
          do modelo manicomial.
        </p>

        <Button
          asChild
          className="group relative h-auto overflow-hidden rounded-full bg-linear-to-r from-emerald-600 to-green-600 px-12 py-7 text-sm font-bold tracking-widest uppercase shadow-2xl shadow-emerald-600/30 transition-all hover:scale-105 hover:shadow-emerald-600/50"
        >
          <Link href="/documentos/carta-de-principios-mmbh.pdf" target="_blank">
            <span className="relative z-10 flex items-center">
              Baixar Manifesto Completo
              <ArrowUpRight className="ml-3 size-5 transition-transform duration-300 group-hover:translate-x-1.5 group-hover:rotate-45" />
            </span>
          </Link>
        </Button>
      </div>

      {/* Elemento decorativo */}
      <div className="pointer-events-none absolute -right-10 -bottom-15 text-[30rem] font-black text-white/5 italic select-none">
        MM
      </div>
    </div>
  );
}

// --- ACOLHIMENTO ---
export function Acolhimento() {
  const servicos = [
    {
      icon: <Gavel className="h-6 w-6" />,
      title: "Jurídico",
      desc: "Suporte para HC de cultivo e defesa criminal especializada.",
      color: "from-emerald-500 to-green-500",
    },
    {
      icon: <Stethoscope className="h-6 w-6" />,
      title: "Saúde",
      desc: "Rede de médicos e prescritores acolhedores e informados.",
      color: "from-emerald-500 to-green-500",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Psicologia",
      desc: "Atendimento focado em redução de danos e cuidado integral.",
      color: "from-emerald-500 to-green-500",
    },
  ];

  return (
    <div id="acolhimento" className="py-24">
      <div className="grid items-stretch gap-8 lg:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-[2rem] bg-linear-to-br from-zinc-900 to-zinc-950 p-8 md:p-12 lg:col-span-7"
        >
          <div className="absolute top-0 right-0 h-32 w-32 translate-x-16 -translate-y-16 rounded-full bg-emerald-500/10 blur-3xl" />

          <HeartHandshake className="absolute right-8 bottom-8 h-32 w-32 text-emerald-500/10" />

          <div className="relative z-10">
            <div className="mb-6 flex items-center gap-3">
              <Shield className="h-5 w-5 text-emerald-400" />
              <span className="text-sm font-bold tracking-wider text-emerald-400 uppercase">
                Rede de Apoio
              </span>
            </div>

            <h2 className="mb-6 text-4xl leading-tight font-black text-white md:text-5xl">
              Você não está
              <br />
              <span className="bg-linear-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent">
                sozinho.
              </span>
            </h2>

            <p className="mb-10 text-lg leading-relaxed text-zinc-400">
              Se você sofreu violência policial, enfrenta processos por cultivo
              ou busca tratamento médico canábico, nossa rede de acolhimento
              oferece suporte ético, antiproibicionista e humanizado.
            </p>

            <div className="flex flex-wrap items-center gap-6">
              <Button
                asChild
                className="group h-auto rounded-full bg-linear-to-r from-emerald-600 to-green-600 px-10 py-6 text-sm font-bold tracking-widest uppercase shadow-xl transition-all hover:scale-105"
              >
                <Link href="https://docs.google.com/forms/e/1FAIpQLScgXrcp9De-vbgagN1FxKvlUZe3HbQZv8EnWual2sfrcCC3kg">
                  <span className="flex items-center">
                    Solicitar Apoio Agora
                    <ArrowUpRight className="ml-3 size-5 transition-transform duration-300 group-hover:translate-x-1.5 group-hover:rotate-45" />
                  </span>
                </Link>
              </Button>

              <div className="flex items-center gap-3">
                <ShieldCheck className="h-5 w-5 text-emerald-500" />
                <span className="text-xs font-bold tracking-wider text-zinc-500 uppercase">
                  Sigilo Absoluto • LGPD • Ético
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid gap-6 lg:col-span-5">
          {servicos.map((servico, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-[1.5rem] bg-white p-8 shadow-xl transition-all hover:shadow-2xl dark:bg-zinc-800"
            >
              <div
                className={`absolute inset-0 bg-linear-to-br ${servico.color} opacity-0 transition-opacity group-hover:opacity-10`}
              />

              <div className="relative z-10">
                <div
                  className={`mb-6 inline-flex rounded-2xl bg-linear-to-br text-white ${servico.color} p-4 shadow-lg`}
                >
                  {servico.icon}
                </div>

                <h3 className="mb-3 text-xl font-bold text-zinc-900 dark:text-white">
                  {servico.title}
                </h3>

                <p className="text-zinc-600 dark:text-zinc-400">
                  {servico.desc}
                </p>

                <div className="mt-6 flex items-center gap-2">
                  <span className="text-xs font-bold tracking-wider text-zinc-500 uppercase">
                    Saiba mais
                  </span>
                  <ChevronRight className="h-4 w-4 text-zinc-500 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

// --- DOCUMENTOS ---
export function Documentos() {
  const docs = [
    {
      title: "Manifesto 2024: Bolando o Futuro",
      date: "Maio 2024",
      category: "Manifesto",
      color: "bg-linear-to-r from-emerald-500 to-green-500",
    },
    {
      title: "Dossiê: Racismo e Proibicionismo em MG",
      date: "Nov 2023",
      category: "Pesquisa",
      color: "bg-linear-to-r from-emerald-500 to-green-500",
    },
    {
      title: "Guia de Redução de Danos",
      date: "Jan 2024",
      category: "Educativo",
      color: "bg-linear-to-r from-emerald-500 to-green-500",
    },
  ];

  return (
    <div id="documentos" className="py-24">
      <div className="mb-16">
        <div className="mb-4 flex items-center gap-3">
          <FileText className="h-6 w-6 text-emerald-500" />
          <span className="text-sm font-bold tracking-wider text-emerald-600 uppercase dark:text-emerald-400">
            Biblioteca Digital
          </span>
        </div>
        <h2 className="mb-6 text-5xl leading-tight font-black">
          <span className="text-zinc-900 dark:text-white">Conhecimento</span>
          <br />
          <span className="bg-linear-to-r from-emerald-600 to-green-500 bg-clip-text text-transparent">
            que Transforma
          </span>
        </h2>
        <p className="text-lg text-zinc-600 dark:text-zinc-400">
          Arquivos históricos, manifestos e guias informativos para formação
          política.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {docs.map((doc, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group relative overflow-hidden rounded-[1.5rem] bg-white p-8 shadow-xl transition-all hover:shadow-2xl dark:bg-zinc-800"
          >
            <div className="absolute top-0 right-0 h-24 w-24 translate-x-12 -translate-y-12 rounded-full bg-linear-to-r from-emerald-500/10 to-green-500/10" />

            <div className="relative z-10">
              <div className="mb-8">
                <span
                  className={`inline-flex rounded-full px-4 py-2 text-xs font-bold tracking-wider text-white uppercase ${doc.color}`}
                >
                  {doc.category}
                </span>
                <span className="ml-4 text-xs font-medium tracking-wider text-zinc-500 uppercase">
                  {doc.date}
                </span>
              </div>

              <h3 className="mb-4 text-xl font-bold text-zinc-900 transition-colors group-hover:text-emerald-600 dark:text-white">
                {doc.title}
              </h3>

              <Button
                variant="outline"
                className="group mt-6 w-full rounded-2xl border-zinc-300 font-bold transition-all hover:border-emerald-500 hover:bg-emerald-50 hover:text-emerald-600 dark:border-zinc-700 dark:hover:bg-emerald-900/20"
                asChild
              >
                <Link
                  href={`/docs/${doc.title.toLowerCase().replace(/\s+/g, "-")}.pdf`}
                >
                  <span className="flex items-center justify-center">
                    Baixar PDF
                    <ArrowUpRight className="ml-3 size-4 transition-transform duration-300 group-hover:translate-x-1.5 group-hover:rotate-45" />
                  </span>
                </Link>
              </Button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

// --- AÇÕES RÁPIDAS / PARTICIPE ---
export function AcoesRapidas() {
  const acoes = [
    {
      title: "Grupo de Trabalho",
      desc: "Participe das reuniões semanais de construção coletiva da Marcha.",
      link: "https://docs.google.com/forms/d/1R4lbFTpLb0erUYakmFHGSbud9Qc0IeQuBkHshZtTALs",
      icon: <Users className="h-6 w-6" />,
      color: "from-emerald-500 to-green-500",
    },
    {
      title: "Comunicação",
      desc: "Ajude na criação de conteúdo, mídias sociais e design gráfico.",
      link: "https://instagram.com/marchadamaconhabh",
      icon: <Globe className="h-6 w-6" />,
      color: "from-emerald-500 to-green-500",
    },
    {
      title: "Jurídico Popular",
      desc: "Integre nossa rede de apoio aos perseguidos pela guerra às drogas.",
      link: "#",
      icon: <Scale className="h-6 w-6" />,
      color: "from-emerald-500 to-green-500",
    },
    {
      title: "Redução de Danos",
      desc: "Atue na distribuição de insumos e educação sobre uso seguro.",
      link: "#",
      icon: <Target className="h-6 w-6" />,
      color: "from-emerald-500 to-green-500",
    },
  ];

  return (
    <div className="py-24">
      <div className="mb-16">
        <div className="mb-6 inline-flex items-center gap-3 rounded-full bg-emerald-50 px-4 py-2 dark:bg-emerald-900/30">
          <Leaf className="h-4 w-4 text-emerald-600" />
          <span className="text-xs font-bold tracking-wider text-emerald-700 uppercase dark:text-emerald-300">
            Engajamento Coletivo
          </span>
        </div>

        <h2 className="mb-6 text-5xl leading-tight font-black">
          Faça parte da
          <br />
          <span className="bg-linear-to-r from-emerald-600 to-green-500 bg-clip-text text-transparent">
            Transformação
          </span>
        </h2>

        <p className="text-lg text-zinc-600 dark:text-zinc-400">
          A Marcha é construída diariamente por voluntários. Escolha sua forma
          de somar forças.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {acoes.map((acao, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <Link href={acao.link} target="_blank" className="group block">
              <div className="relative overflow-hidden rounded-[1.5rem] bg-white p-8 shadow-xl transition-all hover:shadow-2xl dark:bg-zinc-800">
                <div
                  className={`absolute inset-0 bg-linear-to-br ${acao.color} opacity-0 transition-opacity group-hover:opacity-10`}
                />

                <div className="relative z-10">
                  <div
                    className={`mb-8 inline-flex rounded-2xl bg-linear-to-br text-white ${acao.color} p-4 shadow-lg`}
                  >
                    {acao.icon}
                  </div>

                  <h3 className="mb-4 text-xl font-bold text-zinc-900 dark:text-white">
                    {acao.title}
                  </h3>

                  <p className="mb-8 text-zinc-600 dark:text-zinc-400">
                    {acao.desc}
                  </p>

                  <div className="flex items-center gap-3">
                    <span className="text-sm font-bold tracking-wider text-emerald-600 uppercase dark:text-emerald-400">
                      Participar
                    </span>
                    <ArrowUpRight className="ml-3 size-5 text-emerald-600 transition-transform duration-300 group-hover:translate-x-1.5 group-hover:rotate-45" />
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

// --- LOJA ---
export function Loja() {
  const produtos = [
    {
      name: "Camiseta MMBH 2024",
      price: "R$ 69,90",
      tag: "Mais Vendido",
      color: "bg-linear-to-r from-emerald-500 to-green-500",
    },
    {
      name: "Seda Colecionável",
      price: "R$ 15,00",
      tag: "Ecológico",
      color: "bg-linear-to-r from-blue-500 to-cyan-500",
    },
    {
      name: "Copo Ecológico",
      price: "R$ 24,90",
      tag: "Sustentável",
      color: "bg-linear-to-r from-amber-500 to-orange-500",
    },
    {
      name: "Pack Adesivos",
      price: "R$ 12,00",
      tag: "Novidade",
      color: "bg-linear-to-r from-purple-500 to-pink-500",
    },
  ];

  return (
    <div className="relative overflow-hidden rounded-[2rem] bg-linear-to-br from-zinc-900 to-zinc-950 p-8 md:p-16">
      <div className="absolute top-0 right-0 h-64 w-64 translate-x-32 -translate-y-32 rounded-full bg-linear-to-r from-emerald-500/10 to-green-500/10 blur-3xl" />

      <div className="relative z-10">
        <div className="mb-12 flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="text-sm font-bold tracking-wider text-emerald-400 uppercase">
                Apoie o Movimento
              </span>
            </div>

            <h2 className="mb-6 text-5xl leading-tight font-black">
              <span className="text-white">Fortaleça a</span>
              <br />
              <span className="bg-linear-to-r from-emerald-400 via-green-400 to-amber-300 bg-clip-text text-transparent">
                Revolução Verde
              </span>
            </h2>

            <p className="max-w-2xl text-lg text-zinc-400">
              Todo o lucro é revertido para a realização dos atos, materiais de
              redução de danos e apoio jurídico aos perseguidos pela guerra às
              drogas.
            </p>
          </div>

          <Button
            asChild
            className="group h-auto rounded-full bg-linear-to-r from-emerald-600 to-green-600 px-10 py-6 text-sm font-bold tracking-widest uppercase shadow-xl transition-all hover:scale-105"
          >
            <Link href="/loja">
              <span className="flex items-center">
                Ver Loja Completa
                <ArrowUpRight className="ml-3 size-4 transition-transform duration-300 group-hover:translate-x-1.5 group-hover:rotate-45" />
              </span>
            </Link>
          </Button>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {produtos.map((produto, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="relative mb-6 overflow-hidden rounded-[2rem] bg-zinc-800/50">
                <div className="aspect-3/4">
                  <div className="flex h-full items-center justify-center">
                    <div className="text-center">
                      <div className="mx-auto mb-4 h-12 w-12 rounded-full bg-linear-to-r from-emerald-500/20 to-green-500/20" />
                      <p className="text-sm text-zinc-500 italic">
                        Produto {index + 1}
                      </p>
                    </div>
                  </div>
                </div>

                {produto.tag && (
                  <div
                    className={`absolute top-4 left-4 rounded-full px-3 py-1 text-xs font-bold text-white uppercase ${produto.color}`}
                  >
                    {produto.tag}
                  </div>
                )}

                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100">
                  <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent" />
                  <Button className="relative z-10 rounded-2xl bg-linear-to-r from-emerald-600 to-green-600 px-8 py-4 text-sm font-bold uppercase shadow-xl">
                    Comprar Agora
                  </Button>
                </div>
              </div>

              <h3 className="mb-2 text-lg font-bold text-white">
                {produto.name}
              </h3>

              <div className="flex items-center justify-between">
                <p className="text-xl font-bold text-emerald-400">
                  {produto.price}
                </p>
                <span className="text-xs font-medium tracking-wider text-zinc-500 uppercase">
                  Em estoque
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

// --- INSTAGRAM ---
export function InstagramSection() {
  return (
    <div className="py-24">
      <div className="mb-12 text-center">
        <div className="group mb-6 inline-flex items-center gap-3">
          <Link
            href="https://instagram.com/marchadamaconhabh"
            target="_blank"
            className="group mt-8 inline-flex items-center gap-3 text-xl font-bold text-zinc-900 transition-colors hover:text-emerald-600 dark:text-white"
          >
            <div className="rounded-full bg-linear-to-r from-pink-500 to-purple-500 p-3">
              <ArrowUpRight className="size-6 text-white transition-transform duration-500 group-hover:rotate-45" />
            </div>
          </Link>
        </div>

        <h2 className="mb-6 text-5xl leading-tight font-black">
          <span className="text-zinc-900 dark:text-white">Siga nossa</span>
          <br />
          <span className="bg-linear-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
            Revolução nas Redes
          </span>
        </h2>

        <p className="mx-auto max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
          Acompanhe em tempo real as ações, debates e mobilizações do movimento
          antiproibicionista.
        </p>

        <Link
          href="https://instagram.com/marchadamaconhabh"
          target="_blank"
          className="group mt-8 inline-flex items-center gap-3 text-xl font-bold text-zinc-900 transition-colors hover:text-emerald-600 dark:text-white"
        >
          @marchadamaconhabh
          <ArrowUpRight className="size-5 transition-transform duration-300 group-hover:translate-x-1.5 group-hover:rotate-45" />
        </Link>
      </div>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="group relative aspect-square cursor-pointer overflow-hidden rounded-3xl bg-linear-to-br from-zinc-800 to-zinc-900 shadow-lg"
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="mx-auto mb-3 h-8 w-8 rounded-full bg-linear-to-r from-pink-500/20 to-purple-500/20" />
                <p className="text-xs text-zinc-600 italic">Post {i}</p>
              </div>
            </div>

            <div className="absolute inset-0 flex items-center justify-center bg-linear-to-t from-black/80 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100">
              <ArrowUpRight className="size-6 text-white transition-transform duration-300 group-hover:translate-x-1.5 group-hover:rotate-45" />
            </div>
          </motion.div>
        ))}
      </div>

      <p className="mt-12 text-center text-xs font-bold tracking-widest text-zinc-500 uppercase">
        Fotos: Coletivo de Mídia MMBH • Todos os direitos reservados
      </p>
    </div>
  );
}

// --- BLOG SECTION ---
// Importe os ícones necessários se ainda não tiver
import { ArrowRight, Calendar, Clock } from "lucide-react";

// ... resto do código ...

// --- BLOG SECTION ---
export function BlogSection() {
  // Pegar os 3 posts mais recentes
  const recentPosts = blogData.slice(0, 4); // Alterado para 4 posts para o grid de 4 colunas

  return (
    <div id="blog" className="py-24">
      <div className="mb-16">
        <div className="mb-4 flex items-center gap-3">
          <FileText className="h-6 w-6 text-emerald-500" />
          <span className="text-xs font-bold tracking-wider text-emerald-600 uppercase dark:text-emerald-400">
            Notícias & Relatos
          </span>
        </div>
        <h2 className="mb-6 text-5xl leading-tight font-black">
          <span className="text-zinc-900 dark:text-white">Análises &</span>
          <br />
          <span className="bg-linear-to-r from-emerald-600 to-green-500 bg-clip-text text-transparent">
            Atualizações
          </span>
        </h2>
        <p className="text-lg text-zinc-600 dark:text-zinc-400">
          Notícias sobre a política de drogas e atualizações do movimento
          antiproibicionista.
        </p>
      </div>

      {/* Grid de Artigos - Estilo Aplicado */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {recentPosts.map((post: (typeof blogData)[0]) => (
          <article
            key={post.id}
            className="group flex cursor-pointer flex-col overflow-hidden rounded-2xl bg-white shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl sm:rounded-3xl sm:hover:-translate-y-2 sm:hover:shadow-2xl dark:bg-zinc-800 dark:hover:shadow-emerald-900/20"
          >
            <Link href={`/blog/${post.id}`} className="block">
              {/* Container da Imagem */}
              <div className="relative aspect-16/10 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 25vw, 25vw"
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
                  {/* Tempo de leitura - você pode adicionar este campo ao blogData */}
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
            </Link>
          </article>
        ))}
      </div>

      {/* Botão para ver todos os posts */}
      <div className="mt-12 text-center">
        <Button
          asChild
          variant="outline"
          className="group h-auto rounded-full border-emerald-200 bg-white/50 px-10 py-6 text-sm font-bold tracking-widest uppercase backdrop-blur-sm transition-all hover:border-emerald-500 hover:bg-emerald-50 hover:text-emerald-600 dark:border-emerald-800 dark:bg-zinc-800/50 dark:hover:bg-emerald-900/20"
        >
          <Link href="/blog">
            <span className="flex items-center gap-3">
              Ver todas as publicações
              <ChevronRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-2" />
            </span>
          </Link>
        </Button>
      </div>
    </div>
  );
}
