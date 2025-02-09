import React from 'react';
import { Header } from './Header';
import { Hero } from './Hero';
import { About } from './About';
import { Portfolio } from './Portfolio';
import { Skills } from './Skills';
import { Contact } from './Contact';

export const Body = () => {
  return (
    <div className="flex flex-col min-h-screen" id='1'>
      <Header />
      <main className="flex-grow" id='2'>
        <Hero />
        <About />
        <Portfolio />
        <Skills />
        <Contact />
      </main>
    </div>
  );
}