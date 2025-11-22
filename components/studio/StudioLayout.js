export default function StudioLayout({ children }) {
  return (
    <div className="grid grid-cols-4 gap-6">
      <aside className="col-span-1">Sidebar</aside>
      <main className="col-span-3">{children}</main>
    </div>
  )
}
