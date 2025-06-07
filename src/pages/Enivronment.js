"use client"
import "./Environment.css"
import {
  FaLeaf,
  FaSeedling,
  FaHome,
  FaTree,
  FaUsers,
  FaHandHoldingHeart,
  FaGlobe,
  FaSun,
  FaWater,
} from "react-icons/fa"
import { useNavigate } from "react-router-dom"
import Image1 from "../assets/Image1.jpg"
import Image2 from "../assets/Image2.jpg"
import Image3 from "../assets/Image3.jpg"
import Image4 from "../assets/Image4.jpg"
import Image7 from "../assets/Image7.jpg"
import Image8 from "../assets/Image8.jpg"

function Environment() {
  const navigate = useNavigate()

  const handleReturnHome = () => {
    navigate("/")
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <section id="environment" className="environment">
      <div className="container">
        <div className="section-header">
          <h2>Environmental Initiatives</h2>
          <div className="underline"></div>
          <p className="section-intro">
            Creating a greener future through tree plantation and environmental conservation
          </p>
        </div>

        <div className="environment-hero">
          <div className="hero-content">
            <h3>Growing Green Communities</h3>
            <p>
              At Pramila Foundation, we are committed to environmental conservation through tree plantation drives and
              green initiatives. Our focus is on creating sustainable communities by planting native trees, educating
              people about environmental protection, and building a greener future for generations to come.
            </p>
            <div className="hero-stats">
              <div className="hero-stat">
                <span className="stat-number">50+</span>
                <span className="stat-label">Trees Planted</span>
              </div>
              <div className="hero-stat">
                <span className="stat-number">25+</span>
                <span className="stat-label">Plantation Drives</span>
              </div>
              <div className="hero-stat">
                <span className="stat-number">15+</span>
                <span className="stat-label">Green Locations</span>
              </div>
            </div>
          </div>
          <div className="hero-visual">
            <div className="environmental-metaphor">
              <div className="metaphor-card">
                <div className="metaphor-icon">
                  <FaTree />
                </div>
                <h4>Growth</h4>
                <p>Nurturing life and nature</p>
              </div>
              <div className="metaphor-card">
                <div className="metaphor-icon">
                  <FaGlobe />
                </div>
                <h4>Sustainability</h4>
                <p>Building for the future</p>
              </div>
              <div className="metaphor-card">
                <div className="metaphor-icon">
                  <FaUsers />
                </div>
                <h4>Community</h4>
                <p>Working together for nature</p>
              </div>
              <div className="metaphor-card">
                <div className="metaphor-icon">
                  <FaSun />
                </div>
                <h4>Clean Air</h4>
                <p>Improving air quality</p>
              </div>
              <div className="metaphor-card">
                <div className="metaphor-icon">
                  <FaWater />
                </div>
                <h4>Water Conservation</h4>
                <p>Protecting water resources</p>
              </div>
              <div className="metaphor-card">
                <div className="metaphor-icon">
                  <FaHandHoldingHeart />
                </div>
                <h4>Care</h4>
                <p>Environmental stewardship</p>
              </div>
            </div>
          </div>
        </div>

        <div className="programs-section">
          <div className="section-title">
            <h3>Our Plantation Programs</h3>
            <div className="title-underline"></div>
          </div>
          <div className="programs-grid">
            <div className="program-card">
              <div className="program-icon">
                <FaSeedling />
              </div>
              <h4>Community Tree Plantation</h4>
              <p>
                Organizing large-scale tree plantation drives in communities, schools, and public spaces with active
                participation from local residents and students to create green neighborhoods.
              </p>
            </div>
            <div className="program-card">
              <div className="program-icon">
                <FaTree />
              </div>
              <h4>Native Species Cultivation</h4>
              <p>
                Focusing on planting native tree species that are well-adapted to local climate conditions, require less
                water, and provide better ecological benefits to the environment.
              </p>
            </div>
            <div className="program-card">
              <div className="program-icon">
                <FaLeaf />
              </div>
              <h4>Environmental Awareness</h4>
              <p>
                Conducting educational sessions about the importance of trees, environmental protection, and sustainable
                living practices to create awareness among community members.
              </p>
            </div>
            <div className="program-card">
              <div className="program-icon">
                <FaUsers />
              </div>
              <h4>Green Campus Initiatives</h4>
              <p>
                Working with educational institutions to create green campuses through tree plantation, garden
                development, and promoting eco-friendly practices among students and staff.
              </p>
            </div>
          </div>
        </div>

        <div className="plantation-gallery">
          <div className="section-title">
            <h3>Our Plantation Activities</h3>
            <div className="title-underline"></div>
          </div>
          <div className="gallery-grid">
            <div className="gallery-item">
              <div className="image-frame">
                <img src={Image1 || "/placeholder.svg"} alt="Tree Plantation Drive" className="gallery-img" />
              </div>
              <h4>Community Tree Plantation</h4>
              <p>Engaging local communities in large-scale tree plantation drives</p>
            </div>
            <div className="gallery-item">
              <div className="image-frame">
                <img src={Image2 || "/placeholder.svg"} alt=" Plantation Program" className="gallery-img" />
              </div>
              <h4>Plantation Program</h4>
              <p>Encouraging about environmental conservation through hands-on planting</p>
            </div>
            <div className="gallery-item">
              <div className="image-frame">
                <img src={Image3 || "/placeholder.svg"} alt="Green Initiative" className="gallery-img" />
              </div>
              <h4>Green Initiative Campaign</h4>
              <p>Promoting environmental awareness and sustainable practices</p>
            </div>
            <div className="gallery-item">
              <div className="image-frame">
                <img src={Image4 || "/placeholder.svg"} alt="Native Species Planting" className="gallery-img" />
              </div>
              <h4>Native Species Planting</h4>
              <p>Focusing on indigenous trees that thrive in local conditions</p>
            </div>
            <div className="gallery-item">
              <div className="image-frame">
                <img src={Image7 || "/placeholder.svg"} alt="Environmental Drive" className="gallery-img" />
              </div>
              <h4>Environmental Drive</h4>
              <p>Educating communities about tree care and environmental protection</p>
            </div>
            <div className="gallery-item">
              <div className="image-frame">
                <img src={Image8 || "/placeholder.svg"} alt="Green Campus Project" className="gallery-img" />
              </div>
              <h4>Green Campus Project</h4>
              <p>Creating eco-friendly environments in institutions</p>
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

export default Environment
