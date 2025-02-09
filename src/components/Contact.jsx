import React from 'react';

export const Contact = () => {
  return (
    <section className="py-20" id="contact">
      <div className="container mx-auto px-4" id='38'>
        <h2 className="text-3xl font-bold mb-8" id='39'>Contact</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8" id='40'>
          <div id='41'>
            <h3 className="text-xl font-bold mb-4" id='42'>Get in Touch</h3>
            <p className="text-gray-600 mb-4" id='43'>If you have any questions, feel free to reach out to me. I'm always open to new opportunities and collaborations.</p>
            <ul className="space-y-2" id='44'>
              <li className="flex items-center" id='45'>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-gray-600" viewBox="0 0 20 20" fill="currentColor" id='46'>
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <span id='47'>john.doe@example.com</span>
              </li>
              <li className="flex items-center" id='48'>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-gray-600" viewBox="0 0 20 20" fill="currentColor" id='49'>
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <span id='50'>+1 123-456-7890</span>
              </li>
            </ul>
          </div>
          <div id='51'>
            <h3 className="text-xl font-bold mb-4" id='52'>Send a Message</h3>
            <form id='53'>
              <div className="mb-4" id='54'>
                <label htmlFor="name" className="block text-gray-700 font-bold mb-2" id='55'>Name</label>
                <input type="text" id="name" name="name" className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500" required id='56' />
              </div>
              <div className="mb-4" id='57'>
                <label htmlFor="email" className="block text-gray-700 font-bold mb-2" id='58'>Email</label>
                <input type="email" id="email" name="email" className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500" required id='59' />
              </div>
              <div className="mb-4" id='60'>
                <label htmlFor="message" className="block text-gray-700 font-bold mb-2" id='61'>Message</label>
                <textarea id="message" name="message" rows="5" className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500" required id='62'></textarea>
              </div>
              <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300" id='63'>Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}