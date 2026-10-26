import {useEffect,useState} from 'react';
import {useNavigate} from 'react-router-dom';
import Topbar5 from '../components/Topbar5';
import {GoalIcon} from '../components/GoalIcon';
const pos=(x:number,y:number,w:number,h:number)=>({position:'absolute' as const,left:x,top:y,width:w,height:h});
const brl=(n:number)=>n.toLocaleString('pt-BR',{style:'currency',currency:'BRL'});
type IconName='target'|'wallet'|'chart'|'name'|'calendar'|'history'|'progress'|'trash';
function DetailIcon({name,size=22}:{name:IconName;size?:number}){
 const common={width:size,height:size,viewBox:'0 0 24 24',fill:'none',stroke:'currentColor',strokeWidth:1.9,strokeLinecap:'round' as const,strokeLinejoin:'round' as const};
 const shapes:Record<IconName,React.ReactNode>={
 target:<><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.5" fill="currentColor" stroke="none"/></>,
 wallet:<><rect x="3" y="6" width="18" height="15" rx="2"/><path d="M3 9V5a2 2 0 0 1 2-2h13"/><path d="M15 12h6v5h-6a2.5 2.5 0 0 1 0-5Z"/><circle cx="16.5" cy="14.5" r=".7" fill="currentColor" stroke="none"/></>,
 chart:<><path d="M3 20h18"/><path d="M5 16l5-5 4 3 6-8"/><path d="M16 6h4v4"/></>,
 name:<><path d="M4 7h16M4 12h12M4 17h8"/></>,
 calendar:<><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M7 3v4M17 3v4M3 10h18"/></>,
 history:<><path d="M3 12a9 9 0 1 0 3-6.7"/><path d="M3 4v5h5M12 7v5l3 2"/></>,
 progress:<><circle cx="12" cy="12" r="9"/><path d="M12 3a9 9 0 0 1 9 9"/><path d="m8 12 3 3 5-6"/></>,
 trash:<><path d="M3 6h18M8 6V4h8v2M6 6l1 15h10l1-15M10 10v7M14 10v7"/></>
 };
 return <svg {...common} aria-hidden="true">{shapes[name]}</svg>;
}
type Movement={date:string;desc:string;kind:'Entrada'|'Saída';value:number;balance:number};
const seed:Movement[]=[
{date:'12/03/2025 09:15',desc:'Transferência via PIX',kind:'Entrada',value:500,balance:10000},
{date:'05/03/2025 14:32',desc:'Depósito manual',kind:'Entrada',value:200,balance:9500},
{date:'25/02/2025 18:10',desc:'Transferência via PIX',kind:'Entrada',value:50,balance:9300},
{date:'10/02/2025 10:45',desc:'Depósito manual',kind:'Entrada',value:300,balance:8800},
{date:'01/02/2025 12:15',desc:'Depósito manual',kind:'Entrada',value:500,balance:8500},
];
export default function DetalhesCaixinha(){
const navigate=useNavigate();const [zoom,setZoom]=useState(1);useEffect(()=>{const f=()=>setZoom(Math.max(1,window.innerWidth/1440));f();window.addEventListener('resize',f);return()=>window.removeEventListener('resize',f)},[]);
const [goalName,setGoalName]=useState('Carro'),[nameEditing,setNameEditing]=useState(false),[draftName,setDraftName]=useState('Carro'),[amount,setAmount]=useState(10000),[movements,setMovements]=useState(seed),[deposit,setDeposit]=useState(''),[withdraw,setWithdraw]=useState(''),[period,setPeriod]=useState('Últimos 6 meses'),[more,setMore]=useState(false),[deleted,setDeleted]=useState(false);
const target=30000,pct=Math.round(amount/target*100);
function register(kind:'Entrada'|'Saída',raw:string){const v=Number(raw.replace(',','.'));if(!Number.isFinite(v)||v<=0)return; if(kind==='Saída'&&v>amount)return;const balance=amount+(kind==='Entrada'?v:-v);setAmount(balance);setMovements(old=>[{date:new Date().toLocaleString('pt-BR'),desc:kind==='Entrada'?'Depósito manual':'Retirada manual',kind,value:v,balance},...old]);setDeposit('');setWithdraw('')}
const nav=[['Início','/dashboard','/Wrapper.svg'],['Movimentações','/movimentacoes','/Movimenta-es-icon.svg'],['Caixinhas','/caixinhas','/Archive-Caixinhas.svg'],['Categorias','/categorias','/Divider.svg'],['Contas conectadas','/contas-conectadas','/Contas-conectadas-icon.svg']];
return <div style={{zoom}} className="relative w-[1440px] min-h-[1024px] bg-[#f9f9fe] font-[Inter] text-[#120d38]">
<aside style={pos(0,0,232,1024)} className="bg-[#130a2e] px-3">
<div className="flex items-center gap-1 pt-[34px] pb-[43px] pl-3 text-white text-[27px] font-bold"><img src="/logo-branco-3@2x.png" className="w-10 h-[33px] object-contain"/>Valora</div>
<nav className="flex flex-col gap-1">{nav.map(([label,href,icon])=><button key={label} onClick={()=>href!=='#'&&navigate(href)} className={'h-[54px] w-full border border-[#46395e] rounded-[10px] flex items-center gap-5 px-[13px] text-left text-white text-[14px] '+(label==='Caixinhas'?'bg-[#4212a6]':'bg-transparent')}><img src={icon} className="w-6 h-6 object-contain"/>{label}</button>)}</nav>
<div style={pos(17,721,198,242)} className="rounded-[12px] overflow-hidden">
<img src="/Organizacao-Objetivos.png" alt="" className="absolute inset-0 w-full h-full object-cover object-[70%_center]"/>
<div className="absolute inset-0 bg-gradient-to-b from-[#130a2e]/80 via-transparent to-transparent"/>
<p className="absolute left-[13px] top-[11px] text-[#b285ff] font-semibold text-[8px] tracking-[2px]">ORGANIZAÇÃO —</p>
<p className="absolute left-[13px] top-[29px] text-white font-semibold text-[10px] leading-[15px]">O primeiro passo<br/>para conquistar<br/>seus <span className="text-[#b285ff]">objetivos.</span></p>
</div>
</aside>
<div style={pos(235,0,1205,74)}><Topbar5/></div>
<button style={pos(270,94,210,22)} className="text-left text-[12px] font-medium" onClick={()=>navigate('/caixinhas')}>← &nbsp;Voltar para caixinhas</button>
<div style={pos(270,132,510,50)} className="flex items-center gap-[15px]"><h1 className="font-bold text-[34px]">Caixinha: {goalName}</h1><button aria-label="Editar nome da caixinha" title="Editar nome da caixinha" onClick={()=>{setDraftName(goalName);setNameEditing(true)}} className="text-[#7a61e5] text-[21px] leading-none">✎</button></div>
<p style={pos(270,176,580,25)} className="text-[#575294] text-[16px]">Junte dinheiro para conquistar seu carro. &nbsp;🚗</p>
<button style={pos(1155,124,58,50)} className="rounded-[10px] border border-[#d6d1f0] bg-white text-[24px]" onClick={()=>setMore(!more)}>⋯</button>
{more&&<div style={pos(1100,178,155,75)} className="z-20 bg-white shadow-lg border rounded-lg p-2 text-[12px]"><button onClick={()=>setMore(false)} className="block p-1">Editar caixinha</button><button onClick={()=>setMore(false)} className="block p-1">Configurações</button></div>}
<button style={pos(1228,125,192,48)} className="bg-[#4f12d6] rounded-[10px] text-white text-[12px] font-medium" onClick={()=>document.getElementById('deposit-value')?.focus()}><span className="flex w-full items-center justify-between px-[18px]"><span>Registrar valor fixo</span><svg width="23" height="23" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"><path d="M12 4v16M4 12h16"/></svg></span></button>
<section style={pos(260,215,750,238)} className="rounded-[10px] border border-[#e5e3f0] bg-white">
<div className="absolute left-[19px] top-[20px] w-[92px] h-[92px] bg-[#f0f0ff] rounded-full flex items-center justify-center text-[#4f12d6]"><GoalIcon name="car" size={52}/></div>
<b className="absolute left-[134px] top-[42px] text-[18px]">{goalName}</b><b className="absolute left-[134px] top-[67px] text-[18px]">{brl(amount)}</b><span className="absolute left-[260px] top-[71px] text-[13px] text-[#575294]">de R$ 30.000,00</span>
<div className="absolute left-[134px] top-[98px] w-[350px] h-[16px] rounded-full bg-[#ebe8f5] overflow-hidden"><div className="h-full rounded-full bg-[#4f12d6]" style={{width:Math.min(pct,100)+'%'}}/></div><b className="absolute left-[488px] top-[99px] text-[11px]">{pct}%</b>
<div className="absolute left-[533px] top-[13px] w-[201px] h-[82px] bg-[#f6f2ff] border border-[#e0d6f7] rounded-[10px] px-[10px] pt-[7px]"><p className="text-[9px] text-[#6e6685]">◷ &nbsp;Planejamento mensal</p><b className="text-[14px] text-[#571ad1] ml-[27px]">R$ 500/mês</b><div className="flex justify-between mt-[3px] text-[7px]"><span>Previsão para atingir a meta</span><b className="text-[#571ad1]">Novembro de 2029</b></div><p className="text-[7px] text-[#6e6685] mt-1">A previsão se ajusta conforme seus registros.</p></div>
{([['Valor objetivo',target,'target'],['Valor poupado',amount,'wallet'],['Falta para o objetivo',Math.max(0,target-amount),'chart']] as const).map(([label,val,icon],i)=><div key={label} className="absolute top-[152px] w-[230px] h-[68px] rounded-[8px] bg-[#f6f5fe]" style={{left:15+i*245}}><span className="absolute left-[18px] top-[20px] text-[#4f12d6]"><DetailIcon name={icon} size={28}/></span><span className="absolute left-[64px] top-[15px] text-[11px] text-[#575294]">{label}</span><b className="absolute left-[64px] top-[34px] text-[16px]">{brl(val)}</b></div>)}
</section>
<section style={pos(260,467,750,218)} className="rounded-[10px] border border-[#e5e3f0] bg-white">
<b className="absolute left-[16px] top-[16px] text-[15px]">Evolução da caixinha</b>
<select value={period} onChange={e=>setPeriod(e.target.value)} className="absolute left-[569px] top-[13px] w-[164px] h-[34px] border border-[#e5e5f2] rounded-[8px] bg-white px-[12px] text-[10px]">{['Últimos 6 meses','Últimos 3 meses','Últimos 12 meses'].map(x=><option key={x}>{x}</option>)}</select>
{['R$ 30.000','R$ 20.000','R$ 10.000','R$ 0'].map((t,i)=><div key={t} className="absolute left-[17px] text-[#575294] text-[10px]" style={{top:61+i*35}}>{t}</div>)}
{[64,99,134,169].map(y=><div key={y} className="absolute left-[83px] w-[626px] h-px bg-[#ededf7]" style={{top:y}}/>)}
{[83,188,293,398,503,608].map(x=><div key={x} className="absolute top-[64px] h-[106px] w-px bg-[#f2f2fa]" style={{left:x}}/>)}
<svg className="absolute left-[83px] top-[64px]" width="630" height="110" viewBox="0 0 630 110" fill="none"><path d="M0 105 L105 90 L210 77 L315 69 L420 61 L525 53 L630 45" stroke="#5212d6" strokeWidth="2.5" strokeLinejoin="round"/>{[[0,105],[105,90],[210,77],[315,69],[420,61],[525,53]].map(([x,y],i)=><circle key={i} cx={x} cy={y} r="3.5" fill="#5212d6" stroke="white" strokeWidth="1.5"/>)}</svg>
{['Jan','Fev','Mar','Abr','Mai','Jun'].map((m,i)=><span key={m} className="absolute top-[180px] text-[10px] text-[#575294]" style={{left:75+i*105}}>{m}</span>)}
<div className="absolute left-[613px] top-[61px] w-[105px] h-[52px] bg-white border border-[#e5e5f2] rounded-[8px] px-[11px] pt-[7px]"><p className="text-[10px] text-[#575294]">Jun/2025</p><b className="text-[11px]">{brl(amount)}</b></div>
</section>
<section style={pos(260,701,750,274)} className="rounded-[10px] border border-[#e5e3f0] bg-white overflow-hidden">
<b className="absolute left-[16px] top-[14px] text-[15px]">Últimas movimentações</b><button className="absolute right-[20px] top-[15px] text-[11px] text-[#4f12d6] font-medium" onClick={()=>navigate('/movimentacoes')}>Ver todas →</button>
<div className="absolute left-[15px] top-[46px] w-[718px] h-[34px] bg-[#f6f6fb] grid items-center px-[3px] text-[#575294] text-[10px]" style={{gridTemplateColumns:'139px 199px 187px 91px 1fr'}}>{['Data','Descrição','Tipo','Valor','Saldo da caixinha'].map(x=><span key={x}>{x}</span>)}</div>
<div className="absolute left-[15px] top-[80px] w-[718px] h-[180px] overflow-y-auto">{movements.map((m,i)=><div key={i} className="h-[36px] border-b border-[#e5e5f2] grid items-center px-[3px] text-[10px] text-[#575294]" style={{gridTemplateColumns:'139px 199px 187px 91px 1fr'}}><span>{m.date}</span><span>{m.desc}</span><span>{m.kind==='Entrada'?'↑':'↓'} &nbsp;{m.kind}</span><b className={m.kind==='Entrada'?'text-[#059e54]':'text-[#f2141f]'}>{m.kind==='Entrada'?'+ ':'- '}{brl(m.value)}</b><span>{brl(m.balance)}</span></div>)}</div>
</section>
<section style={pos(1035,215,385,226)} className="rounded-[10px] border border-[#e5e3f0] bg-white">
<b className="absolute left-[16px] top-[14px] text-[15px]">Registrar valor fixo</b>
<p className="absolute left-[16px] top-[39px] text-[9px] text-[#575294]">Registre um valor para adicionar à sua caixinha.</p>
<label htmlFor="deposit-value" className="absolute left-[24px] top-[64px] text-[12px] font-semibold text-[#120d38]">Valor:</label>
<input id="deposit-value" type="number" min="0.01" step="0.01" value={deposit} onChange={e=>setDeposit(e.target.value)} placeholder="R$ 0,00" className="absolute left-[16px] top-[85px] w-[351px] h-[35px] border border-[#e5e5f2] rounded-[8px] px-3 text-[12px]"/>
<div className="absolute left-[16px] top-[129px] flex gap-[8px]">{[100,200,500,1000].map(v=><button key={v} onClick={()=>setDeposit(String(v))} className="w-[79px] h-[40px] border border-[#e5e5f2] rounded-[8px] text-[11px]">R$ {v.toLocaleString('pt-BR')}</button>)}</div>
<button onClick={()=>register('Entrada',deposit)} className="absolute left-[16px] top-[182px] w-[351px] h-[44px] bg-[#4f12d6] text-white text-[12px] rounded-[10px]">Registrar valor &nbsp; →</button>
</section>
<section style={pos(1035,454,385,177)} className="rounded-[10px] border border-[#e5e3f0] bg-white">
<b className="absolute left-[16px] top-[14px] text-[15px]">Registrar retirada do valor</b>
<p className="absolute left-[16px] top-[39px] text-[9px] text-[#575294]">Usou parte desse dinheiro? Registre o valor para manter sua caixinha atualizada.</p>
<input type="number" min="0.01" step="0.01" value={withdraw} onChange={e=>setWithdraw(e.target.value)} placeholder="R$ 0,00" className="absolute left-[16px] top-[64px] w-[351px] h-[41px] border border-[#e5e5f2] rounded-[8px] px-3 text-[12px]"/>
<button onClick={()=>register('Saída',withdraw)} className="absolute left-[16px] top-[114px] w-[351px] h-[44px] bg-[#f4edff] border border-[#c7b0f5] text-[#4f12d6] text-[12px] rounded-[10px]">Registrar retirada &nbsp; →</button>
</section>
<section style={pos(1035,644,385,331)} className="rounded-[10px] border border-[#e5e3f0] bg-white">
<b className="absolute left-[16px] top-[14px] text-[16px]">Informações da caixinha</b>
{([['Nome',goalName,'name'],['Valor objetivo',brl(target),'target'],['Valor poupado',brl(amount),'wallet'],['Progresso',pct+'%','progress'],['Criada em','10/01/2025','calendar'],['Última movimentação',movements[0]?.date.slice(0,10)||'—','history']] as const).map(([label,value,icon],i)=><div key={label} className="absolute left-[15px] w-[353px] h-[34px] flex items-center justify-between border-t border-[#e5e5f2] pl-[30px] pr-[12px] text-[11px]" style={{top:42+i*34}}><span className="absolute left-[3px] text-[#4f12d6]"><DetailIcon name={icon} size={18}/></span><span className="text-[#575294]">{label}</span><b className="font-medium">{value}</b></div>)}
<button onClick={()=>{if(window.confirm('Deseja excluir esta caixinha?')){setDeleted(true);navigate('/caixinhas')}}} className="absolute left-[15px] top-[271px] w-[353px] h-[42px] border border-[#ff3847] text-[#f2141f] rounded-[10px] text-[12px]"><span className="flex items-center justify-center gap-2"><DetailIcon name="trash" size={22}/>Excluir caixinha</span></button>
</section>
{nameEditing&&<div className="fixed inset-0 z-[300] bg-[#130a2e]/50 flex items-center justify-center" onMouseDown={()=>setNameEditing(false)}><div className="w-[400px] bg-white rounded-[14px] shadow-xl p-6" onMouseDown={e=>e.stopPropagation()}><h2 className="text-[20px] font-bold">Editar nome da caixinha</h2><label htmlFor="goal-name" className="block mt-5 mb-2 text-[13px]">Nome da caixinha</label><input id="goal-name" autoFocus value={draftName} onChange={e=>setDraftName(e.target.value)} onKeyDown={e=>{if(e.key==='Enter'&&draftName.trim()){setGoalName(draftName.trim());setNameEditing(false)}}} className="w-full h-[43px] px-3 border border-[#d6d1f0] rounded-lg"/><div className="flex gap-3 mt-6"><button className="flex-1 h-10 border rounded-lg" onClick={()=>setNameEditing(false)}>Cancelar</button><button className="flex-1 h-10 bg-[#4f12d6] text-white rounded-lg" onClick={()=>{if(draftName.trim()){setGoalName(draftName.trim());setNameEditing(false)}}}>Salvar</button></div></div></div>}{deleted&&<span className="sr-only">Caixinha excluída</span>}
</div>
}
