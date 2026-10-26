import { FunctionComponent } from "react";

export type PerfilDropdownType = {
  className?: string;
};

const PerfilDropdown: FunctionComponent<PerfilDropdownType> = ({
  className = "",
}) => {
  return (
    <section
      className={`h-[574px] flex-1 rounded-[9px] bg-[#fff] border-[#e3e6f2] border-solid border-[1px] box-border overflow-hidden flex flex-col items-start justify-center py-[13px] px-3.5 relative isolate gap-[15px] min-w-[298px] max-w-[300px] text-left text-xs text-[#140d40] font-[Inter] mq675:max-w-full mq450:flex-1 ${className}`}
    >
      <div className="self-stretch flex items-center py-2 px-[3px] gap-[11.9px] z-[0] shrink-0 text-sm">
        <div className="h-[50px] w-[50px] relative rounded-[50%] bg-[#ccad94]" />
        <div className="flex-1 flex flex-col items-start gap-1.5">
          <div className="self-stretch relative font-semibold">
            Marina Silva
          </div>
          <div className="self-stretch relative text-[11px] text-[#595291]">
            marina@email.com
          </div>
        </div>
      </div>
      <div className="self-stretch flex items-center pt-2.5 px-2 pb-2 gap-[9px] shrink-0">
        <img className="h-5 w-5 relative" alt="" src="/Frame12.svg" />
        <div className="relative font-medium">Agência 0123 · Conta 0001</div>
      </div>
      <div className="self-stretch rounded-lg bg-[#f2edff] overflow-hidden flex items-start py-[17px] pl-[17px] pr-2.5 gap-3.5 shrink-0 z-[2] text-[#5712d6]">
        <img
          className="h-[22px] w-[22px] relative"
          alt=""
          src="/Icon-Container.svg"
        />
        <div className="flex-1 flex items-start pt-[2.9px] px-0 pb-0">
          <div className="flex-1 relative font-semibold">Conta Valora</div>
        </div>
        <h3 className="m-0 relative text-[22px] font-normal font-[inherit] text-[#140d40] mq450:text-lg">
          ›
        </h3>
      </div>
      <div className="self-stretch flex items-center pt-2.5 pb-[5px] pl-2.5 pr-1.5 gap-2 z-[3] shrink-0">
        <div className="flex-1 flex items-start gap-[8.9px]">
          <div className="h-[23.9px] flex items-start pt-[1.9px] px-0 pb-0 box-border">
            <img
              className="h-[22px] w-[22px] relative"
              alt=""
              src="/Data-Container.svg"
            />
          </div>
          <div className="flex-1 flex flex-col items-start gap-[7px]">
            <div className="self-stretch relative font-medium">Meus dados</div>
            <div className="self-stretch relative text-[10px] text-[#595291]">
              Nome, telefone e e-mail
            </div>
          </div>
        </div>
        <div className="h-[25.9px] flex items-start pt-[1.9px] px-0 pb-0 box-border text-xl">
          <h3 className="m-0 relative text-[length:inherit] font-normal font-[inherit] mq450:text-base">
            ›
          </h3>
        </div>
      </div>
      <div className="self-stretch h-px relative bg-[#e6e8f2] z-[4] shrink-0" />
      <div className="self-stretch flex items-center pt-0 pb-[5px] pl-2.5 pr-1.5 gap-2 z-[5] shrink-0">
        <div className="flex-1 flex items-start gap-[8.9px]">
          <div className="h-[23.9px] flex items-start pt-[1.9px] px-0 pb-0 box-border">
            <img
              className="h-[22px] w-[22px] relative"
              alt=""
              src="/Frame18.svg"
            />
          </div>
          <div className="flex-1 flex flex-col items-start gap-[7px]">
            <div className="self-stretch relative font-medium">Segurança</div>
            <div className="self-stretch relative text-[10px] text-[#595291]">
              Senha, biometria e acesso
            </div>
          </div>
        </div>
        <div className="h-[25.9px] flex items-start pt-[1.9px] px-0 pb-0 box-border text-xl">
          <h3 className="m-0 relative text-[length:inherit] font-normal font-[inherit] mq450:text-base">
            ›
          </h3>
        </div>
      </div>
      <div className="self-stretch h-px relative bg-[#e6e8f2] z-[6] shrink-0" />
      <img
        className="w-6 h-6 absolute !!m-[0 important] top-[calc(50%_+_81px)] left-[7px] z-[9] shrink-0"
        alt=""
        src="/Headset.svg"
      />
      <div className="self-stretch flex items-center pt-0 pb-[5px] pl-2.5 pr-1.5 gap-2 shrink-0">
        <div className="flex-1 flex items-start gap-[8.9px]">
          <div className="h-[23.9px] flex items-start pt-[1.9px] px-0 pb-0 box-border">
            <img
              className="h-[22px] w-[22px] relative"
              alt=""
              src="/Frame14.svg"
            />
          </div>
          <div className="flex-1 flex flex-col items-start gap-[7px]">
            <div className="self-stretch relative font-medium">
              Notificações
            </div>
            <div className="self-stretch relative text-[10px] text-[#595291]">
              Gerencie seus alertas
            </div>
          </div>
        </div>
        <div className="h-[25.9px] flex items-start pt-[1.9px] px-0 pb-0 box-border text-xl">
          <h3 className="m-0 relative text-[length:inherit] font-normal font-[inherit] mq450:text-base">
            ›
          </h3>
        </div>
      </div>
      <div className="self-stretch h-px relative bg-[#e6e8f2] z-[9] shrink-0" />
      <div className="self-stretch flex items-center pt-0 pb-[5px] pl-2.5 pr-1.5 gap-2 shrink-0">
        <div className="flex-1 flex items-start gap-[8.9px]">
          <div className="h-[23.9px] flex items-start pt-[1.9px] px-0 pb-0 box-border">
            <img
              className="h-[22px] w-[22px] relative"
              alt=""
              src="/Frame141.svg"
            />
          </div>
          <div className="flex-1 flex flex-col items-start gap-[7px]">
            <div className="self-stretch relative font-medium">
              Preferências
            </div>
            <div className="self-stretch relative text-[10px] text-[#595291]">
              Tema, idioma e visualização
            </div>
          </div>
        </div>
        <div className="h-[25.9px] flex items-start pt-[1.9px] px-0 pb-0 box-border text-xl">
          <h3 className="m-0 relative text-[length:inherit] font-normal font-[inherit] mq450:text-base">
            ›
          </h3>
        </div>
      </div>
      <div className="self-stretch h-px relative bg-[#e6e8f2] z-[11] shrink-0" />
      <button className="cursor-pointer [border:none] py-3 px-2.5 bg-[transparent] self-stretch flex items-center gap-[9px] z-[12] shrink-0">
        <img className="h-[22px] w-[22px] relative" alt="" src="/Frame15.svg" />
        <div className="relative text-xs font-medium font-[Inter] text-[#f20f17] text-left">
          Sair da conta
        </div>
      </button>
    </section>
  );
};

export default PerfilDropdown;
