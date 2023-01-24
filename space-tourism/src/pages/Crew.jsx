import DotIndicator from "../components/DotIndicator"
import { PageContext } from "../Context"
import { useState, useContext, useEffect } from "react"

export default function Crew() {
    const { crew , prepareContent } = useContext(PageContext)
    const [currentContent, setCurrentContent] = useState({...crew[0], isClicked:true})
    
    const [crewContent, setCrewContent] = useState(crew)

    useEffect(()=>{
        prepareContent(setCrewContent)
    },[])

    function updateContent(id) {
        setCurrentContent({...crew[id], isClicked:true})
        setCrewContent(prevTest=>{
            return prevTest.map(prev=>{
                return id===prev.id ? {...prev, isClicked:true} : {...prev, isClicked:false}
            })
        })
    }

    const indicators = crewContent.map((crew, id)=>{
        return (
            <DotIndicator
                key={id}
                // toggle={()=>updateContentt(id)} 
                toggle={()=>updateContent(id)} 
                isClicked={crew.isClicked}
                name={crew.name}
            />
        )
    })
    const { name, images, role, bio } = currentContent

    return (
        <main className="container grid grid--crew flow">
            <h1 className="upper-case f-c-white fs-500 letter-spacing-270 ff-barlow"><span className="index-grey">02</span> Meet your crew</h1>
            <div className="crew--underline">
                <img src={images.png} alt={name} />
            </div>
            <div className="indicators dots-indicators flex">
                {indicators}
            </div>
            <article>
                <h2 className="fs-600 upper-case ff-belle"> {role} <span className="fs-700">{name}</span></h2>
                <p className="f-c-light ff-barlow-reg max-width-45ch">{bio}</p>
            </article>
        </main>
    )
}