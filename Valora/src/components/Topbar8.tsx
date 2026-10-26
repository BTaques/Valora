import { FunctionComponent } from "react";

export type Topbar8Type = {
  className?: string;
};

const Topbar8: FunctionComponent<Topbar8Type> = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch bg-[#f4f4fe] overflow-hidden flex items-start justify-between flex-wrap content-start pt-[13px] px-[34px] pb-4 box-border gap-0 max-w-full [row-gap:20px] text-left text-2xl text-[#4f13d4] font-[Inter] ${className}`}
    >
      <div className="h-[42px] flex-1 rounded-[11px] bg-[#fff] border-[#bab7c2] border-solid border-[1px] box-border overflow-hidden flex items-center py-[5px] px-[15px] gap-4 min-w-[310px] max-w-[480px] mq675:max-w-full mq675:flex-1 mq450:flex-wrap">
        <div className="h-[30px] w-4 flex items-start pt-px px-0 pb-0 box-border">
          <div className="relative hidden mq450:text-[19px]">⌕</div>
        </div>
        <input
          className="w-full [border:none] [outline:none] bg-[transparent] h-[17.9px] flex-1 flex items-start pt-0 px-0 pb-[1.9px] box-border font-[Inter] text-[13px] text-[#636391] min-w-[270px] max-w-full"
          placeholder="Buscar transações, caixinhas ou categorias...⌕"
          type="text"
        />
      </div>
      <div className="flex-[1.0715] flex items-center flex-wrap content-center gap-[26px] min-w-[287px] max-w-[339px] text-sm text-[#130e33] mq675:max-w-full">
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
          <div className="h-11 w-11 relative rounded-[50%] bg-[#dbbdab]" />
          <div className="flex-1 flex flex-col items-start gap-[5px]">
            <b className="self-stretch relative">Marina Silva</b>
            <div className="self-stretch relative text-xs text-[#636391]">
              Configurações
            </div>
          </div>
          <div className="flex items-start pt-0 px-0 pb-[3.9px] text-xl">
            <h2 className="m-0 w-[11px] relative text-[length:inherit] font-normal font-[inherit] inline-block mq450:text-base">
              ⌄
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar8;
