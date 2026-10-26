import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type Step1RowType = {
  className?: string;
  stepSymbol?: string;
  escolhaSuaInstituio?: string;
  selecioneOBancoQueDesejaConect?: string;

  /** Style props */
  step1RowPadding?: CSSProperties["padding"];
  step1IconConnectorHeight?: CSSProperties["height"];
  stepIconContainerAlignSelf?: CSSProperties["alignSelf"];
  stepIconContainerBackgroundImage?: CSSProperties["backgroundImage"];
  stepIconContainerWidth?: CSSProperties["width"];
  rectangleWidth?: CSSProperties["width"];
};

const Step1Row: FunctionComponent<Step1RowType> = ({
  className = "",
  step1RowPadding,
  step1IconConnectorHeight,
  stepIconContainerAlignSelf,
  stepIconContainerBackgroundImage,
  stepIconContainerWidth,
  stepSymbol,
  rectangleWidth,
  escolhaSuaInstituio,
  selecioneOBancoQueDesejaConect,
}) => {
  const step1RowStyle: CSSProperties = useMemo(() => {
    return {
      padding: step1RowPadding,
    };
  }, [step1RowPadding]);

  const step1IconConnectorStyle: CSSProperties = useMemo(() => {
    return {
      height: step1IconConnectorHeight,
    };
  }, [step1IconConnectorHeight]);

  const rectangleStyle: CSSProperties = useMemo(() => {
    return {
      width: rectangleWidth,
    };
  }, [rectangleWidth]);

  return (
    <div
      className={`w-full flex items-start pt-[21.9px] pb-1.5 pl-0 pr-0.5 box-border gap-5 max-w-[286px] text-left text-sm text-[#4d0fd1] font-[Inter] mq450:flex-wrap ${className}`}
      style={step1RowStyle}
    >
      <div
        className="flex flex-col items-center pt-[3.9px] px-0 pb-0"
        style={step1IconConnectorStyle}
      >
        <div className="self-stretch h-[42px] flex items-center justify-center bg-[url('/public/Frame2@3x.png')] bg-cover bg-no-repeat bg-[top]">
          <div className="w-[34px] flex items-center justify-center py-[8.5px] px-0 box-border bg-[url('/public/Frame1@3x.png')] bg-cover bg-no-repeat bg-[top]">
            <div className="relative font-semibold">{stepSymbol}</div>
          </div>
        </div>
        <div
          className="w-[42px] h-11 relative bg-[#ccc2f0] z-[2] mt-[-2px]"
          style={rectangleStyle}
        />
      </div>
      <div className="flex-1 flex flex-col items-start gap-2 min-w-[144px] text-[13px] text-[#0e0b2e]">
        <div className="self-stretch relative font-semibold">
          {escolhaSuaInstituio}
        </div>
        <div className="w-full h-[30px] relative text-xs text-[#5c5785] inline-block max-w-[222px]">
          {selecioneOBancoQueDesejaConect}
        </div>
      </div>
    </div>
  );
};

export default Step1Row;
