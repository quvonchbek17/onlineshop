import { createContext, useState } from "react";

const PhoneContext = createContext()

function PhoneProvider({children}){

   const [phoneId, setPhoneId] = useState(0)

     return <PhoneContext.Provider value={{phoneId, setPhoneId}}>{children}</PhoneContext.Provider>
}

export {PhoneContext, PhoneProvider}