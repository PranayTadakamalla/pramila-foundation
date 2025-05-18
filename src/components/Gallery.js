import React, { useState, useEffect } from 'react';
import './Gallery.css';
import Image1 from '../assets/Image1.jpg';
import Image2 from '../assets/Image2.jpg';
import Image3 from '../assets/Image3.jpg';
import Image4 from '../assets/Image4.jpg';

function Gallery() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [Image1, Image2, Image3, Image4];
  const captions = [
    "Small Hands Can Change the World - Save Our Earth",
    "Promoting Environmental Awareness Through Community Action",
    "Tree Plantation Initiatives for a Greener Tomorrow",
    "Working Together for Environmental Conservation"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide === images.length - 1 ? 0 : prevSlide + 1));
    }, 5000);
    
    return () => clearInterval(interval);
  }, [images.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === images.length - 1 ? 0 : prevSlide + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? images.length - 1 : prevSlide - 1));
  };

  return (
    <section id="gallery" className="gallery">
      <div className="container">
        <div className="section-header">
          <h2>Our Impact Gallery</h2>
          <div className="underline"></div>
          <p className="section-description">
            See how Pramila Foundation is making a difference in communities through our various initiatives
          </p>
        </div>
      </div>
      
      <div className="carousel">
        <div className="carousel-container">
          {images.map((image, index) => (
            <div 
              key={index} 
              className={`carousel-slide ${index === currentSlide ? 'active' : ''}`}
              style={{ transform: `translateX(${100 * (index - currentSlide)}%)` }}
            >
              <img src={image || "/placeholder.svg"} alt={`Pramila Foundation Activity ${index + 1}`} />
              <div className="carousel-caption">
                <h2>{captions[index]}</h2>
              </div>
            </div>
          ))}
        </div>
        
        <button className="carousel-button prev" onClick={prevSlide}>&#10094;</button>
        <button className="carousel-button next" onClick={nextSlide}>&#10095;</button>
        
        <div className="carousel-dots">
          {images.map((_, index) => (
            <span 
              key={index} 
              className={`dot ${index === currentSlide ? 'active' : ''}`} 
              onClick={() => goToSlide(index)}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery;