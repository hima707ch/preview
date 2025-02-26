import React from 'react';
import Header from './Header';
import Footer from './Footer';
import HeroSection from './HeroSection';
import PropertiesListing from './PropertiesListing';
import PropertyDetails from './PropertyDetails';
import Login from './Login';
import Registration from './Registration';
import Dashboard from './Dashboard';
import HomePage from './HomePage/Body.jsx'
import PropertyListingPage from './PropertyListingPage/Body.jsx'

const Body = () => {
  return (
    <div>
      <HomePage/>
      <PropertyListingPage/>
    </div>
  );
};

export default Body;
