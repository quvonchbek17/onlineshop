import { createContext, useState } from "react";

const AccessorieContext = createContext()

function AccessorieProvider({children}){

   const [accessorieId, setAccessorieId] = useState(0)

     return <AccessorieContext.Provider value={{accessorieId, setAccessorieId}}>{children}</AccessorieContext.Provider>
}

export {AccessorieContext, AccessorieProvider}