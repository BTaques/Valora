import {useEffect,useState} from 'react';
import {useNavigate} from 'react-router-dom';
import Topbar5 from '../components/Topbar5';
import {GoalIcon} from '../components/GoalIcon';
import {api, type CashboxDto} from '../services/valoraApi';
import {formatMoneyInput,parseMoneyInput,moneyInputFromNumber} from '../utils/moneyInput';
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
const readLocalMovements=(id:number):Movement[]=>{try{return JSON.parse(localStorage.getItem(`valora.cashbox.history.${id}`)||'[]') as Movement[]}catch{return []}};
export default function DetalhesCaixinha(){
const navigate=useNavigate();const [zoom,setZoom]=useState(1);useEffect(()=>{const f=()=>setZoom(Math.max(1,window.innerWidth/1440));f();window.addEventListener('resize',f);return()=>window.removeEventListener('resize',f)},[]);
const cashboxId=Number(new URLSearchParams(window.location.search).get('id'));
const [cashbox,setCashbox]=useState<CashboxDto|null>(null),[apiError,setApiError]=useState('');
const [monthly,setMonthly]=useState('500'),[goalName,setGoalName]=useState(''),[nameEditing,setNameEditing]=useState(false),[draftName,setDraftName]=useState(''),[amount,setAmount]=useState(0),[movements,setMovements]=useState<Movement[]>([]),[deposit,setDeposit]=useState(''),[withdraw,setWithdraw]=useState(''),[period,setPeriod]=useState('Últimos 6 meses'),[more,setMore]=useState(false),[deleted,setDeleted]=useState(false);
useEffect(()=>{if(!cashboxId){setApiError('Abra uma caixinha pela lista para visualizar os detalhes.');return}let active=true;api.caixinhas.get(cashboxId).then(item=>{if(!active)return;setCashbox(item);setGoalName(item.nmCaixinha);setDraftName(item.nmCaixinha);setAmount(Number(item.vlAtual));setMovements(readLocalMovements(item.idCaixinha))}).catch(error=>{if(active)setApiError(error instanceof Error?error.message:'Não foi possível carregar a caixinha')});return()=>{active=false}},[cashboxId]);
const target=Number(cashbox?.vlMeta??0),pct=target>0?Math.round(amount/target*100):0;
const icon=localStorage.getItem(`valora.cashbox.icon.${cashboxId}`)||'target';
const monthlyValue=parseMoneyInput(monthly);const remaining=Math.max(0,target-amount);const months=monthlyValue>0?Math.ceil(remaining/monthlyValue):null;const expected=months===null?'Informe um valor':months===0?'Meta atingida':new Intl.DateTimeFormat('pt-BR',{month:'long',year:'numeric'}).format(new Date(new Date().getFullYear(),new Date().getMonth()+months,1));
const monthsCount=period==='Últimos 3 meses'?3:period==='Últimos 12 meses'?12:6;
const chartDates=Array.from({length:monthsCount},(_,i)=>new Date(new Date().getFullYear(),new Date().getMonth()-(monthsCount-1-i),1));
const chartBalances=chartDates.map((d,i)=>{const next=new Date(d.getFullYear(),d.getMonth()+1,1);const later=movements.filter(m=>new Date(m.date.split('/').reverse().join('-')+'T12:00:00')>=next).reduce((n,m)=>n+(m.kind==='Entrada'?m.value:-m.value),0);return Math.max(0,amount-later)});
const chartMax=Math.max(target,...chartBalances,1);const chartPoints=chartBalances.map((v,i)=>`${i*630/Math.max(1,monthsCount-1)},${105-v/chartMax*100}`).join(' ');
async function register(kind:'Entrada'|'Saída',raw:string){const v=parseMoneyInput(raw);if(!cashbox||!Number.isFinite(v)||v<=0)return;if(kind==='Saída'&&v>amount)return;const balance=amount+(kind==='Entrada'?v:-v);try{const updated=await api.caixinhas.update(cashbox.idCaixinha,{nome:goalName,meta:Number(cashbox.vlMeta),valorAtual:balance});setCashbox(updated);setAmount(Number(updated.vlAtual));const entry:Movement={date:new Date().toLocaleDateString('pt-BR'),desc:kind==='Entrada'?'Valor guardado':'Retirada',kind,value:v,balance:Number(updated.vlAtual)};const history=[entry,...movements];setMovements(history);localStorage.setItem(`valora.cashbox.history.${cashbox.idCaixinha}`,JSON.stringify(history));setDeposit('');setWithdraw('');setApiError('')}catch(error){setApiError(error instanceof Error?error.message:'Não foi possível atualizar o saldo')}}
async function saveGoalName(){if(!cashbox||!draftName.trim())return;try{const updated=await api.caixinhas.update(cashbox.idCaixinha,{nome:draftName.trim(),meta:Number(cashbox.vlMeta),valorAtual:amount});setCashbox(updated);setGoalName(updated.nmCaixinha);setNameEditing(false);setApiError('')}catch(error){setApiError(error instanceof Error?error.message:'Não foi possível atualizar a caixinha')}}
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
<p style={pos(270,176,580,25)} className="text-[#575294] text-[16px]">Junte dinheiro para conquistar seu objetivo.</p>{apiError&&<p role="alert" className="absolute left-[270px] top-[198px] text-[11px] text-red-600">{apiError}</p>}
<button style={pos(1155,124,58,50)} className="rounded-[10px] border border-[#d6d1f0] bg-white text-[24px]" onClick={()=>setMore(!more)}>⋯</button>
{more&&<div style={pos(1100,178,155,75)} className="z-20 bg-white shadow-lg border rounded-lg p-2 text-[12px]"><button onClick={()=>setMore(false)} className="block p-1">Editar caixinha</button><button onClick={()=>setMore(false)} className="block p-1">Configurações</button></div>}
<button style={pos(1228,125,192,48)} className="bg-[#4f12d6] rounded-[10px] text-white text-[12px] font-medium" onClick={()=>document.getElementById('deposit-value')?.focus()}><span className="flex w-full items-center justify-between px-[18px]"><span>Registrar valor fixo</span><svg width="23" height="23" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"><path d="M12 4v16M4 12h16"/></svg></span></button>
<section style={pos(260,215,750,238)} className="rounded-[10px] border border-[#e5e3f0] bg-white">
<div className="absolute left-[19px] top-[20px] w-[92px] h-[92px] bg-[#f0f0ff] rounded-full flex items-center justify-center text-[#4f12d6]"><GoalIcon name={icon} size={52}/></div>
<b className="absolute left-[134px] top-[42px] text-[18px]">{goalName}</b><b className="absolute left-[134px] top-[67px] text-[18px]">{brl(amount)}</b><span className="absolute left-[260px] top-[71px] text-[13px] text-[#575294]">de {brl(target)}</span>
<div className="absolute left-[134px] top-[98px] w-[350px] h-[16px] rounded-full bg-[#ebe8f5] overflow-hidden"><div className="h-full rounded-full bg-[#4f12d6]" style={{width:Math.min(pct,100)+'%'}}/></div><b className="absolute left-[488px] top-[99px] text-[11px]">{pct}%</b>
<div className="absolute left-[533px] top-[13px] w-[201px] h-[82px] bg-[#f6f2ff] border border-[#e0d6f7] rounded-[10px] px-[10px] pt-[7px]"><p className="text-[9px] text-[#6e6685]">◷ &nbsp;Planejamento mensal</p><div className="ml-[12px] flex items-center gap-1"><span className="text-[10px]">R$</span><input aria-label="Valor de economia mensal" inputMode="numeric" value={monthly} onChange={e=>setMonthly(formatMoneyInput(e.target.value))} className="w-[93px] border-b border-[#c7b0f5] bg-transparent text-[14px] font-semibold text-[#571ad1]"/><span className="text-[10px]">/mês</span></div><div className="flex justify-between mt-[3px] text-[7px]"><span>Previsão para atingir a meta</span><b className="text-[#571ad1]">{expected}</b></div><p className="text-[7px] text-[#6e6685] mt-1">Estimativa baseada no saldo e no aporte mensal.</p></div>
{([['Valor objetivo',target,'target'],['Valor poupado',amount,'wallet'],['Falta para o objetivo',Math.max(0,target-amount),'chart']] as const).map(([label,val,icon],i)=><div key={label} className="absolute top-[152px] w-[230px] h-[68px] rounded-[8px] bg-[#f6f5fe]" style={{left:15+i*245}}><span className="absolute left-[18px] top-[20px] text-[#4f12d6]"><DetailIcon name={icon} size={28}/></span><span className="absolute left-[64px] top-[15px] text-[11px] text-[#575294]">{label}</span><b className="absolute left-[64px] top-[34px] text-[16px]">{brl(val)}</b></div>)}
</section>
<section style={pos(260,467,750,218)} className="rounded-[10px] border border-[#e5e3f0] bg-white">
<b className="absolute left-[16px] top-[16px] text-[15px]">Evolução da caixinha</b>
<select value={period} onChange={e=>setPeriod(e.target.value)} className="absolute left-[569px] top-[13px] w-[164px] h-[34px] border border-[#e5e5f2] rounded-[8px] bg-white px-[12px] text-[10px]">{['Últimos 6 meses','Últimos 3 meses','Últimos 12 meses'].map(x=><option key={x}>{x}</option>)}</select>
{[1,.66,.33,0].map((fraction,i)=><div key={i} className="absolute left-[17px] text-[#575294] text-[10px]" style={{top:61+i*35}}>{brl(chartMax*fraction)}</div>)}
{[64,99,134,169].map(y=><div key={y} className="absolute left-[83px] w-[626px] h-px bg-[#ededf7]" style={{top:y}}/>)}
<svg className="absolute left-[83px] top-[64px]" width="630" height="110" viewBox="0 0 630 110" fill="none"><polyline points={chartPoints} stroke="#5212d6" strokeWidth="2.5" strokeLinejoin="round" fill="none"/>{chartBalances.map((v,i)=><circle key={i} cx={i*630/Math.max(1,monthsCount-1)} cy={105-v/chartMax*100} r="3.5" fill="#5212d6" stroke="white" strokeWidth="1.5"/>)}</svg>
{chartDates.map((d,i)=><span key={i} className="absolute top-[180px] text-[10px] text-[#575294]" style={{left:75+i*630/Math.max(1,monthsCount-1)}}>{d.toLocaleDateString('pt-BR',{month:'short'})}</span>)}
<p className="absolute left-[18px] bottom-[4px] text-[9px] text-[#77718e]">Evolução estimada com registros locais deste navegador.</p>
</section>
<section style={pos(260,701,750,274)} className="rounded-[10px] border border-[#e5e3f0] bg-white overflow-hidden">
<b className="absolute left-[16px] top-[14px] text-[15px]">Últimas movimentações <span className="text-[10px] font-normal text-[#77718e]">(neste navegador)</span></b><button className="absolute right-[20px] top-[15px] text-[11px] text-[#4f12d6] font-medium" onClick={()=>navigate('/movimentacoes')}>Ver todas →</button>
<div className="absolute left-[15px] top-[46px] w-[718px] h-[34px] bg-[#f6f6fb] grid items-center px-[3px] text-[#575294] text-[10px]" style={{gridTemplateColumns:'139px 199px 187px 91px 1fr'}}>{['Data','Descrição','Tipo','Valor','Saldo da caixinha'].map(x=><span key={x}>{x}</span>)}</div>
<div className="absolute left-[15px] top-[80px] w-[718px] h-[180px] overflow-y-auto">{movements.map((m,i)=><div key={i} className="h-[36px] border-b border-[#e5e5f2] grid items-center px-[3px] text-[10px] text-[#575294]" style={{gridTemplateColumns:'139px 199px 187px 91px 1fr'}}><span>{m.date}</span><span>{m.desc}</span><span>{m.kind==='Entrada'?'↑':'↓'} &nbsp;{m.kind}</span><b className={m.kind==='Entrada'?'text-[#059e54]':'text-[#f2141f]'}>{m.kind==='Entrada'?'+ ':'- '}{brl(m.value)}</b><span>{brl(m.balance)}</span></div>)}{movements.length===0&&<p className="mt-8 text-center text-[11px] text-[#77718e]">Ainda não há registros locais nesta caixinha.</p>}</div>
</section>
<section style={pos(1035,215,385,226)} className="rounded-[10px] border border-[#e5e3f0] bg-white">
<b className="absolute left-[16px] top-[14px] text-[15px]">Registrar valor fixo</b>
<p className="absolute left-[16px] top-[39px] text-[9px] text-[#575294]">Registre um valor para adicionar à sua caixinha.</p>
<label htmlFor="deposit-value" className="absolute left-[24px] top-[64px] text-[12px] font-semibold text-[#120d38]">Valor:</label>
<input id="deposit-value" type="text" inputMode="numeric" value={deposit} onChange={e=>setDeposit(formatMoneyInput(e.target.value))} placeholder="R$ 0,00" className="absolute left-[16px] top-[85px] w-[351px] h-[35px] border border-[#e5e5f2] rounded-[8px] px-3 text-[12px]"/>
<div className="absolute left-[16px] top-[129px] flex gap-[8px]">{[100,200,500,1000].map(v=><button key={v} onClick={()=>setDeposit(moneyInputFromNumber(v))} className="w-[79px] h-[40px] border border-[#e5e5f2] rounded-[8px] text-[11px]">R$ {v.toLocaleString('pt-BR')}</button>)}</div>
<button onClick={()=>register('Entrada',deposit)} className="absolute left-[16px] top-[182px] w-[351px] h-[44px] bg-[#4f12d6] text-white text-[12px] rounded-[10px]">Registrar valor &nbsp; →</button>
</section>
<section style={pos(1035,454,385,177)} className="rounded-[10px] border border-[#e5e3f0] bg-white">
<b className="absolute left-[16px] top-[14px] text-[15px]">Registrar retirada do valor</b>
<p className="absolute left-[16px] top-[39px] text-[9px] text-[#575294]">Usou parte desse dinheiro? Registre o valor para manter sua caixinha atualizada.</p>
<input type="text" inputMode="numeric" value={withdraw} onChange={e=>setWithdraw(formatMoneyInput(e.target.value))} placeholder="R$ 0,00" className="absolute left-[16px] top-[64px] w-[351px] h-[41px] border border-[#e5e5f2] rounded-[8px] px-3 text-[12px]"/>
<button onClick={()=>register('Saída',withdraw)} className="absolute left-[16px] top-[114px] w-[351px] h-[44px] bg-[#f4edff] border border-[#c7b0f5] text-[#4f12d6] text-[12px] rounded-[10px]">Registrar retirada &nbsp; →</button>
</section>
<section style={pos(1035,644,385,331)} className="rounded-[10px] border border-[#e5e3f0] bg-white">
<b className="absolute left-[16px] top-[14px] text-[16px]">Informações da caixinha</b>
{([['Nome',goalName,'name'],['Valor objetivo',brl(target),'target'],['Valor poupado',brl(amount),'wallet'],['Progresso',pct+'%','progress'],['Criada em',cashbox?.dtCriacao?new Date(cashbox.dtCriacao).toLocaleDateString('pt-BR'):'—','calendar'],['Última movimentação',movements[0]?.date||'—','history']] as const).map(([label,value,icon],i)=><div key={label} className="absolute left-[15px] w-[353px] h-[34px] flex items-center justify-between border-t border-[#e5e5f2] pl-[30px] pr-[12px] text-[11px]" style={{top:42+i*34}}><span className="absolute left-[3px] text-[#4f12d6]"><DetailIcon name={icon} size={18}/></span><span className="text-[#575294]">{label}</span><b className="font-medium">{value}</b></div>)}
<button onClick={()=>{if(window.confirm('Deseja excluir esta caixinha?')&&cashbox){api.caixinhas.remove(cashbox.idCaixinha).then(()=>{setDeleted(true);navigate('/caixinhas')}).catch(error=>setApiError(error instanceof Error?error.message:'Não foi possível excluir a caixinha'))}}} className="absolute left-[15px] top-[271px] w-[353px] h-[42px] border border-[#ff3847] text-[#f2141f] rounded-[10px] text-[12px]"><span className="flex items-center justify-center gap-2"><DetailIcon name="trash" size={22}/>Excluir caixinha</span></button>
</section>
{nameEditing&&<div className="fixed inset-0 z-[300] bg-[#130a2e]/50 flex items-center justify-center" onMouseDown={()=>setNameEditing(false)}><div className="w-[400px] bg-white rounded-[14px] shadow-xl p-6" onMouseDown={e=>e.stopPropagation()}><h2 className="text-[20px] font-bold">Editar nome da caixinha</h2><label htmlFor="goal-name" className="block mt-5 mb-2 text-[13px]">Nome da caixinha</label><input id="goal-name" autoFocus value={draftName} onChange={e=>setDraftName(e.target.value)} onKeyDown={e=>{if(e.key==='Enter'&&draftName.trim()){void saveGoalName()}}} className="w-full h-[43px] px-3 border border-[#d6d1f0] rounded-lg"/><div className="flex gap-3 mt-6"><button className="flex-1 h-10 border rounded-lg" onClick={()=>setNameEditing(false)}>Cancelar</button><button className="flex-1 h-10 bg-[#4f12d6] text-white rounded-lg" onClick={()=>{if(draftName.trim()){void saveGoalName()}}}>Salvar</button></div></div></div>}{deleted&&<span className="sr-only">Caixinha excluída</span>}
</div>
}
