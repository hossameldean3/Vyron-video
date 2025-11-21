import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full bg-transparent">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <img src="/assets/logo.png" alt="VYRON" className="h-10 w-10 object-contain" />
          <div>
            <div className="text-white font-extrabold tracking-wide">VYRON</div>
            <div className="text-xs text-gray-400 -mt-0.5">Future in Motion</div>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-6 text-sm text-gray-300">
          <Link href="/"><a className="hover:text-white">Home</a></Link>
          <Link href="/studio"><a className="hover:text-white">Studio</a></Link>
          <Link href="/pricing"><a className="hover:text-white">Pricing</a></Link>
          <Link href="/blog"><a className="hover:text-white">Blog</a></Link>
        </nav>

        <div className="flex items-center gap-3">
          <Link href="/demo"><a className="px-3 py-1 text-sm text-gray-200 rounded hover:opacity-90">Demo</a></Link>
          <Link href="/studio"><a className="bg-gradient-to-r from-[#00a8ff] to-[#8B3DFF] text-black px-3 py-2 rounded font-semibold">Open Studio</a></Link>
        </div>
      </div>
    </header>
  );
    }
export default function Header(){return(<header className='p-4 border-b border-white/10'>VYRON Header</header>);}
