import React, { useState, useEffect } from 'react';

const Header = () => {
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
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}
    >
      <div className="container mx-auto flex items-center justify-between py-4">
        <div className="flex items-center">
          <img src="/logo.png" alt="Logo" className="h-10 w-auto" />
        </div>
        <nav className="hidden md:flex space-x-8 text-gray-600">
          <a href="#" className="hover:text-gray-900 transition duration-300">
            Home
          </a>
          <a href="#" className="hover:text-gray-900 transition duration-300">
            Listings
          </a>
          <a href="#" className="hover:text-gray-900 transition duration-300">
            About Us
          </a>
          <a href="#" className="hover:text-gray-900 transition duration-300">
            Services
          </a>
          <a href="#" className="hover:text-gray-900 transition duration-300">
            Blog
          </a>
        </nav>
        <div className="hidden md:flex items-center space-x-4">
          <a
            href="#"
            className="text-gray-600 hover:text-gray-900 transition duration-300"
          >
            Login
          </a>
          <a
            href="#"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300"
          >
            Contact Us
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
