import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Publications from './components/Publications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';

const App: React.FC = () => {
  return (
    <div className="bg-coffee-50 min-h-screen font-sans text-coffee-900 selection:bg-coffee-200 selection:text-coffee-900 cursor-default">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Publications />
      <Contact />
      <Footer />
      <BackToTop />
    </div>
  );
};

export default App;