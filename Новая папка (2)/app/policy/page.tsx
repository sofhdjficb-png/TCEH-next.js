import { Metadata } from 'next';
import Link from 'next/link';
import { CLIENT_DATA, LEGAL_TEXT_REQUIRED } from '@/lib/constants';

export const metadata: Metadata = {
  title: `Политика конфиденциальности — ${CLIENT_DATA.COMPANY_NAME}`,
  robots: {
    index: false,
    follow: false,
  },
};

export default function PolicyPage() {
  return (
    <main className="max-w-3xl mx-auto py-16 px-6 font-sans leading-relaxed text-zinc-300">
      <Link href="/" className="text-red-500 hover:text-red-400 mb-8 inline-block transition-colors">
        &larr; На главную
      </Link>
      
      <h1 className="text-3xl lg:text-4xl text-white mb-10 tracking-tight" style={{ fontVariationSettings: "'wght' 700" }}>
        Политика в отношении обработки персональных данных
      </h1>

      <div className="space-y-6 prose prose-invert prose-zinc max-w-none">
        {LEGAL_TEXT_REQUIRED.PRIVACY_POLICY}
        
        {/*
          Здесь должен быть полный текст политики конфиденциальности. 
          В POST-SALE этапе клиент предоставит юридический текст.
        */}
      </div>
    </main>
  );
}