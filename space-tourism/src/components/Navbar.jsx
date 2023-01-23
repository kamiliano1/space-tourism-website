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

        </header>
    )
}