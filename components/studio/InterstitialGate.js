
export default function InterstitialGate({onShown}){
  return (
    <div className='card'>
      <h4 className='font-semibold'>Export Interstitial</h4>
      <p className='text-sm mb-3'>An interstitial will be shown during free export.</p>
      <button className='px-3 py-2 rounded border' onClick={()=>onShown && onShown()}>Show Interstitial (Test)</button>
    </div>
  )
}
