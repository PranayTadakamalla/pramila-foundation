"use client"

import { useState, useEffect } from "react"
import { Link, useNavigate, useLocation } from "react-router-dom"
import "./Header.css"
import Logo from "../assets/Logo.jpg"
import Logo1 from "../assets/logo1.jpg"

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY
      if (offset > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  useEffect(() => {
    setIsMenuOpen(false)
  }, [location.pathname])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleLinkClick = (path) => {
    setIsMenuOpen(false)
    navigate(path)
    window.scrollTo(0, 0)
  }

  const handleContactClick = () => {
    setIsMenuOpen(false)
    const contactSection = document.getElementById("contact")
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <div className="header-container">
        <div
          className="logo-section"
          onClick={() => handleLinkClick("/")}
          role="button"
          tabIndex="0"
          aria-label="Go to homepage"
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              handleLinkClick("/")
            }
          }}
        >
          <div className="dual-logo">
            <div className="logo-wrapper">
              <img src={Logo || "/placeholder.svg"} alt="Pramila Foundation Logo" className="logo" />
            </div>
            <div className="logo-wrapper">
              <img
                src={Logo1 || "/placeholder.svg"}
                alt="Pramila Foundation Secondary Logo"
                className="logo logo-secondary"
              />
            </div>
          </div>
          <div className="logo-text">
            <h1>Pramila Foundation</h1>
            <p>Service for a Better Society</p>
          </div>
        </div>

        <button
          className={`mobile-menu-button ${isMenuOpen ? "active" : ""}`}
          onClick={toggleMenu}
          aria-expanded={isMenuOpen}
          aria-label="Toggle navigation menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`nav-section ${isMenuOpen ? "active" : ""}`} aria-label="Main navigation">
          <div className="nav-links">
            <Link
              to="/"
              className={`nav-link ${location.pathname === "/" ? "active" : ""}`}
              onClick={() => handleLinkClick("/")}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`nav-link ${location.pathname === "/about" ? "active" : ""}`}
              onClick={() => handleLinkClick("/about")}
            >
              About
            </Link>
            <Link
              to="/committee"
              className={`nav-link ${location.pathname === "/committee" ? "active" : ""}`}
              onClick={() => handleLinkClick("/committee")}
            >
              Committee
            </Link>

            <div className="services-dropdown">
              <button className="nav-link dropdown-toggle" aria-haspopup="true" aria-expanded="false">
                Our Services
                <svg className="dropdown-arrow" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M6 9L12 15L18 9"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <div className="dropdown-menu">
                <div className="dropdown-content">
                  <div className="dropdown-item">
                    <Link to="/education" onClick={() => handleLinkClick("/education")}>
                      <div className="service-icon education-icon">
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M12 14L21 9L12 4L3 9L12 14Z"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M3 9V16C3 16.5304 3.21071 17.0391 3.58579 17.4142C3.96086 17.7893 4.46957 18 5 18H19C19.5304 18 20.0391 17.7893 20.4142 17.4142C20.7893 17.0391 21 16.5304 21 16V9"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <div className="service-info">
                        <h4>Education</h4>
                        <p>Quality education for all students</p>
                      </div>
                    </Link>
                  </div>
                  <div className="dropdown-item">
                    <Link to="/sports" onClick={() => handleLinkClick("/sports")}>
                      <div className="service-icon sports-icon">
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                          <path
                            d="M12 2C13.09 8.26 15.74 10.91 22 12C15.74 13.09 13.09 15.74 12 22C10.91 15.74 8.26 13.09 2 12C8.26 10.91 10.91 8.26 12 2Z"
                            stroke="currentColor"
                            strokeWidth="2"
                          />
                        </svg>
                      </div>
                      <div className="service-info">
                        <h4>Sports</h4>
                        <p>Physical fitness and teamwork</p>
                      </div>
                    </Link>
                  </div>
                  <div className="dropdown-item">
                    <Link to="/environment" onClick={() => handleLinkClick("/environment")}>
                      <div className="service-icon environment-icon">
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                            stroke="currentColor"
                            strokeWidth="2"
                          />
                          <path
                            d="M8 12C8 12 9.5 14 12 14C14.5 14 16 12 16 12"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                          />
                          <path d="M9 9H9.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                          <path d="M15 9H15.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                      </div>
                      <div className="service-info">
                        <h4>Environment</h4>
                        <p>Conservation and sustainability</p>
                      </div>
                    </Link>
                  </div>
                  <div className="dropdown-item">
                    <Link to="/welfare" onClick={() => handleLinkClick("/welfare")}>
                      <div className="service-icon welfare-icon">
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M20.84 4.61C19.32 3.04 17.13 3 15.07 4.59C13.81 5.59 13.16 7.12 13.16 8.77C13.16 7.12 12.51 5.59 11.25 4.59C9.19 3 7 3.04 5.48 4.61C3.85 6.27 3.85 8.99 5.48 10.65L12 17.77L18.52 10.65C20.15 8.99 20.15 6.27 18.84 4.61H20.84Z"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <div className="service-info">
                        <h4>Social Welfare</h4>
                        <p>Community support and care</p>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <Link
              to="/gallery"
              className={`nav-link ${location.pathname === "/gallery" ? "active" : ""}`}
              onClick={() => handleLinkClick("/gallery")}
            >
              Gallery
            </Link>
          </div>

          <div className="action-buttons">
            <a
              href="https://forms.gle/your-volunteer-form-link"
              className="volunteer-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg className="btn-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M16 21V19C16 17.9391 15.5786 16.9217 14.8284 16.1716C14.0783 15.4214 13.0609 15 12 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle cx="8.5" cy="7" r="4" stroke="currentColor" strokeWidth="2" />
                <path d="M20 8V14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <path d="M23 11H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
              Volunteer
            </a>
            <button className="contact-btn" onClick={handleContactClick}>
              <svg className="btn-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M21 15C21 15.5304 20.7893 16.0391 20.4142 16.4142C20.0391 16.7893 19.5304 17 19 17H7L3 21V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V15Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Contact
            </button>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header
