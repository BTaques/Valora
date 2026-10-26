import { FunctionComponent } from "react";

export type ParceriasValoraType = {
  className?: string;
};

const ParceriasValora: FunctionComponent<ParceriasValoraType> = ({
  className = "",
}) => {
  return (
    <div
      className={`w-full rounded-xl overflow-hidden flex flex-col items-start justify-center pt-[15px] px-4 pb-[18px] box-border bg-[url('/public/Parcerias-Valora@3x.png')] bg-cover bg-no-repeat bg-[top] max-w-[195px] z-[4] text-left text-base text-[#b385ff] font-[Inter] ${className}`}
    >
      <div className="self-stretch flex items-start pt-0 px-0 pb-1.5 text-[8px]">
        <div className="flex-1 relative leading-[110%] font-semibold whitespace-pre-wrap">
          F A C I L I D A D E — N O V O
        </div>
      </div>
      <div className="self-stretch flex items-start pt-0 px-0 pb-1 text-[#fff]">
        <h3 className="m-0 flex-1 relative text-[length:inherit] leading-[100%] font-bold font-[inherit]">{`Vincule sua conta `}</h3>
      </div>
      <h3 className="m-0 self-stretch relative text-[length:inherit] leading-[100%] font-bold font-[inherit]">
        bancária.
      </h3>
      <div className="w-full flex items-start pt-0 px-0 pb-[53px] box-border max-w-[146px] text-[10px] text-[#e6e0f5]">
        <div className="flex-1 relative leading-[135%]">
          Facilite o acompanhamento das suas finanças com movimentações
          atualizadas automaticamente.
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

export default ParceriasValora;
