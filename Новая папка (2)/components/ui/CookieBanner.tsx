"use client";

import { useState, useEffect } from "react";
import { LEGAL_TEXT_REQUIRED } from "@/lib/constants";
import type { CookieConsent } from "@/types";

const STORAGE_KEY = "cookie_consent_v2";
const CONSENT_VERSION = LEGAL_TEXT_REQUIRED.COOKIE_POLICY_VERSION;
const MAX_AGE_DAYS = 365;

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [showPanel, setShowPanel] = useState(false);
  const [categories, setCategories] = useState({
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    const handleOpen = () => {
      setIsVisible(true);
      setShowPanel(true);
    };
    window.addEventListener("open-cookie-settings", handleOpen);
    return () => window.removeEventListener("open-cookie-settings", handleOpen);
  }, []);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (!stored) {
        setIsVisible(true);
        return;
      }
      const parsed: CookieConsent = JSON.parse(stored);
      if (parsed.consentVersion !== CONSENT_VERSION) {
        setIsVisible(true);
        return;
      }
      
      const savedAt = new Date(parsed.savedAt).getTime();
      const now = new Date().getTime();
      if (now - savedAt > MAX_AGE_DAYS * 24 * 60 * 60 * 1000) {
        setIsVisible(true);
        return;
      }

      setCategories({
        analytics: parsed.categories.analytics,
        marketing: parsed.categories.marketing,
      });
      // Fire event to let other components know cookies are decided
      window.dispatchEvent(new CustomEvent('cookie-consent-ready', { detail: parsed.categories }));

    } catch {
      setIsVisible(true);
    }
  }, []);

  const saveConsent = (updatedCategories: { analytics: boolean; marketing: boolean }) => {
    const payload: CookieConsent = {
      consentVersion: CONSENT_VERSION,
      savedAt: new Date().toISOString(),
      source: "cookie-banner",
      categories: {
        necessary: true,
        ...updatedCategories,
      },
    };

    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
      setIsVisible(false);
      setShowPanel(false);
      setCategories(updatedCategories);

      window.dispatchEvent(new CustomEvent('cookie-consent-ready', { detail: payload.categories }));

      // Send log to server
      const endpoint = LEGAL_TEXT_REQUIRED.CONSENT_LOG_ENDPOINT;
      if (!endpoint.includes("[LEGAL_TEXT_REQUIRED")) {
        fetch(endpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
          keepalive: true,
        }).catch(() => {});
      }
    } catch {}
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 sm:bottom-6 sm:left-1/2 sm:-translate-x-1/2 w-full sm:w-[600px] z-[999] bg-zinc-950 border border-zinc-800/80 shadow-2xl p-6 sm:rounded-sm" role="dialog" aria-live="polite">
      <h3 className="text-white uppercase tracking-widest text-sm mb-3 font-semibold" style={{ fontVariationSettings: "'wght' 700" }}>
        Использование файлов cookie
      </h3>
      <p className="text-zinc-400 text-sm mb-6 leading-relaxed">
        {LEGAL_TEXT_REQUIRED.COOKIE_TEXT} Вы можете согласиться с использованием всех cookie, отклонить необязательные или настроить их.
      </p>

      {showPanel && (
        <div className="mb-6 space-y-4 border-t border-zinc-800/60 pt-4">
          <label className="flex items-center justify-between cursor-not-allowed opacity-60">
            <span className="text-sm text-zinc-300">Обязательные (технические)</span>
            <input type="checkbox" checked readOnly className="accent-red-500 w-4 h-4 cursor-not-allowed" />
          </label>
          <label className="flex items-center justify-between cursor-pointer">
            <span className="text-sm text-zinc-300">Аналитика (Яндекс.Метрика, Карты)</span>
            <input 
              type="checkbox" 
              checked={categories.analytics}
              onChange={(e) => setCategories(c => ({...c, analytics: e.target.checked}))}
              className="accent-red-500 w-4 h-4 cursor-pointer" 
            />
          </label>
          <label className="flex items-center justify-between cursor-pointer">
            <span className="text-sm text-zinc-300">Маркетинг</span>
            <input 
              type="checkbox" 
              checked={categories.marketing}
              onChange={(e) => setCategories(c => ({...c, marketing: e.target.checked}))}
              className="accent-red-500 w-4 h-4 cursor-pointer" 
            />
          </label>
        </div>
      )}

      <div className="flex flex-col sm:flex-row gap-3">
        {showPanel ? (
          <button
            onClick={() => saveConsent(categories)}
            className="flex-1 py-3 px-4 bg-red-600 hover:bg-red-500 text-white text-xs uppercase tracking-widest font-semibold transition-colors"
          >
            Сохранить настройки
          </button>
        ) : (
          <>
            <button
              onClick={() => saveConsent({ analytics: true, marketing: true })}
              className="flex-1 py-3 px-4 bg-red-600 hover:bg-red-500 text-white text-xs uppercase tracking-widest font-semibold transition-colors"
            >
              Принять все
            </button>
            <button
              onClick={() => saveConsent({ analytics: false, marketing: false })}
              className="flex-1 py-3 px-4 border border-zinc-700 hover:border-zinc-500 text-zinc-300 text-xs uppercase tracking-widest font-semibold transition-colors bg-zinc-900/50"
            >
              Отклонить
            </button>
            <button
              onClick={() => setShowPanel(true)}
              className="flex-1 py-3 px-4 border border-zinc-800 text-zinc-400 hover:text-white text-xs uppercase tracking-widest font-semibold transition-colors"
            >
              Настроить
            </button>
          </>
        )}
      </div>
    </div>
  );
}