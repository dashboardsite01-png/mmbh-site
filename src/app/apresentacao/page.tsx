"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Code2,
  FileEdit,
  Fingerprint,
  HeartHandshake,
  Image,
  Leaf,
  Lock,
  MapPin,
  MousePointer2,
  Palette,
  Scale,
  Share2,
  ShieldAlert,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Target,
  TrendingUp,
  Type,
  Users2,
  Zap,
} from "lucide-react";
import Link from "next/link";
import React from "react";

// --- COMPONENTES AUXILIARES PARA O ESTILO FAQ ---

const QuestionBox = ({
  q,
  a,
  icon: Icon,
}: {
  q: string;
  a: string;
  icon: React.ComponentType<{ size?: number }>;
}) => (
  <div className="group space-y-4 rounded-[32px] border border-emerald-100 bg-white p-8 shadow-sm transition-all hover:shadow-md">
    <div className="flex items-center gap-4">
      <div className="flex size-12 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-600 transition-colors group-hover:bg-emerald-600 group-hover:text-white">
        <Icon size={24} />
      </div>
      <h4 className="text-xl font-bold text-zinc-900">{q}</h4>
    </div>
    <p className="text-secondary-foreground leading-relaxed italic">{a}</p>
  </div>
);

const ColorCircle = ({
  color,
  name,
  hex,
}: {
  color: string;
  name: string;
  hex: string;
}) => (
  <div className="flex flex-col items-center gap-3">
    <div
      className={`size-16 rounded-full border border-zinc-100 shadow-inner ${color}`}
    />
    <div className="text-center">
      <p className="text-[10px] font-bold tracking-tighter text-zinc-900 uppercase">
        {name}
      </p>
      <p className="font-mono text-[10px] text-zinc-400">{hex}</p>
    </div>
  </div>
);

// --- SEÇÕES DA PÁGINA ---

