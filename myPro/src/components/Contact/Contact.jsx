import "./Contact.css";
import { motion } from "framer-motion";

import {
FaGithub,
FaLinkedin,
FaEnvelope,
FaPaperPlane
} from "react-icons/fa";

function Contact(){

return(

<section className="contact" id="contact">

<div className="container">

<motion.div
className="section-title"
initial={{opacity:0,y:40}}
whileInView={{opacity:1,y:0}}
viewport={{once:true}}
>

<span>Contact</span>

<h2>Let's Build Something Together</h2>

<p>
I'm available for internships, freelance work and exciting frontend projects.
</p>

</motion.div>

<motion.div
className="chat-card"

initial={{opacity:0,scale:.9}}

whileInView={{opacity:1,scale:1}}

viewport={{once:true}}

transition={{duration:.6}}

>

<div className="chat-header">

<div className="online"></div>

<div>

<h3>Marina Ashraf</h3>

<span>Frontend Developer</span>

</div>

</div>

<form>

<input
type="text"
placeholder="Your Name"
required
/>

<input
type="email"
placeholder="Your Email"
required
/>

<textarea
rows="6"
placeholder="Tell me about your project..."
required
></textarea>

<button>

<FaPaperPlane/>

Send Message

</button>

</form>

</motion.div>

<div className="contact-social">

<a href="#">
<FaGithub/>
</a>

<a href="#">
<FaLinkedin/>
</a>

<a href="#">
<FaEnvelope/>
</a>

</div>

</div>

</section>

)

}

export default Contact;