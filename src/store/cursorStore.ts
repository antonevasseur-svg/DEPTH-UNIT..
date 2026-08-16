import { createContext, useContext, useState, ReactNode } from 'react';
type Cursor={type:string;label?:string};
const C=createContext<{cursor:Cursor;set:(type:string,label?:string)=>void}>({cursor:{type:'default'},set:()=>{}});
export function CursorProvider({children}:{children:ReactNode}){const [cursor,setCursor]=useState<Cursor>({type:'default'});return <C.Provider value={{cursor,set:(type,label)=>setCursor({type,label})}}>{children}</C.Provider>}
export const useCursor=()=>useContext(C);
