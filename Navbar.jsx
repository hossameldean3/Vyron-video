'use client';
import Image from "next/image";

export default function Navbar() {
  return (
    <header className="bg-background text-white py-4">
      <nav className="max-w-6xl mx-auto px-6 flex justify-between items-center">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <Image
            src="/images/vyron-logo.png"
            alt="Vyron Logo"
            width={150}
            height={50}
            priority
          />
        </div>

        {/* Links */}
        <div className="hidden md:flex items-center gap-6 text-sm text-white/80">
          <a className="hover:text-white transition">Features</a>
          <a className="hover:text-white transition">Pricing</a>
          <a className="px-4 py-1 rounded bg-gradient-to-r from-vyronStart to-vyronEnd text-black font-semibold">
            Demo
          </a>
        </div>

      </nav>
    </header>
  );
}
