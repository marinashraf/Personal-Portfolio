import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Navbar from "./components/Navbar/Navbar";
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Skills from './components/Skills/Skills'
import Projects from './components/Projects/Projects'
import Certificates from './components/Certificates/Certificates'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <Navbar></Navbar>
   <Hero></Hero>
   <About></About>
   <Skills></Skills>
   <Projects></Projects>
   <Certificates></Certificates>
   <Contact></Contact>
   <Footer></Footer>
  
    </>
  )
}

export default App
