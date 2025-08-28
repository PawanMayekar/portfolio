import React from 'react';
import Hero from './components/hero';
import Projects from './components/projects';
import About from './components/about';
import Skills from './components/skills';
import Contact from './components/contact';
import Navbar from './components/navbar';
import Footer from './components/footer';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import './App.css';
import './styles/projects.css';
import './styles/sections.css';

const AppContent = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="app" data-theme={theme}>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
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
};

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
