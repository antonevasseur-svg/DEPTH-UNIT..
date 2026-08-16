import { createContext, useContext, useState, createElement, type ReactNode } from 'react';
type Cursor={type:string;label?:string};
const C=createContext<{cursor:Cursor;set:(type:string,label?:string)=>void}>({cursor:{type:'default'},set:()=>{}});
export function CursorProvider({children}:{children:ReactNode}){const [cursor,setCursor]=useState<Cursor>({type:'default'});return createElement(C.Provider,{value:{cursor,set:(type,label)=>setCursor({type,label})}},children);}
export const useCursor=()=>useContext(C);
