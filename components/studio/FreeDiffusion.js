
export default function FreeDiffusion(){
  return (
    <div className='card'>
      <h4 className='font-semibold'>Free Text → Video (Browser)</h4>
      <p className='text-sm'>Uses client-side WebGPU diffusers (placeholder component).</p>
      <textarea className='w-full p-2 rounded bg-black/20' placeholder='Enter prompt (10-30 words)' rows={3} />
      <div className='mt-2'><button className='px-3 py-2 rounded bg-green-600'>Generate (Browser)</button></div>
    </div>
  )
}
