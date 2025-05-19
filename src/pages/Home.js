import React from 'react';
import Hero from '../components/Hero';
import FounderSection from '../components/FounderSection';
import Mission from '../components/Mission';
import Programs from '../components/Programs';
import Gallery from '../components/Gallery';

const Home = () => {
  return (
    <div className="app">
      <Hero />
      <FounderSection />
      <Mission />
      <Programs />
      <Gallery />
    </div>
  );
};

export default Home;
