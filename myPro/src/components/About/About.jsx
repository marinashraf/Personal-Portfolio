
import "./About.css";
import { motion } from "framer-motion";
import Counter from "../Counter/Counter";
// import heroImg from "../../assets/images/new.png";
import heroImg from "../../assets/images/girl.png";
import "../../assets/Styles/global.css"
function About() {
    // console.log(CountUp);
  return (
    <>
    <section className="about" id="about">
      <div className="container about-container">

        <motion.div
          className="about-image"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .7 }}
        >
          <img src={heroImg} alt="Marina" />
        </motion.div>

        <motion.div
          className="about-content"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .7 }}
        >
          <span>About Me</span>

          <h2>
            Passionate Frontend Developer
          </h2>

          <p>
            I enjoy building modern, responsive and user-friendly web applications
            using React, JavaScript, HTML, CSS and Bootstrap. I always strive to
            learn new technologies and improve my skills through real projects.
          </p>

          <div className="about-cards">

            <div className="card">
               <h3>
                 <Counter end={10}/> +</h3> 
              <p>Projects</p>
            </div>

            <div className="card">
              <h3>
                <Counter end={4} duration={3}/>+
              </h3>
              <p>Certificates</p>
            </div>

            <div className="card">
              <h3>React</h3>
              <p>Frontend Stack</p>
            </div>

          </div>

          {/* <a href="/myPro/public/MarinaCV.pdf" className="btn primary" download>
            Download CV
          </a> */}
          <button className="btn primary">

              <a href="#"  download>
            Download CV
          </a> 
          </button>

        </motion.div>

      </div>
    </section>
    </>
  );
}

export default About;