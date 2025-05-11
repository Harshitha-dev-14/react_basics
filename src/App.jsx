import { useState } from 'react'
import Home from './Pages/Home'
import Services from './Pages/Services'
import Contact from './Pages/Contact'
import { useBootstrapBreakpoints } from 'react-bootstrap/esm/ThemeProvider'
import Pages from './Pages/Pages'
import Blog from './Pages/Blog'
import Boxes1 from './Components/Boxes1'
import About from './Components/About'

function App() {
  
  return(
    <>
  
  <Home/>
  <Services/>
  <Contact/>
  <Pages/>
  <Blog/>
  </>
  )
}
export default App


