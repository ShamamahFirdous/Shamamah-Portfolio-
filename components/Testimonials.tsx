import React from 'react';
import { Quote, User } from 'lucide-react';
import FadeInSection from './FadeInSection';

const TESTIMONIALS = [
  {
    id: 1,
    name: "Dr. Sarah Mitchell",
    role: "Professor, Northeastern University",
    text: "Shamamah consistently demonstrates a deep understanding of complex ML algorithms. Her project on Cab Fare Prediction showed remarkable attention to feature engineering and data validation."
  },
  {
    id: 2,
    name: "James Carter",
    role: "Senior Engineer, Acmegrade",
    text: "During her internship, Shamamah owned the recommendation engine project end-to-end. Her ability to translate theoretical concepts into production-ready Python code is impressive."
  },
  {
    id: 3,
    name: "Emily Chen",
    role: "Project Lead, Kitscart",
    text: "A natural problem solver. Shamamah improved our NLP model accuracy by 15% in just a few weeks. She asks the right questions and delivers high-quality, scalable solutions."
  }
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 bg-coffee-50 dark:bg-coffee-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <FadeInSection>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-coffee-900 dark:text-coffee-50 relative inline-block">
              Testimonials
              <span className="absolute bottom-1 left-0 w-full h-2 bg-coffee-200/60 dark:bg-coffee-700/60 -z-10"></span>
            </h2>
            <p className="mt-4 text-coffee-600 dark:text-coffee-300 max-w-2xl mx-auto">
              Feedback from professors and supervisors I've worked with.
            </p>
          </FadeInSection>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((item, index) => (
            <FadeInSection key={item.id} delay={index * 150} className="h-full">
              <div className="bg-white dark:bg-coffee-800 p-8 rounded-2xl shadow-sm border border-coffee-100 dark:border-coffee-700 h-full flex flex-col relative group hover:-translate-y-2 hover:shadow-lg transition-all duration-300">
                {/* Decorative Quote Icon */}
                <div className="absolute top-6 right-6 text-coffee-100 dark:text-coffee-700 group-hover:text-coffee-200 dark:group-hover:text-coffee-600 transition-colors">
                  <Quote size={48} fill="currentColor" aria-hidden="true" />
                </div>

                <p className="text-coffee-700 dark:text-coffee-200 italic mb-6 relative z-10 leading-relaxed">
                  "{item.text}"
                </p>

                <div className="mt-auto flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-coffee-200 dark:bg-coffee-600 flex items-center justify-center text-coffee-600 dark:text-coffee-100">
                    <User size={20} aria-hidden="true" />
                  </div>
                  <div>
                    <h4 className="font-bold text-coffee-900 dark:text-coffee-50 text-sm">
                      {item.name}
                    </h4>
                    <p className="text-xs text-coffee-500 dark:text-coffee-400 uppercase tracking-wide">
                      {item.role}
                    </p>
                  </div>
                </div>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;