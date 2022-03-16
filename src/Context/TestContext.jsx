import { createContext, useState } from "react";

const TestContext = createContext()

function TestProvider({children}){

   const [testNumber, setTestNumber] = useState(0)

     return <TestContext.Provider value={{testNumber, setTestNumber}}>{children}</TestContext.Provider>
}

export {TestContext, TestProvider}