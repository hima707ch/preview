import React from 'react';

export const About = () => {
  return (
    <section className="py-20" id="about">
      <div className="container mx-auto px-4" id='16'>
        <h2 className="text-3xl font-bold mb-8" id='17'>About Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8" id='18'>
          <div id='19'>
            <p className="text-gray-600 mb-4" id='20'>Hi, I'm John Doe, a web developer with a passion for creating engaging and user-friendly websites. I have experience in various web technologies and enjoy turning complex problems into simple, elegant solutions.</p>
            <p className="text-gray-600" id='21'>I believe in continuous learning and staying up-to-date with the latest industry trends. When I'm not coding, you can find me exploring new technologies, reading tech blogs, or contributing to open-source projects.</p>
          </div>
          <div className="flex justify-center" id='22'>
            <img src="profile.jpg" alt="Profile" className="rounded-full w-64 h-64 object-cover shadow-lg" id='23' />
          </div>
        </div>
      </div>
    </section>
  );
}