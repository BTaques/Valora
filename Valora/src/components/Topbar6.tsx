import { FunctionComponent } from "react";

export type Topbar6Type = {
  className?: string;
};

const Topbar6: FunctionComponent<Topbar6Type> = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch bg-[#f4f4fe] overflow-hidden flex items-center justify-center flex-wrap content-center pt-[13px] px-[30px] pb-4 box-border gap-x-[46.1px] gap-y-2.5 max-w-full text-left text-2xl text-[#4f13d4] font-[Inter] mq675:gap-[23px] ${className}`}
    >
      <div className="h-[42px] flex-1 rounded-[11px] bg-[#fff] border-[#bab7c2] border-solid border-[1px] box-border overflow-hidden flex items-center py-[5px] px-[15px] gap-4 min-w-[310px] max-w-[480px] shrink-0 mq675:max-w-full mq675:flex-1 mq450:flex-wrap">
        <div className="flex items-start pt-0 px-0 pb-[3.9px] shrink-0">
          <div className="relative shrink-0 mq450:text-[19px]">⌕</div>
        </div>
        <div className="h-[25.9px] flex items-start pt-0 px-0 pb-[1.9px] box-border shrink-0 text-[13px] text-[#636391]">
          <div className="flex-1 relative shrink-0">
            Buscar transações, caixinhas ou categorias...
          </div>
        </div>
      </div>
      <div className="flex-[1.0715] flex items-start justify-end py-[9px] px-0 box-border gap-[26px] min-w-[72px] max-w-[343px] shrink-0">
        <img
          className="cursor-pointer [border:none] p-0 bg-[transparent] h-6 w-6 relative shrink-0"
          alt=""
          src="/Headset.svg"
        />
        <button
          className="cursor-pointer [border:none] pt-[2.8px] px-0 pb-0 bg-[transparent] h-[44.8px] flex items-start box-border shrink-0"
          type="submit"
        >
          <img
            className="h-[25px] w-[22px] relative shrink-0"
            loading="lazy"
            alt=""
            src="/merged-asset-11.svg"
          />
        </button>
      </div>
      <div className="w-[1108px] flex flex-col items-center pt-2 px-0 pb-0 box-border gap-3.5 shrink-0 text-sm text-[#130e33]">
        <button className="cursor-pointer [border:none] p-0 bg-[#dbbdab] h-11 w-11 relative rounded-[50%] shrink-0" />
        <div className="flex-1 flex flex-col items-start gap-[5px] shrink-0">
          <h3 className="m-0 self-stretch relative text-[length:inherit] font-bold font-[inherit]">
            Marina Silva
          </h3>
          <div className="self-stretch relative text-xs text-[#636391]">
            Configurações
          </div>
        </div>
        <div className="h-[27.9px] flex items-start pt-[2.9px] px-0 pb-0 box-border shrink-0 text-xl">
          <h1 className="m-0 w-[11px] relative text-[length:inherit] font-normal font-[inherit] inline-block shrink-0 mq450:text-base">
            ⌄
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Topbar6;
