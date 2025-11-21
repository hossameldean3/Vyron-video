"use client";

import { useEffect, useRef } from "react";
import Hls from "hls.js";

export default function VideoPlayer({
  mp4 = "/demo-video.mp4",
  hls = "/demo-video.m3u8",
  poster = "/assets/poster.jpg",
  className = ""
}) {
  const ref = useRef(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;

    // Prefer HLS if available
    if (hls) {
      if (Hls.isSupported()) {
        const hlsObj = new Hls({ maxBufferLength: 30 });
        hlsObj.loadSource(hls);
        hlsObj.attachMedia(video);
        return () => hlsObj.destroy();
      } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
        video.src = hls;
        return;
      }
    }

    // fallback: MP4
    if (mp4) {
      video.src = mp4;
    }
  }, [mp4, hls]);

  return (
    <div className={`rounded-xl overflow-hidden bg-black shadow-xl ${className}`}>
      <video
        ref={ref}
        className="w-full h-auto"
        controls
        playsInline
        preload="metadata"
        poster={poster}
      />
    </div>
  );
}
