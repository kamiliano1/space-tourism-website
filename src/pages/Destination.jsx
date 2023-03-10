import LineIndicator from "../components/LineIndicator"
import { PageContext } from "../Context"
import { useState, useContext, useEffect, useRef } from "react"

export default function Destination(props) {

    const { destinations, updateContent, prepareContent } = useContext(PageContext)
    const [currentContent, setCurrentContent] = useState({...destinations[0], isClicked:true})
    

    const [destinationContent, setDestinationContent] = useState(destinations)

    useEffect(()=>{
        prepareContent(setDestinationContent)
    },[])

    const indicators = destinationContent.map((destination, id)=>{
        return ( id===0 ?
            <LineIndicator
                key={id}
                toggle={()=>updateContent(id, setCurrentContent, setDestinationContent, destinations)} 
                isClicked={destination.isClicked}
                name={destination.name}
                skipToContent={props.focusRef}
            />
            :
            <LineIndicator
            key={id}
            toggle={()=>updateContent(id, setCurrentContent, setDestinationContent, destinations)} 
            isClicked={destination.isClicked}
            name={destination.name}
            />
        )
    })
    const { name, images, description, distance, travel } = currentContent


    return (
        <main className="container ff-barlow">
            <div className="f-c-light grid grid--destination flow">
            <picture>
                <source srcSet={images.webp} type="image/webp" />
                <img src={images.png} alt={name} />
            </picture>
                <div
                    className="indicators underline-indicators tabs-indicators flex">
                    {indicators}
                </div>
                <h1 className="upper-case f-c-white fs-400 letter-spacing-270"><span className="index-grey">01</span>Pick your destination</h1>
                <article className="flow">
                    <div>
                        <h2 className="upper-case fs-800 ff-belle">{name}</h2> 
                        <p className="ff-barlow-reg fs-100 max-width-45ch">{description} </p>
                    </div>
                    <div className="flex flex--column flow">
                        <div> 
                            <h3 className="upper-case letter-spacing-235 f-c-light fs-200">Avg. distance</h3>
                            <p className="upper-case ff-belle f-c-white fs-300">{distance}</p>
                        </div>
                        <div>
                            <h3 className="upper-case letter-spacing-235 f-c-light fs-200">Est. travel time</h3>
                            <p className="upper-case ff-belle f-c-white fs-300">{travel}</p>
                        </div>
                    </div>
                </article>
            </div>
        </main>
    )
}