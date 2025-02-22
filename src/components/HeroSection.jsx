import React from 'react';
import images from '../assets/images';

const HeroSection = () => {
  return (
    <section id="HeroSection_1" className="relative bg-cover bg-center h-screen" style={{backgroundImage: `url(${images[0]})`}}>
      <div id="HeroSection_2" className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div id="HeroSection_3" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center h-full">
        <div id="HeroSection_4" className="text-center">
          <h1 id="HeroSection_5" className="text-4xl sm:text-5xl md:text-6xl text-white font-bold mb-4">Find Your Dream Property</h1>
          <p id="HeroSection_6" className="text-xl sm:text-2xl text-gray-300 mb-8">Search from the finest collection of luxury homes, apartments, and villas</p>
          <div id="HeroSection_7" className="flex justify-center mb-8">
            <input id="HeroSection_8" type="text" placeholder="Property Type" className="w-64 sm:w-80 px-4 py-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-600" />
            <input id="HeroSection_9" type="text" placeholder="Location" className="w-64 sm:w-80 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600" />
            <input id="HeroSection_10" type="text" placeholder="Price Range" className="w-64 sm:w-80 px-4 py-2 rounded-r-md focus:outline-none focus:ring-2 focus:ring-blue-600" />
          </div>
          <div id="HeroSection_11" className="flex justify-center">
            <button id="HeroSection_12" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-md mr-4">Search</button>
            <button id="HeroSection_13" className="bg-white hover:bg-gray-100 text-blue-600 font-bold py-2 px-6 rounded-md">Learn More</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
