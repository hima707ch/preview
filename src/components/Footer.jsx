import React from 'react';
import images from '../assets/images';

const Footer = () => {
  return (
    <footer id="Footer_1" className="bg-gray-900 text-white py-8">
      <div id="Footer_2" className="container mx-auto flex flex-wrap justify-between">
        <div id="Footer_3" className="w-full md:w-1/3 mb-8 md:mb-0">
          <h3 id="Footer_4" className="text-lg font-semibold mb-4">Navigation</h3>
          <ul id="Footer_5" className="space-y-2">
            <li id="Footer_6"><a href="#" className="hover:text-gray-400 transition duration-300">About</a></li>
            <li id="Footer_7"><a href="#" className="hover:text-gray-400 transition duration-300">Contact</a></li>
            <li id="Footer_8"><a href="#" className="hover:text-gray-400 transition duration-300">Privacy Policy</a></li>
            <li id="Footer_9"><a href="#" className="hover:text-gray-400 transition duration-300">Terms of Service</a></li>
          </ul>
        </div>
        <div id="Footer_10" className="w-full md:w-1/3 mb-8 md:mb-0">
          <h3 id="Footer_11" className="text-lg font-semibold mb-4">Connect with Us</h3>
          <div id="Footer_12" className="flex space-x-4">
            <a href="#" className="text-white hover:text-gray-400 transition duration-300">
              <img id="Footer_13" src={images[0]} alt="Facebook" className="w-6 h-6" />
            </a>
            <a href="#" className="text-white hover:text-gray-400 transition duration-300">
              <img id="Footer_14" src={images[1]} alt="Twitter" className="w-6 h-6" />
            </a>
            <a href="#" className="text-white hover:text-gray-400 transition duration-300">
              <img id="Footer_15" src={images[2]} alt="Instagram" className="w-6 h-6" />
            </a>
          </div>
        </div>
        <div id="Footer_16" className="w-full md:w-1/3">
          <h3 id="Footer_17" className="text-lg font-semibold mb-4">Newsletter</h3>
          <p id="Footer_18" className="text-gray-400 mb-4">Stay informed with our latest updates and offers.</p>
          <form id="Footer_19">
            <div id="Footer_20" className="flex items-center border-b border-gray-600 py-2">
              <input id="Footer_21" className="appearance-none bg-transparent border-none w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-none" type="email" placeholder="Enter your email" />
              <button id="Footer_22" className="flex-shrink-0 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-purple-500 hover:to-blue-500 text-sm border-4 text-white py-1 px-2 rounded" type="submit">
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </div>
      <div id="Footer_23" className="border-t border-gray-700 mt-8 pt-8 text-center">
        <p id="Footer_24" className="text-gray-400">&copy; 2023 Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
