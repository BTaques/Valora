import { FunctionComponent, useCallback, useState } from "react";
import CadastroModal from "../components/CadastroModal";
import FormContent from "../components/FormContent";

const Login: FunctionComponent = () => {
  const [cadastroAberto, setCadastroAberto] = useState(false);
  const fecharCadastro = useCallback(() => setCadastroAberto(false), []);
  return (
    <>
    <div className="valora-login w-full relative bg-[#f9f8fc] overflow-hidden flex items-start py-0 pl-0 pr-9 box-border leading-[normal] tracking-[normal] text-left text-sm text-[#6e6980] font-[Inter]">
      <main className="valora-login-layout h-[1024px] flex-1 flex items-start justify-between flex-wrap content-start gap-0 max-w-[1404px] [row-gap:20px] mq1400:gap-0 mq1400:max-w-full">
        <main className="valora-login-hero h-[1024px] flex-1 overflow-hidden flex flex-col items-center py-[5.8px] px-[30px] box-border bg-[url('/Brand@3x.png')] bg-cover bg-no-repeat bg-[top] min-w-[310px] max-w-[760px] min-h-[1024px] text-left text-[29px] text-[#fff] font-[Inter] mq825:max-w-full mq825:flex-1">
          <div className="w-full flex-1 flex flex-col items-start max-w-[700px] mq825:max-w-full">
            <div className="w-full flex-1 flex flex-col items-center gap-[82px] max-w-[515px] mq825:gap-[41px] mq825:max-w-full mq450:gap-5">
              <div className="w-full flex items-start py-[40.1px] px-0 box-border gap-[7px] max-w-[468.8px] z-[3] mq825:max-w-full mq450:flex-wrap">
                <img
                  className="h-[30px] w-9 relative object-cover"
                  alt=""
                  src="/logo-branco-1@2x.png"
                />
                <div className="h-[36.9px] flex items-start pt-[1.9px] px-0 pb-0 box-border">
                  <div className="relative font-semibold inline-block min-w-[91px] mq450:text-[23px]">
                    Valora
                  </div>
                </div>
              </div>
              <section className="w-full flex flex-col items-start py-0 px-2 box-border gap-4 max-w-[468.8px] z-[1] text-left text-[13px] text-[#c7b3f2] font-[Inter] mq825:max-w-full">
                <div className="self-stretch flex items-start pt-0 px-0 pb-2 box-border max-w-full">
                  <div className="flex-1 relative tracking-[0.28em] font-semibold inline-block max-w-full">
                    FINANÇAS MAIS SIMPLES
                  </div>
                </div>
                <div className="w-full relative text-[46px] leading-[112%] font-semibold text-[#fff] inline-block max-w-[451px] mq825:text-[37px] mq825:leading-[41px] mq450:text-[28px] mq450:leading-[31px] mq450:max-w-full">
                  Seu dinheiro,
                  <br />
                  mais possibilidades.
                </div>
                <div className="w-full relative text-[19px] leading-[145%] text-[rgba(255,255,255,0.98)] inline-block max-w-[387px] mq450:max-w-full">
                  Organize sua rotina financeira, acompanhe
                  <br />
                  seus objetivos e tenha mais controle
                  <br />
                  do seu futuro, tudo em um só lugar.
                </div>
              </section>
              <section className="self-stretch flex flex-col items-center gap-[27px] max-w-full z-[2] text-left text-base text-[#fff] font-[Inter]">
                <div className="w-full flex items-start flex-wrap content-start gap-[17.9px] max-w-[451.2px] mq450:max-w-full">
                  <img
                    className="h-[52px] w-[52px] relative object-cover"
                    loading="lazy"
                    alt=""
                    src="/merged-asset-1@2x.png"
                  />
                  <div className="flex-1 flex flex-col items-start pt-[17.9px] px-0 pb-0 box-border gap-1.5 min-w-[194px] max-w-full">
                    <div className="self-stretch relative font-semibold">
                      Registre suas transações
                    </div>
                    <div className="self-stretch relative text-[13.5px] text-[rgba(255,255,255,0.92)]">
                      Acompanhe seus gastos.
                    </div>
                  </div>
                </div>
                <div className="w-full flex items-start flex-wrap content-start gap-[17.9px] max-w-[451.2px] mq450:max-w-full">
                  <img
                    className="h-[52px] w-[52px] relative object-cover"
                    loading="lazy"
                    alt=""
                    src="/merged-asset-2@2x.png"
                  />
                  <div className="flex-1 flex flex-col items-start pt-[17.9px] px-0 pb-0 box-border gap-1.5 min-w-[306px] max-w-full">
                    <div className="self-stretch relative font-semibold">
                      Crie caixinhas para seus sonhos
                    </div>
                    <div className="self-stretch relative text-[13.5px] text-[rgba(255,255,255,0.92)]">
                      Guarde dinheiro para o que realmente importa.
                    </div>
                  </div>
                </div>
                <div className="w-full flex items-start flex-wrap content-start gap-[17.9px] max-w-[451.2px] mq450:max-w-full">
                  <img
                    className="h-[52px] w-[52px] relative object-cover"
                    loading="lazy"
                    alt=""
                    src="/merged-asset-3@2x.png"
                  />
                  <div className="flex-1 flex flex-col items-start pt-[17.9px] px-0 pb-0 box-border gap-1.5 min-w-[260px] max-w-full">
                    <div className="self-stretch relative font-semibold">
                      Organize por categorias
                    </div>
                    <div className="self-stretch relative text-[13.5px] text-[rgba(255,255,255,0.92)]">
                      Tenha uma visão clara dos seus gastos.
                    </div>
                  </div>
                </div>
                <div className="w-full flex items-start flex-wrap content-start gap-[17.9px] max-w-[451.2px] mq450:max-w-full">
                  <img
                    className="h-[52px] w-[52px] relative object-cover"
                    loading="lazy"
                    alt=""
                    src="/merged-asset-4@2x.png"
                  />
                  <div className="flex-1 flex flex-col items-start pt-[17.9px] px-0 pb-0 box-border gap-1.5 min-w-[260px] max-w-full">
                    <div className="self-stretch relative font-semibold">
                      Mais segurança para seu dinheiro
                    </div>
                    <div className="self-stretch relative text-[13.5px] text-[rgba(255,255,255,0.92)]">
                      Seus dados protegidos sempre.
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </main>
        <section className="valora-login-panel flex-[1.0857] flex flex-col items-start py-[29.9px] px-0 box-border gap-[21px] min-w-[310px] max-w-[519px] text-left text-[11px] text-[#736b8f] font-[Inter] lg:pt-5 lg:pb-5 lg:box-border mq825:max-w-full">
          <div className="self-stretch flex items-center justify-end gap-9 mq450:gap-[18px] mq450:flex-wrap">
            <div className="relative">Ainda não tem uma conta?</div>
            <button type="button" onClick={() => setCadastroAberto(true)} className="cursor-pointer border-[#4d21b3] border-solid border-[1.5px] py-[11px] pl-[25px] pr-[22px] bg-[transparent] h-10 rounded-[10px] box-border overflow-hidden flex items-center justify-center hover:bg-[rgba(115,71,217,0.09)] hover:border-[#7347d9] hover:border-solid hover:hover:border-[1.5px] hover:box-border">
              <div className="relative text-xs font-semibold font-[Inter] text-[#4d21b3] text-left">
                Criar conta
              </div>
            </button>
          </div>
          <FormContent />
        </section>
      </main>
      <div className="relative whitespace-pre-wrap hidden">
        Ainda não tem conta? Criar conta
      </div>
    </div>
    {cadastroAberto && <CadastroModal onClose={fecharCadastro} />}
    </>
  );
};

export default Login;
