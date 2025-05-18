import React from 'react';
import './FounderSection.css';
import founderImage from '../assets/founder.jpg';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

function FounderSection() {
  return (
    <section className="founder-section mission-bg">
      <div className="container">
        <div className="founder-content">
          <div className="founder-details">
            <h2>About Foundation</h2>
            <div className="underline"></div>
            <p className="foundation-intro">
          Established in 2015, Pramila Foundation is a registered non-profit dedicated to uplifting communities through sustainable and inclusive development. Guided by the motto, "Small Hands Can Change the World," the Foundation focuses on creating meaningful impact across education, sports, environment, and social welfare.
            </p>
            <div className="foundation-meta">
              <div className="meta-item">
                <span className="meta-label">Founded:</span>
                <span className="meta-value">2015</span>
              </div>
              <div className="meta-item">
                <span className="meta-label">Current Registration No:</span>
                <span className="meta-value">21 of 2022</span>
              </div>
              <div className="meta-item">
                <span className="meta-label">Motto:</span>
                <span className="meta-value">"Small Hands Can Change the World"</span>
              </div>
            </div>
            <p className="foundation-description">
              Under the visionary leadership of our Founder and President Dr. K. Mahesh, the Foundation has expanded from a local initiative to a dynamic organization impacting lives. Our dedicated team and volunteers work relentlessly to drive real change at the grassroots level.
            </p>
          </div>

          <div className="founder-image">
            <div className="image-wrapper">
              <img
                src={founderImage}
                alt="Founder and President of Pramila Foundation"
                className="founder-img"
              />
              <div className="social-overlay">
                <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">
                  <FaFacebookF />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
                  <FaInstagram />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                  <FaLinkedinIn />
                </a>
              </div>
            </div>
            <div className="founder-name-section">
              <h3 className="founder-name">Dr. K. Mahesh</h3>
              <p className="founder-title">Founder &amp; President</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FounderSection;
