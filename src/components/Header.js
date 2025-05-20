import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css';
import Logo from '../assets/Logo.jpg';
import Logo1 from '../assets/logo1.jpg';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = (path) => {
    setIsMenuOpen(false);
    navigate(path);
    window.scrollTo(0, 0);
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo-container" onClick={() => handleLinkClick('/')} style={{ cursor: 'pointer' }}>
          <div className="dual-logo">
            <img src={Logo || "/placeholder.svg"} alt="Pramila Foundation Logo" className="logo" />
            <img src={Logo1 || "/placeholder.svg"} alt="Pramila Foundation Secondary Logo" className="logo logo-secondary" />
          </div>
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
            <li>
              <Link to="/" onClick={() => handleLinkClick('/')}>Home</Link>
            </li>
            <li>
              <Link to="/about" onClick={() => handleLinkClick('/about')}>About</Link>
            </li>
            <li>
              <Link to="/education" onClick={() => handleLinkClick('/education')}>Education</Link>
            </li>
            <li>
              <Link to="/social" onClick={() => handleLinkClick('/social')}>Social Welfare</Link>
            </li>
            <li>
              <a href="#contact" className="contact-btn" onClick={() => setIsMenuOpen(false)}>Contact Us</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
