import React from 'react';
import './About.css';
import { FaHome, FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import founderImg from '../assets/founder.jpg';
import generalSecretaryImg from '../assets/general-secretary.jpg';
import treasurerImg from '../assets/treasurer.jpg';

function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-header">
          <h2>About Us</h2>
          <div className="underline"></div>
        </div>
        <div className="about-content">
          <div className="about-stats">
            <div className="stat-container">
              <div className="stat-header">
                <h3>Foundation Facts</h3>
                <p>Key information about Pramila Foundation</p>
              </div>
              <div className="foundation-meta">
                <div className="meta-item">
                  <span className="meta-label">Established:</span>
                  <span className="meta-value">2015</span>
                </div>
                <div className="meta-item">
                  <span className="meta-label">Registration No:</span>
                  <span className="meta-value">21 of 2022</span>
                </div>
                <div className="meta-item">
                  <span className="meta-label">Motto:</span>
                  <span className="meta-value">"Small Hands Can Change the World"</span>
                </div>
                <div className="meta-item">
                  <span className="meta-label">Districts Covered:</span>
                  <span className="meta-value">15</span>
                </div>
                <div className="meta-item">
                  <span className="meta-label">Partners:</span>
                  <span className="meta-value">20+</span>
                </div>
                <div className="meta-item">
                  <span className="meta-label">Team Members:</span>
                  <span className="meta-value">30+</span>
                </div>
              </div>
              <div className="impact-numbers">
                <div className="impact-item">
                  <div className="impact-number">1000+</div>
                  <div className="impact-label">Lives Impacted</div>
                </div>
                <div className="impact-item">
                  <div className="impact-number">50+</div>
                  <div className="impact-label">Projects Completed</div>
                </div>
                <div className="impact-item">
                  <div className="impact-number">100+</div>
                  <div className="impact-label">Volunteers</div>
                </div>
              </div>
            </div>
          </div>
          <div className="about-text">
            <div className="about-intro">
              <h3>Our Story</h3>
              <p>
                Pramila Foundation was established in 2015 with a vision to create positive change 
                in communities across the region. What began as a small initiative by a group of 
                passionate individuals has grown into a recognized organization making significant 
                impact in education, sports, environmental protection, and social welfare.
              </p>
              <p>
                Over the years, we have developed numerous programs that address critical needs 
                in underserved communities. Our approach combines grassroots engagement with 
                strategic partnerships to create sustainable solutions that empower individuals 
                and strengthen communities.
              </p>
              <p>
                Under the visionary leadership of our committee members, the Foundation has expanded 
                from a local initiative to a dynamic organization impacting lives. Our dedicated team 
                and volunteers work relentlessly to drive real change at the grassroots level.
              </p>
            </div>
          </div>
        </div>
        <div className="committee-section">
          <h3>Our Committee</h3>
          <div className="underline committee-underline"></div>
          <div className="committee-members">
            <div className="member-card">
              <div className="image-wrapper">
                <img src={founderImg} alt="Dr. K. Mahesh" className="member-avatar" />
                <div className="social-overlay">
                  <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                    <FaFacebookF />
                  </a>
                  <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                    <FaInstagram />
                  </a>
                  <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <FaLinkedinIn />
                  </a>
                </div>
              </div>
              <div className="member-info">
                <h4>Dr. K. Mahesh</h4>
                <p className="member-position">Founder & President</p>
                <p className="member-desc">
                  Leading the foundation with over 10 years of experience in social development
                </p>
              </div>
            </div>
            <div className="member-card">
              <div className="image-wrapper">
                <img src={generalSecretaryImg} alt="Gavinolla Ram Reddy" className="member-avatar" />
                <div className="social-overlay">
                  <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                    <FaFacebookF />
                  </a>
                  <a href="https://instagram.com/" aria-label="Instagram">
                    <FaInstagram />
                  </a>
                  <a href="https://linkedIn.com/" aria-label="LinkedIn">
                    <FaLinkedinIn />
                  </a>
                </div>
              </div>
              <div className="member-info">
                <h4>Gavinolla Ram Reddy</h4>
                <p className="member-position">General Secretary</p>
                <p className="member-desc">
                  Overseeing program implementation and strategic partnerships
                </p>
              </div>
            </div>
            <div className="member-card">
              <div className="image-wrapper">
                <img src={treasurerImg} alt="K. Srinivas" className="member-avatar" />
                <div className="social-overlay">
                  <a href="https://facebook.com/" aria-label="Facebook">
                    <FaFacebookF />
                  </a>
                  <a href="https://instagram.com/" aria-label="Instagram">
                    <FaInstagram />
                  </a>
                  <a href="https://linkedIn.com/" aria-label="LinkedIn">
                    <FaLinkedinIn />
                  </a>
                </div>
              </div>
              <div className="member-info">
                <h4>K. Srinivas</h4>
                <p className="member-position">Treasurer</p>
                <p className="member-desc">
                  Managing financial resources and ensuring transparency
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="about-highlights">
          <div className="highlight-section">
            <div className="highlight-header">
              <h3>Our Focus Areas</h3>
              <div className="underline highlight-underline"></div>
            </div>
            <div className="highlight-content">
              
              <div className="focus-area">
                <div className="focus-icon sports"></div>
                <h4>Sports</h4>
                <p>Promoting physical fitness and sports development among youth</p>
              </div>
              <div className="focus-area">
                <div className="focus-icon environment"></div>
                <h4>Environment</h4>
                <p>Creating awareness and implementing sustainable environmental practices</p>
              </div>
              <div className="focus-area">
                <div className="focus-icon welfare"></div>
                <h4>Social Welfare</h4>
                <p>Supporting vulnerable communities through various welfare programs</p>
              </div>
            </div>
          </div>
          <div className="highlight-section">
            <div className="highlight-header">
              <h3>Our Philosophy</h3>
              <div className="underline highlight-underline"></div>
            </div>
            <div className="philosophy-content">
              <div className="philosophy-quote">
                <blockquote>
                  "Small Hands Can Change the World"
                </blockquote>
              </div>
              <p className="philosophy-text">
                We believe that positive change begins with small actions. By empowering individuals 
                and communities with the right tools and support, we can create a ripple effect that 
                leads to significant transformation. Our work is guided by principles of inclusivity, 
                sustainability, and community participation.
              </p>
              <p className="philosophy-text">
                The Pramila Foundation continues to grow and expand its reach to more communities in need. 
                Our dedicated team of staff and volunteers work tirelessly to implement programs that create 
                meaningful change in people's lives. We believe that by working together, we can build a 
                more equitable and sustainable future for all.
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

export default About;
