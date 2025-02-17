import React from 'react';
import images from '../assets/images.js';

const Hero = () => {
  return (
    <section className="relative bg-cover bg-center py-32 px-6 md:px-12 lg:px-24" style={{backgroundImage: `url(${images[Math.floor(Math.random()*images.length)]})`}}>
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="relative z-10 text-center text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Find Your Dream Home with Us</h1>
        <p className="text-lg md:text-xl mb-8">Wide range of properties tailored to your needs.</p>
        <div className="flex justify-center space-x-4">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition duration-300">Browse Properties</button>
          <button className="bg-white text-blue-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-full shadow-lg transition duration-300">Learn More</button>
        </div>
        <div className="mt-12 max-w-xl mx-auto">
          <div className="flex items-center bg-white rounded-full shadow-md p-2">
            <input className="flex-grow px-4 py-2 text-gray-700 focus:outline-none" type="text" placeholder="Search properties..." />
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full transition duration-300">Search</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;