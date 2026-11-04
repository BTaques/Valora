import { FunctionComponent } from "react";
import type { MovementDto } from "../services/valoraApi";
export type EntradasESadasType = {className?:string;movimentacoes:MovementDto[]};
const money=(n:number)=>n.toLocaleString("pt-BR",{style:"currency",currency:"BRL"});
const EntradasESadas:FunctionComponent<EntradasESadasType>=({className="",movimentacoes})=>{
 const now=new Date();
 const monthly=movimentacoes.filter(m=>{const d=new Date(m.dataMovimentacao+"T12:00:00");return d.getMonth()===now.getMonth()&&d.getFullYear()===now.getFullYear()});
 const entradas=monthly.filter(m=>m.tipo==="RECEITA").reduce((s,m)=>s+Number(m.valor),0);
 const gastos=monthly.filter(m=>m.tipo==="DESPESA").reduce((s,m)=>s+Number(m.valor),0);
 const months=Array.from({length:6},(_,i)=>{const d=new Date(now.getFullYear(),now.getMonth()-5+i,1);const ms=movimentacoes.filter(m=>m.dataMovimentacao.startsWith(`${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,"0")}`));return {label:d.toLocaleDateString("pt-BR",{month:"short"}),entrada:ms.filter(m=>m.tipo==="RECEITA").reduce((s,m)=>s+Number(m.valor),0),saida:ms.filter(m=>m.tipo==="DESPESA").reduce((s,m)=>s+Number(m.valor),0)}})
 const max=Math.max(1,...months.flatMap(m=>[m.entrada,m.saida]));
 return <div className={`absolute top-[74px] left-[482.95px] rounded-xl bg-white border border-[#e3e6f2] w-[310px] overflow-hidden flex flex-col pt-3 px-4 pb-3 text-left text-[#130e33] font-[Inter] ${className}`}>
  <div className="flex justify-between items-center"><h3 className="font-bold text-[17px]">Entradas e Saídas</h3><span className="text-xs text-[#636391]">Este mês</span></div>
  <div className="flex gap-5 mt-6 text-[11px]"><div className="flex-1 text-[#636391]">↑ Entradas<b className="block text-[17px] text-[#059e57] mt-1">{money(entradas)}</b></div><div className="flex-1 text-[#636391]">↓ Gastos<b className="block text-[17px] text-[#f01424] mt-1">{money(gastos)}</b></div></div>
  <div className="flex items-end justify-between h-[118px] mt-6 gap-2">{months.map((m,i)=><div key={i} className="flex-1 flex flex-col items-center gap-2"><div className="h-[92px] w-full flex items-end justify-center gap-1"><div className="w-[10px] rounded-t bg-[#d1bdff]" style={{height:`${m.entrada/max*100}%`}}/><div className="w-[10px] rounded-t bg-[#4f13d4]" style={{height:`${m.saida/max*100}%`}}/></div><span className="text-[10px] text-[#636391] capitalize">{m.label}</span></div>)}</div>
  <div className="flex justify-center gap-4 text-[11px] text-[#636391] mt-3"><span>🟪 Entradas</span><span>🟣 Gastos</span></div>
 </div>;
};
export default EntradasESadas;
