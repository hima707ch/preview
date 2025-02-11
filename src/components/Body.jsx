Here's the enhanced code with visual improvements using Tailwind CSS:

```jsx
import React from 'react';
import Header from './Header';
import Hero from './Hero';
import PropertyList from './PropertyList';
import SearchFilters from './SearchFilters';
import ContactForm from './ContactForm';
import BlogList from './BlogList';
import Footer from './Footer';

const properties = [
  {
    id: 1,
    title: 'Modern Apartment',
    description: 'Spacious 2-bedroom apartment with stunning city views.',
    price: 250000,
    image: 'https://example.com/images/apartment.jpg',
  },
  {
    id: 2,
    title: 'Cozy Bungalow',
    description: 'Charming 3-bedroom bungalow with a beautiful garden.',
    price: 400000,
    image: 'https://example.com/images/bungalow.jpg',
  },
  {
    id: 3,
    title: 'Luxury Villa',
    description: 'Magnificent 5-bedroom villa with a private pool and expansive grounds.',
    price: 1200000,
    image: 'https://example.com/images/villa.jpg',
  },
];

const posts = [
  {
    id: 1,
    title: '10 Tips for First-Time Home Buyers',
    excerpt: 'Buying your first home can be overwhelming. Here are some essential tips to help you navigate the process.',
    slug: 'first-time-home-buyer-tips',
    image: 'https://example.com/images/first-time-buyer.jpg',
  },
  {
    id: 2,
    title: 'The Benefits of Investing in Real Estate',
    excerpt: 'Discover the advantages of investing in real estate and how it can help you build long-term wealth.',
    slug: 'benefits-of-real-estate-investing',
    image: 'https://example.com/images/real-estate-investing.jpg',
  },
  {
    id: 3,
    title: 'Current Real Estate Market Trends',
    excerpt: 'Stay up-to-date with the latest trends and insights in the real estate market.',
    slug: 'current-real-estate-market-trends',
    image: 'https://example.com/images/market-trends.jpg',
  },
];

export const Body = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main>
        <Hero />
        <div className="container mx-auto px-4 py-12">
          <SearchFilters />
          <div className="mt-12">
            <h2 className="text-3xl font-bold mb-6">Featured Properties</h2>
            <PropertyList properties={properties} />
          </div>
          <div className="mt-12">
            <h2 className="text-3xl font-bold mb-6">Latest Blog Posts</h2>
            <BlogList posts={posts} />
          </div>
          <div className="mt-12">
            <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
            <ContactForm />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};
```

Here are the visual enhancements made:

1. Added a minimum height to the main container to ensure it takes up the full viewport height.
2. Applied a light gray background color to the main container for a modern look.
3. Wrapped the main content sections in a container with horizontal padding and vertical spacing.
4. Added margin top to separate the different sections.
5. Used a bold and larger font size for the section headings to improve visual hierarchy.
6. Added margin bottom to the section headings to create spacing between the heading and the content.

These enhancements provide a cleaner and more polished layout, improve the visual hierarchy, and create a modern and professional design using Tailwind CSS utilities.

Note: The individual component styles (e.g., `Header`, `Hero`, `PropertyList`, etc.) are not shown here and would need to be styled separately.