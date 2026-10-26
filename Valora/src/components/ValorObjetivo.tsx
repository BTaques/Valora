import { FunctionComponent } from "react";

export type ValorObjetivoType = {
  className?: string;
  frame?: string;
  valorObjetivo?: string;
  r3000000?: string;
};

const ValorObjetivo: FunctionComponent<ValorObjetivoType> = ({
  className = "",
  frame,
  valorObjetivo,
  r3000000,
}) => {
  return (
    <div
      className={`flex-1 rounded-lg bg-[#f6f5fe] overflow-hidden flex items-center justify-center pt-[14.1px] px-3 pb-3.5 box-border gap-[17.9px] min-w-[179px] text-left text-[11px] text-[#575294] font-[Inter] ${className}`}
    >
      <img className="h-7 w-7 relative" alt="" src={frame} />
      <div className="flex-1 flex flex-col items-start gap-[5px] max-w-[148.1px]">
        <div className="self-stretch relative">{valorObjetivo}</div>
        <b className="self-stretch relative text-base text-[#120d38]">
          {r3000000}
        </b>
      </div>
    </div>
  );
};

export default ValorObjetivo;
