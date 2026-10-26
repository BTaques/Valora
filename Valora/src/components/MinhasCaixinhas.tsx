import { FunctionComponent } from "react";
import Carro from "./Carro";
import Estudos from "./Estudos";
import { useNavigate } from "react-router-dom";

export type MinhasCaixinhasType = {
  className?: string;
};

const MinhasCaixinhas: FunctionComponent<MinhasCaixinhasType> = ({
  className = "",
}) => {
  const navigate = useNavigate();
  return (
    <section
      className={`absolute top-[74px] left-[805.05px] rounded-xl bg-[#fff] border-[#e3e6f2] border-solid border-[1px] box-border w-[375px] overflow-hidden flex flex-col items-start pt-[17px] px-[13px] pb-7 gap-[11px] text-left text-[17px] text-[#130e33] font-[Inter] ${className}`}
    >
      <div className="self-stretch flex items-center pt-0 pb-1.5 pl-px pr-[5px] gap-2 mq450:flex-wrap">
        <h3 className="m-0 flex-1 relative text-[length:inherit] font-bold font-[inherit] inline-block min-w-[116px]">
          Minhas Caixinhas
        </h3>
        <div className="relative text-xs font-medium text-[#4f13d4]">
          Ver todas →
        </div>
      </div>
      <div role="link" tabIndex={0} onClick={() => navigate("/detalhes-caixinha")} onKeyDown={e => { if (e.key === "Enter") navigate("/detalhes-caixinha"); }} className="self-stretch cursor-pointer">
      <Carro
        prop="🚗"
        carro="Carro"
        r1000000DeR3000000="R$ 10.000,00 de R$ 30.000,00"
        progressData="33%"
      />
      </div>
      <Carro
        carroGap="19px"
        prop="✈"
        bWidth="unset"
        bMinWidth="24px"
        carro="Viagem"
        r1000000DeR3000000="R$ 2.500,00 de R$ 8.000,00"
        progressBarsWidth="60.5px"
        progressData="31%"
      />
      <Estudos
        icongraduationCap="/icon-graduation-cap.svg"
        estudos="Estudos"
        r100000DeR500000="R$ 1.000,00 de R$ 5.000,00"
        prop="20%"
      />
      <Estudos
        icongraduationCap="/icon-shield-check.svg"
        estudos="Emergência"
        r100000DeR500000="R$ 3.000,00 de R$ 10.000,00"
        rectangleWidth="58.5px"
        prop="30%"
        divDisplay="unset"
        divMinWidth="unset"
      />
    </section>
  );
};

export default MinhasCaixinhas;
