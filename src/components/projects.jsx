import React from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      title: "Assets Management System",
      description: "Built a full-stack asset management web app to track assets across multiple locations with real-time dashboard, role-based access, and automated workflows.",
      technologies: ["React", "Django", "Python", "MySQL", "QR Code"],
      github: "#",
      highlights: [
        "Real-time dashboard for asset status and tracking",
        "Role-based access and digital approval workflows",
        "Automated challan generation with QR code integration"
      ]
    },
    {
      title: "Landing Page - Nimble Technologies",
      description: "Developed a responsive corporate website using React.js, focusing on performance and user experience with interactive UI components.",
      technologies: ["React 19.1", "React Router", "Framer Motion", "CSS"],
      github: "https://nimble-wheat.vercel.app/",
      highlights: [
        "Responsive design with mobile-first approach",
        "Interactive UI components with Framer Motion",
        "Component-based architecture for maintainability"
      ]
    },
    {
      title: "Asset Management Mobile App",
      description: "Developed a mobile asset management app enabling on-site creation, QR code scanning, and streamlined workflows for asset management.",
      technologies: ["React Native", "Django", "Python", "QR Scanner"],
      github: "#",
      highlights: [
        "On-site asset creation and challan approvals",
        "QR code scanning for real-time verification",
        "Mobile workflows syncing with web dashboard"
      ]
    },
    {
      title: "Bilingual Healthcare Chatbot",
      description: "Engineered a full-stack bilingual healthcare chatbot using ML for disease prediction and NLP for understanding user input with voice interaction.",
      technologies: ["Python", "Flask", "React.js", "MongoDB", "scikit-learn", "NLTK"],
      github: "#",
      highlights: [
        "ML model for disease prediction based on symptoms",
        "NLP integration for understanding user input",
        "Voice interaction and bilingual support"
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const projectVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-title-badge">Portfolio</span>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-description">
            Explore my latest work in machine learning, web development, and innovative solutions.
          </p>
        </motion.div>

        <motion.div
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {projects.map((project, index) => (
            <motion.article
              key={index}
              className="project-card glass-card"
              variants={projectVariants}
              whileHover={{
                y: -8,
                transition: { duration: 0.3 }
              }}
            >
              <div className="project-content">
                <header className="project-header">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                </header>

                <div className="project-highlights">
                  {project.highlights.map((highlight, idx) => (
                    <div key={idx} className="highlight-item">
                      <span className="highlight-icon">✓</span>
                      {highlight}
                    </div>
                  ))}
                </div>

                <div className="project-tech-stack">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-pill">
                      {tech}
                    </span>
                  ))}
                </div>

                <footer className="project-footer">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <svg className="icon" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12"/>
                    </svg>
                    View Project
                  </motion.a>
                </footer>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
