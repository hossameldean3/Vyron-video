"use client";

export default function EditorSidebar({ onSelect }) {
  const tools = [
    { id: "cut", label: "Auto Cut" },
    { id: "bg", label: "Background Removal" },
    { id: "enhance", label: "Enhance Video" },
    { id: "upscale", label: "Upscale 4K (Pro)" },
    { id: "talk", label: "Talking Avatar" },
    { id: "lipsync", label: "Lip Sync" },
    { id: "faceswap", label: "Face Swap" },
    { id: "color", label: "Color Grading" },
    { id: "sub", label: "Auto Subtitles" },
  ];

  return (
    <aside className="w-64 bg-[#0c0f17] border-r border-white/5 p-4">
      <h2 className="text-lg font-semibold mb-4 text-white">Tools</h2>
      <ul className="space-y-2">
        {tools.map((t) => (
          <li key={t.id}>
            <button
              onClick={() => onSelect(t.id)}
              className="w-full text-left px-3 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-white transition"
            >
              {t.label}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
}
