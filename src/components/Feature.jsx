import React, { useState, useEffect } from 'react';
import { FaUserTie, FaBalanceScale, FaHeadset } from 'react-icons/fa';
import images from '../assets/images';

const Feature = () => {
  const [features, setFeatures] = useState([
    {
      id: 'Feature_1',
      icon: <FaUserTie className="text-4xl text-blue-500" />,
      title: 'Certified Agents',
      description: 'Our team of certified real estate agents are experts in their field, providing top-notch service and guidance throughout the buying or selling process.'
    },
    {
      id: 'Feature_2',
      icon: <FaBalanceScale className="text-4xl text-blue-500" />,
      title: 'Legal Assistance',
      description: 'We offer comprehensive legal assistance for all your real estate transactions, ensuring a smooth and hassle-free experience.'
    },
    {
      id: 'Feature_3', 
      icon: <FaHeadset className="text-4xl text-blue-500" />,
      title: '24/7 Support',
      description: 'Our dedicated support team is available 24/7 to answer any questions and address any concerns you may have throughout the process.'
    }
  ]);

  useEffect(() => {
    const fetchPopularServices = async () => {
      try {
        const response = await fetch('/api/listings');
        const data = await response.json();
        // Analyze data to determine most popular services
        const popularServices = analyzePopularServices(data);
        setFeatures(popularServices);
      } catch (error) {
        console.error('Error fetching popular services:', error);
      }
    };

    fetchPopularServices();
  }, []);

  const analyzePopularServices = (data) => {
    // Placeholder function to analyze data and return popular services
    // Replace with actual data analysis logic
    return features;
  };

  return (
    <section className="bg-gray-100 py-16" id="Feature_4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center" id="Feature_5">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div key={feature.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition duration-300" id={feature.id}>
              <div className="flex items-center justify-center h-20 w-20 rounded-full bg-blue-100 mx-auto mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 text-center">{feature.title}</h3>
              <p className="text-gray-600 text-center">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-10 flex justify-center">
        <img src={images[Math.floor(Math.random() * images.length)]} alt="Real Estate" className="w-full max-w-4xl rounded-lg shadow-lg" id="Feature_6" />
      </div>
    </section>
  );
};

export default Feature;
