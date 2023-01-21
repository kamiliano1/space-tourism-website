import { useState } from "react"
import { Link } from "react-router-dom"
import spaceLogo from "/assets/shared/logo.svg"
import openNavButton from "/assets/shared/icon-hamburger.svg"
import closeNavButton from "/assets/shared/icon-close.svg"

export default function Navbar() {

    const [isOpen, setIsOpen] = useState(false);

    
    return (
        <header className="primary-header container flex">
            <img src={spaceLogo} alt="space logo" className="logo"/>
            <nav>
                <button onClick={()=>setIsOpen(prev=>!prev)} className="nav-button">
                    <img src={isOpen ? closeNavButton : openNavButton} alt="Menu button" />
                    <span className="sr-only">Menu</span>
                </button>
                <ul className={`flex primary-navigation indicators underline-indicators ${isOpen ? "opened-navigation" : ""}`}>
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

            </nav>
                {
                /* 

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

                <div className="indicators buttons-indicators grid">
                    <button aria-selected="true" aria-controls="moon-tab" className="fs-600 bg-c-dark f-c-white ff-belle"><span class="sr-only">Moon</span>1</button>
                    <button aria-selected="false" aria-controls="mars-tab" className="fs-600 bg-c-dark f-c-white ff-belle"><span class="sr-only">Mars</span>2</button>
                    <button aria-selected="false" aria-controls="europa-tab" className="fs-600 bg-c-dark f-c-white ff-belle"  ><span class="sr-only">Europa</span>3</button>
                </div> */}
 

        </header>
    )
}