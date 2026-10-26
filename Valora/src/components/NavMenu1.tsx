import { FunctionComponent } from "react";

export type NavMenu1Type = {
  className?: string;
};

const NavMenu1: FunctionComponent<NavMenu1Type> = ({ className = "" }) => {
  return (
    <div
      className={`flex-1 flex flex-col items-start gap-[5px] min-w-[310px] max-w-full z-[3] text-left text-3xl text-[#191236] font-[Inter] ${className}`}
    >
      <h1 className="m-0 self-stretch relative text-[length:inherit] font-bold font-[inherit] mq675:text-2xl mq450:text-lg">
        Movimentações
      </h1>
      <div className="self-stretch relative text-sm text-[#675f7d]">
        Todas as suas entradas e saídas em um só lugar.
      </div>
    </div>
  );
};

export default NavMenu1;
