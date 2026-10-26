import { FunctionComponent } from "react";

export type ContentBodyType = {
  className?: string;
};

const ContentBody: FunctionComponent<ContentBodyType> = ({
  className = "",
}) => {
  return (
    <div
      className={`flex-1 flex flex-col items-start gap-2 min-w-[144px] text-left text-[13px] text-[#0e0b2e] font-[Inter] ${className}`}
    >
      <div className="self-stretch relative font-semibold">
        Autorize o acesso
      </div>
      <div className="w-full h-[30px] relative text-xs text-[#5c5785] inline-block max-w-[221px]">
        Você será direcionado para o ambiente
        <br />
        do seu banco, de forma segura.
      </div>
    </div>
  );
};

export default ContentBody;
