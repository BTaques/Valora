import { FunctionComponent } from "react";
import type { MovementDto } from "../services/valoraApi";

export type EntradasESadasType = {
  className?: string;
  movimentacoes: MovementDto[];
};

const EntradasESadas: FunctionComponent<EntradasESadasType> = ({
  className = "",
  movimentacoes,
}) => {
  const now = new Date();
  const money = (n: number) => n.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
  const monthData = Array.from({length:6},(_,i)=>{
    const d=new Date(now.getFullYear(),now.getMonth()-5+i,1);
    const prefix=`${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,"0")}`;
    const items=movimentacoes.filter(m=>m.dataMovimentacao.startsWith(prefix));
    return {label:d.toLocaleDateString("pt-BR",{month:"short"}).replace(".",""),entradas:items.filter(m=>m.tipo==="RECEITA").reduce((s,m)=>s+Number(m.valor),0),gastos:items.filter(m=>m.tipo==="DESPESA").reduce((s,m)=>s+Number(m.valor),0)};
  });
  const current=monthData[5];
  const max=Math.max(1,...monthData.flatMap(m=>[m.entradas,m.gastos]));
  return (
    <div
      className={`absolute top-[74px] left-[482.95px] rounded-xl bg-[#fff] border-[#e3e6f2] border-solid border-[1px] box-border w-[310px] overflow-hidden flex flex-col items-start justify-center pt-[11px] px-0.5 pb-3 isolate text-left text-[17px] text-[#636391] font-[Inter] ${className}`}
    >
      <div className="self-stretch flex items-center justify-center gap-6 z-[0] text-[#130e33]">
        <div className="h-[21.9px] flex items-start pt-0 px-0 pb-[1.9px] box-border">
          <h3 className="m-0 relative text-[length:inherit] font-bold font-[inherit]">
            Entradas e Saídas
          </h3>
        </div>
        <div className="cursor-pointer h-[34px] rounded-[9px] bg-[#fff] border-[#e3e6f2] border-solid border-[1px] box-border overflow-hidden flex items-center pt-[9px] pb-2 pl-3 pr-6 text-xs">
          <div className="flex items-center gap-2 whitespace-nowrap">Este mês <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#4F13D4" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg></div>
        </div>
      </div>
      <div className="self-stretch flex items-start py-[21px] pl-[15px] pr-0.5 gap-4 z-[1] text-xl text-[#059e57]">
        <div className="flex-1 flex items-start gap-[7px]">
          <h3 className="m-0 relative text-[length:inherit] font-bold font-[inherit] mq450:text-base">
            ↑
          </h3>
          <div className="flex-1 flex flex-col items-start gap-1.5 text-[11px] text-[#636391]">
            <div className="self-stretch relative">Entradas</div>
            <b className="self-stretch relative text-[17px] text-[#059e57]">
              {money(current.entradas)}
            </b>
          </div>
        </div>
        <div className="flex-1 flex items-start gap-2 min-w-[135px] text-[#f01424]">
          <h3 className="m-0 relative text-[length:inherit] font-bold font-[inherit] mq450:text-base">
            ↓
          </h3>
          <div className="flex-1 flex flex-col items-start gap-1.5 text-[11px] text-[#636391]">
            <div className="self-stretch relative">Gastos</div>
            <b className="self-stretch relative text-[17px] text-[#f01424]">
              {money(current.gastos)}
            </b>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start pt-10 pb-3 pl-[15px] pr-[34px] gap-3 z-[2] text-[10px]">
        <div className="flex items-end justify-center gap-5 shrink-0 h-[90px]">
          {monthData.map((m,i)=><div key={i} className="flex items-end gap-[5px] h-[90px]">
            <div className="w-2.5 relative rounded-[5px] bg-[#d1bdff]" style={{height:`${m.entradas/max*90}px`}}/>
            <div className="w-2.5 relative rounded-[5px] bg-[#4f13d4]" style={{height:`${m.gastos/max*90}px`}}/>
          </div>)}
        </div>
        <div className="self-stretch flex items-start justify-between py-0 pl-0 pr-2.5 gap-5 shrink-0">
          {monthData.map((m,i)=><div key={i} className="relative capitalize">{m.label}</div>)}
        </div>
      </div>
      <div className="self-stretch flex items-center justify-center gap-5 z-[3] text-[11px]">
        <div className="flex items-center gap-1.5 whitespace-nowrap">
          <div className="h-2 w-2 rounded-full bg-[#d1bdff]" />
          <span>Entradas</span>
        </div>
        <div className="flex items-center gap-1.5 whitespace-nowrap">
          <div className="h-2 w-2 rounded-full bg-[#4f13d4]" />
          <span>Gastos</span>
        </div>
      </div>
    </div>
  );
};

export default EntradasESadas;
