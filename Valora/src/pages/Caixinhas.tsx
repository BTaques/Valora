import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Topbar5 from '../components/Topbar5';
import { GoalIcon } from '../components/GoalIcon';

type Goal={name:string;amount:number;target:number;icon:string};
const initial:Goal[]=[{name:'Carro',amount:10000,target:30000,icon:'car'},{name:'Viagem',amount:2500,target:8000,icon:'plane'},{name:'Estudos',amount:1000,target:5000,icon:'graduation'},{name:'Emergência',amount:3000,target:10000,icon:'medical'},{name:'Casa',amount:0,target:50000,icon:'home'}];
const money=(n:number)=>n.toLocaleString('pt-BR',{style:'currency',currency:'BRL'});
const pos=(x:number,y:number,w:number,h:number)=>({position:'absolute' as const,left:x,top:y,width:w,height:h});
export default function Caixinhas(){
 const navigate=useNavigate();const [zoom,setZoom]=useState(1);useEffect(()=>{const f=()=>setZoom(Math.max(1,window.innerWidth/1440));f();window.addEventListener('resize',f);return()=>window.removeEventListener('resize',f)},[]);
 const [goals,setGoals]=useState(initial);const [showMoreIcons,setShowMoreIcons]=useState(false);const [tipOpen,setTipOpen]=useState(true);const [formOpen,setFormOpen]=useState(true);const [name,setName]=useState('');const [target,setTarget]=useState('');const [start,setStart]=useState('');const [chosenIcon,setChosenIcon]=useState('car');const [chosenColor,setChosenColor]=useState('#5212d6');
 const nav=[['Início','/dashboard','/Wrapper.svg'],['Movimentações','/movimentacoes','/Movimenta-es-icon.svg'],['Caixinhas','/caixinhas','/Archive-Caixinhas.svg'],['Categorias','/categorias','/Divider.svg'],['Contas conectadas','/contas-conectadas','/Contas-conectadas-icon.svg']];
 const cards=[...goals];const sum=goals.reduce((n,g)=>n+g.amount,0);const total=goals.reduce((n,g)=>n+g.target,0);
 return <div style={{zoom}} className="relative w-[1440px] min-h-[1024px] bg-[#f9f9fe] font-[Inter] text-[#140f33]">
 <aside style={pos(0,0,232,1024)} className="bg-[#160b30] px-3">
 <div className="flex items-center gap-1 pt-[34px] pb-[43px] pl-3 text-white text-[27px] font-bold"><img src="/logo-branco-3@2x.png" className="w-10 h-[33px] object-contain"/>Valora</div>
 <nav className="flex flex-col gap-1">{nav.map(([label,href,icon])=><button key={label} onClick={()=>href!=='#'&&navigate(href)} className={'h-[54px] w-full border border-[#46395e] rounded-[10px] flex items-center gap-5 px-[13px] text-left text-white text-[14px] '+(label==='Caixinhas'?'bg-[#4212a6]':'bg-transparent')}><img src={icon} className="w-6 h-6 object-contain"/>{label}</button>)}</nav>
 <div style={pos(20,725,198,242)} className="rounded-[12px] overflow-hidden"><img src="/Carro1-Valora.png" alt="" className="absolute w-full h-full object-cover object-[60%_center]"/><div className="absolute inset-0 bg-[#5212d6]/[.05]"/><p className="absolute left-[21px] top-[25px] text-[#b285ff] font-semibold text-[14px]">Seus sonhos</p><p className="absolute left-[21px] top-[42px] text-white font-semibold text-[12px]">mais próximos de você.</p></div><p style={pos(41,735,160,12)} className="text-[#b285ff] font-semibold text-[8px] tracking-[2px]">CONQUISTE —</p>
 </aside>
 <div style={pos(235,0,1205,74)}><Topbar5/></div>
 <h1 style={pos(253,94,430,48)} className="font-bold text-[34px]">Caixinhas</h1><p style={pos(253,138,580,25)} className="text-[#5c5791] text-[15px]">Organize seus sonhos e acompanhe seu progresso.</p>
 <button style={pos(872,103,178,48)} className="bg-[#5212d6] text-white rounded-[10px] text-[13px] font-semibold flex items-center justify-center gap-[10px]" onClick={()=>setFormOpen(true)}><span className="inline-flex items-center justify-center w-[20px] h-[20px] shrink-0"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M12 5v14M5 12h14"/></svg></span><span>Nova caixinha</span></button>
 <div style={pos(253,176,797,112)} className="rounded-[10px] bg-gradient-to-r from-[#5912de] to-[#330e78] text-white">
 <div className="absolute left-[25px] top-[26px]"><p className="text-[#e8deff] text-[12px]">Total poupado</p><b className="text-[28px]">{money(sum)}</b></div><div className="absolute left-[283px] top-[24px] w-px h-[58px] bg-[#8c61d4]"/>
 <div className="absolute left-[328px] top-[26px]"><p className="text-[#e8deff] text-[12px]">Total de objetivos</p><b className="text-[26px]">{money(total)}</b></div><div className="absolute left-[539px] top-[24px] w-px h-[58px] bg-[#8c61d4]"/>
 <img src="/target-icon.svg" className="absolute left-[570px] top-[39px] w-[34px] h-[34px]"/><div className="absolute left-[633px] top-[25px]"><b className="text-[22px]">{Math.floor(sum/total*100)}%</b><p className="text-[12px] leading-[17px]">do seu objetivo total<br/>já foi alcançado.</p></div></div>
 {cards.map((g,i)=>{const x=i%2===0?253:670,y=310+Math.floor(i/2)*118,pct=Math.round(g.amount/g.target*100);return <button key={g.name+i} style={pos(x,y,400,102)} className="bg-white border border-[#e3e3f2] rounded-[11px] text-left" onClick={()=>navigate('/detalhes-caixinha')}><div className="absolute left-[15px] top-[13px] w-[56px] h-[56px] rounded-full bg-[#f0f0ff] flex items-center justify-center text-[#5212d6]"><GoalIcon name={g.icon} size={25}/></div><b className="absolute left-[91px] top-[17px] text-[14px]">{g.name}</b><b className="absolute left-[91px] top-[42px] text-[12px]">{money(g.amount)}</b><span className="absolute left-[176px] top-[42px] text-[#5c5791] text-[12px]">de {money(g.target)}</span><div className="absolute left-[91px] top-[69px] w-[166px] h-[10px] rounded-full bg-[#e8e8f2] overflow-hidden"><div className="bg-[#5212d6] h-full rounded-full" style={{width:pct+'%'}}/></div><b className="absolute left-[271px] top-[67px] text-[11px]">{pct}%</b><span className="absolute left-[369px] top-[11px] text-[24px]">⋮</span></button>})}
 <button style={pos(670,546,400,102)} className="bg-white border border-[#e3e3f2] rounded-[11px] text-left" onClick={()=>setFormOpen(true)}><span className="absolute left-[28px] top-[26px] w-[42px] h-[42px] rounded-[7px] border border-[#c2adf2] text-[#5212d6] text-[25px] text-center">＋</span><b className="absolute left-[117px] top-[21px] text-[13px]">Criar nova caixinha</b><span className="absolute left-[117px] top-[47px] text-[#5c5791] text-[11px]">Defina um objetivo e comece a poupar<br/>para seus sonhos.</span></button>
 {formOpen&&<form style={pos(1070,102,356,599)} className="bg-white border border-[#e3e3f2] rounded-[10px]" onSubmit={e=>{e.preventDefault();const t=Number(target),v=Number(start)||0;if(!name.trim()||t<=0)return;setGoals(old=>[...old,{name:name.trim(),target:t,amount:v,icon:chosenIcon}]);setName('');setTarget('');setStart('');setFormOpen(false)}}>
 <b className="absolute left-[17px] top-[19px] text-[18px]">Criar nova caixinha</b><button type="button" onClick={()=>setFormOpen(false)} className="absolute left-[321px] top-[14px] text-[24px]">×</button>
 <label className="absolute left-[17px] top-[66px] text-[11px] font-semibold">Nome da caixinha</label><input required value={name} onChange={e=>setName(e.target.value)} placeholder="Ex: Viagem, Carro, Emergência..." className="absolute left-[17px] top-[88px] w-[320px] h-[46px] border border-[#e3e3f2] rounded-[9px] px-[15px] text-[11px]"/>
 <label className="absolute left-[17px] top-[154px] text-[11px] font-semibold">Ícone</label><div className="absolute left-[17px] top-[179px] flex gap-[9px]">{['car','plane','graduation','medical','home','briefcase','more'].map(icon=><button key={icon} type="button" onClick={()=>icon==='more'?setShowMoreIcons(v=>!v):setChosenIcon(icon)} className={'w-[38px] h-[38px] rounded-full bg-[#f2f0ff] flex items-center justify-center text-[#5212d6] '+(chosenIcon===icon?'ring-2 ring-[#5212d6]':'')}><GoalIcon name={icon} size={20}/></button>)}</div>
 {showMoreIcons&&<div className="absolute left-[17px] top-[221px] z-10 bg-white border border-[#e3e3f2] rounded-lg shadow-md p-2 flex gap-2">{['heart','gift','book','bike'].map(icon=><button type="button" key={icon} onClick={()=>{setChosenIcon(icon);setShowMoreIcons(false)}} className="w-[35px] h-[35px] flex items-center justify-center text-[#5212d6] bg-[#f2f0ff] rounded-full"><GoalIcon name={icon} size={20}/></button>)}</div>}
 <label className="absolute left-[17px] top-[249px] text-[11px] font-semibold">Valor objetivo</label><input required type="number" min="1" step="0.01" value={target} onChange={e=>setTarget(e.target.value)} placeholder="R$ 0,00" className="absolute left-[17px] top-[271px] w-[320px] h-[46px] border border-[#e3e3f2] rounded-[9px] px-[15px] text-[11px]"/>
 <label className="absolute left-[17px] top-[339px] text-[11px] font-semibold">Valor inicial (opcional)</label><input type="number" min="0" step="0.01" value={start} onChange={e=>setStart(e.target.value)} placeholder="R$ 0,00" className="absolute left-[17px] top-[361px] w-[320px] h-[46px] border border-[#e3e3f2] rounded-[9px] px-[15px] text-[11px]"/>
 <label className="absolute left-[17px] top-[429px] text-[11px] font-semibold">Cor</label><div className="absolute left-[19px] top-[454px] flex gap-[15px]">{['#5212d6','#1b9a60','#ec9e3d','#ec5579','#4188e6','#b067df'].map(color=><button type="button" key={color} onClick={()=>setChosenColor(color)} style={{background:color}} className={'w-[32px] h-[32px] rounded-full '+(chosenColor===color?'ring-2 ring-offset-2 ring-[#5212d6]':'')}/>)}</div>
 <button type="submit" className="absolute left-[17px] top-[522px] w-[320px] h-[48px] bg-[#5212d6] rounded-[9px] text-white text-[13px] font-semibold">Criar caixinha</button>
 </form>}
 <section style={pos(253,675,797,306)} className="bg-white border border-[#e3e3f2] rounded-[10px] overflow-hidden">
 <h2 className="absolute left-[16px] top-[15px] font-bold text-[14px]">Últimas movimentações das caixinhas</h2>
 <button onClick={()=>navigate('/movimentacoes')} className="absolute right-[20px] top-[17px] text-[#5212d6] text-[11px] font-semibold">Ver todas →</button>
 <div className="absolute left-[16px] top-[47px] w-[763px] h-[34px] bg-[#f0f0f9] grid items-center text-[10px] text-[#5c5791] px-[5px]" style={{gridTemplateColumns:'148px 172px 198px 150px 1fr'}}><span>Data</span><span>Caixinha</span><span>Descrição</span><span>Tipo</span><span>Valor</span></div>
 {[
 ['12/03/2025 09:15','Carro','Poupança via PIX','↑  Entrada','+ R$ 500,00',true],
 ['10/03/2025 14:32','Emergência','Poupança automática','↑  Entrada','+ R$ 200,00',true],
 ['08/03/2025 18:10','Viagem','Resgate de valor','↓  Saída','- R$ 300,00',false],
 ['05/03/2025 11:45','Estudos','Poupança manual','↑  Entrada','+ R$ 150,00',true],
 ['02/03/2025 20:20','Carro','Poupança automática','↑  Entrada','+ R$ 500,00',true]
 ].map((row,i)=><div key={i} className="absolute left-[16px] w-[763px] h-[40px] border-b border-[#e3e3f2] grid items-center px-[5px] text-[10px] text-[#5c5791]" style={{top:81+i*40,gridTemplateColumns:'148px 172px 198px 150px 1fr'}}><span>{row[0]}</span><span>{row[1]}</span><span>{row[2]}</span><span>{row[3]}</span><span className={row[5]?'text-[#08994f] font-semibold':'text-[#f01a29] font-semibold'}>{row[4]}</span></div>)}
 </section>
 {tipOpen&&<section style={pos(1070,718,356,263)} className="bg-white border border-[#e3e3f2] rounded-[10px] overflow-hidden">
 <img src="/Moedas-Dica-Valora.png" alt="" className="absolute inset-0 w-full h-full object-cover object-center"/>
 <span className="absolute left-[20px] top-[19px] text-[22px]">💡</span>
 <h2 className="absolute left-[57px] top-[26px] text-[12px] font-semibold">Dica da Valora</h2>
 <button onClick={()=>setTipOpen(false)} className="absolute right-[20px] top-[19px] text-[20px]">×</button>
 <h3 className="absolute left-[21px] top-[81px] text-[15px] font-bold leading-[20px]">Pequenos valores,<br/>grandes conquistas.</h3>
 <p className="absolute left-[21px] top-[139px] text-[#5c5791] text-[11px] leading-[17px]">Automatize suas caixinhas com uma<br/>transferência recorrente e chegue<br/>mais rápido aos seus objetivos.</p>
 <button className="absolute left-[21px] top-[201px] w-[150px] h-[35px] bg-[#5212d6] rounded-[10px] text-white text-[10px] font-semibold">Vincule sua conta bancária →</button>
 </section>}
 </div>
}
