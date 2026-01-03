import React from 'react';
import { PROFILE, EDUCATION } from '../constants';
import { GraduationCap } from 'lucide-react';
import FadeInSection from './FadeInSection';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-coffee-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-start">
          <div className="mb-12 lg:mb-0">
            <FadeInSection>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-coffee-900 dark:text-coffee-50 mb-6 relative inline-block">
                About Me
                <span className="absolute bottom-1 left-0 w-full h-2 bg-coffee-200/60 dark:bg-coffee-700/60 -z-10"></span>
              </h2>
              <p className="text-lg text-coffee-700 dark:text-coffee-200 leading-relaxed mb-6">
                {PROFILE.summary}
              </p>
              <div className="bg-coffee-50 dark:bg-coffee-800 p-6 rounded-lg border border-coffee-100 dark:border-coffee-700 transition-colors">
                <h4 className="font-bold text-coffee-900 dark:text-coffee-50 mb-2">Current Focus</h4>
                <p className="text-coffee-700 dark:text-coffee-300">
                  Specializing in machine learning, data science, statistical analysis, and full-stack development to transform data into actionable insights and scalable applications. Proficient in Python, R, SQL, and the MERN stack.
                </p>
              </div>
            </FadeInSection>
          </div>
          
          <div>
            <FadeInSection delay={200}>
              <h3 className="text-2xl font-serif font-bold text-coffee-800 dark:text-coffee-100 mb-8 flex items-center gap-3">
                <div className="p-2 bg-coffee-100 dark:bg-coffee-800 rounded-lg text-coffee-600 dark:text-coffee-400">
                  <GraduationCap size={24} aria-hidden="true" /> 
                </div>
                Education
              </h3>
              <div className="space-y-10">
                {EDUCATION.map((edu) => (
                  <div key={edu.id} className="relative pl-8 border-l-2 border-coffee-200 dark:border-coffee-700 group">
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-coffee-300 dark:bg-coffee-600 border-4 border-white dark:border-coffee-900 group-hover:bg-coffee-500 transition-colors"></div>
                    <h4 className="text-xl font-bold text-coffee-900 dark:text-coffee-50">{edu.institution}</h4>
                    <p className="text-coffee-600 dark:text-coffee-300 font-medium text-lg">{edu.degree}</p>
                    <div className="flex flex-wrap justify-between text-sm text-coffee-500 dark:text-coffee-400 mt-2 mb-3">
                      <span className="bg-coffee-100 dark:bg-coffee-800 px-2 py-0.5 rounded text-coffee-700 dark:text-coffee-300 font-medium">{edu.date}</span>
                      <span>{edu.location}</span>
                    </div>
                    {edu.gpa && <p className="text-sm font-semibold text-coffee-600 dark:text-coffee-400 mb-1">GPA: {edu.gpa}</p>}
                    <p className="text-coffee-700 dark:text-coffee-300 text-sm leading-relaxed">
                      <span className="font-medium">Relevant Coursework:</span> {edu.coursework}
                    </p>
                  </div>
                ))}
              </div>
            </FadeInSection>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;