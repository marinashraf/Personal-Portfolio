import "./Skills.css";
import { motion } from "framer-motion";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaBootstrap,
  FaGithub,
} from "react-icons/fa";

const skills = [
  {
    icon: <FaHtml5 />,
    title: "HTML5",
    desc: "Semantic and accessible web structure.",
    level: 95,
    color: "#E34F26",
  },
  {
    icon: <FaCss3Alt />,
    title: "CSS3",
    desc: "Responsive layouts and modern UI design.",
    level: 90,
    color: "#1572B6",
  },
  {
    icon: <FaJs />,
    title: "JavaScript",
    desc: "Interactive and dynamic web applications.",
    level: 80,
    color: "#F7DF1E",
  },
  {
    icon: <FaReact />,
    title: "React",
    desc: "Building reusable UI components.",
    level: 75,
    color: "#61DAFB",
  },
  {
    icon: <FaBootstrap />,
    title: "Bootstrap",
    desc: "Fast and responsive development.",
    level: 90,
    color: "#7952B3",
  },
  {
    icon: <FaGithub />,
    title: "Git & GitHub",
    desc: "Version control and collaboration.",
    level: 70,
    color: "#ffffff",
  },
];

function Skills() {
  
  return (
    <section className="skills" id="skills">
      <div className="container">

        <motion.div
          className="section-title"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .6 }}
        >
          <span>My Skills</span>

          <h2>Technologies I Work With</h2>

          <p>
            I enjoy building modern, responsive and interactive web
            applications using the latest frontend technologies.
          </p>
        </motion.div>

        <div className="skills-grid">

          {skills.map((skill, index) => (

            <motion.div
              className="skill-card"
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: .5,
                delay: index * .15,
              }}
            >




              <div
                className="skill-icon"
                style={{ color: skill.color }}
              >
                {skill.icon}
              </div>

              <h3>{skill.title}</h3>

              <p>{skill.desc}</p>

              <div className="progress">

                <motion.div
                  className="progress-bar"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 1.2,
                  }}
                />

              </div>

              <span className="percent">
                {skill.level}%
              </span>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Skills;