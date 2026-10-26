import { FunctionComponent } from "react";

export type Component11Type = {
  className?: string;
};

const Component11: FunctionComponent<Component11Type> = ({
  className = "",
}) => {
  return (
    <div
      className={`h-[129px] flex-1 relative max-w-full text-left text-[56.6px] text-[#1f1447] font-[Inter] ${className}`}
    >
      <div className="absolute top-[27.21%] left-[49.97%] font-semibold inline-block w-44 shrink-0 mq825:text-[45px] mq450:text-[34px]">
        Valora
      </div>
      <img
        className="absolute w-[59.57%] top-[0.1px] right-[40.46%] left-[-0.03%] max-w-full overflow-hidden h-[139px] object-cover shrink-0"
        loading="lazy"
        alt=""
        src="/logo-certo-1@2x.png"
      />
    </div>
  );
};

export default Component11;
