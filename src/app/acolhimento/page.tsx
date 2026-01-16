// app/(pages)/acolhimento/page.tsx
"use client";

import { Footer } from "@/components/footer";
import { easeOut, motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";
import { IoWarningSharp } from "react-icons/io5";
import {
  AcolhimentoInfo,
  ComoFunciona,
  Depoimentos,
  FormularioAcolhimento,
  HeroAcolhimento,
  NossosServicos,
  PerguntasFrequentes,
} from "./sections";

export default function Acolhimento() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [servicoSelecionado, setServicoSelecionado] = useState<string | null>(
    null,
  );

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);

      // Atualizar seção ativa
      const sections = [
        "info",
        "servicos",
        "como-funciona",
        "depoimentos",
        "faq",
        "formulario",
      ];

      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Chamar inicialmente

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const sectionAnimation = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.6, ease: easeOut },
  };

  const handleSectionClick = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <main className="bg-background text-foreground min-h-screen overflow-hidden">
      {/* Background decorativo */}
      <div className="fixed inset-0 z-[-1]">
        <div className="absolute inset-0 bg-linear-to-b from-emerald-50/20 via-transparent to-transparent dark:from-emerald-900/5" />
        <div className="absolute top-1/4 right-0 h-96 w-96 rounded-full bg-linear-to-r from-emerald-200/10 to-green-200/10 blur-3xl dark:from-emerald-900/10 dark:to-green-900/10" />
        <div className="absolute bottom-1/4 left-0 h-96 w-96 rounded-full bg-linear-to-r from-amber-200/5 to-orange-200/5 blur-3xl dark:from-amber-900/5 dark:to-orange-900/5" />
      </div>

      {/* Botão de voltar ao topo */}
      {showScrollTop && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          onClick={scrollToTop}
          className="fixed right-8 bottom-8 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-linear-to-r from-emerald-600 to-green-600 text-white shadow-2xl shadow-emerald-600/30 transition-all hover:scale-110 hover:shadow-emerald-600/50"
          aria-label="Voltar ao topo"
        >
          <ArrowUp className="h-6 w-6" />
        </motion.button>
      )}

      {/* Marcador decorativo flutuante */}
      <div className="pointer-events-none fixed top-1/2 left-4 z-30 hidden -translate-y-1/2 lg:block">
        <div className="relative">
          <div className="flex flex-col items-center gap-8">
            {[
              { id: "info", label: "Info" },
              { id: "servicos", label: "Serviços" },
              { id: "como-funciona", label: "Como Funciona" },
              { id: "depoimentos", label: "Depoimentos" },
              { id: "faq", label: "FAQ" },
              { id: "formulario", label: "Formulário" },
            ].map((section) => (
              <button
                key={section.id}
                onClick={() => handleSectionClick(section.id)}
                className="group relative flex items-center gap-4 text-xs font-medium tracking-widest text-zinc-400 uppercase transition-colors hover:text-emerald-600"
              >
                <span className="hidden opacity-0 transition-all group-hover:translate-x-2 group-hover:opacity-100">
                  {section.label}
                </span>
                <div
                  className={`h-2 w-2 rounded-full transition-all group-hover:h-3 group-hover:w-3 ${
                    activeSection === section.id
                      ? "h-3 w-3 bg-emerald-500"
                      : "bg-zinc-300 group-hover:bg-emerald-500"
                  }`}
                />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative">
        <HeroAcolhimento />
      </section>

      {/* Conteúdo principal com animações */}
      <div className="relative flex flex-col gap-12 pb-12">
        {/* Informações do Acolhimento */}
        <motion.section
          id="info"
          {...sectionAnimation}
          className="container mx-auto px-4 pt-12"
        >
          <AcolhimentoInfo />
        </motion.section>

        {/* Nossos Serviços */}
        <motion.section
          id="servicos"
          {...sectionAnimation}
          transition={{ ...sectionAnimation.transition, delay: 0.1 }}
          className="relative"
        >
          <div className="absolute inset-0" />
          <div className="relative container mx-auto px-4">
            <NossosServicos
              servicoSelecionado={servicoSelecionado}
              setServicoSelecionado={setServicoSelecionado}
            />
          </div>
        </motion.section>

        {/* Como Funciona */}
        <motion.section
          id="como-funciona"
          {...sectionAnimation}
          transition={{ ...sectionAnimation.transition, delay: 0.2 }}
          className="container mx-auto px-4"
        >
          <ComoFunciona />
        </motion.section>

        {/* Depoimentos */}
        <motion.section
          id="depoimentos"
          {...sectionAnimation}
          transition={{ ...sectionAnimation.transition, delay: 0.3 }}
          className="container mx-auto px-4"
        >
          <Depoimentos />
        </motion.section>

        {/* Perguntas Frequentes */}
        <motion.section
          id="faq"
          {...sectionAnimation}
          transition={{ ...sectionAnimation.transition, delay: 0.4 }}
          className="container mx-auto px-4"
        >
          <PerguntasFrequentes />
        </motion.section>

        {/* Formulário de Acolhimento */}
        <motion.section
          id="formulario"
          {...sectionAnimation}
          transition={{ ...sectionAnimation.transition, delay: 0.5 }}
          className="container mx-auto px-4"
        >
          <FormularioAcolhimento servicoSelecionado={servicoSelecionado} />
        </motion.section>
      </div>

      {/* Call to Action final */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative overflow-hidden py-24"
      >
        <div className="absolute inset-0 bg-linear-to-b from-transparent via-emerald-50/30 to-transparent dark:via-emerald-900/10" />
        <div className="relative container mx-auto px-4 text-center">
          <div className="mx-auto mb-8 inline-flex items-center gap-3 rounded-full border border-orange-700 bg-orange-100 px-6 py-3 dark:bg-emerald-900/30">
            <span className="flex items-center justify-center gap-3 text-sm font-bold tracking-wider text-orange-700 uppercase dark:text-emerald-300">
              <IoWarningSharp className="h-4 w-4 text-orange-700 dark:text-emerald-300" />
              Ajuda Imediata
            </span>
          </div>

          <h3 className="mb-6 text-4xl leading-tight font-black md:text-5xl">
            <span className="text-zinc-900 dark:text-white">
              Precisa de Ajuda
            </span>
            <br />
            <span className="bg-linear-to-r from-emerald-600 to-green-500 bg-clip-text text-transparent">
              Agora Mesmo?
            </span>
          </h3>

          <p className="mx-auto mb-10 max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
            Se você está em situação de emergência ou precisa de atendimento
            imediato, entre em contato diretamente pelo nosso WhatsApp.
          </p>

          <div className="flex flex-col items-center justify-center gap-6 sm:flex-row">
            <a
              href="https://wa.me/5531999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-full bg-linear-to-r from-emerald-600 to-green-600 px-12 py-4 text-sm font-bold tracking-widest text-white uppercase shadow-2xl shadow-emerald-600/30 transition-all hover:scale-105 hover:shadow-emerald-600/50"
            >
              <span className="relative z-10">WhatsApp de Emergência</span>
            </a>
            <button className="rounded-full border-2 border-emerald-200 bg-white/80 px-10 py-4 text-sm font-bold tracking-widest text-emerald-700 uppercase backdrop-blur-sm transition-all hover:bg-emerald-50 dark:border-emerald-800 dark:bg-zinc-800/80 dark:text-emerald-300 dark:hover:bg-zinc-800">
              Ligar para (31) 9999-9999
            </button>
          </div>

          <p className="mt-8 text-sm text-zinc-500 dark:text-zinc-400">
            Atendimento disponível das 9h às 18h, de segunda a sexta.
            <br />
            Fora do horário comercial, respondemos assim que possível.
          </p>
        </div>
      </motion.section>

      <Footer />
    </main>
  );
}
