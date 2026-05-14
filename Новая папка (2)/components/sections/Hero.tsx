"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { ChevronDown, ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[95vh] flex flex-col justify-center pt-20 pb-0 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-red-600/8 blur-[140px] rounded-full pointer-events-none" />

      {/* Decorative grid lines */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Giant watermark text */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 whitespace-nowrap select-none pointer-events-none overflow-hidden"
        aria-hidden="true"
      >
        <span
          className="text-[22vw] font-black uppercase leading-none tracking-tighter"
          style={{
            fontVariationSettings: "'wght' 900",
            WebkitTextStroke: "1px rgba(255,255,255,0.05)",
            color: "transparent",
          }}
        >
          ДЕТЕЙЛИНГ
        </span>
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 md:px-8">
        {/* Eyebrow label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center gap-3 mb-8"
        >
          <div className="h-[2px] w-10 bg-red-500" />
          <span className="text-xs font-semibold tracking-[0.3em] text-red-400 uppercase">Йошкар-Ола · С 2020</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="text-6xl sm:text-7xl lg:text-[9rem] leading-[0.9] tracking-tight uppercase mb-8 text-white"
          style={{ fontVariationSettings: "'wght' 800" }}
        >
          Искусство<br />
          <span className="text-red-500">Детейлинга</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="text-base md:text-xl text-zinc-400 max-w-xl mb-12 leading-relaxed"
        >
          Премиальный уход за вашим автомобилем. Полировка, керамика, химчистка — с вниманием к каждой детали.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col sm:flex-row gap-4 mb-24"
        >
          <Link
            href="#services"
            className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-red-600 hover:bg-red-500 text-white text-sm font-bold tracking-widest uppercase transition-all duration-200"
          >
            Наши услуги
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>

          <Link
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-4 border border-zinc-700 hover:border-zinc-400 text-zinc-300 hover:text-white text-sm font-bold tracking-widest uppercase transition-all duration-200"
          >
            Записаться
          </Link>
        </motion.div>
      </div>

      {/* Bottom scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 right-8"
      >
        <Link href="#about" aria-label="Узнать больше" className="flex flex-col items-center gap-2 text-zinc-600 hover:text-zinc-400 transition-colors">
          <span className="text-[10px] tracking-[0.3em] uppercase rotate-90 mb-2">Скролл</span>
          <ChevronDown className="w-5 h-5 animate-bounce" />
        </Link>
      </motion.div>
    </section>
  );
}
