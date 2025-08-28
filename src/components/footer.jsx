import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/PawanMayekar', icon: 'fab fa-github' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/pawan-mayekar-1ba081242/', icon: 'fab fa-linkedin' },
    { name: 'Twitter', url: 'https://x.com/pawanmatkar_', icon: 'fab fa-twitter' }
  ];

  return (
    <footer className="footer">
      <div className="container footer-content">
        <motion.div 
          className="social-links"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {socialLinks.map((link, index) => (
            <motion.a 
              key={index}
              href={link.url} 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ y: -5, color: '#8b5cf6' }}
              whileTap={{ scale: 0.95 }}
            >
              <i className={link.icon}></i>
              <span>{link.name}</span>
            </motion.a>
          ))}
        </motion.div>
        <motion.p 
          className="copyright"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          © {new Date().getFullYear()} Pawan Mayekar. All rights reserved.
        </motion.p>
      </div>
    </footer>
  );
};

export default Footer;
