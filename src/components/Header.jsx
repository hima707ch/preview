import React, { useState, useEffect } from 'react';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <a href="#" className="flex items-center space-x-2">
              <img className="h-10 w-auto sm:h-12" src="https://via.placeholder.com/150x50" alt="Real Estate Logo" />
              <span className="text-xl font-bold text-gray-800">RealEstate</span>
            </a>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-base font-semibold text-gray-600 hover:text-gray-900 transition-colors">Home</a>
            <a href="#" className="text-base font-semibold text-gray-600 hover:text-gray-900 transition-colors">Listings</a>
            <a href="#" className="text-base font-semibold text-gray-600 hover:text-gray-900 transition-colors">About Us</a>
            <a href="#" className="text-base font-semibold text-gray-600 hover:text-gray-900 transition-colors">Contact</a>
          </nav>
          <div className="hidden md:flex items-center space-x-6">
            <a href="#" className="text-base font-semibold text-gray-600 hover:text-gray-900 transition-colors">
              Login
            </a>
            <a
              href="#"
              className="px-6 py-3 rounded-full text-base font-semibold text-white bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 transition-all transform hover:scale-105 shadow-md"
            >
              Sign Up
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};
