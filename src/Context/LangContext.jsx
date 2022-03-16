import { createContext, useState } from "react";

const LangContext = createContext()

function LangProvider({children}){

   const [lang, setLang] = useState("ru")

     return <LangContext.Provider value={{lang, setLang}}>{children}</LangContext.Provider>
}

export {LangContext, LangProvider}