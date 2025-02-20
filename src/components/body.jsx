import React from 'react';
import Header from './Header';
import HeroSection from './HeroSection';
import AboutSection from './AboutSection';
import ListingsSection from './ListingsSection';
import Testimonials from './Testimonials';
import ContactSection from './ContactSection';
import BlogSection from './BlogSection';
import Footer from './Footer';

const Body = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <AboutSection />
      <ListingsSection />
      <Testimonials />
      <ContactSection />
      <BlogSection />
      <Footer />
    </div>
  );
};

export default Body;