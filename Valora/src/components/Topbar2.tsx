import { FunctionComponent } from "react";

export type Topbar2Type = {
  className?: string;
};

const Topbar2: FunctionComponent<Topbar2Type> = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch bg-[#f4f4fe] overflow-hidden flex items-start justify-between flex-wrap content-start pt-[13px] px-[34px] pb-4 box-border gap-0 max-w-full [row-gap:20px] text-left text-sm text-[#130e33] font-[Inter] ${className}`}
    >
      <div className="h-[42px] flex-1 rounded-[11px] bg-[#fff] border-[#bab7c2] border-solid border-[1px] box-border overflow-hidden flex items-center py-[5px] px-[15px] gap-4 min-w-[310px] max-w-[480px] mq675:max-w-full mq675:flex-1 mq450:flex-wrap">
        <button className="cursor-pointer [border:none] pt-px px-0 pb-0 bg-[transparent] h-[30px] w-4 flex items-start box-border">
          <h3 className="m-0 relative text-2xl font-normal font-[Inter] text-[#4f13d4] text-left hidden mq450:text-[19px]">
            ⌕
          </h3>
        </button>
        <input
          className="w-full [border:none] [outline:none] bg-[transparent] flex-1 flex items-start pt-0 px-0 pb-[1.9px] box-border font-[Inter] text-[13px] text-[#636391] min-w-[270px] max-w-full"
          placeholder="Buscar transações, caixinhas ou categorias...⌕"
          type="text"
        />
      </div>
      <div className="flex-[1.067] flex items-center flex-wrap content-center py-0 pl-0 pr-0.5 box-border gap-[16.1px] min-w-[286px] max-w-[339px] mq675:max-w-full">
        <button className="cursor-pointer [border:none] pt-0 pb-[1.9px] pl-0 pr-[9px] bg-[transparent] h-[25.9px] flex items-start box-border shrink-0">
          <img
            className="h-6 w-6 relative"
            loading="lazy"
            alt=""
            src="/Headset.svg"
          />
        </button>
        <div className="h-[27.9px] flex items-start pt-[2.9px] pb-0 pl-0 pr-[29px] box-border shrink-0">
          <img
            className="cursor-pointer [border:none] p-0 bg-[transparent] h-[25px] w-[22px] relative"
            alt=""
            src="/merged-asset-11.svg"
          />
        </div>
        <div className="h-11 w-11 relative rounded-[50%] bg-[#dbbdab] shrink-0" />
        <div className="flex-1 flex flex-col items-start gap-[5px] min-w-[83px] shrink-0">
          <b className="self-stretch relative">Marina Silva</b>
          <div className="self-stretch relative text-xs text-[#636391]">
            Configurações
          </div>
        </div>
        <div className="h-[27.9px] flex items-start pt-0 px-0 pb-[3.9px] box-border shrink-0 text-xl">
          <h3 className="m-0 relative text-[length:inherit] font-normal font-[inherit] mq450:text-base">
            ⌄
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Topbar2;
