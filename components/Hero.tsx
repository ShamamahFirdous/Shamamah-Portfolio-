
import React, { useState, useEffect } from 'react';
import { ArrowDown } from 'lucide-react';
import { PROFILE } from '../constants';
import LazyImage from './LazyImage';
import { smoothScrollTo } from '../utils/smoothScroll';

const ROLES = [
  "Aspiring AI Engineer",
  "Data Scientist",
  "Full Stack Developer",
  "Machine Learning Enthusiast"
];

const Hero: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);
  
  // Typewriter State
  const [roleText, setRoleText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [delta, setDelta] = useState(150);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Typewriter Logic
  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => clearInterval(ticker);
  }, [roleText, delta]);

  const tick = () => {
    let i = roleIndex % ROLES.length;
    let fullText = ROLES[i];
    let updatedText = isDeleting 
      ? fullText.substring(0, roleText.length - 1) 
      : fullText.substring(0, roleText.length + 1);

    setRoleText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(2000); // Wait at end of word
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setRoleIndex(roleIndex + 1);
      setDelta(150); // Reset speed
    } else {
       // Normal typing speed variations could go here
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-coffee-50 dark:bg-coffee-900 transition-colors duration-300">
      {/* Decorative Background Elements - Static, no animation */}
      <div className="absolute top-0 left-0 w-full h-full opacity-30 dark:opacity-20 pointer-events-none overflow-hidden">
        <div 
          className="absolute -top-20 -right-20 w-96 h-96 bg-coffee-300 dark:bg-coffee-700 rounded-full blur-3xl will-change-transform"
          style={{ transform: `translateY(${scrollY * 0.5}px)` }}
        ></div>
        <div 
          className="absolute top-1/2 -left-20 w-72 h-72 bg-coffee-200 dark:bg-coffee-800 rounded-full blur-3xl will-change-transform"
          style={{ 
            transform: `translateY(${scrollY * 0.2}px)` 
          }}
        ></div>
        <div 
          className="absolute bottom-[-10%] right-[20%] w-64 h-64 bg-coffee-100 dark:bg-coffee-600 rounded-full blur-3xl will-change-transform"
          style={{ 
             transform: `translateY(-${scrollY * 0.2}px)` 
          }}
        ></div>
      </div>

      <div 
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center will-change-transform"
        style={{ transform: `translateY(${scrollY * 0.1}px)`, opacity: Math.max(0, 1 - scrollY / 700) }}
      >
        
        {/* Profile Avatar with Lazy Loading - Completely static */}
        <div className="mx-auto w-40 h-40 md:w-56 md:h-56 mb-8 rounded-full shadow-xl border-4 border-white dark:border-coffee-700 overflow-hidden">
          <LazyImage 
            src={PROFILE.avatar}
            alt={PROFILE.name}
            className="w-full h-full"
            containerClassName="w-full h-full"
          />
        </div>

        <span className="block text-coffee-500 dark:text-coffee-400 font-semibold tracking-widest text-sm uppercase mb-4 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          Welcome to my portfolio
        </span>
        <h1 className="text-4xl md:text-7xl font-serif font-bold text-coffee-900 dark:text-coffee-50 mb-6 leading-tight animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          Hello, I'm <br/>
          <span className="text-coffee-600 dark:text-coffee-300 relative inline-block">
            {PROFILE.name}
             <span className="absolute -bottom-2 left-0 w-full h-1 bg-coffee-300 dark:bg-coffee-600 rounded-full transform scale-x-0 transition-transform duration-700 ease-out origin-left animate-[scaleX_1s_ease-out_1s_forwards]"></span>
             <style>{`
               @keyframes scaleX { to { transform: scaleX(1); } }
             `}</style>
          </span>
        </h1>
        
        {/* Typewriter Effect */}
        <div className="h-8 md:h-10 mt-4 mb-2 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
           <p className="text-xl md:text-2xl text-coffee-700 dark:text-coffee-200 font-light">
             <span className="border-r-2 border-coffee-400 pr-1 animate-pulse">
               {roleText}
             </span>
           </p>
        </div>

        <p className="mt-2 text-coffee-600 dark:text-coffee-300 animate-fade-in-up" style={{ animationDelay: '0.35s' }}>{PROFILE.location}</p>
      </div>
      
      <a 
        href="#about"
        onClick={(e) => smoothScrollTo(e, '#about')}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-coffee-400 dark:text-coffee-500 cursor-pointer hover:text-coffee-600 dark:hover:text-coffee-300 transition-colors hover:scale-125 duration-300"
        aria-label="Scroll to About section"
      >
        <ArrowDown size={24} aria-hidden="true" />
      </a>
    </section>
  );
};

export default Hero;
