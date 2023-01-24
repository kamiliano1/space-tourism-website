import { useState } from "react";
import { createContext } from "react";
import data from "./Data/data.json"

const PageContext = createContext()


function PageContextProvider({children}) {

    function prepareContent(pageSpecificContent) {
        pageSpecificContent(prevData=>{
            return prevData.map((prev, id)=>{
                return id===0 ?{...prev, isClicked:true, id:id} : {...prev, isClicked:false, id:id}
            }) 
        })
    }

    function updateContent(id, currentContent, pageSpecificContent, pageName) {
        currentContent({...pageName[id], isClicked:true})
        pageSpecificContent(prevTest=>{
            return prevTest.map(prev=>{
                return id===prev.id ? {...prev, isClicked:true} : {...prev, isClicked:false}
            })
        })
    }
    const [pageData, setPageData] = useState(data)

    const { destinations, crew, technology } = pageData
    return (
        <PageContext.Provider value={{destinations, crew, technology, prepareContent, updateContent }}>
            {children}
        </PageContext.Provider>
    )
}

export { PageContext, PageContextProvider }