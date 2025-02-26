import React from 'react';
import images from '../assets/images';

const HeroSection = () => {
  return (
    <div id="HeroSection_1" className="min-h-screen bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div id="HeroSection_2" className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        <div id="HeroSection_3" className="flex-1 text-center lg:text-left">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
            Transform Your Digital Experience
          </h1>
          <p className="text-xl text-gray-200 mb-8">
            Create stunning websites and applications with our cutting-edge solutions and expert team.
          </p>
          <div id="HeroSection_4" className="flex flex-wrap gap-4 justify-center lg:justify-start">
            <button className="px-8 py-3 bg-white text-purple-600 rounded-full font-semibold hover:bg-gray-100 transform hover:scale-105 transition duration-300 shadow-lg">
              Get Started
            </button>
            <button className="px-8 py-3 border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-purple-600 transform hover:scale-105 transition duration-300">
              Learn More
            </button>
          </div>
        </div>
        <div id="HeroSection_5" className="flex-1 relative">
          <img
            src={images[0] || 'https://via.placeholder.com/600x400'}
            alt="Hero Image"
            className="rounded-lg shadow-2xl transform hover:scale-105 transition duration-500 w-full max-w-2xl"
          />
          <div id="HeroSection_6" className="absolute -bottom-6 -right-6 w-24 h-24 bg-yellow-400 rounded-full animate-bounce hidden lg:block"></div>
          <div id="HeroSection_7" className="absolute -top-6 -left-6 w-16 h-16 bg-pink-400 rounded-full animate-pulse hidden lg:block"></div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;