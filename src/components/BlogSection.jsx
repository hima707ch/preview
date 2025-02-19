import React from 'react';
import images from '../assets/images';

const BlogSection = () => {
  const blogs = [
    {
      id: 1,
      title: 'Top 10 Real Estate Investment Tips',
      description: 'Learn the best strategies for investing in real estate and maximizing your returns.',
      image: images[0],
      link: '/blog/real-estate-investment-tips'
    },
    {
      id: 2,
      title: 'How to Stage Your Home for a Quick Sale',
      description: 'Discover the secrets to staging your home effectively and attracting potential buyers.',
      image: images[1],
      link: '/blog/home-staging-tips'
    },
    {
      id: 3,
      title: 'The Ultimate Guide to Buying Your First Home',
      description: 'Everything you need to know about the home buying process, from start to finish.',
      image: images[2],
      link: '/blog/first-time-home-buyer-guide'
    }
  ];

  return (
    <section className="bg-gray-100 py-16" id="BlogSection_1">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center" id="BlogSection_2">Latest Blog Posts &amp; Resources</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <div key={blog.id} className="bg-white rounded-lg shadow-md overflow-hidden" id={`BlogSection_${blog.id + 2}`}>
              <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{blog.title}</h3>
                <p className="text-gray-600 mb-4">{blog.description}</p>
                <a href={blog.link} className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300">Read More</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
