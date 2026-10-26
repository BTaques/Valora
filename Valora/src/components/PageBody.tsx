import { FunctionComponent } from "react";

export type PageBodyType = {
  className?: string;
};

const PageBody: FunctionComponent<PageBodyType> = ({ className = "" }) => {
  return (
    <div
      className={`flex-[1.1111] flex flex-col items-start pt-[25.9px] px-0 pb-0 box-border gap-[18px] min-w-[343px] max-w-full text-left text-[32px] text-[#140d40] font-[Inter] ${className}`}
    >
      <div className="self-stretch h-[62px] flex items-start flex-wrap content-start py-0 pl-0.5 pr-[23px] box-border gap-2 max-w-full">
        <div className="flex-1 flex flex-col items-start gap-[3px] min-w-[320px] max-w-full">
          <h1 className="m-0 self-stretch relative text-[length:inherit] font-bold font-[inherit] mq450:text-[26px] mq450:text-[19px]">
            Categorias
          </h1>
          <h3 className="m-0 self-stretch relative text-base font-normal font-[inherit] text-[#595291]">
            Organize e personalize suas categorias de gastos.
          </h3>
        </div>
        <button className="cursor-pointer [border:none] pt-[3.9px] px-0 pb-0 bg-[transparent] h-[51.9px] flex items-start box-border">
          <button className="cursor-pointer [border:none] pt-[15.5px] pb-[12.5px] pl-7 pr-9 bg-[#5212d1] h-12 rounded-[10px] overflow-hidden flex items-center box-border hover:bg-[#7838f7]">
            <div className="relative text-sm font-medium font-[Inter] text-[#fff] whitespace-pre-wrap text-left">
              ＋ Nova categoria
            </div>
          </button>
        </button>
      </div>
      <section className="self-stretch flex items-start flex-wrap content-start pt-px px-0 pb-0 box-border gap-[18px] max-w-full text-left text-base text-[#140d40] font-[Inter]">
        <div className="flex-[1.0245] rounded-[9px] bg-[#fff] border-[#e3e6f2] border-solid border-[1px] box-border overflow-hidden flex flex-col items-start pt-2.5 px-4 pb-7 relative isolate min-w-[343px] max-w-full">
          <div className="self-stretch flex items-center flex-wrap content-center gap-2 max-w-full z-[0]">
            <div className="flex-[1.2825] flex items-start pt-0 px-0 pb-[2.9px] box-border min-w-[162px] max-w-full">
              <h3 className="m-0 flex-1 relative text-[length:inherit] font-semibold font-[inherit] inline-block max-w-full">
                Gastos por categoria
              </h3>
            </div>
            <div className="h-10 flex-1 rounded-lg bg-[#fff] border-[#e3e6f2] border-solid border-[1px] box-border overflow-hidden flex items-center pt-[11px] px-3 pb-3.5 min-w-[95px] max-w-[118px] text-[11px] mq450:max-w-full mq450:flex-1">
              <div className="relative whitespace-pre-wrap">Este mês ⌄</div>
            </div>
          </div>
          <div className="self-stretch flex items-end justify-center py-[27px] px-px box-border max-w-full z-[1] text-lg">
            <div className="flex-1 flex items-end justify-end max-w-[520.8px] mq675:max-w-full">
              <div className="h-[168px] flex-1 flex items-end flex-wrap content-end gap-x-[91.8px] gap-y-[30px] max-w-[468px] mq675:gap-[46px] mq675:max-w-full">
                <div className="flex-1 flex flex-col items-start py-[53.9px] px-0 box-border gap-[5px] min-w-[106px] max-w-[106px] mq675:max-w-full">
                  <b className="self-stretch relative">R$ 1.250,30</b>
                  <div className="self-stretch relative text-[11px] text-[#595291] text-center">
                    Total de gastos
                  </div>
                </div>
                <div className="flex-1 flex flex-col items-start gap-[22px] min-w-[268px] text-[11px]">
                  <div className="self-stretch flex items-center justify-between py-0 pl-0 pr-0.5 gap-5">
                    <div className="h-4 flex-1 flex items-start gap-[9px] text-xs">
                      <div className="h-4 w-4 relative rounded-[50%] bg-[#ff7a1a]" />
                      <div className="relative">Alimentação</div>
                    </div>
                    <div className="h-[13px] flex items-start py-0 pl-0 pr-[15px] box-border">
                      <div className="relative font-medium">R$ 625,40</div>
                    </div>
                    <div className="relative text-[#595291] inline-block min-w-[25px]">
                      50%
                    </div>
                  </div>
                  <div className="self-stretch flex items-center justify-between py-0 pl-0 pr-0.5 gap-5">
                    <div className="h-4 flex items-start gap-[9px] text-xs">
                      <div className="h-4 w-4 relative rounded-[50%] bg-[#2e80ed]" />
                      <div className="relative">Transporte</div>
                    </div>
                    <div className="h-[13px] flex items-start py-0 pl-0 pr-[7px] box-border">
                      <div className="relative font-medium">R$ 365,00</div>
                    </div>
                    <div className="relative text-[#595291] inline-block min-w-[25px]">
                      29%
                    </div>
                  </div>
                  <div className="self-stretch flex items-center justify-between py-0 pl-0 pr-[5px] gap-5">
                    <div className="h-4 flex items-start py-0 pl-0 pr-[23px] box-border gap-[9px] text-xs">
                      <div className="h-4 w-4 relative rounded-[50%] bg-[#f23d91]" />
                      <div className="relative inline-block min-w-[33px]">
                        Lazer
                      </div>
                    </div>
                    <div className="relative font-medium">R$ 249,90</div>
                    <div className="relative text-[#595291]">12%</div>
                  </div>
                  <div className="self-stretch flex items-center justify-between py-0 pl-0 pr-[9px] gap-5">
                    <div className="h-4 flex items-start py-0 pl-0 pr-[18px] box-border gap-[9px] text-xs">
                      <div className="h-4 w-4 relative rounded-[50%] bg-[#ff4254]" />
                      <div className="relative">Saúde</div>
                    </div>
                    <div className="relative font-medium">R$ 120,00</div>
                    <div className="relative text-[#595291] inline-block min-w-[17px]">
                      7%
                    </div>
                  </div>
                  <div className="self-stretch flex items-center justify-between py-0 pl-0 pr-2 gap-5">
                    <div className="h-4 flex items-start gap-[9px] text-xs">
                      <div className="h-4 w-4 relative rounded-[50%] bg-[#661fe8]" />
                      <div className="relative">Educação</div>
                    </div>
                    <div className="h-[13px] flex items-start py-0 pl-0 pr-[7px] box-border">
                      <div className="relative font-medium">R$ 98,00</div>
                    </div>
                    <div className="relative text-[#595291] inline-block min-w-[18px]">
                      2%
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img
            className="w-[216px] h-[216px] absolute !!m-[0 important] top-[calc(50%_-_93.9px)] left-[19px] z-[2]"
            loading="lazy"
            alt=""
            src="/Donut-categorias-final.svg"
          />
        </div>
        <div className="flex-1 rounded-[9px] bg-[#fff] border-[#e3e5f2] border-solid border-[1px] box-border overflow-hidden flex flex-col items-start justify-center pt-6 px-[19px] pb-[21px] gap-[15px] min-w-[283px] max-w-[285px] text-[17px] mq675:max-w-full mq450:flex-1">
          <div className="w-[72.9px] h-[42px] flex items-start py-0 px-[15px] box-border">
            <img
              className="h-[42px] w-[42px] relative rounded-xl"
              alt=""
              src="/Category-tag-badge.svg"
            />
          </div>
          <div className="w-full h-[42px] flex items-start pt-0 pb-0.5 pl-[15px] pr-0 box-border max-w-[188.9px]">
            <h3 className="m-0 flex-1 relative text-[length:inherit] font-bold font-[inherit] inline-block max-w-[173px]">
              Crie suas categorias
              <br />
              personalizadas
            </h3>
          </div>
          <div className="w-full h-20 flex items-start pt-0 pb-8 pl-[13px] pr-0 box-border max-w-[192.9px] text-[13px] text-[#595291]">
            <div className="flex-1 relative inline-block max-w-[179px]">
              Classifique seus gastos para
              <br />
              entender melhor para onde
              <br />
              seu dinheiro está indo.
            </div>
          </div>
          <button className="cursor-pointer [border:none] p-0 bg-[#5712d6] self-stretch h-[46px] relative rounded-[10px] overflow-hidden shrink-0">
            <div className="absolute top-[15.1px] left-[55px] text-[13px] font-medium font-[Inter] text-[#fff] whitespace-pre-wrap text-left inline-block min-w-[114px] shrink-0">
              ＋ Nova categoria
            </div>
            <div className="absolute top-[0.1px] left-[291px] w-[30px] h-[46px] flex flex-col items-start gap-[13px] shrink-0">
              <img
                className="w-[30px] h-[30px] relative rounded-[15px] shrink-0"
                alt=""
              />
              <img
                className="w-[30px] h-[30px] relative rounded-[15px] shrink-0"
                alt=""
              />
              <img
                className="w-[30px] h-[30px] relative rounded-[15px] shrink-0"
                alt=""
              />
              <img
                className="w-[30px] h-[30px] relative rounded-[15px] shrink-0"
                alt=""
              />
              <img
                className="w-[30px] h-[30px] relative rounded-[15px] shrink-0"
                alt=""
              />
              <img
                className="w-[30px] h-[30px] relative rounded-[15px] shrink-0"
                alt=""
              />
              <img
                className="w-[30px] h-[30px] relative rounded-[15px] shrink-0"
                alt=""
              />
              <img
                className="w-[30px] h-[30px] relative rounded-[15px] shrink-0"
                alt=""
              />
            </div>
          </button>
        </div>
      </section>
      <section className="self-stretch rounded-[9px] bg-[#fff] border-[#e3e6f2] border-solid border-[1px] box-border overflow-hidden flex flex-col items-center pt-[7px] px-2.5 pb-[52px] gap-1 max-w-full text-left text-[11px] text-[#140d40] font-[Inter] mq675:pt-5 mq675:pb-[34px] mq675:box-border">
        <div className="self-stretch flex items-center flex-wrap content-center pt-0 px-1.5 pb-1 box-border gap-2 max-w-full text-base">
          <div className="flex-[1.1429] flex items-start pt-0 px-0 pb-[6.9px] box-border min-w-[123px] max-w-full">
            <h3 className="m-0 flex-1 relative text-[length:inherit] font-semibold font-[inherit] inline-block max-w-full">
              Suas categorias
            </h3>
          </div>
          <div className="h-10 flex-1 rounded-lg bg-[#fff] border-[#e3e6f2] border-solid border-[1px] box-border overflow-hidden flex items-start pt-[11px] px-3 pb-3.5 min-w-[136px] max-w-[208px] mq450:max-w-full mq450:flex-1">
            <input
              className="w-full [border:none] [outline:none] font-[Inter] text-[11px] bg-[transparent] h-[13px] relative text-[#8078ab] whitespace-pre-wrap text-left inline-block min-w-[66px] p-0"
              placeholder="⌕  Buscar categoria..."
              type="text"
            />
          </div>
        </div>
        <div className="w-full bg-[#f6f7fc] flex items-center pt-[13px] pb-3.5 pl-1.5 pr-[19px] box-border gap-0.5 max-w-[824px] text-[#595291] mq450:flex-wrap mq450:max-w-full">
          <div className="flex-1 relative inline-block min-w-[23px] max-w-[177px]">
            Nome
          </div>
          <div className="flex-1 relative inline-block min-w-[14px] max-w-[85px]">
            Cor
          </div>
          <div className="flex-1 relative inline-block min-w-[22px] max-w-[146px]">
            Ícone
          </div>
          <div className="flex-1 relative inline-block min-w-[91px] max-w-full">
            Total gasto (este mês)
          </div>
          <div className="relative">Ações</div>
        </div>
        <div className="self-stretch flex items-center flex-wrap content-center pt-1 pb-1.5 pl-2.5 pr-0 gap-[23px] text-center">
          <div className="flex-[2.3574] flex items-start pt-0 px-0 pb-[1.9px] box-border min-w-[66px] max-w-[160px] text-left">
            <div className="flex-1 relative">Alimentação</div>
          </div>
          <div className="flex-1 flex items-start py-0 pl-0 pr-[38px] box-border min-w-[28px] max-w-[66px] mq450:flex-1">
            <div className="h-7 w-7 relative rounded-[50%] bg-[#ff9c6b]" />
          </div>
          <div className="flex-[1.8522] flex items-center py-[5px] px-[3px] box-border bg-[url('/public/Frame4@3x.png')] bg-cover bg-no-repeat bg-[top] min-w-[26px] max-w-[28px] w-7 h-7 mq450:flex-1">
            <img
              className="h-[18px] w-[19px] relative"
              alt=""
              src="/Vector.svg"
            />
          </div>
          <div className="flex-[2.3574] flex items-start pt-0 px-0 pb-[2.9px] box-border min-w-[54px]">
            <div className="flex-1 relative font-medium">R$ 625,40</div>
          </div>
          <div className="flex-[2.1634] flex items-start pt-0 pb-[1.9px] pl-0 pr-[13px] box-border min-w-[38px] max-w-[158px] text-[#595291] mq450:flex-1">
            <div className="flex-1 relative">50%</div>
          </div>
          <button className="cursor-pointer [border:none] pt-0 px-0 pb-[1.9px] bg-[transparent] h-[19.9px] flex items-start box-border">
            <h3 className="m-0 relative text-[15px] font-normal font-[Inter] text-[#7a61e6] text-left inline-block min-w-[16px]">
              ✎
            </h3>
          </button>
          <div className="h-[21.9px] flex items-start pt-0 px-0 pb-[3.9px] box-border">
            <img
              className="h-[18px] w-[18px] relative"
              alt=""
              src="/Category-Row-Wrappers.svg"
            />
          </div>
        </div>
        <div className="w-full h-px relative bg-[#e6e8f2] max-w-[838px] mq450:max-w-full" />
        <div className="self-stretch flex items-center flex-wrap content-center pt-0 pb-1.5 pl-2.5 pr-0 gap-[23px] text-center">
          <div className="flex-[2.3574] flex items-start pt-0 px-0 pb-[2.9px] box-border min-w-[56px] max-w-[160px] text-left">
            <div className="flex-1 relative">Transporte</div>
          </div>
          <div className="flex-1 flex items-start py-0 pl-0 pr-[38px] box-border min-w-[28px] max-w-[66px] mq450:flex-1">
            <div className="h-7 w-7 relative rounded-[50%] bg-[#599cf0]" />
          </div>
          <div className="flex-[1.6099] flex items-start py-0 pl-0 pr-[13px] box-border min-w-[35px] max-w-[41px] mq450:flex-1">
            <div className="flex-1 flex items-center justify-center pt-[7px] px-0 pb-[5.3px] box-border bg-[url('/public/Frame7@3x.png')] bg-cover bg-no-repeat bg-[top] w-7 h-7">
              <img
                className="h-[15.7px] w-[18.4px] relative"
                alt=""
                src="/Vector1.svg"
              />
            </div>
          </div>
          <div className="flex-[2.3574] flex items-start pt-0 px-0 pb-[2.9px] box-border min-w-[54px]">
            <div className="flex-1 relative font-medium">R$ 365,00</div>
          </div>
          <div className="flex-[2.3574] flex items-start pt-0 px-0 pb-[1.9px] box-border min-w-[25px] max-w-[171px] text-[#595291]">
            <div className="flex-1 relative">29%</div>
          </div>
          <button className="cursor-pointer [border:none] pt-0 px-0 pb-[1.9px] bg-[transparent] h-[19.9px] flex items-start box-border">
            <h3 className="m-0 relative text-[15px] font-normal font-[Inter] text-[#7a61e6] text-left inline-block min-w-[16px]">
              ✎
            </h3>
          </button>
          <div className="h-[21.9px] flex items-start pt-0 px-0 pb-[3.9px] box-border">
            <img
              className="h-[18px] w-[18px] relative"
              alt=""
              src="/Category-Row-Wrappers.svg"
            />
          </div>
        </div>
        <div className="w-full h-px relative bg-[#e6e8f2] max-w-[838px] mq450:max-w-full" />
        <div className="self-stretch flex items-center flex-wrap content-center pt-0 pb-1.5 pl-2.5 pr-0 gap-[23px] text-center">
          <div className="flex-[2.3574] flex items-start pt-0 px-0 pb-[2.9px] box-border min-w-[28px] max-w-[160px] text-left">
            <div className="flex-1 relative">Lazer</div>
          </div>
          <div className="flex-1 flex items-start py-0 pl-0 pr-[38px] box-border min-w-[28px] max-w-[66px] mq450:flex-1">
            <div className="h-7 w-7 relative rounded-[50%] bg-[#f24094]" />
          </div>
          <div className="h-7 flex items-start py-0 pl-0 pr-4 box-border">
            <img
              className="h-7 w-7 relative"
              alt=""
              src="/merged-asset-23.svg"
            />
          </div>
          <div className="flex-[2.3574] flex items-start pt-0 px-0 pb-[2.9px] box-border min-w-[55px]">
            <div className="flex-1 relative font-medium">R$ 249,90</div>
          </div>
          <div className="flex-[2.3574] flex items-start pt-0 px-0 pb-[1.9px] box-border min-w-[22px] max-w-[174px] text-[#595291]">
            <div className="flex-1 relative">12%</div>
          </div>
          <button className="cursor-pointer [border:none] pt-0 px-0 pb-[1.9px] bg-[transparent] h-[19.9px] flex items-start box-border">
            <h3 className="m-0 relative text-[15px] font-normal font-[Inter] text-[#7a61e6] text-left inline-block min-w-[16px]">
              ✎
            </h3>
          </button>
          <div className="h-[21.9px] flex items-start pt-0 px-0 pb-[3.9px] box-border">
            <img
              className="h-[18px] w-[18px] relative"
              alt=""
              src="/Category-Row-Wrappers.svg"
            />
          </div>
        </div>
        <div className="w-full h-px relative bg-[#e6e8f2] max-w-[838px] mq450:max-w-full" />
        <div className="self-stretch flex items-center flex-wrap content-center pt-0 pb-1.5 pl-2.5 pr-0 gap-[23px]">
          <div className="flex-[2.3574] flex items-start pt-0 px-0 pb-[2.9px] box-border min-w-[32px] max-w-[160px]">
            <div className="flex-1 relative">Saúde</div>
          </div>
          <div className="flex-1 flex items-start py-0 pl-0 pr-[38px] box-border min-w-[28px] max-w-[66px] mq450:flex-1">
            <div className="h-7 w-7 relative rounded-[50%] bg-[#ff2b3a]" />
          </div>
          <img className="h-7 w-7 relative" alt="" src="/merged-asset-33.svg" />
          <div className="flex-[1.9125] flex items-start pt-0 pb-[2.9px] pl-0 pr-[57px] box-border min-w-[109px] text-center mq450:pr-5 mq450:box-border mq450:flex-1">
            <div className="flex-1 relative font-medium">R$ 120,00</div>
          </div>
          <div className="flex-[2.3574] flex items-start pt-0 px-0 pb-[1.9px] box-border min-w-[17px] max-w-[99px] text-[#595291]">
            <div className="relative inline-block min-w-[17px]">7%</div>
          </div>
          <button className="cursor-pointer [border:none] pt-0 px-0 pb-[1.9px] bg-[transparent] h-[19.9px] flex items-start box-border">
            <h3 className="m-0 relative text-[15px] font-normal font-[Inter] text-[#7a61e6] text-left inline-block min-w-[16px]">
              ✎
            </h3>
          </button>
          <div className="h-[21.9px] flex items-start pt-0 px-0 pb-[3.9px] box-border">
            <img
              className="h-[18px] w-[18px] relative"
              alt=""
              src="/Category-Row-Wrappers.svg"
            />
          </div>
        </div>
        <div className="w-full h-px relative bg-[#e6e8f2] max-w-[838px] mq450:max-w-full" />
        <div className="self-stretch flex items-center pt-0 pb-1.5 pl-2.5 pr-0 gap-[23px] text-center mq450:flex-wrap">
          <div className="flex-[2.3574] flex items-start pt-0 px-0 pb-[2.9px] box-border min-w-[104px] max-w-[160px] text-left">
            <div className="flex-1 relative">Educação</div>
          </div>
          <div className="flex-1 flex items-start py-0 pl-0 pr-[38px] box-border min-w-[28px] max-w-[66px] mq450:flex-1">
            <div className="h-7 w-7 relative rounded-[50%] bg-[#661fe8]" />
          </div>
          <div className="flex-[2.3574] flex items-center justify-center pt-[5px] px-0 pb-1.5 box-border bg-[url('/public/Category-Icons@3x.png')] bg-cover bg-no-repeat bg-[top] min-w-[18px] max-w-[28px] w-7 h-7">
            <img
              className="h-[17px] w-[18px] relative"
              loading="lazy"
              alt=""
              src="/Vector2.svg"
            />
          </div>
          <div className="flex-[2.3574] flex items-start pt-0 px-0 pb-[2.9px] box-border min-w-[153px]">
            <div className="flex-1 relative font-medium">R$ 98,00</div>
          </div>
          <div className="flex-[2.1716] flex items-start pt-0 pb-[1.9px] pl-0 pr-[13px] box-border min-w-[107px] max-w-[165px] text-[#595291] mq450:flex-1">
            <div className="flex-1 relative">2%</div>
          </div>
          <button className="cursor-pointer [border:none] pt-0 px-0 pb-[1.9px] bg-[transparent] h-[19.9px] flex items-start box-border">
            <h3 className="m-0 relative text-[15px] font-normal font-[Inter] text-[#7a61e6] text-left inline-block min-w-[16px]">
              ✎
            </h3>
          </button>
          <div className="h-[21.9px] flex items-start pt-0 px-0 pb-[3.9px] box-border">
            <img
              className="h-[18px] w-[18px] relative"
              alt=""
              src="/Category-Row-Wrappers.svg"
            />
          </div>
        </div>
        <div className="w-full h-px relative bg-[#e6e8f2] max-w-[838px] mq450:max-w-full" />
        <div className="self-stretch flex items-center flex-wrap content-center pt-0 pb-1.5 pl-2.5 pr-0 gap-[23px]">
          <div className="flex-[2.3574] flex items-start pt-0 px-0 pb-[2.9px] box-border min-w-[43px] max-w-[160px]">
            <div className="flex-1 relative">Moradia</div>
          </div>
          <div className="flex-1 flex items-start py-0 pl-0 pr-[38px] box-border min-w-[28px] max-w-[66px] mq450:flex-1">
            <div className="h-7 w-7 relative rounded-[50%] bg-[#33ba94]" />
          </div>
          <img className="h-7 w-7 relative" alt="" src="/merged-asset-42.svg" />
          <div className="flex-[1.8187] flex items-start pt-0 pb-[2.9px] pl-0 pr-[69px] box-border min-w-[110px] text-center mq450:pr-5 mq450:box-border mq450:flex-1">
            <div className="flex-1 relative font-medium">R$ 0,00</div>
          </div>
          <div className="flex-[2.3574] flex items-start pt-0 px-0 pb-[1.9px] box-border min-w-[18px] max-w-[99px] text-[#595291]">
            <div className="relative inline-block min-w-[18px]">0%</div>
          </div>
          <button className="cursor-pointer [border:none] pt-0 px-0 pb-[1.9px] bg-[transparent] h-[19.9px] flex items-start box-border">
            <h3 className="m-0 relative text-[15px] font-normal font-[Inter] text-[#7a61e6] text-left inline-block min-w-[16px]">
              ✎
            </h3>
          </button>
          <div className="h-[21.9px] flex items-start pt-0 px-0 pb-[3.9px] box-border">
            <img
              className="h-[18px] w-[18px] relative"
              alt=""
              src="/Category-Row-Wrappers.svg"
            />
          </div>
        </div>
        <div className="w-full h-px relative bg-[#e6e8f2] max-w-[838px] mq450:max-w-full" />
        <div className="self-stretch flex items-center flex-wrap content-center pt-0 pb-1.5 pl-2.5 pr-0 gap-[23px]">
          <div className="flex-[2.3929] flex items-start pt-0 px-0 pb-[2.9px] box-border min-w-[36px] max-w-[160px]">
            <div className="flex-1 relative">Salário</div>
          </div>
          <div className="flex-1 flex items-start py-0 pl-0 pr-[39px] box-border min-w-[28px] max-w-[67px] mq450:flex-1">
            <div className="h-7 w-7 relative rounded-[50%] bg-[#65f553]" />
          </div>
          <img className="h-7 w-7 relative" alt="" src="/merged-asset-51.svg" />
          <div className="flex-[1.8363] flex items-start pt-0 pb-[2.9px] pl-0 pr-[70px] box-border min-w-[111px] text-center mq450:pr-5 mq450:box-border mq450:flex-1">
            <div className="flex-1 relative font-medium">R$ 0,00</div>
          </div>
          <div className="flex-[2.3929] flex items-start pt-0 px-0 pb-[1.9px] box-border min-w-[18px] max-w-[99px] text-[#595291]">
            <div className="relative inline-block min-w-[18px]">0%</div>
          </div>
          <button className="cursor-pointer [border:none] pt-0 px-0 pb-[1.9px] bg-[transparent] h-[19.9px] flex items-start box-border">
            <h3 className="m-0 relative text-[15px] font-normal font-[Inter] text-[#7a61e6] text-left inline-block min-w-[16px]">
              ✎
            </h3>
          </button>
          <div className="h-[21.9px] flex items-start pt-0 px-0 pb-[3.9px] box-border">
            <img
              className="h-[18px] w-[18px] relative"
              alt=""
              src="/Category-Row-Wrappers.svg"
            />
          </div>
        </div>
        <div className="w-full h-px relative bg-[#e6e8f2] max-w-[838px] mq450:max-w-full" />
        <div className="self-stretch flex items-center flex-wrap content-center py-0 pl-2.5 pr-0 gap-[23px]">
          <div className="flex-[2.3574] flex items-start pt-0 px-0 pb-[1.9px] box-border min-w-[36px] max-w-[160px]">
            <div className="flex-1 relative">Outros</div>
          </div>
          <div className="flex-1 flex items-start py-0 pl-0 pr-[38px] box-border min-w-[28px] max-w-[66px] mq450:flex-1">
            <div className="h-7 w-7 relative rounded-[50%] bg-[#9194ad]" />
          </div>
          <img className="h-7 w-7 relative" alt="" src="/merged-asset-61.svg" />
          <div className="flex-[1.8187] flex items-start pt-0 pb-[2.9px] pl-0 pr-[69px] box-border min-w-[110px] text-center mq450:pr-5 mq450:box-border mq450:flex-1">
            <div className="flex-1 relative font-medium">R$ 0,00</div>
          </div>
          <div className="flex-[2.3574] flex items-start pt-0 px-0 pb-[1.9px] box-border min-w-[18px] max-w-[99px] text-[#595291]">
            <div className="relative inline-block min-w-[18px]">0%</div>
          </div>
          <button className="cursor-pointer [border:none] pt-0 px-0 pb-[1.9px] bg-[transparent] h-[19.9px] flex items-start box-border">
            <h3 className="m-0 relative text-[15px] font-normal font-[Inter] text-[#7a61e6] text-left inline-block min-w-[16px]">
              ✎
            </h3>
          </button>
          <div className="h-[21.9px] flex items-start pt-0 px-0 pb-[3.9px] box-border">
            <img
              className="h-[18px] w-[18px] relative"
              alt=""
              src="/Category-Row-Wrappers.svg"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default PageBody;
