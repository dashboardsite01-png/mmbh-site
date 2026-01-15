"use client";

import { Footer } from "@/components/footer";
import { easeOut, motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";
import {
  AcoesRapidas,
  Acolhimento,
  BlogSection,
  CartaPrincipios,
  Documentos,
  Hero,
  InstagramSection,
  SobreNos,
} from "./sections";

export default function Home() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);

      // Atualizar seção ativa
      const sections = [
        "sobre",
        "participe",
        "principios",
        "acolhimento",
        "documentos",
        "blog",
        "loja",
        "social",
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
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-50/20 via-transparent to-transparent dark:from-emerald-900/5" />
        <div className="absolute top-1/4 right-0 h-96 w-96 rounded-full bg-gradient-to-r from-emerald-200/10 to-green-200/10 blur-3xl dark:from-emerald-900/10 dark:to-green-900/10" />
        <div className="absolute bottom-1/4 left-0 h-96 w-96 rounded-full bg-gradient-to-r from-amber-200/5 to-orange-200/5 blur-3xl dark:from-amber-900/5 dark:to-orange-900/5" />
      </div>

      {/* Botão de voltar ao topo */}
      {showScrollTop && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          onClick={scrollToTop}
          className="fixed right-8 bottom-8 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-emerald-600 to-green-600 text-white shadow-2xl shadow-emerald-600/30 transition-all hover:scale-110 hover:shadow-emerald-600/50"
          aria-label="Voltar ao topo"
        >
          <ArrowUp className="h-6 w-6" />
        </motion.button>
      )}

      {/* Marcador decorativo flutuante */}
      <div className="pointer-events-none fixed top-1/2 left-4 z-30 hidden -translate-y-1/2 lg:block">
        <div className="relative">
          <div className="absolute top-0 -left-4 h-1 w-16 bg-gradient-to-r from-transparent to-emerald-500/30" />
          <div className="flex flex-col items-center gap-8">
            {[
              { id: "sobre", label: "Sobre" },
              { id: "participe", label: "Participe" },
              { id: "principios", label: "Princípios" },
              { id: "acolhimento", label: "Acolhimento" },
              { id: "documentos", label: "Documentos" },
              { id: "blog", label: "Blog" },
              { id: "loja", label: "Loja" },
              { id: "social", label: "Social" },
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
          <div className="absolute bottom-0 -left-4 h-1 w-16 bg-gradient-to-r from-transparent to-emerald-500/30" />
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative">
        <Hero />
      </section>

      {/* Conteúdo principal com animações */}
      <div className="relative flex flex-col gap-12 pb-12">
        {/* Sobre Nós */}
        <motion.section
          id="sobre"
          {...sectionAnimation}
          className="container mx-auto px-4 pt-12"
        >
          <SobreNos />
        </motion.section>

        {/* Participe - com background diferenciado */}
        <motion.section
          id="participe"
          {...sectionAnimation}
          transition={{ ...sectionAnimation.transition, delay: 0.1 }}
          className="relative"
        >
          <div className="absolute inset-0" />
          <div className="relative container mx-auto px-4">
            {/* <div className="mb-20 flex items-center justify-center gap-4">
              <Leaf className="h-8 w-8 text-emerald-500" />
              <h3 className="text-3xl font-black text-zinc-900 italic dark:text-white">
                Nossa Comunidade
              </h3>
              <Leaf className="h-8 w-8 rotate-180 text-emerald-500" />
            </div> */}
            <AcoesRapidas />
          </div>
        </motion.section>

        {/* Princípios */}
        <motion.section
          id="principios"
          {...sectionAnimation}
          transition={{ ...sectionAnimation.transition, delay: 0.2 }}
          className="container mx-auto px-4"
        >
          <CartaPrincipios />
        </motion.section>

        {/* Acolhimento */}
        <motion.section
          id="acolhimento"
          {...sectionAnimation}
          transition={{ ...sectionAnimation.transition, delay: 0.3 }}
          className="container mx-auto px-4"
        >
          <Acolhimento />
        </motion.section>

        {/* Documentos */}
        <motion.section
          id="documentos"
          {...sectionAnimation}
          transition={{ ...sectionAnimation.transition, delay: 0.4 }}
          className="container mx-auto px-4"
        >
          <Documentos />
        </motion.section>

        {/* Blog */}
        <motion.section
          id="blog"
          {...sectionAnimation}
          transition={{ ...sectionAnimation.transition, delay: 0.5 }}
          className="container mx-auto px-4"
        >
          <BlogSection />
        </motion.section>

        {/* Loja */}
        {/* <motion.section
          id="loja"
          {...sectionAnimation}
          transition={{ ...sectionAnimation.transition, delay: 0.6 }}
          className="container mx-auto px-4"
        >
          <Loja />
        </motion.section> */}

        {/* Social */}
        <motion.section
          id="social"
          {...sectionAnimation}
          transition={{ ...sectionAnimation.transition, delay: 0.7 }}
          className="container mx-auto px-4"
        >
          <InstagramSection />
        </motion.section>
      </div>

      {/* Call to Action final */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative overflow-hidden py-24"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-50/30 to-transparent dark:via-emerald-900/10" />
        <div className="relative container mx-auto px-4 text-center">
          <div className="mx-auto mb-8 inline-flex items-center gap-3 rounded-full bg-emerald-100 px-6 py-3 dark:bg-emerald-900/30">
            <span className="text-sm font-bold tracking-wider text-emerald-700 uppercase dark:text-emerald-300">
              A Luta Continua
            </span>
          </div>

          <h3 className="mb-6 text-4xl leading-tight font-black md:text-5xl">
            <span className="text-zinc-900 dark:text-white">
              Próxima Marcha da
            </span>
            <br />
            <span className="bg-gradient-to-r from-emerald-600 to-green-500 bg-clip-text text-transparent">
              Maconha BH
            </span>
          </h3>

          <p className="mx-auto mb-10 max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
            Junte-se a nós no próximo ato público. Sua presença fortalece a luta
            pela descriminalização e pelo fim do encarceramento em massa.
          </p>

          <div className="flex flex-col items-center justify-center gap-6 sm:flex-row">
            <button className="group relative overflow-hidden rounded-full bg-gradient-to-r from-emerald-600 to-green-600 px-12 py-4 text-sm font-bold tracking-widest text-white uppercase shadow-2xl shadow-emerald-600/30 transition-all hover:scale-105 hover:shadow-emerald-600/50">
              <span className="relative z-10">Quero Participar</span>
            </button>
            <button className="rounded-full border-2 border-emerald-200 bg-white/80 px-10 py-4 text-sm font-bold tracking-widest text-emerald-700 uppercase backdrop-blur-sm transition-all hover:bg-emerald-50 dark:border-emerald-800 dark:bg-zinc-800/80 dark:text-emerald-300 dark:hover:bg-zinc-800">
              Receber Lembretes
            </button>
          </div>
        </div>
      </motion.section>

      <Footer />
    </main>
  );
}
