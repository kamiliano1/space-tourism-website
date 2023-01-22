import ButtonIndicator from "../components/ButtonsIndicator"
import capsuleImg from "/assets/technology/image-space-capsule-portrait.jpg"
import { useState, useEffect } from "react"
export default function Technology() {

    const [currentWidth, setCurrentWidth] = useState(window.innerWidth)

    useEffect(()=>{
        window.onresize = () => {
            setCurrentWidth(window.innerWidth)
        }
    },[])
    
    const pictureOrientation = currentWidth <896 ? "landscape" : "portrait"
    return (
        <main className="grid grid--technology container--technology">
            <ButtonIndicator />
            
            <h1 className="ff-barlow upper-case f-c-white fs-500 letter-spacing-270"><span className="index-grey">03</span>Space launch 101</h1>
            <img src={`/assets/technology/image-space-capsule-${pictureOrientation}.jpg`} alt="space capsule" />
            {/* <img src="" alt="space capsule" /> */}
            <article className="flow container">
                <h2 className="fs-200 ff-barlow upper-case f-c-light letter-spacing-235">The terminology... 
                <span className="fs-700 ff-belle f-c-white">Space capsule</span>
                </h2>
                <p className="ff-barlow-reg fs-300 f-c-light max-width-45ch">A space capsule is an often-crewed spacecraft that uses a blunt-body reentry 
                capsule to reenter the Earth's atmosphere without wings. Our capsule is where 
                you'll spend your time during the flight. It includes a space gym, cinema, 
                and plenty of other activities to keep you entertained.</p>
            </article>
        </main>
    )
}