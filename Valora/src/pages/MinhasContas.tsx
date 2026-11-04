import {useEffect,useMemo,useState} from 'react';
import {useNavigate} from 'react-router-dom';
import SidebarMenu from '../components/SidebarMenu';
import Topbar5 from '../components/Topbar5';
import {api,type AccountDto,type MovementDto} from '../services/valoraApi';
import {formatMoneyInput,parseMoneyInput} from '../utils/moneyInput';

const pos=(x:number,y:number,w:number,h:number)=>({position:'absolute' as const,left:x,top:y,width:w,height:h});
const money=(n:number)=>n.toLocaleString('pt-BR',{style:'currency',currency:'BRL'});
const colors=['#5712d6','#b58aff','#4184d7','#36b3ac','#e09b4b','#e76ba5','#667085'];
const safeAmount=(n:unknown)=>Number.isFinite(Number(n))?Number(n):0;
function AccountIcon({name}:{name:string}){
 const key=name.toLowerCase();
 const img=key.includes('nubank')?'/Official-bank-logo2@2x.png':key.includes('brasil')?'/Clean-Banco-BB-Valora.png':key.includes('itaú')||key.includes('itau')?'/Clean-Banco-Itau-Valora.png':key.includes('santander')?'/Clean-Banco-Santander-Valora.png':key.includes('bradesco')?'/Banco-Bradesco-Valora.png':key.includes('caixa')?'/Banco-Caixa-Valora.png':key.includes('c6')?'/Banco-C6-Valora.png':null;
 return <span className={"w-[48px] h-[48px] rounded-[12px] flex items-center justify-center shrink-0 "+(key.includes("brasil")?"bg-[#ffdf48]":"bg-[#f4f0ff]")}>{img?<img src={img} alt="" className="w-[38px] h-[38px] object-contain"/>:<svg width="27" height="27" viewBox="0 0 24 24" fill="none" stroke="#5712d6" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="m2 9 10-6 10 6M4 10h16M5 19h14M3 22h18M7 10v9m5-9v9m5-9v9"/></svg>}</span>;
}
function ActionIcon({kind}:{kind:'add'|'connect'|'manage'}){
 return <svg width="27" height="27" viewBox="0 0 24 24" fill="none" stroke="#5712d6" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">{kind==='add'?<><rect x="3" y="3" width="18" height="18" rx="4"/><path d="M12 7v10M7 12h10"/></>:kind==='connect'?<><path d="M3 10 12 5l9 5M5 11h14M6 11v7m4-7v7m4-7v7m4-7v7M4 19h16"/><circle cx="18" cy="18" r="4" fill="#f0eaff"/><path d="m16.5 18 1 1 2-2" strokeWidth="1.6"/></>:<><rect x="3" y="4" width="18" height="16" rx="3"/><path d="M7 9h10M7 15h10"/><circle cx="10" cy="9" r="1.5" fill="white"/><circle cx="15" cy="15" r="1.5" fill="white"/></>}</svg>;
}
export default function MinhasContas(){
 const navigate=useNavigate();
 const [zoom,setZoom]=useState(1);
 const [accounts,setAccounts]=useState<AccountDto[]>([]);
 const [movements,setMovements]=useState<MovementDto[]>([]);
 const [loading,setLoading]=useState(true);
 const [error,setError]=useState('');
 const [modal,setModal]=useState(false);
 const [detail,setDetail]=useState<AccountDto|null>(null);
 const [name,setName]=useState('');
 const [balance,setBalance]=useState('R$ 0,00');
 const [saving,setSaving]=useState(false);
 const [formError,setFormError]=useState('');
 useEffect(()=>{const resize=()=>setZoom(Math.max(1,window.innerWidth/1440));resize();window.addEventListener('resize',resize);return()=>window.removeEventListener('resize',resize)},[]);
 const load=async()=>{setLoading(true);try{const [movs,accs]=await Promise.all([api.movimentacoes.listAll(),(async()=>{const all:AccountDto[]=[];let page=0,total=1;do{const r=await api.contas.list(page);all.push(...r.content);total=r.totalPages;page++}while(page<total);return all})()]);setAccounts(accs);setMovements(movs);setError('')}catch(e){setError(e instanceof Error?e.message:'Não foi possível carregar suas contas')}finally{setLoading(false)}};
 useEffect(()=>{void load()},[]);
 const total=accounts.reduce((s,a)=>s+safeAmount(a.saldo),0);
 const portions=useMemo(()=>{const valid=accounts.map((a,i)=>({...a,color:colors[i%colors.length],amount:Math.max(0,safeAmount(a.saldo))}));const sum=valid.reduce((s,a)=>s+a.amount,0);let offset=0;const gradient=valid.filter(a=>a.amount>0).map(a=>{const start=offset;offset+=a.amount/sum*100;return `${a.color} ${start}% ${offset}%`}).join(', ');return {valid,gradient,sum}},[accounts]);
 const latest=movements.slice().sort((a,b)=>b.dataMovimentacao.localeCompare(a.dataMovimentacao)).slice(0,3);
 const save=async(e:React.FormEvent)=>{e.preventDefault();const saldo=parseMoneyInput(balance);if(!name.trim()||saldo<0||!Number.isFinite(saldo)){setFormError('Informe nome e saldo válidos.');return}setSaving(true);setFormError('');try{await api.contas.create({nome:name.trim(),saldo});setModal(false);setName('');setBalance('R$ 0,00');await load()}catch(e){setFormError(e instanceof Error?e.message:'Não foi possível cadastrar a conta')}finally{setSaving(false)}};
 return <div style={{zoom}} className="relative w-[1440px] min-h-[1024px] bg-[#f6f9fe] font-[Inter] text-[#140d40]">
 <aside style={pos(0,0,232,1024)} className="bg-[#130938] text-white"><SidebarMenu active="Minhas contas"/>
 <div style={pos(18,727,195,235)} className="overflow-hidden rounded-[12px] border border-[#452985] bg-[#260754]">
 <div className="absolute inset-0 bg-gradient-to-br from-[#230543] via-[#41057e] to-[#13052c]"/>
 <p className="absolute left-[12px] top-[13px] text-[8px] font-semibold tracking-[1.5px] text-[#cba6ff]">SEUS OBJETIVOS</p>
 <p className="absolute left-[12px] top-[32px] text-[13px] font-bold leading-[17px] text-white">Guarde hoje para<br/>realizar amanhã.</p>
 <p className="absolute left-[12px] top-[73px] w-[162px] text-[10px] leading-[14px] text-[#e7d9ff]">Crie caixinhas, defina metas e acompanhe sua evolução.</p>
 <div className="absolute right-[12px] bottom-[14px] w-[103px] h-[76px]">
 <div className="absolute left-[17px] top-[23px] w-[81px] h-[48px] rounded-[9px] bg-gradient-to-br from-[#bb70ff] to-[#6411d4] shadow-[0_4px_18px_#a343f0]"/>
 <div className="absolute left-[11px] top-[9px] w-[82px] h-[18px] rotate-[-19deg] rounded-[7px] bg-gradient-to-r from-[#b85aff] to-[#6c15d8]"/>
 <div className="absolute left-[39px] top-[16px] w-[35px] h-[35px] rounded-full border-[4px] border-[#cf8cff] bg-[#8128e5] text-white text-[17px] text-center">↗</div>
 <div className="absolute left-[6px] bottom-0 w-[27px] h-[11px] rounded-full border-[3px] border-[#cb86ff] bg-[#8730d9]"/>
 </div>
 </div></aside>
 <div style={pos(235,0,1205,74)}><Topbar5/></div>
 <h1 style={pos(270,106,600,45)} className="font-bold text-[30px]">Minhas contas</h1>
 <p style={pos(270,150,750,25)} className="text-[#595291] text-[14px]">Gerencie todas as suas contas em um só lugar.</p>
 {error&&<p role="alert" style={pos(270,176,900,24)} className="text-red-600 text-[12px]">{error}</p>}
 <section id="contas-cadastradas" style={pos(270,195,1110,320)} className="rounded-[12px] bg-white border border-[#e3e5f2]">
 <h2 className="absolute left-[22px] top-[18px] text-[19px] font-semibold">Contas cadastradas</h2><span className="absolute right-[23px] top-[23px] text-[13px] text-[#595291]">{accounts.length} {accounts.length===1?'conta':'contas'}</span>
 <div className="absolute left-[22px] right-[22px] top-[67px] bottom-[25px] flex gap-[15px] overflow-x-auto pb-2">
 {loading?<p className="text-[#595291] text-[13px]">Carregando contas...</p>:accounts.length===0?<div className="w-full h-full rounded-[12px] border border-dashed border-[#d9d0ed] flex flex-col items-center justify-center gap-3 text-[#595291] text-[14px]">Nenhuma conta cadastrada.<button onClick={()=>setModal(true)} className="text-[#5712d6] font-semibold">Adicionar primeira conta →</button></div>:accounts.map(a=><article key={a.id} className="relative w-[525px] min-w-[350px] max-w-[525px] flex-1 h-[225px] rounded-[12px] border border-[#e3e5f2] p-[19px]">
 <div className="flex gap-3 items-center"><AccountIcon name={a.nome}/><div><h3 className="font-semibold text-[17px]">{a.nome}</h3><p className="text-[#595291] text-[12px]">Conta cadastrada</p></div></div>
 <p className="mt-5 text-[#595291] text-[12px]">Saldo disponível</p><p className="mt-1 text-[24px] font-semibold">{money(safeAmount(a.saldo))}</p>
 <button onClick={()=>setDetail(a)} className="absolute left-[19px] right-[19px] bottom-[15px] h-[37px] rounded-full border border-[#d9d4e5] text-[13px] font-semibold hover:border-[#5712d6]">Ver detalhes</button>
 </article>)}</div></section>
 {([['add','Adicionar conta','Cadastrar manualmente'],['connect','Conectar banco','Via Open Finance'],['manage','Gerenciar contas','Visualizar e organizar']] as const).map(([kind,title,sub],i)=><button key={kind} onClick={()=>kind==='add'?setModal(true):kind==='connect'?navigate('/contas-conectadas'):document.getElementById('contas-cadastradas')?.scrollIntoView({behavior:'smooth'})} style={pos(270+i*370,534,i===2?370:350,104)} className="flex items-center gap-[16px] rounded-[12px] border border-[#e3e5f2] bg-white text-left px-[17px] hover:border-[#9e7bea]"><span className="w-[60px] h-[60px] rounded-[12px] bg-[#f0eaff] flex items-center justify-center"><ActionIcon kind={kind}/></span><span><b className="block text-[16px]">{title}</b><span className="block mt-2 text-[#595291] text-[12px]">{sub}</span></span></button>)}
 <section style={pos(270,659,535,322)} className="rounded-[12px] border border-[#e3e5f2] bg-white">
 <h2 className="absolute left-[22px] top-[19px] text-[19px] font-semibold">Distribuição do saldo</h2>
 <div className="absolute left-[35px] top-[90px] w-[185px] h-[185px] rounded-full flex items-center justify-center" style={{background:portions.sum>0?`conic-gradient(${portions.gradient})`:'#eceaf4'}}>
 <div className="w-[139px] h-[139px] rounded-full bg-white flex flex-col items-center justify-center"><b className="text-[17px] font-semibold whitespace-nowrap">{money(total)}</b><span className="mt-1 text-[#595291] text-[12px]">Saldo total</span></div></div>
 <div className="absolute left-[264px] right-[17px] top-[94px] max-h-[190px] overflow-y-auto">
 {portions.valid.length===0?<p className="text-[#595291] text-[12px]">Cadastre uma conta para visualizar a distribuição.</p>:portions.valid.map(a=><div key={a.id} className="flex items-center gap-2 mb-[15px] text-[12px]"><span className="w-[12px] h-[12px] rounded-full shrink-0" style={{background:a.color}}/><div className="min-w-0 flex-1"><span className="block truncate font-medium">{a.nome}</span><span className="block text-[#595291] text-[11px] mt-1">{money(a.amount)}</span></div><span className="text-[#595291] text-[11px]">{portions.sum>0?(a.amount/portions.sum*100).toFixed(1).replace('.',','):'0'}%</span></div>)}
 </div></section>
 <section style={pos(825,659,555,322)} className="rounded-[12px] border border-[#e3e5f2] bg-white">
 <h2 className="absolute left-[20px] top-[19px] text-[19px] font-semibold">Movimentações recentes</h2><button onClick={()=>navigate('/movimentacoes')} className="absolute right-[20px] top-[25px] text-[#5712d6] text-[12px] font-semibold">Ver todas →</button>
 <div className="absolute left-[20px] right-[20px] top-[74px]">
 {latest.length===0?<p className="text-[#595291] text-[13px]">Nenhuma movimentação registrada.</p>:latest.map(m=><div key={m.id} className="h-[75px] flex items-center gap-[14px] border-b border-[#e3e5f2] last:border-0"><div className="w-[43px] h-[43px] shrink-0 rounded-[10px] bg-[#f0eaff] text-[#5712d6] flex items-center justify-center"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3" y="4" width="18" height="16" rx="3"/><path d="M7 10h10M7 14h7"/></svg></div><div className="flex-1 min-w-0"><p className="text-[14px] font-medium truncate">{m.descricao}</p><p className="mt-1 text-[11px] text-[#595291] truncate">{m.conta||'Sem conta'} • {m.dataMovimentacao}</p></div><span className={'text-[13px] font-semibold '+(m.tipo==='RECEITA'?'text-green-600':'text-red-500')}>{m.tipo==='RECEITA'?'+':'−'} {money(safeAmount(m.valor))}</span></div>)}
 </div></section>
 {modal&&<div className="fixed inset-0 z-[300] bg-[#130938]/50 flex items-center justify-center" onMouseDown={()=>setModal(false)}><div role="dialog" aria-modal="true" aria-label="Adicionar conta" onMouseDown={e=>e.stopPropagation()} className="relative w-[500px] bg-white rounded-[15px] p-8 shadow-2xl"><button onClick={()=>setModal(false)} aria-label="Fechar" className="absolute right-5 top-4 text-[26px]">×</button><h2 className="text-[22px] font-semibold">Adicionar conta</h2><p className="text-[#595291] text-[13px] mt-2">Cadastre sua conta manualmente na Valora.</p><form onSubmit={save} className="mt-6 flex flex-col gap-4"><label className="text-[13px]">Nome da conta<input required maxLength={100} value={name} onChange={e=>setName(e.target.value)} placeholder="Ex.: Banco do Brasil" className="block w-full h-[44px] mt-2 px-3 rounded-lg border border-[#d6d1e8]"/></label><label className="text-[13px]">Saldo inicial<input required type="text" inputMode="numeric" value={balance} onChange={e=>setBalance(formatMoneyInput(e.target.value))} className="block w-full h-[44px] mt-2 px-3 rounded-lg border border-[#d6d1e8]"/></label>{formError&&<p role="alert" className="text-red-600 text-[12px]">{formError}</p>}<button disabled={saving} className="h-[47px] bg-[#5712d6] text-white rounded-lg font-semibold disabled:opacity-50">{saving?'Salvando...':'Cadastrar conta'}</button></form></div></div>}
 {detail&&<div className="fixed inset-0 z-[300] bg-[#130938]/50 flex items-center justify-center" onMouseDown={()=>setDetail(null)}><div role="dialog" aria-modal="true" aria-label="Detalhes da conta" onMouseDown={e=>e.stopPropagation()} className="relative w-[520px] bg-white rounded-[15px] p-8 shadow-2xl"><button onClick={()=>setDetail(null)} aria-label="Fechar" className="absolute right-5 top-4 text-[26px]">×</button><div className="flex items-center gap-3"><AccountIcon name={detail.nome}/><h2 className="text-[22px] font-semibold">{detail.nome}</h2></div><p className="mt-7 text-[#595291] text-[13px]">Saldo disponível</p><p className="text-[28px] font-semibold mt-1">{money(safeAmount(detail.saldo))}</p><button onClick={()=>{setDetail(null);navigate('/movimentacoes')}} className="mt-7 w-full h-[44px] rounded-lg border border-[#d6d1e8] text-[#5712d6] font-semibold">Ver movimentações</button></div></div>}
 </div>;
}
