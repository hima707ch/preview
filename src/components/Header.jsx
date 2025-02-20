import React from 'react';
import images from '../assets/images.js';

const Header = () => {
  return (
    <header id="Header_1" className="sticky top-0 z-50 bg-white shadow-md">
      <div id="Header_2" className="flex justify-between items-center px-4 py-2 bg-gray-100">
        <div id="Header_3" className="flex space-x-4">
          <a href="#" id="Header_4"><i className="fab fa-facebook-f text-gray-600 hover:text-blue-600"></i></a>
          <a href="#" id="Header_5"><i className="fab fa-twitter text-gray-600 hover:text-blue-400"></i></a>
          <a href="#" id="Header_6"><i className="fab fa-instagram text-gray-600 hover:text-pink-600"></i></a>
        </div>
        <div id="Header_7" className="flex items-center">
          <input type="text" id="Header_8" placeholder="Search..." className="px-4 py-2 rounded-l-md focus:outline-none" />
          <button id="Header_9" className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600">Search</button>
        </div>
      </div>
      <div id="Header_10" className="flex justify-between items-center px-4 py-4">
        <div id="Header_11" className="flex items-center">
          <img src={images[0]} alt="Logo" id="Header_12" className="w-12 h-12 mr-2" />
          <span id="Header_13" className="text-2xl font-bold text-gray-800">My Blog</span>
        </div>
        <nav id="Header_14">
          <ul className="flex space-x-8 text-gray-600 font-medium">
            <li id="Header_15"><a href="#" className="hover:text-blue-600 transition duration-300">Home</a></li>
            <li id="Header_16"><a href="#" className="hover:text-blue-600 transition duration-300">Articles</a></li>
            <li id="Header_17"><a href="#" className="hover:text-blue-600 transition duration-300">About</a></li>
            <li id="Header_18"><a href="#" className="hover:text-blue-600 transition duration-300">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
