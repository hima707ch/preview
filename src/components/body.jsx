import React from 'react';
import Header from './Header';
import Hero from './Hero';
import About from './About';
import PropertiesSection from './PropertiesSection';
import Testimonials from './Testimonials';
import Blog from './Blog';
import Contact from './Contact';
import Footer from './Footer';

const Body = () => {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <PropertiesSection />
      <Testimonials />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
};

export default Body;