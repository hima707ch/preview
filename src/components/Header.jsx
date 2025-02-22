import React, { useState, useEffect } from 'react';

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isSticky ? 'bg-white/90 shadow-md py-2' : 'bg-transparent py-4'}`}
    >
      <div className="container mx-auto flex items-center justify-between">
        <div id="Header_2" className="flex items-center">
          <img src="/path/to/logo.png" alt="Company Logo" className="h-10 mr-4" />
          <span className="text-xl font-semibold text-gray-800">Real Estate Co.</span>
        </div>
        <nav id="Header_3" className="hidden md:flex space-x-8 text-gray-600">
          <a href="/" className="hover:text-blue-500 transition duration-200">
            Home
          </a>
          <a href="/about" className="hover:text-blue-500 transition duration-200">
            About
          </a>
          <div className="relative group">
            <button className="hover:text-blue-500 transition duration-200 flex items-center">
              Projects
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 ml-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className="absolute top-full left-0 pt-2 w-40 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-200">
              <a href="/projects/sale" className="block px-4 py-2 hover:bg-gray-100">
                For Sale
              </a>
              <a href="/projects/rent" className="block px-4 py-2 hover:bg-gray-100">
                For Rent
              </a>
            </div>
          </div>
          <a href="/contact" className="hover:text-blue-500 transition duration-200">
            Contact
          </a>
        </nav>
        <div id="Header_4" className="hidden md:flex items-center space-x-4">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-600 hover:text-blue-500 focus:outline-none transition duration-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
              />
            </svg>
          </button>
          <a
            href="/login"
            className="px-4 py-2 text-blue-600 border border-blue-600 rounded-md hover:bg-blue-600 hover:text-white transition duration-200"
          >
            Login
          </a>
          <a
            href="/signup"
            className="px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 transition duration-200"
          >
            Sign Up
          </a>
        </div>
        <button
          id="Header_5"
          className="md:hidden text-gray-600 hover:text-blue-500 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div
          id="Header_6"
          className="md:hidden fixed top-0 left-0 w-full h-screen bg-white z-50 flex flex-col items-center justify-center space-y-8 text-center"
        >
          <button
            className="absolute top-4 right-4 text-gray-600 hover:text-blue-500"
            onClick={() => setIsOpen(false)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <a href="/" className="text-xl hover:text-blue-500">
            Home
          </a>
          <a href="/about" className="text-xl hover:text-blue-500">
            About
          </a>
          <a href="/projects/sale" className="text-xl hover:text-blue-500">
            For Sale
          </a>
          <a href="/projects/rent" className="text-xl hover:text-blue-500">
            For Rent
          </a>
          <a href="/contact" className="text-xl hover:text-blue-500">
            Contact
          </a>
          <a href="/login" className="px-6 py-3 text-blue-600 border border-blue-600 rounded-md">
            Login
          </a>
          <a href="/signup" className="px-6 py-3 text-white bg-blue-600 rounded-md">
            Sign Up
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
