import React, { useState, useEffect } from 'react';
import images from '../assets/images';

const PropertiesSection = () => {
  const [properties, setProperties] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [newProperty, setNewProperty] = useState({
    title: '',
    description: '',
    price: '',
    imageUrl: '',
    location: ''
  });

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
      const token = localStorage.getItem('token');
      await fetch(`/properties/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      setProperties(properties.filter((property) => property.id !== id));
    } catch (error) {
      console.error('Error deleting property:', error);
    }
  };

  const handleUpdate = async (id, updatedProperty) => {
    try {
      const token = localStorage.getItem('token');
      await fetch(`/properties/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
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
      const token = localStorage.getItem('token');
      const response = await fetch('/properties', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(newProperty),
      });
      const data = await response.json();
      setProperties([...properties, data]);
      setNewProperty({
        title: '',
        description: '',
        price: '',
        imageUrl: '',
        location: ''
      });
      setShowForm(false);
    } catch (error) {
      console.error('Error adding property:', error);
    }
  };

  return (
    <section className="bg-gradient-to-r from-blue-100 to-purple-200 py-12" id="PropertiesSection_1">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-4xl font-bold text-gray-800" id="PropertiesSection_2">Featured Properties</h2>
          <button
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
            onClick={() => setShowForm(!showForm)}
          >
            {showForm ? 'Cancel' : 'Add Property'}
          </button>
        </div>

        {showForm && (
          <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md mb-8">
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
                type="number"
                name="price"
                value={newProperty.price}
                onChange={handleInputChange}
                placeholder="Price"
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
                type="text"
                name="imageUrl"
                value={newProperty.imageUrl}
                onChange={handleInputChange}
                placeholder="Image URL"
                className="border p-2 rounded"
                required
              />
              <textarea
                name="description"
                value={newProperty.description}
                onChange={handleInputChange}
                placeholder="Description"
                className="border p-2 rounded md:col-span-2"
                required
              />
            </div>
            <button
              type="submit"
              className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
            >
              Save Property
            </button>
          </form>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="PropertiesSection_3">
          {properties.map((property) => (
            <div
              key={property.id}
              className="bg-white rounded-lg shadow-md overflow-hidden transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
              id={`PropertiesSection_4_${property.id}`}
            >
              <img
                src={property.imageUrl || images[Math.floor(Math.random() * images.length)]}
                alt={property.title}
                className="w-full h-48 object-cover"
                id={`PropertiesSection_5_${property.id}`}
              />
              <div className="p-6" id={`PropertiesSection_6_${property.id}`}>
                <h3 className="text-xl font-semibold mb-2 text-gray-800" id={`PropertiesSection_7_${property.id}`}>
                  {property.title}
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