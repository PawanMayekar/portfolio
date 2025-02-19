import React from 'react';
import './hero.css';

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1>Hi, I'm <span className="highlight">Your Name</span></h1>
          <h2>Full Stack Developer</h2>
          <p>Building digital experiences that make a difference</p>
          <div className="hero-buttons">
            <a href="#projects" className="btn primary">View My Work</a>
            <a href="#contact" className="btn secondary">Contact Me</a>
          </div>
        </div>
        <div className="hero-image">
          {/* You can add your professional photo here */}
          <div className="profile-image"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 