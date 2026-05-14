"use client";

import { motion } from "motion/react";

export function About() {
  const cards = [
    {
      title: "Делаем на совесть",
      desc: "Нам важен результат, а не поток. Работаем с вашим автомобилем так, как если бы делали для себя.",
      stat: "100%",
    },
    {
      title: "Качественные материалы",
      desc: "Используем только проверенную химию, премиальные плёнки и надежные компоненты.",
      stat: "PREMIUM",
    },
    {
      title: "Место для своих",
      desc: "Создали атмосферу, где приятно находиться. Честный подход и прозрачное ценообразование.",
      stat: "БЕЗ СКРЫТЫХ УСЛУГ",
    },
  ];

  return (
    <section id="about" className="py-28 px-6 md:px-8 max-w-6xl mx-auto">
      {/* Section header */}
      <div className="flex items-start gap-6 mb-20">
        <div className="hidden md:flex flex-col items-center pt-2 gap-2">
          <div className="w-[2px] h-12 bg-red-500" />
          <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-zinc-600 rotate-180 [writing-mode:vertical-lr]">О НАС</span>
        </div>
        <div>
          <h2
            className="text-4xl md:text-6xl text-white mb-6 tracking-tight uppercase leading-none"
            style={{ fontVariationSettings: "'wght' 700" }}
          >
            Философия <br className="hidden md:block" />
            <span className="text-red-500">ЦЕХА</span>
          </h2>
          <p className="text-zinc-400 max-w-xl text-lg leading-relaxed">
            Мы — не классическая потоковая мойка или случайный сервис. ЦЕХ — это место для тех, кто ценит свой автомобиль.
          </p>
        </div>
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-px bg-zinc-800/40">
        {cards.map((card, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="group bg-zinc-950 p-10 flex flex-col justify-between min-h-[280px] hover:bg-zinc-900/60 transition-colors relative overflow-hidden"
          >
            {/* Top red line on hover */}
            <div className="absolute top-0 left-0 h-[3px] w-0 bg-red-500 group-hover:w-full transition-all duration-500" />

            <div>
              <span
                className="text-6xl font-black text-zinc-900 mb-6 block leading-none"
                style={{ fontVariationSettings: "'wght' 900" }}
                aria-hidden="true"
              >
                0{i + 1}
              </span>
              <h3
                className="text-lg text-white mb-3 uppercase tracking-wider"
                style={{ fontVariationSettings: "'wght' 600" }}
              >
                {card.title}
              </h3>
              <p className="text-zinc-500 text-sm leading-relaxed">
                {card.desc}
              </p>
            </div>

            <div className="mt-8 font-mono tracking-[0.2em] text-red-500 text-xs border-t border-zinc-800/60 pt-4">
              {card.stat}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
