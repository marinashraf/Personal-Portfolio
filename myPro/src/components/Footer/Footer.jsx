import "./Footer.css";

import { Link } from "react-scroll";

import {
FaGithub,
FaLinkedin,
FaInstagram,
FaArrowUp
} from "react-icons/fa";

function Footer(){

return(

<footer className="footer">

<div className="container">

<h2>

Marina<span>.</span>

</h2>

<ul>

<li>

<Link to="home" smooth duration={600}>Home</Link>

</li>

<li>

<Link to="about" smooth duration={600}>About</Link>

</li>

<li>

<Link to="skills" smooth duration={600}>Skills</Link>

</li>

<li>

<Link to="projects" smooth duration={600}>Projects</Link>

</li>

<li>

<Link to="contact" smooth duration={600}>Contact</Link>

</li>

</ul>

<div className="footer-social">

<a href="#">

<FaGithub/>

</a>

<a href="#">

<FaLinkedin/>

</a>

<a href="#">

<FaInstagram/>

</a>

</div>

<p>

© 2026 Marina Ashraf. All Rights Reserved.

</p>

<a href="#home" className="top">

<FaArrowUp/>

</a>

</div>

</footer>

)

}

export default Footer;