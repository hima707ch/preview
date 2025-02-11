// Here's the visually enhanced version of the Header component using Tailwind CSS:

import React from 'react';

const Header = () => {
  return (
    <header className="bg-white shadow-lg">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <a href="/" className="text-2xl font-bold text-gray-800 transition duration-300 ease-in-out transform hover:scale-105 hover:text-indigo-600">
          Real Estate
        </a>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <a
                href="/"
                className="text-gray-600 transition duration-200 ease-in-out hover:text-indigo-600 border-b-2 border-transparent hover:border-indigo-600 pb-1"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/properties"
                className="text-gray-600 transition duration-200 ease-in-out hover:text-indigo-600 border-b-2 border-transparent hover:border-indigo-600 pb-1"
              >
                Properties
              </a>
            </li>
            <li>
              <a
                href="/blog"
                className="text-gray-600 transition duration-200 ease-in-out hover:text-indigo-600 border-b-2 border-transparent hover:border-indigo-600 pb-1"
              >
                Blog
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="text-gray-600 transition duration-200 ease-in-out hover:text-indigo-600 border-b-2 border-transparent hover:border-indigo-600 pb-1"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;