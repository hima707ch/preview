import React from 'react';
import images from '../assets/images';

const Footer = () => {
  return (
    <footer id="Footer_1" className="bg-gradient-to-r from-gray-900 to-gray-800 text-white">
      <div id="Footer_2" className="container mx-auto px-6 py-12">
        <div id="Footer_3" className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div id="Footer_4" className="space-y-4">
            <img src={images[0]} alt="logo" className="h-12" />
            <p className="text-gray-300">Your trusted partner in creating amazing digital experiences.</p>
            <div id="Footer_5" className="flex space-x-4">
              <a href="#" className="hover:text-blue-400 transition-colors"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="hover:text-blue-400 transition-colors"><i className="fab fa-twitter"></i></a>
              <a href="#" className="hover:text-blue-400 transition-colors"><i className="fab fa-instagram"></i></a>
              <a href="#" className="hover:text-blue-400 transition-colors"><i className="fab fa-linkedin-in"></i></a>
            </div>
          </div>
          
          <div id="Footer_6" className="space-y-4">
            <h3 className="text-xl font-bold">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-400 transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Services</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Portfolio</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div id="Footer_7" className="space-y-4">
            <h3 className="text-xl font-bold">Contact Info</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <i className="fas fa-map-marker-alt"></i>
                <span>123 Business Street, New York, USA</span>
              </li>
              <li className="flex items-center space-x-2">
                <i className="fas fa-phone"></i>
                <span>+1 234 567 8900</span>
              </li>
              <li className="flex items-center space-x-2">
                <i className="fas fa-envelope"></i>
                <span>info@example.com</span>
              </li>
            </ul>
          </div>
          
          <div id="Footer_8" className="space-y-4">
            <h3 className="text-xl font-bold">Newsletter</h3>
            <p className="text-gray-300">Subscribe to our newsletter for updates.</p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <button
                type="submit"
                className="w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div id="Footer_9" className="mt-12 pt-8 border-t border-gray-700 text-center">
          <p className="text-gray-300">&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;