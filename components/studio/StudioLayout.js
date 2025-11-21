
import Link from 'next/link'
import EditorSidebar from './EditorSidebar'
import ExportPanel from './ExportPanel'
import StudioPlayer from './StudioPlayer'

export default function StudioLayout(){
  return (
    <div className='container'>
      <header className='flex items-center justify-between py-6'>
        <div className='flex items-center gap-4'>
          <div className='w-10 h-10 rounded bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center text-black font-bold'>V</div>
          <h2 className='text-xl font-bold'>VYRON Studio</h2>
        </div>
        <nav className='flex gap-3'>
          <Link href='/'><a className='px-3 py-2 border rounded'>Home</a></Link>
          <Link href='/pricing'><a className='px-3 py-2 border rounded'>Pricing</a></Link>
        </nav>
      </header>

      <main className='grid md:grid-cols-4 gap-6'>
        <aside className='md:col-span-1'>
          <EditorSidebar />
        </aside>
        <section className='md:col-span-2 space-y-4'>
          <div className='card'>
            <StudioPlayer />
          </div>
          <div className='card'>
            <h3 className='font-bold mb-2'>Timeline (placeholder)</h3>
            <p className='text-sm'>Full timeline UI comes in Pro implementation. This placeholder shows where the timeline will be.</p>
          </div>
        </section>
        <aside className='md:col-span-1 space-y-4'>
          <ExportPanel />
        </aside>
      </main>
    </div>
  )
}
