import React, { useState } from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';
import images from '../assets/images.js';

const Header = () => {
  const [theme, setTheme] = useState('light');
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 100) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  }, []);

  return (
    <header id="Header_1" className={`fixed w-full transition-all duration-500 z-50 ${isScrolled ? 'bg-teal-50/95 backdrop-blur-md' : 'bg-teal-50'} ${theme === 'dark' ? 'dark bg-slate-900/95' : ''} ${isScrolled ? 'shadow-lg' : ''}`}>
      <div className="container mx-auto flex justify-between items-center py-5 px-8">
        <div id="Header_2" className="flex items-center space-x-3 hover:opacity-80 transition-opacity cursor-pointer">
          <img src={images[0]} alt="Logo" className="h-14 w-auto rounded-lg" />
          <span className="text-2xl font-extrabold text-teal-800 dark:text-teal-200 tracking-tight">Real Estate Co.</span>
        </div>
        <nav id="Header_3" className="hidden md:flex space-x-8">
          <a href="#" className="text-teal-700 hover:text-teal-500 dark:text-teal-300 dark:hover:text-teal-400 transition-colors duration-300 font-medium">Home</a>
          <a href="#" className="text-teal-700 hover:text-teal-500 dark:text-teal-300 dark:hover:text-teal-400 transition-colors duration-300 font-medium">Properties</a>
          <a href="#" className="text-teal-700 hover:text-teal-500 dark:text-teal-300 dark:hover:text-teal-400 transition-colors duration-300 font-medium">About Us</a>
          <a href="#" className="text-teal-700 hover:text-teal-500 dark:text-teal-300 dark:hover:text-teal-400 transition-colors duration-300 font-medium">Contact</a>
        </nav>
        <div id="Header_4" className="flex items-center space-x-6">
          <button
            onClick={toggleTheme}
            className="p-2.5 rounded-full bg-teal-100 hover:bg-teal-200 dark:bg-slate-800 dark:hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all duration-300"
            aria-label="Toggle theme"
          >
            {theme === 'light' ? <FiMoon size={22} className="text-teal-700 dark:text-teal-300" /> : <FiSun size={22} className="text-teal-700 dark:text-teal-300" />}
          </button>
          <button className="px-6 py-2.5 text-white bg-teal-600 rounded-lg hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 transition-all duration-300 font-semibold shadow-md hover:shadow-lg">
            Schedule a Viewing
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;