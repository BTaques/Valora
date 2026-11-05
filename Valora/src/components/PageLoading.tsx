/** Shared, accessible loading placeholder for the Valora desktop content area. */
export default function PageLoading({label="Carregando informações..."}:{label?:string}) {
  return (
    <div role="status" aria-live="polite" aria-busy="true"
      className="absolute z-[80] left-[252px] top-[94px] w-[1168px] min-h-[890px] rounded-xl bg-[#f6f8fe] px-4 py-5 font-[Inter] text-[#130e33]">
      <span className="sr-only">{label}</span>
      <div className="flex items-center gap-3 mb-7">
        <span className="h-5 w-5 rounded-full border-[3px] border-[#ded3f7] border-t-[#5712d6] animate-spin" aria-hidden="true"/>
        <p className="m-0 text-[14px] font-medium text-[#595291]">{label}</p>
      </div>
      <div className="grid grid-cols-3 gap-5" aria-hidden="true">
        {[0,1,2].map(i=><div key={i} className="h-[156px] rounded-xl border border-[#e3e5f2] bg-white p-5">
          <div className="h-3 w-1/2 rounded bg-[#eeeaf7] animate-pulse mb-6"/>
          <div className="h-7 w-3/4 rounded bg-[#e9e2f6] animate-pulse mb-4"/>
          <div className="h-3 w-2/3 rounded bg-[#f0edf7] animate-pulse"/>
        </div>)}
      </div>
      <div className="mt-5 rounded-xl border border-[#e3e5f2] bg-white p-6" aria-hidden="true">
        <div className="h-5 w-1/4 rounded bg-[#e9e2f6] animate-pulse mb-8"/>
        {[0,1,2,3].map(i=><div key={i} className="flex gap-8 py-4 border-b border-[#f0edf7] last:border-0">
          <div className="h-3 w-1/5 rounded bg-[#eeeaf7] animate-pulse"/>
          <div className="h-3 w-2/5 rounded bg-[#eeeaf7] animate-pulse"/>
          <div className="h-3 w-1/5 rounded bg-[#eeeaf7] animate-pulse"/>
        </div>)}
      </div>
    </div>
  );
}
