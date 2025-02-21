import React from 'react';
import images from '../assets/images';

const AboutSection = () => {
  return (
    <section className="bg-white py-12" id="AboutSection_1">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2" id="AboutSection_2">
            <img src={images[0]} alt="Blogger" className="w-full rounded-lg shadow-lg" id="AboutSection_3" />
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0 md:ml-12" id="AboutSection_4">
            <h2 className="text-3xl font-bold mb-4" id="AboutSection_5">About Me</h2>
            <p className="text-gray-700 leading-relaxed mb-6" id="AboutSection_6">
              Hi, I'm Jane Doe, a passionate blogger with a love for sharing my thoughts and experiences. I started this blog in 2015 as a creative outlet and it has since grown into a thriving community.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6" id="AboutSection_7">
              My mission is to inspire, inform, and connect with readers through engaging content. I cover a wide range of topics including lifestyle, travel, food, and personal development.
            </p>
            <h3 className="text-2xl font-bold mb-4" id="AboutSection_8">Blog Milestones</h3>
            <ul className="timeline" id="AboutSection_9">
              <li className="timeline-item" id="AboutSection_10">
                <div className="timeline-badge" id="AboutSection_11">2015</div>
                <div className="timeline-panel" id="AboutSection_12">
                  <p id="AboutSection_13">Started the blog as a personal project</p>
                </div>
              </li>
              <li className="timeline-item" id="AboutSection_14">
                <div className="timeline-badge" id="AboutSection_15">2017</div>
                <div className="timeline-panel" id="AboutSection_16">
                  <p id="AboutSection_17">Reached 100,000 monthly readers</p>
                </div>
              </li>
              <li className="timeline-item" id="AboutSection_18">
                <div className="timeline-badge" id="AboutSection_19">2020</div>
                <div className="timeline-panel" id="AboutSection_20">
                  <p id="AboutSection_21">Published my first book based on the blog</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
