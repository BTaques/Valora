import { FunctionComponent, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { useNavigate } from "react-router-dom";
import { api, clearSession, getLoginEmail, getStoredUser, type ValoraUser } from "../services/valoraApi";

export type Topbar5Type = { className?: string };
type SearchResult = { kind: string; label: string; detail: string; path: string };

const Topbar5: FunctionComponent<Topbar5Type> = ({ className = "" }) => {
  const navigate = useNavigate();
  const [opened, setOpened] = useState(false);
  const [detailsOpen, setDetailsOpen] = useState(false);
  const [profile, setProfile] = useState<ValoraUser | null>(null);
  const [profileError, setProfileError] = useState("");
  const [anchor, setAnchor] = useState({top:72,right:16});
  const profileRef = useRef<HTMLButtonElement>(null);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [searching, setSearching] = useState(false);
  const [searchError, setSearchError] = useState("");
  const [searchOpen, setSearchOpen] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const email = getLoginEmail();
  const user = getStoredUser();
  const displayName = user?.nome || email || "Minha conta";
  const toggle = () => {
    if (!opened && profileRef.current) {
      const rect = profileRef.current.getBoundingClientRect();
      setAnchor({top:rect.bottom+9,right:Math.max(8,window.innerWidth-rect.right)});
    }
    setOpened(!opened);
    setSearchOpen(false);
  };
  useEffect(() => {
    if (!detailsOpen) return;
    let active = true;
    setProfile(null);
    setProfileError("");
    api.auth.me().then(data => { if(active) setProfile(data); }).catch(err => {if(active) setProfileError(err instanceof Error ? err.message : "Não foi possível carregar os dados.");});
    return () => { active = false; };
  }, [detailsOpen]);
  useEffect(() => {
    const term = query.trim().toLocaleLowerCase("pt-BR");
    if (!term) { setResults([]); setSearching(false); setSearchError(""); return; }
    let active = true;
    const timeout = window.setTimeout(async () => {
      setSearching(true); setSearchError("");
      try {
        const [movs, boxes, categories] = await Promise.all([
          api.movimentacoes.listAll(), api.caixinhas.list(), api.categorias.list()
        ]);
        if (!active) return;
        const matches: SearchResult[] = [
          ...movs.filter(m => [m.descricao,m.categoria,m.tipo,String(m.valor)].some(v => String(v ?? "").toLocaleLowerCase("pt-BR").includes(term))).map(m => ({kind:"Movimentação",label:m.descricao || m.tipo,detail:`${m.tipo} · ${Number(m.valor).toLocaleString("pt-BR",{style:"currency",currency:"BRL"})}`,path:"/movimentacoes"})),
          ...boxes.filter(b => b.nmCaixinha.toLocaleLowerCase("pt-BR").includes(term)).map(b => ({kind:"Caixinha",label:b.nmCaixinha,detail:"Ver minhas caixinhas",path:"/caixinhas"})),
          ...categories.filter(c => c.nmCategoria.toLocaleLowerCase("pt-BR").includes(term)).map(c => ({kind:"Categoria",label:c.nmCategoria,detail:"Ver categorias",path:"/categorias"}))
        ];
        setResults(matches.slice(0, 12));
      } catch(err) {
        if(active) setSearchError(err instanceof Error ? err.message : "Não foi possível buscar.");
      } finally { if(active) setSearching(false); }
    }, 350);
    return () => { active = false; window.clearTimeout(timeout); };
  }, [query]);
  useEffect(() => {
    const key = (event:KeyboardEvent) => { if(event.key === "Escape"){setOpened(false);setDetailsOpen(false);setSearchOpen(false);} };
    const click = (event:MouseEvent) => { if(searchRef.current && !searchRef.current.contains(event.target as Node)) setSearchOpen(false); };
    window.addEventListener("keydown",key);
    document.addEventListener("mousedown",click);
    return () => {window.removeEventListener("keydown",key);document.removeEventListener("mousedown",click);};
  }, []);
  const go = (path:string) => {setSearchOpen(false);setQuery("");navigate(path);};
  const detail = (label:string,value:unknown) => <div className="py-2 border-b border-[#eeeaf6]"><dt className="text-xs text-[#77718e]">{label}</dt><dd className="mt-1 text-sm text-[#211449] break-words">{String(value || "Não informado")}</dd></div>;
  return <>
    <header className={`self-stretch bg-[#f4f4fe] flex items-center justify-between flex-wrap pt-[13px] px-[30px] pb-4 box-border gap-4 top-0 z-[99] sticky max-w-full text-left font-[Inter] ${className}`}>
      <div ref={searchRef} className="relative h-[42px] flex-1 rounded-[11px] bg-white border border-[#bab7c2] flex items-center px-[15px] gap-2 min-w-[260px] max-w-[480px]">
        <span aria-hidden="true" className="text-[#4f13d4] text-xl">⌕</span>
        <input value={query} onChange={e=>{setQuery(e.target.value);setSearchOpen(true);}} onFocus={()=>setSearchOpen(true)} onKeyDown={e=>{if(e.key==="Enter"&&results.length)go(results[0].path);}} className="w-full border-none outline-none bg-transparent text-[13px] text-[#211449]" placeholder="Buscar movimentações, caixinhas ou categorias..." aria-label="Buscar movimentações, caixinhas ou categorias" />
        {searchOpen && query.trim() && <div className="absolute top-[48px] left-0 w-full max-h-[350px] overflow-y-auto rounded-lg border border-[#e0dfed] bg-white shadow-lg z-[120] text-sm text-[#211449]">
          {searching ? <p className="p-4">Buscando...</p> : searchError ? <p role="alert" className="p-4 text-red-600">{searchError}</p> : results.length ? results.map((item,i)=><button key={i} type="button" onClick={()=>go(item.path)} className="w-full text-left px-4 py-3 border-b border-[#eeeaf6] hover:bg-[#f5f0ff]"><span className="block text-[10px] text-[#6736c5]">{item.kind}</span><strong className="block">{item.label}</strong><span className="block text-xs text-[#77718e]">{item.detail}</span></button>) : <p className="p-4">Nenhum resultado encontrado.</p>}
        </div>}
      </div>
      <button ref={profileRef} type="button" onClick={toggle} aria-expanded={opened} aria-label="Abrir menu do perfil" className="h-11 flex items-center gap-3 min-w-[169px] max-w-[250px] text-sm text-[#130e33] cursor-pointer text-left bg-transparent border-none p-0">
        <span aria-hidden="true" className="h-11 w-11 rounded-full bg-[#e8e0ff] text-[#5212d6] flex items-center justify-center font-bold shrink-0">{displayName.charAt(0).toUpperCase()}</span>
        <span className="flex-1 flex flex-col gap-1 min-w-0"><b className="truncate">{displayName}</b><span className="text-xs text-[#636391]">{email || "Minha conta"}</span></span>
        <span className="text-xl">⌄</span>
      </button>
    </header>
    {opened && createPortal(<>
      <div className="fixed inset-0 z-[900]" onMouseDown={()=>setOpened(false)} aria-hidden="true" />
      <div role="dialog" aria-label="Menu de perfil" className="fixed z-[901] w-[260px] rounded-lg border border-[#e0dfed] bg-white shadow-xl p-3 text-[#1f1747] font-[Inter]" style={{top:anchor.top,right:anchor.right}}>
        <div className="px-2 py-3 border-b border-[#eeeaf6]"><b className="block text-sm">{displayName}</b><span className="block text-xs text-[#77718e] break-all">{email}</span></div>
        <button type="button" onClick={()=>{setOpened(false);setDetailsOpen(true);}} className="w-full text-left px-3 py-4 text-sm hover:bg-[#f5f0ff] rounded">Meus dados</button>
        <button type="button" onClick={()=>{clearSession();setOpened(false);navigate("/");}} className="w-full text-left px-3 py-4 text-sm text-red-600 hover:bg-red-50 rounded">Sair da conta</button>
      </div>
    </>,document.body)}
    {detailsOpen && createPortal(<div className="fixed inset-0 z-[950] bg-black/50 flex items-center justify-center p-4" onMouseDown={e=>{if(e.target===e.currentTarget)setDetailsOpen(false);}}>
      <section role="dialog" aria-modal="true" aria-labelledby="valora-my-data" className="w-full max-w-[560px] max-h-[85vh] overflow-y-auto rounded-xl bg-white p-6 shadow-xl font-[Inter]">
        <div className="flex items-center justify-between mb-4"><h2 id="valora-my-data" className="text-xl font-bold text-[#211449]">Meus dados</h2><button type="button" onClick={()=>setDetailsOpen(false)} aria-label="Fechar" className="text-2xl text-[#211449]">×</button></div>
        {profileError ? <p role="alert" className="text-red-600">{profileError}</p> : !profile ? <p>Carregando seus dados...</p> : <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-5">
          {detail("Nome completo",profile.nome)}{detail("E-mail",profile.email)}{detail("Telefone",profile.telefone)}{detail("CPF",profile.cpf)}{detail("Data de nascimento",profile.dataNascimento)}
          {detail("CEP",profile.endereco?.cep)}{detail("Logradouro",profile.endereco?.logradouro)}{detail("Número",profile.endereco?.numero)}{detail("Complemento",profile.endereco?.complemento)}{detail("Bairro",profile.endereco?.bairro)}{detail("Cidade",profile.endereco?.cidade)}{detail("UF",profile.endereco?.uf)}
        </dl>}
        <p className="text-xs text-[#77718e] mt-4">A senha não é exibida por segurança.</p>
      </section>
    </div>,document.body)}
  </>;
};
export default Topbar5;
