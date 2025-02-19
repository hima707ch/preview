import React, { useState, useEffect } from 'react';
import images from '../assets/images';

const PropertiesSection = () => {
  const [properties, setProperties] = useState([]);
  const [newProperty, setNewProperty] = useState({
    title: '',
    location: '',
    price: '',
    description: ''
  });

  useEffect(() => {
    fetchProperties();
  }, []);

  const fetchProperties = async () => {
    try {
      const response = await fetch('/api/listings');
      const data = await response.json();
      setProperties(data);
    } catch (error) {
      console.error('Error fetching properties:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProperty(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/listings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newProperty),
      });
      if (response.ok) {
        fetchProperties();
        setNewProperty({
          title: '',
          location: '',
          price: '',
          description: ''
        });
      }
    } catch (error) {
      console.error('Error adding property:', error);
    }
  };

  const fetchPropertyDetails = async (id) => {
    try {
      const response = await fetch(`/api/listings/${id}`);
      if (response.ok) {
        const data = await response.json();
        console.log('Property details:', data);
      } else if (response.status === 404) {
        console.log('Property not found');
      } else {
        console.error('Error fetching property details');
      }
    } catch (error) {
      console.error('Error fetching property details:', error);
    }
  };

  return (
    <section className="bg-gray-100 py-12" id="PropertiesSection_1">
      <div className="container mx-auto">
        <h2 className="text-3xl font-semibold mb-8" id="PropertiesSection_2">Featured Properties</h2>
        
        <form onSubmit={handleSubmit} className="mb-8 bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">Add New Property</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="title"
              value={newProperty.title}
              onChange={handleInputChange}
              placeholder="Property Title"
              className="border p-2 rounded"
              required
            />
            <input
              type="text"
              name="location"
              value={newProperty.location}
              onChange={handleInputChange}
              placeholder="Location"
              className="border p-2 rounded"
              required
            />
            <input
              type="number"
              name="price"
              value={newProperty.price}
              onChange={handleInputChange}
              placeholder="Price"
              className="border p-2 rounded"
              required
            />
            <textarea
              name="description"
              value={newProperty.description}
              onChange={handleInputChange}
              placeholder="Description"
              className="border p-2 rounded"
              required
            />
          </div>
          <button
            type="submit"
            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300"
          >
            Add Property
          </button>
        </form>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="PropertiesSection_3">
          {properties.map((property) => (
            <div key={property.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300" id={`PropertiesSection_${property.id}`}>
              <img src={images[Math.floor(Math.random() * images.length)]} alt={property.title} className="w-full h-48 object-cover" id={`PropertiesSection_${property.id}_img`} />
              <div className="p-6" id={`PropertiesSection_${property.id}_details`}>
                <h3 className="text-xl font-semibold mb-2" id={`PropertiesSection_${property.id}_title`}>{property.title}</h3>
                <p className="text-gray-600 mb-4" id={`PropertiesSection_${property.id}_location`}>{property.location}</p>
                <p className="text-gray-800 font-semibold mb-4" id={`PropertiesSection_${property.id}_price`}>${property.price}</p>
                <p className="text-gray-700 mb-6" id={`PropertiesSection_${property.id}_description`}>{property.description}</p>
                <div className="flex justify-between" id={`PropertiesSection_${property.id}_buttons`}>
                  <button
                    className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300"
                    onClick={() => fetchPropertyDetails(property.id)}
                    id={`PropertiesSection_${property.id}_detailsBtn`}
                  >
                    More Details
                  </button>
                  <button
                    className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition duration-300"
                    id={`PropertiesSection_${property.id}_visitBtn`}
                  >
                    Schedule a Visit
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