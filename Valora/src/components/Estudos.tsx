import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type EstudosType = {
  className?: string;
  icongraduationCap?: string;
  estudos?: string;
  r100000DeR500000?: string;
  prop?: string;

  /** Style props */
  rectangleWidth?: CSSProperties["width"];
  divDisplay?: CSSProperties["display"];
  divMinWidth?: CSSProperties["minWidth"];
};

const Estudos: FunctionComponent<EstudosType> = ({
  className = "",
  icongraduationCap,
  estudos,
  r100000DeR500000,
  rectangleWidth,
  prop,
  divDisplay,
  divMinWidth,
}) => {
  const rectangle1Style: CSSProperties = useMemo(() => {
    return {
      width: rectangleWidth,
    };
  }, [rectangleWidth]);

  const divStyle: CSSProperties = useMemo(() => {
    return {
      display: divDisplay,
      minWidth: divMinWidth,
    };
  }, [divDisplay, divMinWidth]);

  return (
    <div
      className={`cursor-pointer self-stretch h-[72px] rounded-[10px] bg-[#fefeff] border-[#e3e6f2] border-solid border-[1px] box-border overflow-hidden shrink-0 flex items-center pt-[3.1px] px-[13px] pb-[9px] gap-[17px] text-left text-[13px] text-[#636391] font-[Inter] mq450:flex-wrap ${className}`}
    >
      <img
        className="h-[26px] w-[26px] relative"
        alt=""
        src={icongraduationCap}
      />
      <div className="flex-1 flex flex-col items-start pt-[7.9px] px-0 pb-0 box-border gap-[3px] min-w-[172px] max-w-[264px]">
        <div className="self-stretch flex items-start pt-0 px-0 pb-0.5 text-[#130e33]">
          <b className="flex-1 relative">{estudos}</b>
        </div>
        <div className="self-stretch relative text-[11px]">
          {r100000DeR500000}
        </div>
        <div className="self-stretch h-3 flex items-center gap-[47px] text-[10px]">
          <div className="flex-1 rounded bg-[#e6e6f2] flex items-start">
            <div
              className="h-[7px] w-[39px] relative rounded bg-[#4f13d4]"
              style={rectangle1Style}
            />
          </div>
          <div className="relative inline-block min-w-[22px]" style={divStyle}>
            {prop}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Estudos;
