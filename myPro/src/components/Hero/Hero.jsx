import "./Hero.css";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
// import heroImg from "../../assets/images/Marina.PNG";
import heroImg from "../../assets/images/girl.png";


import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa";

function Hero() {
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.25,
      },
    },
  };

  const item = {
    hidden: {
      opacity: 0,
      y: 40,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section className="hero" id="home">
      <div className="container hero-container">
        {/* Left Side */}
        <motion.div
          className="hero-content"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.span variants={item} className="hello">
            Hello, I'm 👋
          </motion.span>

          <motion.h1 variants={item}>
            Marina <span>Ashraf</span>
          </motion.h1>

          <motion.div variants={item} className=" front">
            <TypeAnimation
              sequence={[
                "Frontend Developer",
                2000,
                "React Developer",
                2000,
               
              ]}
              wrapper="h2"
              speed={50}
              repeat={Infinity}
              className="typing"
            />
          </motion.div>

          <motion.p variants={item}>
            I build modern, responsive and interactive web applications
            using React.js and modern technologies.
          </motion.p>

          <motion.div
            variants={item}
            className="hero-btns"
          >
            <button className="btn primary">
              Hire Me
            </button>

            <a href="#" className="btn secondary" download>
              Download CV
            </a>
          </motion.div>

          <motion.div
            variants={item}
            className="social"
          >
            <a href="#">
              <FaLinkedin />
            </a>

            <a href="#">
              <FaGithub />
            </a>

            <a href="#">
              <FaInstagram />
            </a>

            <a href="#">
              <FaEnvelope />
            </a>
          </motion.div>
        </motion.div>

        {/* Right Side */}
        <motion.div
          className="hero-image"
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="blob"></div>

          <div className="ring"></div>

          <img src={heroImg} alt="Marina" />
        </motion.div>
      </div>

      <div className="dots one"></div>
      <div className="dots two"></div>

     
    </section>
  );
}

export default Hero;