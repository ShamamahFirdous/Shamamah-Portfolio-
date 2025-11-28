import React, { useState } from 'react';
import { SKILLS, CERTIFICATIONS } from '../constants';
import { Award, Code2, Brain, Wrench, Database, Briefcase, BadgeCheck, Calendar } from 'lucide-react';
import FadeInSection from './FadeInSection';

const Skills: React.FC = () => {
  const [activeTab, setActiveTab] = useState(SKILLS[0].category);

  // Helper to render icons dynamically with flexible props
  const renderIcon = (category: string, size: number = 18, className: string = "") => {
    const props = { size, className, 'aria-hidden': true };
    switch (category) {
      case "Technical Skills": return <Code2 {...props} />;
      case "Machine Learning & AI": return <Brain {...props} />;
      case "Tools & Frameworks": return <Wrench {...props} />;
      case "Data Science": return <Database {...props} />;
      case "Professional Skills": return <Briefcase {...props} />;
      default: return <Award {...props} />;
    }
  };

  return (
    <section id="skills" className="py-20 bg-coffee-50 dark:bg-coffee-950 transition-colors duration-300">
      <style>{`
        @keyframes popIn {
          0% { opacity: 0; transform: scale(0.9) translateY(15px); }
          100% { opacity: 1; transform: scale(1) translateY(0); }
        }
        .animate-pop-in {
          animation: popIn 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
          will-change: transform, opacity;
        }
      `}</style>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <FadeInSection>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-coffee-900 dark:text-coffee-50 relative inline-block">
              Skills & Certifications
              <span className="absolute bottom-1 left-0 w-full h-2 bg-coffee-200/60 dark:bg-coffee-700/60 -z-10"></span>
            </h2>
            <p className="mt-4 text-coffee-600 dark:text-coffee-300 max-w-2xl mx-auto">
              A detailed overview of my technical stack and professional qualifications.
            </p>
          </FadeInSection>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {/* Interactive Skills Tabs (2 cols) */}
          <div className="lg:col-span-2">
            <FadeInSection delay={100}>
              {/* Category Navigation */}
              <div className="flex flex-wrap gap-2 mb-6">
                 {SKILLS.map((item) => (
                    <button
                      key={item.category}
                      onClick={() => setActiveTab(item.category)}
                      className={`group px-4 py-2.5 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 border ${
                        activeTab === item.category
                          ? 'bg-coffee-600 text-white border-coffee-600 shadow-md transform scale-105'
                          : 'bg-white dark:bg-coffee-900 text-coffee-600 dark:text-coffee-300 border-coffee-200 dark:border-coffee-700 hover:bg-coffee-50 dark:hover:bg-coffee-800 hover:border-coffee-300'
                      }`}
                    >
                      {/* Icon with group hover animation */}
                      {renderIcon(
                        item.category, 
                        18, 
                        `transition-transform duration-300 ${activeTab === item.category ? 'scale-110' : 'group-hover:scale-125 group-hover:rotate-6'}`
                      )}
                      <span>{item.category}</span>
                    </button>
                 ))}
              </div>
              
              {/* Skills Display Area */}
              <div className="bg-white dark:bg-coffee-800 p-8 rounded-2xl shadow-sm border border-coffee-100 dark:border-coffee-700 min-h-[300px] transition-all relative overflow-hidden">
                {SKILLS.map((item) => {
                  if (item.category !== activeTab) return null;
                  return (
                    <div key={item.category} className="w-full">
                      {/* Header (Icon + Title) - Animates as a block */}
                      <div className="flex items-center gap-4 mb-8">
                        <div className="p-4 bg-coffee-100 dark:bg-coffee-700 text-coffee-600 dark:text-coffee-200 rounded-2xl transform transition-all duration-500 hover:scale-110 hover:rotate-6 shadow-sm animate-pop-in">
                          {renderIcon(item.category, 32)}
                        </div>
                        <div className="animate-pop-in opacity-0" style={{ animationDelay: '100ms' }}>
                          <h3 className="text-2xl font-bold text-coffee-900 dark:text-coffee-50">
                            {item.category}
                          </h3>
                          <p className="text-sm text-coffee-500 dark:text-coffee-400 mt-1">
                            {item.skills.length} skills listed
                          </p>
                        </div>
                      </div>
                      
                      {/* Skills Grid - Individual items stagger in */}
                      <div className="flex flex-wrap gap-3">
                        {item.skills.map((skill, idx) => (
                          <div
                            key={skill}
                            className="group relative px-5 py-3 bg-coffee-50 dark:bg-coffee-900/50 rounded-lg border border-coffee-200 dark:border-coffee-700 hover:border-coffee-400 dark:hover:border-coffee-500 hover:bg-white dark:hover:bg-coffee-800 hover:shadow-md transition-all duration-200 cursor-default hover:scale-105 active:scale-95 animate-pop-in opacity-0"
                            style={{ animationDelay: `${150 + idx * 30}ms` }}
                          >
                             <span className="text-coffee-700 dark:text-coffee-200 font-medium group-hover:text-coffee-900 dark:group-hover:text-coffee-100 transition-colors select-none">
                               {skill}
                             </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </FadeInSection>
          </div>

          {/* Certifications Card (1 col) */}
          <div className="lg:col-span-1 h-full">
             <FadeInSection delay={300} className="h-full">
              <div className="bg-gradient-to-br from-coffee-600 to-coffee-800 text-white p-8 rounded-2xl shadow-xl h-full relative overflow-hidden flex flex-col justify-center group">
                 {/* Decorative background effects */}
                 <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-white opacity-10 rounded-full blur-3xl transition-transform duration-700 group-hover:scale-110"></div>
                 <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-40 h-40 bg-black opacity-10 rounded-full blur-3xl transition-transform duration-700 group-hover:scale-110"></div>
                 
                 <div className="flex items-center gap-3 mb-8 relative z-10">
                   <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110">
                     <Award size={24} className="text-white" aria-hidden="true" />
                   </div>
                   <h3 className="text-2xl font-bold">Certifications</h3>
                 </div>

                 <div className="space-y-4 relative z-10">
                  {CERTIFICATIONS.map((cert, index) => (
                    <div key={index} className="group/card bg-black/20 backdrop-blur-sm p-5 rounded-xl border border-white/10 hover:border-white/30 hover:bg-black/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-white/10 rounded-full text-yellow-300 group-hover/card:bg-yellow-400/20 group-hover/card:text-yellow-200 transition-colors shrink-0">
                          <BadgeCheck size={24} aria-hidden="true" />
                        </div>
                        <div className="min-w-0">
                          <h4 className="font-bold text-white text-lg leading-tight group-hover/card:text-yellow-100 transition-colors">{cert.name}</h4>
                          <div className="flex flex-col mt-2 gap-1">
                            <span className="text-coffee-100 text-sm font-medium">{cert.issuer}</span>
                            <span className="text-coffee-300 text-xs flex items-center gap-1.5 opacity-80">
                              <Calendar size={12} aria-hidden="true" />
                              {cert.date}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                 </div>
                 
                 <div className="mt-8 pt-6 border-t border-white/10 text-center relative z-10">
                   <p className="text-coffee-200 text-sm italic">
                     Continuous learning is key to innovation.
                   </p>
                 </div>
              </div>
            </FadeInSection>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;