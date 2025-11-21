
export default function RewardedGate({onUnlock}){
  return (
    <div className='card'>
      <h4 className='font-semibold'>Remove Watermark (Free)</h4>
      <p className='text-sm mb-3'>Watch a short rewarded ad to remove watermark for this export.</p>
      <button className='px-4 py-2 rounded bg-blue-600' onClick={()=>onUnlock && onUnlock()}>Watch Ad (Reward)</button>
    </div>
  )
}
