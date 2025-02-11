Here's the enhanced version of the Hero component with modern design and animations:

import React from 'react';

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-blue-100 to-blue-200 py-24">
      <div className="container mx-auto text-center">
        <h1 className="text-5xl font-bold mb-6 text-gray-800 transition duration-500 ease-in-out transform hover:scale-105">
          Find Your Dream Home
        </h1>
        <p className="text-2xl text-gray-600 mb-10 transition duration-500 ease-in-out transform hover:scale-105">
          Search properties for sale and rent with ease.
        </p>
        <a
          href="/properties"
          className="bg-blue-500 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:bg-blue-600 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110"
        >
          View Properties
        </a>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-white rounded-t-3xl transform -translate-y-1"></div>
    </section>
  );
};

export default Hero;