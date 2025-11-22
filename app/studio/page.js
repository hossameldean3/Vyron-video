import dynamic from 'next/dynamic'
import Link from 'next/link'

export default function StudioPage() {
  return (
    <section>
      <h2 className="text-2xl font-bold">VYRON Studio</h2>
      <p className="mt-2 text-gray-300">Editor, free tools, templates and export flow.</p>
      <div className="mt-6">
        <Link href="/studio/editor"><button className="px-3 py-2 bg-cyan-600 rounded">Open Editor</button></Link>
      </div>
    </section>
  )
}
