import type { ReactNode } from 'react';
const paths:Record<string,ReactNode>={
car:<><path d="M5 17h14l1-5-2.3-5.5a2 2 0 0 0-1.8-1.2H8.1a2 2 0 0 0-1.8 1.2L4 12l1 5Z"/><path d="M4 12h16M5 17v2a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-2m8 0v2a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-2"/><circle cx="7.5" cy="14.5" r=".7" fill="currentColor" stroke="none"/><circle cx="16.5" cy="14.5" r=".7" fill="currentColor" stroke="none"/></>,
plane:<><path d="M21 3 10.8 13.2l-5.7-1.1-2.1 2.1 6.8 3.4 3.4 6.8 2.1-2.1-1.1-5.7L24 6.4A2.4 2.4 0 0 0 21 3Z" transform="translate(-1 -1) scale(.98)"/><path d="m9 15-4.5 4.5m1.5-7-3.5-2m10.5 7 2 3.5"/></>,
graduation:<><path d="m2 9 10-5 10 5-10 5-10-5ZM6 12v5c3 3 9 3 12 0v-5M22 9v7"/></>,
medical:<><path d="M9 3h6l2 4-1.8 2H8.8L7 7l2-4Z"/><path d="M9 9c-2.7 1.6-4.5 4.5-4.5 7.3A4.7 4.7 0 0 0 9.2 21h5.6a4.7 4.7 0 0 0 4.7-4.7c0-2.8-1.8-5.7-4.5-7.3M9 12h6M12 12v6m-3-3h6"/></>,
home:<><path d="m3 10 9-7 9 7v11H3V10ZM9 21v-8h6v8"/></>,
briefcase:<><rect x="3" y="7" width="18" height="14" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 13h18"/></>,
more:<><circle cx="5" cy="12" r="1"/><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/></>,
heart:<path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0l-1 1-1-1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8Z"/>,
gift:<><rect x="3" y="10" width="18" height="11"/><path d="M2 7h20v3H2zM12 7v14M12 7C5-1 2 7 8 7m4 0c7-8 10 0 4 0"/></>,
book:<><path d="M12 6C8 3 4 4 2 5v15c4-2 7-1 10 1 3-2 6-3 10-1V5c-2-1-6-2-10 1Zm0 0v15"/></>,
bike:<><circle cx="5" cy="17" r="4"/><circle cx="19" cy="17" r="4"/><path d="m5 17 5-10 5 10H5m10 0 4-10h-4"/></>
};
export function GoalIcon({name,size=24}:{name:string;size?:number}){return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name]||paths.more}</svg>}
