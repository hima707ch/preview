import React, { useState } from 'react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/newsletter/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        const data = await response.json();
        setSubscribed(data.subscribed);
        setMessage(data.message);
      } else {
        setMessage('An error occurred. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      setMessage('An error occurred. Please try again.');
    }
  };

  return (
    <footer id="Footer_1" className="bg-gray-800 text-white py-8">
      <div id="Footer_2" className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div id="Footer_3">
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="/" className="hover:text-gray-300">Home</a></li>
            <li><a href="/about" className="hover:text-gray-300">About Us</a></li>
            <li><a href="/listings" className="hover:text-gray-300">Listings</a></li>
            <li><a href="/services" className="hover:text-gray-300">Services</a></li>
            <li><a href="/contact" className="hover:text-gray-300">Contact</a></li>
            <li><a href="/blog" className="hover:text-gray-300">Blog</a></li>
          </ul>
        </div>
        <div id="Footer_4">
          <h3 className="text-xl font-semibold mb-4">Connect With Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-gray-300"><i className="fab fa-facebook fa-lg"></i></a>
            <a href="#" className="hover:text-gray-300"><i className="fab fa-twitter fa-lg"></i></a>
            <a href="#" className="hover:text-gray-300"><i className="fab fa-instagram fa-lg"></i></a>
            <a href="#" className="hover:text-gray-300"><i className="fab fa-linkedin fa-lg"></i></a>
          </div>
        </div>
        <div id="Footer_5" className="md:col-span-2">
          <h3 className="text-xl font-semibold mb-4">Subscribe to Our Newsletter</h3>
          {subscribed ? (
            <p className="text-green-500">{message}</p>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col md:flex-row">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-gray-700 rounded-l py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              <button
                type="submit"
                className="bg-blue-600 rounded-r py-2 px-4 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
              >
                Subscribe
              </button>
            </form>
          )}
          {message && !subscribed && <p className="text-red-500 mt-2">{message}</p>}
        </div>
      </div>
      <div id="Footer_6" className="container mx-auto mt-8 text-center">
        <p className="text-gray-500">&copy; 2023 Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
