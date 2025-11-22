import {useEffect,useRef} from 'react'; import Hls from 'hls.js';
export default function VideoPlayer({mp4='/demo-video.mp4', hls='', poster='/assets/poster.jpg'}){
  const ref=useRef(null);
  useEffect(()=>{const v=ref.current; if(!v) return; if(hls){ if(Hls.isSupported()){ const h=new Hls(); h.loadSource(hls); h.attachMedia(v); return ()=>h.destroy(); } else if(v.canPlayType('application/vnd.apple.mpegurl')){ v.src=hls; return; } } if(mp4){ v.src=mp4 } },[mp4,hls]);
  return (<div className='w-full rounded overflow-hidden'><video ref={ref} controls playsInline preload='metadata' poster={poster} className='w-full' /></div>)
}
