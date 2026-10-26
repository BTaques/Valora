import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";

export type Sidebar6Type = {
  className?: string;
};

const Sidebar6: FunctionComponent<Sidebar6Type> = ({ className = "" }) => {
  const navigate = useNavigate();

  const onIncioNavContainerClick = useCallback(() => {
    navigate("/02-incio");
  }, [navigate]);

  const onMovimentaesNavContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onCaixinhasNavContainerClick = useCallback(() => {
    navigate("/04-caixinhas");
  }, [navigate]);

  const onContasConectadasNavClick = useCallback(() => {
    navigate("/07-conectar-conta");
  }, [navigate]);

  return (
    <section
      className={`h-[1024px] w-[232px] bg-[#130938] overflow-hidden shrink-0 flex flex-col items-center py-0 px-[13px] box-border gap-0.5 text-left text-sm text-[#fff] font-[Inter] mq450:hidden ${className}`}
    >
      <div className="flex items-center pt-[31px] pb-[38.1px] pl-0 pr-[37px] box-border gap-0.5 max-w-[162.3px] text-[27px]">
        <div className="h-[35.9px] flex items-start pt-0 px-0 pb-[2.9px] box-border">
          <img
            className="h-[33px] w-10 relative object-cover"
            alt=""
            src="/logo-branco-3@2x.png"
          />
        </div>
        <h2 className="m-0 relative text-[length:inherit] font-semibold font-[inherit] mq450:text-[22px]">
          Valora
        </h2>
      </div>
      <div className="self-stretch flex items-start pt-0 px-0 pb-0.5 text-[22px]">
        <div
          className="h-[54px] flex-1 rounded-[10px] border-[rgba(219,209,245,0.28)] border-solid border-[1px] box-border overflow-hidden flex items-center pt-[11px] px-[15px] pb-3.5 gap-[30px] cursor-pointer"
          onClick={onIncioNavContainerClick}
        >
          <h3 className="m-0 relative text-[length:inherit] font-normal font-[inherit] inline-block min-w-[16px] mq450:text-lg">
            ⌂
          </h3>
          <div className="relative text-sm">Início</div>
        </div>
      </div>
      <div className="self-stretch flex items-start pt-0 px-0 pb-0.5">
        <div
          className="h-[54px] flex-1 rounded-[10px] border-[rgba(219,209,245,0.28)] border-solid border-[1px] box-border overflow-hidden flex items-start p-3.5 gap-[22px] cursor-pointer"
          onClick={onMovimentaesNavContainerClick}
        >
          <img
            className="h-6 w-6 relative"
            alt=""
            src="/Movimenta-es-icon.svg"
          />
          <div className="flex-1 flex items-start pt-[1.9px] px-0 pb-0">
            <div className="flex-1 relative">Movimentações</div>
          </div>
        </div>
      </div>
      <div className="self-stretch flex items-start pt-0 px-0 pb-0.5">
        <div
          className="h-[54px] flex-1 rounded-[10px] border-[rgba(219,209,245,0.28)] border-solid border-[1px] box-border overflow-hidden flex items-start p-3.5 gap-[22px] cursor-pointer"
          onClick={onCaixinhasNavContainerClick}
        >
          <img
            className="h-6 w-6 relative"
            alt=""
            src="/Archive-Caixinhas.svg"
          />
          <div className="flex-1 flex items-start pt-[1.9px] px-0 pb-0">
            <div className="flex-1 relative">Caixinhas</div>
          </div>
        </div>
      </div>
      <div className="self-stretch rounded-[10px] [background:linear-gradient(90deg,_#4214a6,_#661fe8)] overflow-hidden flex items-center pt-3.5 px-4 pb-[17px] gap-5">
        <img className="h-[25px] w-[25px] relative" alt="" src="/Frame13.svg" />
        <div className="flex-1 relative font-medium">Categorias</div>
      </div>
      <div className="self-stretch flex items-start pt-0 px-0 pb-[321px] mq450:pb-[209px] mq450:box-border">
        <div
          className="h-[54px] flex-1 rounded-[10px] border-[rgba(219,209,245,0.28)] border-solid border-[1px] box-border overflow-hidden flex items-start justify-center p-3.5 gap-[22px] cursor-pointer"
          onClick={onContasConectadasNavClick}
        >
          <img
            className="h-6 w-6 relative"
            alt=""
            src="/Contas-conectadas-icon.svg"
          />
          <div className="flex-1 flex items-start pt-[1.9px] px-0 pb-0">
            <div className="flex-1 relative">Contas conectadas</div>
          </div>
        </div>
      </div>
      <div className="w-full flex items-start py-0 pl-px pr-0 box-border max-w-[199.8px] text-[8px]">
        <div className="flex-1 rounded-[10px] overflow-hidden flex flex-col items-start pt-3 pb-[182px] pl-2.5 pr-14 bg-[url('/public/Promo2@3x.png')] bg-cover bg-no-repeat bg-[top]">
          <div className="self-stretch flex items-start pt-0 px-0 pb-[5px] text-[#b385ff]">
            <div className="flex-1 relative leading-[110%] font-semibold whitespace-pre-wrap">{`C O N T R O L E  —  `}</div>
          </div>
          <div className="w-full relative text-xs font-semibold inline-block max-w-[130px]">
            <span>
              Entenda melhor como <br />
            </span>
            <span className="text-[#b285ff]">você gasta.</span>
          </div>
          <div className="self-stretch relative text-[10px] font-light">
            Organize seus gastos.
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sidebar6;
