"use client"

import { useState, useEffect } from "react"
import Image1 from "../assets/Image1.jpg"
import Image2 from "../assets/Image2.jpg"
import Image3 from "../assets/Image3.jpg"
import Image4 from "../assets/Image4.jpg"
import Image5 from "../assets/Image5.jpg"
import Image6 from "../assets/Image6.jpg"
import Image7 from "../assets/Image7.jpg"
import Image8 from "../assets/Image8.jpg"
import "./Gallery.css"

export default function Gallery() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [lightboxImage, setLightboxImage] = useState(null)

  const images = [
    Image1,
    Image2,
    Image3,
    Image4,
    Image5,
    Image6,
    Image7,
    Image8,
  ]

  const captions = [
    "Small Hands Can Change the World - Save Our Earth",
    "Promoting Environmental Awareness Through Community Action",
    "Tree Plantation Initiatives for a Greener Tomorrow",
    "Working Together for Environmental Conservation",
    "Empowering Communities Through Education",
    "Building Sustainable Futures Together",
    "Creating Positive Environmental Impact",
    "Fostering Community Development",
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide === images.length - 1 ? 0 : prevSlide + 1))
    }, 5000)
    return () => clearInterval(interval)
  }, [images.length])

  const goToSlide = (index) => {
    setCurrentSlide(index)
  }

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === images.length - 1 ? 0 : prevSlide + 1))
  }

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? images.length - 1 : prevSlide - 1))
  }

  const handleReturnHome = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const openLightbox = (image) => {
    setLightboxImage(image)
    document.body.style.overflow = "hidden"
  }

  const closeLightbox = () => {
    setLightboxImage(null)
    document.body.style.overflow = "auto"
  }

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
              className={`carousel-slide ${index === currentSlide ? "active" : ""}`}
              style={{ transform: `translateX(${100 * (index - currentSlide)}%)` }}
            >
              <img src={image} alt={`Pramila Foundation Activity ${index + 1}`} />
              <div className="carousel-caption">
                <h2>{captions[index]}</h2>
              </div>
            </div>
          ))}
        </div>

        <button className="carousel-button prev" onClick={prevSlide}>
          &#10094;
        </button>
        <button className="carousel-button next" onClick={nextSlide}>
          &#10095;
        </button>

        <div className="carousel-dots">
          {images.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === currentSlide ? "active" : ""}`}
              onClick={() => goToSlide(index)}
            ></span>
          ))}
        </div>
      </div>

      <div className="gallery-grid">
        {images.map((image, index) => (
          <div key={index} className="gallery-item">
            <div className="image-container">
              <img src={image} alt={`Gallery ${index + 1}`} />
              <div className="image-overlay">
                <div className="overlay-content">
                  <button className="expand-btn" onClick={() => openLightbox(image)}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M15 3H21V9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M9 21H3V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M21 3L14 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M3 21L10 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    View Full Size
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {lightboxImage && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <div className="lightbox-container" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={closeLightbox}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <div className="lightbox-content">
              <img src={lightboxImage} alt="Gallery" />
            </div>
          </div>
        </div>
      )}

      <div className="home-button-container">
        <button className="home-button" onClick={handleReturnHome}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path d="M9 22V12H15V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Back to Home
        </button>
      </div>
    </section>
  )
}
