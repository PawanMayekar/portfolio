import React from 'react';
import { motion } from 'framer-motion';
import '../styles/hero.css';

const Hero = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const stagger = {
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="gradient-overlay"></div>
        <div className="grid-pattern"></div>
      </div>
      
      <motion.div 
        className="container hero-container"
        initial="hidden"
        animate="visible"
        variants={stagger}
      >
        <div className="hero-content">
          <motion.div className="hero-text" variants={stagger}>
            <motion.div className="badge" variants={fadeIn}>
              <span className="badge-icon">👋</span>
              <span>Welcome to my portfolio</span>
            </motion.div>
            
            <motion.h1 variants={fadeIn}>
              Hi, I'm <span className="gradient-text">Pawan Mayekar</span>
            </motion.h1>
            
            <motion.h2 className="typewriter" variants={fadeIn}>
             Software Developer
            </motion.h2>
            
            <motion.p className="hero-description" variants={fadeIn}>
              Experienced software developer specializing in full-stack development,
              mobile app development, and creating innovative solutions. Building exceptional
              digital experiences with clean, efficient code.
            </motion.p>
            
            <motion.div className="tech-stack" variants={stagger}>
              {['React', 'Django', 'React Native', 'Python', 'TypeScript'].map((tech, index) => (
                <motion.span
                  key={tech}
                  className="tech-pill"
                  variants={fadeIn}
                  whileHover={{ scale: 1.05, y: -2 }}
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>
            
            <motion.div className="hero-cta" variants={stagger}>
              <motion.a
                href="#projects"
                className="btn btn-primary"
                variants={fadeIn}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View My Work
                <svg xmlns="http://www.w3.org/2000/svg" className="icon" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </motion.a>
              
              <motion.a
                href="#contact"
                className="btn btn-secondary"
                variants={fadeIn}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Me
                <svg xmlns="http://www.w3.org/2000/svg" className="icon" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </motion.a>
            </motion.div>
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
};

export default Hero; 
