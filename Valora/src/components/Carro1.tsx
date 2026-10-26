import {
  FunctionComponent,
  useMemo,
  type CSSProperties,
  useCallback,
} from "react";
import { useNavigate } from "react-router-dom";

export type Carro1Type = {
  className?: string;
  mergedAsset2?: string;
  carro?: string;
  r1000000?: string;
  deR3000000?: string;
  cardEmptyList?: string;

  /** Style props */
  caixinhaDetailsPadding?: CSSProperties["padding"];
  caixinhaDetailsMinWidth?: CSSProperties["minWidth"];
  amountRowGap?: CSSProperties["gap"];
  amountRowPadding?: CSSProperties["padding"];
  r1000000Display?: CSSProperties["display"];
  r1000000MinWidth?: CSSProperties["minWidth"];
  deR3000000MinWidth?: CSSProperties["minWidth"];
  progressRowPadding?: CSSProperties["padding"];
  cardProgressBarListWidth?: CSSProperties["width"];

  /** Action props */
  onCarroContainerClick?: () => void;
};

const Carro1: FunctionComponent<Carro1Type> = ({
  className = "",
  onCarroContainerClick,
  mergedAsset2,
  caixinhaDetailsPadding,
  caixinhaDetailsMinWidth,
  carro,
  amountRowGap,
  amountRowPadding,
  r1000000,
  r1000000Display,
  r1000000MinWidth,
  deR3000000,
  deR3000000MinWidth,
  progressRowPadding,
  cardProgressBarListWidth,
  cardEmptyList,
}) => {
  const goalInfoStyle: CSSProperties = useMemo(() => {
    return {
      padding: caixinhaDetailsPadding,
      minWidth: caixinhaDetailsMinWidth,
    };
  }, [caixinhaDetailsPadding, caixinhaDetailsMinWidth]);

  const amountRowStyle: CSSProperties = useMemo(() => {
    return {
      gap: amountRowGap,
      padding: amountRowPadding,
    };
  }, [amountRowGap, amountRowPadding]);

  const r1000000Style: CSSProperties = useMemo(() => {
    return {
      display: r1000000Display,
      minWidth: r1000000MinWidth,
    };
  }, [r1000000Display, r1000000MinWidth]);

  const deR3000000Style: CSSProperties = useMemo(() => {
    return {
      minWidth: deR3000000MinWidth,
    };
  }, [deR3000000MinWidth]);

  const progressRowStyle: CSSProperties = useMemo(() => {
    return {
      padding: progressRowPadding,
    };
  }, [progressRowPadding]);

  const cardProgressBarListStyle: CSSProperties = useMemo(() => {
    return {
      width: cardProgressBarListWidth,
    };
  }, [cardProgressBarListWidth]);

  const navigate = useNavigate();

  const onCarroContainerClick1 = useCallback(() => {
    navigate("/05-detalhes-da-caixinha");
  }, [navigate]);

  return (
    <div
      className={`h-[102px] flex-[1.0694] rounded-[11px] bg-[#fff] border-[#e3e3f2] border-solid border-[1px] box-border overflow-hidden flex items-start flex-wrap content-start pt-[11px] px-3.5 pb-3.5 gap-x-[19px] gap-y-5 min-w-[310px] max-w-full cursor-pointer text-left text-sm text-[#140f33] font-[Inter] ${className}`}
      onClick={onCarroContainerClick}
    >
      <div className="h-[57.9px] flex items-start pt-[1.9px] px-0 pb-0 box-border">
        <img
          className="h-14 w-14 relative object-cover"
          loading="lazy"
          alt=""
          src={mergedAsset2}
        />
      </div>
      <div className="flex-1 flex flex-col items-start py-1.5 pl-0 pr-[54px] box-border gap-2 min-w-[233px] max-w-[258px] mq450:pr-5 mq450:box-border">
        <h3 className="m-0 self-stretch relative text-[length:inherit] font-semibold font-[inherit]">
          {carro}
        </h3>
        <div className="self-stretch flex items-start gap-[3px] text-xs">
          <div
            className="relative font-semibold inline-block min-w-[80px]"
            style={r1000000Style}
          >
            {r1000000}
          </div>
          <div
            className="relative text-[#5c5791] inline-block min-w-[97px]"
            style={deR3000000Style}
          >
            {deR3000000}
          </div>
        </div>
        <div
          className="self-stretch h-[15px] flex items-center pt-0.5 px-0 pb-0 box-border gap-3.5 text-[11px]"
          style={progressRowStyle}
        >
          <div className="h-2.5 flex-1 rounded-[5px] bg-[#e8e8f2] flex items-start">
            <div
              className="h-2.5 w-[54.8px] relative rounded-[5px] bg-[#5212d6]"
              style={cardProgressBarListStyle}
            />
          </div>
          <div className="relative font-semibold">{cardEmptyList}</div>
        </div>
      </div>
      <h3 className="m-0 w-2 relative text-2xl font-semibold font-[inherit] inline-block mq450:text-[19px]">
        ⋮
      </h3>
    </div>
  );
};

export default Carro1;
