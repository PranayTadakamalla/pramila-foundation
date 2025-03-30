import React from 'react';
import './Programs.css';
import { FaGraduationCap, FaRunning, FaLeaf, FaHandsHelping, FaInfoCircle } from 'react-icons/fa';

function Programs() {
  return (
    <section id="programs" className="programs">
      <div className="container">
        <div className="section-header">
          <h2>Our Programs</h2>
          <div className="underline"></div>
          <p className="section-description">
            Pramila Foundation works across multiple domains to create lasting positive impact
          </p>
        </div>
        
        <div className="program-cards">
          <div id="education" className="program-card">
            <div className="program-icon">
              <FaGraduationCap />
            </div>
            <h3>Education</h3>
            <ul>
              <li>Supporting education of children and youth through materialistic support</li>
              <li>Motivating depressed and encouraging talented youth for career development</li>
              <li>Organizing awareness, sponsorship, and employment generation programs</li>
              <li>Assisting marginalized women and widows for sustainability</li>
              <li>Running schools, special schools, colleges, hostels, and residential homes</li>
            </ul>
            <a href="#education-details" className="program-link">Learn More</a>
          </div>
          
          <div id="sports" className="program-card">
            <div className="program-icon">
              <FaRunning />
            </div>
            <h3>Sports</h3>
            <ul>
              <li>Promoting physical education and sports through Yoga and fitness</li>
              <li>Encouraging talented sports persons at village, state, national, and international levels</li>
              <li>Improving basic infrastructure for sports like playgrounds, courts, indoor stadiums</li>
              <li>Organizing conferences, workshops, and symposiums</li>
              <li>Instituting online and offline journals</li>
              <li>Offering leadership training and developmental courses</li>
              <li>Organizing tournaments and summer camps at various levels</li>
            </ul>
            <a href="#sports-details" className="program-link">Learn More</a>
          </div>
          
          <div id="environment" className="program-card">
            <div className="program-icon">
              <FaLeaf />
            </div>
            <h3>Environment Protection</h3>
            <ul>
              <li>Reaching plans to farmers for development and implementation</li>
              <li>Encouraging organic agriculture among the community</li>
              <li>Promoting tree plantation for a green and healthy environment</li>
              <li>Creating awareness about cleanliness and safe disposal of plastic and waste</li>
              <li>Creating awareness on use of safe drinking water and related health issues</li>
            </ul>
            <a href="#environment-details" className="program-link">Learn More</a>
          </div>
          
          <div id="social" className="program-card">
            <div className="program-icon">
              <FaHandsHelping />
            </div>
            <h3>Social Welfare</h3>
            <ul>
              <li>Promoting social collaborations for general wellbeing by involving women and children</li>
              <li>Creating awareness & providing benefits to rural women on sanitary & hygiene issues</li>
              <li>Supporting underprivileged communities with essential resources</li>
              <li>Organizing health camps and awareness programs</li>
            </ul>
            <a href="#social-details" className="program-link">Learn More</a>
          </div>
          
          <div id="other" className="program-card">
            <div className="program-icon">
              <FaInfoCircle />
            </div>
            <h3>Information Center</h3>
            <ul>
              <li>Working at block level to provide special training</li>
              <li>Conducting online and offline exams for:</li>
              <li>SSC (Staff Selection Commission)</li>
              <li>RRB (Railway Recruitment Board)</li>
              <li>Bank Exams</li>
              <li>TSPSC (Telangana Public Service Commission)</li>
              <li>TET (Teacher Eligibility Test)</li>
              <li>TRB (Teacher Recruitment Board)</li>
              <li>Police Exams and more</li>
            </ul>
            <a href="#info-details" className="program-link">Learn More</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Programs;