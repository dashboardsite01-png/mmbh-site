// app/(pages)/acolhimento/sections/hero.tsx
"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Calendar,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  HeartHandshake,
  HelpCircle,
  Lock,
  MessageCircle,
  MessageSquare,
  Quote,
  Shield,
  Sparkles,
  Star,
  UserCheck,
  Users,
  Zap,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  depoimentosData,
  perguntasFrequentes,
  servicosData,
} from "./data/acolhimento-data";

interface FormularioAcolhimentoProps {
  servicoSelecionado: string | null;
}

interface NossosServicosProps {
  servicoSelecionado: string | null;
  setServicoSelecionado: (id: string | null) => void;
}

export function HeroAcolhimento() {
  return (
    <section className="relative flex h-full w-full items-center justify-center overflow-hidden bg-linear-to-br from-emerald-950 via-zinc-900 to-emerald-900 pt-30 pb-20">
      {/* Background com overlay sofisticado */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/10.jpg"
          fill
          className="object-cover object-center"
          alt="Acolhimento humanizado - Marcha da Maconha BH"
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
            Rede de Solidariedade
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
            Você não está
          </span>
          <br />
          <span className="bg-linear-to-r from-emerald-400 via-green-400 to-amber-300 bg-clip-text text-transparent">
            Sozinho.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mx-auto mb-10 max-w-2xl px-10 text-base leading-relaxed font-light text-zinc-300 md:text-xl"
        >
          Se você sofreu violência policial, enfrenta processos por cultivo ou
          busca tratamento com cannabis, nossa rede de acolhimento oferece
          suporte ético, humanizado e antiproibicionista.
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
            <Link href="#formulario">
              <span className="relative z-10 flex items-center">
                Solicitar Acolhimento
                <HeartHandshake className="ml-3 h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
              </span>
            </Link>
          </Button>

          <Button
            asChild
            variant="outline"
            className="group relative h-auto overflow-hidden rounded-full border-white/20 bg-white/5 px-12 py-6 text-sm font-bold tracking-widest text-white uppercase backdrop-blur-sm transition-all hover:bg-white/10 hover:shadow-lg"
          >
            <Link href="#servicos">
              <span className="relative z-10 flex items-center">
                Conhecer os Serviços
                <ArrowUpRight className="ml-3 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1.5 group-hover:rotate-45" />
              </span>
            </Link>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-12 flex items-center justify-center gap-6 text-sm text-emerald-300"
        >
          <div className="flex items-center gap-2">
            <Shield className="h-4 w-4" />
            <span>Sigilo Absoluto</span>
          </div>
          <div className="h-4 w-px bg-emerald-400/30" />
          <div className="flex items-center gap-2">
            <HeartHandshake className="h-4 w-4" />
            <span>Gratuito</span>
          </div>
          <div className="h-4 w-px bg-emerald-400/30" />
          <div className="flex items-center gap-2">
            <Sparkles className="h-4 w-4" />
            <span>Antiproibicionista</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function AcolhimentoInfo() {
  return (
    <div className="relative py-24">
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-emerald-50/20 to-transparent dark:via-emerald-900/10" />

      <div className="relative container mx-auto px-4">
        <div className="mb-16 text-center">
          <div className="mb-6 inline-flex items-center gap-3">
            <HeartHandshake className="h-6 w-6 text-emerald-600" />
            <span className="text-xs font-bold tracking-wider text-emerald-700 uppercase dark:text-emerald-300">
              Nosso Compromisso
            </span>
          </div>

          <h2 className="mb-6 text-5xl leading-tight font-black">
            <span className="text-zinc-900 dark:text-white">Acolhimento</span>
            <br />
            <span className="bg-linear-to-r from-emerald-600 to-green-500 bg-clip-text text-transparent">
              Humanizado
            </span>
          </h2>

          <p className="mx-auto max-w-3xl text-lg text-zinc-600 dark:text-zinc-400">
            Entendemos que o proibicionismo causa sofrimento real. Por isso,
            construímos uma rede de apoio que coloca as pessoas em primeiro
            lugar, com escuta ativa e cuidado integral.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {[
            {
              icon: <Shield className="h-8 w-8" />,
              title: "Sigilo Total",
              description:
                "Seus dados são protegidos com criptografia. Nada é compartilhado sem sua autorização.",
              color: "text-emerald-600 dark:text-emerald-400",
              bgColor: "bg-emerald-100 dark:bg-emerald-900/30",
            },
            {
              icon: <HeartHandshake className="h-8 w-8" />,
              title: "Sem Julgamento",
              description:
                "Oferecemos escuta empática, livre de preconceitos e estigmas.",
              color: "text-emerald-600 dark:text-emerald-400",
              bgColor: "bg-emerald-100 dark:bg-emerald-900/30",
            },
            {
              icon: <Users className="h-8 w-8" />,
              title: "Coletivo Horizontal",
              description:
                "Trabalhamos em rede, sem hierarquias. Todas as vozes têm o mesmo valor.",
              color: "text-emerald-600 dark:text-emerald-400",
              bgColor: "bg-emerald-100 dark:bg-emerald-900/30",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="rounded-2xl bg-white p-8 shadow-xl dark:bg-zinc-800"
            >
              <div
                className={`mb-6 inline-flex rounded-2xl ${item.bgColor} p-4 ${item.color}`}
              >
                {item.icon}
              </div>
              <h3 className="mb-4 text-xl font-bold text-zinc-900 dark:text-white">
                {item.title}
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Estatísticas */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 rounded-2xl bg-linear-to-br from-emerald-600 to-green-600 p-8 text-white md:p-12"
        >
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {[
              { value: "500+", label: "Pessoas Acolhidas" },
              { value: "98%", label: "Satisfação" },
              { value: "48h", label: "Tempo Médio de Resposta" },
              { value: "24/7", label: "WhatsApp de Emergência" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="mb-2 text-3xl font-bold md:text-4xl">
                  {stat.value}
                </div>
                <div className="text-sm font-medium text-emerald-200">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Garantias */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 rounded-2xl border border-emerald-100 bg-emerald-50 p-8 dark:border-emerald-800 dark:bg-emerald-900/20"
        >
          <h3 className="mb-6 text-2xl font-bold text-zinc-900 dark:text-white">
            Nossas Garantias
          </h3>
          <div className="grid gap-4 md:grid-cols-2">
            {[
              "Atendimento gratuito e sem burocracia",
              "Profissionais especializados e alinhados com a causa",
              "Respeito à sua autonomia e decisões",
              "Conexão com rede nacional de apoio",
              "Acompanhamento enquanto for necessário",
              "Não fazemos distinção por qualquer motivo",
            ].map((garantia, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle2 className="mt-1 h-5 w-5 text-emerald-600" />
                <span className="text-zinc-700 dark:text-zinc-300">
                  {garantia}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export function NossosServicos({
  servicoSelecionado,
  setServicoSelecionado,
}: NossosServicosProps) {
  return (
    <div className="relative py-24">
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-zinc-50 to-transparent dark:via-zinc-900" />

      <div className="relative container mx-auto px-4">
        <div className="mb-16 text-center">
          <div className="mb-6 inline-flex items-center gap-3">
            <span className="text-xs font-bold tracking-wider text-emerald-700 uppercase dark:text-emerald-300">
              Áreas de Atuação
            </span>
          </div>

          <h2 className="mb-6 text-5xl leading-tight font-black">
            <span className="text-zinc-900 dark:text-white">Nossos</span>
            <br />
            <span className="bg-linear-to-r from-emerald-600 to-green-500 bg-clip-text text-transparent">
              Serviços
            </span>
          </h2>

          <p className="mx-auto max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
            Oferecemos suporte especializado em diferentes áreas para atender às
            diversas necessidades causadas pelo proibicionismo.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {servicosData.map((servico, index) => (
            <motion.button
              key={servico.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onClick={() =>
                setServicoSelecionado(
                  servicoSelecionado === servico.id ? null : servico.id,
                )
              }
              className={`group relative overflow-hidden rounded-2xl p-8 text-left transition-all ${
                servicoSelecionado === servico.id
                  ? "bg-linear-to-br from-emerald-100 to-white shadow-2xl dark:from-emerald-900/30 dark:to-zinc-800"
                  : "bg-white shadow-xl hover:shadow-2xl dark:bg-zinc-800"
              }`}
            >
              <div className="relative z-10">
                <div className="mb-6">
                  <div
                    className={`inline-flex rounded-2xl bg-linear-to-br ${servico.cor} p-4 text-2xl ${
                      servicoSelecionado === servico.id
                        ? "text-white"
                        : "text-white"
                    }`}
                  >
                    {servico.icon}
                  </div>
                </div>

                <h3 className="mb-3 text-xl font-bold text-zinc-900 dark:text-white">
                  {servico.titulo}
                </h3>

                <p className="mb-6 text-sm text-zinc-600 dark:text-zinc-400">
                  {servico.descricao}
                </p>

                <div className="flex items-center justify-between">
                  <div className="text-sm font-bold tracking-wider text-emerald-600 uppercase dark:text-emerald-400">
                    {servicoSelecionado === servico.id
                      ? "Selecionado"
                      : "Saiba mais"}
                  </div>
                  <ChevronRight
                    className={`h-5 w-5 text-emerald-600 transition-transform ${
                      servicoSelecionado === servico.id
                        ? "rotate-90"
                        : "group-hover:translate-x-1"
                    }`}
                  />
                </div>
              </div>

              {/* Indicador de seleção */}
              {servicoSelecionado === servico.id && (
                <div className="absolute right-0 bottom-0 left-0 h-1 bg-linear-to-r from-emerald-500 to-green-500" />
              )}
            </motion.button>
          ))}
        </div>

        {/* Detalhes do serviço selecionado */}
        {servicoSelecionado && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            className="mt-12 overflow-hidden rounded-2xl border border-emerald-100 bg-white shadow-xl dark:border-emerald-800 dark:bg-zinc-800"
          >
            {servicosData
              .filter((servico) => servico.id === servicoSelecionado)
              .map((servico) => (
                <div key={servico.id} className="p-8">
                  <div className="mb-8 flex items-start justify-between">
                    <div>
                      <div className="mb-4 flex items-center gap-3">
                        <div
                          className={`rounded-2xl bg-linear-to-br ${servico.cor} p-3 text-2xl`}
                        >
                          {servico.icon}
                        </div>
                        <h3 className="text-2xl font-bold text-zinc-900 dark:text-white">
                          {servico.titulo}
                        </h3>
                      </div>
                      <p className="text-lg text-zinc-700 dark:text-zinc-300">
                        {servico.descricaoLonga}
                      </p>
                    </div>
                    <button
                      onClick={() => setServicoSelecionado(null)}
                      className="text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-300"
                    >
                      ✕
                    </button>
                  </div>

                  <div className="grid gap-8 md:grid-cols-2">
                    <div>
                      <h4 className="mb-4 text-lg font-bold text-zinc-900 dark:text-white">
                        O que oferecemos:
                      </h4>
                      <ul className="space-y-3">
                        {servico.features.map((feature, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <div className="mt-1 h-2 w-2 rounded-full bg-emerald-500" />
                            <span className="text-zinc-700 dark:text-zinc-300">
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="mb-4 text-lg font-bold text-zinc-900 dark:text-white">
                        Como acessar:
                      </h4>
                      <div className="space-y-4">
                        <Button
                          asChild
                          className="w-full rounded-xl bg-linear-to-r from-emerald-600 to-green-600 py-6"
                        >
                          <Link href={servico.formularioLink} target="_blank">
                            Preencher Formulário
                          </Link>
                        </Button>
                        <Button
                          variant="outline"
                          className="w-full rounded-xl border-emerald-200 py-6 hover:bg-emerald-50 dark:border-emerald-800"
                          asChild
                        >
                          <a href={servico.whatsappLink} target="_blank">
                            <MessageCircle className="mr-3 h-5 w-5" />
                            Falar no WhatsApp
                          </a>
                        </Button>
                      </div>
                      <p className="mt-4 text-sm text-zinc-500 dark:text-zinc-400">
                        Escolha a forma que preferir. Em ambos os casos,
                        responderemos em até 48 horas.
                      </p>
                    </div>
                  </div>
                </div>
              ))}
          </motion.div>
        )}

        {/* Call to Action */}
        {!servicoSelecionado && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <p className="mb-8 text-lg text-zinc-600 dark:text-zinc-400">
              Não sabe qual serviço escolher? Conte-nos sua situação e
              ajudaremos você.
            </p>
            <Button
              asChild
              className="group rounded-full bg-linear-to-r from-emerald-600 to-green-600 px-10 py-6 text-sm font-bold tracking-widest uppercase shadow-xl transition-all hover:scale-105"
            >
              <Link href="#formulario">
                <span className="flex items-center gap-3">
                  Falar Sobre Minha Situação
                  <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </span>
              </Link>
            </Button>
          </motion.div>
        )}
      </div>
    </div>
  );
}

export function ComoFunciona() {
  const passos = [
    {
      numero: "01",
      titulo: "Primeiro Contato",
      descricao:
        "Você entra em contato através do formulário ou WhatsApp. Conte-nos brevemente sobre sua situação.",
      icon: <MessageSquare className="h-6 w-6" />,
      cor: "from-emerald-500 to-green-500",
    },
    {
      numero: "02",
      titulo: "Triagem Inicial",
      descricao:
        "Nossa equipe analisa sua demanda e identifica qual serviço e profissional podem te ajudar melhor.",
      icon: <Users className="h-6 w-6" />,
      cor: "from-emerald-500 to-green-500",
    },
    {
      numero: "03",
      titulo: "Conexão com Rede",
      descricao:
        "Conectamos você com o profissional ou grupo de apoio mais adequado para sua necessidade.",
      icon: <Zap className="h-6 w-6" />,
      cor: "from-emerald-500 to-green-500",
    },
    {
      numero: "04",
      titulo: "Acompanhamento",
      descricao:
        "Oferecemos acompanhamento durante todo o processo. Você não fica sozinho(a).",
      icon: <Calendar className="h-6 w-6" />,
      cor: "from-emerald-500 to-green-500",
    },
  ];

  return (
    <div className="relative py-24">
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-emerald-50/20 to-transparent dark:via-emerald-900/10" />

      <div className="relative container mx-auto px-4">
        <div className="mb-16">
          <div className="mb-6 inline-flex items-center gap-3">
            <span className="text-xs font-bold tracking-wider text-emerald-700 uppercase dark:text-emerald-300">
              Processo Simples
            </span>
          </div>

          <h2 className="mb-6 text-5xl leading-tight font-black">
            <span className="text-zinc-900 dark:text-white">Como</span>
            <br />
            <span className="bg-linear-to-r from-emerald-600 to-green-500 bg-clip-text text-transparent">
              Funciona
            </span>
          </h2>

          <p className="text-lg text-zinc-600 dark:text-zinc-400">
            Do primeiro contato ao acompanhamento, garantimos um processo
            transparente, respeitoso e eficiente.
          </p>
        </div>

        {/* Linha do Tempo */}
        <div className="relative">
          {/* Linha central */}
          {/* <div className="absolute top-1/2 right-4 left-4 h-0.5 -translate-y-1/2 bg-linear-to-r from-emerald-500/30 via-emerald-500/50 to-emerald-500/30 md:top-0 md:right-1/2 md:bottom-0 md:left-1/2 md:h-auto md:w-0.5 md:-translate-x-1/2 md:translate-y-0" /> */}

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {passos.map((passo, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <div className="relative rounded-2xl bg-white p-8 shadow-xl dark:bg-zinc-800">
                  {/* Número do passo */}
                  <div
                    className={`absolute -top-4 left-1/2 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full bg-linear-to-r ${passo.cor} text-sm font-bold text-white md:top-1/2 md:-left-4 md:translate-x-0 md:-translate-y-1/2`}
                  >
                    {passo.numero}
                  </div>

                  <div className="mb-6">
                    <div
                      className={`mb-4 inline-flex rounded-2xl bg-linear-to-br ${passo.cor} p-3`}
                    >
                      {passo.icon}
                    </div>
                    <h3 className="text-xl font-bold text-zinc-900 dark:text-white">
                      {passo.titulo}
                    </h3>
                  </div>

                  <p className="text-zinc-600 dark:text-zinc-400">
                    {passo.descricao}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Garantias do Processo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 rounded-2xl border border-emerald-100 bg-emerald-50 p-8 dark:border-emerald-800 dark:bg-emerald-900/20"
        >
          <div className="mb-8 flex items-center gap-4">
            <Shield className="h-8 w-8 text-emerald-600" />
            <h3 className="text-2xl font-bold text-zinc-900 dark:text-white">
              Sua Segurança em Primeiro Lugar
            </h3>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                titulo: "Sigilo Absoluto",
                descricao:
                  "Seus dados são protegidos por criptografia. Nada é compartilhado sem sua autorização.",
              },
              {
                titulo: "Sem Burocracia",
                descricao:
                  "Processo simples e direto. Focamos no que importa: seu bem-estar.",
              },
              {
                titulo: "Feedback Constante",
                descricao:
                  "Mantemos você informado sobre cada etapa do processo.",
              },
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-4">
                <CheckCircle2 className="mt-1 h-6 w-6 text-emerald-600" />
                <div>
                  <h4 className="mb-2 text-xl font-bold text-zinc-900 dark:text-white">
                    {item.titulo}
                  </h4>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">
                    {item.descricao}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Tempo Médio */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 rounded-2xl bg-linear-to-br from-emerald-600 to-green-600 p-8 text-center text-white"
        >
          <h4 className="mb-4 text-2xl font-bold">Tempo Médio de Resposta</h4>
          <div className="text-5xl font-bold">24-48 horas</div>
          <p className="mt-4 text-emerald-200">
            Para casos de emergência, respondemos através do WhatsApp em até 2
            horas.
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export function Depoimentos() {
  return (
    <div className="relative py-24">
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-zinc-50 to-transparent dark:via-zinc-900" />

      <div className="relative container mx-auto px-4">
        <div className="mb-16 text-center">
          <div className="mb-6 inline-flex items-center gap-3">
            <Quote className="h-6 w-6 text-emerald-600" />
            <span className="text-xs font-bold tracking-wider text-emerald-700 uppercase dark:text-emerald-300">
              Histórias Reais
            </span>
          </div>

          <h2 className="mb-6 text-5xl leading-tight font-black">
            <span className="text-zinc-900 dark:text-white">Quem já foi</span>
            <br />
            <span className="bg-linear-to-r from-emerald-600 to-green-500 bg-clip-text text-transparent">
              Acolhido
            </span>
          </h2>

          <p className="mx-auto max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
            Conheça histórias de pessoas que encontraram apoio, esperança e
            transformação através da nossa rede.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {depoimentosData.map((depoimento, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-xl dark:bg-zinc-800"
            >
              {/* Citação decorativa */}
              <Quote className="absolute top-8 right-8 h-16 w-16 text-emerald-100 dark:text-emerald-900/30" />

              <div className="relative z-10">
                {/* Avaliação */}
                <div className="mb-6 flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-emerald-500 text-emerald-500"
                    />
                  ))}
                </div>

                {/* Texto do depoimento */}
                <blockquote className="mb-8 text-lg text-zinc-700 italic dark:text-zinc-300">
                  {depoimento.texto}
                </blockquote>

                {/* Informações da pessoa */}
                <div className="flex items-center justify-between border-t border-zinc-100 pt-6 dark:border-zinc-700">
                  <div>
                    <div className="font-bold text-zinc-900 dark:text-white">
                      {depoimento.nome}
                    </div>
                    <div className="text-sm text-zinc-600 dark:text-zinc-400">
                      {depoimento.idade} anos • {depoimento.servico}
                    </div>
                  </div>
                  <div className="text-sm text-zinc-500 dark:text-zinc-400">
                    {depoimento.data}
                  </div>
                </div>
              </div>

              {/* Efeito de hover */}
              <div className="absolute inset-0 bg-linear-to-br from-emerald-500/5 to-green-500/5 opacity-0 transition-opacity group-hover:opacity-100" />
            </motion.div>
          ))}
        </div>

        {/* Estatísticas */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 rounded-2xl bg-linear-to-br from-emerald-600 to-green-600 p-8 text-white md:p-12"
        >
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {[
              { value: "100%", label: "Gratuito" },
              { value: "98%", label: "Recomendariam" },
              { value: "500+", label: "Vidas Impactadas" },
              { value: "4.9", label: "Satisfação" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="mb-2 text-3xl font-bold md:text-4xl">
                  {stat.value}
                </div>
                <div className="text-sm font-medium text-emerald-200">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export function PerguntasFrequentes() {
  const [perguntaAberta, setPerguntaAberta] = useState<number | null>(null);

  return (
    <div className="relative py-24">
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-emerald-50/20 to-transparent dark:via-emerald-900/10" />

      <div className="relative container mx-auto px-4">
        <div className="mb-16 text-center">
          <div className="mb-6 inline-flex items-center gap-3">
            <HelpCircle className="h-6 w-6 text-emerald-600" />
            <span className="text-xs font-bold tracking-wider text-emerald-700 uppercase dark:text-emerald-300">
              Tire suas Dúvidas
            </span>
          </div>

          <h2 className="mb-6 text-5xl leading-tight font-black">
            <span className="text-zinc-900 dark:text-white">Perguntas</span>
            <br />
            <span className="bg-linear-to-r from-emerald-600 to-green-500 bg-clip-text text-transparent">
              Frequentes
            </span>
          </h2>

          <p className="mx-auto max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
            Reunimos as dúvidas mais comuns sobre nosso trabalho de acolhimento.
            Se sua pergunta não estiver aqui, entre em contato.
          </p>
        </div>

        <div className="mx-auto max-w-3xl">
          {perguntasFrequentes.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="mb-4 overflow-hidden rounded-2xl border border-emerald-100 bg-white dark:border-emerald-800 dark:bg-zinc-800"
            >
              <button
                onClick={() =>
                  setPerguntaAberta(perguntaAberta === index ? null : index)
                }
                className="flex w-full items-center justify-between p-6 text-left"
              >
                <h3 className="text-lg font-bold text-zinc-900 dark:text-white">
                  {faq.pergunta}
                </h3>
                <ChevronDown
                  className={`h-5 w-5 text-emerald-600 transition-transform ${
                    perguntaAberta === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  perguntaAberta === index ? "max-h-96" : "max-h-0"
                }`}
              >
                <div className="px-6 pb-6">
                  <p className="text-zinc-700 dark:text-zinc-300">
                    {faq.resposta}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Ainda com dúvidas */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 rounded-2xl border border-dashed border-emerald-200 bg-emerald-50 p-8 text-center dark:border-emerald-800 dark:bg-emerald-900/20"
        >
          <h3 className="mb-4 text-2xl font-bold text-zinc-900 dark:text-white">
            Ainda com dúvidas?
          </h3>
          <p className="mx-auto mb-6 max-w-2xl text-zinc-700 dark:text-zinc-300">
            Entre em contato conosco. Nossa equipe está pronta para esclarecer
            qualquer questão sobre nosso trabalho de acolhimento.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <a
              href="https://wa.me/5531999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-linear-to-r from-emerald-600 to-green-600 px-8 py-4 text-sm font-bold text-white"
            >
              Falar no WhatsApp
            </a>
            <a
              href="mailto:acolhimento@marchadamaconhabh.org"
              className="rounded-xl border border-emerald-200 bg-white px-8 py-4 text-sm font-bold text-emerald-700 hover:bg-emerald-50 dark:border-emerald-800 dark:bg-zinc-800 dark:text-emerald-300"
            >
              Enviar Email
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export function FormularioAcolhimento({
  servicoSelecionado,
}: FormularioAcolhimentoProps) {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    servico: servicoSelecionado || "",
    situacao: "",
    preferenciaContato: "email",
    aceitaLGPD: false,
  });

  const [enviado, setEnviado] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value, type } = e.target;

    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você integraria com sua API
    console.log("Dados do formulário:", formData);
    setEnviado(true);

    // Reset após envio
    setTimeout(() => {
      setEnviado(false);
      setFormData({
        nome: "",
        email: "",
        telefone: "",
        servico: servicoSelecionado || "",
        situacao: "",
        preferenciaContato: "email",
        aceitaLGPD: false,
      });
    }, 5000);
  };

  return (
    <div className="relative py-24">
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-emerald-50/20 to-transparent dark:via-emerald-900/10" />

      <div className="relative container mx-auto px-4">
        <div className="mb-16 text-center">
          <div className="mb-6 inline-flex items-center gap-3">
            <UserCheck className="h-6 w-6 text-emerald-600" />
            <span className="text-xs font-bold tracking-wider text-emerald-700 uppercase dark:text-emerald-300">
              Solicite Acolhimento
            </span>
          </div>

          <h2 className="mb-6 text-5xl leading-tight font-black">
            <span className="text-zinc-900 dark:text-white">Conte-nos</span>
            <br />
            <span className="bg-linear-to-r from-emerald-600 to-green-500 bg-clip-text text-transparent">
              Sua História
            </span>
          </h2>

          <p className="mx-auto max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
            Preencha o formulário abaixo. Suas informações são confidenciais e
            serão usadas apenas para oferecer o melhor acolhimento possível.
          </p>
        </div>

        {enviado ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mx-auto max-w-2xl rounded-2xl bg-linear-to-br from-emerald-600 to-green-600 p-12 text-center text-white"
          >
            <div className="mb-8 flex justify-center">
              <div className="rounded-full bg-white/20 p-4 backdrop-blur-sm">
                <CheckCircle2 className="h-16 w-16" />
              </div>
            </div>
            <h3 className="mb-4 text-3xl font-bold">
              Mensagem Enviada com Sucesso!
            </h3>
            <p className="mb-8 text-lg text-emerald-200">
              Entraremos em contato em até 48 horas. Enquanto isso, se precisar
              de ajuda imediata, entre em contato pelo nosso WhatsApp.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <a
                href="https://wa.me/5531999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border-2 border-white bg-white/10 px-8 py-4 text-sm font-bold backdrop-blur-sm hover:bg-white/20"
              >
                WhatsApp de Emergência
              </a>
              <button
                onClick={() => setEnviado(false)}
                className="rounded-xl border-2 border-white bg-white px-8 py-4 text-sm font-bold text-emerald-700 hover:bg-emerald-50"
              >
                Enviar Nova Mensagem
              </button>
            </div>
          </motion.div>
        ) : (
          <div className="mx-auto max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-8 rounded-2xl border border-emerald-100 bg-white p-8 dark:border-emerald-800 dark:bg-zinc-800"
            >
              <div className="mb-6 flex items-center gap-4">
                <Shield className="h-8 w-8 text-emerald-600" />
                <div>
                  <h4 className="text-lg font-bold text-zinc-900 dark:text-white">
                    Sua Privacidade é Garantida
                  </h4>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">
                    Todos os dados são criptografados e protegidos pela LGPD
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                {[
                  {
                    icon: <Lock className="h-5 w-5" />,
                    text: "Criptografia SSL",
                  },
                  { icon: <Shield className="h-5 w-5" />, text: "LGPD" },
                  {
                    icon: <Sparkles className="h-5 w-5" />,
                    text: "Sigilo Absoluto",
                  },
                  {
                    icon: <UserCheck className="h-5 w-5" />,
                    text: "Sem Julgamento",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center gap-2 rounded-xl bg-emerald-50 p-4 dark:bg-emerald-900/30"
                  >
                    <div className="text-emerald-600 dark:text-emerald-400">
                      {item.icon}
                    </div>
                    <span className="text-center text-xs font-medium text-emerald-700 dark:text-emerald-300">
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.form
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              onSubmit={handleSubmit}
              className="space-y-8 rounded-2xl border border-emerald-100 bg-white p-8 dark:border-emerald-800 dark:bg-zinc-800"
            >
              {/* Dados Pessoais */}
              <div>
                <h4 className="mb-6 text-xl font-bold text-zinc-900 dark:text-white">
                  Dados Pessoais
                </h4>
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-medium text-zinc-700 dark:text-zinc-300">
                      Nome *
                    </label>
                    <input
                      type="text"
                      name="nome"
                      value={formData.nome}
                      onChange={handleChange}
                      required
                      className="w-full rounded-xl border border-zinc-200 bg-white px-4 py-3 placeholder:text-zinc-400 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 focus:outline-none dark:border-zinc-700 dark:bg-zinc-800"
                      placeholder="Seu nome completo"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium text-zinc-700 dark:text-zinc-300">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full rounded-xl border border-zinc-200 bg-white px-4 py-3 placeholder:text-zinc-400 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 focus:outline-none dark:border-zinc-700 dark:bg-zinc-800"
                      placeholder="seu@email.com"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium text-zinc-700 dark:text-zinc-300">
                      Telefone
                    </label>
                    <input
                      type="tel"
                      name="telefone"
                      value={formData.telefone}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-zinc-200 bg-white px-4 py-3 placeholder:text-zinc-400 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 focus:outline-none dark:border-zinc-700 dark:bg-zinc-800"
                      placeholder="(31) 99999-9999"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium text-zinc-700 dark:text-zinc-300">
                      Preferência de Contato
                    </label>
                    <select
                      name="preferenciaContato"
                      value={formData.preferenciaContato}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-zinc-200 bg-white px-4 py-3 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 focus:outline-none dark:border-zinc-700 dark:bg-zinc-800"
                    >
                      <option value="email">Email</option>
                      <option value="whatsapp">WhatsApp</option>
                      <option value="telefone">Telefone</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Serviço e Situação */}
              <div>
                <h4 className="mb-6 text-xl font-bold text-zinc-900 dark:text-white">
                  Sua Situação
                </h4>
                <div className="grid gap-6">
                  <div>
                    <label className="mb-2 block text-sm font-medium text-zinc-700 dark:text-zinc-300">
                      Qual serviço você precisa? *
                    </label>
                    <select
                      name="servico"
                      value={formData.servico}
                      onChange={handleChange}
                      required
                      className="w-full rounded-xl border border-zinc-200 bg-white px-4 py-3 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 focus:outline-none dark:border-zinc-700 dark:bg-zinc-800"
                    >
                      <option value="">Selecione um serviço</option>
                      {servicosData.map((servico) => (
                        <option key={servico.id} value={servico.id}>
                          {servico.titulo}
                        </option>
                      ))}
                      <option value="outro">Outro</option>
                    </select>
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium text-zinc-700 dark:text-zinc-300">
                      Conte-nos brevemente sobre sua situação *
                    </label>
                    <textarea
                      name="situacao"
                      value={formData.situacao}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full rounded-xl border border-zinc-200 bg-white px-4 py-3 placeholder:text-zinc-400 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 focus:outline-none dark:border-zinc-700 dark:bg-zinc-800"
                      placeholder="Descreva o que está acontecendo, como podemos ajudar..."
                    />
                  </div>
                </div>
              </div>

              {/* Termos e Condições */}
              <div>
                <div className="rounded-xl border border-emerald-100 bg-emerald-50 p-6 dark:border-emerald-800 dark:bg-emerald-900/20">
                  <div className="flex items-start gap-4">
                    <input
                      type="checkbox"
                      name="aceitaLGPD"
                      checked={formData.aceitaLGPD}
                      onChange={handleChange}
                      required
                      className="mt-1 h-5 w-5 rounded border-zinc-300 text-emerald-600 focus:ring-emerald-500 dark:border-zinc-600"
                    />
                    <div>
                      <label className="font-medium text-zinc-900 dark:text-white">
                        Concordo com os termos de privacidade *
                      </label>
                      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                        Autorizo o tratamento dos meus dados pessoais conforme a
                        Lei Geral de Proteção de Dados (LGPD). Seus dados serão
                        usados exclusivamente para fornecer o acolhimento
                        solicitado e não serão compartilhados com terceiros sem
                        sua autorização.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Botão de Envio */}
              <div className="pt-6">
                <Button
                  type="submit"
                  className="w-full rounded-xl bg-linear-to-r from-emerald-600 to-green-600 py-6 text-sm font-bold uppercase hover:shadow-xl"
                >
                  Enviar Solicitação de Acolhimento
                </Button>
                <p className="mt-4 text-center text-sm text-zinc-500 dark:text-zinc-400">
                  Entraremos em contato em até 48 horas úteis
                </p>
              </div>
            </motion.form>

            {/* Atendimento Imediato */}
            {/* <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-8 rounded-2xl border border-amber-100 bg-amber-50 p-8 text-center dark:border-amber-800 dark:bg-amber-900/20"
            >
              <h4 className="mb-4 text-xl font-bold text-amber-900 dark:text-amber-100">
                ⚡ Precisa de Ajuda Imediata?
              </h4>
              <p className="mb-6 text-amber-800 dark:text-amber-200">
                Se você está em situação de emergência, entre em contato agora
                pelo nosso WhatsApp de emergência.
              </p>
              <a
                href="https://wa.me/5531999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-xl bg-amber-600 px-8 py-4 text-sm font-bold text-white hover:bg-amber-700"
              >
                WhatsApp de Emergência
              </a>
            </motion.div> */}
          </div>
        )}
      </div>
    </div>
  );
}
