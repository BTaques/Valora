import {useEffect,useState} from 'react';
import {Link} from 'react-router-dom';
import {api} from '../services/valoraApi';

export default function BelvoRetorno(){
 const [message,setMessage]=useState('Verificando sua conexão bancária...');
 const [ok,setOk]=useState(false);
 useEffect(()=>{
  let cancelled=false;
  const run=async()=>{
   const params=new URLSearchParams(window.location.search);
   const link=params.get('link');
   if(!link||!/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(link)){
    setMessage('A Belvo não informou um identificador válido para a conexão.');
    return;
   }
   try{
    await api.belvo.concluir(link);
    if(cancelled)return;
    setOk(true);
    setMessage('Banco conectado! Os dados históricos podem demorar para ficar disponíveis.');
   }catch(e){
    if(!cancelled)setMessage(e instanceof Error?e.message:'Não foi possível confirmar a conexão.');
   }
  };
  void run();
  return()=>{cancelled=true};
 },[]);
 return <main className="min-h-screen bg-[#f6f9fe] flex items-center justify-center p-6">
  <section className="bg-white rounded-xl border border-[#e0e3f2] p-8 max-w-lg w-full text-center">
   <h1 className="text-2xl font-semibold mb-4">Conexão bancária</h1>
   <p role="status" className="text-[#5c5785] mb-6">{message}</p>
   {ok&&<p className="text-sm text-[#5c5785] mb-5">A importação deverá ser iniciada após a disponibilidade dos dados pela Belvo.</p>}
   <Link to="/contas-conectadas" className="text-[#541feb] font-semibold">Voltar para contas conectadas</Link>
  </section>
 </main>;
}
