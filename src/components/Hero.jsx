import React, { useState, useEffect } from 'react';
import images from '../assets/images';

export default function Hero() {
  const [listings, setListings] = useState([]);
  const [featuredListing, setFeaturedListing] = useState(null);

  useEffect(() => {
    fetch('/api/listings')
      .then(response => response.json())
      .then(data => {
        setListings(data);
        setFeaturedListing(data[0]);
      });
  }, []);

  return (
    <section
      id="Hero_1"
      className="relative bg-cover bg-center py-32"
      style={{ backgroundImage: `url(${images[0]})` }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative container mx-auto text-white text-center">
        <h1 id="Hero_2" className="text-5xl font-bold mb-4">
          Find Your Dream Home with Us
        </h1>
        <p id="Hero_3" className="text-xl mb-8">
          Choose from a wide range of properties at unbeatable prices.
        </p>
        <div className="flex justify-center">
          <a
            id="Hero_4"
            href="/listings"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-full mr-4"
          >
            Browse Listings
          </a>
          {featuredListing && (
            <a
              id="Hero_5"
              href={`/listings/${featuredListing.id}`}
              className="bg-white text-blue-500 font-bold py-3 px-8 rounded-full"
            >
              Learn More
            </a>
          )}
        </div>
      </div>
    </section>
  );
}