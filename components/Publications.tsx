import React from 'react';
import { PUBLICATIONS } from '../constants';
import { BookOpen, ExternalLink } from 'lucide-react';
import FadeInSection from './FadeInSection';

const Publications: React.FC = () => {
  return (
    <section id="publications" className="py-20 bg-white dark:bg-coffee-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <FadeInSection>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-coffee-900 dark:text-coffee-50 relative inline-block">
              Publications
              <span className="absolute bottom-1 left-0 w-full h-2 bg-coffee-200/60 dark:bg-coffee-700/60 -z-10"></span>
            </h2>
            <p className="mt-4 text-coffee-600 dark:text-coffee-300 max-w-2xl mx-auto">
              Peer-reviewed research and contributions to the field of Artificial Intelligence.
            </p>
          </FadeInSection>
        </div>

        <div className="grid gap-6 md:grid-cols-2 max-w-5xl mx-auto">
          {PUBLICATIONS.map((pub, index) => (
            <FadeInSection key={index} delay={index * 150} className="h-full">
              <div className="bg-coffee-50 dark:bg-coffee-800 p-8 rounded-xl border border-coffee-100 dark:border-coffee-700 hover:shadow-lg hover:border-coffee-300 dark:hover:border-coffee-500 transition-all duration-300 h-full flex flex-col group">
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 bg-white dark:bg-coffee-700 rounded-lg text-coffee-600 dark:text-coffee-300 shadow-sm group-hover:bg-coffee-600 group-hover:text-white transition-colors">
                    <BookOpen size={24} aria-hidden="true" />
                  </div>
                  <span className="text-xs font-bold text-coffee-500 dark:text-coffee-400 bg-white dark:bg-coffee-900 px-3 py-1 rounded-full border border-coffee-100 dark:border-coffee-600">
                    {pub.date}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-coffee-900 dark:text-coffee-50 mb-3 group-hover:text-coffee-600 dark:group-hover:text-coffee-300 transition-colors">
                  {pub.title}
                </h3>
                
                <div className="mt-auto pt-4 border-t border-coffee-200 dark:border-coffee-700 flex items-center justify-between">
                  <span className="text-sm font-medium text-coffee-700 dark:text-coffee-300 italic">
                    {pub.journal}
                  </span>
                  <a 
                    href={pub.link || "#"} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className={`text-coffee-400 dark:text-coffee-500 hover:text-coffee-700 dark:hover:text-coffee-200 transition-colors ${!pub.link ? 'opacity-50 cursor-default pointer-events-none' : ''}`} 
                    title="Read Publication"
                    aria-label={`Read publication: ${pub.title}`}
                  >
                    <ExternalLink size={18} aria-hidden="true" />
                  </a>
                </div>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Publications;