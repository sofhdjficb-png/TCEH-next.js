import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center p-4">
      <h1 className="text-8xl tracking-tight text-red-500 mb-4" style={{ fontVariationSettings: "'wght' 700" }}>
        404
      </h1>
      <h2 className="text-2xl mb-6">СТРАНИЦА НЕ НАЙДЕНА</h2>
      <p className="text-zinc-400 mb-8 max-w-sm">
        Возможно, она была удалена или вы ошиблись адресом.
      </p>
      <Link 
        href="/"
        className="px-8 py-3 border inline-block border-zinc-700 hover:border-red-500 hover:bg-red-500/10 transition-colors tracking-widest text-sm"
      >
        НА ГЛАВНУЮ
      </Link>
    </div>
  );
}