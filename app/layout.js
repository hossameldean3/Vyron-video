import '../styles/globals.css'
import AdSlot from '../components/AdSlot'

export const metadata = {
  title: 'VYRON — Future in Motion',
  description: 'Hybrid AI video platform (Free + Pro)'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#030617] text-white min-h-screen">
        <header className="max-w-6xl mx-auto p-6 flex items-center justify-between">
          <div className="text-xl font-bold">VYRON</div>
          <nav className="space-x-4">
            <a href="/">Home</a>
            <a href="/studio">Studio</a>
            <a href="/pricing">Pricing</a>
          </nav>
        </header>

        {/* Top banner ad slot (Ezoic placeholder) */}
        <div className="max-w-6xl mx-auto px-6">
          <AdSlot id="top-banner" style={{ minHeight: 90 }} />
        </div>

        <main className="max-w-6xl mx-auto p-6">{children}</main>

        <footer className="max-w-6xl mx-auto p-6 text-sm text-gray-400">
          © VYRON — Future in Motion · Privacy · Terms
          <div className="mt-4">
            <AdSlot id="footer-banner" style={{ minHeight: 60 }} />
          </div>
        </footer>
      </body>
    </html>
  )
}
