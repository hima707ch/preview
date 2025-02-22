import React from 'react';
import Header from './Header';
import HeroSection from './HeroSection';
import FeaturedProperties from './FeaturedProperties';
import SearchFilters from './SearchFilters';
import PropertiesListing from './PropertiesListing';
import PropertyDetails from './PropertyDetails';
import ContactForm from './ContactForm';
import Login from './Login';
import Registration from './Registration';
import UserSettings from './UserSettings';
import ListingsControl from './ListingsControl';
import Footer from './Footer';

const Body = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <FeaturedProperties />
      <SearchFilters />
      <PropertiesListing />
      <PropertyDetails />
      <ContactForm />
      <Login />
      <Registration />
      <UserSettings />
      <ListingsControl />
      <Footer />
    </div>
  );
};

export default Body;