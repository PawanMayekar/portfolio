import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <motion.h2 
          className="section-heading"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Let's Connect
        </motion.h2>
        <motion.div 
          className="contact-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div 
            className="contact-card"
            variants={itemVariants}
            whileHover={{
              boxShadow: "0 8px 30px rgba(99, 102, 241, 0.2)",
              translateY: -5,
              borderColor: "rgba(99, 102, 241, 0.3)"
            }}
          >
            <h3>Professional Links</h3>
            <div className="contact-links">
              <motion.a 
                href="https://github.com/Pawanmatkar297" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="contact-link"
                whileHover={{ x: 10 }}
                whileTap={{ scale: 0.98 }}
              >
                <i className="fab fa-github"></i>
                <div className="contact-text">
                  <span>GitHub</span>
                  <p>Check out my code repositories and projects</p>
                </div>
              </motion.a>
              <motion.a 
                href="https://www.linkedin.com/in/pawan-mayekar-1ba081242/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="contact-link"
                whileHover={{ x: 10 }}
                whileTap={{ scale: 0.98 }}
              >
                <i className="fab fa-linkedin"></i>
                <div className="contact-text">
                  <span>LinkedIn</span>
                  <p>Connect with me professionally</p>
                </div>
              </motion.a>
            </div>
          </motion.div>
          
          <motion.div 
            className="contact-card"
            variants={itemVariants}
            whileHover={{
              boxShadow: "0 8px 30px rgba(99, 102, 241, 0.2)",
              translateY: -5,
              borderColor: "rgba(99, 102, 241, 0.3)"
            }}
          >
            <h3>Contact Information</h3>
            <div className="contact-details">
              <motion.div 
                className="contact-item"
                whileHover={{ x: 10 }}
              >
                <i className="fas fa-envelope"></i>
                <div className="contact-text">
                  <span>Email</span>
                  <a href="mailto:pawanmws11@gmail.com">pawanmws11@gmail.com</a>
                </div>
              </motion.div>
              <motion.div 
                className="contact-item"
                whileHover={{ x: 10 }}
              >
                <i className="fas fa-phone-alt"></i>
                <div className="contact-text">
                  <span>Phone</span>
                  <a href="tel:+919082010126">+91 9082010126</a>
                </div>
              </motion.div>
              <motion.div 
                className="contact-item"
                whileHover={{ x: 10 }}
              >
                <i className="fas fa-map-marker-alt"></i>
                <div className="contact-text">
                  <span>Location</span>
                  <p>Navi Mumbai, India</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
