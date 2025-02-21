import React, { useState, useEffect } from 'react';
import images from '../assets/images';

const HeroSection = () => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('/posts');
        if (!response.ok) {
          throw new Error('Failed to fetch posts');
        }
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchPosts();
  }, []);

  return (
    <section
      id="HeroSection_1"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0">
        <img
          id="HeroSection_2"
          src={images[Math.floor(Math.random() * images.length)]}
          alt="Hero Background"
          className="w-full h-full object-cover"
        />
        <div
          id="HeroSection_3"
          className="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-60"
        ></div>
      </div>
      <div className="relative z-10 text-center max-w-3xl mx-auto">
        <h1
          id="HeroSection_4"
          className="text-5xl md:text-6xl font-bold text-white mb-4"
        >
          Explore the Latest Insights and Trends
        </h1>
        <p id="HeroSection_5" className="text-xl text-gray-200 mb-8">
          Delve into deep dives and expert opinions across various topics
        </p>
        <div className="flex justify-center space-x-4">
          <button
            id="HeroSection_6"
            className="bg-white text-gray-800 px-6 py-3 rounded-md font-semibold hover:bg-gray-200 transition duration-300"
            onClick={() => {
              if (error) {
                alert('Failed to fetch posts. Please try again later.');
              } else {
                // Handle navigation to blog posts page
                console.log('Navigate to blog posts page');
              }
            }}
          >
            Read Latest Posts
          </button>
          <button
            id="HeroSection_7"
            className="bg-transparent text-white border border-white px-6 py-3 rounded-md font-semibold hover:bg-white hover:text-gray-800 transition duration-300"
            onClick={() => {
              // Handle navigation to subscribe page
              console.log('Navigate to subscribe page');
            }}
          >
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
