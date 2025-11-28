import React, { useRef, useEffect, useState } from 'react';
import { EXPERIENCE } from '../constants';
import { Briefcase } from 'lucide-react';

// Custom Animated Section for sliding left/right
const SlideInSection: React.FC<{ 
  children: React.ReactNode; 
  direction: 'left' | 'right'; 
  delay?: number;
  className?: string;
}> = ({ children, direction, delay = 0, className = "" }) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            if (domRef.current) observer.unobserve(domRef.current);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const { current } = domRef;
    if (current) observer.observe(current);

    return () => {
      if (current) observer.unobserve(current);
    };
  }, []);

  const translateClass = direction === 'left' ? '-translate-x-20' : 'translate-x-20';

  return (
    <div
      ref={domRef}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-1000 ease-out transform ${
        isVisible ? 'opacity-100 translate-x-0' : `opacity-0 ${translateClass}`
      } ${className}`}
    >
      {children}
    </div>
  );
};

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-12 md:py-20 bg-coffee-50 dark:bg-coffee-950 transition-colors duration-300 overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <SlideInSection direction="left">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-coffee-900 dark:text-coffee-50 relative inline-block">
              Professional Experience
              <span className="absolute bottom-0 left-0 w-full h-2 bg-coffee-200/60 dark:bg-coffee-700/60 -z-10"></span>
            </h2>
          </SlideInSection>
        </div>

        <div className="space-y-12 relative">
           {/* Timeline Line (Desktop) - Animated Height */}
           <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-coffee-200 dark:bg-coffee-800 -ml-px overflow-hidden">
              <div className="w-full h-full bg-coffee-400 dark:bg-coffee-600 animate-[fadeInUp_1.5s_ease-out]"></div>
           </div>

          {EXPERIENCE.map((exp, index) => {
             const isEven = index % 2 === 0;
             return (
              <div key={exp.id} className="relative pl-8 md:pl-0">
                <div className={`md:flex items-start justify-between ${isEven ? 'md:flex-row-reverse' : ''} group`}>
                  
                  {/* Timeline Dot (Desktop) */}
                  <div className={`hidden md:block absolute left-1/2 top-0 w-5 h-5 bg-coffee-500 border-4 border-white dark:border-coffee-900 rounded-full -ml-2.5 z-10 transition-transform duration-500 ${isEven ? 'origin-left' : 'origin-right'} group-hover:scale-150`}></div>

                  {/* Content - Slide in from correct side */}
                  <div className={`md:w-[45%] mb-8 md:mb-0 ${isEven ? 'md:text-left' : 'md:text-right'}`}>
                     <SlideInSection 
                        direction={isEven ? 'right' : 'left'} 
                        delay={index * 200}
                     >
                        {/* Mobile Line and Dot */}
                        <div className="md:hidden absolute left-0 top-2 bottom-0 w-0.5 bg-coffee-200 dark:bg-coffee-800"></div>
                        <div className="md:hidden absolute left-[-5px] top-2 w-3 h-3 bg-coffee-500 rounded-full border-2 border-white dark:border-coffee-900"></div>

                        <div className="bg-white dark:bg-coffee-800 p-6 rounded-xl shadow-sm border border-coffee-100 dark:border-coffee-700 hover:shadow-lg hover:border-coffee-300 dark:hover:border-coffee-500 transition-all duration-300 relative hover:-translate-y-1">
                            {/* Arrow for desktop */}
                            <div className={`hidden md:block absolute top-4 w-4 h-4 bg-white dark:bg-coffee-800 border-b border-r border-coffee-100 dark:border-coffee-700 transform ${isEven ? '-left-2 rotate-135' : '-right-2 -rotate-45'}`}></div>
                            
                            <h3 className="text-xl font-bold text-coffee-900 dark:text-coffee-50">{exp.role}</h3>
                            <div className={`text-coffee-600 dark:text-coffee-300 font-medium text-lg mb-2 flex flex-wrap gap-2 items-center ${isEven ? 'md:justify-start' : 'md:justify-end'}`}>
                              <Briefcase size={16} aria-hidden="true" />
                              <span>{exp.company}</span>
                            </div>
                            <span className="inline-block bg-coffee-100 dark:bg-coffee-700 text-coffee-700 dark:text-coffee-200 text-xs font-semibold px-2 py-1 rounded mb-4">
                              {exp.date}
                            </span>
                            <ul className={`list-none space-y-2 text-coffee-700 dark:text-coffee-300 text-sm leading-relaxed ${isEven ? 'md:text-left' : 'md:text-right'}`}>
                              {exp.points.map((point, i) => (
                                <li key={i} className="relative">
                                  {point}
                                </li>
                              ))}
                            </ul>
                        </div>
                     </SlideInSection>
                  </div>
                  
                  {/* Empty div for layout balance on desktop */}
                  <div className="hidden md:block md:w-[45%]"></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;