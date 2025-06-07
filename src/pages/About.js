"use client"
import "./About.css"
import { FaHome } from "react-icons/fa"

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
                Pramila Foundation was established in 2015 with a vision to create positive change in communities across
                the region. What began as a small initiative by a group of passionate individuals has grown into a
                recognized organization making significant impact in education, sports, environmental protection, and
                social welfare.
              </p>
              <p>
                Over the years, we have developed numerous programs that address critical needs in underserved
                communities. Our approach combines grassroots engagement with strategic partnerships to create
                sustainable solutions that empower individuals and strengthen communities.
              </p>
              <p>
                Under the visionary leadership of our committee members, the Foundation has expanded from a local
                initiative to a dynamic organization impacting lives. Our dedicated team and volunteers work
                relentlessly to drive real change at the grassroots level.
              </p>
            </div>
          </div>
        </div>

        <div className="about-highlights">
          <div className="highlight-section">
            <div className="highlight-header">
              <h3>Our Mission & Vision</h3>
              <div className="underline highlight-underline"></div>
            </div>
            <div className="mission-vision-content">
              <div className="mission-card">
                <div className="mission-icon">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M12 2L13.09 8.26L22 9L16 14L18 22L12 18L6 22L8 14L2 9L10.91 8.26L12 2Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h4>Our Mission</h4>
                <p>
                  To empower underprivileged communities through sustainable initiatives in education, sports,
                  environmental conservation, and social welfare, fostering a better and more equitable society for all.
                </p>
              </div>
              <div className="vision-card">
                <div className="vision-icon">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 12S5 4 12 4S23 12 23 12S19 20 12 20S1 12 1 12Z" stroke="currentColor" strokeWidth="2" />
                    <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" />
                  </svg>
                </div>
                <h4>Our Vision</h4>
                <p>
                  To create a society where every individual has access to quality education, healthcare, and
                  opportunities for growth and development, regardless of their socio-economic background.
                </p>
              </div>
            </div>
          </div>

          <div className="highlight-section">
            <div className="highlight-header">
              <h3>Our Core Values</h3>
              <div className="underline highlight-underline"></div>
            </div>
            <div className="values-grid">
              <div className="value-card">
                <div className="value-header">
                  <div className="value-emoji">❤️</div>
                  <h4>Compassion</h4>
                </div>
                <p>
                  We lead with empathy and genuine care, understanding that behind every challenge lies a human story.
                  Our compassionate approach ensures that we not only address immediate needs but also provide emotional
                  support and dignity to every individual we serve.
                </p>
              </div>

              <div className="value-card">
                <div className="value-header">
                  <div className="value-emoji">🛡️</div>
                  <h4>Integrity</h4>
                </div>
                <p>
                  Transparency and ethical conduct form the foundation of our work. We maintain the highest standards of
                  accountability, ensuring that every resource is utilized effectively and every promise is kept with
                  unwavering honesty and trust.
                </p>
              </div>

              <div className="value-card">
                <div className="value-header">
                  <div className="value-emoji">⭐</div>
                  <h4>Excellence</h4>
                </div>
                <p>
                  We pursue excellence in every initiative, continuously innovating and improving our programs. Our
                  commitment to quality ensures that our interventions create meaningful, measurable, and lasting
                  positive change in the communities we serve.
                </p>
              </div>

              <div className="value-card">
                <div className="value-header">
                  <div className="value-emoji">🤝</div>
                  <h4>Collaboration</h4>
                </div>
                <p>
                  We believe that collective action amplifies impact. By fostering partnerships with communities,
                  organizations, and stakeholders, we create synergies that multiply our effectiveness and reach,
                  building bridges toward sustainable social transformation.
                </p>
              </div>

              <div className="value-card">
                <div className="value-header">
                  <div className="value-emoji">🌱</div>
                  <h4>Sustainability</h4>
                </div>
                <p>
                  Our solutions are designed for longevity, considering environmental, social, and economic factors. We
                  focus on building capacity within communities, ensuring that positive changes continue to grow and
                  flourish long after our direct involvement.
                </p>
              </div>

              <div className="value-card">
                <div className="value-header">
                  <div className="value-emoji">💡</div>
                  <h4>Innovation</h4>
                </div>
                <p>
                  We embrace creative thinking and modern approaches to address complex social challenges. By leveraging
                  technology, fresh perspectives, and adaptive strategies, we continuously evolve our methods to
                  maximize impact and efficiency.
                </p>
              </div>
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

export default About
