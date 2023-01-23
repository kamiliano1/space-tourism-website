import commanderImg from "/assets/crew/image-douglas-hurley.png"
import DotIndicator from "../components/DotIndicator"

export default function Crew() {
    return (
        <main className="container grid grid--crew flow">
            <h1 className="upper-case f-c-white fs-500 letter-spacing-270 ff-barlow"><span className="index-grey">02</span> Meet your crew</h1>
            <div className="crew--underline">
                <img src={commanderImg} alt="Douglas Hurley" />
            </div>
            <DotIndicator />
            <article>
                <h2 className="fs-600 upper-case ff-belle"> Commander <span className="fs-700">Douglas Hurley</span></h2>
                <p className="f-c-light ff-barlow-reg max-width-45ch">Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.</p>
            </article>
        </main>
    )
}