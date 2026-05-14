"use client";

import { motion } from "motion/react";
import { SITE_DATA } from "@/lib/constants";

export function Gallery() {
  return (
    <section id="gallery" className="py-24 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="mb-16">
        <h2 
          className="text-3xl md:text-5xl text-white mb-6 tracking-tight uppercase"
          style={{ fontVariationSettings: "'wght' 700" }}
        >
          Примеры <span className="text-red-500">Работ</span>
        </h2>
        <p className="text-zinc-400 max-w-2xl text-lg leading-relaxed">
          Не просто "навели марафет", а восстановили и защитили. Вот как выглядят автомобили после посещения нашего ЦЕХА.
        </p>
      </div>

      <div className="space-y-12">
        {SITE_DATA.cases.map((item, i) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="group grid grid-cols-1 lg:grid-cols-4 gap-6 p-8 bg-zinc-900/20 border border-zinc-800/60 hover:border-zinc-700 transition-colors"
          >
            <div className="lg:col-span-1">
              <h3 className="text-xl text-white mb-2 uppercase tracking-wide" style={{ fontVariationSettings: "'wght' 700" }}>
                {item.title}
              </h3>
              <div className="w-12 h-[2px] bg-red-500 mt-4 group-hover:w-24 transition-all duration-300" />
            </div>
            
            <div className="lg:col-span-1">
              <h4 className="text-xs text-zinc-500 uppercase tracking-widest font-bold mb-3 md:mb-4">До</h4>
              <p className="text-sm text-zinc-300 leading-relaxed">{item.before}</p>
            </div>
            
            <div className="lg:col-span-1">
              <h4 className="text-xs text-red-500/80 uppercase tracking-widest font-bold mb-3 md:mb-4">Процесс</h4>
              <p className="text-sm text-zinc-300 leading-relaxed">{item.action}</p>
            </div>
            
            <div className="lg:col-span-1">
              <h4 className="text-xs text-white uppercase tracking-widest font-bold mb-3 md:mb-4">Результат</h4>
              <p className="text-sm text-zinc-300 leading-relaxed">{item.result}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
