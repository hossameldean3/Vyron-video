import Link from 'next/link'
import VideoPlayer from '../components/VideoPlayer'

export default function Page() {
  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-4xl font-extrabold text-cyan-400">AI Video — Reinvented.</h1>
          <p className="mt-4 text-gray-300">Create cinematic AI videos. Free & Pro tiers.</p>
          <div className="mt-6">
            <Link href="/studio"><button className="px-4 py-2 bg-blue-500 rounded">Open Studio</button></Link>
            <Link href="/pricing"><button className="ml-3 px-4 py-2 border rounded">Pricing</button></Link>
          </div>
        </div>
        <div>
          <VideoPlayer />
        </div>
      </div>
    </section>
  )
}
