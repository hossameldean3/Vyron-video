
import StudioAdSlot from './StudioAdSlot'

export default function EditorSidebar(){
  return (
    <div className='card space-y-4'>
      <h4 className='font-semibold'>Tools</h4>
      <ul className='space-y-2 text-sm'>
        <li>FreeDiffusion (browser)</li>
        <li>AnimateDiff Lite</li>
        <li>Upscale (WebGPU)</li>
        <li>Background Remove (WASM)</li>
      </ul>
      <div><button className='mt-3 px-3 py-2 rounded bg-blue-600'>Open Template</button></div>
      <StudioAdSlot />
    </div>
  )
}
