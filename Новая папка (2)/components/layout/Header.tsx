"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { SITE_DATA } from "@/lib/constants";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  // Focus trap could be added here for production
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isOpen]);

  const navLinks = [
    { name: "О нас", href: "#about" },
    { name: "Почему мы", href: "#why-us" },
    { name: "Услуги", href: "#services" },
    { name: "Отзывы", href: "#reviews" },
    { name: "До/После", href: "#gallery" },
    { name: "Подход", href: "#process" },
    { name: "Контакты", href: "#contact" },
  ];

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-zinc-800/60 bg-zinc-950/80 backdrop-blur-md">
        <div className="flex justify-between items-center px-4 md:px-8 py-4">
          <Link href="/" className="text-2xl tracking-widest uppercase text-white" style={{ fontVariationSettings: "'wght' 800" }}>
            ЦЕХ<span className="text-red-500">.</span>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-semibold tracking-wider uppercase text-zinc-400 hover:text-red-500 transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:block font-mono font-medium tracking-tight text-white">
            {SITE_DATA.phoneMain}
          </div>

          <button
            type="button"
            className="lg:hidden p-2 -mr-2 text-zinc-300 hover:text-white"
            onClick={() => setIsOpen(true)}
            aria-expanded={isOpen}
            aria-label="Открыть меню"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex justify-end bg-black/60 backdrop-blur-sm">
          <div 
            className="w-full max-w-sm h-full bg-zinc-950 border-l border-zinc-800/60 p-6 flex flex-col"
            role="dialog"
            aria-modal="true"
            aria-label="Мобильное меню"
          >
            <div className="flex justify-end mb-8">
              <button
                type="button"
                className="p-2 border border-zinc-800 hover:border-red-500 hover:text-red-500 transition-colors text-zinc-300"
                onClick={() => setIsOpen(false)}
                aria-label="Закрыть меню"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <nav className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-2xl uppercase tracking-widest text-zinc-300 hover:text-red-500 transition-colors"
                  style={{ fontVariationSettings: "'wght' 500" }}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            <div className="mt-auto pt-8 border-t border-zinc-800/60">
              <a href={`tel:${SITE_DATA.phoneMain.replace(/[^\d+]/g, "")}`} className="text-xl text-red-500">
                {SITE_DATA.phoneMain}
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}