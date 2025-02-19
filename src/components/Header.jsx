import React, { useState } from 'react';
import { FaHome, FaInfoCircle, FaBuilding, FaHandshake, FaEnvelope, FaUser, FaSignInAlt } from 'react-icons/fa';
import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs';
import images from '../assets/images';

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleLogin = async () => {
    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        const { token } = await response.json();
        // Handle successful login, e.g., store token, redirect, etc.
        console.log('Login successful. Token:', token);
      } else if (response.status === 401) {
        setError('Invalid username or password');
      } else {
        setError('Login failed. Please try again.');
      }
    } catch (error) {
      setError('An error occurred. Please try again.');
    }
  };

  const handleScroll = () => {
    const scrollTop = window.pageYOffset;
    setIsScrolled(scrollTop > 0);
  };

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      id="Header_1"
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-4 transition-colors duration-300 ${isScrolled ? 'bg-white dark:bg-gray-800 shadow-md' : 'bg-transparent'} ${isDarkMode ? 'dark' : ''}`}
    >
      {/* Left: Company Logo */}
      <div id="Header_2" className="flex items-center">
        <img src={images[0]} alt="Company Logo" className="h-10 w-auto" />
      </div>

      {/* Center: Navigation */}
      <nav id="Header_3" className="hidden md:flex space-x-8 text-gray-600 dark:text-gray-300">
        <a href="#" className="flex items-center hover:text-blue-500">
          <FaHome className="mr-2" /> Home
        </a>
        <a href="#" className="flex items-center hover:text-blue-500">
          <FaInfoCircle className="mr-2" /> About Us
        </a>
        <a href="#" className="flex items-center hover:text-blue-500">
          <FaBuilding className="mr-2" /> Properties
        </a>
        <a href="#" className="flex items-center hover:text-blue-500">
          <FaHandshake className="mr-2" /> Services
        </a>
        <a href="#" className="flex items-center hover:text-blue-500">
          <FaEnvelope className="mr-2" /> Contact
        </a>
      </nav>

      {/* Right: Login and Theme Toggle */}
      <div id="Header_4" className="flex items-center space-x-4">
        <button
          onClick={() => setIsDarkMode(!isDarkMode)}
          className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 text-yellow-500 dark:text-yellow-400 focus:outline-none"
        >
          {isDarkMode ? <BsFillSunFill /> : <BsFillMoonFill />}
        </button>

        <div className="relative">
          <button className="flex items-center px-4 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-600 focus:outline-none">
            <FaUser className="mr-2" /> Customer Login
          </button>
          {/* Login Form */}
          <div className="absolute right-0 mt-2 w-64 bg-white dark:bg-gray-800 rounded-md shadow-lg">
            <div className="p-4 space-y-4">
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-4 py-2 text-gray-800 dark:text-gray-200 bg-gray-100 dark:bg-gray-700 rounded-md focus:outline-none"
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 text-gray-800 dark:text-gray-200 bg-gray-100 dark:bg-gray-700 rounded-md focus:outline-none"
              />
              {error && <p className="text-red-500 text-sm">{error}</p>}
              <button
                onClick={handleLogin}
                className="flex items-center justify-center w-full px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none"
              >
                <FaSignInAlt className="mr-2" /> Login
              </button>
            </div>
          </div>
        </div>

        <a href="#" className="px-4 py-2 rounded-md bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600">
          Register
        </a>
      </div>
    </header>
  );
};

export default Header;
