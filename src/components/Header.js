import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
        <Link to="/" className="logo-container">
          <img src={Logo || "/placeholder.svg"} alt="Pramila Foundation Logo" className="logo" />
          <div className="logo-text">
            <h1>Pramila Foundation</h1>
            <p>Service for a Better Society</p>
          </div>
        </Link>

        <div className="mobile-menu-button" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <nav className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/education">Education</Link></li>
            <li><Link to="/social">Social Welfare</Link></li>
            <li><a href="#contact" className="contact-btn">Contact Us</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
