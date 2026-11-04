const emojis:Record<string,string>={car:'🚗',plane:'✈️',graduation:'🎓',medical:'💰',home:'🏠',briefcase:'💼',heart:'❤️',gift:'🎁',book:'📚',bike:'🚲',target:'🎯'};
/** Ícones ilustrados com aparência consistente, sem depender de bibliotecas externas. */
export function GoalIcon({name,size=24}:{name:string;size?:number}){
 if(name==='more')return <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true" fill="currentColor"><circle cx="5" cy="12" r="1.7"/><circle cx="12" cy="12" r="1.7"/><circle cx="19" cy="12" r="1.7"/></svg>;
 return <span aria-hidden="true" style={{fontSize:size*.83,width:size,height:size,display:'inline-flex',alignItems:'center',justifyContent:'center',lineHeight:1,fontFamily:'Apple Color Emoji, Segoe UI Emoji, Noto Color Emoji, sans-serif'}}>{emojis[name]||'🎯'}</span>;
}
