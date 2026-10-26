import { FunctionComponent } from "react";

export type ConectarSuaContaModal2Type = {
  className?: string;
};

const ConectarSuaContaModal2: FunctionComponent<ConectarSuaContaModal2Type> = ({
  className = "",
}) => {
  return (
    <div
      className={`w-full shadow-[0px_10px_30px_rgba(0,_0,_0,_0.16)] rounded-[19.5px] bg-[#f6f9fe] overflow-hidden flex flex-col items-center pt-[86px] px-[30px] pb-[180.2px] box-border relative isolate gap-[34.1px] max-w-[780px] shrink-0 text-center text-[28px] text-[#685e79] font-[Inter] mq450:max-w-full mq450:gap-[17px] ${className}`}
    >
      <h2 className="!!m-[0 important] absolute top-[24px] right-[32.5px] text-[length:inherit] font-normal font-[inherit] inline-block min-w-[19px] z-[0] shrink-0 mq450:text-[22px]">
        ×
      </h2>
      <img
        className="w-[84px] h-[84px] relative object-cover z-[1] shrink-0"
        alt=""
        src="/merged-asset-63@2x.png"
      />
      <div className="self-stretch flex flex-col items-center gap-[25px] max-w-full shrink-0 text-[27px] text-[#241b37]">
        <h2 className="m-0 self-stretch relative text-[length:inherit] font-bold font-[inherit] mq450:text-[22px]">
          Conta conectada com sucesso!
        </h2>
        <div className="w-[550px] relative text-[15px] leading-[23px] text-[#685e79] inline-block max-w-[550px] mq675:max-w-full">
          As movimentações da sua conta estão sendo importadas para a Valora e
          serão atualizadas automaticamente.
        </div>
      </div>
      <div className="self-stretch flex flex-col items-center shrink-0">
        <button className="cursor-pointer [border:none] pt-[18px] px-0 pb-[17px] bg-[#6c34d5] w-[596px] max-w-full rounded-[10px] overflow-hidden flex items-center justify-center box-border shrink-0 hover:bg-[#9159fc]">
          <div className="flex-1 relative text-[15px] font-semibold font-[Inter] text-[#fff] text-center inline-block max-w-full">
            Ver conta conectada →
          </div>
        </button>
        <button className="cursor-pointer border-[#ddd9e4] border-solid border-[1.3px] py-[15.2px] px-0 bg-[#f9f8fb] w-[596px] max-w-full h-[50px] rounded-[10px] box-border overflow-hidden shrink-0 flex items-center justify-center hover:bg-[#e0dee0] hover:border-[#c4bfc9] hover:border-solid hover:hover:border-[1.3px] hover:box-border">
          <div className="flex-1 relative text-sm font-medium font-[Inter] text-[#241b37] text-center inline-block max-w-full">
            Voltar ao início
          </div>
        </button>
      </div>
    </div>
  );
};

export default ConectarSuaContaModal2;
