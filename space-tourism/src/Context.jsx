import { createContext } from "react";

const PageContext = createContext();


function PageContextProvider({children}) {
    return (
        <PageContext.Provider value={"aaa"}>
            {children}
        </PageContext.Provider>
    )
}

export { PageContext, PageContextProvider }