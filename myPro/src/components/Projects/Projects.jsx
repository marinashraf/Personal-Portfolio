import "./Project.css";
import { motion } from "framer-motion";
import { useState } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

import project1 from "../../assets/images/prog1.png";
import project2 from "../../assets/images/prog3.png";
import project3 from "../../assets/images/prog2.png";
import project4 from "../../assets/images/prog5.png";

const projects = [
  {
    title: "Coffee Website",
    category: "React",
    image: project1,
    github: "#",
    live: "#",
    tech: ["React", "CSS", "API"],
  },

  {
    title: "sweet Website",
    category: "React",
    image: project2,
    github: "#",
    live: "#",
    tech: ["React", "Framer Motion"],
  },

  {
    title: "Landing Page",
    category: "JavaScript",
    image: project3,
    github: "#",
    live: "#",
    tech: ["JavaScript", "Bootstrap"],
  },

  {
    title: " Food Landing Page",
    category: "HTML/CSS",
    image: project4,
    github: "#",
    live: "#",
    tech: ["HTML", "CSS"],
  },
];

const filters = ["All", "React", "JavaScript", "HTML/CSS"];

function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter(
          (project) => project.category === activeFilter
        );

  return (
    <section className="projects" id="projects">
      <div className="container">

        <motion.div
          className="section-title"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span>My Work</span>

          <h2>Featured Projects</h2>

          <p>
            Here are some of the projects I've worked on using
            modern frontend technologies.
          </p>
        </motion.div>

        {/* Filters */}

        <div className="filters">

          {filters.map((filter) => (

            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={
                activeFilter === filter ? "active" : ""
              }
            >
              {filter}
            </button>

          ))}

        </div>

        {/* Projects */}

        <div className="projects-grid">

          {filteredProjects.map((project, index) => (

            <motion.div
              className="project-card"
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * .15,
              }}
            >

              <div className="project-image">

                <img
                  src={project.image}
                  alt={project.title}
                />

                <div className="overlay">

                  <a href={project.github}>
                    <FaGithub />
                  </a>

                  <a href={project.live}>
                    <FaExternalLinkAlt />
                  </a>

                </div>

              </div>

              <div className="project-content">

                <h3>{project.title}</h3>

                <div className="tech">

                  {project.tech.map((item, i) => (

                    <span key={i}>
                      {item}
                    </span>

                  ))}

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Projects;