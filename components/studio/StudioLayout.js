"use client";

import { useState } from "react";
import EditorSidebar from "./EditorSidebar";
import VideoPlayer from "./VideoPlayer";
import ExportPanel from "./ExportPanel";
import AdSlot from "../AdSlot";

export default function StudioLayout({ videoSrc }) {
  const [tool, setTool] = useState(null);

  return (
    <div className="flex min-h-screen bg-[#090b12]">
      <EditorSidebar onSelect={setTool} />

      <main className="flex-1 p-6 space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl text-white font-bold">VYRON Studio</h1>
        </div>

        <VideoPlayer src={videoSrc} />

        <div className="my-6">
          <AdSlot id="studio-banner" />
        </div>

        <ExportPanel tool={tool} />
      </main>
    </div>
  );
}
