import { Routes, Route, useLocation } from "react-router-dom"

import Navbar from './components/Navbar'
import Home from './pages/Home'
import Destination from './pages/Destination'
import Crew from './pages/Crew'
import Technology from './pages/Technology'
import SkipToContent from "./components/SkipToContent"
import { PageContext } from "./Context"
import { useRef, useContext } from "react"
function App() {
  const { pathname } = useLocation()
  const focusRef = useRef(null)
  const { skipToContent } = useContext(PageContext)

  const currentClassName = pathname.split("/")[1] === "" ? "home" : pathname.split("/")[1]
  return (
    <div className={`${currentClassName} backgrounds`}>
      <SkipToContent 
        focusContent={()=>skipToContent(focusRef)}
      />
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home focusRef={focusRef}/>}/>
        <Route path="/destination" element={<Destination focusRef={focusRef}/>}/>
        <Route path="/crew" element={<Crew focusRef={focusRef}/>}/>
        <Route path="/technology" element={<Technology focusRef={focusRef}/>}/>
      </Routes>
    </div>
  )
}

export default App
