
export default function TemplateGrid(){
  const templates = [{id:1,name:'Social Ad'},{id:2,name:'Explainer'},{id:3,name:'Logo Sting'}]
  return (
    <div className='card'>
      <h4 className='font-semibold mb-2'>Templates</h4>
      <div className='grid grid-cols-1 gap-2'>
        {templates.map(t=> <div key={t.id} className='p-2 rounded bg-black/10'>{t.name}</div>)}
      </div>
    </div>
  )
}
