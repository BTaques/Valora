import { FunctionComponent } from "react";

export type ConectarSuaContaModalType = {
  className?: string;
};

const ConectarSuaContaModal: FunctionComponent<ConectarSuaContaModalType> = ({
  className = "",
}) => {
  return (
    <div
      className={`w-full shadow-[0px_10px_30px_rgba(0,_0,_0,_0.16)] rounded-[19.5px] bg-[#f6f9fe] overflow-hidden flex flex-col items-center justify-center py-[4.5px] px-[30px] box-border gap-[0.8px] max-w-[780px] text-left text-[28px] text-[#120d33] font-[Inter] mq450:max-w-full ${className}`}
    >
      <div className="w-full flex items-start py-[23.6px] pl-0 pr-2 box-border gap-2 max-w-[693.8px] mq675:flex-wrap mq675:max-w-full">
        <div className="flex-1 flex flex-col items-start pt-[8.8px] px-0 pb-0 box-border gap-[13.4px] min-w-[428px] max-w-full mq675:min-w-full">
          <h2 className="m-0 self-stretch relative text-[length:inherit] font-semibold font-[inherit] mq450:text-[22px]">
            Conectar sua conta
          </h2>
          <b className="self-stretch relative text-sm text-[#5c5785]">
            Selecione a instituição financeira que deseja conectar através do
            Open Finance.
          </b>
        </div>
        <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-[28px] font-bold font-[Inter] text-[#332b59] text-left inline-block mq450:text-[22px]">
          ×
        </button>
      </div>
      <div className="w-full h-[52px] rounded-[10px] bg-[#f9f8fc] border-[#e0dbf0] border-solid border-[1px] box-border overflow-hidden shrink-0 flex items-start pt-3.5 px-[13px] pb-[18px] max-w-[693.8px] mq675:max-w-full">
        <input
          className="w-full [border:none] [outline:none] inline-block font-[Inter] text-sm bg-[transparent] h-[18px] flex-1 relative font-bold text-[#756e99] whitespace-pre-wrap text-left min-w-[250px] p-0 max-w-full"
          placeholder="⌕   Buscar instituição..."
          type="text"
        />
      </div>
      <section className="w-full flex flex-col items-start py-[25.6px] px-0 box-border gap-[19px] max-w-[693.8px] mq675:max-w-full">
        <div className="self-stretch flex items-start flex-wrap content-start py-0 pl-0 pr-[3px] gap-[21.2px]">
          <button className="cursor-pointer border-[#beb8cf] border-solid border-[1.7px] p-0 bg-[#fff] h-[121.3px] flex-1 relative rounded-xl box-border overflow-hidden min-w-[86px] shrink-0 hover:bg-[#e6e6e6] hover:border-[#8a859c] hover:border-solid hover:hover:border-[1.7px] hover:box-border">
            <img
              className="absolute top-[7.4px] left-[77.9px] rounded-[5px] w-[58px] h-12 object-cover"
              loading="lazy"
              alt=""
              src="/Official-bank-logo6@2x.png"
            />
            <b className="absolute top-[80.4px] left-[94.3px] text-[13px] inline-block font-[Inter] text-[#1f1747] text-center w-[25px] min-w-[25px]">
              Itaú
            </b>
          </button>
          <button className="cursor-pointer border-[#beb8cf] border-solid border-[1.7px] p-0 bg-[#fff] h-[121.3px] flex-1 relative rounded-xl box-border overflow-hidden min-w-[86px] shrink-0 hover:bg-[#e6e6e6] hover:border-[#8a859c] hover:border-solid hover:hover:border-[1.7px] hover:box-border">
            <img
              className="absolute top-[7.4px] left-[78.3px] rounded-[5px] w-[58px] h-12 object-cover"
              loading="lazy"
              alt=""
              src="/Official-bank-logo1@2x.png"
            />
            <b className="absolute top-[80.4px] left-[82.3px] text-[13px] inline-block font-[Inter] text-[#1f1747] text-center w-[50px] min-w-[50px]">
              Nubank
            </b>
          </button>
          <button className="cursor-pointer border-[#beb8cf] border-solid border-[1.7px] p-0 bg-[#fff] h-[121.3px] flex-1 relative rounded-xl box-border overflow-hidden min-w-[86px] shrink-0 hover:bg-[#e6e6e6] hover:border-[#8a859c] hover:border-solid hover:hover:border-[1.7px] hover:box-border">
            <img
              className="absolute top-[7.4px] left-[78.6px] rounded-[5px] w-[58px] h-12 object-cover"
              loading="lazy"
              alt=""
              src="/Official-bank-logo5@2x.png"
            />
            <b className="absolute top-[80.4px] left-[74.2px] text-[13px] inline-block font-[Inter] text-[#1f1747] text-center w-[67px] min-w-[67px]">
              Santander
            </b>
          </button>
        </div>
        <div className="self-stretch flex items-start flex-wrap content-start py-0 pl-0 pr-0.5 gap-[21.2px]">
          <button className="cursor-pointer border-[#beb8cf] border-solid border-[1.7px] pt-[5px] px-1.5 pb-[19px] bg-[#fff] h-[121.3px] flex-1 rounded-xl box-border overflow-hidden flex flex-col items-center gap-[25px] min-w-[112px] shrink-0 hover:bg-[#e6e6e6] hover:border-[#8a859c] hover:border-solid hover:hover:border-[1.7px] hover:box-border mq450:flex-1">
            <img
              className="w-[58px] relative rounded-[5px] max-h-full object-cover"
              loading="lazy"
              alt=""
              src="/Official-bank-logo4@2x.png"
            />
            <b className="self-stretch relative text-[13px] font-[Inter] text-[#1f1747] text-center">
              Banco do Brasil
            </b>
          </button>
          <button className="cursor-pointer border-[#beb8cf] border-solid border-[1.7px] p-0 bg-[#fff] h-[121.3px] flex-[1.0595] relative rounded-xl box-border overflow-hidden min-w-[86px] shrink-0 hover:bg-[#e6e6e6] hover:border-[#8a859c] hover:border-solid hover:hover:border-[1.7px] hover:box-border">
            <img
              className="absolute top-[7.9px] left-[77px] rounded-[5px] w-[58px] h-12 object-cover"
              loading="lazy"
              alt=""
              src="/Official-bank-logo3@2x.png"
            />
            <b className="absolute top-[80.9px] left-[75.6px] text-[13px] inline-block font-[Inter] text-[#1f1747] text-center w-[61px] min-w-[61px]">
              Bradesco
            </b>
          </button>
          <button className="cursor-pointer border-[#beb8cf] border-solid border-[1.7px] p-0 bg-[#fff] h-[121.3px] flex-[1.0595] relative rounded-xl box-border overflow-hidden min-w-[86px] shrink-0 hover:bg-[#e6e6e6] hover:border-[#8a859c] hover:border-solid hover:hover:border-[1.7px] hover:box-border">
            <img
              className="absolute top-[7.9px] left-[77.4px] rounded-[5px] w-[58px] h-12 object-cover"
              loading="lazy"
              alt=""
              src="/Official-bank-logo2@2x.png"
            />
            <b className="absolute top-[80.9px] left-[87.5px] text-[13px] inline-block font-[Inter] text-[#1f1747] text-center w-[38px] min-w-[38px]">
              Caixa
            </b>
          </button>
        </div>
        <div className="self-stretch flex items-start flex-wrap content-start pt-px px-0 pb-0 gap-[21.2px]">
          <button className="cursor-pointer border-[#beb8cf] border-solid border-[1.7px] p-0 bg-[#fff] h-[121.3px] flex-[1.1266] relative rounded-xl box-border overflow-hidden min-w-[86px]">
            <img
              className="absolute top-[3.4px] left-[77.9px] w-[58px] h-[58px] object-cover"
              loading="lazy"
              alt=""
              src="/merged-asset-62@2x.png"
            />
            <b className="absolute top-[80.3px] left-[79.8px] text-[13px] inline-block font-[Inter] text-[#1f1747] text-center w-[54px] min-w-[54px]">
              C6 Bank
            </b>
          </button>
          <button className="cursor-pointer border-[#beb8cf] border-solid border-[1.7px] pt-1.5 px-3 pb-[25px] bg-[#fff] h-[121.3px] flex-1 rounded-xl box-border overflow-hidden flex flex-col items-center gap-5 min-w-[79px] mq450:flex-1">
            <div className="w-14 h-[46px] rounded-lg bg-[#ff630a] overflow-hidden shrink-0 flex items-start py-[11.9px] pl-[9px] pr-5 box-border">
              <div className="relative text-xs font-semibold font-[Inter] text-[#fff] text-left">
                inter
              </div>
            </div>
            <div className="self-stretch flex items-start py-0 pl-0 pr-4">
              <b className="flex-1 relative text-[13px] font-[Inter] text-[#1f1747] text-center">
                Inter
              </b>
            </div>
          </button>
          <button className="cursor-pointer border-[#beb8cf] border-solid border-[1.7px] pt-2.5 px-[7px] pb-[19px] bg-[#fff] h-[121.3px] flex-[1.0528] rounded-xl box-border overflow-hidden flex flex-col items-start gap-8 min-w-[136px] mq450:flex-1">
            <h2 className="m-0 self-stretch relative text-3xl font-semibold font-[Inter] text-[#5224d1] text-center mq450:text-2xl mq450:text-lg">
              •••
            </h2>
            <b className="self-stretch relative text-[13px] font-[Inter] text-[#1f1747] text-center">
              Outras instituições
            </b>
          </button>
        </div>
      </section>
      <div className="w-full flex items-start py-[26.6px] px-0 box-border gap-[2.7px] max-w-[149.7px] text-[11px] text-[#807a99]">
        <b className="relative inline-block min-w-[65px]">{`Powered by `}</b>
        <div className="relative font-semibold text-[#14121f] inline-block min-w-[34px]">
          belvo.
        </div>
      </div>
    </div>
  );
};

export default ConectarSuaContaModal;
