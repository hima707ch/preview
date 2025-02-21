import React, { useEffect, useState } from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import images from '../assets/images';

const Footer = () => {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    const fetchListings = async () => {
      try {
        const response = await fetch('/api/listings');
        const data = await response.json();
        setListings(data.slice(0, 3));
      } catch (error) {
        console.error('Error fetching listings:', error);
      }
    };

    fetchListings();
  }, []);

  return (
    <footer id="Footer_1" className="bg-gray-800 text-white py-12">
      <div id="Footer_2" className="container mx-auto flex flex-wrap justify-between">
        <div id="Footer_3" className="w-full md:w-1/3 mb-8 md:mb-0">
          <h3 id="Footer_4" className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul id="Footer_5" className="space-y-2">
            <li id="Footer_6"><a href="/" className="hover:text-gray-300">Home</a></li>
            <li id="Footer_7"><a href="/about" className="hover:text-gray-300">About</a></li>
            <li id="Footer_8"><a href="/careers" className="hover:text-gray-300">Careers</a></li>
            <li id="Footer_9"><a href="/contact" className="hover:text-gray-300">Contact</a></li>
          </ul>
        </div>
        <div id="Footer_10" className="w-full md:w-1/3 mb-8 md:mb-0">
          <h3 id="Footer_11" className="text-xl font-semibold mb-4">Latest Listings</h3>
          <ul id="Footer_12" className="space-y-4">
            {listings.map((listing) => (
              <li id="Footer_13" key={listing.id}>
                <a href={`/listings/${listing.id}`} className="flex items-center hover:text-gray-300">
                  <img src={images[Math.floor(Math.random() * images.length)]} alt="Listing" className="w-16 h-16 object-cover mr-4" />
                  <span id="Footer_14">{listing.title}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div id="Footer_15" className="w-full md:w-1/3">
          <h3 id="Footer_16" className="text-xl font-semibold mb-4">Newsletter</h3>
          <p id="Footer_17" className="text-gray-400 mb-4">Stay updated with our latest news and offers.</p>
          <form id="Footer_18" className="flex">
            <input
              type="email"
              placeholder="Your email"
              className="w-full px-4 py-2 bg-gray-900 text-white focus:outline-none"
            />
            <button id="Footer_19" type="submit" className="bg-blue-600 text-white px-4 py-2 ml-2 hover:bg-blue-700">
              Subscribe
            </button>
          </form>
          <div id="Footer_20" className="mt-8">
            <h4 id="Footer_21" className="text-xl font-semibold mb-4">Follow Us</h4>
            <div id="Footer_22" className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <FaFacebook size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FaTwitter size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FaInstagram size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div id="Footer_23" className="container mx-auto mt-8">
        <p id="Footer_24" className="text-center text-gray-500">&copy; 2023 Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
