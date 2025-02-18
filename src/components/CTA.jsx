import React from 'react';import { useNavigate } from 'react-router-dom';import axios from 'axios';const CTA = () => {  const navigate = useNavigate();  const handleBrowseListings = async () => {    try {      const response = await axios.get('/properties');      // Handle the response data and navigate to the properties page      navigate('/properties');    } catch (error) {      console.error('Error fetching properties:', error);    }  };  return (    <section id="CTA_1" className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-16">      <div id="CTA_2" className="container mx-auto px-4">        <h2 id="CTA_3" className="text-4xl font-bold mb-6">Ready to find your perfect home?</h2>        <p id="CTA_4" className="text-lg mb-8">Browse our exclusive listings and discover your dream property today!</p>        <button          id="CTA_5"          className="bg-white text-blue-600 font-semibold py-3 px-8 rounded-lg shadow-md hover:bg-blue-100 transition duration-300"          onClick={handleBrowseListings}        >          Browse Listings        </button>      </div>    </section>  );};export default CTA;