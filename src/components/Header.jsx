import React from 'react';

export const Header = () => {
  return (
    <header className="bg-white shadow-md" id='3'>
      <div className="container mx-auto px-4 py-6 flex items-center justify-between" id='4'>
        <h1 className="text-2xl font-bold text-gray-800" id='5'>My Portfolio</h1>
        <nav id='6'>
          <ul className="flex space-x-4" id='7'>
            <li><a href="#about" className="text-gray-600 hover:text-gray-800" id='8'>About</a></li>
            <li><a href="#portfolio" className="text-gray-600 hover:text-gray-800" id='9'>Portfolio</a></li>
            <li><a href="#skills" className="text-gray-600 hover:text-gray-800" id='10'>Skills</a></li>
            <li><a href="#contact" className="text-gray-600 hover:text-gray-800" id='11'>Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}