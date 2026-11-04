import { FunctionComponent } from "react";
import { useNavigate } from "react-router-dom";
import type { CashboxDto } from "../services/valoraApi";

export type MinhasCaixinhasType = { className?: string; caixinhas: CashboxDto[]; loading?: boolean };
const money=(n:number)=>Number(n).toLocaleString("pt-BR",{style:"currency",currency:"BRL"});

const MinhasCaixinhas: FunctionComponent<MinhasCaixinhasType> = ({className="",caixinhas,loading=false}) => {
  const navigate=useNavigate();
  return <section className={`absolute top-[74px] left-[805.05px] rounded-xl bg-white border border-[#e3e6f2] w-[375px] h-[400px] overflow-hidden flex flex-col items-start pt-[14px] px-[13px] pb-3 gap-[7px] text-left text-[17px] text-[#130e33] font-[Inter] ${className}`}>
    <div className="self-stretch flex items-center gap-2">
      <h3 className="flex-1 font-bold">Minhas Caixinhas</h3>
      <button onClick={()=>navigate("/caixinhas")} className="text-xs font-medium text-[#4f13d4]">Ver todas →</button>
    </div>
    {loading?<p className="text-sm text-[#636391]">Carregando caixinhas...</p>:caixinhas.length===0?<p className="text-sm text-[#636391] py-6">Você ainda não criou nenhuma caixinha.</p>:caixinhas.slice(0,4).map(item=>{
      const pct=Number(item.vlMeta)>0?Math.min(100,Math.max(0,Number(item.vlAtual)/Number(item.vlMeta)*100)):0;
      return <div key={item.idCaixinha} className="w-full shrink-0 rounded-lg border border-[#e3e6f2] px-3 py-2">
        <div className="flex justify-between gap-3 text-sm"><b>{item.nmCaixinha}</b><span>{Math.round(pct)}%</span></div>
        <p className="text-xs text-[#636391] mt-0.5">{money(item.vlAtual)} de {money(item.vlMeta)}</p>
        <div className="h-2 bg-[#eee8fc] rounded-full mt-2 overflow-hidden"><div className="h-full bg-[#5712d6] rounded-full" style={{width:`${pct}%`}}/></div>
      </div>;
    })}
  </section>;
};
export default MinhasCaixinhas;
