import {api} from '../services/valoraApi';
import SidebarMenu from '../components/SidebarMenu';
import {useEffect,useState} from 'react';
import {useNavigate} from 'react-router-dom';
import Topbar5 from '../components/Topbar5';
const pos=(x:number,y:number,w:number,h:number)=>({position:'absolute' as const,left:x,top:y,width:w,height:h});
const banks=[
{name:'Itaú',src:'/logos/itau-corrigido.svg'},
{name:'Nubank',src:'/logos/nubank.png'},
{name:'Santander',src:'/logos/santander.png'},
{name:'Banco do Brasil',src:'/logos/bb.png'},
{name:'Bradesco',src:'/logos/bradesco.png'},
{name:'Caixa',src:'/logos/caixa.png'},
{name:'C6 Bank',src:'/Banco-C6-Valora.png'},
{name:'Inter',src:'/logos/inter.png'},
];
function Icon({kind,size=23}:{kind:'transfer'|'eye'|'lock'|'bank'|'shield';size?:number}){const paths={transfer:<><path d="M4 7h16m-4-4 4 4-4 4M20 17H4m4-4-4 4 4 4"/></>,eye:<><path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12Z"/><circle cx="12" cy="12" r="3"/></>,lock:<><rect x="5" y="10" width="14" height="11" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/></>,bank:<><path d="m2 9 10-6 10 6M4 10h16M5 19h14M3 22h18M7 10v9m5-9v9m5-9v9"/></>,shield:<><path d="M12 2 4 6v6c0 5 3.3 8.5 8 10 4.7-1.5 8-5 8-10V6l-8-4Z"/><path d="m9 12 2 2 4-4"/></>};return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">{paths[kind]}</svg>}
export default function ContasConectadas(){
 const navigate=useNavigate();
 const [zoom,setZoom]=useState(1),[connecting,setConnecting]=useState(false),[connectionError,setConnectionError]=useState('');
 useEffect(()=>{const f=()=>setZoom(Math.max(1,window.innerWidth/1440));f();window.addEventListener('resize',f);return()=>window.removeEventListener('resize',f)},[]);
 const nav=[['Início','/dashboard','/Wrapper.svg'],['Movimentações','/movimentacoes','/Movimenta-es-icon.svg'],['Caixinhas','/caixinhas','/Archive-Caixinhas.svg'],['Categorias','/categorias','/Divider.svg'],['Contas conectadas','/contas-conectadas','/Contas-conectadas-icon.svg']];
 const connect=async (_name='')=>{
  if(connecting)return;
  setConnecting(true);
  setConnectionError('');
  try {
   const {widgetUrl}=await api.belvo.widgetSession();
   const target=new URL(widgetUrl);
   if(target.protocol!=='https:'||target.hostname!=='widget.belvo.io')throw new Error('Endereço de conexão bancária inválido.');
   window.location.assign(target.toString());
  } catch(error) {
   setConnectionError(error instanceof Error?error.message:'Não foi possível iniciar a conexão.');
   setConnecting(false);
  }
 };
 return <div style={{zoom}} className="relative w-[1440px] min-h-[1200px] bg-[#f6f9fe] font-[Inter] text-[#0e0b2e]">
 <aside style={pos(0,0,232,1024)} className="bg-[#130930] text-white"><SidebarMenu active="Minhas contas"/>
 <div style={pos(17,726,198,242)} className="overflow-hidden rounded-[12px]"><img src="/Promo-Tela7-Valora.png" className="absolute inset-0 w-full h-full object-cover object-[67%_center]" alt="Planejamento de objetivos"/><div className="absolute inset-0 bg-gradient-to-b from-[#130930]/75 via-transparent to-transparent"/><p className="absolute left-[13px] top-[11px] text-[8px] font-semibold tracking-[2px] text-[#b285ff]">ORGANIZAÇÃO —</p><p className="absolute left-[13px] top-[29px] text-[10px] font-semibold leading-[15px]">O primeiro passo<br/>para conquistar<br/>seus <span className="text-[#b285ff]">objetivos.</span></p></div>
 </aside>
 <div style={pos(235,0,1205,74)}><Topbar5/></div>
 <button style={pos(270,92,230,22)} onClick={()=>navigate('/minhas-contas')} className="text-left text-[14px] text-[#1f146b]">← &nbsp; Voltar para Minhas contas</button>
 <h1 style={pos(270,126,700,44)} className="font-semibold text-[31px]">Conectar conta bancária</h1>
 <p style={pos(270,168,960,25)} className="text-[#5c5785] text-[14px]">Importe suas movimentações automaticamente e tenha um controle financeiro ainda mais completo.</p>
 {connectionError&&<p role="alert" style={pos(270,191,900,18)} className="text-red-700 text-[12px]">{connectionError}</p>}
 <section style={pos(270,212,730,500)} className="bg-white rounded-[12px] border border-[#e0e3f2] overflow-hidden">
 <h2 className="absolute left-[27px] top-[27px] text-[26px] font-semibold leading-[32px]">Conecte sua conta com<br/>Open Finance</h2>
 <p className="absolute left-[27px] top-[103px] text-[14px] leading-[21px] text-[#5c5785]">A Valora utiliza a tecnologia da Belvo para<br/>importar suas movimentações de forma segura,<br/>rápida e automática.</p>
 <img src="/Bancos-OpenFinance-Valora.png" alt="Instituições bancárias conectadas" className="absolute left-[490px] top-[7px] w-[240px] h-[208px] object-contain"/>
 {([['transfer','Movimentações automáticas','Suas transações são importadas sem precisar cadastrar manualmente.'],['eye','Visão completa','Acompanhe seus gastos, receitas e saldos em um só lugar.'],['lock','100% seguro','Seus dados são protegidos e você mantém o controle.']] as const).map(([icon,title,description],i)=><div key={title} className="absolute left-[27px] right-[18px] flex items-center gap-[16px]" style={{top:198+i*62,height:48}}><div className="w-[48px] h-[48px] shrink-0 rounded-full bg-[#f0eaff] text-[#541feb] flex items-center justify-center"><Icon kind={icon}/></div><div><b className="block text-[14px] font-semibold">{title}</b><p className="mt-[5px] text-[12px] text-[#5c5785]">{description}</p></div></div>)}
 <button onClick={()=>connect()} className="absolute left-[27px] top-[389px] w-[674px] h-[54px] rounded-[10px] bg-gradient-to-r from-[#4d0fd1] to-[#6e1af5] text-white text-[14px] font-semibold flex items-center justify-center gap-[12px]"><Icon kind="lock" size={19}/> {connecting?'Iniciando conexão...':'Conectar conta'} &nbsp; →</button>
 <p className="absolute left-[80px] top-[457px] text-[11px] text-[#5c5785]">Você será direcionado para o ambiente seguro da Belvo, onde poderá escolher sua instituição bancária.</p>
 </section>
 <section style={pos(1018,212,392,340)} className="bg-white border border-[#e0e3f2] rounded-[12px]">
 <h2 className="absolute left-[21px] top-[19px] text-[20px] font-semibold">Como funciona?</h2>
 {([['Escolha sua instituição','Selecione o banco que deseja conectar','através do Open Finance.'],['Autorize o acesso','Você será direcionado para o ambiente','do seu banco, de forma segura.'],['Conexão concluída','Suas movimentações serão importadas','automaticamente para a Valora.']] as const).map(([title,line1,line2],i)=><div key={title} className="absolute left-[21px] right-[10px]" style={{top:67+i*96,height:77}}><span className="absolute left-0 top-[4px] w-[42px] h-[42px] rounded-full bg-[#eee6ff] flex items-center justify-center text-[#4d0fd1] font-semibold text-[14px]">{i+1}</span><b className="absolute left-[83px] top-0 text-[13px] font-semibold">{title}</b><p className="absolute left-[83px] top-[24px] text-[12px] leading-[18px] text-[#5c5785]">{line1}<br/>{line2}</p>{i<2&&<div className="absolute left-[21px] top-[45px] h-[45px] w-px bg-[#ccc2f0]"/>}</div>)}
 </section>
 <section style={pos(1018,568,392,146)} className="bg-[#f0dbff] border border-[#e0e3f2] rounded-[12px]">
 <span className="absolute left-[19px] top-[19px] text-[#541feb]"><Icon kind="shield" size={36}/></span><b className="absolute left-[67px] top-[19px] text-[15px]">Seus dados em segurança</b><span className="absolute right-[13px] top-[13px] font-semibold text-[19px]">belvo.</span>
 <p className="absolute left-[67px] top-[46px] w-[290px] text-[#5c5785] text-[11px] leading-[16px]">A Valora utiliza a tecnologia da Belvo, autorizada pelo Banco Central, e segue todos os padrões de segurança do Open Finance.</p><button onClick={()=>connect()} className="absolute left-[67px] top-[103px] text-[11px] font-semibold text-[#541feb]">Saiba mais sobre a segurança →</button>
 </section>
 <section style={pos(270,740,1140,420)} className="bg-white border border-[#e0e3f2] rounded-[12px]">
 <h2 className="absolute left-[19px] top-[17px] text-[18px] font-semibold">Instituições disponíveis</h2><p className="absolute left-[19px] top-[45px] text-[12px] text-[#5c5785]">Conecte sua conta nos principais bancos do Brasil.</p>
 <div className="absolute left-[19px] top-[81px] grid grid-cols-4 gap-[12px]">{banks.map((bank)=><button key={bank.name} onClick={()=>connect(bank.name)} className="w-[126px] h-[142px] rounded-[10px] border border-[#d6d1e8] bg-white hover:border-[#6e1af5] hover:shadow-sm flex flex-col items-center pt-[14px]"><div className="w-[72px] h-[72px] flex items-center justify-center"><img src={bank.src} alt="" className="max-w-[72px] max-h-[72px] object-contain rounded-[16px]"/></div><span className="text-[11px] mt-[3px] text-center">{bank.name}</span></button>)}</div>
 </section>

 </div>
}
