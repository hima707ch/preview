import React from 'react';
import Header from './Header';
import Hero from './Hero';
import About from './About';
import Feature from './Feature';
import Testimonials from './Testimonials';
import WhyUs from './WhyUs';
import CTA from './CTA';
import Footer from './Footer';

const Body = () => {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Feature />
      <Testimonials />
      <WhyUs />
      <CTA />
      <Footer />
    </>
  );
};

export default Body;