import React from 'react';
import images from '../assets/images';

const testimonials = [
  {
    id: 1,
    name: 'John Doe',
    image: images[0],
    rating: 5,
    quote: 'This blog has been a game-changer for me. The content is always informative and engaging, and the community is incredibly supportive.'
  },
  {
    id: 2,
    name: 'Jane Smith',
    image: images[1],
    rating: 4,
    quote: 'I love reading the articles on this blog. They provide valuable insights and practical tips that I can apply in my own life.'
  },
  {
    id: 3,
    name: 'Mike Johnson',
    image: images[2],
    rating: 5,
    quote: 'The authenticity of this blog is what sets it apart. The stories shared by readers are inspiring and remind me that I\'m not alone in my journey.'
  }
];

const Testimonials = () => {
  return (
    <section className="bg-gray-100 py-12" id="Testimonials_1">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl text-center mb-8" id="Testimonials_2">
          What Our Readers Say
        </h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3" id="Testimonials_3">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white rounded-lg shadow-lg overflow-hidden" id={`Testimonials_4_${testimonial.id}`}>
              <div className="p-8" id={`Testimonials_5_${testimonial.id}`}>
                <div className="flex items-center mb-4" id={`Testimonials_6_${testimonial.id}`}>
                  <img
                    className="w-12 h-12 rounded-full mr-4"
                    src={testimonial.image}
                    alt={testimonial.name}
                    id={`Testimonials_7_${testimonial.id}`}
                  />
                  <div id={`Testimonials_8_${testimonial.id}`}>
                    <p className="text-lg font-semibold text-gray-900" id={`Testimonials_9_${testimonial.id}`}>{testimonial.name}</p>
                    <div className="flex items-center mt-1" id={`Testimonials_10_${testimonial.id}`}>
                      {[...Array(testimonial.rating)].map((_, index) => (
                        <svg
                          key={index}
                          className="w-5 h-5 fill-current text-yellow-400"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-700" id={`Testimonials_11_${testimonial.id}`}>{testimonial.quote}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
