export default function AdSlot({ id = 'ad-slot', style = {} }) {
  // Ezoic or Ad provider will replace this div when configured in dashboard.
  // Keep this placeholder server-side rendered for SEO and layout stability.
  return (
    <div id={id} style={style} className="w-full flex items-center justify-center bg-transparent text-gray-400">
      {/* Ezoic placeholder — replace id in dashboard or insert ezoic script */}
      <div className="text-sm">Advertisement</div>
    </div>
  )
}
