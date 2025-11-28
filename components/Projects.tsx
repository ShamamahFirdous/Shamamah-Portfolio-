
import React, { useRef, useState, MouseEvent } from 'react';
import { PROJECTS, PROFILE } from '../constants';
import { Github, FolderGit2 } from 'lucide-react';
import FadeInSection from './FadeInSection';

// 3D Tilt Card Component
const ProjectCard: React.FC<{ project: typeof PROJECTS[0]; delay: number }> = ({ project, delay }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -5; // Rotate vertically (limited to 5deg)
    const rotateY = ((x - centerX) / centerX) * 5;  // Rotate horizontally

    setRotation({ x: rotateX, y: rotateY });
  };

  const handleMouseEnter = () => setIsHovering(true);
  
  const handleMouseLeave = () => {
    setIsHovering(false);
    setRotation({ x: 0, y: 0 });
  };

  return (
    <FadeInSection delay={delay} className="h-full">
      <div 
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="h-full bg-coffee-50 dark:bg-coffee-800 rounded-xl overflow-hidden border border-coffee-100 dark:border-coffee-700 transition-all duration-200 flex flex-col group relative"
        style={{
          transformStyle: 'preserve-3d',
          transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) scale3d(${isHovering ? 1.02 : 1}, ${isHovering ? 1.02 : 1}, 1)`,
        }}
      >
        {/* Shine/Glare Effect */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"
          style={{
            background: `radial-gradient(circle at ${50 + rotation.y * 5}% ${50 - rotation.x * 5}%, rgba(255,255,255,0.15), transparent 60%)`
          }}
        />

        <div className="p-6 flex-grow relative z-0">
          <div className="flex justify-between items-start mb-4 transform translate-z-10 group-hover:translate-z-12 transition-transform">
            <div className="p-2 bg-white dark:bg-coffee-700 rounded-lg text-coffee-600 dark:text-coffee-300 shadow-sm group-hover:text-coffee-500 dark:group-hover:text-coffee-200 transition-colors">
              <FolderGit2 size={24} aria-hidden="true" />
            </div>
            <span className="text-xs font-semibold text-coffee-500 dark:text-coffee-300 uppercase tracking-wider bg-white dark:bg-coffee-700 px-2 py-1 rounded border border-coffee-100 dark:border-coffee-600">
              {project.category}
            </span>
          </div>
          
          <h3 className="text-xl font-bold text-coffee-900 dark:text-coffee-50 mb-3 group-hover:text-coffee-600 dark:group-hover:text-coffee-300 transition-colors transform group-hover:translate-x-1 duration-300">
            {project.title}
          </h3>
          
          <p className="text-coffee-700 dark:text-coffee-300 text-sm leading-relaxed mb-6">
            {project.description}
          </p>
        </div>

        <div className="px-6 pb-6 mt-auto relative z-0">
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tech.map((tech) => (
              <span key={tech} className="text-xs font-medium text-coffee-600 dark:text-coffee-300 bg-coffee-200/50 dark:bg-coffee-700/50 px-2 py-1 rounded transition-colors group-hover:bg-coffee-200 dark:group-hover:bg-coffee-700">
                {tech}
              </span>
            ))}
          </div>
          
          <div className="flex gap-4 pt-4 border-t border-coffee-200 dark:border-coffee-700">
            <a 
              href={`https://${PROFILE.github}`}
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-coffee-600 dark:text-coffee-400 hover:text-coffee-900 dark:hover:text-coffee-200 flex items-center gap-1 text-sm font-medium transition-all hover:scale-105"
              aria-label={`View source code for ${project.title}`}
            >
              <Github size={16} aria-hidden="true" /> Code
            </a>
          </div>
        </div>
      </div>
    </FadeInSection>
  );
};

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-12 md:py-20 bg-white dark:bg-coffee-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <FadeInSection>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-coffee-900 dark:text-coffee-50 relative inline-block">
              Featured Projects
              <span className="absolute bottom-1 left-0 w-full h-2 bg-coffee-200/60 dark:bg-coffee-700/60 -z-10"></span>
            </h2>
            <p className="mt-4 text-coffee-600 dark:text-coffee-300 max-w-2xl mx-auto">
              A selection of my work in Machine Learning, Data Science, and Full Stack Development.
            </p>
          </FadeInSection>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project, index) => (
            <ProjectCard key={project.id} project={project} delay={index * 100} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
