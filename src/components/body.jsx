import React from 'react';
import Header from './Header';
import HeroSection from './HeroSection';
import BlogPosts from './BlogPosts';
import AboutSection from './AboutSection';
import Testimonials from './Testimonials';
import CTASection from './CTASection';
import Footer from './Footer';

const Body = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <BlogPosts />
      <AboutSection />
      <Testimonials />
      <CTASection />
      <Footer />
    </>
  );
};

export default Body;