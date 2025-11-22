
'use client';
import Image from 'next/image';

export default function Navbar() {
  return (
    <header className="bg-background text-white">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Image src="/images/vyron-logo.png" alt="Vyron" width={140} height={40} priority />
          <div className="hidden md:flex gap-6 text-sm text-white/80">
            <a>Features</a>
            <a>Pricing</a>
            <a className="px-3 py-1 rounded bg-gradient-to-r from-vyronStart to-vyronEnd text-black">Demo</a>
          </div>
        </div>
      </nav>
    </header>
  );
}
