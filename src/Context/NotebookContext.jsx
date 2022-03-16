import { createContext, useState } from "react";

const NotebookContext = createContext()

function NotebookProvider({children}){

   const [notebookId, setNotebookId] = useState(0)

     return <NotebookContext.Provider value={{notebookId, setNotebookId}}>{children}</NotebookContext.Provider>
}

export {NotebookContext, NotebookProvider}