import React from 'react';
import images from '../assets/images';

const About = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-center text-gray-800">About Us</h2>
        <div className="flex flex-wrap items-center">
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <img src={images[0]} alt="Founder" className="w-full rounded-lg shadow-lg" />
          </div>
          <div className="w-full md:w-1/2 md:pl-8">
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">Our Story</h3>
            <p className="text-gray-600 mb-6">
              Founded in 1995 by visionary entrepreneur John Smith, Acme Real Estate has been dedicated to helping people find their dream homes for over two decades. With a passion for exceptional service and a commitment to integrity, we have grown from a small local agency to a trusted industry leader.
            </p>
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">Our Mission</h3>
            <p className="text-gray-600 mb-6">
              At Acme Real Estate, our mission is to provide unparalleled expertise, guidance, and support to our clients throughout their real estate journey. We strive to build lasting relationships based on trust, transparency, and a deep understanding of our clients' unique needs and aspirations.
            </p>
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">Core Values</h3>
            <ul className="list-disc list-inside text-gray-600">
              <li>Integrity and honesty in every interaction</li>
              <li>Exceptional service and attention to detail</li>
              <li>Continuous learning and industry expertise</li>
              <li>Collaboration and teamwork</li>
              <li>Community involvement and social responsibility</li>
            </ul>
          </div>
        </div>
        <div className="mt-12">
          <h3 className="text-2xl font-semibold mb-4 text-gray-800 text-center">Milestones</h3>
          <div className="flex flex-wrap justify-center">
            <div className="w-full md:w-1/3 p-4">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h4 className="text-xl font-semibold mb-2 text-gray-800">1995</h4>
                <p className="text-gray-600">Acme Real Estate founded</p>
              </div>
            </div>
            <div className="w-full md:w-1/3 p-4">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h4 className="text-xl font-semibold mb-2 text-gray-800">2005</h4>
                <p className="text-gray-600">Expanded to multiple locations</p>
              </div>
            </div>
            <div className="w-full md:w-1/3 p-4">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h4 className="text-xl font-semibold mb-2 text-gray-800">2015</h4>
                <p className="text-gray-600">Recognized as top agency in the region</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
