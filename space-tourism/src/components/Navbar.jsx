import { Link } from "react-router-dom"
import spaceLogo from "/assets/shared/logo.svg"

export default function Navbar() {
    return (
        <header className="primary-header flex">
            <img src={spaceLogo} alt="space logo"/>
            <nav>
                <ul className="flex primary-navigation indicators underline-indicators">
                    <li className="active">
                        <Link to="/"  className="upper-case fs-400 ff-barlow letter-spacing-270">
                            <span aria-hidden="true">00</span>Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/destination" className="upper-case fs-400 ff-barlow letter-spacing-270">
                            <span aria-hidden="true">01</span>Destination
                        </Link>
                    </li>
                    <li>
                        <Link to="/crew" className="upper-case fs-400 ff-barlow letter-spacing-270">
                            <span aria-hidden="true">02</span>Crew
                        </Link>
                    </li>
                    <li>
                        <Link to="/technology" className="upper-case fs-400 ff-barlow letter-spacing-270">
                            <span aria-hidden="true">03</span>Technology
                        </Link>
                    </li>

                </ul>

                <Link to="/destination" className="explore-button upper-case fs-600 ff-belle f-c-dark bg-c-white letter-spacing-270">
                            Explore
                </Link>
                <div className="indicators underline-indicators tabs-indicators flex">
                    <button aria-selected="true" aria-controls="moon-tab" className="upper-case f-c-light ff-barlow ">Moon</button>
                    <button aria-selected="false" aria-controls="mars-tab" className="upper-case f-c-light ff-barlow ">Mars</button>
                    <button aria-selected="false" aria-controls="europa-tab" className="upper-case f-c-light ff-barlow"  >Europa</button>
                </div>
                <div className="indicators dots-indicators flex">
                    <button aria-selected="true" aria-controls="moon-tab" className="upper-case f-c-light ff-barlow "><span class="sr-only">Moon</span></button>
                    <button aria-selected="false" aria-controls="mars-tab" className="upper-case f-c-light ff-barlow "><span class="sr-only">Mars</span></button>
                    <button aria-selected="false" aria-controls="europa-tab" className="upper-case f-c-light ff-barlow"  ><span class="sr-only">Europa</span></button>
                </div>

            </nav>
                <div className="indicators buttons-indicators grid">
                    <button aria-selected="true" aria-controls="moon-tab" className="fs-600 bg-c-dark f-c-white ff-belle"><span class="sr-only">Moon</span>1</button>
                    <button aria-selected="false" aria-controls="mars-tab" className="fs-600 bg-c-dark f-c-white ff-belle"><span class="sr-only">Mars</span>2</button>
                    <button aria-selected="false" aria-controls="europa-tab" className="fs-600 bg-c-dark f-c-white ff-belle"  ><span class="sr-only">Europa</span>3</button>
                </div>
 

        </header>
    )
}