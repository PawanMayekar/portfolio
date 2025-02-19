import React from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import './Hero.scss';

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Hi, I'm <motion.span
            className="highlight"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >Your Name</motion.span>
        </motion.h1>
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Software Developer
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          I create beautiful and functional web applications
        </motion.p>
        
        <motion.div 
          className="cta-buttons"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link to="projects" smooth={true} duration={500} className="btn primary">
              View My Work
            </Link>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link to="contact" smooth={true} duration={500} className="btn secondary">
              Contact Me
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;