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
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div id="Header_2" className="flex items-center">
            <img src={images[0]} alt="Logo" className="h-10 w-auto mr-4" />
            <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">Brand</h1>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <nav id="Header_3" className="flex space-x-8">
              <a href="/home" className="text-gray-700 hover:text-purple-600 transition-colors duration-300">Home</a>
              <a href="/login" className="text-gray-700 hover:text-purple-600 transition-colors duration-300">Login</a>
              <a href="/dashboard" className="text-gray-700 hover:text-purple-600 transition-colors duration-300">Dashboard</a>
              <a href="/property listings" className="text-gray-700 hover:text-purple-600 transition-colors duration-300">Property</a>
              <a href="/property detail" className="text-gray-700 hover:text-purple-600 transition-colors duration-300">Details</a>
              <a href="/contact" className="text-gray-700 hover:text-purple-600 transition-colors duration-300">Contact</a>

            </nav>
            
            <div id="Header_4" className="flex items-center space-x-4">
              <button className="px-6 py-2 rounded-full bg-gradient-to-r from-purple-600 to-blue-500 text-white hover:opacity-90 transition-opacity duration-300">Sign In</button>
              <button className="px-6 py-2 rounded-full border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white transition-all duration-300">Sign Up</button>
            </div>
          </div>

          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-gray-700 hover:text-purple-600 transition-colors duration-300">
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
          <div id="Header_5" className="md:hidden mt-4 pb-4">
            <nav className="flex flex-col space-y-4">
              <a href="#" className="text-gray-700 hover:text-purple-600 transition-colors duration-300">Home</a>
              <a href="#" className="text-gray-700 hover:text-purple-600 transition-colors duration-300">About</a>
              <a href="#" className="text-gray-700 hover:text-purple-600 transition-colors duration-300">Services</a>
              <a href="#" className="text-gray-700 hover:text-purple-600 transition-colors duration-300">Contact</a>
              <button className="px-6 py-2 rounded-full bg-gradient-to-r from-purple-600 to-blue-500 text-white hover:opacity-90 transition-opacity duration-300">Sign In</button>
              <button className="px-6 py-2 rounded-full border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white transition-all duration-300">Sign Up</button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;