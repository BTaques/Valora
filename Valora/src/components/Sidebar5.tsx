import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";

export type Sidebar5Type = {
  className?: string;
};

const Sidebar5: FunctionComponent<Sidebar5Type> = ({ className = "" }) => {
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

  const onContasConectadasNavClick = useCallback(() => {
    navigate("/07-conectar-conta");
  }, [navigate]);

  return (
    <section
      className={`h-[1024px] bg-[#130a2e] overflow-hidden flex flex-col items-center py-[36.9px] px-3.5 box-border relative isolate gap-11 text-right text-[27px] text-[#fff] font-[Inter] mq675:pt-5 mq675:pb-5 mq675:box-border mq450:hidden mq450:pt-6 mq450:pb-6 mq450:box-border ${className}`}
    >
      <img
        className="w-10 h-[33px] absolute !!m-[0 important] top-[35px] left-[34px] object-cover z-[4] shrink-0"
        alt=""
        src="/logo-branco-3@2x.png"
      />
      <b className="w-full relative inline-block max-w-[92px] z-[3] shrink-0 mq450:text-[22px]">
        Valora
      </b>
      <nav className="m-0 self-stretch flex flex-col items-center pt-0 px-0 pb-[277px] gap-1 z-[5] shrink-0 text-left text-sm text-[#fff] font-[Inter] mq675:pb-[180px] mq675:box-border">
        <div
          className="self-stretch h-[54px] rounded-[10px] border-[rgba(219,209,245,0.28)] border-solid border-[1px] box-border overflow-hidden shrink-0 flex items-center justify-center pt-4 px-3 pb-[19px] cursor-pointer"
          onClick={onIncioNavContainerClick}
        >
          <h3 className="m-0 flex-1 relative text-[length:inherit] font-normal font-[inherit] inline-block max-w-[82px]">
            Início
          </h3>
        </div>
        <div
          className="self-stretch h-[54px] rounded-[10px] border-[rgba(219,209,245,0.28)] border-solid border-[1px] box-border overflow-hidden shrink-0 flex items-start p-3.5 gap-[22px] cursor-pointer"
          onClick={onMovimentaesNavContainerClick}
        >
          <img
            className="h-6 w-6 relative shrink-0"
            alt=""
            src="/Movimenta-es-icon.svg"
          />
          <div className="h-[23.9px] flex items-start pt-[1.9px] px-0 pb-0 box-border shrink-0">
            <h3 className="m-0 flex-1 relative text-[length:inherit] font-normal font-[inherit] shrink-0">
              Movimentações
            </h3>
          </div>
        </div>
        <div
          className="self-stretch h-[54px] rounded-[10px] bg-[#4212a6] border-[rgba(219,209,245,0.28)] border-solid border-[1px] box-border overflow-hidden shrink-0 flex items-start p-3.5 gap-[22px] cursor-pointer"
          onClick={onCaixinhasNavContainerClick}
        >
          <img
            className="h-6 w-6 relative shrink-0"
            alt=""
            src="/Archive-Caixinhas.svg"
          />
          <div className="h-[23.9px] flex items-start pt-[1.9px] px-0 pb-0 box-border shrink-0">
            <h3 className="m-0 flex-1 relative text-[length:inherit] font-normal font-[inherit] shrink-0">
              Caixinhas
            </h3>
          </div>
        </div>
        <div
          className="self-stretch h-[54px] rounded-[10px] border-[rgba(219,209,245,0.28)] border-solid border-[1px] box-border overflow-hidden shrink-0 flex items-center justify-center pt-4 pb-[19px] pl-0 pr-[5px] cursor-pointer"
          onClick={onCategoriasNavContainerClick}
        >
          <h3 className="m-0 relative text-[length:inherit] font-normal font-[inherit] pl-5 pr-5">
            Categorias
          </h3>
        </div>
        <div
          className="self-stretch h-[54px] rounded-[10px] border-[rgba(219,209,245,0.28)] border-solid border-[1px] box-border overflow-hidden shrink-0 flex items-start justify-center p-3.5 gap-[22px] cursor-pointer"
          onClick={onContasConectadasNavClick}
        >
          <img
            className="h-6 w-6 relative shrink-0"
            alt=""
            src="/Contas-conectadas-icon.svg"
          />
          <div className="h-[25.9px] flex items-start pt-[1.9px] px-0 pb-0 box-border shrink-0">
            <h3 className="m-0 flex-1 relative text-[length:inherit] font-normal font-[inherit] shrink-0">
              Contas conectadas
            </h3>
          </div>
        </div>
      </nav>
      <img
        className="w-6 h-6 absolute !!m-[0 important] top-[128px] left-[30px] z-[2] shrink-0"
        alt=""
        src="/Frame11.svg"
      />
      <img
        className="w-6 h-6 absolute !!m-[0 important] top-[calc(50%_-_207px)] left-[30px] z-[1] shrink-0"
        alt=""
        src="/Divider.svg"
      />
      <div className="w-full rounded-xl overflow-hidden flex flex-col items-start bg-[url('/public/Promo11@3x.png')] bg-cover bg-no-repeat bg-[top] max-w-[198px] z-[5] shrink-0 text-[8px] text-[#b385ff]">
        <div className="w-[824px] max-w-[824px] bg-[#f6f7fc] flex items-center pt-[13px] pb-3.5 pl-1.5 pr-[19px] box-border shrink-0 mq450:flex-wrap mq450:max-w-full">
          <div className="w-full h-[242px] flex flex-col items-start max-w-[198px] shrink-0">
            <div className="w-full flex-1 flex flex-col items-center py-0 pl-0 pr-5 box-border gap-[9px] max-w-[131.31px]">
              <div className="self-stretch relative leading-[110%] font-semibold whitespace-pre-wrap inline-block w-[111.3px]">{`O R G A N I Z A Ç Ã O  —  `}</div>
              <div className="w-full relative text-[10px] font-semibold text-left inline-block max-w-[85px] text-[#fff]">
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sidebar5;
