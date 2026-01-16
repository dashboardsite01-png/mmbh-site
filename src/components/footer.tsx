"use client";

import { Separator } from "@/components/ui/separator";
import { FileText, Instagram, MapPin, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-linear-to-b from-zinc-900 to-zinc-950 pt-20 pb-10 text-white">
      {/* Elementos decorativos */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 h-64 w-64 rounded-full bg-linear-to-r from-emerald-500 to-green-500 blur-3xl" />
        <div className="absolute right-1/4 bottom-1/4 h-64 w-64 rounded-full bg-linear-to-r from-amber-500 to-orange-500 blur-3xl" />
      </div>

      <div className="relative container mx-auto px-4">
        <div className="mb-16 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Logo e Descrição */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <Image
                src="/images/logo/logo-branca.png"
                width={800}
                height={800}
                className="h-25 w-40 object-cover"
                alt="Logo da Marcha da Maconha de Belo Horizonte"
              />
            </div>
            <p className="max-w-xs text-sm leading-relaxed text-zinc-400">
              Pela regulamentação da cannabis com foco em justiça social,
              redução de danos e direitos humanos.
            </p>
            <div className="flex gap-4">
              <Link
                href="https://instagram.com/marchadamaconhabh"
                target="_blank"
                className="rounded-full bg-zinc-800/50 p-3 transition-all hover:bg-emerald-500/20 hover:text-emerald-400"
              >
                <Instagram size={18} />
              </Link>
              <Link
                href="https://docs.google.com/forms/d/1R4lbFTpLb0erUYakmFHGSbud9Qc0IeQuBkHshZtTALs"
                target="_blank"
                className="rounded-full bg-zinc-800/50 p-3 transition-all hover:bg-emerald-500/20 hover:text-emerald-400"
              >
                <FaWhatsapp size={18} />
              </Link>
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h4 className="mb-6 flex items-center gap-2 text-sm font-bold tracking-wider text-emerald-400 uppercase">
              <Users size={16} /> Acesso Rápido
            </h4>
            <ul className="space-y-4">
              {[
                { name: "Quem Somos", href: "#sobre", icon: "👥" },
                { name: "Acolhimento", href: "#acolhimento", icon: "🛡️" },
                { name: "Documentos", href: "#documentos", icon: "📄" },
                { name: "Blog", href: "#blog", icon: "✍️" },
                { name: "Loja", href: "#loja", icon: "🛒" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="group flex items-center gap-3 text-sm font-medium text-zinc-300 transition-all hover:text-emerald-400"
                  >
                    <span>{link.icon}</span>
                    <span className="border-b border-transparent group-hover:border-emerald-400">
                      {link.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links Externos */}
          <div>
            <h4 className="mb-6 flex items-center gap-2 text-sm font-bold tracking-wider text-emerald-400 uppercase">
              <FileText size={16} /> Recursos
            </h4>
            <ul className="space-y-4">
              {[
                {
                  name: "Grupo de WhatsApp",
                  href: "https://docs.google.com/forms/d/1R4lbFTpLb0erUYakmFHGSbud9Qc0IeQuBkHshZtTALs",
                  icon: "💬",
                },
                {
                  name: "Formulário Acolhimento",
                  href: "https://docs.google.com/forms/e/1FAIpQLScgXrcp9De-vbgagN1FxKvlUZe3HbQZv8EnWual2sfrcCC3kg",
                  icon: "🤝",
                },
                {
                  name: "Carta de Princípios",
                  href: "/documentos/carta-de-principios-mmbh.pdf",
                  icon: "📜",
                },
                {
                  name: "Instagram Oficial",
                  href: "https://instagram.com/marchadamaconhabh",
                  icon: "📸",
                },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    target="_blank"
                    className="group flex items-center gap-3 text-sm font-medium text-zinc-300 transition-all hover:text-emerald-400"
                  >
                    <span>{link.icon}</span>
                    <span className="border-b border-transparent group-hover:border-emerald-400">
                      {link.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Localização e Info */}
          <div>
            <h4 className="mb-6 flex items-center gap-2 text-sm font-bold tracking-wider text-emerald-400 uppercase">
              <MapPin size={16} /> Belo Horizonte
            </h4>
            <div className="mb-6">
              <p className="text-sm text-zinc-400 italic">
                Ocupando as ruas e pautando a liberdade na capital mineira desde
                2008.
              </p>
            </div>
            <div className="rounded-2xl border border-zinc-800 bg-zinc-800/50 p-4 backdrop-blur-sm">
              <p className="text-xs font-bold tracking-wider text-emerald-400 uppercase">
                ✨ Apoie o Movimento
              </p>
              {/* <p className="mt-2 text-[10px] leading-tight text-zinc-400">
                Todo o lucro da loja é revertido para ações de redução de danos
                e apoio jurídico.
              </p> */}
            </div>
          </div>
        </div>

        <Separator className="mb-8 bg-zinc-800" />

        <div className="flex w-full flex-col items-center justify-between gap-6 text-xs font-bold font-normal tracking-wider text-zinc-500 md:flex-row">
          <div className="flex w-1/3 items-center gap-4">
            <p>© {currentYear} Marcha da Maconha BH</p>
            <div className="h-4 w-px bg-zinc-800" />
            <p>Movimento Social Independente</p>
          </div>
          <div className="flex w-1/3 items-center justify-center gap-4">
            <Link
              href="/politica-de-privacidade"
              className="text-zinc-600 transition-colors hover:text-emerald-600 dark:text-zinc-400"
            >
              Política de Privacidade
            </Link>
            <Link
              href="/termos-e-condicoes"
              className="text-zinc-600 transition-colors hover:text-emerald-600 dark:text-zinc-400"
            >
              Termos e Condições
            </Link>
          </div>
          <p className="w-1/3 text-end">
            Desenvolvido com ❤️ e em apoio por{" "}
            <Link
              href="https://insightson.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-zinc-400 transition-colors hover:text-emerald-600 dark:text-zinc-400"
            >
              Insights On
            </Link>
          </p>
        </div>

        {/* Nota Final */}
        <div className="mt-8 text-center">
          <p className="text-[10px] font-bold tracking-widest text-zinc-600 uppercase">
            Sigilo absoluto • LGPD • Ética antiproibicionista
          </p>
        </div>
      </div>
    </footer>
  );
}
