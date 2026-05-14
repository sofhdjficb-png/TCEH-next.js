"use client";

import Link from "next/link";
import { CLIENT_DATA, SITE_DATA } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="w-full border-t border-zinc-800/60 pt-16 pb-8 px-4 md:px-8 bg-zinc-950">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        <div>
          <h3 className="text-xl text-white mb-6 uppercase tracking-widest" style={{ fontVariationSettings: "'wght' 700" }}>ЦЕХ.</h3>
          <p className="text-zinc-500 text-sm leading-relaxed mb-6">
            Место для своих, где любят автомобили. Делаем на совесть, с душой.
          </p>
          <div className="flex items-center gap-4">
            <a href={SITE_DATA.socials.vk} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold tracking-wider uppercase text-zinc-400 hover:text-red-500 transition-colors border-b border-transparent hover:border-red-500">
              ВКонтакте
            </a>
            <a href={SITE_DATA.socials.tg} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold tracking-wider uppercase text-zinc-400 hover:text-red-500 transition-colors border-b border-transparent hover:border-red-500">
              Telegram
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-sm text-zinc-100 mb-6 uppercase tracking-widest font-semibold">Контакты</h4>
          <ul className="space-y-4 text-sm text-zinc-400">
            <li>
              <a href={`tel:${SITE_DATA.phoneMain.replace(/[^\d+]/g, "")}`} className="hover:text-red-500 transition-colors">
                {SITE_DATA.phoneMain}
              </a>
            </li>
            <li>
              <a href={`tel:${SITE_DATA.phoneExtra.replace(/[^\d+]/g, "")}`} className="hover:text-red-500 transition-colors">
                {SITE_DATA.phoneExtra}
              </a>
            </li>
            <li>{CLIENT_DATA.SERVICE_ADDRESS}</li>
            <li>{CLIENT_DATA.WORK_HOURS}</li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm text-zinc-100 mb-6 uppercase tracking-widest font-semibold">Юридические данные</h4>
          <ul className="space-y-4 text-sm text-zinc-400 font-mono text-xs">
            <li>{CLIENT_DATA.COMPANY_NAME}</li>
            <li>ИНН: {CLIENT_DATA.INN}</li>
            <li>{CLIENT_DATA.OGRN_LABEL}: {CLIENT_DATA.OGRN}</li>
            <li>Юр. адрес: {CLIENT_DATA.LEGAL_ADDRESS}</li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm text-zinc-100 mb-6 uppercase tracking-widest font-semibold">Документы</h4>
          <ul className="space-y-4 text-sm text-zinc-400">
            <li>
              <Link href="/policy" className="hover:text-red-500 transition-colors">Политика конфиденциальности</Link>
            </li>
            <li>
              <Link href="/offer" className="hover:text-red-500 transition-colors">Пользовательское соглашение</Link>
            </li>
            <li>
              <button 
                type="button" 
                className="hover:text-red-500 transition-colors text-left"
                data-cookie-settings-open
                onClick={() => {
                  window.dispatchEvent(new CustomEvent('open-cookie-settings'));
                }}
              >
                Настройки cookie
              </button>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-zinc-800/60 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-zinc-500 tracking-wider uppercase">
        <div>© {new Date().getFullYear()} {CLIENT_DATA.COMPANY_NAME}. Все права защищены.</div>
        <div>Сделано с уважением к делу.</div>
      </div>
    </footer>
  );
}