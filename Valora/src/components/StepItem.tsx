import { FunctionComponent, useMemo, type CSSProperties } from "react";
import ContentBody from "./ContentBody";

export type StepItemType = {
  className?: string;
  prop?: string;
  escolhaSuaInstituio?: string;
  selecioneOBancoQueDesejaConect?: string;

  /** Style props */
  stepItemPadding?: CSSProperties["padding"];
  stepLeftColHeight?: CSSProperties["height"];
  frameAlignSelf?: CSSProperties["alignSelf"];
  frameBackgroundImage?: CSSProperties["backgroundImage"];
  frameWidth?: CSSProperties["width"];
  rectangleWidth?: CSSProperties["width"];
};

const StepItem: FunctionComponent<StepItemType> = ({
  className = "",
  stepItemPadding,
  stepLeftColHeight,
  frameAlignSelf,
  frameBackgroundImage,
  frameWidth,
  prop,
  rectangleWidth,
  escolhaSuaInstituio,
  selecioneOBancoQueDesejaConect,
}) => {
  const stepItemStyle: CSSProperties = useMemo(() => {
    return {
      padding: stepItemPadding,
    };
  }, [stepItemPadding]);

  const stepBadgeConnectorStyle: CSSProperties = useMemo(() => {
    return {
      height: stepLeftColHeight,
    };
  }, [stepLeftColHeight]);

  const frameStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: frameAlignSelf,
      backgroundImage: frameBackgroundImage,
      width: frameWidth,
    };
  }, [frameAlignSelf, frameBackgroundImage, frameWidth]);

  return (
    <div
      className={`self-stretch flex items-start py-0 pl-0 pr-[3px] gap-5 text-left text-sm text-[#4d0fd1] font-[Inter] mq450:flex-wrap ${className}`}
      style={stepItemStyle}
    >
      <div
        className="h-[87.9px] flex flex-col items-center pt-[3.9px] px-0 pb-0 box-border"
        style={stepBadgeConnectorStyle}
      >
        <div className="h-[42px] w-[42px] flex items-center justify-center bg-[url('/public/Frame2@3x.png')] bg-cover bg-no-repeat bg-[top] shrink-0 z-[1]">
          <div className="w-[34px] flex items-center justify-center py-[8.5px] px-0 box-border bg-[url('/public/Frame1@3x.png')] bg-cover bg-no-repeat bg-[top]">
            <div className="relative font-semibold shrink-0">2</div>
          </div>
        </div>
        <div className="h-11 relative bg-[#ccc2f0] z-[2] mt-[-2px] shrink-0" />
      </div>
      <ContentBody />
    </div>
  );
};

export default StepItem;
