import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import spaceLogo from "/assets/shared/logo.svg"
import openNavButton from "/assets/shared/icon-hamburger.svg"
import closeNavButton from "/assets/shared/icon-close.svg"

export default function Navbar() {

    const [isOpen, setIsOpen] = useState(false)

    const [pageInfo, setPageInfo] = useState(
    [
    {
        name:"home",
        link:"/",
        isClicked:false
    }, 
    {
        name:"destination",
        link:"/destination",
        isClicked:false
    },
    {
        name:"crew",
        link:"/crew",
        isClicked:false
    }, 
    {
        name:"technology",
        link:"/technology",
        isClicked:false
    }
    ])

    const { pathname } = useLocation()
    const currentPagesName = pathname.split("/")[1] === "" ? "home" : pathname.split("/")[1]

    useEffect(()=>{
        setPageInfo(prev=>{
            return prev.map(page=>{
                return currentPagesName === page.name ? {...page, isClicked:true} : {...page, isClicked:false}
            })
        })

    },[currentPagesName])
    
    const webLinks = pageInfo.map(({name, link, isClicked}, id)=>{
        return  (                 
            <li key={name} className={isClicked ? "active" : ""}>
                <Link to={link} onClick={()=>setIsOpen(false)} className="upper-case fs-100-nav ff-barlow letter-spacing-270">
                <span aria-hidden="true">0{id}</span>{name}
                </Link>
            </li>
    )
    })


    return (
        <header className="primary-header container flex">
            <img src={spaceLogo} alt="space logo" className="logo"/>
            <nav>
                <button onClick={()=>setIsOpen(prev=>!prev)} className="nav-button">
                    <img src={isOpen ? closeNavButton : openNavButton} alt="Menu button" />
                    <span className="sr-only">Menu</span>
                </button>
                <ul className={`flex primary-navigation indicators underline-indicators ${isOpen ? "opened-navigation" : ""}`}> 
                    {webLinks}
                </ul>

            </nav>

        </header>
    )
}