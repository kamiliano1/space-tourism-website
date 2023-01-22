import { useState, useContext } from 'react'
import { PageContext } from './Context'
import { Routes, Route, useLocation } from "react-router-dom"

import Navbar from './components/Navbar'
import Home from './pages/Home'
import Destination from './pages/Destination'
import Crew from './pages/Crew'
import Technology from './pages/Technology'

function App() {
  const [count, setCount] = useState(0)
  const { pathname } = useLocation()

  const currentClassName = pathname.split("/")[1] === "" ? "home" : pathname.split("/")[1]
  const test = useContext(PageContext)
  return (
    <div className={`${currentClassName} backgrounds`}>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route exact path="/destination" element={<Destination />}/>
        <Route exact path="/crew" element={<Crew />}/>
        <Route exact path="/technology" element={<Technology />}/>
      </Routes>
      {/* {test} */}
    </div>
  )
}

export default App
