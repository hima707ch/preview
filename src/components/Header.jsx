import React, { useState, useEffect } from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';
import images from '../assets/images';

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [properties, setProperties] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const fetchProperties = async () => {
    try {
      const response = await fetch('/properties');
      if (!response.ok) {
        throw new Error('Failed to fetch properties');
      }
      const data = await response.json();
      setProperties(data);
      setError(null);
    } catch (error) {
      setError('Error fetching properties. Please try again.');
    }
  };

  return (
    <header
      id="Header_1"
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${isSticky ? 'bg-white dark:bg-gray-800 shadow-md' : 'bg-transparent'} ${isDarkMode ? 'dark' : ''}`}
    >
      <div className="container mx-auto px-4 py-6 flex items-center justify-between">
        <div className="flex items-center">
          <img src={images[0]} alt="Logo" className="h-10 w-auto mr-4" />
          <span className="text-xl font-bold text-gray-800 dark:text-white">Real Estate</span>
        </div>
        <nav className="hidden md:flex space-x-8">
          <a href="/" className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white" id="Header_2">Home</a>
          <a href="/about" className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white" id="Header_3">About Us</a>
          <a
            href="#"
            className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white"
            onClick={fetchProperties}
            id="Header_4"
          >
            Properties
          </a>
          <a href="/services" className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white" id="Header_5">Services</a>
          <a href="/contact" className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white" id="Header_6">Contact</a>
        </nav>
        <div className="flex items-center">
          <button
            className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
            onClick={toggleTheme}
            aria-label="Toggle Dark Mode"
            id="Header_7"
          >
            {isDarkMode ? <FiSun className="h-6 w-6 text-white" /> : <FiMoon className="h-6 w-6 text-gray-600" />}
          </button>
          <a
            href="/contact"
            className="ml-4 inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
            id="Header_8"
          >
            Contact Us
          </a>
        </div>
      </div>
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mt-4" role="alert" id="Header_9">
          <strong className="font-bold">Error!</strong> {error}
        </div>
      )}
      {properties.length > 0 && (
        <div className="container mx-auto px-4 py-8" id="Header_10">
          <h2 className="text-2xl font-bold mb-4">Properties</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {properties.map((property) => (
              <li key={property.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden" id={`Header_${property.id}`}>
                <img src={images[property.id % images.length]} alt={property.title} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">{property.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{property.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
