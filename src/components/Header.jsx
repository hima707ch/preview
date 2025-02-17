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
    <header id="Header_1" className={`fixed w-full transition-colors duration-500 z-50 ${isScrolled ? 'bg-white dark:bg-gray-900 shadow-md' : 'bg-transparent'} ${theme === 'dark' ? 'dark' : ''}`}>
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <div id="Header_2" className="flex items-center">
          <img src={images[0]} alt="Logo" className="h-12 w-auto mr-4" />
          <span className="text-xl font-bold text-gray-800 dark:text-white">Real Estate Co.</span>
        </div>
        <nav id="Header_3" className="hidden md:flex space-x-6">
          <a href="#" className="text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-white transition-colors duration-300">Home</a>
          <a href="#" className="text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-white transition-colors duration-300">Properties</a>
          <a href="#" className="text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-white transition-colors duration-300">About Us</a>
          <a href="#" className="text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-white transition-colors duration-300">Contact</a>
        </nav>
        <div id="Header_4" className="flex items-center">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500 transition-all duration-300"
          >
            {theme === 'light' ? <FiMoon size={20} /> : <FiSun size={20} />}
          </button>
          <button className="ml-6 px-4 py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-300">
            Schedule a Viewing
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
