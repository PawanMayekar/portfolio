import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import resume from '../assets/docs/Pawan_mayekar_resume.pdf';
import '../styles/navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleDownload = (e) => {
    e.preventDefault();
    const link = document.createElement('a');
    link.href = resume;
    link.download = 'Pawan_Mayekar_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const navLinks = [
    { to: "home", text: "Home" },
    { to: "about", text: "About" },
    { to: "skills", text: "Skills" },
    { to: "projects", text: "Projects" },
    { to: "contact", text: "Contact" }
  ];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <Link 
          to="home" 
          smooth={true} 
          duration={500} 
          className="logo"
          onClick={() => setMenuOpen(false)}
        >
          <span className="logo-text">Portfolio</span>
        </Link>

        <div className={`nav-menu ${menuOpen ? 'active' : ''}`}>
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              smooth={true}
              duration={500}
              offset={-70}
              onClick={() => setMenuOpen(false)}
            >
              {link.text}
            </Link>
          ))}
          <button 
            className="resume-btn"
            onClick={(e) => {
              handleDownload(e);
              setMenuOpen(false);
            }}
          >
            <span>Resume</span>
            <i className="fas fa-download"></i>
          </button>
        </div>

        <div className="hamburger" onClick={toggleMenu}>
          <span className={`bar ${menuOpen ? 'active' : ''}`}></span>
          <span className={`bar ${menuOpen ? 'active' : ''}`}></span>
          <span className={`bar ${menuOpen ? 'active' : ''}`}></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 