import React, { useState, useEffect } from 'react';
import { FaHome, FaBuilding, FaUsers, FaBlog, FaEnvelope, FaSignInAlt, FaUserPlus, FaSun, FaMoon } from 'react-icons/fa';
import images from '../assets/images';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [theme, setTheme] = useState('light');

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

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const handleLogin = async (email, password) => {
    try {
      const response = await fetch('/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (data.token) {
        // Store token and redirect to dashboard
        localStorage.setItem('token', data.token);
        window.location.href = '/dashboard';
      } else {
        // Display error message
        alert(data.error);
      }
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  const handleSignup = async (email, password) => {
    try {
      const response = await fetch('/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (data.message) {
        // Display success message and redirect to login
        alert(data.message);
        window.location.href = '/login';
      } else {
        // Display error message
        alert(data.error);
      }
    } catch (error) {
      console.error('Signup error:', error);
    }
  };

  return (
    <header
      id="Header_1"
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'} ${theme === 'dark' ? 'bg-gray-800 text-white' : 'text-gray-800'}`}
    >
      <div className="container mx-auto px-4 py-6 flex items-center justify-between">
        <div id="Header_2" className="flex items-center">
          <img id="Header_3" src={images[0]} alt="Logo" className="h-8 w-auto" />
          <span id="Header_4" className="ml-2 text-xl font-bold">RealEstate</span>
        </div>
        <nav id="Header_5">
          <ul className="flex space-x-6">
            <li>
              <a id="Header_6" href="/" className="flex items-center text-sm font-medium hover:text-blue-600">
                <FaHome id="Header_7" className="mr-1" />
                Home
              </a>
            </li>
            <li>
              <a id="Header_8" href="/properties" className="flex items-center text-sm font-medium hover:text-blue-600">
                <FaBuilding id="Header_9" className="mr-1" />
                Properties
              </a>
            </li>
            <li>
              <a id="Header_10" href="/about" className="flex items-center text-sm font-medium hover:text-blue-600">
                <FaUsers id="Header_11" className="mr-1" />
                About Us
              </a>
            </li>
            <li>
              <a id="Header_12" href="/blog" className="flex items-center text-sm font-medium hover:text-blue-600">
                <FaBlog id="Header_13" className="mr-1" />
                Blog
              </a>
            </li>
            <li>
              <a id="Header_14" href="/contact" className="flex items-center text-sm font-medium hover:text-blue-600">
                <FaEnvelope id="Header_15" className="mr-1" />
                Contact
              </a>
            </li>
          </ul>
        </nav>
        <div id="Header_16" className="flex items-center space-x-4">
          <button
            id="Header_17"
            className="focus:outline-none"
            onClick={toggleTheme}
          >
            {theme === 'light' ? (
              <FaSun id="Header_18" className="h-5 w-5" />
            ) : (
              <FaMoon id="Header_19" className="h-5 w-5" />
            )}
          </button>
          <button
            id="Header_20"
            className="flex items-center text-sm font-medium hover:text-blue-600"
            onClick={() => handleLogin('user@example.com', 'password')}
          >
            <FaSignInAlt id="Header_21" className="mr-1" />
            Login
          </button>
          <button
            id="Header_22"
            className="flex items-center text-sm font-medium hover:text-blue-600"
            onClick={() => handleSignup('newuser@example.com', 'password')}
          >
            <FaUserPlus id="Header_23" className="mr-1" />
            Signup
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
