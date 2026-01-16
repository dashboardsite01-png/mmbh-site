"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  ChevronRight,
  Globe,
  HeartHandshake,
  History,
  Scale,
  Sparkles,
  Users,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { coletivoData, historiaData, valoresData } from "./data/historia-data";

// --- HERO SECTION ---
export function HeroQuemSomos() {
  return (
    <section className="relative flex h-full w-full items-center justify-center overflow-hidden bg-linear-to-br from-emerald-950 via-zinc-900 to-emerald-900 pt-30 pb-20">
      {/* Background com overlay sofisticado */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/9.jpg"
          fill
          className="object-cover object-center"
          alt="Marcha da Maconha BH - Coletivo reunido"
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
            Desde 2008
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
            Quem Somos
          </span>
          <br />
          <span className="bg-linear-to-r from-emerald-400 via-green-400 to-amber-300 bg-clip-text text-transparent">
            A Revolução Organizada
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mx-auto max-w-2xl text-base leading-relaxed font-light text-zinc-300 md:text-xl"
        >
          Um coletivo horizontal que há 17 anos ocupa as ruas de Belo Horizonte.
          Não marchamos apenas pela planta, mas por justiça social, direitos
          humanos e pelo fim da guerra às pessoas.
        </motion.p>
      </div>
    </section>
  );
}

// --- NOSSA HISTÓRIA ---
export function NossaHistoria() {
  // Cor padrão para todas as linhas horizontais
  const linhaCorPadrao = "from-emerald-500/50 to-emerald-500/20";

  return (
    <div className="relative py-12 md:py-24">
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-emerald-50/20 to-transparent dark:via-emerald-900/10" />

      <div className="relative container mx-auto px-4">
        {/* Header Seção */}
        <div className="mb-12 md:mb-16">
          <div className="mb-4 inline-flex items-center gap-3 rounded-full bg-emerald-50 px-4 py-2 md:mb-6 dark:bg-emerald-900/30">
            <History className="h-4 w-4 text-emerald-600" />
            <span className="text-xs font-bold tracking-wider text-emerald-700 uppercase dark:text-emerald-300">
              Linha do Tempo
            </span>
          </div>
          <h2 className="mb-4 text-3xl leading-tight font-black md:mb-6 md:text-5xl">
            Nossa <br />
            <span className="bg-linear-to-r from-emerald-600 to-green-500 bg-clip-text text-transparent">
              Jornada
            </span>
          </h2>
          <p className="text-base text-zinc-600 md:text-lg dark:text-zinc-400">
            De um pequeno grupo de ativistas a um movimento de referência
            nacional. Conheça os marcos dessa trajetória de resistência.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Linha vertical central */}
          <div className="absolute top-0 left-4 h-full w-0.5 -translate-x-1/2 bg-linear-to-b from-emerald-500/30 via-emerald-500/50 to-emerald-500/30 md:left-1/2 md:w-px" />

          <div className="space-y-16 md:space-y-24">
            {historiaData.timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* DOT CENTRALIZADO */}
                <div className="absolute top-0 left-4 z-20 flex h-6 w-6 -translate-x-1/2 items-center justify-center rounded-full bg-white shadow-lg md:left-1/2">
                  <div className="h-3 w-3 rounded-full bg-linear-to-r from-emerald-500 to-green-500" />
                </div>

                {/* --- VERSÃO MOBILE --- */}
                <div className="ml-12 flex flex-col gap-6 md:hidden">
                  <div className="flex h-6 items-center gap-5">
                    <div
                      className={`h-0.5 w-full bg-linear-to-r ${linhaCorPadrao}`}
                    />
                    <span className="text-xl font-black text-emerald-600 dark:text-emerald-400">
                      {item.year}
                    </span>
                  </div>

                  <div className="rounded-xl border border-zinc-100 bg-white p-5 shadow-md dark:border-zinc-700 dark:bg-zinc-800">
                    <div className="mb-4">
                      <span
                        className={`inline-flex h-10 w-10 items-center justify-center rounded-lg bg-linear-to-br ${item.color} text-xl text-white shadow-sm`}
                      >
                        {item.icon}
                      </span>
                    </div>
                    <h3 className="mb-2 font-bold text-zinc-900 dark:text-white">
                      {item.title}
                    </h3>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* --- VERSÃO DESKTOP --- */}
                <div className="hidden md:block">
                  <div
                    className={`flex w-full ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
                  >
                    <div
                      className={`w-1/2 ${index % 2 === 0 ? "pr-12" : "pl-12"}`}
                    >
                      {/* Linha Horizontal e Ano */}
                      <div
                        className={`absolute -top-1 flex w-[calc(50%-48px)] items-center gap-5 ${index % 2 === 0 ? "right-[calc(50%+24px)] flex-row-reverse" : "left-[calc(50%+24px)] flex-row"}`}
                      >
                        <div
                          className={`h-0.5 w-full bg-linear-to-r ${linhaCorPadrao}`}
                        />
                        <span className="text-3xl font-black text-emerald-600 dark:text-emerald-400">
                          {item.year}
                        </span>
                      </div>

                      {/* Card com Ícone Interno */}
                      <div
                        className={`mt-12 flex flex-col ${index % 2 === 0 ? "items-end" : "items-start"}`}
                      >
                        <div
                          className={`max-w-md rounded-2xl border border-zinc-100 bg-white p-8 shadow-xl transition-all hover:shadow-2xl dark:border-zinc-700 dark:bg-zinc-800 ${index % 2 === 0 ? "text-right" : "text-left"}`}
                        >
                          <div
                            className={`mb-6 flex ${index % 2 === 0 ? "justify-end" : "justify-start"}`}
                          >
                            <span
                              className={`inline-flex h-12 w-12 items-center justify-center rounded-xl bg-linear-to-br ${item.color} text-2xl text-white shadow-inner`}
                            >
                              {item.icon}
                            </span>
                          </div>
                          <h3 className="mb-3 text-xl font-bold text-zinc-900 dark:text-white">
                            {item.title}
                          </h3>
                          <p className="text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="w-1/2" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
// --- NOSSOS VALORES ---
export function NossosValores() {
  return (
    <div className="relative overflow-hidden bg-linear-to-br from-emerald-50 to-white py-24 dark:from-emerald-950/30 dark:to-zinc-900">
      <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-linear-to-r from-emerald-200/20 to-green-200/20 blur-3xl dark:from-emerald-900/20 dark:to-green-900/20" />

      <div className="relative container mx-auto px-4">
        <div className="mb-16 text-center">
          <div className="mb-6 inline-flex items-center gap-3">
            <HeartHandshake className="h-6 w-6 text-emerald-600" />
            <span className="text-xs font-bold tracking-wider text-emerald-700 uppercase dark:text-emerald-300">
              Princípios Norteadores
            </span>
          </div>

          <h2 className="mb-6 text-5xl leading-tight font-black">
            <span className="text-zinc-900 dark:text-white">Nossos</span>
            <br />
            <span className="bg-linear-to-r from-emerald-600 to-green-500 bg-clip-text text-transparent">
              Valores
            </span>
          </h2>

          <p className="mx-auto max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
            Pilares que sustentam nossa luta e guiam cada decisão, cada ação,
            cada passo dessa caminhada coletiva.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {valoresData.map((valor, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-2xl bg-white p-8 shadow-xl transition-all hover:shadow-2xl dark:bg-zinc-800">
                <div className="absolute top-0 right-0 h-32 w-32 translate-x-16 -translate-y-16 rounded-full bg-linear-to-r from-emerald-500/10 to-green-500/10" />

                <div className="relative z-10">
                  <div
                    className={`mb-6 inline-flex rounded-2xl ${valor.color} p-4`}
                  >
                    <span className="text-2xl">{valor.icon}</span>
                  </div>

                  <h3 className={`mb-4 text-xl font-bold ${valor.textColor}`}>
                    {valor.title}
                  </h3>

                  <p className="text-zinc-600 dark:text-zinc-400">
                    {valor.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

// --- COMO FUNCIONAMOS ---
export function ComoFuncionamos() {
  return (
    <div className="relative py-24">
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-zinc-50 to-transparent dark:via-zinc-900" />

      <div className="relative container mx-auto px-4">
        <div className="mb-16">
          <div className="mb-6 inline-flex items-center gap-3 rounded-full bg-emerald-50 px-4 py-2 dark:bg-emerald-900/30">
            <Users className="h-4 w-4 text-emerald-600" />
            <span className="text-xs font-bold tracking-wider text-emerald-700 uppercase dark:text-emerald-300">
              Estrutura Horizontal
            </span>
          </div>

          <h2 className="mb-6 text-5xl leading-tight font-black">
            Como <br />
            <span className="bg-linear-to-r from-emerald-600 to-green-500 bg-clip-text text-transparent">
              Funcionamos
            </span>
          </h2>

          <p className="text-lg text-zinc-600 dark:text-zinc-400">
            Sem hierarquias, com responsabilidades compartilhadas. Conheça os
            grupos de trabalho que sustentam o movimento.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {coletivoData.map((grupo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="group relative overflow-hidden rounded-2xl bg-linear-to-br from-white to-emerald-50 p-8 shadow-xl transition-all hover:shadow-2xl dark:from-zinc-800 dark:to-emerald-900/20">
                <div
                  className={`absolute inset-0 bg-linear-to-br ${grupo.color} opacity-0 transition-opacity group-hover:opacity-10`}
                />

                <div className="relative z-10">
                  <div className="mb-6">
                    <div
                      className={`inline-flex rounded-2xl bg-linear-to-br ${grupo.color} p-4 shadow-lg`}
                    >
                      <span className="text-2xl">{grupo.icon}</span>
                    </div>
                  </div>

                  <h3 className="mb-4 text-xl font-bold text-zinc-900 dark:text-white">
                    {grupo.name}
                  </h3>

                  <p className="mb-6 text-zinc-600 dark:text-zinc-400">
                    {grupo.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-emerald-600" />
                      <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                        {grupo.members}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 text-sm font-bold tracking-wider text-emerald-600 uppercase dark:text-emerald-400">
                      Participar
                      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button
            asChild
            className="group h-auto rounded-full bg-linear-to-r from-emerald-600 to-green-600 px-10 py-6 text-sm font-bold tracking-widest uppercase shadow-xl transition-all hover:scale-105"
          >
            <Link href="#participe">
              <span className="flex items-center gap-3">
                Quero Participar de um GT
                <ChevronRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-2" />
              </span>
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

// --- NOSSA MISSÃO ---
export function NossaMissao() {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-linear-to-br from-emerald-900 to-zinc-950 py-24">
      <div className="absolute top-0 right-0 h-64 w-64 translate-x-32 -translate-y-32 rounded-full bg-linear-to-r from-emerald-500/10 to-green-500/10 blur-3xl" />
      <div className="absolute bottom-0 left-0 h-64 w-64 -translate-x-32 translate-y-32 rounded-full bg-linear-to-r from-emerald-500/5 to-green-500/5 blur-3xl" />

      <div className="relative z-10 container mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-8 flex items-center justify-center gap-4">
            <div className="h-px w-16 bg-linear-to-r from-emerald-500 to-transparent" />
            <span className="text-sm font-bold tracking-widest text-emerald-400 uppercase">
              Propósito Coletivo
            </span>
            <div className="h-px w-16 bg-linear-to-l from-emerald-500 to-transparent" />
          </div>

          <h2 className="mb-8 text-4xl leading-tight font-black md:text-6xl">
            <span className="block text-white">Nossa Missão:</span>
            <span className="bg-linear-to-r from-emerald-400 via-green-400 to-amber-300 bg-clip-text text-transparent">
              Plantar para Reparar
            </span>
          </h2>

          <p className="mb-12 text-lg leading-relaxed text-zinc-300">
            Trabalhamos por um mundo onde a cannabis não seja mais pretexto para
            encarceramento em massa, mas sim ferramenta de reparação histórica,
            cuidado em saúde e justiça social. Acreditamos na regulamentação
            democrática que coloca as comunidades afetadas pela guerra às drogas
            no centro das decisões.
          </p>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/10 p-6 backdrop-blur-sm">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/20">
                <Scale className="h-6 w-6 text-emerald-400" />
              </div>
              <h4 className="mb-3 text-xl font-bold text-white">Justiça</h4>
              <p className="text-sm text-emerald-200">
                Reparação para vítimas do proibicionismo. Fim do encarceramento
                em massa.
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/10 p-6 backdrop-blur-sm">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/20">
                <HeartHandshake className="h-6 w-6 text-emerald-400" />
              </div>
              <h4 className="mb-3 text-xl font-bold text-white">Saúde</h4>
              <p className="text-sm text-emerald-200">
                Acesso gratuito à cannabis medicinal. Redução de danos como
                política pública.
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/10 p-6 backdrop-blur-sm">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/20">
                <Globe className="h-6 w-6 text-emerald-400" />
              </div>
              <h4 className="mb-3 text-xl font-bold text-white">Educação</h4>
              <p className="text-sm text-emerald-200">
                Informação científica e popular. Desconstrução do preconceito e
                estigma.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
