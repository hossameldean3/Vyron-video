
import { useState } from 'react'

export default function ExportPanel(){
  const [format, setFormat] = useState('mp4')
  return (
    <div className='card'>
      <h4 className='font-semibold mb-2'>Export</h4>
      <label className='block mb-2 text-sm'>Format</label>
      <select value={format} onChange={(e)=>setFormat(e.target.value)} className='w-full p-2 rounded bg-black/20'>
        <option value='mp4'>MP4</option>
        <option value='webm'>WebM</option>
        <option value='hls'>HLS (.m3u8)</option>
      </select>
      <div className='mt-3 flex gap-2'>
        <button className='flex-1 px-3 py-2 rounded bg-green-600'>Export (Free - Ad)</button>
        <button className='flex-1 px-3 py-2 rounded border'>Export (Pro)</button>
      </div>
      <div className='mt-4 text-xs text-gray-300'>Free exports show interstitial ad or rewarded ad during encoding.</div>
    </div>
  )
}
