import { createContext,useContext,useState,ReactNode } from 'react';
const C=createContext<{counts:Record<string,number>;increment:(id:string)=>void}>({counts:{},increment:()=>{}});
export function AudioProvider({children}:{children:ReactNode}){const [counts,setCounts]=useState<Record<string,number>>(()=>{try{return JSON.parse(localStorage.getItem('du:plays')||'{}')}catch{return {}}});const increment=(id:string)=>setCounts(x=>{const n={...x,[id]:(x[id]||0)+1};localStorage.setItem('du:plays',JSON.stringify(n));return n});return <C.Provider value={{counts,increment}}>{children}</C.Provider>}
export const useAudio=()=>useContext(C);
