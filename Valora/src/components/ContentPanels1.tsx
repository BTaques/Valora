import { FunctionComponent } from "react";

export type ContentPanels1Type = {
  className?: string;
};

const ContentPanels1: FunctionComponent<ContentPanels1Type> = ({
  className = "",
}) => {
  return (
    <div
      className={`self-stretch flex items-start flex-wrap content-start py-0 pl-[35px] pr-[30px] box-border gap-[18px] max-w-full ${className}`}
    >
      <section className="h-[500px] flex-1 rounded-xl bg-[#fff] border-[#e0e3f2] border-solid border-[1px] box-border overflow-hidden flex flex-col items-start pt-1.5 px-0 pb-[8.9px] min-w-[310px] max-w-full text-left text-[26px] text-[#0e0b2e] font-[Inter]">
        <div className="self-stretch flex flex-col items-start py-0 pl-[27px] pr-0.5 box-border max-w-full">
          <div className="self-stretch flex items-start justify-between flex-wrap content-start gap-0 [row-gap:20px] z-[1]">
            <div className="flex-1 flex flex-col items-start py-[20.9px] px-0 box-border gap-3.5 min-w-[283px] max-w-[311px]">
              <h2 className="m-0 w-full h-[62px] relative text-[length:inherit] font-semibold font-[inherit] inline-block max-w-[296px] mq450:text-[21px]">
                Conecte sua conta com
                <br />
                Open Finance
              </h2>
              <div className="w-full h-[51px] relative text-sm text-[#5c5785] inline-block max-w-[311px]">
                A Valora utiliza a tecnologia da Belvo para
                <br />
                importar suas movimentações de forma segura,
                <br />
                rápida e automática.
              </div>
            </div>
            <img
              className="w-60 relative max-h-full object-cover"
              loading="lazy"
              alt=""
              src="/a6ccebd2-49be-43f0-a83f-91dde3ae0f4c-1@2x.png"
            />
          </div>
          <div className="self-stretch flex flex-col items-start gap-[13.1px] max-w-full z-[1] mt-[-16px] relative text-sm">
            <div className="self-stretch flex items-start relative isolate gap-[15.9px] max-w-full shrink-0 mq675:flex-wrap">
              <img
                className="h-12 w-12 relative z-[0] shrink-0"
                alt=""
                src="/merged-asset-24.svg"
              />
              <div className="absolute top-[27px] left-[27px] w-[674px] flex flex-col items-start gap-3.5 max-w-full shrink-0">
                <div className="self-stretch relative font-semibold shrink-0">
                  Movimentações automáticas
                </div>
                <div className="self-stretch relative text-xs text-[#5c5785] shrink-0">
                  Suas transações são importadas sem precisar cadastrar
                  manualmente.
                </div>
              </div>
            </div>
            <div className="self-stretch h-[207px] flex flex-col items-start pt-[30px] px-0 pb-[4.1px] box-border gap-[13.1px] max-w-full shrink-0">
              <img
                className="h-12 w-12 relative shrink-0"
                alt=""
                src="/merged-asset-34.svg"
              />
              <div className="flex-1 flex flex-col items-start pt-0 px-0 pb-[11.9px] box-border gap-[5px] min-w-[414px] max-w-full shrink-0 mq675:min-w-full">
                <div className="self-stretch relative font-semibold">
                  Visão completa
                </div>
                <div className="self-stretch relative text-xs text-[#5c5785]">
                  Acompanhe seus gastos, receitas e saldos em um só lugar.
                </div>
              </div>
            </div>
            <div className="self-stretch flex items-start gap-[15.9px] max-w-full shrink-0 mq675:flex-wrap">
              <img
                className="h-12 w-12 relative"
                alt=""
                src="/merged-asset-43.svg"
              />
              <div className="flex-1 flex flex-col items-start pt-0 px-0 pb-[11.9px] box-border gap-[5px] min-w-[414px] max-w-full mq675:min-w-full">
                <div className="self-stretch relative font-semibold">
                  100% seguro
                </div>
                <div className="self-stretch relative text-xs text-[#5c5785]">
                  Seus dados são protegidos e você mantém o controle.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-center py-[18.1px] px-[27px] box-border gap-3.5 max-w-full text-sm text-[#fff]">
          <div className="self-stretch rounded-[10px] [background:linear-gradient(90deg,_#4d0fd1,_#6e1af5)] overflow-hidden flex items-center justify-center py-[17px] px-5 gap-2 mq450:flex-wrap">
            <img className="h-5 w-5 relative" alt="" src="/Lock-icon.svg" />
            <div className="flex-1 relative font-semibold whitespace-pre-wrap inline-block min-w-[94px] max-w-[144px]">
              Conectar conta →
            </div>
          </div>
          <div className="w-[570px] relative text-[11px] text-[#5c5785] inline-block max-w-[570px] mq675:max-w-full">
            Você será direcionado para o ambiente seguro da Belvo, onde poderá
            escolher sua instituição bancária.
          </div>
        </div>
      </section>
      <section className="flex-1 flex flex-col items-start gap-3.5 min-w-[310px] max-w-[392px] text-left text-xl text-[#0e0b2e] font-[Inter] mq675:max-w-full mq450:max-w-full">
        <div className="self-stretch rounded-xl bg-[#fff] border-[#e0e3f2] border-solid border-[1px] overflow-hidden flex flex-col items-start py-[17px] px-5 gap-[18px]">
          <h3 className="m-0 self-stretch relative text-[length:inherit] font-semibold font-[inherit] mq450:text-base">
            Como funciona?
          </h3>
          <div className="w-full flex flex-col items-start py-1.5 px-0 box-border gap-[8.1px] max-w-[286px] text-sm text-[#4d0fd1]">
            <div className="self-stretch flex items-start py-0 pl-0 pr-0.5 gap-5 mq450:flex-wrap">
              <div className="flex flex-col items-center pt-[3.9px] px-0 pb-0">
                <div className="w-[42px] h-[42px] flex items-center justify-center bg-[url('/public/Frame2@3x.png')] bg-cover bg-no-repeat bg-[top] shrink-0">
                  <div className="w-[34px] flex items-center justify-center py-[8.5px] px-0 box-border bg-[url('/public/Frame1@3x.png')] bg-cover bg-no-repeat bg-[top]">
                    <div className="relative font-semibold shrink-0">1</div>
                  </div>
                </div>
                <div className="w-[42px] h-11 relative bg-[#ccc2f0] z-[2] mt-[-2px] shrink-0" />
              </div>
              <div className="flex-1 flex flex-col items-start gap-2 min-w-[144px] text-[13px] text-[#0e0b2e]">
                <div className="self-stretch relative font-semibold">
                  Escolha sua instituição
                </div>
                <div className="w-full h-[30px] relative text-xs text-[#5c5785] inline-block max-w-[222px]">
                  Selecione o banco que deseja conectar
                  <br />
                  através do Open Finance.
                </div>
              </div>
            </div>
            <div className="self-stretch flex items-start py-0 pl-0 pr-[3px] gap-5 mq450:flex-wrap">
              <div className="h-[87.9px] flex flex-col items-center pt-[3.9px] px-0 pb-0 box-border">
                <div className="h-[42px] w-[42px] flex items-center justify-center bg-[url('/public/Frame2@3x.png')] bg-cover bg-no-repeat bg-[top] shrink-0">
                  <div className="w-[34px] flex items-center justify-center py-[8.5px] px-0 box-border bg-[url('/public/Frame1@3x.png')] bg-cover bg-no-repeat bg-[top]">
                    <div className="relative font-semibold shrink-0">2</div>
                  </div>
                </div>
                <div className="h-11 relative bg-[#ccc2f0] z-[2] mt-[-2px] shrink-0" />
              </div>
              <div className="flex-1 flex flex-col items-start gap-2 min-w-[144px] text-[13px] text-[#0e0b2e]">
                <div className="self-stretch relative font-semibold">
                  Autorize o acesso
                </div>
                <div className="w-full h-[30px] relative text-xs text-[#5c5785] inline-block max-w-[221px]">
                  Você será direcionado para o ambiente
                  <br />
                  do seu banco, de forma segura.
                </div>
              </div>
            </div>
            <div className="self-stretch flex items-center gap-5 text-[13px] text-[#0e0b2e] mq450:flex-wrap">
              <button className="cursor-pointer [border:none] pt-px px-0 pb-0 bg-[transparent] h-[30px] flex items-start box-border shrink-0">
                <div className="w-[42px] max-w-[42px] h-[42px] flex items-center justify-center bg-[url('/public/Frame2@3x.png')] bg-cover bg-no-repeat bg-[top] shrink-0">
                  <div className="w-[34px] flex items-center justify-center py-[8.5px] px-0 box-border bg-[url('/public/Frame1@3x.png')] bg-cover bg-no-repeat bg-[top]">
                    <div className="relative text-sm font-semibold font-[Inter] text-[#4d0fd1] text-left shrink-0">
                      3
                    </div>
                  </div>
                </div>
              </button>
              <div className="w-full flex items-center py-1.5 px-0 box-border gap-5 max-w-[286px] shrink-0 mq450:flex-wrap">
                <div className="self-stretch relative font-semibold shrink-0">
                  Conexão concluída
                </div>
                <div className="w-full relative text-xs text-[#5c5785] inline-block max-w-[224px] shrink-0">
                  Suas movimentações serão importadas
                  <br />
                  automaticamente para a Valora.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch rounded-xl bg-[#f0dcff] border-[#e0e3f2] border-solid border-[1px] overflow-hidden flex items-start flex-wrap content-start pt-[13px] px-[19px] pb-[27px] gap-[11.9px] text-[15px]">
          <div className="h-[27.9px] flex items-start pt-[2.9px] pb-0 pl-0 pr-[29px] box-border shrink-0">
            <img
              className="h-9 w-9 relative rounded-[17px] shrink-0"
              alt=""
              src="/Security-Icon-Wrapper.svg"
            />
          </div>
          <div className="flex-1 flex flex-col items-start gap-[8.1px] min-w-[296px] shrink-0">
            <div className="self-stretch flex items-end py-0 pl-0 pr-[9px] gap-[47px] shrink-0 mq450:gap-[23px] mq450:flex-wrap">
              <div className="relative font-semibold shrink-0">
                Seus dados em segurança
              </div>
              <input
                className="w-full [border:none] [outline:none] bg-[transparent] flex-1 flex items-start py-0 px-[2595.35px] box-border font-[Inter] font-semibold text-[19px] text-[#0a0a0f] min-w-[270px] max-w-full shrink-0"
                placeholder="Buscar transações, caixinhas ou categorias...⌕"
                type="text"
              />
            </div>
            <button className="cursor-pointer [border:none] pt-0 pb-[1.9px] pl-0 pr-[9px] bg-[transparent] h-[25.9px] flex items-start box-border shrink-0">
              <div className="flex-1 relative text-[11px] font-[Inter] text-[#5c5785] text-left inline-block max-w-[290px] shrink-0">
                A Valora utiliza a tecnologia da Belvo, autorizada pelo Banco
                Central, e segue todos os padrões de segurança do Open Finance.
              </div>
            </button>
            <div className="self-stretch relative text-[11px] font-semibold text-[#541feb] shrink-0">
              Saiba mais sobre a segurança →
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContentPanels1;
