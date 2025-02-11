import React from 'react';
import PropertyCard from './PropertyCard';

const PropertyList = ({ properties }) => {
  return (
    <section className="container mx-auto py-10">
      <h2 className="text-3xl font-bold mb-8 text-center transition duration-500 ease-in-out transform hover:scale-105 hover:text-blue-600">
        Featured Properties
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {properties.map((property) => (
          <div
            key={property.id}
            className="opacity-0 transform scale-95 animate-fadeInUp"
            style={{ animationDelay: `${properties.indexOf(property) * 100}ms` }}
          >
            <PropertyCard property={property} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default PropertyList;