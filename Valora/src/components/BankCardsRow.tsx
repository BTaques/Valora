import { FunctionComponent } from "react";

export type BankCardsRowType = {
  className?: string;
};

const BankCardsRow: FunctionComponent<BankCardsRowType> = ({
  className = "",
}) => {
  return (
    <div
      className={`self-stretch flex items-center justify-center flex-wrap content-center py-[21px] px-0 gap-3 ${className}`}
    >
      <button className="cursor-pointer border-[#d6d1e8] border-solid border-[1px] p-0 bg-[#fff] h-[142px] flex-[1.0689] relative rounded-[10px] box-border overflow-hidden min-w-[50px] hover:bg-[#e6e6e6] hover:border-[#bdb8cf] hover:border-solid hover:hover:border-[1px] hover:box-border">
        <div className="absolute top-[75px] left-[52px] text-[11px] font-[Inter] text-[#0e0b2e] text-center inline-block w-5 min-w-[20px]">
          Itaú
        </div>
        <img
          className="absolute top-[12px] left-[40px] rounded-[5px] w-11 h-11 object-cover"
          alt=""
          src="/Official-bank-logo@2x.png"
        />
      </button>
      <button className="cursor-pointer border-[#d6d1e8] border-solid border-[1px] pt-4 px-1 pb-[51px] bg-[#fff] flex-1 rounded-[10px] box-border overflow-hidden flex flex-col items-center gap-[19px] min-w-[51px] hover:bg-[#e6e6e6] hover:border-[#bdb8cf] hover:border-solid hover:hover:border-[1px] hover:box-border mq450:flex-1">
        <img
          className="w-11 h-10 relative rounded-[5px] object-cover"
          alt=""
          src="/Official-bank-logo1@2x.png"
        />
        <div className="self-stretch relative text-[11px] font-[Inter] text-[#0e0b2e] text-center">
          Nubank
        </div>
      </button>
      <button className="cursor-pointer border-[#d6d1e8] border-solid border-[1px] pt-4 px-0 pb-[51px] bg-[#fff] flex-[1.0689] rounded-[10px] box-border overflow-hidden flex flex-col items-center gap-[19px] min-w-[54px] hover:bg-[#e6e6e6] hover:border-[#bdb8cf] hover:border-solid hover:hover:border-[1px] hover:box-border">
        <img
          className="w-11 h-10 relative rounded-[5px] object-cover"
          alt=""
          src="/Official-bank-logo5@2x.png"
        />
        <div className="relative text-[11px] font-[Inter] text-[#0e0b2e] text-center">
          Santander
        </div>
      </button>
      <button className="cursor-pointer border-[#d6d1e8] border-solid border-[1px] pt-4 px-[3px] pb-[51px] bg-[#fff] flex-[1.0172] rounded-[10px] box-border overflow-hidden flex flex-col items-center gap-[19px] min-w-[88px] hover:bg-[#e6e6e6] hover:border-[#bdb8cf] hover:border-solid hover:hover:border-[1px] hover:box-border mq450:flex-1">
        <img
          className="w-11 h-10 relative rounded-[5px] object-cover"
          alt=""
          src="/Official-bank-logo4@2x.png"
        />
        <div className="self-stretch relative text-[11px] font-[Inter] text-[#0e0b2e] text-center inline-block w-[117.3px]">
          Banco do Brasil
        </div>
      </button>
      <button className="cursor-pointer border-[#d6d1e8] border-solid border-[1px] pt-4 px-1 pb-[51px] bg-[#fff] flex-1 rounded-[10px] box-border overflow-hidden flex flex-col items-center gap-[19px] min-w-[57px] hover:bg-[#e6e6e6] hover:border-[#bdb8cf] hover:border-solid hover:hover:border-[1px] hover:box-border mq450:flex-1">
        <img
          className="w-11 h-10 relative rounded-[5px] object-cover"
          alt=""
          src="/Official-bank-logo3@2x.png"
        />
        <div className="self-stretch relative text-[11px] font-[Inter] text-[#0e0b2e] text-center inline-block w-[115.4px]">
          Bradesco
        </div>
      </button>
      <button className="cursor-pointer border-[#d6d1e8] border-solid border-[1px] p-0 bg-[#fff] h-[142px] flex-[1.0689] relative rounded-[10px] box-border overflow-hidden min-w-[50px] hover:bg-[#e6e6e6] hover:border-[#bdb8cf] hover:border-solid hover:hover:border-[1px] hover:box-border">
        <div className="absolute top-[75px] left-[47.5px] text-[11px] font-[Inter] text-[#0e0b2e] text-center inline-block w-[29px] min-w-[29px]">
          Caixa
        </div>
        <img
          className="absolute top-[16px] left-[40px] rounded-[5px] w-11 h-10 object-cover"
          alt=""
          src="/Official-bank-logo2@2x.png"
        />
      </button>
      <button className="cursor-pointer border-[#d6d1e8] border-solid border-[1px] pt-3.5 px-1 pb-[51px] bg-[#fff] flex-1 rounded-[10px] box-border overflow-hidden flex flex-col items-center gap-[17px] min-w-[52px] mq450:flex-1">
        <img className="w-11 h-11 relative" alt="" src="/merged-asset-52.svg" />
        <div className="self-stretch relative text-[11px] font-[Inter] text-[#0e0b2e] text-center inline-block w-[115.1px]">
          C6 Bank
        </div>
      </button>
      <button className="cursor-pointer border-[#d6d1e8] border-solid border-[1px] pt-3.5 px-0 pb-[51px] bg-[#fff] flex-[1.0689] rounded-[10px] box-border overflow-hidden flex flex-col items-center gap-[13px] min-w-[100px] hover:bg-[#e6e6e6] hover:border-[#bdb8cf] hover:border-solid hover:hover:border-[1px] hover:box-border">
        <img
          className="w-12 h-12 relative"
          alt=""
          src="/Institution-icon.svg"
        />
        <div className="relative text-[11px] font-[Inter] text-[#0e0b2e] text-center inline-block min-w-[100px]">
          Outras instituições
        </div>
      </button>
    </div>
  );
};

export default BankCardsRow;
