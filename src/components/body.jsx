import React from 'react';
import Header from './Header';
import Hero from './Hero';
import Sections from './Sections';
import Features from './Features';
import About from './About';
import Testimonials from './Testimonials';
import Blog from './Blog';
import WhyUs from './WhyUs';
import CTA from './CTA';
import Footer from './Footer';

const Body = () => {
  return (
    <>
      <Header />
      <Hero />
      <Sections />
      <Features />
      <About />
      <Testimonials />
      <Blog />
      <WhyUs />
      <CTA />
      <Footer />
    </>
  );
};

export default Body;