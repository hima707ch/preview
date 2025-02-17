import React, { useState } from 'react';
import images from '../assets/images.js';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

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
    <header id="Header_1" className={`fixed w-full transition-colors duration-500 z-50 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <div id="Header_2" className="flex items-center">
          <img src={images[0]} alt="Logo" className="h-12 w-auto mr-4" />
          <span className="text-xl font-bold text-gray-800">Real Estate Co.</span>
        </div>
        <nav id="Header_3" className="hidden md:flex space-x-6">
          <a href="#" className="text-gray-600 hover:text-gray-800 transition-colors duration-300">Home</a>
          <a href="#" className="text-gray-600 hover:text-gray-800 transition-colors duration-300">Properties</a>
          <a href="#" className="text-gray-600 hover:text-gray-800 transition-colors duration-300">About Us</a>
          <a href="#" className="text-gray-600 hover:text-gray-800 transition-colors duration-300">Contact</a>
        </nav>
        <div id="Header_4" className="flex items-center space-x-4">
          <button className="px-4 py-2 text-indigo-600 border border-indigo-600 rounded-md hover:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-300">
            Login
          </button>
          <button className="px-4 py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-300">
            Schedule a Viewing
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;