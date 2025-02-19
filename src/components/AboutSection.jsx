import React from 'react';
import images from '../assets/images';

const AboutSection = () => {
  return (
    <section className="bg-gray-100 py-16" id="AboutSection_1">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center" id="AboutSection_2">About Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4" id="AboutSection_3">Our History</h3>
            <p className="text-gray-600 mb-6" id="AboutSection_4">
              Founded in 2010, Real Estate Co. has been dedicated to helping people find their dream homes. With a team of experienced professionals, we have grown to become one of the leading real estate companies in the region.
            </p>
            <h3 className="text-xl font-semibold mb-4" id="AboutSection_5">Our Mission</h3>
            <p className="text-gray-600 mb-6" id="AboutSection_6">
              Our mission is to provide exceptional service and expertise to our clients, guiding them through every step of the real estate process. We strive to build long-lasting relationships based on trust, integrity, and professionalism.
            </p>
          </div>
          <div>
            <img src={images[0]} alt="Company Timeline" className="w-full h-auto rounded-lg shadow-md" id="AboutSection_7" />
          </div>
        </div>
        <div className="mt-12">
          <h3 className="text-xl font-semibold mb-4 text-center" id="AboutSection_8">Our Team</h3>
          <div className="flex justify-center">
            <img src={images[1]} alt="Team Photo" className="w-full md:w-2/3 h-auto rounded-lg shadow-md" id="AboutSection_9" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
