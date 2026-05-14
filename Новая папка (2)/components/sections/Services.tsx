"use client";

import { motion } from "motion/react";
import { SITE_DATA } from "@/lib/constants";

export function Services() {
  return (
    <section id="services" className="py-28 px-6 md:px-8 max-w-6xl mx-auto">
      <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <div className="flex items-center gap-3 mb-5">
            <div className="h-[2px] w-10 bg-red-500" />
            <span className="text-xs font-semibold tracking-[0.3em] text-red-400 uppercase">Прайс-лист</span>
          </div>
          <h2
            className="text-4xl md:text-6xl text-white tracking-tight uppercase leading-none"
            style={{ fontVariationSettings: "'wght' 700" }}
          >
            Наши<br />Услуги
          </h2>
        </div>
        <p className="text-xs text-zinc-600 uppercase tracking-widest font-mono max-w-xs text-right">
          Прайс носит ознакомительный характер.<br />Точная стоимость — после осмотра.
        </p>
      </div>

      <div className="border-t border-zinc-800/60">
        {SITE_DATA.services.map((item, i) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.4, delay: i * 0.04 }}
            className="group flex items-center justify-between py-5 border-b border-zinc-800/60 hover:bg-zinc-900/40 px-4 -mx-4 transition-colors cursor-default"
          >
            <div className="flex items-center gap-5 min-w-0">
              <span
                className="text-xs font-mono text-zinc-700 group-hover:text-red-500/60 transition-colors shrink-0 w-7"
                aria-hidden="true"
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3
                className="text-sm md:text-base text-zinc-300 group-hover:text-white uppercase tracking-wider transition-colors truncate"
                style={{ fontVariationSettings: "'wght' 500" }}
              >
                {item.title}
              </h3>
            </div>
            <span className="font-mono text-red-400 text-sm md:text-base whitespace-nowrap ml-6 shrink-0">
              {item.price}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
