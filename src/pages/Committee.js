"use client"
import "./Committee.css"
import { FaHome, FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa"
import founderImg from "../assets/founder.jpg"
import generalSecretaryImg from "../assets/general-secretary.jpg"
import treasurerImg from "../assets/treasurer.jpg"

function Committee() {
  const committeeMembers = [
    {
      id: 1,
      name: "Dr. K. Mahesh",
      position: "Founder & President",
      description: "Leading the foundation with over 10 years of experience in social development",
      image: founderImg,
      social: {
        facebook: "https://facebook.com/",
        instagram: "https://instagram.com/",
        linkedin: "https://linkedin.com/",
      },
    },
    {
      id: 2,
      name: "Gavinolla Ram Reddy",
      position: "General Secretary",
      description: "Overseeing program implementation and strategic partnerships",
      image: generalSecretaryImg,
      social: null,
    },
    {
      id: 3,
      name: "K. Srinivas",
      position: "Treasurer",
      description: "Managing financial resources and ensuring transparency",
      image: treasurerImg,
      social: null,
    },
  ]

  return (
    <section id="committee" className="committee">
      <div className="container">
        <div className="section-header">
          <h2>Our Committee</h2>
          <div className="underline"></div>
        </div>

        <div className="committee-members">
          {committeeMembers.map((member) => (
            <div className="member-card" key={member.id}>
              <div className="image-wrapper">
                <img src={member.image || "/placeholder.svg"} alt={member.name} className="member-avatar" />
                {member.social && (
                  <div className="social-overlay">
                    {member.social.facebook && (
                      <a href={member.social.facebook} target="_blank" rel="noopener noreferrer">
                        <FaFacebookF />
                      </a>
                    )}
                    {member.social.instagram && (
                      <a href={member.social.instagram} target="_blank" rel="noopener noreferrer">
                        <FaInstagram />
                      </a>
                    )}
                    {member.social.linkedin && (
                      <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer">
                        <FaLinkedinIn />
                      </a>
                    )}
                  </div>
                )}
              </div>
              <div className="member-info">
                <h4>{member.name}</h4>
                <p className="member-position">{member.position}</p>
                <p className="member-desc">{member.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="committee-highlights">
          <div className="highlight-section">
            <div className="highlight-header">
              <h3>Our Focus Areas</h3>
              <div className="underline highlight-underline"></div>
            </div>
            <div className="highlight-content">
              <div className="focus-area">
                <div className="focus-emoji">📚</div>
                <h4>Education</h4>
                <p>Providing quality education and resources to underprivileged students through innovative programs</p>
              </div>
              <div className="focus-area">
                <div className="focus-emoji">⚽</div>
                <h4>Sports</h4>
                <p>Promoting physical fitness and sports development among youth</p>
              </div>
              <div className="focus-area">
                <div className="focus-emoji">🌍</div>
                <h4>Environment</h4>
                <p>Creating awareness and implementing sustainable environmental practices</p>
              </div>
              <div className="focus-area">
                <div className="focus-emoji">🤲</div>
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
                <blockquote>"Service for a better society."</blockquote>
              </div>
              <p className="philosophy-text">
                We believe that positive change begins with small actions. By empowering individuals and communities
                with the right tools and support, we can create a ripple effect that leads to significant
                transformation. Our work is guided by principles of inclusivity, sustainability, and community
                participation.
              </p>
              <p className="philosophy-text">
                The Pramila Foundation continues to grow and expand its reach to more communities in need. Our dedicated
                team of staff and volunteers work tirelessly to implement programs that create meaningful change in
                people's lives. We believe that by working together, we can build a more equitable and sustainable
                future for all.
              </p>
            </div>
          </div>
        </div>

        <div className="home-button-container">
          <button className="home-button" onClick={() => (window.location.href = "/")}>
            <FaHome className="button-icon" /> Back to Home
          </button>
        </div>
      </div>
    </section>
  )
}

export default Committee
