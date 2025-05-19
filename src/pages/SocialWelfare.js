import React from 'react';
import './SocialWelfare.css';
import { FaLeaf, FaHandsHelping, FaTint, FaPeopleCarry, FaHeart, FaSeedling, FaHome } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom'; // ✅ Import useNavigate

function SocialWelfare() {
  const navigate = useNavigate(); // ✅ Initialize navigate

  const handleReturnHome = () => {
    navigate('/'); // Navigate to home route
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Smooth scroll to top
  };

  return (
    <section id="social-welfare" className="social-welfare">
      <div className="container">
        <div className="section-header">
          <h2>Social Welfare Initiatives</h2>
          <div className="underline"></div>
          <p className="section-intro">
            Towards a Better Tomorrow
          </p>
        </div>

        <div className="welfare-hero">
          <div className="hero-content">
            <h3>Quiet Progress</h3>
            <p>
              In quiet corners of the land, lives are touched by small, consistent efforts. 
              Our journey continues, reaching communities with purpose and humility.
            </p>
            <div className="hero-stats">
              <div className="hero-stat">
                <span className="stat-number">25+</span>
                <span className="stat-label">Places Reached</span>
              </div>
              <div className="hero-stat">
                <span className="stat-number">5000+</span>
                <span className="stat-label">Hearts Touched</span>
              </div>
            </div>
          </div>
          <div className="hero-image">
            <div className="image-frame plantation-only"></div>
          </div>
        </div>

        <div className="initiatives-section">
          <div className="section-title">
            <h3>Guiding Values</h3>
            <div className="title-underline"></div>
          </div>

          <div className="initiatives-grid">
            <div className="initiative-card">
              <div className="initiative-icon">
                <FaSeedling />
              </div>
              <h4>Green Beginnings</h4>
              <ul className="initiative-list">
                <li>Encouraging care for the soil and nature</li>
                <li>Practices rooted in harmony with the earth</li>
                <li>Supporting mindful cultivation</li>
                <li>Fostering natural cycles</li>
              </ul>
            </div>

            <div className="initiative-card">
              <div className="initiative-icon">
                <FaLeaf />
              </div>
              <h4>Quiet Green</h4>
              <ul className="initiative-list">
                <li>Subtle steps towards cleaner spaces</li>
                <li>Respect for what surrounds us</li>
                <li>Living light with less waste</li>
                <li>Planting hope where it matters</li>
              </ul>
            </div>

            <div className="initiative-card">
              <div className="initiative-icon">
                <FaTint />
              </div>
              <h4>Flowing Wellbeing</h4>
              <ul className="initiative-list">
                <li>Preserving what flows beneath and around</li>
                <li>Simple acts ensuring clean drops</li>
                <li>Maintaining balance in usage</li>
                <li>Quiet guardianship of the essential</li>
              </ul>
            </div>

            <div className="initiative-card">
              <div className="initiative-icon">
                <FaPeopleCarry />
              </div>
              <h4>Community Threads</h4>
              <ul className="initiative-list">
                <li>Weaving together many lives gently</li>
                <li>Listening before leading</li>
                <li>Encouraging hands to support one another</li>
                <li>Light touches that uplift</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="women-health-section">
          <div className="women-health-content">
            <div className="section-title left-aligned">
              <h3>Quiet Care</h3>
              <div className="title-underline left-aligned"></div>
            </div>
            <p className="women-health-intro">
              In hushed efforts and soft voices, we share comfort, dignity, and care—especially where it's needed most.
            </p>

            <div className="women-health-features">
              <div className="feature-item">
                <div className="feature-icon">
                  <FaHeart />
                </div>
                <div className="feature-content">
                  <h4>Awareness</h4>
                  <p>Speaking about wellbeing where words are rarely heard</p>
                </div>
              </div>

              <div className="feature-item">
                <div className="feature-icon">
                  <FaHandsHelping />
                </div>
                <div className="feature-content">
                  <h4>Support</h4>
                  <p>Small gestures, shared wisdom, quiet impact</p>
                </div>
              </div>

              <div className="feature-item">
                <div className="feature-icon">
                  <FaPeopleCarry />
                </div>
                <div className="feature-content">
                  <h4>Engagement</h4>
                  <p>Inviting community voices to lead softly from within</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="home-button-container">
          <button className="home-button" onClick={handleReturnHome}>
            <FaHome className="button-icon" /> Back to Home
          </button>
        </div>
      </div>
    </section>
  );
}

export default SocialWelfare;
