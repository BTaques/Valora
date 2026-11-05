import PageLoading from "../components/PageLoading";
import SidebarMenu from '../components/SidebarMenu';
import {useEffect,useState} from 'react';
import {useNavigate} from 'react-router-dom';
import Topbar5 from '../components/Topbar5';
import { api, getLoginEmail, type CategoryDto, type MovementDto } from '../services/valoraApi';
const abs=(x:number,y:number,w:number,h:number)=>({position:'absolute' as const,left:x,top:y,width:w,height:h});
const money=(n:number)=>n.toLocaleString('pt-BR',{style:'currency',currency:'BRL'});
type Cat={idCategoria?:number;name:string;color:string;bg:string;symbol:string;spent:number;percent:number};
const categoryColorKey=()=>`valora.categoryColors.${getLoginEmail()||'anonymous'}`;
const savedColors=():Record<string,string>=>{try{return JSON.parse(localStorage.getItem(categoryColorKey())||'{}')}catch{return {}}};
const persistColor=(id:number,color:string)=>{const colors=savedColors();colors[String(id)]=color;localStorage.setItem(categoryColorKey(),JSON.stringify(colors))};
const fromApiCategory=(item:CategoryDto):Cat=>{const color=savedColors()[String(item.idCategoria)]||'#8159e0';return {idCategoria:item.idCategoria,name:item.nmCategoria,color,bg:color+'20',symbol:'dots',spent:0,percent:0}};
function CategoryGlyph({name,size=18}:{name:string;size?:number}){
 const common={width:size,height:size,viewBox:'0 0 24 24',fill:'none',stroke:'currentColor',strokeWidth:1.8,strokeLinecap:'round' as const,strokeLinejoin:'round' as const};
 const shapes:Record<string,React.ReactNode>={
 food:<><path d="M4 3v7a3 3 0 0 0 6 0V3M7 3v18M17 21V3c-4 2-5 7-5 11h5"/></>,
 car:<><path d="m5 10 2-5h10l2 5M4 10h16l1 4v4H3v-4l1-4Z"/><circle cx="7" cy="14" r="1"/><circle cx="17" cy="14" r="1"/><path d="M5 18v2M19 18v2"/></>,
 game:<><path d="M7 8h10c3 0 4 3 5 9 .4 2-1.5 3-3 2l-3-3H8l-3 3c-2 1-4-.3-3-3 1-5 2-8 5-8Z"/><path d="M7 12h5M9.5 9.5v5"/><circle cx="16" cy="11" r="1" fill="currentColor" stroke="none"/><circle cx="19" cy="13" r="1" fill="currentColor" stroke="none"/></>,
 heart:<path d="M20.5 5.5a5 5 0 0 0-7.1 0L12 7l-1.4-1.5a5 5 0 0 0-7.1 7.1L12 21l8.5-8.4a5 5 0 0 0 0-7.1Z"/>,
 grad:<><path d="m2 9 10-5 10 5-10 5-10-5ZM6 12v5c3 3 9 3 12 0v-5M22 9v7"/></>,
 home:<><path d="m3 11 9-8 9 8v10H3V11Z"/><path d="M9 21v-7h6v7"/></>,
 money:<><rect x="3" y="5" width="18" height="14" rx="2"/><circle cx="12" cy="12" r="3"/><path d="M6 9h1M17 15h1"/></>,
 dots:<><circle cx="5" cy="12" r="1.3" fill="currentColor" stroke="none"/><circle cx="12" cy="12" r="1.3" fill="currentColor" stroke="none"/><circle cx="19" cy="12" r="1.3" fill="currentColor" stroke="none"/></>,
 trash:<><path d="M3 6h18M8 6V4h8v2M6 6l1 15h10l1-15M10 10v7M14 10v7"/></>
 };
 return <svg {...common} aria-hidden="true">{shapes[name]||shapes.dots}</svg>;
}
function Icon({item,size=28}:{item:Cat;size?:number}){return <span className="inline-flex items-center justify-center rounded-full" style={{width:size,height:size,background:item.bg,color:item.color}}><CategoryGlyph name={item.symbol} size={17}/></span>}
export default function Categorias(){
const navigate=useNavigate();const [zoom,setZoom]=useState(1);
useEffect(()=>{const f=()=>setZoom(Math.max(1,innerWidth/1440));f();window.addEventListener('resize',f);return()=>window.removeEventListener('resize',f)},[]);
useEffect(()=>{let active=true;Promise.all([api.categorias.list(),api.movimentacoes.listAll()]).then(([items,movements])=>{if(!active)return;setCats(items.map(fromApiCategory));setMovements(movements);setApiError('');setLoading(false)}).catch(error=>{if(active){setApiError(error instanceof Error?error.message:'Erro ao carregar categorias e gastos');setLoading(false)}});return()=>{active=false}},[]);
const [showMoreColors,setShowMoreColors]=useState(false);
const [loading,setLoading]=useState(true);const [movements,setMovements]=useState<MovementDto[]>([]);const [cats,setCats]=useState<Cat[]>([]),[query,setQuery]=useState(''),[period,setPeriod]=useState('Este mês'),[editing,setEditing]=useState<number|null>(null),[modal,setModal]=useState(false),[name,setName]=useState(''),[color,setColor]=useState('#8159e0'),[apiError,setApiError]=useState('');
const now=new Date();
const filteredMovements=movements.filter(m=>{if(m.tipo!=="DESPESA")return false;const date=new Date(m.dataMovimentacao+"T12:00:00");if(Number.isNaN(date.getTime()))return false;if(period==="Este mês")return date.getMonth()===now.getMonth()&&date.getFullYear()===now.getFullYear();if(period==="Mês passado"){const prev=new Date(now.getFullYear(),now.getMonth()-1,1);return date.getMonth()===prev.getMonth()&&date.getFullYear()===prev.getFullYear()}return date.getFullYear()===now.getFullYear()});
const totalSpent=filteredMovements.reduce((s,m)=>s+Number(m.valor),0);
const calculatedCats=cats.map(cat=>{const spent=filteredMovements.filter(m=>m.categoria===cat.name).reduce((s,m)=>s+Number(m.valor),0);return {...cat,spent,percent:totalSpent>0?Math.round(spent/totalSpent*100):0}});
const chartParts=calculatedCats.filter(cat=>cat.spent>0);
let chartOffset=0;
const chartGradient=chartParts.map((cat,i)=>{const start=chartOffset;chartOffset+=cat.spent/totalSpent*100;return `${cat.color} ${start}% ${chartOffset}%`}).join(', ');
const nav=[['Início','/dashboard','/Wrapper.svg'],['Movimentações','/movimentacoes','/Movimenta-es-icon.svg'],['Caixinhas','/caixinhas','/Archive-Caixinhas.svg'],['Categorias','/categorias','/Divider.svg'],['Contas conectadas','/contas-conectadas','/Contas-conectadas-icon.svg']];
const start=()=>{setShowMoreColors(false);setEditing(null);setName('');setColor('#8159e0');setModal(true)};
const edit=(i:number)=>{setShowMoreColors(false);setEditing(i);setName(cats[i].name);setColor(cats[i].color);setModal(true)};
const remove=async(i:number)=>{const item=cats[i];if(!item?.idCategoria)return;if(!window.confirm('Excluir a categoria '+item.name+'?'))return;try{await api.categorias.remove(item.idCategoria);setCats(old=>old.filter((_,j)=>j!==i));setApiError('')}catch(error){setApiError(error instanceof Error?error.message:'Não foi possível excluir a categoria')}};
const save=async()=>{if(!name.trim())return;try{const result=editing===null?await api.categorias.create(name.trim()):await api.categorias.update(cats[editing].idCategoria!,name.trim());persistColor(result.idCategoria,color);const normalized=fromApiCategory(result);setCats(old=>editing===null?[...old,normalized]:old.map((c,i)=>i===editing?{...normalized,symbol:c.symbol}:c));setModal(false);setApiError('')}catch(error){setApiError(error instanceof Error?error.message:'Não foi possível salvar a categoria')}};
return <div style={{zoom}} className="relative w-[1440px] min-h-[1024px] bg-[#f6f9fe] font-[Inter] text-[#140d40]">
 {loading && <PageLoading label="Carregando categorias e gastos..." />}
<aside style={abs(0,0,232,1024)} className="bg-[#130938] text-white"><SidebarMenu active="Categorias"/>
 <div style={abs(18,716,198,252)} className="overflow-hidden rounded-[10px] border border-[#452985]"><img src="/Promo2@3x.png" className="absolute inset-0 w-full h-full object-cover"/><div className="absolute inset-0 bg-gradient-to-b from-[#130938]/75 via-transparent to-transparent"/><p className="absolute left-[10px] top-[12px] text-[8px] tracking-[2px] font-semibold text-[#b285ff]">CONTROLE —</p><p className="absolute left-[10px] top-[26px] text-[12px] font-semibold leading-[16px]">Entenda melhor como<br/><span className="text-[#b285ff]">você gasta.</span></p><p className="absolute left-[10px] top-[56px] text-[10px]">Organize seus gastos.</p></div>
</aside>
<div style={abs(235,0,1205,74)}><Topbar5/></div>
<h1 style={abs(254,102,600,44)} className="font-bold text-[32px]">Categorias</h1><p style={abs(254,144,650,24)} className="text-[#595291] text-[16px]">Organize e personalize suas categorias de gastos.</p>{apiError&&<p role="alert" className="absolute left-[254px] top-[164px] text-[11px] text-red-600">{apiError}</p>}
<section style={abs(252,183,745,302)} className="rounded-[9px] bg-white border border-[#e3e5f2]">
<b className="absolute left-[17px] top-[19px] text-[16px]">Gastos por categoria</b><select value={period} onChange={e=>setPeriod(e.target.value)} className="absolute right-[18px] top-[10px] h-[40px] w-[118px] border border-[#e3e5f2] rounded-[8px] bg-white px-3 text-[11px]">{['Este mês','Mês passado','Este ano'].map(x=><option key={x}>{x}</option>)}</select>
<div aria-label={totalSpent>0?"Gráfico de gastos por categoria":"Nenhum gasto registrado"} className="absolute left-[19px] top-[57px] w-[216px] h-[216px] rounded-full" style={{background:totalSpent>0?`conic-gradient(${chartGradient})`:'#eceaf4'}}><div className="absolute inset-[24px] bg-white rounded-full"/></div>
<b className="absolute left-[71px] top-[150px] text-[18px]">{money(totalSpent)}</b><span className="absolute left-[85px] top-[177px] text-[#595291] text-[11px]">Total de gastos</span>
{calculatedCats.filter(c=>c.spent>0).sort((a,b)=>b.spent-a.spent).slice(0,5).map((c,i)=><div key={c.name} className="absolute left-[269px] right-[18px] h-[22px] flex items-center text-[12px]" style={{top:74+i*38}}><span className="w-[16px] h-[16px] rounded-full mr-[9px]" style={{background:c.color}}/><span className="flex-1">{c.name}</span><span className="text-[11px] font-medium w-[105px]">{money(c.spent)}</span><span className="text-[11px] text-[#595291] w-[30px] text-right">{c.percent}%</span></div>)}
{totalSpent===0&&<p className="absolute left-[75px] top-[273px] text-[11px] text-[#595291]">Nenhum gasto no período</p>}
</section>
<section style={abs(1015,183,405,302)} className="rounded-[9px] bg-white border border-[#e3e5f2]">
<div className="absolute left-[35px] top-[17px] w-[62px] h-[62px] bg-[#e8e0ff] rounded-[12px] flex items-center justify-center"><img src="/Category-tag-badge.svg" className="w-[42px] h-[42px]"/></div>
<h2 className="absolute left-[35px] top-[81px] font-bold text-[17px] leading-[24px]">Crie suas categorias<br/>personalizadas</h2><p className="absolute left-[33px] top-[138px] text-[13px] text-[#595291] leading-[20px]">Classifique seus gastos para<br/>entender melhor para onde<br/>seu dinheiro está indo.</p>
<button onClick={start} className="absolute left-[19px] right-[19px] top-[233px] h-[46px] rounded-[10px] bg-[#5712d6] text-white text-[15px] font-medium"><span className="text-[23px] align-middle">＋</span> &nbsp; Nova categoria</button>
</section>
<section style={abs(252,503,1168,486)} className="rounded-[9px] bg-white border border-[#e3e5f2] overflow-hidden">
<b className="absolute left-[17px] top-[14px] text-[16px]">Suas categorias</b><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="⌕  Buscar categoria..." className="absolute right-[19px] top-[7px] w-[208px] h-[40px] rounded-[8px] border border-[#e3e5f2] px-[12px] text-[11px] placeholder:text-[#8078ab]"/>
<div className="absolute left-[17px] right-[19px] top-[55px] h-[40px] bg-[#f6f7fc] flex items-center text-[11px] text-[#595291]">
<span className="w-[26%] pl-[4px]">Nome</span><span className="w-[14%]">Cor</span><span className="w-[14%]">Ícone</span><span className="w-[34%]">Total gasto (período)</span><span className="w-[12%] text-center">Ações</span></div>
<div className="absolute left-[17px] right-[19px] top-[95px] h-[345px] overflow-y-auto">{calculatedCats.map((c,i)=>({c,i})).filter(({c})=>c.name.toLowerCase().includes(query.toLowerCase())).map(({c,i})=><div key={c.name+i} className="h-[43px] border-b border-[#e5e8f2] flex items-center text-[11px]">
<span className="w-[26%] pl-[4px]">{c.name}</span><span className="w-[14%]"><span className="block w-[28px] h-[28px] rounded-full" style={{background:c.color}}/></span><span className="w-[14%]"><Icon item={c}/></span><span className="w-[34%] flex items-center gap-8 font-medium"><span className="min-w-[110px]">{money(c.spent)}</span><span className="font-normal text-[#595291]">{c.percent}%</span></span><span className="w-[12%] flex items-center justify-center gap-[12px] text-[#7a61e5]"><button onClick={()=>edit(i)} aria-label={'Editar '+c.name} className="text-[18px] leading-none">✎</button><button onClick={()=>remove(i)} aria-label={'Excluir '+c.name} className="hover:opacity-70"><CategoryGlyph name="trash" size={19}/></button></span></div>)}</div>
</section>
{modal&&<div className="fixed inset-0 z-[200] bg-[#130938]/45 flex items-center justify-center" onMouseDown={()=>setModal(false)}><div className="w-[430px] bg-white rounded-[14px] shadow-2xl p-7" onMouseDown={e=>e.stopPropagation()}><div className="flex justify-between items-center"><h2 className="text-[21px] font-bold">{editing===null?'Nova categoria':'Editar categoria'}</h2><button onClick={()=>setModal(false)} className="text-[24px]">×</button></div><label className="block mt-6 mb-2 text-[13px]">Nome da categoria</label><input autoFocus value={name} onChange={e=>setName(e.target.value)} className="w-full border border-[#e3e5f2] rounded-lg h-11 px-3" placeholder="Ex.: Pets"/><label className="block mt-5 mb-2 text-[13px]">Cor da categoria</label><div className="flex flex-wrap gap-3">{(showMoreColors?['#8159e0','#ff996f','#4885db','#df67a3','#34b8b4','#3aa66c','#f5c542','#1b8c4b','#654321','#ef4444','#f97316','#0ea5e9','#1e3a8a','#a855f7','#64748b','#111827','#84cc16','#f472b6']:['#8159e0','#ff996f','#4885db','#df67a3','#34b8b4','#3aa66c']).map(c=><button key={c} type="button" aria-label={'Selecionar cor '+c} onClick={()=>setColor(c)} className={'w-9 h-9 rounded-full '+(color===c?'ring-2 ring-offset-2 ring-[#5712d6]':'')} style={{background:c}}/>)}<button type="button" aria-label={showMoreColors?'Mostrar menos cores':'Mostrar mais cores'} title={showMoreColors?'Menos cores':'Mais cores'} onClick={()=>setShowMoreColors(v=>!v)} className="w-9 h-9 rounded-full bg-white border border-[#d6d1e8] text-[#5712d6] text-[23px] leading-none flex items-center justify-center">{showMoreColors?'−':'+'}</button></div><button onClick={save} className="mt-7 h-11 w-full rounded-lg bg-[#5712d6] text-white">{editing===null?'Criar categoria':'Salvar alterações'}</button></div></div>}
</div>;
}
