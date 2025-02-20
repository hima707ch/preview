import React, { useEffect, useState } from 'react';
import images from '../assets/images';

const HeroSection = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await fetch('/api/posts');
      const data = await response.json();
      setPosts(data);
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  };

  return (
    <section
      id="HeroSection_1"
      className="relative h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${images[0]})` }}
    >
      <div
        id="HeroSection_2"
        className="absolute inset-0 bg-black opacity-50"
      ></div>
      <div
        id="HeroSection_3"
        className="relative z-10 text-center text-white max-w-3xl mx-auto"
      >
        <h1
          id="HeroSection_4"
          className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent"
        >
          Explore, Learn, and Grow with Us
        </h1>
        <p id="HeroSection_5" className="text-xl mb-8">
          Diving deep into trends and insights across various industries.
        </p>
        <div id="HeroSection_6" className="flex justify-center space-x-4">
          <button
            id="HeroSection_7"
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-full transition duration-300 ease-in-out"
            onClick={fetchPosts}
          >
            Read Latest Posts
          </button>
          <button
            id="HeroSection_8"
            className="bg-white text-indigo-600 hover:bg-indigo-100 font-bold py-3 px-8 rounded-full transition duration-300 ease-in-out"
          >
            Learn More About Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
