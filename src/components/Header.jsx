import React, { useState, useEffect } from 'react';
import images from '../assets/images';

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState('');

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

  const handleLogin = async (email, password) => {
    try {
      const response = await fetch('/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        setToken(data.token);
        setIsLoggedIn(true);
      } else {
        console.error('Login failed');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleLogout = () => {
    setToken('');
    setIsLoggedIn(false);
  };

  const handleRegister = async (name, email, password) => {
    try {
      const response = await fetch('/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password }),
      });

      if (response.ok) {
        console.log('Registration successful');
      } else {
        console.error('Registration failed');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <header
      id="Header_1"
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-4 transition-colors duration-300 ${isScrolled ? 'bg-white dark:bg-gray-800 shadow-md' : 'bg-transparent'} ${isDarkMode ? 'dark' : ''}`}
    >
      <div id="Header_2" className="flex items-center">
        <img id="Header_3" src={images[0]} alt="Logo" className="h-10 mr-4" />
        <nav id="Header_4" className="hidden md:flex space-x-8 text-gray-600 dark:text-gray-300">
          <a href="#" className="hover:text-blue-500 transition duration-300">
            Home
          </a>
          <a href="#" className="hover:text-blue-500 transition duration-300">
            About Us
          </a>
          <a href="#" className="hover:text-blue-500 transition duration-300">
            Properties
          </a>
          <a href="#" className="hover:text-blue-500 transition duration-300">
            Services
          </a>
          <a href="#" className="hover:text-blue-500 transition duration-300">
            Contact
          </a>
        </nav>
      </div>
      <div id="Header_5" className="flex items-center">
        <button
          id="Header_6"
          className="mr-4 focus:outline-none"
          onClick={() => setIsDarkMode(!isDarkMode)}
        >
          {isDarkMode ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 text-yellow-400"
            >
              <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 text-gray-700"
            >
              <path
                fillRule="evenodd"
                d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z"
                clipRule="evenodd"
              />
            </svg>
          )}
        </button>
        {isLoggedIn ? (
          <button
            id="Header_7"
            className="px-6 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 transition duration-300"
            onClick={handleLogout}
          >
            Logout
          </button>
        ) : (
          <button
            id="Header_8"
            className="px-6 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 transition duration-300"
            onClick={() => {
              // Handle login functionality
              handleLogin('user@example.com', 'password');
            }}
          >
            Contact Agent
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;
