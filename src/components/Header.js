import React, { useState } from 'react';
import './Header.css';
import Logo from '../assets/Logo.jpg';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo-container">
          <img src={Logo || "/placeholder.svg"} alt="Pramila Foundation Logo" className="logo" />
          <div className="logo-text">
            <h1>Pramila Foundation</h1>
            <p>Service for a Better Society</p>
          </div>
        </div>
        
        <div className="mobile-menu-button" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <nav className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#mission">Mission</a></li>
            <li><a href="#education">Education</a></li>
            <li><a href="#sports">Sports</a></li>
            <li><a href="#environment">Environment</a></li>
            <li><a href="#social">Social Welfare</a></li>
            <li><a href="#contact" className="contact-btn">Contact Us</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;