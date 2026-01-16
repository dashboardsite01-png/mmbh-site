"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  ArrowUpRight,
  ChevronRight,
  Instagram,
  Menu,
  Sparkles,
  X,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const navLinks = [
  { name: "Home", href: "/#banner" },
  { name: "Quem Somos", href: "/quem-somos" },
  { name: "Acolhimento", href: "/acolhimento" },
  { name: "Documentos", href: "/documentos" },
  { name: "Blog", href: "/blog" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Efeito para mudar o fundo da navbar ao rolar
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Bloquear scroll do corpo quando o menu estiver aberto
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
  }, [isOpen]);

  const isNavActive = scrolled || isOpen;

  return (
    <nav className="fixed top-0 z-50 w-full">
      {/* CAMADA DE FUNDO ACRÍLICO (A EXPANSÃO FLUIDA) */}
      <div
        className={cn(
          "absolute inset-0 origin-top transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]",
          isOpen
            ? "h-screen bg-white/70 opacity-100 backdrop-blur-2xl dark:bg-zinc-900/80"
            : "h-20 opacity-0",
          scrolled && !isOpen
            ? "border-b border-white/10 bg-white/70 opacity-100 shadow-lg backdrop-blur-xl dark:bg-zinc-900/70"
            : "",
        )}
      />

      <div className="relative container mx-auto h-full px-4">
        {/* BARRA SUPERIOR (HEADER) */}
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="group z-[70] flex items-center gap-3"
            onClick={() => setIsOpen(false)}
          >
            <div className="relative">
              <Image
                src={
                  isNavActive
                    ? "/images/logo/logo-verde.png"
                    : "/images/logo/logo-branca.png"
                }
                width={800}
                height={800}
                className="h-12 w-24 object-contain transition-all duration-500 group-hover:-rotate-1"
                alt="Logo da Marcha da Maconha"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "group relative rounded-lg px-4 py-2 text-sm font-bold tracking-wider transition-all hover:text-emerald-600",
                  isNavActive
                    ? "text-zinc-700 dark:text-zinc-300"
                    : "text-white",
                )}
              >
                <span className="relative z-10">{link.name}</span>
                <div className="absolute inset-0 rounded-lg bg-emerald-500/0 opacity-0 transition-all group-hover:bg-emerald-500/10 group-hover:opacity-100" />
              </Link>
            ))}
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden items-center gap-3 md:flex">
            <Button
              asChild
              variant="ghost"
              size="icon"
              className={cn(
                "rounded-full transition-colors",
                !isNavActive
                  ? "text-white hover:bg-white/10"
                  : "text-zinc-700 hover:text-emerald-600",
              )}
            >
              <Link
                href="https://instagram.com/marchadamaconhabh"
                target="_blank"
              >
                <Instagram size={20} />
              </Link>
            </Button>

            <Button
              asChild
              className="group relative overflow-hidden rounded-full bg-linear-to-r from-emerald-600 to-green-600 px-6 font-bold tracking-wider text-white shadow-lg shadow-emerald-600/30 transition-all hover:scale-105 hover:shadow-emerald-600/50"
            >
              <Link
                href="https://docs.google.com/forms/d/1R4lbFTpLb0erUYakmFHGSbud9Qc0IeQuBkHshZtTALs"
                target="_blank"
              >
                <Sparkles className="mr-2 h-4 w-4" />
                Participar
              </Link>
            </Button>
          </div>

          {/* Mobile Toggle Button */}
          <button
            className={cn(
              "z-[70] rounded-lg p-2 transition-colors md:hidden",
              isNavActive ? "text-zinc-700 dark:text-zinc-300" : "text-white",
            )}
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="relative h-8 w-8">
              <X
                className={cn(
                  "absolute inset-0 transition-all duration-400",
                  isOpen
                    ? "scale-100 rotate-0 opacity-100"
                    : "scale-50 -rotate-90 opacity-0",
                )}
                size={32}
              />
              <Menu
                className={cn(
                  "absolute inset-0 transition-all duration-400",
                  isOpen
                    ? "scale-50 rotate-90 opacity-0"
                    : "scale-100 rotate-0 opacity-100",
                )}
                size={32}
              />
            </div>
          </button>
        </div>

        {/* CONTEÚDO MENU MOBILE (A EXPANSÃO VERTICAL) */}
        <div
          className={cn(
            "flex flex-col justify-center px-2 transition-all duration-500 md:hidden",
            isOpen
              ? "visible h-[calc(100vh-80px)] translate-y-0 opacity-100"
              : "pointer-events-none invisible h-0 -translate-y-10 opacity-0",
          )}
        >
          {/* Mobile Links */}
          <div className="space-y-1">
            {navLinks.map((link, i) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "block border-b border-zinc-200/40 py-5 text-4xl font-black text-zinc-900 transition-all duration-500 dark:border-zinc-800/40 dark:text-zinc-100",
                  isOpen
                    ? "translate-x-0 opacity-100"
                    : "-translate-x-8 opacity-0",
                )}
                style={{
                  transitionDelay: isOpen ? `${i * 50 + 150}ms` : "0ms",
                }}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Action Buttons */}
          <div
            className={cn(
              "mt-12 flex flex-col gap-4 transition-all duration-700",
              isOpen
                ? "translate-y-0 opacity-100 delay-500"
                : "translate-y-10 opacity-0",
            )}
          >
            {/* Botão Primário (Solid Gradient) */}
            <Button
              asChild
              size="lg"
              className="group relative h-auto overflow-hidden rounded-full bg-linear-to-r from-emerald-600 to-green-600 px-8 py-6 text-xs font-bold tracking-widest uppercase shadow-2xl shadow-emerald-600/30 transition-all hover:scale-105 hover:shadow-emerald-600/50"
            >
              <Link
                href="https://docs.google.com/forms/d/1R4lbFTpLb0erUYakmFHGSbud9Qc0IeQuBkHshZtTALs"
                target="_blank"
              >
                <span className="relative z-10 flex items-center justify-center">
                  Quero Participar
                  <ArrowUpRight className="ml-3 size-5 transition-transform duration-300 group-hover:translate-x-1.5 group-hover:rotate-45" />
                </span>
              </Link>
            </Button>

            {/* Botão Secundário (Outline Adaptado para Fundo Claro) */}
            <Button
              asChild
              variant="outline"
              className="group relative h-auto overflow-hidden rounded-full border-zinc-200 bg-zinc-50/50 px-8 py-6 text-xs font-bold tracking-widest text-zinc-800 uppercase backdrop-blur-sm transition-all hover:bg-zinc-100 hover:shadow-lg dark:border-white/10 dark:bg-white/5 dark:text-white"
            >
              <Link
                href="https://instagram.com/marchadamaconhabh"
                target="_blank"
              >
                <span className="relative z-10 flex items-center justify-center">
                  Instagram
                  <ChevronRight className="ml-3 size-5 transition-transform duration-300 group-hover:translate-x-2" />
                </span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
