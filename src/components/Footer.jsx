import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-8">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
        <p className="mb-4 sm:mb-0 text-lg font-semibold tracking-wider">
          &copy; {new Date().getFullYear()} Real Estate. All rights reserved.
        </p>
        <ul className="flex space-x-6">
          <li>
            <a href="/" className="text-white hover:text-blue-400 transition duration-300 ease-in-out">
              Home
            </a>
          </li>
          <li>
            <a href="/properties" className="text-white hover:text-blue-400 transition duration-300 ease-in-out">
              Properties
            </a>
          </li>
          <li>
            <a href="/blog" className="text-white hover:text-blue-400 transition duration-300 ease-in-out">
              Blog
            </a>
          </li>
          <li>
            <a href="/contact" className="text-white hover:text-blue-400 transition duration-300 ease-in-out">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;