import "./Certificates.css";
import { motion } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";

import depi from "../../assets/images/depi.png";
import iti from "../../assets/images/iti.png";
import nti from "../../assets/images/nti.png";
import udemy from "../../assets/images/udemy.png";
import sprint from "../../assets/images/sprint.png";
const certificates = [
     {
    image: depi,
    title: "Digital Egypt Pioneers",
    organization: "DEPI",
    skills: ["Frontend", "React"],
    link: "#",
  },
  {
    image: nti,
    title: "Frontend Development",
    organization: "NTI",
    skills: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    link: "#",
  },
 
   {
    image: iti,
    title: "Frontend Development",
    organization: "ITI",
    skills: ["HTML", "CSS", "JavaScript"],
    link: "#",
  },
   {
    image: udemy,
    title: "Frontend Development",
    organization: "Udemy",
    skills: ["HTML", "CSS", "JavaScript"],
    link: "#",
  },
   {
    image: sprint,
    title: "Frontend Development",
    organization: "Sprint",
    skills: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    link: "#",
  },


];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: .2,
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
      duration: .6,
    },
  },
};

function Certificates() {
  return (
    <section className="certificates" id="certificates">
      <div className="container">

        <motion.div
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span>Certificates</span>

          <h2>Learning Journey</h2>

          <p>
            Certifications that reflect my continuous learning
            and passion for frontend development.
          </p>
        </motion.div>

        <motion.div
          className="certificates-grid"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >

          {certificates.map((certificate, index) => (

            <motion.div
              className="certificate-card"
              key={index}
              variants={item}
            >

              <div className="certificate-logo">
                <img
                  src={certificate.image}
                  alt={certificate.organization}
                />
              </div>

              <span className="verified">
                ✔ Verified
              </span>

              <h3>{certificate.title}</h3>

              <h4>{certificate.organization}</h4>

              <div className="certificate-skills">

                {certificate.skills.map((skill, i) => (

                  <span key={i}>
                    {skill}
                  </span>

                ))}

              </div>

              <a
                href={certificate.link}
                target="_blank"
                rel="noreferrer"
                className="certificate-btn"
              >
                View Certificate

                <FaExternalLinkAlt />

              </a>

            </motion.div>

          ))}

        </motion.div>

      </div>
    </section>
  );
}

export default Certificates;