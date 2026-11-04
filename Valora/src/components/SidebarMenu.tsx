import {useNavigate} from 'react-router-dom';
const items=[['Início','/dashboard','/Wrapper.svg'],['Movimentações','/movimentacoes','/Movimenta-es-icon.svg'],['Caixinhas','/caixinhas','/Archive-Caixinhas.svg'],['Categorias','/categorias','/Divider.svg'],['Contas conectadas','/contas-conectadas','/Contas-conectadas-icon.svg']] as const;
export default function SidebarMenu({active}:{active:string}){
 const navigate=useNavigate();
 return <div className="absolute left-0 top-0 w-[232px] text-white font-[Inter]">
 <div className="absolute left-[35px] top-[34px] flex items-center gap-[1px] text-[27px] font-bold whitespace-nowrap"><img src="/logo-branco-3@2x.png" alt="" className="w-[40px] h-[33px] object-contain"/>Valora</div>
 <nav className="absolute left-[13px] top-[148px] w-[206px] flex flex-col gap-[4px]">{items.map(([label,href,icon])=><button key={label} type="button" onClick={()=>navigate(href)} className={'h-[54px] w-full border border-[rgba(219,209,245,0.28)] rounded-[10px] flex items-center gap-[20px] px-[13px] text-left text-white text-[14px] whitespace-nowrap '+(label===active?'bg-[#4212a6]':'bg-transparent')}><img src={icon} alt="" className="w-[24px] h-[24px] shrink-0 object-contain"/><span>{label}</span></button>)}</nav>
 </div>;
}