import React, { useState, useEffect } from 'react';
import images from '../assets/images';

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      id="Header_1"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${isSticky ? 'bg-white/80 shadow-md py-2' : 'bg-transparent py-4'}`}
    >
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <a href="#" id="Header_2">
            <img src={images[0]} alt="Logo" className="h-10" />
          </a>
          <div className="hidden md:flex items-center space-x-4" id="Header_3">
            <a href="#" className="text-gray-600 hover:text-gray-800">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-800">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-800">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
          <div className="hidden md:block" id="Header_4">
            <input
              type="text"
              placeholder="Search..."
              className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
        <nav className="hidden md:flex space-x-8 text-gray-600" id="Header_5">
          <a href="#" className="hover:text-gray-800">
            Home
          </a>
          <a href="#" className="hover:text-gray-800">
            Articles
          </a>
          <a href="#" className="hover:text-gray-800">
            About
          </a>
          <a href="#" className="hover:text-gray-800">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
