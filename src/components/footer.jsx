import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="social-links">
          <a href="https://github.com/Pawanmatkar297" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/pawan-mayekar-1ba081242/" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href="https://x.com/pawanmatkar_" target="_blank" rel="noopener noreferrer">
            Twitter
          </a>
        </div>
        <p className="copyright">
          © {new Date().getFullYear()} Pawan Mayekar. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
