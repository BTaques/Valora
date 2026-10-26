import {useEffect,useState} from 'react';
import {useNavigate} from 'react-router-dom';
import Topbar5 from '../components/Topbar5';
const abs=(x:number,y:number,w:number,h:number)=>({position:'absolute' as const,left:x,top:y,width:w,height:h});
const money=(n:number)=>n.toLocaleString('pt-BR',{style:'currency',currency:'BRL'});
type Cat={name:string;color:string;bg:string;symbol:string;spent:number;percent:number};
const initial:Cat[]=[
{name:'Alimentação',color:'#ff996f',bg:'#ffe7df',symbol:'food',spent:625.4,percent:50},
{name:'Transporte',color:'#4885db',bg:'#e4eeff',symbol:'car',spent:365,percent:29},
{name:'Lazer',color:'#df67a3',bg:'#ffe3f0',symbol:'game',spent:249.9,percent:12},
{name:'Saúde',color:'#e95c70',bg:'#ffe2e5',symbol:'heart',spent:120,percent:7},
{name:'Educação',color:'#8159e0',bg:'#e9e3ff',symbol:'grad',spent:98,percent:2},
{name:'Moradia',color:'#34b8b4',bg:'#ddf7f5',symbol:'home',spent:0,percent:0},
{name:'Salário',color:'#3aa66c',bg:'#ddf7ea',symbol:'money',spent:0,percent:0},
{name:'Outros',color:'#777b95',bg:'#ededf2',symbol:'dots',spent:0,percent:0},
];
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
const [cats,setCats]=useState<Cat[]>(initial),[query,setQuery]=useState(''),[period,setPeriod]=useState('Este mês'),[editing,setEditing]=useState<number|null>(null),[modal,setModal]=useState(false),[name,setName]=useState(''),[color,setColor]=useState('#8159e0');
const nav=[['Início','/dashboard','/Wrapper.svg'],['Movimentações','/movimentacoes','/Movimenta-es-icon.svg'],['Caixinhas','/caixinhas','/Archive-Caixinhas.svg'],['Categorias','/categorias','/Divider.svg'],['Contas conectadas','/contas-conectadas','/Contas-conectadas-icon.svg']];
const start=()=>{setEditing(null);setName('');setColor('#8159e0');setModal(true)};
const edit=(i:number)=>{setEditing(i);setName(cats[i].name);setColor(cats[i].color);setModal(true)};
const remove=(i:number)=>{if(window.confirm('Excluir a categoria '+cats[i].name+'?'))setCats(old=>old.filter((_,j)=>j!==i))};
const save=()=>{if(!name.trim())return;const item:Cat={name:name.trim(),color,bg:color+'20',symbol:'dots',spent:editing===null?0:cats[editing].spent,percent:editing===null?0:cats[editing].percent};setCats(old=>editing===null?[...old,item]:old.map((c,i)=>i===editing?{...item,symbol:c.symbol}:c));setModal(false)};
return <div style={{zoom}} className="relative w-[1440px] min-h-[1024px] bg-[#f6f9fe] font-[Inter] text-[#140d40]">
<aside style={abs(0,0,232,1024)} className="bg-[#130938] text-white">
<div className="absolute left-[35px] top-[31px] flex items-center gap-[2px]"><img src="/logo-branco-3@2x.png" className="w-[40px] h-[33px] object-contain"/><b className="text-[27px]">Valora</b></div>
{nav.map(([label,href,icon],i)=><button key={label} onClick={()=>href!=='#'&&navigate(href)} style={abs(14,107+i*58,204,54)} className={'rounded-[10px] border border-[#452985] flex items-center gap-[20px] px-[15px] text-[14px] text-white '+(label==='Categorias'?'bg-gradient-to-r from-[#4214a6] to-[#661fe8]':'bg-transparent')}><img src={icon} className="w-[24px] h-[24px] object-contain"/>{label}</button>)}
<div style={abs(18,716,198,252)} className="overflow-hidden rounded-[10px] border border-[#452985]"><img src="/Promo2@3x.png" className="absolute inset-0 w-full h-full object-cover"/><div className="absolute inset-0 bg-gradient-to-b from-[#130938]/75 via-transparent to-transparent"/><p className="absolute left-[10px] top-[12px] text-[8px] tracking-[2px] font-semibold text-[#b285ff]">CONTROLE —</p><p className="absolute left-[10px] top-[26px] text-[12px] font-semibold leading-[16px]">Entenda melhor como<br/><span className="text-[#b285ff]">você gasta.</span></p><p className="absolute left-[10px] top-[56px] text-[10px]">Organize seus gastos.</p></div>
</aside>
<div style={abs(235,0,1205,74)}><Topbar5/></div>
<h1 style={abs(254,102,600,44)} className="font-bold text-[32px]">Categorias</h1><p style={abs(254,144,650,24)} className="text-[#595291] text-[16px]">Organize e personalize suas categorias de gastos.</p>
<button style={abs(1232,106,188,48)} onClick={start} className="bg-[#5212d1] text-white rounded-[10px] text-[14px] font-medium flex items-center justify-center gap-[12px]"><span className="text-[22px] leading-none">＋</span>Nova categoria</button>
<section style={abs(252,183,745,302)} className="rounded-[9px] bg-white border border-[#e3e5f2]">
<b className="absolute left-[17px] top-[19px] text-[16px]">Gastos por categoria</b><select value={period} onChange={e=>setPeriod(e.target.value)} className="absolute right-[18px] top-[10px] h-[40px] w-[118px] border border-[#e3e5f2] rounded-[8px] bg-white px-3 text-[11px]">{['Este mês','Mês passado','Este ano'].map(x=><option key={x}>{x}</option>)}</select>
<img src="/Donut-categorias-final.svg" alt="Gráfico de gastos por categoria" className="absolute left-[19px] top-[57px] w-[216px] h-[216px]"/>
<b className="absolute left-[71px] top-[150px] text-[18px]">R$ 1.250,30</b><span className="absolute left-[85px] top-[177px] text-[#595291] text-[11px]">Total de gastos</span>
{cats.slice(0,5).map((c,i)=><div key={c.name} className="absolute left-[269px] right-[18px] h-[22px] flex items-center text-[12px]" style={{top:74+i*38}}><span className="w-[16px] h-[16px] rounded-full mr-[9px]" style={{background:c.color}}/><span className="flex-1">{c.name}</span><span className="text-[11px] font-medium w-[105px]">{money(c.spent)}</span><span className="text-[11px] text-[#595291] w-[30px] text-right">{c.percent}%</span></div>)}
</section>
<section style={abs(1015,183,405,302)} className="rounded-[9px] bg-white border border-[#e3e5f2]">
<div className="absolute left-[35px] top-[17px] w-[62px] h-[62px] bg-[#e8e0ff] rounded-[12px] flex items-center justify-center"><img src="/Category-tag-badge.svg" className="w-[42px] h-[42px]"/></div>
<h2 className="absolute left-[35px] top-[81px] font-bold text-[17px] leading-[24px]">Crie suas categorias<br/>personalizadas</h2><p className="absolute left-[33px] top-[138px] text-[13px] text-[#595291] leading-[20px]">Classifique seus gastos para<br/>entender melhor para onde<br/>seu dinheiro está indo.</p>
<button onClick={start} className="absolute left-[19px] right-[19px] top-[233px] h-[46px] rounded-[10px] bg-[#5712d6] text-white text-[13px] font-medium">＋ &nbsp; Nova categoria</button>
</section>
<section style={abs(252,503,1168,486)} className="rounded-[9px] bg-white border border-[#e3e5f2] overflow-hidden">
<b className="absolute left-[17px] top-[14px] text-[16px]">Suas categorias</b><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="⌕  Buscar categoria..." className="absolute right-[19px] top-[7px] w-[208px] h-[40px] rounded-[8px] border border-[#e3e5f2] px-[12px] text-[11px] placeholder:text-[#8078ab]"/>
<div className="absolute left-[17px] right-[19px] top-[55px] h-[40px] bg-[#f6f7fc] flex items-center text-[11px] text-[#595291]">
<span className="w-[183px] pl-[4px]">Nome</span><span className="w-[87px]">Cor</span><span className="w-[148px]">Ícone</span><span className="flex-1">Total gasto (este mês)</span><span className="w-[90px] text-center">Ações</span></div>
<div className="absolute left-[17px] right-[19px] top-[95px] h-[345px] overflow-y-auto">{cats.map((c,i)=>({c,i})).filter(({c})=>c.name.toLowerCase().includes(query.toLowerCase())).map(({c,i})=><div key={c.name+i} className="h-[43px] border-b border-[#e5e8f2] flex items-center text-[11px]">
<span className="w-[183px] pl-[4px]">{c.name}</span><span className="w-[87px]"><span className="block w-[28px] h-[28px] rounded-full" style={{background:c.color}}/></span><span className="w-[148px]"><Icon item={c}/></span><span className="flex-1 font-medium">{money(c.spent)} <span className="ml-[50px] font-normal text-[#595291]">{c.percent}%</span></span><span className="w-[90px] flex items-center justify-center gap-[12px] text-[#7a61e5]"><button onClick={()=>edit(i)} aria-label={'Editar '+c.name} className="text-[18px] leading-none">✎</button><button onClick={()=>remove(i)} aria-label={'Excluir '+c.name} className="hover:opacity-70"><CategoryGlyph name="trash" size={19}/></button></span></div>)}</div>
</section>
{modal&&<div className="fixed inset-0 z-[200] bg-[#130938]/45 flex items-center justify-center" onMouseDown={()=>setModal(false)}><div className="w-[430px] bg-white rounded-[14px] shadow-2xl p-7" onMouseDown={e=>e.stopPropagation()}><div className="flex justify-between items-center"><h2 className="text-[21px] font-bold">{editing===null?'Nova categoria':'Editar categoria'}</h2><button onClick={()=>setModal(false)} className="text-[24px]">×</button></div><label className="block mt-6 mb-2 text-[13px]">Nome da categoria</label><input autoFocus value={name} onChange={e=>setName(e.target.value)} className="w-full border border-[#e3e5f2] rounded-lg h-11 px-3" placeholder="Ex.: Pets"/><label className="block mt-5 mb-2 text-[13px]">Cor da categoria</label><div className="flex gap-3">{['#8159e0','#ff996f','#4885db','#df67a3','#34b8b4','#3aa66c'].map(c=><button key={c} onClick={()=>setColor(c)} className={'w-9 h-9 rounded-full '+(color===c?'ring-2 ring-offset-2 ring-[#5712d6]':'')} style={{background:c}}/>)}</div><button onClick={save} className="mt-7 h-11 w-full rounded-lg bg-[#5712d6] text-white">{editing===null?'Criar categoria':'Salvar alterações'}</button></div></div>}
</div>;
}
