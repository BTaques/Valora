/** Entrada monetária em centavos: 1 → R$ 0,01; 100 → R$ 1,00. */
export const formatMoneyInput=(raw:string):string=>{const digits=raw.replace(/\D/g,'').replace(/^0+(?=\d)/,'').slice(0,13);return (Number(digits||'0')/100).toLocaleString('pt-BR',{style:'currency',currency:'BRL'});};
export const parseMoneyInput=(raw:string):number=>Number(raw.replace(/\D/g,''))/100;
export const moneyInputFromNumber=(value:number):string=>formatMoneyInput(String(Math.round(value*100)));
