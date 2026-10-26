import {useEffect,useState} from 'react';
import {useNavigate} from 'react-router-dom';
import Topbar5 from '../components/Topbar5';
const pos=(x:number,y:number,w:number,h:number)=>({position:'absolute' as const,left:x,top:y,width:w,height:h});
const banks=[
{name:'Itaú',src:'/Clean-Banco-Itau-Valora.png'},
{name:'Nubank',src:'/Official-bank-logo2@2x.png'},
{name:'Santander',src:'/Clean-Banco-Santander-Valora.png'},
{name:'Banco do Brasil',src:'/Clean-Banco-BB-Valora.png'},
{name:'Bradesco',src:'/Banco-Bradesco-Valora.png'},
{name:'Caixa',src:'/Banco-Caixa-Valora.png'},
{name:'C6 Bank',src:'/Banco-C6-Valora.png'},
{name:'Outras instituições',src:''},
];
function Icon({kind,size=23}:{kind:'transfer'|'eye'|'lock'|'bank'|'shield';size?:number}){const paths={transfer:<><path d="M4 7h16m-4-4 4 4-4 4M20 17H4m4-4-4 4 4 4"/></>,eye:<><path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12Z"/><circle cx="12" cy="12" r="3"/></>,lock:<><rect x="5" y="10" width="14" height="11" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/></>,bank:<><path d="m2 9 10-6 10 6M4 10h16M5 19h14M3 22h18M7 10v9m5-9v9m5-9v9"/></>,shield:<><path d="M12 2 4 6v6c0 5 3.3 8.5 8 10 4.7-1.5 8-5 8-10V6l-8-4Z"/><path d="m9 12 2 2 4-4"/></>};return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">{paths[kind]}</svg>}
export default function ContasConectadas(){
 const navigate=useNavigate();const [zoom,setZoom]=useState(1),[modalStep,setModalStep]=useState<0|1|2|3>(0),[query,setQuery]=useState(''),[chosen,setChosen]=useState(''),[showAll,setShowAll]=useState(false);
 useEffect(()=>{const f=()=>setZoom(Math.max(1,window.innerWidth/1440));f();window.addEventListener('resize',f);return()=>window.removeEventListener('resize',f)},[]);
 const nav=[['Início','/dashboard','/Wrapper.svg'],['Movimentações','/movimentacoes','/Movimenta-es-icon.svg'],['Caixinhas','/caixinhas','/Archive-Caixinhas.svg'],['Categorias','/categorias','/Divider.svg'],['Contas conectadas','/contas-conectadas','/Contas-conectadas-icon.svg']];
 const connect=(name='')=>{setQuery('');setChosen(name);setModalStep(name==='Itaú'?2:1)};
 const close=()=>setModalStep(0);
 return <div style={{zoom}} className="relative w-[1440px] min-h-[1024px] bg-[#f6f9fe] font-[Inter] text-[#0e0b2e]">
 <aside style={pos(0,0,232,1024)} className="bg-[#130930] text-white">
 <div className="absolute left-[34px] top-[27px] flex items-center gap-[3px]"><img src="/logo-branco-3@2x.png" className="w-[40px] h-[33px] object-contain"/><b className="text-[25px]">Valora</b></div>
 {nav.map(([label,href,icon],i)=><button key={label} onClick={()=>navigate(href)} style={pos(14,113+i*58,204,48)} className={'rounded-[9px] border border-[#452985] flex items-center gap-[19px] px-[15px] text-[14px] text-[#f2f0ff] '+(label==='Contas conectadas'?'bg-[#631ee4]':'bg-transparent')}><img src={icon} className="w-[24px] h-[24px] object-contain"/>{label}</button>)}
 <div style={pos(17,726,198,242)} className="overflow-hidden rounded-[12px]"><img src="/Promo-Tela7-Valora.png" className="absolute inset-0 w-full h-full object-cover object-[67%_center]" alt="Planejamento de objetivos"/><div className="absolute inset-0 bg-gradient-to-b from-[#130930]/75 via-transparent to-transparent"/><p className="absolute left-[13px] top-[11px] text-[8px] font-semibold tracking-[2px] text-[#b285ff]">ORGANIZAÇÃO —</p><p className="absolute left-[13px] top-[29px] text-[10px] font-semibold leading-[15px]">O primeiro passo<br/>para conquistar<br/>seus <span className="text-[#b285ff]">objetivos.</span></p></div>
 </aside>
 <div style={pos(235,0,1205,74)}><Topbar5/></div>
 <button style={pos(270,92,230,22)} onClick={()=>navigate('/dashboard')} className="text-left text-[14px] text-[#1f146b]">← &nbsp; Voltar para o início</button>
 <h1 style={pos(270,126,700,44)} className="font-semibold text-[31px]">Conectar conta bancária</h1>
 <p style={pos(270,168,960,25)} className="text-[#5c5785] text-[14px]">Importe suas movimentações automaticamente e tenha um controle financeiro ainda mais completo.</p>
 <section style={pos(270,212,730,500)} className="bg-white rounded-[12px] border border-[#e0e3f2] overflow-hidden">
 <h2 className="absolute left-[27px] top-[27px] text-[26px] font-semibold leading-[32px]">Conecte sua conta com<br/>Open Finance</h2>
 <p className="absolute left-[27px] top-[103px] text-[14px] leading-[21px] text-[#5c5785]">A Valora utiliza a tecnologia da Belvo para<br/>importar suas movimentações de forma segura,<br/>rápida e automática.</p>
 <img src="/Bancos-OpenFinance-Valora.png" alt="Instituições bancárias conectadas" className="absolute left-[490px] top-[7px] w-[240px] h-[208px] object-contain"/>
 {([['transfer','Movimentações automáticas','Suas transações são importadas sem precisar cadastrar manualmente.'],['eye','Visão completa','Acompanhe seus gastos, receitas e saldos em um só lugar.'],['lock','100% seguro','Seus dados são protegidos e você mantém o controle.']] as const).map(([icon,title,description],i)=><div key={title} className="absolute left-[27px] right-[18px] flex items-center gap-[16px]" style={{top:198+i*62,height:48}}><div className="w-[48px] h-[48px] shrink-0 rounded-full bg-[#f0eaff] text-[#541feb] flex items-center justify-center"><Icon kind={icon}/></div><div><b className="block text-[14px] font-semibold">{title}</b><p className="mt-[5px] text-[12px] text-[#5c5785]">{description}</p></div></div>)}
 <button onClick={()=>connect()} className="absolute left-[27px] top-[389px] w-[674px] h-[54px] rounded-[10px] bg-gradient-to-r from-[#4d0fd1] to-[#6e1af5] text-white text-[14px] font-semibold flex items-center justify-center gap-[12px]"><Icon kind="lock" size={19}/> Conectar conta &nbsp; →</button>
 <p className="absolute left-[80px] top-[457px] text-[11px] text-[#5c5785]">Você será direcionado para o ambiente seguro da Belvo, onde poderá escolher sua instituição bancária.</p>
 </section>
 <section style={pos(1018,212,392,340)} className="bg-white border border-[#e0e3f2] rounded-[12px]">
 <h2 className="absolute left-[21px] top-[19px] text-[20px] font-semibold">Como funciona?</h2>
 {([['Escolha sua instituição','Selecione o banco que deseja conectar','através do Open Finance.'],['Autorize o acesso','Você será direcionado para o ambiente','do seu banco, de forma segura.'],['Conexão concluída','Suas movimentações serão importadas','automaticamente para a Valora.']] as const).map(([title,line1,line2],i)=><div key={title} className="absolute left-[21px] right-[10px]" style={{top:67+i*96,height:77}}><span className="absolute left-0 top-[4px] w-[42px] h-[42px] rounded-full bg-[#eee6ff] flex items-center justify-center text-[#4d0fd1] font-semibold text-[14px]">{i+1}</span><b className="absolute left-[83px] top-0 text-[13px] font-semibold">{title}</b><p className="absolute left-[83px] top-[24px] text-[12px] leading-[18px] text-[#5c5785]">{line1}<br/>{line2}</p>{i<2&&<div className="absolute left-[21px] top-[45px] h-[45px] w-px bg-[#ccc2f0]"/>}</div>)}
 </section>
 <section style={pos(1018,566,392,146)} className="bg-[#f0dbff] border border-[#e0e3f2] rounded-[12px]">
 <span className="absolute left-[19px] top-[19px] text-[#541feb]"><Icon kind="shield" size={36}/></span><b className="absolute left-[67px] top-[19px] text-[15px]">Seus dados em segurança</b><span className="absolute right-[13px] top-[13px] font-semibold text-[19px]">belvo.</span>
 <p className="absolute left-[67px] top-[46px] w-[290px] text-[#5c5785] text-[11px] leading-[16px]">A Valora utiliza a tecnologia da Belvo, autorizada pelo Banco Central, e segue todos os padrões de segurança do Open Finance.</p><button onClick={()=>connect()} className="absolute left-[67px] top-[103px] text-[11px] font-semibold text-[#541feb]">Saiba mais sobre a segurança →</button>
 </section>
 <section style={pos(270,730,1140,264)} className="bg-white border border-[#e0e3f2] rounded-[12px]">
 <h2 className="absolute left-[19px] top-[17px] text-[18px] font-semibold">Instituições disponíveis</h2><p className="absolute left-[19px] top-[45px] text-[12px] text-[#5c5785]">Conecte sua conta nos principais bancos do Brasil.</p><button onClick={()=>setShowAll(!showAll)} className="absolute right-[18px] top-[27px] text-[12px] text-[#4d0fd1] font-semibold">Ver todas &nbsp; →</button>
 <div className="absolute left-[19px] top-[81px] flex gap-[12px]">{banks.map((bank)=><button key={bank.name} onClick={()=>connect(bank.name)} className="w-[126px] h-[142px] rounded-[10px] border border-[#d6d1e8] bg-white hover:border-[#6e1af5] hover:shadow-sm flex flex-col items-center pt-[14px]"><div className="w-[48px] h-[48px] flex items-center justify-center">{bank.src?<img src={bank.src} alt="" className="max-w-[48px] max-h-[48px] object-contain"/>:<span className="text-[#541feb]"><Icon kind="bank" size={40}/></span>}</div><span className="text-[11px] mt-[13px] text-center">{bank.name}</span></button>)}</div>
 </section>
 {showAll&&<div style={pos(1050,956,360,65)} className="z-20 bg-white shadow-md border rounded-lg p-3 text-[12px] flex gap-3 items-center"><img src="/Banco-Inter-Valora.png" alt="" className="w-10 h-10 object-contain"/><button onClick={()=>connect('Inter')}>Banco Inter — selecionar</button><button onClick={()=>setShowAll(false)} className="ml-auto">✕</button></div>}
 {modalStep>0&&<div className="absolute inset-0 z-[300] bg-[rgba(22,15,52,0.58)]" onMouseDown={close}>
 <div role="dialog" aria-modal="true" aria-label="Conectar conta" style={pos(330,160,780,704)} className="bg-[#f6f9fe] rounded-[20px] shadow-[0_10px_30px_rgba(0,0,0,.16)] overflow-hidden" onMouseDown={e=>e.stopPropagation()}>
 <button aria-label="Fechar" onClick={close} className="absolute right-[40px] top-[24px] text-[#685e79] text-[28px] z-10">×</button>
 {modalStep===1&&<>
 <h2 className="absolute left-[43px] top-[37px] font-semibold text-[28px] text-[#120d33]">Conectar sua conta</h2>
 <p className="absolute left-[43px] top-[84px] text-[14px] font-semibold text-[#5c5785]">Selecione a instituição financeira que deseja conectar através do Open Finance.</p>
 <label className="absolute left-[43px] top-[126px] w-[694px] h-[52px] rounded-[10px] border border-[#e0dbf0] bg-[#f9f8fc] flex items-center gap-3 px-[16px] text-[#756e99]"><span className="text-[23px]">⌕</span><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Buscar instituição..." className="flex-1 bg-transparent outline-none text-[14px]"/></label>
 <div className="absolute left-[43px] top-[204px] w-[694px] grid grid-cols-3 gap-x-[21px] gap-y-[19px]">
 {[...banks.slice(0,7),{name:'Inter',src:'/Banco-Inter-Valora.png'},banks[7]].filter(b=>b.name.toLocaleLowerCase('pt-BR').includes(query.toLocaleLowerCase('pt-BR'))).map(b=><button key={b.name} onClick={()=>b.name==='Itaú'&&setModalStep(2)} aria-label={'Selecionar '+b.name} className={'h-[121px] rounded-[12px] border-[1.7px] border-[#beb8cf] bg-white flex flex-col items-center pt-[10px] '+(b.name==='Itaú'?'hover:border-[#6c34d5] hover:bg-[#f5efff]':'opacity-75')} title={b.name==='Itaú'?'Selecionar Itaú':'Disponível em uma integração futura'}><div className="w-[58px] h-[58px] flex items-center justify-center">{b.src?<img src={b.src} alt="" className="w-[58px] h-[58px] object-contain"/>:<Icon kind="bank" size={38}/>}</div><b className="text-[13px] text-[#1f1747] mt-[8px]">{b.name}</b></button>)}
 </div><p className="absolute left-0 right-0 bottom-[30px] text-center text-[11px] text-[#807a99]">Powered by <b className="text-[#14121f]">belvo.</b></p>
 </>}
 {modalStep===2&&<>
 <img src="/Clean-Banco-Itau-Valora.png" alt="Itaú" className="absolute left-[361px] top-[54px] w-[58px] h-[52px] object-contain rounded-[5px]"/>
 <p className="absolute top-[116px] left-0 w-full text-center text-[#241b37] font-semibold text-[17px]">Itaú</p>
 <h2 className="absolute top-[157px] left-0 w-full text-center text-[#241b37] font-bold text-[26px]">Autorizar no banco</h2>
 <p className="absolute top-[207px] left-[100px] w-[580px] text-center text-[#685e79] text-[15px] leading-[23px]">Você será redirecionado para o ambiente seguro do Itaú para autorizar o compartilhamento dos dados da sua conta e movimentações com a Valora através do Open Finance.</p>
 <div className="absolute left-[92px] top-[310px] w-[596px] h-[112px] rounded-[12px] bg-[#f2edfc] border border-[#ded3f4] flex gap-[16px] items-start px-[21px] pt-[20px]"><span className="text-[#6c34d5]"><Icon kind="shield" size={38}/></span><div><b className="text-[#241b37] text-[14px]">Seus dados continuam protegidos</b><p className="text-[#685e79] text-[13px] mt-[12px]">A Valora não recebe sua senha nem seus dados de acesso ao banco.</p></div></div>
 <button onClick={()=>setModalStep(3)} className="absolute left-[92px] top-[454px] w-[596px] h-[54px] rounded-[10px] bg-[#6c34d5] text-white font-semibold text-[15px]">Continuar para o Itaú →</button>
 <button onClick={close} className="absolute left-[92px] top-[522px] w-[596px] h-[50px] rounded-[10px] border border-[#ddd9e4] bg-[#f9f8fb] text-[#241b37] text-[14px]">Cancelar</button>
 <p className="absolute left-0 right-0 bottom-[54px] text-center text-[#8b8397] text-[12px]">Powered by belvo.</p>
 </>}
 {modalStep===3&&<>
 <div className="absolute left-[348px] top-[86px] w-[84px] h-[84px] bg-[#e9dcff] rounded-full flex items-center justify-center"><svg width="48" height="48" viewBox="0 0 48 48" fill="none"><circle cx="24" cy="24" r="23" fill="#6c34d5"/><path d="m12 24 8 8 16-17" stroke="white" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/></svg></div>
 <h2 className="absolute top-[204px] left-0 w-full text-center text-[#241b37] font-bold text-[27px]">Conta conectada com sucesso!</h2>
 <p className="absolute top-[262px] left-[115px] w-[550px] text-center text-[#685e79] text-[15px] leading-[23px]">As movimentações da sua conta estão sendo importadas para a Valora e serão atualizadas automaticamente.</p>
 <p className="absolute top-[322px] left-0 w-full text-center text-[12px] text-[#756e99]">Demonstração visual — nenhuma conta bancária real foi conectada.</p>
 <button onClick={close} className="absolute left-[92px] top-[374px] w-[596px] h-[54px] rounded-[10px] bg-[#6c34d5] text-white font-semibold text-[15px]">Ver conta conectada →</button>
 <button onClick={()=>{close();navigate('/dashboard')}} className="absolute left-[92px] top-[442px] w-[596px] h-[50px] rounded-[10px] border border-[#ddd9e4] bg-[#f9f8fb] text-[#241b37] text-[14px]">Voltar ao início</button>
 </>}
 </div></div>}

 </div>
}
