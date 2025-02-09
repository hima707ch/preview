import React from 'react';
import { Home } from './Home';
import { About } from './About';
import { Projects } from './Projects';
import { Contact } from './Contact';

export const Body = () => {
  return (
    <main>
      <Home />
      <About />
      <Projects />
      <Contact />
    </main>
  );
}