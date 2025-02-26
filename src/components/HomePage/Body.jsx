import React from "react";
import HeroSection from "./HeroSection";
import NavigationMenu from "./NavigationMenu";
import ServicesSection from "./ServicesSection";
import Testimonials from "./Testimonials";
import Footer from "./Footer";
import NewsletterSignUp from "./NewsletterSignUp";
import FeaturedProducts from "./FeaturedProducts";

const Body = () => {
  return (
    <main className="flex flex-col items-center w-full min-h-screen bg-gray-100">
      <NavigationMenu />
      <HeroSection />
      <section className="container mx-auto px-4 py-8">
        <ServicesSection />
        <FeaturedProducts />
      </section>
      <Testimonials />
      <NewsletterSignUp />
      <Footer />
    </main>
  );
};

export default Body;
