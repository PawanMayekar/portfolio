import React, { useState } from 'react';
import { Link } from 'react-scroll';
import './Navbar.scss';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="hero" smooth={true} duration={500}>
          <span className="logo">YourName</span>
        </Link>
      </div>

      <div className={`navbar-menu ${isOpen ? 'is-open' : ''}`}>
        <Link to="about" smooth={true} duration={500}>About</Link>
        <Link to="skills" smooth={true} duration={500}>Skills</Link>
        <Link to="projects" smooth={true} duration={500}>Projects</Link>
        <Link to="contact" smooth={true} duration={500}>Contact</Link>
      </div>

      <button className="hamburger" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </button>
    </nav>
  );
};

export default Navbar;