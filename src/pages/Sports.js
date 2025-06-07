"use client"
import "./Sports.css"
import {
  FaRunning,
  FaMedal,
  FaUsers,
  FaHeart,
  FaHome,
  FaYoutube,
  FaPlay,
  FaExternalLinkAlt,
  FaGraduationCap,
  FaStar,
  FaHandshake,
  FaBrain,
  FaShieldAlt,
} from "react-icons/fa"
import { useNavigate } from "react-router-dom"

function Sports() {
  const navigate = useNavigate()

  const handleReturnHome = () => {
    navigate("/")
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const handleYouTubeClick = () => {
    window.open("https://youtube.com/@physicaleducationstudyacad3232?si=Za0MHda8ydA9PxGM", "_blank")
  }

  return (
    <section id="sports" className="sports">
      <div className="container">
        <div className="section-header">
          <h2>Sports Initiatives</h2>
          <div className="underline"></div>
          <p className="section-intro">
            Building character, fitness, and excellence through sports and physical education
          </p>
        </div>

        <div className="sports-hero">
          <div className="hero-content">
            <h3>Empowering Youth Through Sports</h3>
            <p>
              At Pramila Foundation, we believe sports are essential for holistic development. Our sports initiatives
              focus on promoting physical fitness, mental well-being, teamwork, and leadership skills among youth from
              all backgrounds.
            </p>
            <div className="hero-stats">
              <div className="hero-stat">
                <span className="stat-number">300+</span>
                <span className="stat-label">Athletes Trained</span>
              </div>
              <div className="hero-stat">
                <span className="stat-number">12+</span>
                <span className="stat-label">Sports Programs</span>
              </div>
              <div className="hero-stat">
                <span className="stat-number">8+</span>
                <span className="stat-label">Training Centers</span>
              </div>
            </div>
          </div>
          <div className="hero-visual">
            <div className="development-metaphor">
              <div className="metaphor-card">
                <div className="metaphor-icon">
                  <FaStar />
                </div>
                <h4>Excellence</h4>
                <p>Striving for personal best</p>
              </div>
              <div className="metaphor-card">
                <div className="metaphor-icon">
                  <FaUsers />
                </div>
                <h4>Teamwork</h4>
                <p>Building stronger communities</p>
              </div>
              <div className="metaphor-card">
                <div className="metaphor-icon">
                  <FaBrain />
                </div>
                <h4>Mental Strength</h4>
                <p>Developing resilience</p>
              </div>
              <div className="metaphor-card">
                <div className="metaphor-icon">
                  <FaHeart />
                </div>
                <h4>Wellness</h4>
                <p>Promoting healthy living</p>
              </div>
              <div className="metaphor-card">
                <div className="metaphor-icon">
                  <FaHandshake />
                </div>
                <h4>Leadership</h4>
                <p>Nurturing future leaders</p>
              </div>
              <div className="metaphor-card">
                <div className="metaphor-icon">
                  <FaShieldAlt />
                </div>
                <h4>Discipline</h4>
                <p>Building character</p>
              </div>
            </div>
          </div>
        </div>

        <div className="programs-section">
          <div className="section-title">
            <h3>Our Sports Programs</h3>
            <div className="title-underline"></div>
          </div>
          <div className="programs-grid">
            <div className="program-card">
              <div className="program-icon">
                <FaRunning />
              </div>
              <h4>Athletic Training</h4>
              <p>
                Comprehensive athletic training programs focusing on track and field events, endurance building, and
                competitive sports preparation for students of all skill levels.
              </p>
            </div>
            <div className="program-card">
              <div className="program-icon">
                <FaUsers />
              </div>
              <h4>Team Sports</h4>
              <p>
                Organized team sports including football, basketball, volleyball, and cricket to develop teamwork,
                leadership, and strategic thinking among participants.
              </p>
            </div>
            <div className="program-card">
              <div className="program-icon">
                <FaMedal />
              </div>
              <h4>Competitive Training</h4>
              <p>
                Specialized coaching for competitive sports, preparing athletes for district, state, and national level
                competitions with professional guidance and support.
              </p>
            </div>
            <div className="program-card">
              <div className="program-icon">
                <FaHeart />
              </div>
              <h4>Fitness & Wellness</h4>
              <p>
                Holistic fitness programs combining physical exercise, yoga, meditation, and nutrition guidance to
                promote overall health and well-being.
              </p>
            </div>
          </div>
        </div>

        <div className="youtube-section">
          <div className="youtube-container">
            <div className="youtube-header">
              <div className="youtube-logo">
                <FaYoutube />
              </div>
              <div className="youtube-title">
                <h3>Physical Education Study Academy</h3>
                <p>Helping Students Excel in Competitive Sports Exams</p>
              </div>
            </div>
            <div className="youtube-content">
              <div className="youtube-info">
                <h4>🎯 Competitive Exam Preparation Through Sports</h4>
                <p>
                  Our YouTube channel "Physical Education Study Academy" provides comprehensive guidance for students
                  preparing for competitive exams in physical education and sports. We offer:
                </p>
                <div className="youtube-features">
                  <div className="youtube-feature">
                    <span className="feature-emoji">📚</span>
                    <span>Complete syllabus coverage for PE competitive exams</span>
                  </div>
                  <div className="youtube-feature">
                    <span className="feature-emoji">🎥</span>
                    <span>Video tutorials on sports techniques and theory</span>
                  </div>
                </div>
              </div>
              <div className="youtube-cta">
                <div className="youtube-stats">
                  <div className="youtube-stat">
                    <FaPlay />
                    <span>30+ Videos</span>
                  </div>
                  <div className="youtube-stat">
                    <FaUsers />
                    <span>3K+ Subscribers</span>
                  </div>
                  <div className="youtube-stat">
                    <FaGraduationCap />
                    <span>5000+ Students Helped</span>
                  </div>
                </div>
                <button className="youtube-button" onClick={handleYouTubeClick}>
                  <FaYoutube />
                  Visit Our YouTube Channel
                  <FaExternalLinkAlt />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="exam-prep-section">
          <div className="section-title">
            <h3>Sports Competitive Exam Preparation</h3>
            <div className="title-underline"></div>
          </div>
          <p className="exam-intro">
            We provide specialized coaching for various sports and physical education competitive examinations, helping
            students achieve their career goals in the sports industry.
          </p>
          <div className="exam-categories">
            <div className="category-column">
              <div className="exam-category">
                <h4>🏃‍♂️ Physical Education Teacher Exams</h4>
                <ul className="exam-list">
                  <li>TET Physical Education</li>
                  <li>CTET Physical Education</li>
                  <li>State PET Exams</li>
                  <li>KVS/NVS PE Teacher</li>
                  <li>DSSSB PE Teacher</li>
                  <li>University PE Lecturer</li>
                </ul>
              </div>
            </div>
            <div className="category-column">
              <div className="exam-category">
                <h4>🎯 Defense Sports Quota</h4>
                <ul className="exam-list">
                  <li>Army Sports Quota</li>
                  <li>Navy Sports Quota</li>
                  <li>Air Force Sports Quota</li>
                  <li>Police Sports Quota</li>
                  <li>CRPF Sports Quota</li>
                  <li>BSF Sports Quota</li>
                </ul>
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
  )
}

export default Sports
