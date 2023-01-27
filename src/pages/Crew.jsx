import DotIndicator from "../components/DotIndicator"
import { PageContext } from "../Context"
import { useState, useContext, useEffect, useRef } from "react"
import SkipToContent from "../components/SkipToContent"

export default function Crew(props) {
    const { crew , prepareContent, skipToContent } = useContext(PageContext)
    const [currentContent, setCurrentContent] = useState({...crew[0], isClicked:true})

    const focusRef = useRef(props.focusRef)
    
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
        return ( id===0 ? 
            <DotIndicator
                key={id}
                toggle={()=>updateContent(id)} 
                isClicked={crew.isClicked}
                name={crew.name}
                skipToContent={props.focusRef}
            />
            :
            <DotIndicator
            key={id}
            toggle={()=>updateContent(id)} 
            isClicked={crew.isClicked}
            name={crew.name}
        />
        )
    })
    const { name, images, role, bio } = currentContent

    return (
        <main className="container grid grid--crew flow">
            <h1 className="upper-case f-c-white fs-400 letter-spacing-270 ff-barlow">
                <span className="index-grey">02</span>Meet your crew
            </h1>
            <div className="crew--underline" ref={focusRef}>
                <picture>
                    <source srcSet={images.webp} type="image/webp" />
                    <img src={images.png} alt={name} />
                </picture>
            </div>
            <div className="indicators dots-indicators flex" >
                {indicators}
            </div>
            <article>
                <h2 className="fs-500 upper-case ff-belle"> {role} <span className="fs-700">{name}</span></h2>
                <p className="f-c-light ff-barlow-reg max-width-45ch fs-100">{bio}</p>
            </article>
        </main>
    )
}