export default function ProjetoApresentacao() {
  return (
    <main className="p-2">
      {/* HERO SECTION - O CONCEITO */}
      <section className="relative h-[80vh] w-full overflow-hidden rounded-t-2xl rounded-b-[60px] bg-linear-to-br from-emerald-950 to-zinc-900 text-white sm:rounded-t-3xl sm:rounded-b-[100px]">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#ffffff_1px,transparent_1px)] bg-size-[40px_40px]" />
        </div>

        <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 flex items-center gap-3"
          >
            <div className="h-px w-12 bg-emerald-500" />
            <span className="text-xs font-bold tracking-[0.5em] text-emerald-400 uppercase">
              Documentação do Movimento
            </span>
            <div className="h-px w-12 bg-emerald-500" />
          </motion.div>

          <h1 className="mt-4 text-4xl font-extralight text-white sm:text-6xl">
            A Revolução Verde <br />
            <span className="font-medium italic">
              <span className="bg-linear-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent">
                Digitalmente Organizada.
              </span>
            </span>
          </h1>

          <p className="mt-10 max-w-2xl text-zinc-300 sm:text-lg">
            Aqui desconstruímos cada decisão técnica e política por trás da{" "}
            <span className="font-medium text-emerald-300">
              Marcha da Maconha BH
            </span>
            . Mais que um site, uma plataforma de luta, acolhimento e
            transformação social.
          </p>
        </div>
        <div className="absolute bottom-10 left-1/2 flex -translate-x-1/2 items-center gap-2 text-[10px] font-bold tracking-widest text-zinc-400 uppercase">
          <Leaf size={14} className="text-emerald-400" />
          Página interna para apresentação do projeto
        </div>
      </section>

      {/* DESIGN - PSICOLOGIA E REFINO */}
      <section className="mx-auto max-w-7xl px-6 py-16 sm:py-16">
        <div className="mb-16">
          <span className="text-xs font-bold tracking-[0.3em] text-emerald-600 uppercase">
            Identidade Visual & UI
          </span>
          <h2 className="text-foreground mt-2 text-4xl font-bold sm:mt-3 sm:text-5xl md:mt-4 md:text-5xl lg:text-5xl">
            Design & <br />
            <span className="font-light text-zinc-400 italic">
              Psicologia do Ativismo
            </span>
          </h2>
          <div className="mt-6 h-1 w-16 bg-emerald-500" />
        </div>

        <div className="grid items-start gap-16 lg:grid-cols-2">
          {/* COLUNA ESQUERDA: FAQ E PSICOLOGIA */}
          <div className="space-y-8">
            <QuestionBox
              icon={Palette}
              q="Por que o Verde Revolução?"
              a="O verde representa vida, natureza e renovação. Fugimos das cores agressivas para comunicar esperança, cura e transformação social. Cada tonalidade foi escolhida para representar os diferentes aspectos do movimento: desde o verde claro da cannabis medicinal até o verde escuro da resistência histórica."
            />
            <QuestionBox
              icon={MousePointer2}
              q="Arquitetura da Confiança Visual"
              a="Cantos arredondados e espaçamentos generosos criam um ambiente acolhedor e seguro. Sabemos que muitos visitantes chegam em situações de vulnerabilidade jurídica ou médica. O design suave reduz a ansiedade e transmite segurança institucional."
            />

            {/* PALETA DE CORES VISUAL */}
            <div className="rounded-[40px] border border-emerald-100 bg-emerald-50/50 p-10">
              <h4 className="mb-8 flex items-center gap-2 text-sm font-bold tracking-widest text-emerald-600 uppercase">
                <Sparkles size={16} /> Sistema Cromático da Revolução
              </h4>
              <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
                <ColorCircle
                  color="bg-emerald-950"
                  name="Resistência"
                  hex="#022c22"
                />
                <ColorCircle
                  color="bg-emerald-600"
                  name="Revolução"
                  hex="#059669"
                />
                <ColorCircle
                  color="bg-emerald-100"
                  name="Esperança"
                  hex="#d1fae5"
                />
                <ColorCircle color="bg-white" name="Pureza" hex="#FFFFFF" />
              </div>
              <p className="mt-8 text-xs leading-relaxed text-emerald-600 italic">
                *A progressão do verde escuro para o claro representa a jornada
                da luta para a cura, da resistência para a renovação.
              </p>
            </div>
          </div>

          {/* COLUNA DIREITA: TIPOGRAFIA E CONCEITO */}
          <div className="sticky top-24 space-y-8">
            {/* SISTEMA DE TIPOGRAFIA */}
            <div className="rounded-[40px] border border-emerald-100 bg-linear-to-br from-white to-emerald-50 p-10">
              <div className="mb-10 flex items-center gap-4">
                <div className="rounded-2xl bg-emerald-600 p-3 text-white">
                  <Type size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-zinc-900">
                    Arquitetura Tipográfica
                  </h4>
                  <p className="text-xs tracking-widest text-emerald-600 uppercase">
                    Autoridade & Acolhimento
                  </p>
                </div>
              </div>

              <div className="space-y-10">
                {/* FONTE 01 */}
                <div className="flex flex-col gap-2">
                  <div className="flex items-end justify-between border-b border-emerald-100 pb-2">
                    <span className="font-(family-name:--font-comfortaa) text-4xl font-bold tracking-tighter text-zinc-900">
                      Comfortaa
                    </span>
                    <span className="text-[10px] font-bold text-emerald-600 uppercase">
                      Rounded Sans
                    </span>
                  </div>
                  <p className="text-sm leading-relaxed text-emerald-700 italic">
                    Utilizada para títulos e destaques. Transmite modernidade,
                    acessibilidade e movimento social contemporâneo.
                  </p>
                </div>

                {/* FONTE 02 */}
                <div className="flex flex-col gap-2">
                  <div className="flex items-end justify-between border-b border-emerald-100 pb-2">
                    <span className="font-(family-name:--font-inter) text-4xl font-normal text-zinc-900">
                      Inter
                    </span>
                    <span className="text-[10px] font-bold text-emerald-600 uppercase">
                      Neo-Grotesque
                    </span>
                  </div>
                  <p className="text-sm leading-relaxed text-emerald-700 italic">
                    Escolhida para textos longos. Garante máxima legibilidade
                    para documentos, artigos e informações jurídicas complexas.
                  </p>
                </div>
              </div>
            </div>

            {/* O CONCEITO DA CONEXÃO */}
            <div className="group relative flex flex-col justify-center overflow-hidden rounded-[50px] border border-emerald-100 bg-linear-to-br from-emerald-600 to-emerald-700 p-12 text-white shadow-2xl">
              <div className="absolute top-0 right-0 p-6 opacity-20 transition-opacity group-hover:opacity-40">
                <Leaf size={80} className="text-emerald-300" />
              </div>

              <h3 className="mb-6 text-2xl font-bold text-white">
                O Conceito{" "}
                <span className="font-light text-emerald-200 italic">
                  Conexão Verde
                </span>
              </h3>
              <p className="mb-8 leading-relaxed text-emerald-200">
                Cada elemento gráfico foi pensado para criar uma linha narrativa
                visual. Dos gradientes que representam transição à escolha
                cuidadosa de ícones que comunicam acolhimento, justiça e
                comunidade.
              </p>

              <div className="space-y-4 rounded-3xl border border-dashed border-emerald-300 bg-white/10 p-8 transition-all hover:bg-white/20">
                <div className="text-3xl leading-tight font-extralight text-white italic">
                  <h2 className="text-background mt-2 text-4xl font-bold sm:mt-3 sm:text-5xl md:mt-4 md:text-3xl lg:text-3xl">
                    A luta pela vida <br />
                    <span className="font-light text-emerald-200 italic">
                      <span className="underline decoration-emerald-300">
                        em cada pixel.
                      </span>
                    </span>
                  </h2>
                </div>

                <div className="flex items-center gap-2">
                  <CheckCircle2 size={12} className="text-emerald-300" />
                  <p className="text-[10px] font-bold tracking-[0.3em] text-emerald-300 uppercase">
                    Precisão Política Visual
                  </p>
                </div>
              </div>

              <p className="mt-8 text-xs leading-relaxed text-emerald-300 italic">
                *Esta identidade comunica que cada detalhe do movimento é
                tratado com seriedade política e cuidado humano.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SESSÃO 02 - TECNOLOGIA DE VANGUARDA */}
      <section className="relative overflow-hidden bg-linear-to-br from-emerald-950 to-zinc-900 py-24 text-white sm:rounded-[80px]">
        <div className="absolute top-0 right-0 h-125 w-125 translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-500/10 blur-[120px]" />

        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <div className="mb-16 lg:flex lg:items-center lg:justify-between">
            <div className="lg:max-w-2xl">
              <span className="text-xs font-bold tracking-[0.3em] text-emerald-400 uppercase">
                Engenharia Antiproibicionista
              </span>
              <h2 className="mt-4 text-4xl leading-tight font-bold text-white sm:text-5xl md:text-6xl">
                Tecnologia de <br />
                <span className="font-light text-emerald-300 italic">
                  Resistência Digital
                </span>
              </h2>
            </div>
            <div className="mt-8 lg:mt-0">
              <div className="flex items-center gap-4 rounded-2xl border border-emerald-500/20 bg-emerald-500/10 p-5 shadow-2xl backdrop-blur-md">
                <div className="animate-pulse rounded-lg bg-emerald-500 p-2">
                  <Zap size={20} className="text-white" fill="currentColor" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold tracking-widest text-emerald-300 uppercase">
                    Performance Revolucionária
                  </span>
                  <span className="text-sm">
                    Carregamento em <strong>0.8s</strong>
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-16 lg:grid-cols-2">
            <div className="space-y-8">
              <div className="space-y-4">
                <h3 className="flex items-center gap-3 text-2xl font-bold text-white">
                  Next.js 15:{" "}
                  <span className="font-light text-emerald-400 italic">
                    Tecnologia para a Luta
                  </span>
                </h3>
                <p className="leading-relaxed text-emerald-200">
                  Enquanto movimentos sociais tradicionais usam plataformas
                  desatualizadas, nós implementamos o{" "}
                  <span className="font-medium text-white">Next.js 15</span>,
                  garantindo segurança, privacidade e performance para ativistas
                  e visitantes.
                </p>
                <p className="leading-relaxed text-emerald-200">
                  Esta é a mesma infraestrutura que protege organizações de
                  direitos humanos globais. Sua arquitetura serverless e
                  pré-renderização garantem que o site permaneça online mesmo
                  sob pressão.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-4">
                {[
                  {
                    t: "Segurança de Ativista",
                    d: "Estrutura protegida contra vigilância. Formulários de acolhimento com criptografia de ponta a ponta para proteger quem busca ajuda.",
                  },
                  {
                    t: "SEO de Impacto",
                    d: "Conteúdo pré-renderizado para dominar buscas sobre antiproibicionismo, cannabis medicinal e justiça social em Minas Gerais.",
                  },
                  {
                    t: "Navegação Resiliente",
                    d: "PWA (Progressive Web App) que funciona offline. Fundamental para mobilizações de rua e áreas com conexão limitada.",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="group flex gap-4 rounded-[24px] border border-emerald-500/10 bg-emerald-500/5 p-5 transition-all hover:bg-emerald-500/10"
                  >
                    <CheckCircle2
                      className="shrink-0 text-emerald-400 transition-transform group-hover:scale-110"
                      size={20}
                    />
                    <div>
                      <strong className="mb-1 block text-sm text-white">
                        {item.t}
                      </strong>
                      <span className="text-xs leading-relaxed text-emerald-300">
                        {item.d}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="group flex flex-col justify-between rounded-[32px] border border-emerald-500/20 bg-emerald-500/5 p-8 transition-all hover:bg-emerald-500/10">
                <div>
                  <div className="mb-6 w-fit rounded-2xl bg-emerald-500/20 p-3 transition-colors group-hover:bg-emerald-500">
                    <Code2
                      size={28}
                      className="text-emerald-400 transition-colors group-hover:text-white"
                    />
                  </div>
                  <h4 className="mb-2 text-lg font-bold text-white">
                    Código da Resistência
                  </h4>
                  <p className="text-xs leading-relaxed text-emerald-300">
                    100% autoral e aberto. Sem dependência de corporações,
                    mantendo a autonomia do movimento.
                  </p>
                </div>
              </div>

              <div className="group flex flex-col justify-between rounded-[32px] border border-emerald-500/20 bg-emerald-500/5 p-8 transition-all hover:bg-emerald-500/10">
                <div>
                  <div className="mb-6 w-fit rounded-2xl bg-emerald-500/20 p-3 transition-colors group-hover:bg-emerald-500">
                    <ShieldCheck
                      size={28}
                      className="text-emerald-400 transition-colors group-hover:text-white"
                    />
                  </div>
                  <h4 className="mb-2 text-lg font-bold text-white">
                    Privacidade Radical
                  </h4>
                  <p className="text-xs leading-relaxed text-emerald-300">
                    Zero rastreamento invasivo. Cookies apenas essenciais,
                    respeitando a privacidade de ativistas e apoiadores.
                  </p>
                </div>
              </div>

              <div className="group flex flex-col justify-between rounded-[32px] border border-emerald-500/20 bg-emerald-500/5 p-8 transition-all hover:bg-emerald-500/10">
                <div>
                  <div className="mb-6 w-fit rounded-2xl bg-emerald-500/20 p-3 transition-colors group-hover:bg-emerald-500">
                    <TrendingUp
                      size={28}
                      className="text-emerald-400 transition-colors group-hover:text-white"
                    />
                  </div>
                  <h4 className="mb-2 text-lg font-bold text-white">
                    Escalabilidade Comunitária
                  </h4>
                  <p className="text-xs leading-relaxed text-emerald-300">
                    Suporta picos de acesso durante mobilizações. Estrutura
                    preparada para crescimento orgânico do movimento.
                  </p>
                </div>
              </div>

              <div className="group flex flex-col justify-between rounded-[32px] border border-emerald-500/20 bg-emerald-500/5 p-8 transition-all hover:bg-emerald-500/10">
                <div>
                  <div className="mb-6 w-fit rounded-2xl bg-emerald-500/20 p-3 transition-colors group-hover:bg-emerald-500">
                    <Fingerprint
                      size={28}
                      className="text-emerald-400 transition-colors group-hover:text-white"
                    />
                  </div>
                  <h4 className="mb-2 text-lg font-bold text-white">
                    Propriedade Coletiva
                  </h4>
                  <p className="text-xs leading-relaxed text-emerald-300">
                    Código aberto para o coletivo. Transparência total da
                    infraestrutura que sustenta a luta digital.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DASHBOARD - AUTONOMIA DO COLETIVO */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-16 text-center">
          <span className="text-xs font-bold tracking-[0.3em] text-emerald-600 uppercase">
            Gestão Coletiva
          </span>
          <h2 className="text-foreground mt-2 text-4xl font-bold sm:mt-3 sm:text-5xl md:mt-4 md:text-5xl lg:text-5xl">
            Autonomia Digital:{" "}
            <span className="font-light text-zinc-400 italic">
              O Coletivo no Comando
            </span>
          </h2>
          <p className="text-secondary-foreground mx-auto mt-4 max-w-2xl leading-relaxed">
            O movimento não depende de terceiros para comunicação. Desenvolvemos
            um painel de gestão coletiva e transparente.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              icon: Users2,
              t: "Gestão de Coletivos",
              d: "Cadastro de membros, grupos de trabalho e responsabilidades de forma transparente e horizontal.",
            },
            {
              icon: Scale,
              t: "Casos de Acolhimento",
              d: "Sistema sigiloso para acompanhamento de casos jurídicos e de saúde, sempre respeitando a LGPD.",
            },
            {
              icon: BookOpen,
              t: "Biblioteca Digital",
              d: "Gestão de documentos, manifestos e materiais educativos. Publicação de artigos e atualizações do blog.",
            },
            {
              icon: FileEdit,
              t: "Conteúdo e Mobilização",
              d: "Publicação de chamadas para atos, atualização de banners e gestão de campanhas digitais.",
            },
            {
              icon: Image,
              t: "Acervo Visual",
              d: "Banco de imagens das mobilizações, galeria histórica e gestão do patrimônio visual do movimento.",
            },
            {
              icon: Share2,
              t: "Redes e Comunicação",
              d: "Links para Instagram, WhatsApp do coletivo e outras redes de forma centralizada.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="rounded-[40px] border border-emerald-100 bg-emerald-50 p-10 transition-all hover:bg-white hover:shadow-2xl"
            >
              <div className="mb-6 flex size-14 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-600">
                <item.icon size={28} />
              </div>
              <h4 className="mb-3 text-xl font-bold text-zinc-900">{item.t}</h4>
              <p className="text-sm leading-relaxed text-emerald-700">
                {item.d}
              </p>
            </div>
          ))}
        </div>

        {/* PROTOCOLO DE SEGURANÇA E ÉTICA */}
        <div className="mt-12 overflow-hidden rounded-[40px] border-2 border-emerald-500/20 shadow-[0_20px_50px_rgba(5,150,105,0.1)] transition-all hover:border-emerald-500">
          <div className="flex flex-col lg:flex-row">
            {/* Lado Esquerdo - Checklist */}
            <div className="flex-1 space-y-8 p-10 lg:p-12">
              <div className="flex items-center gap-3">
                <div className="flex size-10 animate-pulse items-center justify-center rounded-xl bg-emerald-100 text-emerald-600">
                  <ShieldAlert size={24} />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-black tracking-[0.3em] text-emerald-600 uppercase">
                    Protocolo Ético
                  </span>
                  <h4 className="text-3xl font-bold text-zinc-900">
                    Validação Coletiva Obrigatória
                  </h4>
                </div>
              </div>

              <p className="text-secondary-foreground leading-relaxed">
                Para garantir a integridade política e segurança dos envolvidos,
                estes pontos devem ser validados coletivamente:
              </p>

              <div className="grid gap-4">
                {[
                  {
                    t: "Informações de Contato",
                    d: "Valide números de WhatsApp institucional e emails. Erros aqui impedem o acolhimento de quem precisa.",
                    icon: MapPin,
                  },
                  {
                    t: "Rede de Apoio",
                    d: "Revise contatos de advogados, médicos e psicólogos da rede. Dados desatualizados comprometem vidas.",
                    icon: Users2,
                  },
                  {
                    t: "Documentos Políticos",
                    d: "Manifestos e textos políticos devem ser revisados pelo coletivo para garantir precisão e alinhamento.",
                    icon: Scale,
                    critical: true,
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className={`flex gap-4 rounded-3xl border p-5 transition-colors ${item.critical ? "border-emerald-100 bg-emerald-50" : "border-emerald-100 bg-emerald-50"}`}
                  >
                    <CheckCircle2
                      size={20}
                      className={
                        item.critical
                          ? "shrink-0 text-emerald-600"
                          : "shrink-0 text-emerald-600"
                      }
                    />
                    <div>
                      <strong
                        className={`block text-sm ${item.critical ? "text-emerald-900" : "text-zinc-900"}`}
                      >
                        {item.t}
                      </strong>
                      <span
                        className={`text-xs leading-relaxed ${item.critical ? "font-medium text-emerald-700" : "text-emerald-700"}`}
                      >
                        {item.d}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Lado Direito - Nota de Responsabilidade */}
            <div className="relative flex flex-col justify-center overflow-hidden bg-emerald-600 p-10 text-white lg:w-[35%]">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <ShieldAlert size={200} />
              </div>

              <div className="relative z-10 space-y-6">
                <h5 className="flex items-center gap-2 text-xl font-bold">
                  <Leaf size={20} /> Princípio da Precaução
                </h5>
                <p className="text-sm leading-relaxed text-emerald-100 italic">
                  &ldquo;Na luta antiproibicionista, a segurança digital é
                  segurança física. Cada dado publicado passa por tripla
                  verificação para proteger ativistas e quem busca ajuda.&rdquo;
                </p>
                <div className="border-t border-emerald-400/30 pt-6">
                  <p className="text-[10px] font-bold tracking-widest text-emerald-200 uppercase">
                    Decisão Coletiva
                  </p>
                  <p className="mt-1 text-xs text-emerald-100">
                    O lançamento de novas funcionalidades requer aprovação em
                    assembleia.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-8 rounded-[40px] bg-emerald-600 p-8 text-white md:flex-row">
          <div className="flex items-center gap-6">
            <div className="flex size-16 items-center justify-center rounded-2xl bg-emerald-500">
              <Lock size={32} className="text-white" />
            </div>
            <div>
              <h4 className="text-background text-xl font-bold">
                Segurança Militante
              </h4>
              <p className="text-sm text-emerald-200">
                Criptografia avançada e autenticação em duas etapas para
                proteção do coletivo.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex items-center gap-2 text-xs font-bold tracking-widest text-emerald-300 uppercase">
              <Smartphone size={16} /> 100% Mobile-First
            </div>
          </div>
        </div>
      </section>

      {/* SESSÃO 04 - ERGONOMIA MOBILE-FIRST */}
      <section className="overflow-hidden bg-emerald-50 py-24 sm:rounded-t-[100px]">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-start gap-16 lg:grid-cols-2">
            <div className="space-y-10">
              <div className="mb-16">
                <span className="text-xs font-bold tracking-[0.3em] text-emerald-600 uppercase">
                  Tecnologia de Rua
                </span>
                <h2 className="mt-4 text-3xl leading-tight font-bold text-zinc-900 md:text-5xl">
                  Arquitetura <br />
                  <span className="font-light text-emerald-600 italic">
                    Mobile-First Militante
                  </span>
                </h2>
                <div className="mt-6 h-1 w-16 bg-emerald-500" />
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3 font-bold text-zinc-900 italic">
                  <Smartphone className="text-emerald-600" /> &ldquo;O celular é
                  a trincheira digital.&rdquo;
                </div>
                <p className="text-secondary-foreground leading-relaxed">
                  Mais de 90% do acesso ao movimento acontece via smartphone. Em
                  protestos, reuniões e momentos de urgência, a interface
                  precisa funcionar perfeitamente em qualquer tela.
                </p>
              </div>

              {/* GRID DE DIFERENCIAIS MOBILE */}
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                {[
                  {
                    t: "Navegação em Movimento",
                    d: "Botões vitais posicionados para uso com uma mão durante mobilizações de rua.",
                    icon: MousePointer2,
                  },
                  {
                    t: "Funcionalidade Offline",
                    d: "Conteúdo essencial disponível sem internet. Fundamental para áreas com sinal bloqueado.",
                    icon: Zap,
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="rounded-3xl border border-emerald-100 bg-white p-6 shadow-sm"
                  >
                    <item.icon className="mb-3 text-emerald-600" size={20} />
                    <h4 className="mb-2 font-bold text-zinc-900">{item.t}</h4>
                    <p className="text-xs leading-relaxed text-emerald-700">
                      {item.d}
                    </p>
                  </div>
                ))}
              </div>

              <p className="border-l-3 border-emerald-500 pl-4 text-sm leading-relaxed text-emerald-600 italic">
                *Sites convencionais falham em momentos críticos. Nosso design
                garante que a informação chegue onde e quando for necessário.
              </p>
            </div>

            {/* REPRESENTAÇÃO VISUAL MOBILE */}
            <div className="relative flex justify-center">
              <div className="absolute -inset-10 rounded-full bg-emerald-500/10 blur-3xl" />
              <div className="relative aspect-9/18 w-full max-w-[320px] overflow-hidden rounded-[50px] border-8 border-emerald-600 bg-white shadow-2xl">
                <div className="absolute inset-0 flex flex-col justify-between p-6">
                  <div className="h-4 w-full animate-pulse rounded-full bg-emerald-100" />
                  <div className="space-y-4">
                    <div className="h-4 w-2/3 rounded-full bg-emerald-100" />
                    <div className="h-12 w-full rounded-2xl bg-emerald-200" />
                  </div>
                  {/* ZONA DE AÇÃO RÁPIDA */}
                  <div className="absolute bottom-10 left-1/2 flex h-64 w-64 -translate-x-1/2 items-center justify-center rounded-full border-2 border-dashed border-emerald-500 bg-emerald-500/20">
                    <span className="text-center text-[10px] font-bold tracking-widest text-emerald-600 uppercase">
                      Acesso Rápido <br /> em Situações Críticas
                    </span>
                  </div>
                  <div className="flex h-16 w-full items-center justify-center rounded-3xl bg-emerald-600 text-sm font-bold text-white shadow-lg">
                    Preciso de Ajuda Agora
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SESSÃO 05 - COMUNICAÇÃO E NARRATIVA */}
      <section className="mx-auto max-w-7xl px-6 py-16 sm:py-16">
        <div className="mb-20 text-center">
          <span className="text-xs font-bold tracking-[0.3em] text-emerald-600 uppercase">
            Psicologia da Mobilização
          </span>
          <h2 className="mt-4 text-3xl leading-tight font-bold text-zinc-900 md:text-5xl">
            Narrativa & <br />
            <span className="font-light text-emerald-600 italic">
              Engajamento Político
            </span>
          </h2>
          <div className="mx-auto mt-6 h-1 w-16 bg-emerald-500" />
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* CARD DE ESTRATÉGIA 01 */}
          <div className="group flex flex-col justify-between rounded-[40px] bg-emerald-600 p-10 text-white lg:col-span-1">
            <div className="space-y-6">
              <div className="flex size-14 items-center justify-center rounded-2xl border border-emerald-400 bg-emerald-500/20 text-white">
                <Target size={28} />
              </div>
              <h3 className="text-background text-2xl leading-tight font-bold">
                O Funil da <br />
                <span className="font-light text-emerald-200 italic">
                  Conscientização
                </span>
              </h3>
              <p className="text-sm leading-relaxed text-emerald-200">
                Não escrevemos apenas textos; construímos uma jornada de
                politização. O conteúdo guia da curiosidade inicial ao
                engajamento ativo na luta antiproibicionista.
              </p>
            </div>
            <div className="mt-10 flex items-center justify-between border-t border-emerald-400 pt-6 text-xs font-bold tracking-widest text-white uppercase">
              Transformação Social <ArrowRight size={14} />
            </div>
          </div>

          {/* GRID DE GATILHOS POLÍTICOS */}
          <div className="grid gap-6 md:grid-cols-2 lg:col-span-2">
            {[
              {
                t: "Gatilhos de Justiça Social",
                d: "Conectamos a regulamentação da cannabis com lutas contra o racismo, encarceramento em massa e desigualdade.",
                icon: Scale,
              },
              {
                t: "Arquitetura da Esperança",
                d: "Cada seção termina com chamadas para ação concreta: doações, voluntariado, assinatura de manifestos.",
                icon: ShieldCheck,
              },
              {
                t: "Acessibilidade Discursiva",
                d: "Títulos claros para quem está conhecendo o movimento, aprofundamento progressivo para quem quer se envolver mais.",
                icon: Sparkles,
              },
              {
                t: "Chamadas de Ação (CTA) Políticas",
                d: "Botões que não dizem apenas 'Saiba mais', mas 'Junte-se à luta', 'Apoie um perseguido', 'Mude uma vida'.",
                icon: HeartHandshake,
              },
            ].map((item, i) => (
              <div
                key={i}
                className="flex flex-col justify-between rounded-[40px] border border-emerald-100 bg-emerald-50 p-8 shadow-sm transition-all hover:bg-white"
              >
                <div>
                  <item.icon className="mb-4 text-emerald-600" size={24} />
                  <h4 className="mb-2 font-bold text-zinc-900">{item.t}</h4>
                  <p className="text-xs leading-relaxed text-emerald-700">
                    {item.d}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CONCLUSÃO DA ESTRATÉGIA */}
        <div className="mt-20 flex flex-col items-center rounded-[40px] border border-dashed border-emerald-200 bg-white p-10 text-center">
          <h4 className="mb-4 text-lg font-bold text-zinc-900 italic">
            &ldquo;O design atrai, mas é a palavra que organiza e
            mobiliza.&rdquo;
          </h4>
          <p className="max-w-3xl text-sm leading-relaxed text-emerald-700">
            Toda a narrativa deste site foi estruturada para transformar
            indignação em ação organizada. Ao conectar informações políticas com
            ferramentas concretas de engajamento, aumentamos a capacidade de
            mobilização do movimento.
          </p>
        </div>
      </section>

      {/* SESSÃO 06 - HOSPEDAGEM E INFRAESTRUTURA */}
      <section className="relative overflow-hidden bg-linear-to-br from-emerald-950 to-zinc-900 py-24 text-white sm:rounded-b-[100px]">
        <div className="pointer-events-none absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#10b98112_1px,transparent_1px),linear-gradient(to_bottom,#10b98112_1px,transparent_1px)] bg-size-[40px_40px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <div className="mb-16">
            <span className="text-xs font-bold tracking-[0.3em] text-emerald-400 uppercase">
              Infraestrutura Livre
            </span>
            <h2 className="text-background mt-4 text-3xl leading-tight font-bold md:text-5xl">
              Tecnologia Livre: <br />
              <span className="font-light text-emerald-300 italic">
                Sem Dependência Corporativa
              </span>
            </h2>
            <div className="mt-6 h-1 w-16 bg-emerald-500" />
          </div>

          <div className="grid items-start gap-12 lg:grid-cols-2">
            <div className="space-y-8">
              <div className="space-y-6">
                <h3 className="text-background flex items-center gap-3 text-2xl font-bold">
                  Vercel &{" "}
                  <span className="text-3xl font-light text-emerald-400 italic">
                    Software Livre
                  </span>
                </h3>
                <p className="leading-relaxed text-emerald-300">
                  O site está hospedado na{" "}
                  <span className="font-bold text-white">Vercel</span>,
                  utilizando o plano gratuito que não expõe o movimento a custos
                  operacionais. Toda a stack é baseada em tecnologias abertas e
                  livres.
                </p>
                <div className="rounded-3xl border border-emerald-500/20 bg-emerald-500/10 p-6 text-sm text-emerald-300 italic">
                  &ldquo;Escolhemos tecnologias que garantem autonomia. O
                  movimento pode migrar a qualquer momento sem perder conteúdo
                  ou funcionalidades.&rdquo;
                </div>
              </div>

              {/* CARDS DE TECNOLOGIAS */}
              <div className="grid grid-cols-1 gap-4">
                {[
                  {
                    t: "Next.js 15 (Open Source)",
                    d: "Framework moderno e performático, com comunidade ativa e documentação aberta.",
                  },
                  {
                    t: "Tailwind CSS (Utility-First)",
                    d: "Sistema de design que permite manutenção e customização sem dependência de designers externos.",
                  },
                  {
                    t: "Framer Motion (Animações)",
                    d: "Biblioteca de animações que torna a experiência acessível e engajadora sem pesar no desempenho.",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex gap-4 rounded-2xl border border-emerald-500/10 bg-emerald-500/5 p-5 transition-colors hover:bg-emerald-500/10"
                  >
                    <CheckCircle2
                      className="shrink-0 text-emerald-400"
                      size={20}
                    />
                    <div>
                      <h4 className="text-sm font-bold text-white">{item.t}</h4>
                      <p className="mt-1 text-xs text-emerald-300">{item.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ESTRATÉGIA DE SUSTENTABILIDADE */}
            <div className="sticky top-24">
              <div className="rounded-[40px] border border-emerald-500/20 bg-emerald-500/10 p-10">
                <div className="mb-8 flex items-center gap-4">
                  <div className="rounded-2xl bg-emerald-500 p-3">
                    <Leaf size={28} className="text-white" />
                  </div>
                  <h4 className="text-xl font-bold tracking-tighter text-white uppercase">
                    Sustentabilidade Digital
                  </h4>
                </div>

                <p className="mb-8 text-sm leading-relaxed text-emerald-300">
                  Desenvolvemos uma arquitetura que mantém custos próximos de
                  zero enquanto o movimento cresce organicamente. Quando
                  necessário, upgrades são simples e mantêm a autonomia.
                </p>

                <div className="space-y-6">
                  <div className="flex items-center justify-between border-b border-emerald-400/20 pb-4">
                    <span className="text-sm text-emerald-300">
                      Custo Atual Operacional
                    </span>
                    <span className="font-bold text-white">
                      R$ 0,00{" "}
                      <small className="text-[10px] text-emerald-300">
                        /mês
                      </small>
                    </span>
                  </div>

                  <h5 className="flex items-center gap-2 text-sm font-bold text-white">
                    <Zap size={16} className="text-emerald-400" /> Vantagens da
                    Arquitetura:
                  </h5>

                  <ul className="grid grid-cols-1 gap-3">
                    {[
                      "Domínio próprio (.org) sem custos ocultos",
                      "Hospedagem em nuvem global sem mensalidade",
                      "Backup automático e gratuito",
                      "SSL (HTTPS) incluso sem custo adicional",
                      "CDN global para acesso rápido em todo Brasil",
                    ].map((feature, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-3 text-xs text-emerald-300"
                      >
                        <div className="size-1 rounded-full bg-emerald-400" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8 rounded-2xl border border-emerald-400/20 bg-emerald-500/10 p-4 text-[10px] leading-relaxed text-emerald-300 italic">
                    *Estrutura preparada para doações via Pix/apoio coletivo
                    quando necessário. Transparência total nos gastos.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SESSÃO 07 - SEO & VISIBILIDADE */}
      <section className="mx-auto max-w-7xl px-6 py-24 sm:py-32">
        <div className="mb-16">
          <span className="text-xs font-bold tracking-[0.3em] text-emerald-600 uppercase">
            Visibilidade Política
          </span>
          <h2 className="mt-4 text-3xl leading-tight font-bold text-zinc-900 md:text-5xl">
            SEO de Impacto: <br />
            <span className="font-light text-emerald-600 italic">
              Amplificando a Luta
            </span>
          </h2>
          <div className="mt-6 h-1 w-16 bg-emerald-500" />
        </div>

        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="space-y-8">
            <p className="text-secondary-foreground leading-relaxed">
              O Google é uma trincheira importante na disputa de narrativas.
              Estruturamos o site para dominar buscas por{" "}
              <span className="font-bold text-zinc-800">
                cannabis medicinal
              </span>
              ,{" "}
              <span className="font-bold text-zinc-800">direitos humanos</span>{" "}
              e{" "}
              <span className="font-bold text-zinc-800">
                antiproibicionismo em BH
              </span>
              .
            </p>

            <div className="grid gap-4">
              {[
                {
                  t: "Schema para Organizações Sociais",
                  d: "Estrutura de dados que informa ao Google sobre a seriedade e história do movimento (desde 2008).",
                },
                {
                  t: "Conteúdo YMYL (Your Money Your Life)",
                  d: "Posicionamos o site como fonte confiável para informações de saúde e jurídicas relacionadas à cannabis.",
                },
                {
                  t: "Velocidade como Credibilidade",
                  d: "Sites rápidos são considerados mais confiáveis pelo algoritmo do Google.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex gap-4 rounded-3xl border border-emerald-100 bg-white p-6 shadow-sm"
                >
                  <TrendingUp className="shrink-0 text-emerald-600" />
                  <div>
                    <h4 className="text-sm font-bold text-zinc-900">
                      {item.t}
                    </h4>
                    <p className="mt-1 text-xs text-emerald-700">{item.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[50px] border border-emerald-100 bg-emerald-50 p-10">
            <h4 className="mb-6 text-xl font-bold text-zinc-900 italic">
              &ldquo;Ser encontrado é o primeiro passo para transformar.&rdquo;
            </h4>
            <p className="text-sm leading-relaxed text-emerald-700">
              Desenvolvemos a base para que pessoas buscando ajuda jurídica,
              informação sobre cannabis medicinal ou formas de se engajar na
              luta encontrem o movimento como primeira opção em Minas Gerais.
            </p>
          </div>
        </div>
      </section>

      {/* SESSÃO 08 - SEGURANÇA E PRIVACIDADE */}
      <section className="bg-emerald-50 py-24 sm:rounded-t-[100px]">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-start justify-between gap-12 lg:flex-row">
            <div className="lg:w-1/2">
              <span className="text-xs font-bold tracking-[0.3em] text-emerald-600 uppercase">
                Segurança Militante
              </span>
              <h2 className="mt-4 text-3xl leading-tight font-bold text-zinc-900 md:text-5xl">
                Blindagem Digital <br />
                <span className="font-light text-emerald-600 italic">
                  para Ativistas
                </span>
              </h2>
              <p className="text-secondary-foreground mt-8 leading-relaxed">
                Tratamos os dados de ativistas e pessoas em situação de
                vulnerabilidade com o rigor necessário em contextos de luta
                social. Total conformidade com a LGPD e princípios éticos do
                ativismo.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:w-1/2">
              <div className="rounded-[40px] border border-emerald-200 bg-white p-8">
                <ShieldCheck className="mb-4 text-emerald-600" />
                <h4 className="mb-2 font-bold text-zinc-900">
                  Criptografia de Ponta
                </h4>
                <p className="text-xs text-emerald-700">
                  Todos os formulários de acolhimento usam criptografia
                  avançada. Dados sensíveis nunca transitam em texto plano.
                </p>
              </div>
              <div className="rounded-[40px] border border-emerald-200 bg-white p-8">
                <Lock className="mb-4 text-emerald-600" />
                <h4 className="mb-2 font-bold text-zinc-900">Mineração Zero</h4>
                <p className="text-xs text-emerald-700">
                  Sem trackers, analytics invasivos ou coleta de dados
                  desnecessária. Respeito total à privacidade.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONCLUSÃO FINAL E CTA */}
      <section className="mx-auto max-w-7xl px-6 py-24 text-center">
        <div className="mb-8 inline-flex items-center gap-2 rounded-full bg-emerald-100 px-4 py-2 text-[10px] font-bold tracking-widest text-emerald-700 uppercase">
          <Leaf size={14} /> O futuro da luta está organizado digitalmente
        </div>

        <h3 className="mb-10 text-4xl leading-tight font-extralight text-zinc-900 md:text-6xl">
          Mais que um site, <br />
          <span className="font-bold italic underline decoration-emerald-500 underline-offset-8">
            uma ferramenta de transformação.
          </span>
        </h3>

        <p className="text-secondary-foreground mx-auto mb-12 max-w-2xl leading-relaxed">
          Esta plataforma foi construída para fortalecer o movimento pelos
          próximos anos. Está pronta para acolher, organizar e amplificar a luta
          pela liberdade e justiça social.
        </p>

        <div className="flex flex-col items-center justify-center gap-6 sm:flex-row">
          <Link href="/">
            <Button className="group h-20 rounded-full bg-emerald-600 px-12 text-white transition-all hover:bg-emerald-700 hover:shadow-[0_20px_40px_rgba(5,150,105,0.3)]">
              <span className="flex items-center gap-4 text-xl font-bold">
                Explorar o Site
                <ArrowRight
                  size={24}
                  className="transition-transform group-hover:translate-x-2"
                />
              </span>
            </Button>
          </Link>
        </div>

        <div className="mt-20 grid grid-cols-2 gap-8 border-t border-emerald-100 pt-10 md:grid-cols-4">
          {[
            { v: "100%", l: "Código Aberto" },
            { v: "24/7", l: "Disponível" },
            { v: "Zero", l: "Custo Fixo" },
            { v: "Coletivo", l: "No Comando" },
          ].map((s, i) => (
            <div key={i}>
              <div className="text-2xl font-bold text-zinc-900">{s.v}</div>
              <div className="text-[10px] font-bold tracking-widest text-emerald-600 uppercase">
                {s.l}
              </div>
            </div>
          ))}
        </div>
        <p className="mt-12 text-[10px] tracking-[0.4em] text-emerald-600 uppercase">
          Projeto desenvolvido com Next.js 15 + Tailwind CSS + Framer Motion
        </p>
      </section>
    </main>
  );
}
