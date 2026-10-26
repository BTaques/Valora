import { FunctionComponent } from "react";

export type ModalCriarSuaContaType = {
  className?: string;
};

const ModalCriarSuaConta: FunctionComponent<ModalCriarSuaContaType> = ({
  className = "",
}) => {
  return (
    <section
      className={`absolute top-[112px] left-[446px] rounded-[18px] bg-[#fff] w-[548px] h-[760px] text-left text-[13px] text-[#211449] font-[Inter] ${className}`}
    >
      <h2 className="m-0 absolute top-[36px] left-[40px] text-3xl font-semibold font-[inherit] inline-block w-[219px] whitespace-nowrap mq675:text-2xl mq450:text-lg">
        Criar sua conta
      </h2>
      <div className="absolute top-[80px] left-[40px] text-sm text-[#77718e] inline-block w-[374px] whitespace-nowrap">
        Preencha os dados abaixo para começar a usar a Valora.
      </div>
      <h2 className="m-0 absolute top-[24px] left-[503px] text-[28px] font-normal font-[inherit] text-[#35265e] inline-block w-[19px] min-w-[19px] mq450:text-[22px]">
        ×
      </h2>
      <div className="absolute top-[128px] left-[40px] font-semibold inline-block w-[101px] min-w-[101px]">
        Nome completo
      </div>
      <div className="absolute top-[154px] left-[40px] rounded-[10px] bg-[#fff] border-[#dad7e6] border-solid border-[1px] box-border w-[468px] h-[52px]">
        <input
          className="w-full [border:none] [outline:none] font-[Inter] text-[13px] bg-[transparent] absolute top-[18px] left-[15px] text-[#8b86a1] text-left inline-block p-0"
          placeholder="Digite seu nome completo"
          type="text"
        />
      </div>
      <div className="absolute top-[220px] left-[40px] font-semibold inline-block w-[39px] min-w-[39px] whitespace-nowrap">
        E-mail
      </div>
      <div className="absolute top-[246px] left-[40px] rounded-[10px] bg-[#fff] border-[#dad7e6] border-solid border-[1px] box-border w-[468px] h-[52px]">
        <input
          className="w-full [border:none] [outline:none] font-[Inter] text-[13px] bg-[transparent] absolute top-[18px] left-[15px] text-[#8b86a1] text-left inline-block p-0 whitespace-nowrap"
          placeholder="exemplo@email.com"
          type="text"
        />
      </div>
      <div className="absolute top-[312px] left-[40px] font-semibold inline-block w-[26px] min-w-[26px]">
        CPF
      </div>
      <div className="absolute top-[338px] left-[40px] rounded-[10px] bg-[#fff] border-[#dad7e6] border-solid border-[1px] box-border w-[226px] h-[52px]">
        <input
          className="w-full [border:none] [outline:none] font-[Inter] text-[13px] bg-[transparent] absolute top-[18px] left-[15px] text-[#8b86a1] text-left inline-block p-0"
          placeholder="000.000.000-00"
          type="text"
        />
      </div>
      <div className="absolute top-[312px] left-[282px] font-semibold inline-block w-[124px] min-w-[124px] whitespace-nowrap">
        Data de nascimento
      </div>
      <div className="absolute top-[338px] left-[282px] rounded-[10px] bg-[#fff] border-[#dad7e6] border-solid border-[1px] box-border w-[226px] h-[52px] text-[#8b86a1]">
        <div className="absolute top-[18px] left-[15px] inline-block w-[76px] min-w-[76px]">
          dd/mm/aaaa
        </div>
      </div>
      <div className="absolute top-[404px] left-[40px] font-semibold inline-block w-[39px] min-w-[39px]">
        Senha
      </div>
      <div className="absolute top-[430px] left-[40px] rounded-[10px] bg-[#fff] border-[#dad7e6] border-solid border-[1px] box-border w-[226px] h-[52px]">
        <input
          className="w-full [border:none] [outline:none] font-[Inter] text-[13px] bg-[transparent] absolute top-[18px] left-[15px] text-[#8b86a1] text-left inline-block p-0"
          placeholder="Crie uma senha"
          type="text"
        />
      </div>
      <div className="absolute top-[404px] left-[282px] font-semibold inline-block w-[104px] min-w-[104px] whitespace-nowrap">
        Confirmar senha
      </div>
      <div className="absolute top-[430px] left-[282px] rounded-[10px] bg-[#fff] border-[#dad7e6] border-solid border-[1px] box-border w-[226px] h-[52px]">
        <input
          className="w-full [border:none] [outline:none] font-[Inter] text-[13px] bg-[transparent] absolute top-[18px] left-[15px] text-[#8b86a1] text-left inline-block p-0"
          placeholder="Repita sua senha"
          type="text"
        />
      </div>
      <button className="cursor-pointer [border:none] p-0 bg-[#6329d9] absolute top-[536px] left-[40px] rounded-xl w-[468px] h-14 whitespace-nowrap hover:bg-[#8a4fff]">
        <div className="absolute top-[16px] left-[149.5px] text-[17px] leading-[21px] font-semibold font-[Inter] text-[#fff] whitespace-pre-wrap text-center inline-block w-[169px]">
          Criar minha conta →
        </div>
      </button>
      <div className="absolute top-[630px] left-[133px] text-xs text-[#a7a1b6] whitespace-pre-wrap text-center inline-block w-[290px]">
        ────────────── ou ──────────────
      </div>
      <div className="absolute top-[678px] left-[188px] text-sm text-[#5a36bc] whitespace-pre-wrap text-center inline-block w-[172px]">
        Já tem uma conta? Entrar
      </div>
    </section>
  );
};

export default ModalCriarSuaConta;
