import React from "react";
import HeroSection from "./HeroSection";
import AboutUsSection from "./AboutUsSection";
import ServicesSection from "./ServicesSection";
import FeaturedProducts from "./FeaturedProducts";
import TestimonialsCarousel from "./TestimonialsCarousel";
import BlogHighlights from "./BlogHighlights";
import CallToAction from "./CallToAction";
import NewsletterSignup from "./NewsletterSignup";
import ContactForm from "./ContactForm";
import SocialMediaLinks from "./SocialMediaLinks";

const Body = () => {
  return (
    <div>
      <HeroSection />
      <AboutUsSection />
      <ServicesSection />
      <FeaturedProducts />
      <TestimonialsCarousel />
      <BlogHighlights />
      <CallToAction />
      <NewsletterSignup />
      <ContactForm />
      <SocialMediaLinks />
    </div>
  );
};

export default Body;
