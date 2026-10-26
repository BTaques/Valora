import { FunctionComponent } from "react";

export type ConectarSuaContaModal1Type = {
  className?: string;
};

const ConectarSuaContaModal1: FunctionComponent<ConectarSuaContaModal1Type> = ({
  className = "",
}) => {
  return (
    <div
      className={`w-full shadow-[0px_10px_30px_rgba(0,_0,_0,_0.16)] rounded-[19.5px] bg-[#f6f9fe] overflow-hidden flex flex-col items-center pt-[24.1px] px-0 pb-[57.2px] box-border gap-[19px] max-w-[780px] text-center text-[28px] text-[#685e79] font-[Inter] mq450:max-w-full ${className}`}
    >
      <div className="w-full flex flex-col items-end pt-0 pb-[1.8px] pl-[328px] pr-0 box-border isolate max-w-[716.2px] mq675:pl-[164px] mq675:box-border mq675:max-w-full mq450:pl-5 mq450:box-border">
        <h2 className="m-0 relative text-[length:inherit] font-normal font-[inherit] z-[1] mq450:text-[22px]">
          ×
        </h2>
        <div className="self-stretch flex flex-col items-center z-[4] mt-[-3.9px] relative text-[17px] text-[#241b37]">
          <div className="w-full flex flex-col items-start max-w-[387.3px] mq450:max-w-full">
            <div className="w-full flex flex-col items-center gap-2.5 max-w-[58.9px]">
              <img
                className="self-stretch relative rounded-[5px] max-w-full overflow-hidden max-h-full object-cover z-[2]"
                loading="lazy"
                alt=""
                src="/Official-bank-logo7@2x.png"
              />
              <div className="self-stretch relative font-semibold z-[1]">
                Itaú
              </div>
            </div>
          </div>
        </div>
      </div>
      <h2 className="m-0 self-stretch relative text-[26px] font-bold font-[inherit] text-[#241b37] mq450:text-[21px]">
        Autorizar no banco
      </h2>
      <div className="w-full flex items-start pt-0 px-0 pb-[15px] box-border max-w-[580px] text-[15px] mq675:max-w-full">
        <div className="flex-1 relative leading-[23px] inline-block max-w-full">
          Você será redirecionado para o ambiente seguro do Itaú para autorizar
          o compartilhamento dos dados da sua conta e movimentações com a Valora
          através do Open Finance.
        </div>
      </div>
      <div className="w-full rounded-xl bg-[#f2edfc] border-[#ded3f4] border-solid border-[1px] box-border overflow-hidden flex items-center justify-center pt-[13px] px-[21px] pb-[42.9px] gap-[15.9px] max-w-[596px] text-left text-sm text-[#241b37] mq675:flex-wrap mq675:max-w-full">
        <img
          className="cursor-pointer [border:none] p-0 bg-[transparent] h-[38px] w-[38px] relative rounded-[19px]"
          alt=""
          src="/Security-icon.svg"
        />
        <div className="flex-1 flex flex-col items-start pt-[6.1px] px-0 pb-0 box-border gap-3 min-w-[324px] max-w-full">
          <div className="self-stretch relative font-semibold">
            Seus dados continuam protegidos
          </div>
          <div className="self-stretch relative text-[13px] leading-[19px] text-[#685e79]">
            A Valora não recebe sua senha nem seus dados de acesso ao banco.
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-center pt-[13.1px] px-[30px] pb-[40.9px] box-border gap-3.5 max-w-full">
        <button className="cursor-pointer [border:none] py-[18px] px-0 bg-[#6c34d5] w-full rounded-[10px] overflow-hidden flex items-center justify-center box-border max-w-[597.6px] hover:bg-[#915cfc] mq675:max-w-full">
          <div className="flex-1 relative text-[15px] font-semibold font-[Inter] text-[#fff] text-center inline-block max-w-full">
            Continuar para o Itaú →
          </div>
        </button>
        <button className="cursor-pointer border-[#ddd9e4] border-solid border-[1.3px] py-[15.2px] px-0 bg-[#f9f8fb] w-full h-[50px] rounded-[10px] box-border overflow-hidden shrink-0 flex items-center justify-center max-w-[597.6px] hover:bg-[#e0dee0] hover:border-[#c4bfc9] hover:border-solid hover:hover:border-[1.3px] hover:box-border mq675:max-w-full">
          <div className="flex-1 relative text-sm font-medium font-[Inter] text-[#241b37] text-center inline-block max-w-full">
            Cancelar
          </div>
        </button>
      </div>
      <div className="self-stretch relative text-xs text-[#8b8397]">
        Powered by belvo.
      </div>
    </div>
  );
};

export default ConectarSuaContaModal1;
