import React, { useState, useEffect } from 'react';export default function Testimonials() {  const [testimonials, setTestimonials] = useState([]);  const [error, setError] = useState(null);  useEffect(() => {    fetch('/api/testimonials')      .then(response => response.json())      .then(data => setTestimonials(data.testimonials))      .catch(error => setError(error.message));  }, []);  return (    <section className="bg-gray-100 py-16" id="Testimonials_1">      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl" id="Testimonials_2">          What Our Customers Say        </h2>        <div className="mt-6 pb-10 bg-white sm:pb-16 lg:pb-0 lg:mt-8 lg:grid lg:grid-cols-3 lg:gap-8" id="Testimonials_3">          {error ? (            <p className="text-red-500" id="Testimonials_4">{error}</p>          ) : testimonials.length === 0 ? (            <p className="text-gray-500" id="Testimonials_5">No reviews available.</p>          ) : (            testimonials.map(testimonial => (              <div key={testimonial.id} className="lg:col-span-1" id="Testimonials_6">                <div className="bg-white overflow-hidden shadow rounded-lg divide-y divide-gray-200" id="Testimonials_7">                  <div className="px-4 py-5 sm:p-6" id="Testimonials_8">                    <p className="text-lg text-gray-900" id="Testimonials_9">{testimonial.review}</p>                    <div className="mt-6 flex items-center" id="Testimonials_10">                      <div className="flex-shrink-0" id="Testimonials_11">                        <span className="inline-block h-10 w-10 rounded-full overflow-hidden bg-gray-100" id="Testimonials_12">                          <svg className="h-full w-full text-gray-300" fill="currentColor" viewBox="0 0 24 24" id="Testimonials_13">                            <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />                          </svg>                        </span>                      </div>                      <div className="ml-3" id="Testimonials_14">                        <p className="text-sm font-medium text-gray-900" id="Testimonials_15">                          {testimonial.name}                        </p>                        <div className="flex items-center mt-1" id="Testimonials_16">                          {[...Array(testimonial.rating)].map((_, i) => (                            <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" id="Testimonials_17">                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />                            </svg>                          ))}                        </div>                        <div className="mt-1 text-sm text-gray-500" id="Testimonials_18">                          {new Date(testimonial.date).toLocaleDateString()}                          </div>                      </div>                    </div>                  </div>                </div>              </div>            ))          )}        </div>      </div>    </section>  );}