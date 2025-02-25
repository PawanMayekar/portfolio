import React from 'react';
import '../styles/hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-background"></div>
      <div className="particles"></div>
      
      <div className="container hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <div className="greeting-box">
              <span className="greeting-tag">
                <i className="fas fa-code"></i> Welcome to my portfolio
              </span>
            </div>
            
            <h1>Hi, I'm <span className="highlight">Pawan Mayekar</span></h1>
            <h2>Software Developer</h2>
            
            <p className="hero-description">
              I build exceptional digital experiences with clean, efficient code.
              Passionate about creating innovative solutions to complex problems.
            </p>
            
            <div className="tech-stack">
              <span className="tech-tag">JavaScript</span>
              <span className="tech-tag">React</span>
              <span className="tech-tag">Node.js</span>
              <span className="tech-tag">Python</span>
            </div>
            
            <div className="hero-buttons">
              <a href="#projects" className="btn primary">
                <span>View My Work</span>
                <i className="fas fa-arrow-right"></i>
              </a>
              <a href="#contact" className="btn secondary">
                <span>Contact Me</span>
                <i className="fas fa-envelope"></i>
              </a>
            </div>
          </div>
          
          <div className="hero-image">
            <div className="image-container">
              <div className="profile-image"></div>
              <div className="image-overlay"></div>
              
              <div className="tech-bubbles">
                <div className="tech-bubble react">
                  <i className="fab fa-react"></i>
                </div>
                <div className="tech-bubble python">
                  <i className="fab fa-python"></i>
                </div>
                <div className="tech-bubble js">
                  <i className="fab fa-js"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="scroll-indicator">
          <div className="mouse">
            <span>Scroll</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 