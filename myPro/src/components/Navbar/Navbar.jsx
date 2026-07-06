// import "./Navbar.css";
// import { FaBars, FaTimes } from "react-icons/fa";
// import { useState, useEffect } from "react";

// function Navbar() {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [sticky, setSticky] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setSticky(window.scrollY > 30);
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <nav className={sticky ? "navbar active" : "navbar"}>
//       <h2 className="logo">
//         Marina<span>.</span>
//       </h2>

//       <ul className={menuOpen ? "nav-links active" : "nav-links"}>
//         <li><a href="#home">Home</a></li>
//         <li><a href="#about">About</a></li>
//         <li><a href="#skills">Skills</a></li>
//         <li><a href="#projects">Projects</a></li>
//         <li><a href="#contact">Contact</a></li>
//       </ul>

//       <div
//         className="menu-icon"
//         onClick={() => setMenuOpen(!menuOpen)}
//       >
//         {menuOpen ? <FaTimes /> : <FaBars />}
//       </div>
//     </nav>
//   );
// }

// export default Navbar;


import { useEffect, useState } from "react";
import { FaBars, FaTimes, FaMoon, FaSun } from "react-icons/fa";
import "../../assets/Styles/variables.css"
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sticky, setSticky] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [darkMode,setDarkMode]=useState(true);
const toggleTheme =()=>{
  document.body.classList.toggle("white-theme")
  setDarkMode(!darkMode)
}
  return (
    <header className={sticky ? "header active" : "header"}>
      <div className="container navbar">

        <div className="logo">
          Marina<span>.</span>
        </div>

        <nav className={menuOpen ? "nav active" : "nav"}>

          <a href="#home">Home</a>

          <a href="#about">About</a>

          <a href="#skills">Skills</a>

          <a href="#projects">Projects</a>

          <a href="#certificates">Certificates</a>

          <a href="#contact">Contact</a>

        </nav>

        <div className="right-side">

          <button className="theme-btn"
          onClick={ toggleTheme}>
            {darkMode ?<FaSun/> :<FaMoon/>}
            
 </button>
            {/* <FaMoon /> */}
             {/* <i 
       className={`fa-solid btn-mode ${darkMode ? <FaSun />  : <FaMoon /> }`}
       onClick={toggleTheme}
    ></i> */}

    {/* <span className={`icone-mode ${darkMode? <FaSun /> : <FaMoon />}`} 
    onClick={toggleTheme}>..</span> */}


         

          <button className="cv-btn">
            Download CV
          </button>

          <div
            className="menu-btn"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </div>

        </div>

      </div>
    </header>
  );
}

export default Navbar;