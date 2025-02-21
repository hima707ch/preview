import React, { useState } from 'react';

const CTASection = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, email, password }),
      });

      if (response.ok) {
        setMessage('Subscription successful!');
        setUsername('');
        setEmail('');
        setPassword('');
      } else {
        setMessage('Subscription failed. Please try again.');
      }
    } catch (error) {
      setMessage('An error occurred. Please try again later.');
    }
  };

  return (
    <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-12" id="CTASection_1">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl" id="CTASection_2">
            Join a Community of Passionate Readers
          </h2>
          <p className="mt-4 max-w-2xl text-xl lg:mx-auto" id="CTASection_3">
            Subscribe today for exclusive content and engaging discussions.
          </p>
        </div>

        <div className="mt-10">
          <form onSubmit={handleSubmit} className="sm:max-w-xl sm:mx-auto lg:mx-0">
            <div className="sm:flex">
              <div className="min-w-0 flex-1">
                <label htmlFor="username" className="sr-only">
                  Username
                </label>
                <input
                  id="CTASection_4"
                  type="text"
                  placeholder="Username"
                  className="block w-full px-4 py-3 rounded-md border-0 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-300 focus:ring-offset-gray-900"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>
              <div className="min-w-0 flex-1 mt-4 sm:mt-0 sm:ml-3">
                <label htmlFor="email" className="sr-only">
                  Email
                </label>
                <input
                  id="CTASection_5"
                  type="email"
                  placeholder="Email"
                  className="block w-full px-4 py-3 rounded-md border-0 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-300 focus:ring-offset-gray-900"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="min-w-0 flex-1 mt-4 sm:mt-0 sm:ml-3">
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="CTASection_6"
                  type="password"
                  placeholder="Password"
                  className="block w-full px-4 py-3 rounded-md border-0 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-300 focus:ring-offset-gray-900"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="mt-4 sm:mt-4 sm:flex sm:flex-row-reverse">
              <button
                type="submit"
                className="w-full sm:w-auto sm:ml-3 px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-yellow-500 hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
                id="CTASection_7"
              >
                Subscribe Now
              </button>
            </div>
          </form>
          {message && <p className="mt-4 text-center">{message}</p>}
        </div>
      </div>
    </div>
  );
};

export default CTASection;
