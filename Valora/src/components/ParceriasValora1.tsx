import { FunctionComponent } from "react";

export type ParceriasValora1Type = {
  className?: string;
};

const ParceriasValora1: FunctionComponent<ParceriasValora1Type> = ({
  className = "",
}) => {
  return (
    <div
      className={`w-full rounded-xl overflow-hidden flex flex-col items-start justify-center pt-[15px] px-[17px] pb-[18px] box-border gap-0.5 bg-[url('/Parcerias-Valora1@3x.png')] bg-cover bg-no-repeat bg-[top] max-w-[195px] z-[3] text-left text-xl text-[#b385ff] font-[Inter] ${className}`}
    >
      <div className="self-stretch flex items-start pt-0 px-0 pb-2.5 text-[8px]">
        <div className="flex-1 relative leading-[110%] font-semibold">
          P A R C E R I A S —
        </div>
      </div>
      <h3 className="m-0 self-stretch relative text-[length:inherit] leading-[100%] font-bold font-[inherit] text-[#fff] mq450:text-base mq450:leading-4">
        Mais benefícios
      </h3>
      <h3 className="m-0 self-stretch relative text-[length:inherit] leading-[100%] font-bold font-[inherit] mq450:text-base mq450:leading-4">
        para você.
      </h3>
      <div className="w-full flex items-start pt-px px-0 pb-16 box-border max-w-[146px] text-[10px] text-[#e6e0f5]">
        <div className="flex-1 relative leading-[135%]">
          Vantagens e ofertas de parceiros selecionados.
        </div>
      </div>
      <button className="cursor-pointer border-[rgba(255,255,255,0.8)] border-solid border-[1px] pt-[11.5px] pb-[10.5px] pl-0 pr-1 bg-[rgba(28,18,69,0.8)] self-stretch h-10 rounded-[10px] box-border overflow-hidden shrink-0 flex items-center justify-center hover:bg-[rgba(79,69,120,0.8)] hover:border-[rgba(230,230,230,0.8)] hover:border-solid hover:hover:border-[1px] hover:box-border">
        <div className="relative text-xs font-semibold font-[Inter] text-[#fff] whitespace-pre-wrap text-left">
          Saiba mais →
        </div>
      </button>
    </div>
  );
};

export default ParceriasValora1;
