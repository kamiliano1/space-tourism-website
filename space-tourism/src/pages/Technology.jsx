import ButtonIndicator from "../components/ButtonsIndicator"
import { PageContext } from "../Context"
import SkipToContent from "../components/SkipToContent"
import { useState, useEffect, useContext, useRef } from "react"
export default function Technology(props) {

    const [currentWidth, setCurrentWidth] = useState(window.innerWidth)

    useEffect(()=>{
        window.onresize = () => {
            setCurrentWidth(window.innerWidth)
        }
    },[])


    const { technology, updateContent, prepareContent, skipToContent } = useContext(PageContext)
    const [currentContent, setCurrentContent] = useState({...technology[0], isClicked:true})
    

    const [technologyContent, setTechnologyContent] = useState(technology)

    useEffect(()=>{
        prepareContent(setTechnologyContent)
    },[])

    const indicators = technologyContent.map((destination, id)=>{
        return (id=== 0 ?
            <ButtonIndicator
                key={id}
                toggle={()=>updateContent(id, setCurrentContent, setTechnologyContent, technology)} 
                isClicked={destination.isClicked}
                name={destination.name}
                number={id}
                skipToContent={props.focusRef}
            />
            :
            <ButtonIndicator
                key={id}
                toggle={()=>updateContent(id, setCurrentContent, setTechnologyContent, technology)} 
                isClicked={destination.isClicked}
                name={destination.name}
                number={id}
            />
        )
    })
    const { name, images, description } = currentContent

    return (
        <main className="grid grid--technology container--technology">
            <div className="indicators buttons-indicators grid">
                {indicators}
            </div>
            
            <h1 className="ff-barlow upper-case f-c-white fs-400 letter-spacing-270"><span className="index-grey">03</span>Space launch 101</h1>
            <img src={currentWidth <896 ? images.landscape : images.portrait} alt={name} />
            <article className="flow container">
                <h2 className="fs-100 ff-barlow upper-case f-c-light letter-spacing-235">The terminology... 
                    <span className="fs-700 ff-belle f-c-white">{name}</span>
                </h2>
                <p className="ff-barlow-reg fs-250 f-c-light max-width-45ch">{description}</p>
            </article>
        </main>
    )
}