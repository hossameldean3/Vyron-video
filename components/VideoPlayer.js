'use client'
import { useEffect, useRef } from 'react'
import Hls from 'hls.js'

export default function VideoPlayer({ mp4 = '/demo-video.mp4', hls = '/demo-video.m3u8', poster = '/poster.jpg' }) {
  const ref = useRef(null)

  useEffect(() => {
    const video = ref.current
    if (!video) return

    if (hls) {
      if (Hls.isSupported()) {
        const hlsObj = new Hls()
        hlsObj.loadSource(hls)
        hlsObj.attachMedia(video)
        return () => hlsObj.destroy()
      } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
        video.src = hls
        return
      }
    }
    if (mp4) video.src = mp4
  }, [mp4, hls])

  return (
    <div className="w-full rounded-xl overflow-hidden shadow">
      <video ref={ref} className="w-full bg-black" controls playsInline preload="metadata" poster={poster} />
    </div>
  )
}
