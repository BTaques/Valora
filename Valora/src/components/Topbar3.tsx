import { FunctionComponent } from "react";

export type Topbar3Type = {
  className?: string;
};

const Topbar3: FunctionComponent<Topbar3Type> = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch bg-[#f4f4fe] overflow-hidden flex items-start justify-between flex-wrap content-start pt-[13px] px-[34px] pb-4 box-border gap-0 max-w-full [row-gap:20px] text-left text-2xl text-[#4f13d4] font-[Inter] ${className}`}
    >
      <div className="h-[42px] flex-1 rounded-[11px] bg-[#fff] border-[#bab7c2] border-solid border-[1px] box-border overflow-hidden flex items-center py-[5px] px-[15px] gap-4 min-w-[310px] max-w-[480px] mq675:max-w-full mq675:flex-1 mq450:flex-wrap">
        <div className="h-[26px] flex items-start pt-px px-0 pb-0 box-border shrink-0">
          <h3 className="m-0 relative text-[length:inherit] font-normal font-[inherit] shrink-0 mq450:text-[19px]">
            ⌕
          </h3>
        </div>
        <div className="h-[26px] flex items-start pt-px px-0 pb-0 box-border shrink-0 text-[13px] text-[#636391]">
          <div className="flex-1 relative shrink-0">
            Buscar transações, caixinhas ou categorias...
          </div>
        </div>
      </div>
      <div className="flex-[1.0715] flex items-center flex-wrap content-center gap-[26px] min-w-[287px] max-w-[339px] text-sm text-[#130e33] mq675:max-w-full">
        <button className="cursor-pointer [border:none] pt-0 px-0 pb-[311px] bg-[transparent] self-stretch flex items-start shrink-0 mq450:pb-[202px] mq450:box-border">
          <img
            className="h-6 w-6 relative shrink-0"
            loading="lazy"
            alt=""
            src="/Headset.svg"
          />
        </button>
        <div className="w-[580px] max-w-[580px] flex items-start pt-0 px-0 pb-[15px] box-border shrink-0 mq675:max-w-full">
          <img
            className="h-[25px] w-[22px] relative shrink-0"
            loading="lazy"
            alt=""
            src="/merged-asset-11.svg"
          />
        </div>
        <div className="flex-1 flex items-center py-0 pl-[19px] pr-0 box-border gap-[15.9px] min-w-[189px] shrink-0">
          <div className="h-11 w-11 relative rounded-[50%] bg-[#dbbdab] shrink-0" />
          <div className="flex-1 flex flex-col items-start gap-[5px] shrink-0">
            <b className="self-stretch relative">Marina Silva</b>
            <div className="self-stretch relative text-xs text-[#636391]">
              Configurações
            </div>
          </div>
          <div className="w-full flex items-start pt-0 px-0 pb-[3px] box-border max-w-[127px] shrink-0 text-xl">
            <h3 className="m-0 relative text-[length:inherit] font-normal font-[inherit] shrink-0 mq450:text-base">
              ⌄
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar3;
