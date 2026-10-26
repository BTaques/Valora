import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Topbar5 from "../components/Topbar5";

type Row={date:string;description:string;category:string;account:string;type:"Entrada"|"Saída";value:string;origin:string};
const initial:Row[]=[
{date:"30/09/2024",description:"Supermercado",category:"Alimentação",account:"Nubank",type:"Saída",value:"- R$ 230,00",origin:"Automática"},
{date:"29/09/2024",description:"Salário",category:"Trabalho",account:"Itaú",type:"Entrada",value:"+ R$ 3.500,00",origin:"Automática"},
{date:"28/09/2024",description:"Uber",category:"Transporte",account:"Nubank",type:"Saída",value:"- R$ 45,00",origin:"Manual"},
{date:"27/09/2024",description:"Netflix",category:"Lazer",account:"Nubank",type:"Saída",value:"- R$ 39,90",origin:"Automática"},
{date:"26/09/2024",description:"Freelance",category:"Trabalho",account:"Itaú",type:"Entrada",value:"+ R$ 1.320,00",origin:"Manual"},
{date:"25/09/2024",description:"Farmácia",category:"Saúde",account:"Nubank",type:"Saída",value:"- R$ 68,50",origin:"Manual"},
{date:"24/09/2024",description:"Academia",category:"Saúde",account:"Itaú",type:"Saída",value:"- R$ 120,00",origin:"Automática"},
{date:"23/09/2024",description:"Restaurante",category:"Alimentação",account:"Nubank",type:"Saída",value:"- R$ 85,00",origin:"Manual"},
];
const Arrow=()=> <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>;
export default function Movimentacoes(){
 const navigate=useNavigate();
 const [zoom,setZoom]=useState(1);
 useEffect(()=>{const update=()=>setZoom(Math.max(1,innerWidth/1440));update();window.addEventListener("resize",update);return()=>window.removeEventListener("resize",update)},[]);
 const [page,setPage]=useState(1); const [rows,setRows]=useState(initial),[search,setSearch]=useState(""),[account,setAccount]=useState("Todas as contas"),[category,setCategory]=useState("Todas as categorias"),[type,setType]=useState("Todos os tipos"),[origin,setOrigin]=useState("Todas as origens"),[modal,setModal]=useState(false),[draft,setDraft]=useState({description:"",value:"",category:"Alimentação",type:"Saída" as "Entrada"|"Saída"}),[selected,setSelected]=useState<number[]>([]);
 const filtered=rows.filter(r=>(r.description+" "+r.value+" "+r.category).toLowerCase().includes(search.toLowerCase())&&(account==="Todas as contas"||r.account===account)&&(category==="Todas as categorias"||r.category===category)&&(type==="Todos os tipos"||r.type===type)&&(origin==="Todas as origens"||r.origin===origin));
 const filter=(value:string,options:string[],change:(v:string)=>void)=> <div className="relative h-full"><select value={value} onChange={e=>change(e.target.value)} className="w-full h-full appearance-none bg-white border border-[#e0dceb] rounded-[8px] pl-[14px] pr-10 text-[12px] text-[#191236] cursor-pointer">{options.map(o=><option key={o}>{o}</option>)}</select><span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#6637cf]"><Arrow/></span></div>;
 const nav=[["Início","/dashboard","/Wrapper.svg"],["Movimentações","/movimentacoes","/Movimenta-es-icon.svg"],["Caixinhas","/caixinhas","/Archive-Caixinhas.svg"],["Categorias","/categorias","/Divider.svg"],["Contas conectadas","/contas-conectadas","/Contas-conectadas-icon.svg"]];
 const px=(x:number,y:number,w:number,h:number)=>({position:"absolute" as const,left:x,top:y,width:w,height:h});
 return <div style={{zoom}} className="relative w-[1440px] min-h-[1024px] bg-[#f8f8fc] font-[Inter] text-[#191236]">
 <aside className="absolute left-0 top-0 w-[232px] h-[1024px] bg-[#160b30] px-3">
  <div className="flex items-center gap-1 pt-[34px] pb-[43px] pl-3 text-white text-[27px] font-bold"><img src="/logo-branco-3@2x.png" className="w-10 h-[33px] object-contain"/>Valora</div>
  <nav className="flex flex-col gap-1">{nav.map(([label,href,icon])=><button key={label} onClick={()=>href!=="#"&&navigate(href)} className={"h-[54px] w-full border border-[#46395e] rounded-[10px] flex items-center gap-5 px-[13px] text-left text-white text-[14px] "+(label==="Movimentações"?"bg-[#4212a6]":"bg-transparent")}><img src={icon} className="w-6 h-6 object-contain"/>{label}</button>)}</nav>
  <div className="absolute left-[18px] top-[727px] w-[195px] h-[235px] overflow-hidden rounded-[12px] border border-[#382175]">
   <img src="/Parcerias-Valora@3x.png" alt="" className="absolute inset-0 w-full h-full object-cover"/>
   <p className="absolute left-[17px] top-[15px] text-[#b285ff] text-[8px] font-semibold tracking-[2px]">FACILIDADE — NOVO</p>
   <p className="absolute left-[16px] top-[30px] text-white text-[16px] font-bold leading-[20px]">Vincule sua conta<br/><span className="text-[#b285ff]">bancária.</span></p>
   <p className="absolute left-[17px] top-[77px] w-[160px] text-white text-[11px] leading-[15px]">Conecte suas contas e acompanhe tudo em um só lugar.</p>
   <button className="absolute left-[17px] top-[175px] w-[159px] h-[40px] rounded-[10px] border border-white/80 bg-[#1c1245]/80 text-white text-[12px] font-semibold">Saiba mais &nbsp; →</button>
  </div>
 </aside>
 <div className="absolute left-[235px] top-0 w-[1205px] h-[74px]"><Topbar5/></div>
 <h1 style={px(270,108,430,39)} className="text-[30px] font-bold leading-tight">Movimentações</h1>
 <p style={px(270,149,520,20)} className="text-[14px] text-[#675f7d]">Todas as suas entradas e saídas em um só lugar.</p>
 <button style={px(1130,110,250,48)} className="bg-[#5212d6] text-white rounded-[9px] text-[14px] font-semibold" onClick={()=>setModal(true)}>＋&nbsp; Registrar movimentação</button>
 <input style={px(270,195,600,48)} className="bg-white border border-[#e0dceb] rounded-[9px] px-[17px] text-[13px] outline-none" placeholder="⌕  Buscar por descrição, valor, categoria..." value={search} onChange={e=>setSearch(e.target.value)}/>
 <div style={px(890,195,490,48)} className="bg-white border border-[#e0dceb] rounded-[9px] flex items-center justify-between px-[19px] text-[13px]">▣ &nbsp;01 set 2024 - 30 set 2024 <Arrow/></div>
 <div style={px(270,259,260,44)}>{filter(account,["Todas as contas","Nubank","Itaú"],setAccount)}</div>
 <div style={px(548,259,260,44)}>{filter(category,["Todas as categorias","Alimentação","Trabalho","Transporte","Lazer","Saúde"],setCategory)}</div>
 <div style={px(826,259,260,44)}>{filter(type,["Todos os tipos","Entrada","Saída"],setType)}</div>
 <div style={px(1104,259,260,44)}>{filter(origin,["Todas as origens","Automática","Manual"],setOrigin)}</div>
 <section style={px(270,319,1110,72)} className="bg-white border border-[#e0dceb] rounded-[10px]">
  <b className="absolute left-[19px] top-[25px] text-[14px]">128 movimentações</b>
  <span className="absolute left-[409px] top-[12px] text-[11px] text-[#675f7d]">Entradas</span><b className="absolute left-[409px] top-[32px] text-[16px] text-[#109c5b]">R$ 4.820,00</b>
  <span className="absolute left-[609px] top-[12px] text-[11px] text-[#675f7d]">Saídas</span><b className="absolute left-[609px] top-[32px] text-[16px] text-[#ef3942]">R$ 3.210,50</b>
  <button onClick={()=>{const content=["Data,Descrição,Categoria,Conta,Tipo,Valor,Origem",...filtered.map(r=>[r.date,r.description,r.category,r.account,r.type,r.value,r.origin].join(","))].join("\n");const a=document.createElement("a");a.href=URL.createObjectURL(new Blob([content],{type:"text/csv"}));a.download="movimentacoes.csv";a.click();URL.revokeObjectURL(a.href)}} className="absolute left-[889px] top-[14px] w-[195px] h-[42px] rounded-[8px] border border-[#e0dceb] text-[#6637cf] text-[13px] font-semibold">⇩ &nbsp;Exportar</button>
 </section>
 <section style={px(270,407,1110,526)} className="bg-white border border-[#e0dceb] rounded-[10px] overflow-hidden">
 <b className="absolute left-[17px] top-[14px] text-[16px]">Movimentações</b>
 <div className="absolute left-[17px] top-[54px] w-[1078px] grid text-[#675f7d] text-[11px] font-semibold items-center" style={{gridTemplateColumns:"37px 120px 245px 190px 185px 120px 135px"}}>
 <input type="checkbox" checked={selected.length===filtered.length&&filtered.length>0} onChange={e=>setSelected(e.target.checked?filtered.map(r=>rows.indexOf(r)):[])}/><span>Data</span><span>Descrição</span><span>Categoria</span><span>Conta</span><span>Tipo</span><span>Valor</span></div>
 <div className="absolute top-[78px] left-[15px] right-[15px] bottom-[65px] overflow-y-auto">{filtered.map((r,i)=><div key={i} className="grid h-[43px] border-b border-[#efedf4] items-center text-[11px]" style={{gridTemplateColumns:"39px 120px 245px 190px 185px 120px 135px"}}><input type="checkbox" checked={selected.includes(rows.indexOf(r))} onChange={e=>setSelected(old=>e.target.checked?[...old,rows.indexOf(r)]:old.filter(x=>x!==rows.indexOf(r)))}/><span>{r.date}</span><span className="font-medium">{r.description}</span><span className="text-[#675f7d]">{r.category}</span><span>{r.account}</span><span className="text-[#675f7d]">{r.type}</span><b className={r.type==="Entrada"?"text-[#109c5b]":"text-[#ef3942]"}>{r.value}</b></div>)}{filtered.length===0&&<p className="text-center text-[#675f7d] mt-12">Nenhuma movimentação encontrada.</p>}</div>
 <div style={px(17,472,300,42)} className="flex items-center justify-around rounded-[8px] border border-[#e0dceb] bg-white px-2 text-[12px] text-[#191236]">
 {["‹","1","2","3","4","5","…","9","›"].map((n,i)=><button key={i} type="button" onClick={()=>{if(n!=="…")setPage(n==="‹"?Math.max(1,page-1):n==="›"?Math.min(9,page+1):Number(n))}} className={"h-7 min-w-6 rounded "+(String(page)===n?"bg-[#5212d6] text-white":"hover:bg-[#f4f4fe]")}>{n}</button>)}
 </div>
 </section>
 {modal&&<div className="fixed inset-0 z-[300] bg-black/50 flex items-center justify-center"><form className="bg-white w-[420px] rounded-2xl p-7 shadow-xl flex flex-col gap-4" onSubmit={e=>{e.preventDefault();const n=Number(draft.value.replace(",","."));if(!draft.description||!n)return;setRows(old=>[{date:new Date().toLocaleDateString("pt-BR"),description:draft.description,category:draft.category,account:"Manual",type:draft.type,value:(draft.type==="Entrada"?"+ ":"- ")+n.toLocaleString("pt-BR",{style:"currency",currency:"BRL"}),origin:"Manual"},...old]);setModal(false);setDraft({description:"",value:"",category:"Alimentação",type:"Saída"})}}><div className="flex justify-between items-center"><h2 className="text-xl font-bold">Registrar movimentação</h2><button type="button" onClick={()=>setModal(false)}>✕</button></div><input required className="border rounded-lg p-3" placeholder="Descrição" value={draft.description} onChange={e=>setDraft({...draft,description:e.target.value})}/><input required className="border rounded-lg p-3" placeholder="Valor (R$)" type="number" step="0.01" value={draft.value} onChange={e=>setDraft({...draft,value:e.target.value})}/><select className="border rounded-lg p-3" value={draft.type} onChange={e=>setDraft({...draft,type:e.target.value as "Entrada"|"Saída"})}><option>Saída</option><option>Entrada</option></select><select className="border rounded-lg p-3" value={draft.category} onChange={e=>setDraft({...draft,category:e.target.value})}>{["Alimentação","Trabalho","Transporte","Lazer","Saúde"].map(x=><option key={x}>{x}</option>)}</select><button className="bg-[#5212d6] text-white rounded-lg p-3">Salvar movimentação</button></form></div>}
 </div>
}
