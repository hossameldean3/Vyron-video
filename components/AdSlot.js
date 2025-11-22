import { useEffect } from 'react';
export default function AdSlot({id='ad-slot', pro=false, style={}}){
  useEffect(()=>{ if(pro) return; try{ if(window && window.ezoadx && typeof window.ezoadx.refresh==='function') window.ezoadx.refresh(); }catch(e){} },[pro]);
  if(pro) return null;
  return (<div id={id} style={{minHeight:90,display:'flex',alignItems:'center',justifyContent:'center',background:'#051520',borderRadius:8,...style}}><div style={{fontSize:12,opacity:0.7}}>Ad Slot — {id}</div></div>)
}
