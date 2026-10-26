import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";

export type Sidebar4Type = {
  className?: string;
};

const Sidebar4: FunctionComponent<Sidebar4Type> = ({ className = "" }) => {
  const navigate = useNavigate();

  const onIncioNavClick = useCallback(() => {
    navigate("/02-incio");
  }, [navigate]);

  const onMovimentaesNavClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onCategoriasNavClick = useCallback(() => {
    navigate("/06-categorias");
  }, [navigate]);

  const onContasConectadasNavClick = useCallback(() => {
    navigate("/07-conectar-conta");
  }, [navigate]);

  return (
    <section
      className={`h-[1024px] w-[232px] bg-[#160b30] overflow-hidden shrink-0 flex flex-col items-center py-[33.9px] pl-3.5 pr-2 box-border relative isolate gap-[41.1px] text-left text-[27px] text-[#fff] font-[Inter] mq675:pt-5 mq675:pb-5 mq675:box-border mq450:hidden mq1000:pt-[22px] mq1000:pb-[22px] mq1000:box-border ${className}`}
    >
      <div className="w-full flex items-center gap-px max-w-[172.1px]">
        <div className="h-[36.9px] flex items-start pt-0 px-0 pb-[3.9px] box-border shrink-0">
          <img
            className="w-10 relative max-h-full object-cover shrink-0"
            loading="lazy"
            alt=""
            src="/logo-branco-3@2x.png"
          />
        </div>
        <h2 className="m-0 relative text-[length:inherit] font-bold font-[inherit] shrink-0 mq450:text-[22px]">
          Valora
        </h2>
      </div>
      <nav className="m-0 self-stretch flex flex-col items-start pt-0 pb-[285.9px] pl-0 pr-1 gap-1 mq675:pb-[186px] mq675:box-border">
        <button
          className="cursor-pointer border-[rgba(219,209,245,0.28)] border-solid border-[1px] pt-4 px-3 pb-[19px] bg-[transparent] self-stretch h-[54px] rounded-[10px] box-border overflow-hidden shrink-0 flex items-center justify-center hover:bg-[rgba(194,184,219,0.09)] hover:border-[rgba(194,184,219,0.28)] hover:border-solid hover:hover:border-[1px] hover:box-border"
          onClick={onIncioNavClick}
        >
          <h3 className="m-0 flex-1 relative text-sm font-normal font-[Inter] text-[#fff] text-left inline-block max-w-[87px]">
            Início
          </h3>
        </button>
        <button
          className="cursor-pointer border-[rgba(219,209,245,0.28)] border-solid border-[1px] p-3.5 bg-[transparent] self-stretch h-[54px] rounded-[10px] box-border overflow-hidden shrink-0 flex items-start gap-5"
          onClick={onMovimentaesNavClick}
        >
          <img
            className="h-6 w-6 relative shrink-0"
            loading="lazy"
            alt=""
            src="/Movimenta-es-icon.svg"
          />
          <div className="flex-1 flex items-start pt-[1.9px] px-0 pb-0 shrink-0">
            <h3 className="m-0 flex-1 relative text-sm font-normal font-[Inter] text-[#fff] text-left shrink-0">
              Movimentações
            </h3>
          </div>
        </button>
        <button className="cursor-pointer border-[rgba(219,209,245,0.28)] border-solid border-[1px] p-3.5 bg-[#4212a6] self-stretch h-[54px] rounded-[10px] box-border overflow-hidden shrink-0 flex items-start gap-5">
          <img
            className="h-6 w-6 relative shrink-0"
            loading="lazy"
            alt=""
            src="/Archive-Caixinhas.svg"
          />
          <div className="self-stretch flex items-start pt-0 px-0 pb-1 shrink-0">
            <h3 className="m-0 flex-1 relative text-sm font-normal font-[Inter] text-[#fff] text-left shrink-0">
              Caixinhas
            </h3>
          </div>
        </button>
        <button
          className="cursor-pointer border-[rgba(219,209,245,0.28)] border-solid border-[1px] pt-4 pb-[19px] pl-0 pr-[9px] bg-[transparent] self-stretch h-[54px] rounded-[10px] box-border overflow-hidden shrink-0 flex items-center justify-center hover:bg-[rgba(194,184,219,0.09)] hover:border-[rgba(194,184,219,0.28)] hover:border-solid hover:hover:border-[1px] hover:box-border"
          onClick={onCategoriasNavClick}
        >
          <h3 className="m-0 relative text-sm font-normal font-[Inter] text-[#fff] text-left">
            Categorias
          </h3>
        </button>
        <button
          className="cursor-pointer border-[rgba(219,209,245,0.28)] border-solid border-[1px] p-3.5 bg-[transparent] self-stretch h-[54px] rounded-[10px] box-border overflow-hidden shrink-0 flex items-start justify-center gap-5"
          onClick={onContasConectadasNavClick}
        >
          <img
            className="h-6 w-6 relative shrink-0"
            alt=""
            src="/Contas-conectadas-icon.svg"
          />
          <div className="w-full flex items-start pt-0 px-0 pb-[53px] box-border max-w-[146px] shrink-0">
            <h3 className="m-0 flex-1 relative text-sm font-normal font-[Inter] text-[#fff] text-left shrink-0">
              Contas conectadas
            </h3>
          </div>
        </button>
      </nav>
      <img
        className="w-6 h-6 absolute !!m-[0 important] top-[126px] left-[29px] z-[2]"
        loading="lazy"
        alt=""
        src="/Wrapper.svg"
      />
      <img
        className="w-6 h-6 absolute !!m-[0 important] top-[calc(50%_-_212px)] left-[29px] z-[1]"
        alt=""
        src="/Divider.svg"
      />
      <div className="w-full rounded-xl overflow-hidden flex flex-col items-start pt-2.5 px-[19px] pb-[185px] box-border bg-[url('/public/Promo1@3x.png')] bg-cover bg-no-repeat bg-[top] max-w-[198px] max-h-[242px] z-[4] text-[8px] text-[#b385ff]">
        <div className="self-stretch flex items-start pt-0 px-0 pb-1.5 shrink-0">
          <div className="flex-1 relative leading-[110%] font-semibold whitespace-pre-wrap shrink-0">{`C O N Q U I S T E —  `}</div>
        </div>
        <h3 className="m-0 self-stretch relative text-sm leading-[85px] font-semibold font-[inherit] whitespace-pre-wrap z-[2] mt-[-68px] shrink-0 text-[#b285ff]">
          <span className="leading-[85px]">Seus sonhos</span>
          <span className="text-[#fff] leading-[85px]">{` `}</span>
          <span className="leading-[85px]">{` `}</span>
        </h3>
        <div className="self-stretch relative text-xs font-semibold text-[#fff] z-[3] mt-[-68px] shrink-0">
          mais próximos de você.
        </div>
      </div>
    </section>
  );
};

export default Sidebar4;
