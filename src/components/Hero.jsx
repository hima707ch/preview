import React from 'react';

export const Hero = () => {
  return (
    <section className="relative h-screen">
      <div className="absolute inset-0">
        <img src="/hero-bg.jpg" alt="Beautiful homes" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gray-900 opacity-50"></div>
      </div>
      <div className="relative container mx-auto px-4 py-40 text-center">
        <h1 className="text-5xl font-bold text-white mb-4">Find Your Dream Home with Us</h1>
        <p className="text-xl text-gray-100 mb-8">Offering the best selection of homes and apartments</p>
        <div>
          <a href="/listings" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full inline-block mb-4 transition duration-300">Browse Listings</a>
          <a href="/about" className="text-white border border-white hover:bg-white hover:text-gray-900 font-bold py-3 px-8 rounded-full inline-block transition duration-300">Learn More</a>  
        </div>
      </div>
    </section>
  );
};