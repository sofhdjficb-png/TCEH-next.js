"use client";

import { motion } from "motion/react";

const stats = [
  { value: "5+", label: "лет на рынке" },
  { value: "1200+", label: "довольных клиентов" },
  { value: "4.9", label: "рейтинг на 2GIS" },
  { value: "9", label: "услуг в прайсе" },
];

export function Stats() {
  return (
    <div className="border-y border-zinc-800/60 bg-zinc-900/30">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-zinc-800/60">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="py-10 px-8 flex flex-col gap-1"
            >
              <span
                className="text-4xl md:text-5xl text-white leading-none"
                style={{ fontVariationSettings: "'wght' 800" }}
              >
                {s.value}
              </span>
              <span className="text-xs text-zinc-500 uppercase tracking-widest font-semibold mt-2">
                {s.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
