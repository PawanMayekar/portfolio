import React, { useState, useEffect } from 'react';

const NavBlocks = () => {
  const [activeSection, setActiveSection] = useState('home');

  const sections = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ];
  
  const NavBlocks = () => {
    const [activeSection, setActiveSection] = useState('home');
  
    useEffect(() => {
      const handleScroll = () => {
        const scrollPosition = window.scrollY;
        
        sections.forEach(({ id }) => {
          const element = document.getElementById(id);
          if (element) {
            const { offsetTop, offsetHeight } = element;
            if (
              scrollPosition >= offsetTop - 200 &&
              scrollPosition < offsetTop + offsetHeight - 200
            ) {
              setActiveSection(id);
            }
          }
        });
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);
  
    // ... rest of the component
  };

  const handleBlockClick = (id) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="nav-blocks">
      {sections.map(({ id, label }) => (
        <div
          key={id}
          className={`nav-block ${activeSection === id ? 'active' : ''}`}
          onClick={() => handleBlockClick(id)}
        >
          <span className="nav-block-tooltip">{label}</span>
        </div>
      ))}
    </div>
  );
};

export default NavBlocks; 