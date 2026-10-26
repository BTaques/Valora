import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";

export type NavMenuType = {
  className?: string;
};

const NavMenu: FunctionComponent<NavMenuType> = ({ className = "" }) => {
  const navigate = useNavigate();

  const onCategoriasNavContainerClick = useCallback(() => {
    navigate("/05-detalhes-da-caixinha");
  }, [navigate]);

  return (
    <div
      className={`self-stretch flex flex-col items-start pt-0 pb-[287.9px] pl-px pr-0 gap-1 z-[4] text-left text-sm text-[#fff] font-[Inter] mq450:pb-[187px] mq450:box-border ${className}`}
    >
      <div className="self-stretch h-[54px] rounded-[10px] border-[rgba(219,209,245,0.28)] border-solid border-[1px] box-border overflow-hidden shrink-0 flex items-center justify-center pt-4 px-3 pb-[19px]">
        <div className="flex-1 relative inline-block max-w-[87.9px]">
          Início
        </div>
      </div>
      <div className="self-stretch h-[54px] rounded-[10px] bg-[#4212a6] border-[rgba(219,209,245,0.28)] border-solid border-[1px] box-border overflow-hidden shrink-0 flex items-start py-3.5 px-[13px] gap-[22px]">
        <img className="h-6 w-6 relative" alt="" src="/Movimenta-es-icon.svg" />
        <div className="h-[18.9px] flex items-start pt-[1.9px] px-0 pb-0 box-border">
          <div className="relative">Movimentações</div>
        </div>
      </div>
      <div className="self-stretch h-[54px] rounded-[10px] bg-[#160b30] border-[rgba(219,209,245,0.28)] border-solid border-[1px] box-border overflow-hidden shrink-0 flex items-start p-3.5 gap-5">
        <img className="h-6 w-6 relative" alt="" src="/Archive-Caixinhas.svg" />
        <div className="flex-1 flex items-start pt-[1.9px] px-0 pb-0">
          <div className="flex-1 relative">Caixinhas</div>
        </div>
      </div>
      <div
        className="self-stretch h-[54px] rounded-[10px] border-[rgba(219,209,245,0.28)] border-solid border-[1px] box-border overflow-hidden shrink-0 flex items-center justify-center pt-4 pb-[19px] pl-0 pr-[9px] cursor-pointer"
        onClick={onCategoriasNavContainerClick}
      >
        <div className="relative">Categorias</div>
      </div>
      <div className="self-stretch h-[54px] rounded-[10px] border-[rgba(219,209,245,0.28)] border-solid border-[1px] box-border overflow-hidden shrink-0 flex items-start justify-center p-3.5 gap-5">
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
  );
};

export default NavMenu;
