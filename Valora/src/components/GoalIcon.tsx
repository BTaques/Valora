const emojis:Record<string,string>={car:'🚗',plane:'✈️',graduation:'🎓',medical:'💰',home:'🏠',briefcase:'💼',heart:'❤️',gift:'🎁',book:'📚',bike:'🚲',target:'🎯'};
/** Ícones ilustrados com aparência consistente, sem depender de bibliotecas externas. */
export function GoalIcon({name,size=24}:{name:string;size?:number}){
 if(name==='more')return <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true" fill="currentColor"><circle cx="5" cy="12" r="1.7"/><circle cx="12" cy="12" r="1.7"/><circle cx="19" cy="12" r="1.7"/></svg>;
 return <span aria-hidden="true" style={{fontSize:size*.83,width:size,height:size,display:'inline-flex',alignItems:'center',justifyContent:'center',lineHeight:1,fontFamily:'Apple Color Emoji, Segoe UI Emoji, Noto Color Emoji, sans-serif'}}>{emojis[name]||'🎯'}</span>;
}

/** Fallback para caixinhas antigas que não tiveram o ícone salvo. */
export function getCashboxIcon(id:number,name:string):string{
 const stored=localStorage.getItem(`valora.cashbox.icon.${id}`);
 if(stored)return stored;
 const label=name.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase();
 if(/viagem|ferias|passeio|turismo/.test(label))return 'plane';
 if(/carro|veiculo|automovel/.test(label))return 'car';
 if(/casa|apartamento|moradia/.test(label))return 'home';
 if(/faculdade|curso|estudo|formatura/.test(label))return 'graduation';
 if(/reserva|emergencia|dinheiro|economia/.test(label))return 'medical';
 return 'target';
}
