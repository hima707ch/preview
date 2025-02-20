import React, { useState, useEffect } from 'react';
import images from '../assets/images';

const AboutSection = () => {
  const [aboutData, setAboutData] = useState({
    history: 'Our real estate firm was founded in 2005 with a vision to provide exceptional service and expertise to our clients. Over the years, we have grown into a trusted name in the industry, helping countless individuals and families find their dream homes.',
    mission: 'Our mission is to deliver top-notch real estate solutions tailored to the unique needs of each client. We strive to build long-lasting relationships based on trust, integrity, and professionalism.',
    vision: 'We aspire to be the leading real estate firm in the region, known for our innovative approach, market knowledge, and commitment to client satisfaction. Our goal is to continuously exceed expectations and set new standards in the industry.',
    teamPhotoUrl: images[0],
    videoUrl: 'https://example.com/company-video.mp4',
  });

  useEffect(() => {
    const fetchAboutData = async () => {
      try {
        const response = await fetch('/api/company/about');
        const data = await response.json();
        setAboutData(data);
      } catch (error) {
        console.error('Error fetching about data:', error);
      }
    };

    fetchAboutData();
  }, []);

  return (
    <section className="bg-gray-100 py-12" id="AboutSection_1">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 text-center" id="AboutSection_2">About Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4" id="AboutSection_3">Our History</h3>
            <p className="text-gray-700" id="AboutSection_4">{aboutData.history}</p>

            <h3 className="text-xl font-semibold mt-8 mb-4" id="AboutSection_5">Mission</h3>
            <p className="text-gray-700" id="AboutSection_6">{aboutData.mission}</p>

            <h3 className="text-xl font-semibold mt-8 mb-4" id="AboutSection_7">Vision</h3>
            <p className="text-gray-700" id="AboutSection_8">{aboutData.vision}</p>
          </div>
          <div>
            {aboutData.videoUrl ? (
              <div className="aspect-w-16 aspect-h-9">
                <iframe
                  src={aboutData.videoUrl}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title="Company Video"
                  className="w-full h-full object-cover rounded-lg shadow-md"
                  id="AboutSection_9"
                ></iframe>
              </div>
            ) : (
              <img
                src={aboutData.teamPhotoUrl}
                alt="Team"
                className="w-full h-auto object-cover rounded-lg shadow-md"
                id="AboutSection_10"
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
