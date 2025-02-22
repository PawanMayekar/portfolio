import React from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      title: "Enhancing Patient Care with Bilingual Speech and ML",
      description: "A healthcare solution that leverages machine learning and speech recognition to improve patient care through bilingual communication support.",
      technologies: ["Python", "Machine Learning", "Speech Recognition", "Natural Language Processing"],
      github: "https://github.com/Pawanmatkar297/Health-Care-Chat-Bot"
    },
    {
      title: "Hand Sign Detection Using Python",
      description: "Developed a computer vision project for real-time hand sign detection and interpretation using Python and deep learning techniques.",
      technologies: ["Python", "OpenCV", "TensorFlow", "Computer Vision", "Torch"],
      github: "https://github.com/Pawanmatkar297/Hand-Sign-Detection-Using-Python"
    },
    {
      title: "Oil Gas Forecast Monitor",
      description: "A monitoring system for oil and gas forecasting using advanced analytics and machine learning algorithms.",
      technologies: ["Python", "Data Science", "Machine Learning", "Time Series Analysis"],
      github: "https://github.com/Pawanmatkar297/Oil-Gas-Forecast-Monitor-FE"
    },
    {
      title: "Movie Recommendation System",
      description: "A Python-based movie recommendation system using collaborative filtering and content-based filtering techniques.",
      technologies: ["Python", "Machine Learning", "Data Analysis", "Recommendation Algorithms"],
      github: "https://github.com/Pawanmatkar297/Movie-Recommendation-System"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const projectVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="projects" className="projects">
      <div className="projects-content">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          My Projects
        </motion.h2>
        <motion.div
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="project-card"
              variants={projectVariants}
              whileHover={{
                scale: 1.03,
                boxShadow: "0 8px 16px rgba(0,0,0,0.1)"
              }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tech">
                  {project.technologies.map((tech, i) => (
                    <motion.span
                      key={i}
                      className="tech-tag"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
                <motion.div 
                  className="project-links"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    GitHub
                  </motion.a>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
