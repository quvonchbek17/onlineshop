import { createContext, useState } from "react";

const OrderingContext = createContext()

function OrderingProvider({children}){

   const [Ordering, setOrdering] = useState({})

     return <OrderingContext.Provider value={{Ordering, setOrdering}}>{children}</OrderingContext.Provider>
}

export {OrderingContext, OrderingProvider}