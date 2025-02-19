import React, { useEffect } from 'react';
import Navbar from './components/navbar.js';
import Hero from './components/hero.js';
import About from './components/about.jsx';
import Skills from './components/skills.jsx';
import Projects from './components/projects.jsx';
import Contact from './components/contact.jsx';
import NavBlocks from './components/NavBlocks.jsx';
import Footer from './components/footer.jsx';
import './App.css';
import './styles/animations.css';

function App() {
  useEffect(() => {
    // Add intersection observer for section animations
    const sections = document.querySelectorAll('section');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    sections.forEach(section => {
      section.classList.add('section');
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="App">
      <Navbar />
      <NavBlocks />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
