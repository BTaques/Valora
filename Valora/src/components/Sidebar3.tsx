import { FunctionComponent } from "react";

export type Sidebar3Type = {
  className?: string;
};

const Sidebar3: FunctionComponent<Sidebar3Type> = ({ className = "" }) => {
  return (
    <section
      className={`h-[1024px] w-[232px] bg-[#130930] overflow-hidden shrink-0 flex flex-col items-center py-0 px-3.5 box-border gap-2.5 z-[0] text-left text-[25px] text-[#fff] font-[Inter] mq450:hidden ${className}`}
    >
      <div className="w-full flex items-center pt-[27px] px-0 pb-[43px] box-border gap-1 max-w-[164.2px]">
        <img
          className="cursor-pointer [border:none] p-0 bg-[transparent] h-[33px] w-10 relative object-cover"
          alt=""
          src="/logo-branco-3@2x.png"
        />
        <h2 className="m-0 relative text-[length:inherit] font-semibold font-[inherit] mq450:text-xl">
          Valora
        </h2>
      </div>
      <button className="cursor-pointer border-[rgba(204,184,245,0.18)] border-solid border-[1px] py-2.5 px-[17px] bg-[transparent] self-stretch h-12 rounded-[9px] box-border overflow-hidden shrink-0 flex items-center gap-[15px]">
        <div className="h-[22.9px] flex items-start pt-0 px-0 pb-[7.9px] box-border shrink-0">
          <img
            className="h-[25px] w-[25px] relative shrink-0"
            loading="lazy"
            alt=""
            src="/Frame.svg"
          />
        </div>
        <div className="flex-1 relative text-sm font-[Inter] text-[#f2f0ff] text-left shrink-0">
          Início
        </div>
      </button>
      <button className="cursor-pointer border-[rgba(204,184,245,0.18)] border-solid border-[1px] py-[11px] px-3.5 bg-[transparent] self-stretch h-12 rounded-[9px] box-border overflow-hidden shrink-0 flex items-center gap-[19px] hover:bg-[rgba(153,133,194,0.09)] hover:border-[rgba(153,133,194,0.18)] hover:border-solid hover:hover:border-[1px] hover:box-border">
        <img
          className="h-6 w-6 relative"
          loading="lazy"
          alt=""
          src="/Movimenta-es-icon.svg"
        />
        <div className="flex-1 relative text-sm font-[Inter] text-[#f2f0ff] text-left">
          Movimentações
        </div>
      </button>
      <button className="cursor-pointer border-[rgba(204,184,245,0.18)] border-solid border-[1px] py-[11px] px-3.5 bg-[transparent] self-stretch h-12 rounded-[9px] box-border overflow-hidden shrink-0 flex items-center gap-[19px] hover:bg-[rgba(153,133,194,0.09)] hover:border-[rgba(153,133,194,0.18)] hover:border-solid hover:hover:border-[1px] hover:box-border">
        <img
          className="h-6 w-6 relative"
          loading="lazy"
          alt=""
          src="/Archive-Caixinhas.svg"
        />
        <div className="flex-1 relative text-sm font-[Inter] text-[#f2f0ff] text-left">
          Caixinhas
        </div>
      </button>
      <button className="cursor-pointer border-[rgba(204,184,245,0.18)] border-solid border-[1px] py-2.5 px-[17px] bg-[transparent] self-stretch h-12 rounded-[9px] box-border overflow-hidden shrink-0 flex items-center gap-[15px]">
        <div className="h-[26px] flex items-start pt-px px-0 pb-0 box-border">
          <img
            className="h-[25px] w-[25px] relative"
            loading="lazy"
            alt=""
            src="/Frame13.svg"
          />
        </div>
        <div className="flex-1 relative text-sm font-[Inter] text-[#f2f0ff] text-left">
          Categorias
        </div>
      </button>
      <button className="cursor-pointer [border:none] pt-0 px-0 pb-[311px] bg-[transparent] self-stretch flex items-start mq450:pb-[202px] mq450:box-border">
        <div className="h-12 flex-1 rounded-[9px] border-[rgba(204,184,245,0.18)] border-solid border-[1px] box-border overflow-hidden flex items-center justify-center py-[11px] px-3.5 gap-[19px]">
          <img
            className="h-6 w-6 relative"
            loading="lazy"
            alt=""
            src="/Contas-conectadas-icon.svg"
          />
          <div className="flex-1 relative text-sm font-[Inter] text-[#f2f0ff] text-left">
            Contas conectadas
          </div>
        </div>
      </button>
      <div className="w-full h-[188px] rounded-[13px] bg-[#261259] border-[rgba(140,92,230,0.7)] border-solid border-[1px] box-border overflow-hidden shrink-0 flex flex-col items-start pt-[15px] pb-[26px] pl-[17px] pr-[43px] gap-[13px] max-w-[192px] text-lg">
        <button className="cursor-pointer [border:none] py-[5px] pl-[13px] pr-[15px] bg-[#6b29e8] w-[58px] h-[25px] rounded-xl overflow-hidden shrink-0 flex items-center justify-center box-border hover:bg-[#914fff]">
          <div className="relative text-xs font-[Inter] text-[#fff] text-left">
            Novo
          </div>
        </button>
        <div className="w-full flex items-start pt-0 px-0 pb-[3px] box-border max-w-[127px]">
          <div className="flex-1 relative font-semibold inline-block max-w-[127px]">
            Conecte sua
            <br />
            conta bancária
          </div>
        </div>
        <div className="w-full h-[49px] relative text-[13px] text-[#ebe3ff] whitespace-pre-wrap inline-block max-w-[130px]">
          Importe suas
          <br />
          movimentações
          <br />
          automaticamente. →
        </div>
      </div>
    </section>
  );
};

export default Sidebar3;
