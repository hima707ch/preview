import React, { useState, useEffect } from 'react';
import images from '../assets/images';

export default function Hero() {
  const [properties, setProperties] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/properties')
      .then(res => res.json())
      .then(data => {
        if(data.error) {
          setError(data.error);
        } else {
          setProperties(data);
        }
      })
      .catch(err => setError('Failed to fetch properties'));
  }, []);

  return (
    <section id="Hero_1" className="relative bg-cover bg-center py-48" style={{backgroundImage: `url(${images[0]})`}}>
      <div id="Hero_2" className="absolute inset-0 bg-black opacity-40"></div>
      <div id="Hero_3" className="relative z-10 text-center text-white">
        <h1 id="Hero_4" className="text-5xl font-bold mb-4">Find Your Dream Home</h1>
        <p id="Hero_5" className="text-xl mb-8">Exclusive Properties in Prime Locations</p>
        {error ? (
          <p id="Hero_6" className="text-red-500">{error}</p>
        ) : (
          <div id="Hero_7" className="flex justify-center space-x-4">
            <a id="Hero_8"
              href={properties.length > 0 ? '#listings' : '#'}
              className="bg-white text-blue-600 px-8 py-3 rounded-md shadow-md hover:bg-blue-50 transition"
            >
              Browse Listings
            </a>
            <a id="Hero_9" href="#contact" className="bg-blue-600 text-white px-8 py-3 rounded-md shadow-md hover:bg-blue-700 transition">
              Contact Us
            </a>
          </div>
        )}
      </div>
    </section>
  );
}