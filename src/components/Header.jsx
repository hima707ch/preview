import React, { useState, useEffect } from 'react';
import { FaHome, FaList, FaInfoCircle, FaBlog, FaEnvelope, FaMoon, FaSun } from 'react-icons/fa';
import images from '../assets/images';

const Header = () => {
  const [theme, setTheme] = useState('light');
  const [logo, setLogo] = useState('');
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showSignUpForm, setShowSignUpForm] = useState(false);
  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  });
  const [registerData, setRegisterData] = useState({
    username: '',
    email: '',
    password: ''
  });
  const [formData, setFormData] = useState({
    title: '',
    address: '',
    price: '',
    bedrooms: '',
    bathrooms: '',
    squareFootage: '',
    description: '',
    images: []
  });

  useEffect(() => {
    const fetchLogo = async () => {
      try {
        const response = await fetch('/api/listings');
        const data = await response.json();
        const latestListing = data[data.length - 1];
        setLogo(latestListing.image);
      } catch (error) {
        console.error('Error fetching logo:', error);
      }
    };

    fetchLogo();
  }, []);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginData),
      });
      if (response.ok) {
        setShowLoginForm(false);
        setLoginData({ email: '', password: '' });
      }
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(registerData),
      });
      if (response.ok) {
        setShowSignUpForm(false);
        setRegisterData({ username: '', email: '', password: '' });
      }
    } catch (error) {
      console.error('Error registering:', error);
    }
  };

  const handleLoginChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value
    });
  };

  const handleRegisterChange = (e) => {
    setRegisterData({
      ...registerData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      <header id="Header_1" className={`sticky top-0 z-50 bg-${theme === 'light' ? 'white' : 'gray-900'} shadow-md`}>
        <div className="container mx-auto flex items-center justify-between px-4 py-3">
          <div id="Header_2" className="flex items-center">
            <img src={logo || images[0]} alt="Logo" className="w-10 h-10 mr-2" />
            <span className={`text-xl font-bold ${theme === 'light' ? 'text-gray-800' : 'text-white'}`}>Real Estate</span>
          </div>
          <nav id="Header_3" className="hidden md:flex space-x-8">
            <a href="#" className={`flex items-center ${theme === 'light' ? 'text-gray-600 hover:text-gray-800' : 'text-gray-400 hover:text-white'}`}>
              <FaHome className="mr-1" /> Home
            </a>
            <a href="#" className={`flex items-center ${theme === 'light' ? 'text-gray-600 hover:text-gray-800' : 'text-gray-400 hover:text-white'}`}>
              <FaList className="mr-1" /> Listings
            </a>
            <a href="#" className={`flex items-center ${theme === 'light' ? 'text-gray-600 hover:text-gray-800' : 'text-gray-400 hover:text-white'}`}>
              <FaInfoCircle className="mr-1" /> About
            </a>
            <a href="#" className={`flex items-center ${theme === 'light' ? 'text-gray-600 hover:text-gray-800' : 'text-gray-400 hover:text-white'}`}>
              <FaBlog className="mr-1" /> Blog
            </a>
            <a href="#" className={`flex items-center ${theme === 'light' ? 'text-gray-600 hover:text-gray-800' : 'text-gray-400 hover:text-white'}`}>
              <FaEnvelope className="mr-1" /> Contact
            </a>
          </nav>
          <div id="Header_4" className="flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full ${theme === 'light' ? 'bg-gray-200 hover:bg-gray-300 text-gray-800' : 'bg-gray-700 hover:bg-gray-600 text-white'}`}
            >
              {theme === 'light' ? <FaMoon /> : <FaSun />}
            </button>
            <button onClick={() => setShowLoginForm(true)} className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600">Login</button>
            <button onClick={() => setShowSignUpForm(true)} className="px-4 py-2 text-blue-500 border border-blue-500 rounded-md hover:bg-blue-500 hover:text-white">Sign Up</button>
          </div>
        </div>
      </header>

      {showLoginForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg w-96">
            <h2 className="text-2xl font-bold mb-4">Login</h2>
            <form onSubmit={handleLogin}>
              <div className="mb-4">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="w-full p-2 border rounded"
                  value={loginData.email}
                  onChange={handleLoginChange}
                  required
                />
              </div>
              <div className="mb-4">
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="w-full p-2 border rounded"
                  value={loginData.password}
                  onChange={handleLoginChange}
                  required
                />
              </div>
              <div className="flex justify-between">
                <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Login</button>
                <button type="button" onClick={() => setShowLoginForm(false)} className="px-4 py-2 text-gray-600 hover:text-gray-800">Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {showSignUpForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg w-96">
            <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
            <form onSubmit={handleRegister}>
              <div className="mb-4">
                <input
                  type="text"
                  name="username"
                  placeholder="Username"
                  className="w-full p-2 border rounded"
                  value={registerData.username}
                  onChange={handleRegisterChange}
                  required
                />
              </div>
              <div className="mb-4">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="w-full p-2 border rounded"
                  value={registerData.email}
                  onChange={handleRegisterChange}
                  required
                />
              </div>
              <div className="mb-4">
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="w-full p-2 border rounded"
                  value={registerData.password}
                  onChange={handleRegisterChange}
                  required
                />
              </div>
              <div className="flex justify-between">
                <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Sign Up</button>
                <button type="button" onClick={() => setShowSignUpForm(false)} className="px-4 py-2 text-gray-600 hover:text-gray-800">Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;