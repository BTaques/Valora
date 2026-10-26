import { FunctionComponent } from "react";

export type BrandType = {
  className?: string;
};

const Brand: FunctionComponent<BrandType> = ({ className = "" }) => {
  return (
    <main
      className={`absolute h-full top-[0px] bottom-[0px] left-[0px] w-[760px] overflow-hidden bg-[url('/public/Brand@3x.png')] bg-cover bg-no-repeat bg-[top] text-left text-base text-[#fff] font-[Inter] ${className}`}
    >
      <div className="absolute top-[205px] left-[62px] text-[13px] tracking-[0.28em] font-semibold text-[#c7b3f2]">
        FINANÇAS MAIS SIMPLES
      </div>
      <div className="absolute top-[245px] left-[62px] text-[46px] leading-[112%] font-semibold mq675:text-[37px] mq675:leading-[41px] mq450:text-[28px] mq450:leading-[31px]">
        Seu dinheiro,
        <br />
        mais possibilidades.
      </div>
      <h3 className="m-0 absolute top-[365px] left-[62px] text-[19px] leading-[145%] font-normal font-[inherit] text-[rgba(255,255,255,0.98)] inline-block w-[387px]">
        Organize sua rotina financeira, acompanhe
        <br />
        seus objetivos e tenha mais controle
        <br />
        do seu futuro, tudo em um só lugar.
      </h3>
      <div className="absolute top-[548px] left-[132px] font-semibold">
        Registre suas transações
      </div>
      <div className="absolute top-[634px] left-[132px] font-semibold">
        Crie caixinhas para seus sonhos
      </div>
      <div className="absolute top-[720px] left-[132px] font-semibold">
        Organize por categorias
      </div>
      <div className="absolute top-[806px] left-[132px] font-semibold">
        Mais segurança para seu dinheiro
      </div>
      <h2 className="m-0 absolute top-[48px] left-[96px] text-[29px] font-semibold font-[inherit] inline-block min-w-[91px] mq450:text-[23px]">
        Valora
      </h2>
      <img
        className="absolute top-[530px] left-[62px] w-[52px] h-[52px] object-cover"
        loading="lazy"
        alt=""
        src="/merged-asset-1@2x.png"
      />
      <img
        className="absolute top-[616px] left-[62px] w-[52px] h-[52px] object-cover"
        loading="lazy"
        alt=""
        src="/merged-asset-2@2x.png"
      />
      <img
        className="absolute top-[702px] left-[62px] w-[52px] h-[52px] object-cover"
        loading="lazy"
        alt=""
        src="/merged-asset-3@2x.png"
      />
      <img
        className="absolute top-[788px] left-[62px] w-[52px] h-[52px] object-cover"
        loading="lazy"
        alt=""
        src="/merged-asset-4@2x.png"
      />
      <div className="absolute top-[573px] left-[132px] text-[13.5px] text-[rgba(255,255,255,0.92)] inline-block w-[165px]">
        Acompanhe seus gastos.
      </div>
      <div className="absolute top-[659px] left-[132px] text-[13.5px] text-[rgba(255,255,255,0.92)]">
        Guarde dinheiro para o que realmente importa.
      </div>
      <div className="absolute top-[745px] left-[132px] text-[13.5px] text-[rgba(255,255,255,0.92)]">
        Tenha uma visão clara dos seus gastos.
      </div>
      <div className="absolute top-[831px] left-[132px] text-[13.5px] text-[rgba(255,255,255,0.92)]">
        Seus dados protegidos sempre.
      </div>
      <img
        className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[46px] left-[53px] w-9 h-[30px] object-cover"
        alt=""
        src="/logo-branco-1@2x.png"
      />
    </main>
  );
};

export default Brand;
