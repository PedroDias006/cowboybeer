"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

type NavItem = { label: string; href: string; };

// --- CAMINHOS ATUALIZADOS COM AS NOVAS SEÇÕES ---
const NAV_ITEMS: NavItem[] = [
  { label: "Início", href: "#inicio" },
  { label: "Atração", href: "#atracao" },
  { label: "Experiência", href: "#experiencia" },
  { label: "Avaliações", href: "#avaliacoes" },
  { label: "Localização", href: "#localizacao" },
  { label: "Cardápio", href: "/cardapio" }, 
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className="fixed left-0 top-0 z-50 w-full px-4 pt-4 md:px-6">
      <div 
        className={`mx-auto max-w-7xl h-fit rounded-md overflow-hidden border transition-all duration-300 ${
          scrolled 
            ? "border-white/10 bg-cowboy-dark/90 shadow-2xl backdrop-blur-xl" 
            : "border-white/10 bg-cowboy-dark/70 backdrop-blur-md"
        }`}
      >
        <div className="flex h-16 items-center justify-between gap-4 px-5 md:h-20 md:px-8">
          
          <Link href="#inicio" className="flex min-w-0 items-center gap-3">
            {/* CORREÇÃO: Removido o formato redondo, borda e fundo. A logo agora fica livre e elegante! */}
            <div className="relative h-12 w-12 shrink-0 md:h-14 md:w-14">
              <Image src="/logo.png" alt="Cowboy Beer" fill sizes="56px" className="object-contain" priority />
            </div>
            <div className="hidden sm:block">
              <div className="font-serif text-lg leading-none text-white">Cowboy Beer</div>
              <div className="mt-1 text-[10px] uppercase tracking-[0.3em] text-stone-400">Bar e Restaurante • Drinks • Ambiente</div>
            </div>
          </Link>

          {/* Menu Desktop Centralizado */}
          <div className="hidden xl:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <Link key={item.href} href={item.href} className="text-[11px] font-medium uppercase tracking-[0.24em] text-stone-300 transition-colors hover:text-cowboy-accent">
                {item.label}
              </Link>
            ))}
          </div>

          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            className="flex h-11 w-11 items-center justify-center rounded-md border border-white/10 bg-white/5 text-white xl:hidden"
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            type="button"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Menu Mobile */}
        {menuOpen && (
          <div className="border-t border-white/10 px-5 pb-5 pt-1 xl:hidden">
            <div className="flex flex-col gap-4 py-4">
              {NAV_ITEMS.map((item) => (
                <Link key={item.href} href={item.href} onClick={() => setMenuOpen(false)} className="text-sm font-medium uppercase tracking-[0.15em] text-stone-200 transition-colors hover:text-cowboy-accent">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}