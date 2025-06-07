"use client"
import "./SocialWelfare.css"
import {
  FaHandHoldingHeart,
  FaUsers,
  FaFemale,
  FaHeart,
  FaHome,
  FaHandsHelping,
  FaShieldAlt,
  FaGift,
  FaUserFriends,
  FaMedkit,
  FaGraduationCap,
} from "react-icons/fa"
import { useNavigate } from "react-router-dom"

function SocialWelfare() {
  const navigate = useNavigate()

  const handleReturnHome = () => {
    navigate("/")
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <section id="social-welfare" className="social-welfare">
      <div className="container">
        <div className="section-header">
          <h2>Social Welfare Initiatives</h2>
          <div className="underline"></div>
          <p className="section-intro">Empowering communities through collaborative support and essential resources</p>
        </div>

        <div className="welfare-hero">
          <div className="hero-content">
            <h3>Building Stronger Communities Together</h3>
            <p>
              At Pramila Foundation, we believe in the power of social collaboration to create positive change. Our
              social welfare initiatives focus on empowering women and children, promoting health and hygiene awareness,
              and supporting underprivileged communities with essential resources for their wellbeing and development.
            </p>
            <div className="hero-stats">
              <div className="hero-stat">
                <span className="stat-number">500+</span>
                <span className="stat-label">Women Empowered</span>
              </div>
              <div className="hero-stat">
                <span className="stat-number">300+</span>
                <span className="stat-label">Children Supported</span>
              </div>
              <div className="hero-stat">
                <span className="stat-number">20+</span>
                <span className="stat-label">Community Programs</span>
              </div>
            </div>
          </div>
          <div className="hero-visual">
            <div className="welfare-metaphor">
              <div className="metaphor-card">
                <div className="metaphor-icon">
                  <FaUsers />
                </div>
                <h4>Collaboration</h4>
                <p>Working together for change</p>
              </div>
              <div className="metaphor-card">
                <div className="metaphor-icon">
                  <FaHeart />
                </div>
                <h4>Compassion</h4>
                <p>Caring for those in need</p>
              </div>
              <div className="metaphor-card">
                <div className="metaphor-icon">
                  <FaShieldAlt />
                </div>
                <h4>Protection</h4>
                <p>Safeguarding vulnerable groups</p>
              </div>
              <div className="metaphor-card">
                <div className="metaphor-icon">
                  <FaHandsHelping />
                </div>
                <h4>Support</h4>
                <p>Providing essential assistance</p>
              </div>
              <div className="metaphor-card">
                <div className="metaphor-icon">
                  <FaGraduationCap />
                </div>
                <h4>Education</h4>
                <p>Spreading awareness and knowledge</p>
              </div>
              <div className="metaphor-card">
                <div className="metaphor-icon">
                  <FaGift />
                </div>
                <h4>Resources</h4>
                <p>Essential support for communities</p>
              </div>
            </div>
          </div>
        </div>

        <div className="programs-section">
          <div className="section-title">
            <h3>Our Social Welfare Programs</h3>
            <div className="title-underline"></div>
          </div>
          <div className="programs-grid">
            <div className="program-card">
              <div className="program-icon">
                <FaUserFriends />
              </div>
              <h4>Social Collaboration for Wellbeing</h4>
              <p>
                Promoting social collaborations for general wellbeing by involving women and children in community
                development activities, creating support networks, and fostering inclusive participation in social
                initiatives.
              </p>
            </div>
            <div className="program-card">
              <div className="program-icon">
                <FaFemale />
              </div>
              <h4>Women's Health & Hygiene Awareness</h4>
              <p>
                Creating awareness and providing benefits to rural women on sanitary and hygiene issues through
                educational workshops, distribution of hygiene products, and promoting healthy practices in communities.
              </p>
            </div>
            <div className="program-card">
              <div className="program-icon">
                <FaHandHoldingHeart />
              </div>
              <h4>Community Resource Support</h4>
              <p>
                Supporting underprivileged communities with essential resources including food, clothing, educational
                materials, healthcare support, and other necessities to improve their quality of life and opportunities.
              </p>
            </div>
          </div>
        </div>

        <div className="initiatives-section">
          <div className="section-title">
            <h3>Key Focus Areas</h3>
            <div className="title-underline"></div>
          </div>
          <div className="initiatives-grid">
            <div className="initiative-card">
              <div className="initiative-header">
                <div className="initiative-icon">
                  <FaUsers />
                </div>
                <h4>Women & Children Empowerment</h4>
              </div>
              <div className="initiative-content">
                <ul>
                  <li>Skill development workshops for women</li>
                  <li>Educational support for children</li>
                  <li>Health and nutrition programs</li>
                  <li>Leadership training initiatives</li>
                  <li>Community participation programs</li>
                </ul>
              </div>
            </div>
            <div className="initiative-card">
              <div className="initiative-header">
                <div className="initiative-icon">
                  <FaMedkit />
                </div>
                <h4>Health & Hygiene Awareness</h4>
              </div>
              <div className="initiative-content">
                <ul>
                  <li>Sanitary awareness campaigns</li>
                  <li>Hygiene product distribution</li>
                  <li>Health education workshops</li>
                  <li>Menstrual hygiene management</li>
                  <li>Community health programs</li>
                </ul>
              </div>
            </div>
            <div className="initiative-card">
              <div className="initiative-header">
                <div className="initiative-icon">
                  <FaGift />
                </div>
                <h4>Essential Resource Distribution</h4>
              </div>
              <div className="initiative-content">
                <ul>
                  <li>Food and nutrition support</li>
                  <li>Clothing and basic necessities</li>
                  <li>Educational materials and supplies</li>
                  <li>Healthcare assistance</li>
                  <li>Emergency relief support</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="impact-section">
          <div className="section-title">
            <h3>Community Impact</h3>
            <div className="title-underline"></div>
          </div>
          <div className="impact-grid">
            <div className="impact-card">
              <div className="impact-emoji">👥</div>
              <h4>Community Collaboration</h4>
              <p>
                Successfully established strong social networks involving women and children in community development,
                creating lasting partnerships and collaborative initiatives for sustainable wellbeing.
              </p>
              <div className="impact-stat">
                <span className="stat-number">25+</span>
                <span className="stat-label">Active Collaborations</span>
              </div>
            </div>
            <div className="impact-card">
              <div className="impact-emoji">🌸</div>
              <h4>Women's Health Awareness</h4>
              <p>
                Reached hundreds of rural women with essential health and hygiene education, providing sanitary products
                and creating awareness about women's health and hygiene practices.
              </p>
              <div className="impact-stat">
                <span className="stat-number">500+</span>
                <span className="stat-label">Women Reached</span>
              </div>
            </div>
            <div className="impact-card">
              <div className="impact-emoji">🎁</div>
              <h4>Resource Distribution</h4>
              <p>
                Provided essential resources to numerous underprivileged families and communities, including food,
                clothing, educational materials, and healthcare support to improve their living conditions.
              </p>
              <div className="impact-stat">
                <span className="stat-number">1000+</span>
                <span className="stat-label">People Benefited</span>
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

export default SocialWelfare
