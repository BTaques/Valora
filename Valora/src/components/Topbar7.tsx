import { FunctionComponent } from "react";

export type Topbar7Type = {
  className?: string;
};

const Topbar7: FunctionComponent<Topbar7Type> = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch bg-[#f4f4fe] overflow-hidden flex items-start justify-between flex-wrap content-start pt-[13px] px-[34px] pb-4 box-border gap-0 max-w-full [row-gap:20px] shrink-0 text-left text-2xl text-[#4f13d4] font-[Inter] ${className}`}
    >
      <div className="h-[42px] flex-1 rounded-[11px] bg-[#fff] border-[#bab7c2] border-solid border-[1px] box-border overflow-hidden flex items-center py-[5px] px-[15px] gap-4 min-w-[310px] max-w-[480px] shrink-0 mq675:max-w-full mq675:flex-1 mq450:flex-wrap">
        <div className="h-[30px] w-4 flex items-start pt-px px-0 pb-0 box-border">
          <div className="relative hidden mq450:text-[19px]">⌕</div>
        </div>
        <input
          className="w-full [border:none] [outline:none] bg-[transparent] h-[17.9px] flex-1 flex items-start pt-0 px-0 pb-[1.9px] box-border font-[Inter] text-[13px] text-[#636391] min-w-[270px] max-w-full"
          placeholder="Buscar transações, caixinhas ou categorias...⌕"
          type="text"
        />
      </div>
      <div className="flex-[1.0715] flex flex-col items-start gap-[7px] shrink-0 text-sm text-[#130e33]">
        <div className="w-full h-[42px] flex items-start pt-0 pb-0.5 pl-[15px] pr-0 box-border max-w-[188.9px] shrink-0">
          <img
            className="h-6 w-6 relative shrink-0"
            alt=""
            src="/Headset.svg"
          />
        </div>
        <div className="w-full h-20 flex items-start pt-0 pb-8 pl-[13px] pr-0 box-border max-w-[192.9px] shrink-0">
          <img
            className="h-[25px] w-[22px] relative shrink-0"
            alt=""
            src="/merged-asset-11.svg"
          />
        </div>
        <div className="h-11 flex-1 flex items-center py-0 pl-[19px] pr-0 box-border gap-[15.9px] min-w-[189px] shrink-0">
          <div className="h-11 w-11 relative rounded-[50%] bg-[#dbbdab] shrink-0" />
          <div className="w-[270px] max-w-[270px] flex items-center pt-0 pb-[5px] pl-2.5 pr-1.5 box-border gap-2 z-[8] shrink-0">
            <h3 className="m-0 self-stretch relative text-[length:inherit] font-bold font-[inherit] shrink-0">
              Marina Silva
            </h3>
            <div className="self-stretch relative text-xs text-[#636391] shrink-0">
              Configurações
            </div>
          </div>
          <div className="w-[72.9px] h-[42px] flex items-start py-0 px-[15px] box-border shrink-0 text-xl">
            <h1 className="m-0 w-[11px] relative text-[length:inherit] font-normal font-[inherit] inline-block shrink-0 mq450:text-base">
              ⌄
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar7;
