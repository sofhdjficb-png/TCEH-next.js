"use client";

import { useRef, useState } from "react";
import { CLIENT_DATA } from "@/lib/constants";

export function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isPending, setIsPending] = useState(false);
  const [result, setResult] = useState<{ success: boolean; message: string } | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsPending(true);
    setResult(null);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      phone: formData.get('phone'),
      message: `Заявка от ${formData.get('name')}. Телефон: ${formData.get('phone')}`,
    };

    try {
      // Для GitHub Pages используем mailto или внешний сервис
      // В POST-SALE заменить на реальный API
      const mailtoLink = `mailto:${CLIENT_DATA.EMAIL}?subject=Заявка с сайта&body=${encodeURIComponent(data.message)}`;
      window.location.href = mailtoLink;

      setResult({ success: true, message: "Открываем почтовый клиент..." });
      formRef.current?.reset();
    } catch {
      setResult({ success: false, message: "Произошла ошибка. Попробуйте еще раз." });
    } finally {
      setIsPending(false);
    }
  }

  return (
    <section id="contact" className="py-24 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-16 lg:gap-8">
        <div>
          <h2
            className="text-3xl md:text-5xl text-white mb-6 tracking-tight uppercase"
            style={{ fontVariationSettings: "'wght' 700" }}
          >
            Ждем вас в <span className="text-red-500">ЦЕХЕ</span>
          </h2>
          <p className="text-zinc-400 text-lg leading-relaxed mb-12 max-w-md">
            Оставьте заявку, и мы свяжемся с вами для консультации или записи на удобное время.
          </p>

          <div className="space-y-8 text-zinc-300">
            <div>
              <h4 className="text-xs text-zinc-500 uppercase tracking-widest font-bold mb-2">Адрес</h4>
              <p className="text-lg">{CLIENT_DATA.SERVICE_ADDRESS}</p>
            </div>
            <div>
              <h4 className="text-xs text-zinc-500 uppercase tracking-widest font-bold mb-2">Режим работы</h4>
              <p className="text-lg">{CLIENT_DATA.WORK_HOURS}</p>
            </div>
            <div>
              <h4 className="text-xs text-zinc-500 uppercase tracking-widest font-bold mb-2">Телефон</h4>
              <a href={`tel:${CLIENT_DATA.PHONE.replace(/[^\d+]/g, "")}`} className="text-2xl text-white hover:text-red-500 transition-colors font-mono tracking-tight">
                {CLIENT_DATA.PHONE}
              </a>
            </div>
          </div>
        </div>

        <div className="bg-zinc-900/40 border border-zinc-800/80 p-8 md:p-12 relative">
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="name" className="text-xs text-zinc-400 uppercase tracking-widest font-semibold">Ваше имя</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full bg-zinc-950 border border-zinc-800 text-white px-4 py-3 focus:outline-none focus:border-red-500 transition-colors"
                placeholder="Иван"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="phone" className="text-xs text-zinc-400 uppercase tracking-widest font-semibold">Телефон</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                className="w-full bg-zinc-950 border border-zinc-800 text-white px-4 py-3 focus:outline-none focus:border-red-500 transition-colors"
                placeholder="+7 (999) 000-00-00"
              />
            </div>

            <div className="pt-2">
              <label className="flex items-start gap-3 cursor-pointer group">
                <input
                  type="checkbox"
                  name="pd-consent"
                  required
                  className="mt-1 w-4 h-4 accent-red-500 bg-zinc-950 border-zinc-800"
                />
                <span className="text-xs text-zinc-500 leading-relaxed group-hover:text-zinc-300 transition-colors">
                  Я согласен(на) на обработку персональных данных в соответствии с <a href="/policy" className="text-red-500 underline underline-offset-2">Политикой конфиденциальности</a>.
                </span>
              </label>
            </div>

            {result && (
              <div aria-live="polite" className={`p-4 text-sm ${result.success ? 'bg-green-500/10 text-green-400 border border-green-500/20' : 'bg-red-500/10 text-red-400 border border-red-500/20'}`}>
                {result.message}
              </div>
            )}

            <button
              type="submit"
              disabled={isPending}
              className="w-full bg-red-600 hover:bg-red-500 text-white px-8 py-4 text-sm font-semibold tracking-widest uppercase transition-all disabled:opacity-50 disabled:cursor-not-allowed flex justify-center items-center gap-2"
            >
              {isPending ? (
                <>
                  <span className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin"></span>
                  Отправка...
                </>
              ) : (
                "Оставить заявку"
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}