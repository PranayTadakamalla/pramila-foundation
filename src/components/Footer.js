import React from 'react';
import './Footer.css';
import Logo from '../assets/Logo.jpg';
import { FaFacebook, FaTwitter, FaInstagram, FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin} from 'react-icons/fa';

function Footer() {
  return (
    <footer id="contact" className="footer">
      <div className="footer-container">
        <div className="footer-about">
          <img src={Logo || "/placeholder.svg"} alt="Pramila Foundation Logo" className="footer-logo" />
          <h3>Pramila Foundation</h3>
          <p>Service for a Better Society</p>
          <p>Reg. No: 21 of 2022</p>
        </div>
        
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#mission">Mission</a></li>
            <li><a href="#education">Education</a></li>
            <li><a href="#sports">Sports</a></li>
            <li><a href="#environment">Environment</a></li>
            <li><a href="#social">Social Welfare</a></li>
          </ul>
        </div>
        
        <div className="footer-contact">
          <h3>Contact Us</h3>
          <ul>
            <li><FaMapMarkerAlt /> <span>Pramila Foundation, Hyderabad, Telangana</span></li>
            <li><FaPhone /> <span>+91 8099079118</span></li>
            <li><FaEnvelope /> <span>pramilafoun@gmail.com</span></li>
          </ul>
          
          <div className="social-icons">
            <a href="https://www.facebook.com/share/1Go3N4X2MV/" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
            <a href="https://x.com/pramilafoun?t=rELb4h2tsAo3wh1KlpBhNw&s=09" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
            <a href="https://www.instagram.com/pramilafoundtaion/#" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://www.linkedin.com/in/pramila-foundation-a7000a231/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          </div>
        </div>
        
        <div className="footer-newsletter">
          <h3>Join Our Newsletter</h3>
          <p>Stay updated with our latest news and events</p>
          <form className="newsletter-form">
            <input type="email" placeholder="Your Email Address" required />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Pramila Foundation. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;