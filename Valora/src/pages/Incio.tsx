import { FunctionComponent, useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ParceriasValora1 from "../components/ParceriasValora1";
import Topbar5 from "../components/Topbar5";
import EntradasESadas from "../components/EntradasESadas";
import MinhasCaixinhas from "../components/MinhasCaixinhas";
import { api, getStoredUser, getLoginEmail, type MovementDto, type CashboxDto } from "../services/valoraApi";

const Incio: FunctionComponent = () => {
  const navigate = useNavigate();
  const [movimentacoes,setMovimentacoes]=useState<MovementDto[]>([]);
  const [caixinhas,setCaixinhas]=useState<CashboxDto[]>([]);
  const [loading,setLoading]=useState(true);
  const [error,setError]=useState("");
  const [displayName,setDisplayName]=useState(getStoredUser()?.nome||getLoginEmail()?.split("@")[0]||"");
  useEffect(()=>{let active=true;Promise.all([api.movimentacoes.listAll(),api.caixinhas.list()]).then(([movs,boxes])=>{if(!active)return;setMovimentacoes(movs);setCaixinhas(boxes);setError("");}).catch(err=>{if(active)setError(err instanceof Error?err.message:"Erro ao carregar o resumo");}).finally(()=>{if(active)setLoading(false)});return()=>{active=false}},[]);
  const now=new Date();
  const current=movimentacoes.filter(m=>m.dataMovimentacao.startsWith(`${now.getFullYear()}-${String(now.getMonth()+1).padStart(2,"0")}`));
  const entradas=current.filter(m=>m.tipo==="RECEITA").reduce((s,m)=>s+Number(m.valor),0);
  const gastos=current.filter(m=>m.tipo==="DESPESA").reduce((s,m)=>s+Number(m.valor),0);
  const saldo=entradas-gastos;
  const money=(n:number)=>n.toLocaleString("pt-BR",{style:"currency",currency:"BRL"});
  const recent=[...movimentacoes].filter(m=>m.tipo==="DESPESA"||m.tipo==="RECEITA").sort((a,b)=>b.dataMovimentacao.localeCompare(a.dataMovimentacao)).slice(0,8);
  const [dashboardZoom, setDashboardZoom] = useState(1);
  useEffect(() => {
    const updateZoom = () => setDashboardZoom(Math.max(1, window.innerWidth / 1440));
    updateZoom();
    window.addEventListener("resize", updateZoom);
    return () => window.removeEventListener("resize", updateZoom);
  }, []);

  const onCategoriasNavClick = useCallback(() => {
    navigate("/categorias");
  }, [navigate]);

  return (
    <div data-valora-dashboard style={{ zoom: dashboardZoom }} className="w-full relative bg-[#f6f8fe] flex items-start flex-nowrap content-start gap-0 min-w-[1440px] leading-[normal] tracking-[normal]">
      <section className="h-[1024px] w-[232px] bg-[#160b30] overflow-hidden shrink-0 flex flex-col items-center py-[33.9px] px-3 box-border relative isolate gap-[41.1px] text-left text-[27px] text-[#fff] font-[Inter] mq450:pt-[22px] mq450:pb-[22px] mq450:box-border mq450:pt-5 mq450:pb-5 mq450:box-border">
        <div className="flex items-center py-0 pl-0 pr-10 box-border gap-px max-w-[165.3px]">
          <button className="cursor-pointer [border:none] pt-0 px-0 pb-[3.9px] bg-[transparent] h-[36.9px] flex items-start box-border">
            <img
              className="h-[33px] w-10 relative object-cover"
              alt=""
              src="/logo-branco-3@2x.png"
            />
          </button>
          <h2 className="m-0 relative text-[length:inherit] font-bold font-[inherit] mq450:text-[22px]">
            Valora
          </h2>
        </div>
        <div className="self-stretch flex flex-col items-start pt-0 pb-[287.9px] pl-px pr-0 gap-1 mq450:pb-[187px] mq450:box-border">
          <button className="cursor-pointer border-[rgba(219,209,245,0.28)] border-solid border-[1px] pt-[13px] px-[13px] pb-[15px] bg-[#4212a6] self-stretch h-[54px] rounded-[10px] box-border overflow-hidden shrink-0 flex items-center gap-5 hover:bg-[#7545d9] hover:border-[rgba(194,184,219,0.28)] hover:border-solid hover:hover:border-[1px] hover:box-border">
            <img className="h-6 w-6 relative" alt="" src="/Wrapper.svg" />
            <div className="flex-1 relative text-sm font-[Inter] text-[#fff] text-left">
              Início
            </div>
          </button>
          <button onClick={() => navigate("/movimentacoes")} className="cursor-pointer border-[rgba(219,209,245,0.28)] border-solid border-[1px] p-3.5 bg-[transparent] self-stretch h-[54px] rounded-[10px] box-border overflow-hidden shrink-0 flex items-start gap-5">
            <img
              className="h-6 w-6 relative"
              alt=""
              src="/Movimenta-es-icon.svg"
            />
            <div className="flex-1 flex items-start pt-[1.9px] px-0 pb-0">
              <div className="flex-1 relative text-sm font-[Inter] text-[#fff] text-left">
                Movimentações
              </div>
            </div>
          </button>
          <button onClick={() => navigate("/caixinhas")} className="cursor-pointer border-[rgba(219,209,245,0.28)] border-solid border-[1px] p-3.5 bg-[#160b30] self-stretch h-[54px] rounded-[10px] box-border overflow-hidden shrink-0 flex items-start gap-5">
            <img
              className="h-6 w-6 relative"
              alt=""
              src="/Archive-Caixinhas.svg"
            />
            <div className="flex-1 flex items-start pt-[1.9px] px-0 pb-0">
              <div className="flex-1 relative text-sm font-[Inter] text-[#fff] text-left">
                Caixinhas
              </div>
            </div>
          </button>
          <button
            className="cursor-pointer border-[rgba(219,209,245,0.28)] border-solid border-[1px] pt-4 pb-[19px] pl-0 pr-[9px] bg-[transparent] self-stretch h-[54px] rounded-[10px] box-border overflow-hidden shrink-0 flex items-center justify-center hover:bg-[rgba(194,184,219,0.09)] hover:border-[rgba(194,184,219,0.28)] hover:border-solid hover:hover:border-[1px] hover:box-border"
            onClick={onCategoriasNavClick}
          >
            <div className="relative text-sm font-[Inter] text-[#fff] text-left">
              Categorias
            </div>
          </button>
          <button onClick={() => navigate("/contas-conectadas")} className="cursor-pointer border-[rgba(219,209,245,0.28)] border-solid border-[1px] p-3.5 bg-[transparent] self-stretch h-[54px] rounded-[10px] box-border overflow-hidden shrink-0 flex items-start justify-center gap-5">
            <img
              className="h-6 w-6 relative"
              alt=""
              src="/Contas-conectadas-icon.svg"
            />
            <div className="flex-1 flex items-start pt-[1.9px] px-0 pb-0">
              <div className="flex-1 relative text-sm font-[Inter] text-[#fff] text-left">
                Contas conectadas
              </div>
            </div>
          </button>
        </div>
        <img
          className="w-6 h-6 absolute !!m-[0 important] top-[calc(50%_-_212px)] left-[29px] z-[1]"
          alt=""
          src="/Divider.svg"
        />
        <ParceriasValora1 />
      </section>
      <main className="h-[1024px] w-[1208px] flex-none flex flex-col items-center gap-[18.1px] min-w-[1208px] min-h-[1024px] max-w-full">
        <Topbar5 />
        <section className="w-full h-[885px] relative max-w-[1205px] text-left text-[32px] text-[#130e33] font-[Inter] lg:max-w-full mq450:h-auto mq450:min-h-[885px]">
          <h2 className="m-0 absolute top-[0px] left-[19.95px] text-[length:inherit] font-bold font-[inherit] whitespace-nowrap mq450:text-[26px] mq450:text-[19px]">
            Olá{displayName?`, ${displayName.split(" ")[0]}`:""} 👋
          </h2>
          {error&&<p role="alert" className="absolute top-[46px] left-[380px] text-xs text-red-600">{error}</p>}
          <h3 className="m-0 absolute top-[40px] left-[19.95px] text-[17px] font-normal font-[inherit] text-[#636391]">
            Que bom te ver por aqui!
          </h3>
          <section className="absolute top-[74px] left-[19.95px] rounded-xl bg-[#fff] w-[450px] overflow-hidden flex flex-col items-start pt-0 px-0 pb-1 box-border max-w-full text-left text-[28px] text-[#fff] font-[Inter]">
            <div className="self-stretch rounded-xl [background:linear-gradient(90deg,_#1b0641,_#300963)] overflow-hidden flex flex-col items-start py-[14.1px] pl-[25px] pr-3 box-border gap-[14.2px] max-w-full">
              <div className="self-stretch flex items-start py-[8.9px] px-0 box-border gap-[15.9px] max-w-full mq450:flex-wrap">
                <b className="relative mq450:text-[22px]">▣</b>
                <div className="flex-1 flex flex-col items-start pt-[1.9px] px-0 pb-0 box-border gap-[5px] min-w-[242px] max-w-full text-base">
                  <h3 className="m-0 self-stretch relative text-[length:inherit] font-bold font-[inherit]">
                    Resumo de {now.toLocaleDateString("pt-BR",{month:"long"})}
                  </h3>
                  <div className="self-stretch relative text-xs">
                    Controle seus gastos e acompanhe seus objetivos
                  </div>
                </div>
              </div>
              <div className="self-stretch flex items-end flex-wrap content-end gap-2 text-[15px]">
                <div className="flex-1 flex flex-col items-start pt-0 px-0 pb-[5.9px] box-border gap-1.5 min-w-[278px]">
                  <h3 className="m-0 self-stretch relative text-[length:inherit] font-normal font-[inherit]">
                    Saldo registrado
                  </h3>
                  <h1 className="m-0 self-stretch relative text-[39px] font-bold font-[inherit] mq450:text-[31px] mq450:text-[23px]">
                    {loading?"Carregando...":error?"Indisponível":money(saldo)}
                  </h1>
                  <div className="self-stretch relative text-xs font-semibold whitespace-pre-wrap">
                    Entradas {money(entradas)} | Gastos {money(gastos)}
                  </div>
                </div>
                <button onClick={()=>navigate("/movimentacoes")} className="cursor-pointer border-[#fff] border-solid border-[1px] py-[12.5px] pl-[18px] pr-3.5 bg-[rgba(89,28,199,0.3)] h-[42px] rounded-[10px] box-border overflow-hidden flex items-center justify-center hover:bg-[rgba(128,66,237,0.3)] hover:border-[#e6e6e6] hover:border-solid hover:hover:border-[1px] hover:box-border">
                  <div className="relative text-xs font-semibold font-[Inter] text-[#fff] whitespace-pre-wrap text-left">
                    Ver detalhes →
                  </div>
                </button>
              </div>
            </div>
            <div className="self-stretch flex items-center flex-wrap content-center p-[15px] gap-[13px] text-center text-[11px] text-[#130e33]">
              <div className="flex-1 flex flex-col items-start gap-2 min-w-[81px]">
                <button className="cursor-pointer [border:none] py-[8.9px] px-0 bg-[#f0e8ff] self-stretch h-16 rounded-[9px] overflow-hidden shrink-0 flex items-start justify-center box-border hover:bg-[#d6cfe6]">
                  <h2 className="m-0 relative text-[25px] font-bold font-[Inter] text-[#4f13d4] text-left mq450:text-xl">
                    −
                  </h2>
                </button>
                <div className="self-stretch relative font-semibold">
                  Registrar gasto
                </div>
              </div>
              <div className="flex-1 flex flex-col items-start gap-2 min-w-[92px]">
                <button className="cursor-pointer [border:none] py-[8.9px] px-0 bg-[#f0e8ff] self-stretch h-16 rounded-[9px] overflow-hidden shrink-0 flex items-start justify-center box-border hover:bg-[#d6cfe6]">
                  <h2 className="m-0 relative text-[25px] font-bold font-[Inter] text-[#4f13d4] text-left mq450:text-xl">
                    +
                  </h2>
                </button>
                <div className="self-stretch relative font-semibold">
                  Registrar entrada
                </div>
              </div>
              <div className="cursor-pointer flex-1 flex flex-col items-center gap-2 min-w-[95px]">
                <img
                  className="self-stretch h-16 relative rounded-[9px] max-w-full overflow-hidden shrink-0"
                  loading="lazy"
                  alt=""
                  src="/Sal-rio.svg"
                />
                <div className="relative font-semibold">Salário</div>
              </div>
              <div className="cursor-pointer flex-1 flex flex-col items-start gap-2 min-w-[95px]">
                <img
                  className="self-stretch h-16 relative rounded-[9px] max-w-full overflow-hidden shrink-0"
                  loading="lazy"
                  alt=""
                  src="/Gastos-fixos.svg"
                />
                <div className="self-stretch relative font-semibold">
                  Gastos fixos
                </div>
              </div>
            </div>
          </section>
          <EntradasESadas movimentacoes={movimentacoes} />
          <MinhasCaixinhas caixinhas={caixinhas} loading={loading} />
          <section className="absolute top-[408px] left-[19.95px] rounded-xl bg-[#fff] border-[#e3e6f2] border-solid border-[1px] box-border w-[773px] overflow-hidden flex flex-col items-start pt-[17px] px-[11px] pb-[30px] max-w-full text-left text-lg text-[#130e33] font-[Inter]">
            <div className="self-stretch flex items-center flex-wrap content-center py-0 pl-[5px] pr-[19px] box-border gap-2 max-w-full">
              <h2 className="m-0 flex-1 relative text-[length:inherit] font-bold font-[inherit] inline-block min-w-[185px] max-w-full">
                Transações recentes
              </h2>
              <button onClick={()=>navigate("/movimentacoes")} className="cursor-pointer relative text-xs font-medium text-[#4f13d4]">Ver todas →</button>
            </div>
            <div className="self-stretch h-[406px] overflow-x-auto shrink-0 flex flex-col items-start py-[22px] pl-1 pr-0.5 box-border gap-3 text-[11px] text-[#636391]">
              <div className="w-[742px] flex items-start min-w-[345px] [row-gap:20px] mq450:flex-wrap">
                <div className="flex-1 relative inline-block min-w-[69px] max-w-[122px]">
                  Data
                </div>
                <div className="flex-1 relative inline-block min-w-[85px] max-w-[205px]">
                  Descrição
                </div>
                <div className="flex-1 relative inline-block min-w-[65px] max-w-[192px]">
                  Categoria
                </div>
                <div className="flex-1 relative inline-block min-w-[41px] max-w-[136px]">
                  Tipo
                </div>
                <div className="flex-1 relative inline-block min-w-[85px] max-w-[87px]">
                  Valor
                </div>
              </div>
              {loading?<p className="text-sm text-[#636391]">Carregando transações...</p>:error?<p role="alert" className="text-sm text-red-600">{error}</p>:recent.length===0?<p className="text-sm text-[#636391]">Nenhuma transação registrada.</p>:recent.map(m=><div key={m.id} className="w-[742px] flex flex-col gap-3"><div className="self-stretch flex items-start text-xs"><div className="flex-1 max-w-[122px]">{m.dataMovimentacao.split("-").reverse().join("/")}</div><div className="flex-1 max-w-[205px] font-medium text-[#130e33]">{m.descricao}</div><div className="flex-1 max-w-[192px]">{m.categoria||"Sem categoria"}</div><div className="flex-1 max-w-[136px]">{m.tipo==="RECEITA"?"Entrada":"Gasto"}</div><b className={`flex-1 max-w-[87px] ${m.tipo==="RECEITA"?"text-[#059e57]":"text-[#f01424]"}`}>{m.tipo==="RECEITA"?"+ ":"- "}{money(Number(m.valor))}</b></div><div className="border-t border-[#e3e6f2]"/></div>)}
            </div>
          </section>
          <section className="absolute top-[494px] left-[805.05px] w-[375px] flex flex-col items-start gap-[9px] max-w-full text-left text-base text-[#1f1a29] font-[Inter]">
            <div className="self-stretch h-[186px] flex flex-col items-center max-w-full">
              <h3 className="m-0 w-full relative text-[length:inherit] font-semibold font-[inherit] inline-block max-w-[351px]">
                Resumo do orçamento
              </h3>
              <div className="self-stretch rounded-[14px] bg-white p-4 text-[12px]">
                <p className="font-semibold text-[#636391]">Saldo de movimentações do mês</p>
                <b className="block text-[18px] text-[#4f13d4] mt-2">{error?"Indisponível":money(saldo)}</b>
                <p className="mt-3 text-[#636391]">Caixinhas cadastradas: {caixinhas.length}</p>
                <p className="mt-1 text-[#636391]">Gastos do mês: {money(gastos)}</p>
              </div>
            </div>
            <div className="self-stretch rounded-2xl overflow-hidden flex flex-col items-start bg-[url('/Conquiste-seus-sonhos@3x.png')] bg-cover bg-no-repeat bg-[top] text-[9px] text-[#e0c9ff]">
              <div className="w-[245px] [background:linear-gradient(90deg,_rgba(10,_4,_31,_0.88),_rgba(10,_4,_31,_0))] flex flex-col items-start justify-center pt-4 px-[17px] pb-[21px] box-border gap-[7px]">
                <div className="self-stretch flex items-start pt-0 px-0 pb-1">
                  <div className="flex-1 relative font-medium">
                    CONQUISTE SEUS SONHOS
                  </div>
                </div>
                <h3 className="m-0 w-full h-[38px] relative text-base font-semibold font-[inherit] text-[#fff] inline-block max-w-[153px]">
                  Viagens que cabem
                  <br />
                  no seu orçamento.
                </h3>
                <div className="self-stretch flex items-start pt-0 px-0 pb-[11px] text-[#e8e0f5]">
                  <div className="flex-1 relative">
                    Planeje hoje. Viaje com tranquilidade.
                  </div>
                </div>
                <button className="cursor-pointer [border:none] py-[11px] pl-[13px] pr-[23px] bg-[rgba(255,255,255,0.96)] w-[105px] h-[34px] rounded-[10px] overflow-hidden shrink-0 flex items-center box-border hover:bg-[rgba(230,230,230,0.96)]">
                  <div className="relative text-[10px] font-medium font-[Inter] text-[#4a129e] whitespace-pre-wrap text-left inline-block min-w-[69px]">
                    Saiba mais →
                  </div>
                </button>
              </div>
            </div>
          </section>
        </section>
      </main>
    </div>
  );
};

export default Incio;
