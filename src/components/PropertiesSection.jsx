import React, { useState, useEffect } from 'react';
import images from '../assets/images';

const PropertiesSection = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    fetchProperties();
  }, []);

  const fetchProperties = async () => {
    try {
      const response = await fetch('/properties');
      const data = await response.json();
      setProperties(data);
    } catch (error) {
      console.error('Error fetching properties:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await fetch(`/properties/${id}`, {
        method: 'DELETE',
      });
      setProperties(properties.filter((property) => property.id !== id));
    } catch (error) {
      console.error('Error deleting property:', error);
    }
  };

  const handleUpdate = async (id, updatedProperty) => {
    try {
      await fetch(`/properties/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedProperty),
      });
      setProperties(
        properties.map((property) =>
          property.id === id ? { ...property, ...updatedProperty } : property
        )
      );
    } catch (error) {
      console.error('Error updating property:', error);
    }
  };

  return (
    <section className="bg-gradient-to-r from-blue-100 to-purple-200 py-12" id="PropertiesSection_1">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-center text-gray-800" id="PropertiesSection_2">Featured Properties</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="PropertiesSection_3">
          {properties.map((property) => (
            <div
              key={property.id}
              className="bg-white rounded-lg shadow-md overflow-hidden transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
              id={`PropertiesSection_4_${property.id}`}
            >
              <img
                src={images[Math.floor(Math.random() * images.length)]}
                alt={property.headline}
                className="w-full h-48 object-cover"
                id={`PropertiesSection_5_${property.id}`}
              />
              <div className="p-6" id={`PropertiesSection_6_${property.id}`}>
                <h3 className="text-xl font-semibold mb-2 text-gray-800" id={`PropertiesSection_7_${property.id}`}>
                  {property.headline}
                </h3>
                <p className="text-gray-600 font-bold" id={`PropertiesSection_8_${property.id}`}>${property.price}</p>
                <div className="mt-4 flex justify-between" id={`PropertiesSection_9_${property.id}`}>
                  <button
                    className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                    onClick={() => handleUpdate(property.id, { /* Updated property data */ })}
                    id={`PropertiesSection_10_${property.id}`}
                  >
                    Update
                  </button>
                  <button
                    className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
                    onClick={() => handleDelete(property.id)}
                    id={`PropertiesSection_11_${property.id}`}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PropertiesSection;
