import { FunctionComponent, useCallback } from "react";
import Component1 from "./Component1";
import { useNavigate } from "react-router-dom";

export type FormContentType = {
  className?: string;
};

const FormContent: FunctionComponent<FormContentType> = ({
  className = "",
}) => {
  const navigate = useNavigate();
  const onButtonEntrarClick = useCallback((event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    navigate("/dashboard");
  }, [navigate]);

  return (
    <form
      className={`valora-login-form m-0 self-stretch flex flex-col items-center py-0 pl-0 pr-12 box-border gap-[19px] max-w-full mq825:pr-6 mq825:box-border ${className}`}
    >
      <div className="self-stretch flex flex-col items-center py-0 px-5 box-border gap-1.5 max-w-full">
        <div className="w-full flex items-start pt-0 pb-[9px] pl-0 pr-4 box-border max-w-[366px]">
          <Component1 />
        </div>
        <h2 className="m-0 self-stretch relative text-[34px] font-semibold font-[Inter] text-[#1f1447] text-center mq825:text-[27px] mq450:text-xl">
          Dê valor aos seus planos.
        </h2>
        <div className="self-stretch relative text-base font-[Inter] text-[#756e94] text-center">
          Seu dinheiro, sob seu controle.
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start pt-[39px] px-0 pb-[13px] box-border gap-3 max-w-full">
        <div className="self-stretch relative text-[13px] font-semibold font-[Inter] text-[#1a1729] text-left">
          E-mail
        </div>
        <div className="self-stretch h-[60px] rounded-xl bg-[#fff] border-[#d1ccdb] border-solid border-[1px] box-border overflow-hidden shrink-0 flex items-start pt-4 px-[13px] pb-[25px] max-w-full">
          <input
            className="w-full [border:none] [outline:none] font-[Inter] text-sm bg-[transparent] h-[17px] flex-1 relative text-[#6e6980] text-left inline-block min-w-[250px] p-0 max-w-full"
            placeholder="marina@email.com"
            type="text"
          />
        </div>
      </div>
      <div className="self-stretch flex flex-col items-center pt-0 px-0 pb-[9px] box-border gap-3 max-w-full">
        <div className="self-stretch relative text-[13px] font-semibold font-[Inter] text-[#1a1729] text-left">
          Senha
        </div>
        <div className="self-stretch flex items-start pt-0 px-0 pb-px box-border max-w-full">
          <div className="h-[60px] flex-1 rounded-xl bg-[#fff] border-[#d1ccdb] border-solid border-[1px] box-border overflow-hidden flex items-start pt-4 px-[13px] pb-[25px] max-w-full">
            <input
              className="w-full [border:none] [outline:none] font-[Inter] text-sm bg-[transparent] h-[17px] flex-1 relative text-[#6e6980] text-left inline-block min-w-[250px] p-0 max-w-full"
              placeholder="••••••••••"
              type="password"
            />
          </div>
        </div>
        <div className="w-full relative text-[13px] font-semibold font-[Inter] text-[#6e3bd1] text-right inline-block max-w-[406px] mq450:max-w-full">
          Esqueci minha senha
        </div>
      </div>
      <button
        className="cursor-pointer [border:none] pt-[18px] px-[23px] pb-5 bg-[transparent] self-stretch rounded-xl [background:linear-gradient(90deg,_#6329db,_#4514ad)] overflow-hidden flex items-center justify-between flex-wrap content-center gap-0 [row-gap:20px]"
        type="submit"
        onClick={onButtonEntrarClick}
      >
        <div className="w-[238px] relative text-base font-semibold font-[Inter] text-[#fff] text-right inline-block min-w-[48px] max-w-[238px]">
          Entrar
        </div>
        <img
          className="h-[22px] w-[22px] relative"
          alt=""
          src="/Arrow-right.svg"
        />
      </button>
      <div className="self-stretch flex items-center justify-center flex-wrap content-center pt-0 pb-2 pl-5 pr-[18px] gap-[18px]">
        <div className="h-px flex-1 relative bg-[#b6b2bd] min-w-[96px] max-w-[120px]" />
        <div className="relative text-xs font-[Inter] text-[#6e6980] text-left">
          ou acesse com
        </div>
        <div className="h-px flex-1 relative bg-[#b6b2bd] min-w-[96px] max-w-[120px]" />
      </div>
      <button
        className="cursor-pointer border-[rgba(0,0,0,0.2)] border-solid border-[1px] pt-3.5 px-5 pb-[23px] bg-[#fff] self-stretch h-14 rounded-xl box-border overflow-hidden shrink-0 flex items-center justify-center hover:bg-[#e6e6e6] hover:border-[rgba(51,51,51,0.2)] hover:border-solid hover:hover:border-[1px] hover:box-border"
        type="submit"
      >
        <div className="flex-1 relative text-sm font-semibold font-[Inter] text-[#1a1729] whitespace-pre-wrap text-left inline-block max-w-[184.1px]">
          G Entrar com Google
        </div>
      </button>
    </form>
  );
};

export default FormContent;
