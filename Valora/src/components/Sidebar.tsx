import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";

export type SidebarType = {
  className?: string;
};

const Sidebar: FunctionComponent<SidebarType> = ({ className = "" }) => {
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

  const onCategoriasNavContainerClick = useCallback(() => {
    navigate("/06-categorias");
  }, [navigate]);

  return (
    <section
      className={`h-[1024px] w-[232px] bg-[#130930] overflow-hidden shrink-0 flex flex-col items-center py-0 px-3.5 box-border gap-2.5 text-left text-sm text-[#f2f0ff] font-[Inter] mq450:hidden ${className}`}
    >
      <div className="w-full flex items-center pt-[27px] px-0 pb-[43px] box-border gap-1 max-w-[164.2px] shrink-0 text-[25px] text-[#fff]">
        <img
          className="h-[33px] w-10 relative object-cover"
          alt=""
          src="/logo-branco-3@2x.png"
        />
        <h2 className="m-0 relative text-[length:inherit] font-semibold font-[inherit] mq450:text-xl">
          Valora
        </h2>
      </div>
      <div
        className="self-stretch h-12 rounded-[9px] border-[rgba(204,184,245,0.18)] border-solid border-[1px] box-border overflow-hidden shrink-0 flex items-center py-2.5 px-[17px] gap-[15px] cursor-pointer"
        onClick={onIncioNavContainerClick}
      >
        <div className="h-[45.9px] flex items-start pt-0 px-0 pb-[3.9px] box-border shrink-0">
          <img
            className="h-[25px] w-[25px] relative shrink-0"
            alt=""
            src="/Frame.svg"
          />
        </div>
        <div className="flex-1 relative shrink-0">Início</div>
      </div>
      <div
        className="self-stretch h-12 rounded-[9px] border-[rgba(204,184,245,0.18)] border-solid border-[1px] box-border overflow-hidden shrink-0 flex items-center py-[11px] px-3.5 gap-[19px] cursor-pointer"
        onClick={onMovimentaesNavContainerClick}
      >
        <img className="h-6 w-6 relative" alt="" src="/Movimenta-es-icon.svg" />
        <div className="flex-1 relative">Movimentações</div>
      </div>
      <div
        className="self-stretch h-12 rounded-[9px] border-[rgba(204,184,245,0.18)] border-solid border-[1px] box-border overflow-hidden shrink-0 flex items-center py-[11px] px-3.5 gap-[19px] cursor-pointer"
        onClick={onCaixinhasNavContainerClick}
      >
        <img className="h-6 w-6 relative" alt="" src="/Archive-Caixinhas.svg" />
        <div className="flex-1 relative">Caixinhas</div>
      </div>
      <div
        className="self-stretch h-12 rounded-[9px] border-[rgba(204,184,245,0.18)] border-solid border-[1px] box-border overflow-hidden shrink-0 flex items-center py-2.5 px-[17px] gap-[15px] cursor-pointer"
        onClick={onCategoriasNavContainerClick}
      >
        <div className="h-[24.9px] flex items-start pt-0 px-0 pb-[1.9px] box-border shrink-0">
          <img
            className="h-[25px] w-[25px] relative shrink-0"
            alt=""
            src="/Frame13.svg"
          />
        </div>
        <div className="flex-1 relative shrink-0">Categorias</div>
      </div>
      <div className="w-[290px] max-w-[290px] flex items-start pt-0 px-0 pb-[6.9px] box-border shrink-0">
        <div className="h-12 flex-1 rounded-[9px] bg-[#631ee4] border-[rgba(204,184,245,0.18)] border-solid border-[1px] box-border overflow-hidden flex items-center justify-center py-[11px] px-3.5 gap-[19px] shrink-0">
          <img
            className="h-6 w-6 relative"
            alt=""
            src="/Contas-conectadas-icon.svg"
          />
          <div className="flex-1 relative">Contas conectadas</div>
        </div>
      </div>
      <div className="w-full rounded-xl overflow-hidden flex items-start relative isolate bg-[url('/public/Promo@3x.png')] bg-cover bg-no-repeat bg-[top] max-w-[198px] shrink-0 text-[8px] text-[#b385ff]">
        <div className="h-[242px] flex-1 relative rounded-xl [background:linear-gradient(180deg,_rgba(26,_8,_64,_0.04)_43.27%,_rgba(26,_8,_64,_0.23)_65.87%,_rgba(18,_5,_46,_0.39))] z-[3]" />
        <div className="absolute !!m-[0 important] top-[11px] left-[13px] leading-[110%] font-semibold whitespace-pre-wrap inline-block min-w-[96px] z-[1]">{`O R G A N I Z A Ç Ã O  —  `}</div>
        <div className="absolute !!m-[0 important] top-[29px] left-[13px] text-[10px] font-semibold z-[2] text-[#fff]">
          <span>
            {`O primeiro passo `}
            <br />
            {`para conquistar `}
            <br />
            {`seus `}
          </span>
          <span className="text-[#b285ff]">objetivos.</span>
        </div>
      </div>
    </section>
  );
};

export default Sidebar;
