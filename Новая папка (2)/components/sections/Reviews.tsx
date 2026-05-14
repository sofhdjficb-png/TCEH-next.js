"use client";

import { motion } from "motion/react";
import { SITE_DATA } from "@/lib/constants";
import { Quote } from "lucide-react";

export function Reviews() {
  return (
    <section id="reviews" className="py-24 px-4 md:px-8 bg-zinc-950/50 border-y border-zinc-800/60 relative overflow-hidden">
      {/* Subtle background element */}
      <div className="absolute top-0 right-0 w-[50vw] h-[50vh] bg-red-600/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-16 text-center">
          <h2 
            className="text-3xl md:text-5xl text-white mb-6 tracking-tight uppercase"
            style={{ fontVariationSettings: "'wght' 700" }}
          >
            Говорят <span className="text-red-500">Клиенты</span>
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Мы гордимся тем, что клиенты возвращаются и рекомендуют нас друзьям.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SITE_DATA.reviews.map((review, i) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-8 bg-zinc-900/40 border border-zinc-800 md:hover:-translate-y-2 transition-transform duration-300 flex flex-col justify-between"
            >
              <div>
                <Quote className="w-8 h-8 text-zinc-800 mb-6" />
                <p className="text-zinc-300 text-sm leading-relaxed mb-8 italic">
                  {review.text}
                </p>
              </div>
              <div className="flex items-center justify-between border-t border-zinc-800/60 pt-4 mt-auto">
                <span className="text-xs text-zinc-500 font-mono">{review.date}</span>
                <span className="text-xs text-red-500 font-semibold tracking-widest uppercase">{review.source}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
