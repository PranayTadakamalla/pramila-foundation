import React from 'react';
import './Mission.css';
import { FaHandHoldingHeart, FaLightbulb, FaUsers, FaGlobe } from 'react-icons/fa';
import FounderSection from './FounderSection';

function Mission() {
  return (
    <>
      <FounderSection />

      <section id="mission" className="mission">
        <div className="container">
          <div className="section-header">
            <h2>Vision & Mission</h2>
            <div className="underline"></div>
          </div>
          
          <div className="mission-content">
            <div className="mission-text">
              <div className="mission-intro">
                <h3>Our Purpose</h3>
                <p>
                  Pramila Foundation is committed to creating a better society through sustainable development, 
                  education, sports, environmental protection, and social welfare. We believe in empowering 
                  communities and transforming lives through our various initiatives.
                </p>
                <p>
                  Our vision is to create a world where every individual has access to quality education, 
                  sports facilities, a clean environment, and social support systems. We strive to make 
                  a positive impact on society by addressing key challenges and providing sustainable solutions.
                </p>
              </div>
              
              <div className="mission-values">
                <div className="value-item">
                  <div className="value-icon"><FaHandHoldingHeart /></div>
                  <div className="value-content">
                    <h4>Compassion</h4>
                    <p>We approach our work with empathy and understanding of community needs</p>
                  </div>
                </div>
                
                <div className="value-item">
                  <div className="value-icon"><FaLightbulb /></div>
                  <div className="value-content">
                    <h4>Innovation</h4>
                    <p>We seek creative solutions to address complex social challenges</p>
                  </div>
                </div>
                
                <div className="value-item">
                  <div className="value-icon"><FaUsers /></div>
                  <div className="value-content">
                    <h4>Collaboration</h4>
                    <p>We work together with communities and partners to achieve shared goals</p>
                  </div>
                </div>
                
                <div className="value-item">
                  <div className="value-icon"><FaGlobe /></div>
                  <div className="value-content">
                    <h4>Sustainability</h4>
                    <p>We develop programs that create lasting positive impact</p>
                  </div>
                </div>
              </div>
              
              <div className="mission-quote">
                <blockquote>
                  "Small Hands Can Change the World"
                </blockquote>
              </div>
            </div>
            
            <div className="mission-stats">
              <div className="stat-item">
                <div className="stat-number">4</div>
                <div className="stat-label">Focus Areas</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">100+</div>
                <div className="stat-label">Volunteers</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">1000+</div>
                <div className="stat-label">Lives Impacted</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">50+</div>
                <div className="stat-label">Projects</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Mission;