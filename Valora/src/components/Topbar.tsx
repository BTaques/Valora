import { FunctionComponent } from "react";

export type TopbarType = {
  className?: string;
};

const Topbar: FunctionComponent<TopbarType> = ({ className = "" }) => {
  return (
    <header
      className={`w-[1205px] max-w-full bg-[#f4f4fe] overflow-hidden flex items-start justify-between flex-wrap content-start pt-[13px] px-[34px] pb-4 box-border gap-0 top-[0] z-[99] sticky [row-gap:20px] shrink-0 text-left text-2xl text-[#4f13d4] font-[Inter] ${className}`}
    >
      <div className="h-[42px] flex-1 rounded-[11px] bg-[#fff] border-[#bab7c2] border-solid border-[1px] box-border overflow-hidden flex items-center py-[5px] px-[15px] gap-4 min-w-[310px] max-w-[480px] mq675:max-w-full mq675:flex-1">
        <div className="h-[41.9px] w-9 flex items-start pt-[5.9px] px-0 pb-0 box-border shrink-0">
          <div className="relative hidden shrink-0">⌕</div>
        </div>
        <input
          className="w-full [border:none] [outline:none] bg-[transparent] h-[17.9px] flex-1 flex items-start pt-0 px-0 pb-[1.9px] box-border font-[Inter] text-[13px] text-[#636391] min-w-[250px] max-w-full shrink-0"
          placeholder="Buscar transações, caixinhas ou categorias...⌕"
          type="text"
        />
      </div>
      <div className="flex-[1.0715] flex items-center flex-wrap content-center gap-[26px] min-w-[287px] max-w-[339px] text-sm text-[#130e33]">
        <div className="h-[25.9px] flex items-start pt-0 px-0 pb-[1.9px] box-border">
          <img className="h-6 w-6 relative" alt="" src="/Headset.svg" />
        </div>
        <div className="h-[27.9px] flex items-start pt-[2.9px] px-0 pb-0 box-border">
          <img
            className="h-[25px] w-[22px] relative"
            alt=""
            src="/merged-asset-11.svg"
          />
        </div>
        <div className="h-11 flex-1 flex items-center py-0 pl-[19px] pr-0 box-border gap-[15.9px] min-w-[189px]">
          <div className="h-11 w-11 relative rounded-[50%] bg-[#dbbdab] shrink-0" />
          <div className="flex-[1.0921] flex flex-col items-start gap-[5px] shrink-0">
            <b className="self-stretch relative">Marina Silva</b>
            <div className="self-stretch relative text-xs text-[#636391]">
              Configurações
            </div>
          </div>
          <div className="self-stretch flex items-start py-0 pl-0 pr-4 shrink-0 text-xl">
            <h3 className="m-0 w-[11px] relative text-[length:inherit] font-normal font-[inherit] inline-block shrink-0">
              ⌄
            </h3>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Topbar;
