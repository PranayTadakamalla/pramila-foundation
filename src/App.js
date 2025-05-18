import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Mission from './components/Mission';
import Programs from './components/Programs';
import Gallery from './components/Gallery';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <Header />
      <Hero />
      <Mission />
      <Programs />
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;