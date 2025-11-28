import React, { useState } from 'react';
import { PROFILE } from '../constants';
import { Mail, Linkedin, Github, Send, User, MessageSquare, ArrowRight } from 'lucide-react';
import FadeInSection from './FadeInSection';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Construct mailto link
    const subject = formData.subject || `Inquiry from Portfolio`;
    const body = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0A%0D%0A${formData.message}`;
    window.location.href = `mailto:${PROFILE.email}?subject=${encodeURIComponent(subject)}&body=${body}`;
  };

  return (
    <section id="contact" className="py-24 bg-white dark:bg-coffee-900 border-t border-coffee-100 dark:border-coffee-800 transition-colors duration-300 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-40 dark:opacity-20">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-coffee-100 dark:bg-coffee-800 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-coffee-50 dark:bg-coffee-800 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <FadeInSection>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-coffee-900 dark:text-coffee-50 relative inline-block">
              Get In Touch
              <span className="absolute bottom-1 left-0 w-full h-2 bg-coffee-200/60 dark:bg-coffee-700/60 -z-10"></span>
            </h2>
            <p className="mt-4 text-coffee-600 dark:text-coffee-300 max-w-2xl mx-auto text-lg">
              I am currently looking for full-time opportunities as an AI Engineer or Data Scientist. 
              Let's discuss how I can contribute to your team.
            </p>
          </FadeInSection>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column: Contact Info */}
          <FadeInSection delay={100} className="h-full">
            <div className="bg-coffee-50 dark:bg-coffee-800/50 p-8 md:p-10 rounded-3xl border border-coffee-100 dark:border-coffee-700 h-full flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-coffee-900 dark:text-coffee-50 mb-6">
                Let's start a conversation
              </h3>
              <p className="text-coffee-600 dark:text-coffee-300 mb-10 leading-relaxed text-lg">
                Whether you have a question about my research, want to discuss a potential project, or just want to say hi, my inbox is always open.
              </p>

              {/* Icon Buttons Row */}
              <div className="flex gap-6 flex-wrap">
                {/* Email Button */}
                <a 
                  href={`mailto:${PROFILE.email}`}
                  className="w-16 h-16 flex items-center justify-center bg-white dark:bg-coffee-700 rounded-2xl border border-coffee-200 dark:border-coffee-600 shadow-sm text-coffee-600 dark:text-coffee-300 hover:bg-coffee-600 hover:text-white dark:hover:bg-coffee-500 dark:hover:text-white hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
                  aria-label="Send an email"
                >
                  <Mail size={32} aria-hidden="true" />
                </a>

                {/* LinkedIn Button */}
                <a 
                  href={`https://${PROFILE.linkedin}`}
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-16 h-16 flex items-center justify-center bg-white dark:bg-coffee-700 rounded-2xl border border-coffee-200 dark:border-coffee-600 shadow-sm text-coffee-600 dark:text-coffee-300 hover:bg-coffee-600 hover:text-white dark:hover:bg-coffee-500 dark:hover:text-white hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
                  aria-label="Visit LinkedIn Profile"
                >
                  <Linkedin size={32} aria-hidden="true" />
                </a>

                {/* GitHub Button */}
                <a 
                  href={`https://${PROFILE.github}`}
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-16 h-16 flex items-center justify-center bg-white dark:bg-coffee-700 rounded-2xl border border-coffee-200 dark:border-coffee-600 shadow-sm text-coffee-600 dark:text-coffee-300 hover:bg-coffee-600 hover:text-white dark:hover:bg-coffee-500 dark:hover:text-white hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
                  aria-label="Visit GitHub Profile"
                >
                  <Github size={32} aria-hidden="true" />
                </a>
              </div>
            </div>
          </FadeInSection>

          {/* Right Column: Interactive Form */}
          <FadeInSection delay={300}>
            <div className="bg-white dark:bg-coffee-800 p-8 md:p-10 rounded-3xl shadow-xl border border-coffee-100 dark:border-coffee-700 relative overflow-hidden">
               {/* Decorative corner */}
               <div className="absolute top-0 right-0 w-20 h-20 bg-coffee-100 dark:bg-coffee-700 rounded-bl-[4rem] -mr-10 -mt-10 transition-transform hover:scale-110"></div>

              <h3 className="text-2xl font-bold text-coffee-900 dark:text-coffee-50 mb-8 flex items-center gap-2">
                Send a Message
                <ArrowRight size={20} className="text-coffee-500" aria-hidden="true" />
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2 group">
                    <label htmlFor="name" className="text-sm font-semibold text-coffee-700 dark:text-coffee-300 ml-1 transition-all duration-300 group-focus-within:-translate-y-1 group-focus-within:text-coffee-600 dark:group-focus-within:text-coffee-400 inline-block">Your Name</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-coffee-400 group-focus-within:text-coffee-600 dark:group-focus-within:text-coffee-400 transition-colors duration-300">
                        <User size={18} aria-hidden="true" />
                      </div>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full pl-10 pr-4 py-3 bg-coffee-50 dark:bg-coffee-900 border border-coffee-200 dark:border-coffee-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-coffee-500 focus:border-transparent transition-all duration-300 focus:shadow-[0_0_15px_rgba(166,124,94,0.3)] transform focus:-translate-y-0.5 text-coffee-900 dark:text-coffee-100"
                        placeholder="John Doe"
                      />
                    </div>
                  </div>
                  <div className="space-y-2 group">
                    <label htmlFor="email" className="text-sm font-semibold text-coffee-700 dark:text-coffee-300 ml-1 transition-all duration-300 group-focus-within:-translate-y-1 group-focus-within:text-coffee-600 dark:group-focus-within:text-coffee-400 inline-block">Your Email</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-coffee-400 group-focus-within:text-coffee-600 dark:group-focus-within:text-coffee-400 transition-colors duration-300">
                        <Mail size={18} aria-hidden="true" />
                      </div>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full pl-10 pr-4 py-3 bg-coffee-50 dark:bg-coffee-900 border border-coffee-200 dark:border-coffee-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-coffee-500 focus:border-transparent transition-all duration-300 focus:shadow-[0_0_15px_rgba(166,124,94,0.3)] transform focus:-translate-y-0.5 text-coffee-900 dark:text-coffee-100"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-2 group">
                  <label htmlFor="subject" className="text-sm font-semibold text-coffee-700 dark:text-coffee-300 ml-1 transition-all duration-300 group-focus-within:-translate-y-1 group-focus-within:text-coffee-600 dark:group-focus-within:text-coffee-400 inline-block">Subject</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-coffee-400 group-focus-within:text-coffee-600 dark:group-focus-within:text-coffee-400 transition-colors duration-300">
                      <MessageSquare size={18} aria-hidden="true" />
                    </div>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 bg-coffee-50 dark:bg-coffee-900 border border-coffee-200 dark:border-coffee-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-coffee-500 focus:border-transparent transition-all duration-300 focus:shadow-[0_0_15px_rgba(166,124,94,0.3)] transform focus:-translate-y-0.5 text-coffee-900 dark:text-coffee-100"
                      placeholder="Project Inquiry..."
                    />
                  </div>
                </div>

                <div className="space-y-2 group">
                  <label htmlFor="message" className="text-sm font-semibold text-coffee-700 dark:text-coffee-300 ml-1 transition-all duration-300 group-focus-within:-translate-y-1 group-focus-within:text-coffee-600 dark:group-focus-within:text-coffee-400 inline-block">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full p-4 bg-coffee-50 dark:bg-coffee-900 border border-coffee-200 dark:border-coffee-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-coffee-500 focus:border-transparent transition-all duration-300 focus:shadow-[0_0_15px_rgba(166,124,94,0.3)] transform focus:-translate-y-0.5 text-coffee-900 dark:text-coffee-100 resize-none"
                    placeholder="Hello, I'd like to talk about..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-coffee-600 hover:bg-coffee-700 dark:bg-coffee-500 dark:hover:bg-coffee-600 text-white font-bold py-3.5 rounded-xl transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg flex items-center justify-center gap-2"
                >
                  <Send size={20} aria-hidden="true" />
                  Send Message
                </button>
              </form>
            </div>
          </FadeInSection>
        </div>
      </div>
    </section>
  );
};

export default Contact;