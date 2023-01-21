import LineIndicator from "../components/LineIndicator"
import europaImg from "/assets/destination/image-europa.png"
export default function Destination() {
    return (
        <main className="destination container ff-barlow">
            <div className="f-c-light grid grid--destination flow">
                <img src={europaImg} alt="europa" />
                <LineIndicator />
                <h1 className="upper-case f-c-white fs-500"><span className="index-grey">01</span> Pick your destination</h1>
                <article className="flow">
                    <div>
                        <h2 className="upper-case fs-800 ff-belle">Europa</h2> 
                        <p className="ff-barlow-reg fs-300"> The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover's dream. With an icy surface, it's perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.</p>
                    </div>
                    <div className="flex flex--column flow ">
                        <div> 
                            <h3 className="upper-case letter-spacing-235 f-c-light fs-200">Avg. distance</h3>
                            <p className="upper-case ff-belle f-c-white fs-700">628 mil. km</p>
                        </div>
                        <div>
                            <h3 className="upper-case letter-spacing-235 f-c-light fs-200">Est. travel time</h3>
                            <p className="upper-case ff-belle f-c-white fs-700">3 years</p>
                        </div>
                    </div>
                </article>
            </div>
        </main>
    )
}