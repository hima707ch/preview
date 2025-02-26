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
          <div id="Header_2" className="flex items-center">
            <img src={images[0]} alt="Logo" className="h-10 w-auto" />
            <h1 className="ml-3 text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Brand</h1>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <nav id="Header_3" className="flex space-x-6">
              <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium">Home</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium">About</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium">Services</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium">Contact</a>
            </nav>
            <button id="Header_4" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5">
              Get Started
            </button>
          </div>

          <button id="Header_5" onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-gray-700">
            <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {isMenuOpen && (
          <div id="Header_6" className="md:hidden py-4">
            <nav className="flex flex-col space-y-4">
              <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium">Home</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium">About</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium">Services</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium">Contact</a>
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full hover:shadow-lg transition-all duration-200 w-full">
                Get Started
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;