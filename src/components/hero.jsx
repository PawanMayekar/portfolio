import React from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import profileImage from '../assets/images/images.jpg';
import backgroundImage from '../assets/images/bg.jpg';
import './hero.css';

const Hero = () => {
  const techStack = ['Python', 'Django', 'React', 'Machine Learning', 'Data Science'];

  return (
    <section id="home" className="hero">
      <div className="hero-background" style={{ backgroundImage: `url(${backgroundImage})` }}></div>
      <div className="particles"></div>
      <div className="hero-content">
        <div className="hero-text">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="greeting-box"
          >
            <span className="greeting-tag">👋 Welcome to my portfolio</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Hi, I'm <motion.span
              className="highlight"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >Pawan Mayekar</motion.span>
          </motion.h1>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="typewriter"
          >
            Software Developer
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="hero-description"
          >
            Passionate about creating innovative solutions with code
            <motion.div className="tech-stack">
              {techStack.map((tech, index) => (
                <motion.span
                  key={tech}
                  className="tech-tag"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>
          </motion.p>
          
          <motion.div 
            className="cta-buttons"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to="projects" smooth={true} duration={500} className="btn primary">
                <span>View My Work</span>
                <i className="fas fa-arrow-right"></i>
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to="contact" smooth={true} duration={500} className="btn secondary">
                <span>Contact Me</span>
                <i className="fas fa-envelope"></i>
              </Link>
            </motion.div>
          </motion.div>

          <motion.div 
            className="scroll-indicator"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
          >
            <div className="mouse"></div>
            <span>Scroll Down</span>
          </motion.div>
        </div>
        
        <motion.div 
          className="hero-image"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <motion.div 
            className="image-container"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <img src={profileImage} alt="Pawan Mayekar" />
            <div className="image-overlay"></div>
          </motion.div>
          <div className="floating-elements">
            <motion.div 
              className="tech-bubble python"
              animate={{ 
                y: [0, -20, 0],
                x: [0, 10, 0]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <i className="fab fa-python"></i>
              <span>Python</span>
            </motion.div>
            <motion.div 
              className="tech-bubble ml"
              animate={{ 
                y: [0, 20, 0],
                x: [0, -10, 0]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
            >
              <i className="fas fa-brain"></i>
              <span>ML</span>
            </motion.div>
            <motion.div 
              className="tech-bubble react"
              animate={{ 
                y: [-20, 0, -20],
                x: [10, 0, 10]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2
              }}
            >
              <i className="fab fa-react"></i>
              <span>React</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;