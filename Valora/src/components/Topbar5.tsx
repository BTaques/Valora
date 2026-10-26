import { FunctionComponent, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { useNavigate } from "react-router-dom";

export type Topbar5Type = {
  className?: string;
};

const Topbar5: FunctionComponent<Topbar5Type> = ({ className = "" }) => {
  const [opened,setOpened]=useState(false);
  const [anchor,setAnchor]=useState({top:72,right:16});
  const profileRef=useRef<HTMLButtonElement>(null);
  const navigate=useNavigate();
  const toggle=()=>{if(!opened&&profileRef.current){const rect=profileRef.current.getBoundingClientRect();setAnchor({top:rect.bottom+9,right:Math.max(8,window.innerWidth-rect.right)});}setOpened(!opened)};
  useEffect(()=>{if(!opened)return;const onKey=(e:KeyboardEvent)=>{if(e.key==='Escape')setOpened(false)};window.addEventListener('keydown',onKey);return()=>window.removeEventListener('keydown',onKey)},[opened]);
  return (
    <>
    <header
      className={`self-stretch bg-[#f4f4fe] overflow-hidden flex items-center justify-center flex-wrap content-center pt-[13px] px-[30px] pb-4 box-border gap-x-[46.1px] gap-y-2.5 top-[0] z-[99] sticky max-w-full text-left text-2xl text-[#4f13d4] font-[Inter] mq450:gap-[23px] ${className}`}
    >
      <div className="h-[42px] flex-1 rounded-[11px] bg-[#fff] border-[#bab7c2] border-solid border-[1px] box-border overflow-hidden flex items-center py-[5px] px-[15px] gap-4 min-w-[310px] max-w-[480px] mq450:max-w-full mq450:flex-1">
        <div className="h-[30px] w-4 flex items-start pt-px px-0 pb-0 box-border">
          <div className="relative hidden">⌕</div>
        </div>
        <input
          className="w-full [border:none] [outline:none] bg-[transparent] h-[17.9px] flex-1 flex items-start pt-0 px-0 pb-[1.9px] box-border font-[Inter] text-[13px] text-[#636391] min-w-[250px] max-w-full"
          placeholder="Buscar transações, caixinhas ou categorias...⌕"
          type="text"
        />
      </div>
      <div className="flex-[1.0715] flex items-start justify-end py-[9px] px-0 box-border gap-[26px] min-w-[72px] max-w-[343px]">
        <img
          className="cursor-pointer [border:none] p-0 bg-[transparent] h-6 w-6 relative"
          alt=""
          src="/Headset.svg"
        />
        <button className="cursor-pointer [border:none] pt-[1.9px] px-0 pb-0 bg-[transparent] h-[26.9px] flex items-start box-border">
          <span className="relative inline-flex items-center justify-center w-[26px] h-[26px] text-[#1f1747]"><svg width="23" height="23" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9Z"/><path d="M10 21h4"/></svg><span className="absolute right-[1px] top-[0px] w-[7px] h-[7px] rounded-full bg-[#ef334a] border border-white"/></span>
        </button>
      </div>
      <button ref={profileRef} type="button" onClick={toggle} aria-expanded={opened} aria-label="Abrir menu do perfil" className="h-11 flex-[1.0715] flex items-center gap-[15.9px] min-w-[169px] max-w-[221px] text-sm text-[#130e33] cursor-pointer text-left bg-transparent border-none p-0">
        <img src="/Marina-Silva-Perfil.jpg" alt="Marina Silva" className="h-11 w-11 rounded-full object-cover shrink-0"/>
        <span className="flex-1 flex flex-col items-start gap-[5px]"><b>Marina Silva</b><span className="text-xs text-[#636391]">Configurações</span></span>
        <span className="text-xl text-[#130e33]">⌄</span>
      </button>
    </header>
    {opened&&createPortal(<>
      <div className="fixed inset-0 z-[900]" onMouseDown={()=>setOpened(false)} aria-hidden="true" />
      <div role="dialog" aria-label="Menu de perfil" className="fixed z-[901] w-[260px] rounded-[9px] border border-[#e0dfed] bg-white shadow-[0_12px_35px_rgba(22,13,57,0.14)] p-[12px] text-[#1f1747] font-[Inter]" style={{top:anchor.top,right:anchor.right}}>
        <div className="flex gap-[10px] items-center px-[3px] pt-[4px] pb-[17px]"><img src="/Marina-Silva-Perfil.jpg" alt="" className="h-[37px] w-[37px] rounded-full object-cover"/><div><b className="block text-[11px]">Marina Silva</b><span className="block text-[9px] text-[#7b7699] mt-[3px]">marina@email.com</span></div></div>
        <div className="flex items-center gap-2 text-[10px] px-[8px] py-[10px]"><span className="text-[#5520c9]">♙</span>Agência 0123 · Conta 0001</div>
        <button type="button" className="w-full h-[44px] bg-[#f0eaff] text-[#5122c8] rounded-[6px] flex items-center justify-between px-[12px] text-[10px] font-semibold cursor-pointer" onClick={()=>setOpened(false)}><span>♛　 Conta Valora</span><span>›</span></button>
        <div className="mt-[9px]">
        {([['♙','Meus dados','Nome, telefone e e-mail'],['♙','Segurança','Senha, biometria e acesso'],['♧','Notificações','Gerencie seus alertas'],['☼','Preferências','Tema, idioma e visualização']] as const).map(([icon,title,description])=><button key={title} type="button" onClick={()=>setOpened(false)} className="w-full flex items-center gap-[10px] px-[8px] h-[51px] border-b border-[#eceaf4] text-left cursor-pointer hover:bg-[#f8f6ff]"><span className="text-[#5420b6] text-[16px] w-[17px] text-center">{icon}</span><span className="flex-1"><span className="block text-[10px] font-medium">{title}</span><span className="block text-[8px] text-[#7b7699] mt-[3px]">{description}</span></span><span className="text-[#301a66]">›</span></button>)}
        </div>
        <button type="button" onClick={()=>{setOpened(false);navigate('/')}} className="mt-[12px] h-[34px] flex items-center gap-[11px] px-[8px] text-[10px] text-[#e9263c] cursor-pointer"><span className="text-[17px]">⇥</span>Sair da conta</button>
      </div>
    </>,document.body)}
    </>
  );
};

export default Topbar5;
