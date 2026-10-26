import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type CarroType = {
  className?: string;
  prop?: string;
  carro?: string;
  r1000000DeR3000000?: string;
  progressData?: string;

  /** Style props */
  carroGap?: CSSProperties["gap"];
  bWidth?: CSSProperties["width"];
  bMinWidth?: CSSProperties["minWidth"];
  progressBarsWidth?: CSSProperties["width"];
};

const Carro: FunctionComponent<CarroType> = ({
  className = "",
  carroGap,
  prop,
  bWidth,
  bMinWidth,
  carro,
  r1000000DeR3000000,
  progressBarsWidth,
  progressData,
}) => {
  const carroStyle: CSSProperties = useMemo(() => {
    return {
      gap: carroGap,
    };
  }, [carroGap]);

  const bStyle: CSSProperties = useMemo(() => {
    return {
      width: bWidth,
      minWidth: bMinWidth,
    };
  }, [bWidth, bMinWidth]);

  const progressBarsStyle: CSSProperties = useMemo(() => {
    return {
      width: progressBarsWidth,
    };
  }, [progressBarsWidth]);

  return (
    <div
      className={`cursor-pointer self-stretch h-[72px] rounded-[10px] bg-[#fefeff] border-[#e3e6f2] border-solid border-[1px] box-border overflow-hidden shrink-0 flex items-center pt-[3.1px] px-[13px] pb-[9px] gap-2.5 text-left text-2xl text-[#4f13d4] font-[Inter] mq450:flex-wrap ${className}`}
      style={carroStyle}
    >
      <b
        className="w-[33px] relative inline-block mq450:text-[19px]"
        style={bStyle}
      >
        {prop}
      </b>
      <div className="flex-1 flex flex-col items-start pt-[7.9px] px-0 pb-0 box-border gap-[3px] min-w-[172px] max-w-[264px] text-[13px] text-[#636391]">
        <div className="self-stretch flex items-start pt-0 px-0 pb-0.5 text-[#130e33]">
          <b className="flex-1 relative">{carro}</b>
        </div>
        <div className="self-stretch relative text-[11px]">
          {r1000000DeR3000000}
        </div>
        <div className="self-stretch h-3 flex items-center gap-[47px] text-[10px]">
          <div className="flex-1 rounded bg-[#e6e6f2] flex items-start">
            <div
              className="h-[7px] w-[64.3px] relative rounded bg-[#4f13d4]"
              style={progressBarsStyle}
            />
          </div>
          <div className="relative">{progressData}</div>
        </div>
      </div>
    </div>
  );
};

export default Carro;
