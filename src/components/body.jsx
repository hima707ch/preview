import React from 'react';
import Header from './Header';
import Hero from './Hero';
import FeaturesServices from './Features/Services';
import About from './About';
import Testimonials from './Testimonials';
import BlogResources from './Blog/Resources';
import WhyUs from './WhyUs';
import CTASection from './CTASection';
import Footer from './Footer';

const Body = () => {
  return (
    <>
      <Header />
      <Hero />
      <FeaturesServices />
      <About />
      <Testimonials />
      <BlogResources />
      <WhyUs />
      <CTASection />
      <Footer />
    </>
  );
};

export default Body;