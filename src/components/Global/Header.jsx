import React, { useState, useEffect } from 'react';
import images from '../assets/images';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header id="Header_1" className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <div id="Header_2" className="flex items-center space-x-2">
            <img src={images[0]} alt="Logo" className="h-10 w-10 rounded-full" />
            <span className={`text-2xl font-bold ${isScrolled ? 'text-gray-800' : 'text-white'}`}>Brand</span>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a id="Header_3" href="#" className={`${isScrolled ? 'text-gray-800' : 'text-white'} hover:text-blue-500 transition-colors duration-300`}>Home</a>
            <a id="Header_4" href="#" className={`${isScrolled ? 'text-gray-800' : 'text-white'} hover:text-blue-500 transition-colors duration-300`}>About</a>
            <a id="Header_5" href="#" className={`${isScrolled ? 'text-gray-800' : 'text-white'} hover:text-blue-500 transition-colors duration-300`}>Services</a>
            <a id="Header_6" href="#" className={`${isScrolled ? 'text-gray-800' : 'text-white'} hover:text-blue-500 transition-colors duration-300`}>Contact</a>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <button id="Header_7" className="px-6 py-2 rounded-full bg-blue-500 text-white hover:bg-blue-600 transition-colors duration-300">Sign In</button>
            <button id="Header_8" className="px-6 py-2 rounded-full border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white transition-colors duration-300">Sign Up</button>
          </div>

          <button id="Header_9" onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-gray-600 hover:text-gray-900">
            <svg className="h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {isMenuOpen && (
          <div id="Header_10" className="md:hidden py-4">
            <nav className="flex flex-col space-y-4">
              <a href="#" className="text-gray-800 hover:text-blue-500 transition-colors duration-300">Home</a>
              <a href="#" className="text-gray-800 hover:text-blue-500 transition-colors duration-300">About</a>
              <a href="#" className="text-gray-800 hover:text-blue-500 transition-colors duration-300">Services</a>
              <a href="#" className="text-gray-800 hover:text-blue-500 transition-colors duration-300">Contact</a>
              <button className="px-6 py-2 rounded-full bg-blue-500 text-white hover:bg-blue-600 transition-colors duration-300">Sign In</button>
              <button className="px-6 py-2 rounded-full border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white transition-colors duration-300">Sign Up</button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;