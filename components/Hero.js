import VideoPlayer from "./VideoPlayer";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="container mx-auto px-6 py-12 grid md:grid-cols-2 gap-10 items-center">
      <div>
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
          <span className="text-[#00a8ff]">VYRON</span> — Future in Motion
        </h1>
        <p className="mt-4 text-gray-300 max-w-lg">
          Generate cinematic AI videos fast. Free in-browser tools for quick results; Pro GPU renders for ultra quality.
        </p>

        <div className="mt-6 flex gap-3">
          <Link href="/demo"><a className="px-5 py-3 bg-[#00a8ff] text-black rounded-md font-semibold">Generate Demo</a></Link>
          <Link href="/pricing"><a className="px-5 py-3 border border-white/10 rounded-md text-white">Pricing</a></Link>
        </div>

        <ul className="mt-6 text-gray-400 space-y-1">
          <li>• Free Browser Mode — zero cost</li>
          <li>• Pro GPU Mode — 1080p → 4K</li>
          <li>• Pay-per-use + monthly plans</li>
        </ul>
      </div>

      <aside className="flex justify-center">
        <VideoPlayer />
      </aside>
    </section>
  );
}
export default function Hero(){return(<section className='p-10 text-center'><h1 className='text-4xl font-bold'>VYRON — Future In Motion</h1><p className='opacity-70 mt-4'>AI Video Engine / Free & Pro Platform</p></section>);}
