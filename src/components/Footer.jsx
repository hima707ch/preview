import React from 'react';

export default function Footer() {
  return (
    <footer id="Footer_1" className="bg-gray-800 text-gray-400 py-8">
      <div id="Footer_2" className="container mx-auto flex flex-wrap justify-between">
        <div id="Footer_3" className="w-full md:w-1/3 mb-4 md:mb-0">
          <h3 id="Footer_4" className="text-xl font-semibold text-white mb-4">Contact Us</h3>
          <p id="Footer_5" className="mb-2">123 Main Street</p>
          <p id="Footer_6" className="mb-2">City, State 12345</p>
          <p id="Footer_7" className="mb-2">Phone: (123) 456-7890</p>
          <p id="Footer_8">Email: info@example.com</p>
        </div>
        <div id="Footer_9" className="w-full md:w-1/3 mb-4 md:mb-0">
          <h3 id="Footer_10" className="text-xl font-semibold text-white mb-4">Follow Us</h3>
          <div id="Footer_11" className="flex space-x-4">
            <a id="Footer_12" href="#" className="text-gray-400 hover:text-white">
              <i id="Footer_13" className="fab fa-facebook fa-lg"></i>
            </a>
            <a id="Footer_14" href="#" className="text-gray-400 hover:text-white">
              <i id="Footer_15" className="fab fa-twitter fa-lg"></i>
            </a>
            <a id="Footer_16" href="#" className="text-gray-400 hover:text-white">
              <i id="Footer_17" className="fab fa-instagram fa-lg"></i>
            </a>
            <a id="Footer_18" href="#" className="text-gray-400 hover:text-white">
              <i id="Footer_19" className="fab fa-linkedin fa-lg"></i>
            </a>
          </div>
        </div>
        <div id="Footer_20" className="w-full md:w-1/3">
          <h3 id="Footer_21" className="text-xl font-semibold text-white mb-4">Quick Links</h3>
          <ul id="Footer_22" className="space-y-2">
            <li id="Footer_23"><a href="/" className="text-gray-400 hover:text-white">Home</a></li>
            <li id="Footer_24"><a href="/about" className="text-gray-400 hover:text-white">About</a></li>
            <li id="Footer_25"><a href="/blog" className="text-gray-400 hover:text-white">Blog</a></li>
            <li id="Footer_26"><a href="/careers" className="text-gray-400 hover:text-white">Careers</a></li>
            <li id="Footer_27"><a href="/contact" className="text-gray-400 hover:text-white">Contact</a></li>
          </ul>
        </div>
      </div>
      <div id="Footer_28" className="mt-8 text-center">
        <p id="Footer_29">&copy; 2023 Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
}