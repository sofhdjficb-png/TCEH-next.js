import type { Metadata } from "next";
import "./globals.css";
import { CLIENT_DATA } from "@/lib/constants";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CookieBanner } from "@/components/ui/CookieBanner";

export const metadata: Metadata = {
  title: "ЦЕХ | Детейлинг и автосервис",
  description:
    "Профессиональный детейлинг, керамика, полировка и надежный автосервис в Йошкар-Оле.",
  metadataBase: new URL(CLIENT_DATA.DOMAIN),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Geologica:opsz,wght@12..96,100..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased selection:bg-red-500/30 selection:text-white flex flex-col min-h-screen font-inter">
        {/* {LEGAL_TEXT_REQUIRED.ANALYTICS_CODE} - сюда вставить код Яндекс.Метрики после POST-SALE */}
        
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
        <CookieBanner />
        
      </body>
    </html>
  );
}