import React from 'react';
import './Hero.css';

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1>Empowering Communities, Transforming Lives</h1>
        <p>Pramila Foundation is dedicated to creating positive change through education, sports, environmental protection, and social welfare initiatives.</p>
        <div className="hero-buttons">
          <a href="#mission" className="btn primary-btn">Our Mission</a>
          <a href="#contact" className="btn secondary-btn">Get Involved</a>
        </div>
      </div>
    </section>
  );
}

export default Hero;