import React, { useState } from 'react';
import {useNavigate } from 'react-router-dom';
import './Header.css';
import Logo from '../assets/Logo.jpg';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = (path) => {
    setIsMenuOpen(false);
    navigate(path);
    window.scrollTo(0, 0);
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo-container" onClick={() => handleNavClick('/')}>
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
            <li><button onClick={() => handleNavClick('/')}>Home</button></li>
            <li><button onClick={() => handleNavClick('/about')}>About</button></li>
            <li><button onClick={() => handleNavClick('/education')}>Education</button></li>
            <li><button onClick={() => handleNavClick('/social')}>Social Welfare</button></li>
            <li><a href="#contact" className="contact-btn">Contact Us</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
