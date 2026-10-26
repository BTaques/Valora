import { FunctionComponent } from "react";

export type FrameType = {
  className?: string;
};

const Frame: FunctionComponent<FrameType> = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch h-[71.9px] rounded-[10px] bg-[#fff] border-[#e0dceb] border-solid border-[1px] box-border overflow-x-auto shrink-0 flex items-center justify-between flex-wrap content-center pt-[11.1px] pb-3.5 pl-[21px] pr-6 gap-0 [row-gap:20px] text-left text-sm text-[#191236] font-[Inter] ${className}`}
    >
      <b className="w-[202px] relative inline-block shrink-0 min-w-[137px] max-w-[202px]">
        128 movimentações
      </b>
      <div className="flex-1 flex items-start pt-0 px-0 pb-[3.9px] box-border gap-2 min-w-[202px] max-w-[294px] text-[11px] text-[#675f7d] mq450:flex-wrap">
        <div className="flex-1 flex flex-col items-start gap-1.5 min-w-[125px]">
          <div className="self-stretch relative">Entradas</div>
          <b className="self-stretch relative text-base text-[#109c5b]">
            R$ 4.820,00
          </b>
        </div>
        <div className="h-10 flex flex-col items-start gap-1.5">
          <div className="self-stretch relative inline-block w-[94px]">
            Saídas
          </div>
          <b className="relative text-base text-[#ef3942]">R$ 3.210,50</b>
        </div>
      </div>
      <button
        className="cursor-pointer [border:none] pt-[2.8px] px-0 pb-0 bg-[transparent] h-[44.8px] flex items-start box-border"
        type="submit"
      >
        <div className="h-[42px] rounded-lg bg-[#fff] border-[#e0dceb] border-solid border-[1px] box-border overflow-hidden flex items-center justify-center pt-[11px] px-[62px] pb-3">
          <div className="relative text-[13px] font-semibold font-[Inter] text-[#6637cf] whitespace-pre-wrap text-center inline-block w-[68px] shrink-0">
            ⇩ Exportar
          </div>
        </div>
      </button>
    </div>
  );
};

export default Frame;
