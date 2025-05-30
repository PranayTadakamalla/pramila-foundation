import React from 'react';
import './Committee.css';
import { FaHome, FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import founderImg from '../assets/founder.jpg';
import generalSecretaryImg from '../assets/general-secretary.jpg';
import treasurerImg from '../assets/treasurer.jpg';

function Committee() {
  return (
    <section id="committee" className="committee">
      <div className="container">
        <div className="section-header">
          <h2>Our Committee</h2>
          <div className="underline"></div>
          <p className="committee-intro">
            Meet the dedicated leaders who drive our mission forward with passion, 
            expertise, and unwavering commitment to creating positive change in our communities.
          </p>
        </div>

        <div className="committee-content">
          <div className="committee-stats">
            <div className="stat-container">
              <div className="stat-header">
                <h3>Leadership Overview</h3>
                <p>Key information about our committee structure</p>
              </div>
              <div className="leadership-meta">
                <div className="meta-item">
                  <span className="meta-label">Committee Members:</span>
                  <span className="meta-value">3 Core Leaders</span>
                </div>
                <div className="meta-item">
                  <span className="meta-label">Combined Experience:</span>
                  <span className="meta-value">25+ Years</span>
                </div>
                <div className="meta-item">
                  <span className="meta-label">Leadership Structure:</span>
                  <span className="meta-value">Democratic</span>
                </div>
                <div className="meta-item">
                  <span className="meta-label">Meeting Frequency:</span>
                  <span className="meta-value">Monthly</span>
                </div>
              </div>
              <div className="leadership-impact">
                <div className="impact-item">
                  <div className="impact-number">100%</div>
                  <div className="impact-label">Transparency</div>
                </div>
                <div className="impact-item">
                  <div className="impact-number">15+</div>
                  <div className="impact-label">Districts</div>
                </div>
                <div className="impact-item">
                  <div className="impact-number">1000+</div>
                  <div className="impact-label">Lives Impacted</div>
                </div>
              </div>
            </div>
          </div>

          <div className="committee-description">
            <div className="description-content">
              <h3>Leadership Philosophy</h3>
              <p>
                Our committee operates on the principles of transparency, accountability, and 
                collaborative decision-making. Each member brings unique expertise and perspective 
                to ensure comprehensive oversight of our programs and initiatives.
              </p>
              <p>
                The leadership team works closely with volunteers, partner organizations, and 
                beneficiaries to create sustainable impact across our four core focus areas: 
                Education, Sports, Environmental Protection, and Social Welfare.
              </p>
              <p>
                Through regular meetings, strategic planning sessions, and community engagement, 
                our committee ensures that every decision aligns with our mission of creating 
                positive change at the grassroots level.
              </p>
            </div>
          </div>
        </div>

        <div className="committee-members-section">
          <h3>Meet Our Leaders</h3>
          <div className="underline committee-underline"></div>
          <div className="committee-members">
            <div className="member-card">
              <div className="image-wrapper">
                <img src={founderImg} alt="Dr. K. Mahesh" className="member-avatar" />
                <div className="social-overlay">
                  <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer">
                    <FaFacebookF />
                  </a>
                  <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer">
                    <FaInstagram />
                  </a>
                  <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedinIn />
                  </a>
                </div>
              </div>
              <div className="member-info">
                <h4>Dr. K. Mahesh</h4>
                <p className="member-position">Founder & President</p>
                <p className="member-desc">
                  Leading the foundation with over 10 years of experience in social development. 
                  Dr. Mahesh brings visionary leadership and strategic direction to all our initiatives, 
                  ensuring sustainable impact across communities.
                </p>
                <div className="member-achievements">
                  <span className="achievement-tag">Social Development Expert</span>
                  <span className="achievement-tag">Community Leader</span>
                </div>
              </div>
            </div>

            <div className="member-card">
              <div className="image-wrapper">
                <img src={generalSecretaryImg} alt="Gavinolla Ram Reddy" className="member-avatar" />
                <div className="social-overlay">
                  <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer">
                    <FaFacebookF />
                  </a>
                  <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer">
                    <FaInstagram />
                  </a>
                  <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedinIn />
                  </a>
                </div>
              </div>
              <div className="member-info">
                <h4>Gavinolla Ram Reddy</h4>
                <p className="member-position">General Secretary</p>
                <p className="member-desc">
                  Overseeing program implementation and strategic partnerships across all our focus areas. 
                  Ram Reddy coordinates with various stakeholders to ensure effective delivery of our 
                  educational and welfare programs.
                </p>
                <div className="member-achievements">
                  <span className="achievement-tag">Program Coordinator</span>
                  <span className="achievement-tag">Partnership Builder</span>
                </div>
              </div>
            </div>

            <div className="member-card">
              <div className="image-wrapper">
                <img src={treasurerImg} alt="K. Srinivas" className="member-avatar" />
                <div className="social-overlay">
                  <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer">
                    <FaFacebookF />
                  </a>
                  <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer">
                    <FaInstagram />
                  </a>
                  <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedinIn />
                  </a>
                </div>
              </div>
              <div className="member-info">
                <h4>K. Srinivas</h4>
                <p className="member-position">Treasurer</p>
                <p className="member-desc">
                  Managing financial resources and ensuring transparency in all monetary transactions. 
                  Srinivas maintains detailed financial records and oversees budget allocation for 
                  various programs and initiatives.
                </p>
                <div className="member-achievements">
                  <span className="achievement-tag">Financial Expert</span>
                  <span className="achievement-tag">Transparency Advocate</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="committee-governance">
          <div className="governance-section">
            <div className="governance-header">
              <h3>Governance Structure</h3>
              <div className="underline governance-underline"></div>
            </div>
            <div className="governance-content">
              <div className="governance-item">
                <div className="governance-icon president"></div>
                <h4>President</h4>
                <p>Provides strategic leadership and represents the foundation in external relations</p>
              </div>
              <div className="governance-item">
                <div className="governance-icon secretary"></div>
                <h4>General Secretary</h4>
                <p>Coordinates operations and manages program implementation across all areas</p>
              </div>
              <div className="governance-item">
                <div className="governance-icon treasurer"></div>
                <h4>Treasurer</h4>
                <p>Oversees financial management and ensures transparent resource allocation</p>
              </div>
            </div>
          </div>

          <div className="commitment-section">
            <div className="commitment-header">
              <h3>Our Commitment</h3>
              <div className="underline commitment-underline"></div>
            </div>
            <div className="commitment-content">
              <div className="commitment-quote">
                <blockquote>
                  "Together, we are committed to transparent leadership and sustainable impact"
                </blockquote>
              </div>
              <p className="commitment-text">
                Our committee members volunteer their time and expertise to ensure that every rupee 
                donated and every program implemented creates maximum positive impact in our communities. 
                We believe in leading by example and maintaining the highest standards of integrity.
              </p>
              <p className="commitment-text">
                Through collaborative decision-making and regular community engagement, we ensure that 
                our programs remain relevant, effective, and aligned with the actual needs of the 
                people we serve.
              </p>
            </div>
          </div>
        </div>

        <div className="home-button-container">
          <button className="home-button" onClick={() => window.location.href = '/'}>
            <FaHome className="button-icon" /> Back to Home
          </button>
        </div>
      </div>
    </section>
  );
}

export default Committee;
