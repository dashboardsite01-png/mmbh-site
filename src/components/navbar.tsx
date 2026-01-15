"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  Instagram,
  Leaf,
  Menu,
  MessageCircle,
  Sparkles,
  X,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const navLinks = [
  { name: "Quem Somos", href: "#sobre" },
  { name: "Acolhimento", href: "#acolhimento" },
  { name: "Documentos", href: "#documentos" },
  { name: "Blog", href: "#blog" },
  { name: "Loja", href: "#loja" },
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

  return (
    <nav
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-500",
        scrolled
          ? "bg-white/80 py-3 backdrop-blur-xl"
          : "bg-transparent py-5 text-white",
      )}
    >
      <div className="container mx-auto flex items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="group flex items-center gap-3">
          <div className="relative">
            <div className="flex size-10 items-center justify-center rounded-xl bg-linear-to-br from-emerald-500 to-green-500 text-white shadow-lg shadow-emerald-500/30 transition-all group-hover:scale-110 group-hover:rotate-12">
              <Leaf className="h-5 w-5" />
            </div>
            <div className="absolute -top-1 -right-1 flex size-4 items-center justify-center rounded-full bg-amber-500 text-[8px] font-black text-white">
              17
            </div>
          </div>
          <div className="flex flex-col">
            <Image
              src="/images/logo-verde.png"
              width={800}
              height={800}
              className="h-16 w-32 object-contain"
              alt="Logo da Marcha da Maconha de Belo Horizonte"
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="group relative rounded-lg px-4 py-2 text-sm font-bold tracking-wider text-zinc-700 transition-all hover:text-emerald-600 dark:text-zinc-300"
            >
              <span className="relative z-10">{link.name}</span>
              <div className="absolute inset-0 rounded-lg bg-linear-to-r from-emerald-500/0 to-green-500/0 opacity-0 transition-all group-hover:opacity-10" />
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden items-center gap-3 md:flex">
          <Button asChild variant="ghost" size="icon" className="rounded-full">
            <Link
              href="https://instagram.com/marchadamaconhabh"
              target="_blank"
              className="text-emerald-600 dark:text-zinc-300"
            >
              <Instagram size={20} />
            </Link>
          </Button>
          <Button
            asChild
            className="group relative overflow-hidden rounded-full bg-linear-to-r from-emerald-600 to-green-600 px-6 font-bold tracking-wider shadow-lg shadow-emerald-600/30 transition-all hover:scale-105 hover:shadow-emerald-600/50"
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

        {/* Mobile Toggle */}
        <button
          className="rounded-lg p-2 text-zinc-700 transition-colors hover:bg-zinc-100 md:hidden dark:text-zinc-300 dark:hover:bg-zinc-800"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="animate-in slide-in-from-top-5 absolute top-full left-0 flex w-full flex-col gap-2 border-t border-zinc-200 bg-white/95 p-6 backdrop-blur-xl md:hidden dark:border-zinc-800 dark:bg-zinc-900/95">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="group rounded-xl px-4 py-3 text-lg font-bold text-zinc-800 transition-all hover:bg-zinc-100 hover:text-emerald-600 dark:text-zinc-200 dark:hover:bg-zinc-800"
            >
              {link.name}
            </Link>
          ))}
          <div className="mt-4 flex flex-col gap-3">
            <Button
              asChild
              className="w-full justify-center gap-2 rounded-xl py-6"
            >
              <Link
                href="https://docs.google.com/forms/d/1R4lbFTpLb0erUYakmFHGSbud9Qc0IeQuBkHshZtTALs"
                target="_blank"
              >
                <MessageCircle size={18} /> Entrar no Grupo
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="w-full justify-center gap-2 rounded-xl py-6"
            >
              <Link
                href="https://instagram.com/marchadamaconhabh"
                target="_blank"
              >
                <Instagram size={18} /> Instagram
              </Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
