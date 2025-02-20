import React, { useState, useEffect } from 'react';
import images from '../assets/images';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;

    try {
      const response = await fetch('/api/users/authenticate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();
      if (data.success) {
        setIsLoggedIn(true);
        setError(null);
      } else {
        setError(data.message);
      }
    } catch (error) {
      setError('An error occurred. Please try again.');
    }
  };

  const handleListProperty = async (e) => {
    e.preventDefault();
    const userId = e.target.userId.value;
    const propertyDetails = e.target.propertyDetails.value;

    try {
      const response = await fetch('/api/properties/list', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userId, propertyDetails }),
      });

      const data = await response.json();
      if (data.success) {
        alert('Property listed successfully!');
        setError(null);
      } else {
        setError(data.message);
      }
    } catch (error) {
      setError('An error occurred. Please try again.');
    }
  };

  return (
    <header
      id="Header_1"
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${scrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}
    >
      <div className="container mx-auto flex items-center justify-between py-4">
        <div id="Header_2" className="flex items-center">
          <img src={images[0]} alt="Logo" className="h-10 mr-4" />
          <h1 className="text-2xl font-bold text-gray-800">Real Estate</h1>
        </div>
        <nav id="Header_3" className="flex items-center space-x-8">
          <a href="#" className="text-gray-600 hover:text-gray-800">
            Home
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-800">
            About Us
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-800">
            Listings
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-800">
            Services
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-800">
            Contact
          </a>
        </nav>
        <div id="Header_4" className="flex items-center space-x-4">
          {isLoggedIn ? (
            <form onSubmit={handleListProperty}>
              <input
                type="hidden"
                name="userId"
                value="1"
              />
              <input
                type="text"
                name="propertyDetails"
                placeholder="Property details"
                className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <button
                type="submit"
                className="bg-blue-500 text-white rounded-md px-6 py-2 ml-2 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                List Your Property
              </button>
            </form>
          ) : (
            <>
              <form onSubmit={handleLogin} className="flex items-center">
                <input
                  type="text"
                  name="username"
                  placeholder="Username"
                  className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 mr-2"
                  required
                />
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 mr-2"
                  required
                />
                <button
                  type="submit"
                  className="bg-blue-500 text-white rounded-md px-6 py-2 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  Login
                </button>
              </form>
              <a
                href="#"
                className="text-blue-500 hover:text-blue-600 focus:outline-none focus:underline"
              >
                Sign Up
              </a>
            </>
          )}
        </div>
      </div>
      {error && (
        <div id="Header_5" className="bg-red-100 text-red-700 px-4 py-2">
          {error}
        </div>
      )}
    </header>
  );
};

export default Header;
