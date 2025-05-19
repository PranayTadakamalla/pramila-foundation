import React from 'react';
import './Education.css';
import {
  FaGraduationCap,
  FaChalkboardTeacher,
  FaUserGraduate,
  FaLaptop,
  FaBook,
  FaHandHoldingHeart,
  FaHome
} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

function Education() {
  const navigate = useNavigate();

  const handleReturnHome = () => {
    navigate('/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="education" className="education">
      <div className="container">
        <div className="section-header">
          <h2>Education Initiatives</h2>
          <div className="underline"></div>
          <p className="section-intro">
            Empowering communities through quality education and skill development
          </p>
        </div>

        <div className="education-hero">
          <div className="hero-content">
            <h3>Transforming Lives Through Education</h3>
            <p>
              At Pramila Foundation, we believe that education is the most powerful tool for 
              transforming lives and communities. Our educational initiatives focus on providing 
              quality education, skill development, and career guidance to children and youth 
              from underprivileged backgrounds.
            </p>
            <div className="hero-stats">
              <div className="hero-stat">
                <span className="stat-number">500+</span>
                <span className="stat-label">Students Supported</span>
              </div>
              <div className="hero-stat">
                <span className="stat-number">15+</span>
                <span className="stat-label">Educational Programs</span>
              </div>
              <div className="hero-stat">
                <span className="stat-number">10+</span>
                <span className="stat-label">Training Centers</span>
              </div>
            </div>
          </div>
          <div className="hero-image">
            <div className="image-frame"></div>
          </div>
        </div>

        <div className="programs-section">
          <div className="section-title">
            <h3>Our Educational Programs</h3>
            <div className="title-underline"></div>
          </div>
          <div className="programs-grid">
            <div className="program-card">
              <div className="program-icon">
                <FaGraduationCap />
              </div>
              <h4>Academic Support</h4>
              <p>
                Supporting education of children and youth through materialistic support including 
                books, uniforms, scholarships, and digital learning tools to ensure continuous education.
              </p>
            </div>
            <div className="program-card">
              <div className="program-icon">
                <FaUserGraduate />
              </div>
              <h4>Career Development</h4>
              <p>
                Motivating depressed and encouraging talented youth for career development through 
                counseling, mentorship programs, and skill-building workshops.
              </p>
            </div>
            <div className="program-card">
              <div className="program-icon">
                <FaChalkboardTeacher />
              </div>
              <h4>Educational Institutions</h4>
              <p>
                Running schools, special schools, colleges, hostels, and residential homes to provide 
                quality education in underserved areas with focus on holistic development.
              </p>
            </div>
            <div className="program-card">
              <div className="program-icon">
                <FaHandHoldingHeart />
              </div>
              <h4>Women Empowerment</h4>
              <p>
                Assisting marginalized women and widows for sustainability through education, 
                vocational training, and entrepreneurship development programs.
              </p>
            </div>
          </div>
        </div>

        <div className="training-section">
          <div className="training-content">
            <div className="section-title">
              <h3>Specialized Training Programs</h3>
              <div className="title-underline"></div>
            </div>
            <p className="training-intro">
              We work at the block level to provide special training programs designed to enhance 
              skills and improve employability. Our training centers are equipped with modern 
              facilities and experienced trainers.
            </p>
            <div className="training-features">
              <div className="feature-item">
                <div className="feature-icon">
                  <FaLaptop />
                </div>
                <div className="feature-content">
                  <h4>Digital Literacy</h4>
                  <p>Computer skills, internet usage, and digital tools training</p>
                </div>
              </div>
              <div className="feature-item">
                <div className="feature-icon">
                  <FaBook />
                </div>
                <div className="feature-content">
                  <h4>Language Skills</h4>
                  <p>English language proficiency and communication skills</p>
                </div>
              </div>
              <div className="feature-item">
                <div className="feature-icon">
                  <FaChalkboardTeacher />
                </div>
                <div className="feature-content">
                  <h4>Vocational Training</h4>
                  <p>Hands-on skills in various trades and professions</p>
                </div>
              </div>
            </div>
          </div>
          <div className="training-image">
            <div className="image-frame"></div>
          </div>
        </div>

        <div className="exam-section">
          <div className="section-title">
            <h3>Competitive Exam Preparation</h3>
            <div className="title-underline"></div>
          </div>
          <p className="exam-intro">
            We conduct comprehensive coaching programs for various competitive examinations, 
            both online and offline, to help aspirants achieve their career goals.
          </p>
          <div className="exam-categories">
            <div className="category-column">
              <div className="exam-category">
                <h4>Government Jobs</h4>
                <ul className="exam-list">
                  <li>SSC (Staff Selection Commission)</li>
                  <li>RRB (Railway Recruitment Board)</li>
                  <li>TSPSC (Telangana Public Service Commission)</li>
                  <li>Police Exams</li>
                </ul>
              </div>
              <div className="exam-category">
                <h4>Banking Sector</h4>
                <ul className="exam-list">
                  <li>Bank PO Exams</li>
                  <li>Bank Clerk Exams</li>
                  <li>RBI Grade B</li>
                  <li>NABARD</li>
                </ul>
              </div>
            </div>
            <div className="category-column">
              <div className="exam-category">
                <h4>Teaching Profession</h4>
                <ul className="exam-list">
                  <li>TET (Teacher Eligibility Test)</li>
                  <li>TRB (Teacher Recruitment Board)</li>
                  <li>CTET (Central Teacher Eligibility Test)</li>
                  <li>B.Ed Entrance Exams</li>
                </ul>
              </div>
              <div className="exam-category">
                <h4>Other Exams</h4>
                <ul className="exam-list">
                  <li>Defense Services Exams</li>
                  <li>Insurance Sector Exams</li>
                  <li>State-level Competitive Exams</li>
                  <li>Entrance Exams for Higher Education</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="exam-features">
            <div className="exam-feature">
              <h5>Expert Faculty</h5>
              <p>Experienced teachers with proven track record</p>
            </div>
            <div className="exam-feature">
              <h5>Study Materials</h5>
              <p>Comprehensive notes and practice papers</p>
            </div>
            <div className="exam-feature">
              <h5>Mock Tests</h5>
              <p>Regular practice tests with detailed analysis</p>
            </div>
            <div className="exam-feature">
              <h5>Doubt Clearing</h5>
              <p>One-on-one sessions for personalized guidance</p>
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

export default Education;
