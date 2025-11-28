import React from 'react';
import { PROFILE } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-coffee-800 dark:bg-coffee-600 text-coffee-200 py-8 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <p className="font-serif text-lg font-bold tracking-wide text-coffee-50">
            {PROFILE.name}
          </p>
          <p className="text-sm opacity-75">{PROFILE.role}</p>
        </div>
        <div className="text-sm opacity-60">
          &copy; {new Date().getFullYear()} All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;