
import VideoPlayer from '../../VideoPlayer'
export default function StudioPlayer(){
  return (
    <div>
      <h3 className='font-semibold mb-2'>Preview</h3>
      <VideoPlayer mp4='/demo-video.mp4' hls='' poster='/assets/poster.jpg' />
    </div>
  )
}
