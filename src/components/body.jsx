import React from 'react';
import Header from './Header';
import Footer from './Footer';
import HeroSection from './HeroSection';
import PropertiesListing from './PropertiesListing';
import PropertyDetails from './PropertyDetails';
import Login from './Login';
import Registration from './Registration';
import Dashboard from './Dashboard';

const Body = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <PropertiesListing />
      <PropertyDetails />
      <Login />
      <Registration />
      <Dashboard />
      <Footer />
    </div>
  );
};

export default Body;