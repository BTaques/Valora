import { FunctionComponent } from "react";

export type EntradasESadasType = {
  className?: string;
};

const EntradasESadas: FunctionComponent<EntradasESadasType> = ({
  className = "",
}) => {
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
              R$ 3.500,00
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
              R$ 2.000,00
            </b>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start pt-10 pb-3 pl-[15px] pr-[34px] gap-3 z-[2] text-[10px]">
        <div className="flex items-end justify-center gap-5 shrink-0">
          <div className="flex items-end gap-[5px]">
            <div className="h-12 w-2.5 relative rounded-[5px] bg-[#d1bdff]" />
            <div className="h-[34px] w-2.5 relative rounded-[5px] bg-[#4f13d4]" />
          </div>
          <div className="flex items-end gap-[5px]">
            <div className="h-[70px] w-2.5 relative rounded-[5px] bg-[#d1bdff]" />
            <div className="h-[42px] w-2.5 relative rounded-[5px] bg-[#4f13d4]" />
          </div>
          <div className="flex items-end gap-[5px]">
            <div className="h-[55px] w-2.5 relative rounded-[5px] bg-[#d1bdff]" />
            <div className="h-7 w-2.5 relative rounded-[5px] bg-[#4f13d4]" />
          </div>
          <div className="flex items-end gap-[5px]">
            <div className="h-[90px] w-2.5 relative rounded-[5px] bg-[#d1bdff]" />
            <div className="h-[55px] w-2.5 relative rounded-[5px] bg-[#4f13d4]" />
          </div>
          <div className="flex items-end gap-[5px]">
            <div className="h-[75px] w-2.5 relative rounded-[5px] bg-[#d1bdff]" />
            <div className="h-[49px] w-2.5 relative rounded-[5px] bg-[#4f13d4]" />
          </div>
          <div className="flex items-end gap-[5px]">
            <div className="h-[78px] w-2.5 relative rounded-[5px] bg-[#d1bdff]" />
            <div className="h-11 w-2.5 relative rounded-[5px] bg-[#4f13d4]" />
          </div>
        </div>
        <div className="self-stretch flex items-start justify-between py-0 pl-0 pr-2.5 gap-5 shrink-0">
          <div className="relative">Jan</div>
          <div className="h-3 flex-1 flex items-start py-0 px-px box-border">
            <div className="relative">Fev</div>
          </div>
          <div className="relative">Mar</div>
          <div className="h-3 flex-1 flex items-start py-0 pl-0 pr-0.5 box-border">
            <div className="relative">Abr</div>
          </div>
          <div className="h-3 flex-1 flex items-start py-0 pl-0 pr-0.5 box-border">
            <div className="relative">Mai</div>
          </div>
          <div className="relative">Jun</div>
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
