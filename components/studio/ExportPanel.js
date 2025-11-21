"use client";

import AdSlot from "../AdSlot";

export default function ExportPanel({ tool }) {
  return (
    <section className="bg-white/5 p-5 rounded-xl border border-white/10">
      <h3 className="text-xl text-white font-semibold mb-3">Export</h3>

      {tool && (
        <p className="text-sm text-white/70 mb-3">
          Selected Tool: <span className="text-neon">{tool}</span>
        </p>
      )}

      <div className="space-y-4">
        <button className="px-5 py-3 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-lg text-black font-bold w-full">
          Export Free (with Ads)
        </button>

        <button className="px-5 py-3 bg-white/10 rounded-lg text-white border border-white/20 w-full hover:bg-white/20 transition">
          Export PRO — No Ads, 4K Quality
        </button>

        <div className="mt-4">
          <AdSlot id="export-ad" />
        </div>
      </div>
    </section>
  );
}
