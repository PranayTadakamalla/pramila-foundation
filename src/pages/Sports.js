import React from 'react';
import './Sports.css';
import { FaHome, FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube, FaPlay, FaTrophy, FaUsers, FaMapMarkerAlt, FaHeart } from 'react-icons/fa';
import sportsHeroImg from '../assets/sports-hero.jpg';
import yogaClassImg from '../assets/yoga-class.jpg';
import sportsInfraImg from '../assets/sports-infrastructure.jpg';
import tournamentImg from '../assets/tournament.jpg';
import youthSportsImg from '../assets/youth-sports.jpg';
import fitnessImg from '../assets/fitness-program.jpg';
import communityImg from '../assets/community-sports.jpg';

function Sports() {
  const handleYouTubeSubscribe = () => {
    window.open('https://www.youtube.com/@pramilafoundation', '_blank');
  };

  const handleVideoPlay = () => {
    // Replace with your actual YouTube video URL
    window.open('https://youtu.be/H3gH8DWIG6w?si=ITe2-0r1url9jHvm', '_blank');
  };

  return (
    <section id="sports" className="sports">
      <div className="container">
        {/* Hero Section */}
        <div className="sports-hero">
          <div className="hero-content">
            <div className="hero-text">
              <h1>Sports for Good</h1>
              <div className="hero-underline"></div>
              <p className="hero-quote">
                "Small Hands Can Change the World Through Sports"
              </p>
              <p className="hero-description">
                Supporting over 1000+ lives through comprehensive sports programs across 15+ districts, 
                using the power of sport to transform communities and empower youth through physical 
                education, talent development, and infrastructure improvement [5].
              </p>
              <div className="hero-stats">
                <div className="stat-item">
                  <div className="stat-number">50+</div>
                  <div className="stat-label">Sports Projects</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">100+</div>
                  <div className="stat-label">Volunteers</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">15+</div>
                  <div className="stat-label">Districts</div>
                </div>
              </div>
            </div>
            <div className="hero-image">
              <img src={sportsHeroImg} alt="Pramila Foundation Sports Programs" />
              <div className="hero-overlay">
                <FaPlay className="play-icon" onClick={handleVideoPlay} />
              </div>
            </div>
          </div>
        </div>

        {/* Our Approach Section */}
        <div className="approach-section">
          <div className="section-header">
            <h2>Our Sports Approach</h2>
            <div className="underline"></div>
            <p>Transforming lives through comprehensive sports development programs</p>
          </div>
          
          <div className="approach-grid">
            <div className="approach-card">
              <div className="approach-icon">
                <FaTrophy />
              </div>
              <h3>Talent Development</h3>
              <p>
                Encouraging talented sports persons at village, state, national and international levels 
                through structured training programs and mentorship [5].
              </p>
            </div>
            
            <div className="approach-card">
              <div className="approach-icon">
                <FaUsers />
              </div>
              <h3>Community Engagement</h3>
              <p>
                Promoting physical education and sports through Yoga and fitness programs that engage 
                entire communities in healthy lifestyle practices [5].
              </p>
            </div>
            
            <div className="approach-card">
              <div className="approach-icon">
                <FaMapMarkerAlt />
              </div>
              <h3>Infrastructure Development</h3>
              <p>
                Improving basic infrastructure for sports including playgrounds, courts, and indoor 
                stadium facilities to create better sporting environments [5].
              </p>
            </div>
          </div>
        </div>

        {/* Video Section */}
        <div className="video-section">
          <div className="section-header">
            <h2>See Our Sports Impact</h2>
            <div className="underline"></div>
            <p>Watch how we're transforming communities through sports</p>
          </div>
          
          <div className="video-container">
            <div className="video-wrapper">
              <iframe
                src="https://youtu.be/H3gH8DWIG6w?si=ITe2-0r1url9jHvm"
                title="Pramila Foundation Sports Programs"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="video-info">
              <h3>Building Champions, Building Communities</h3>
              <p>
                Discover how Pramila Foundation is using sports to create positive change across 
                communities. From yoga and fitness programs to talent development and infrastructure 
                improvement, see our comprehensive approach to sports development [5].
              </p>
              <button className="subscribe-button" onClick={handleYouTubeSubscribe}>
                <FaYoutube className="youtube-icon" />
                Subscribe to Our Channel
              </button>
            </div>
          </div>
        </div>

        {/* Sports Programs Section */}
        <div className="programs-section">
          <div className="section-header">
            <h2>Our Sports Programs</h2>
            <div className="underline"></div>
            <p>Comprehensive initiatives covering all aspects of sports development</p>
          </div>
          
          <div className="programs-grid">
            <div className="program-card">
              <div className="program-image">
                <img src={yogaClassImg} alt="Yoga and Fitness Programs" />
                <div className="program-overlay">
                  <h4>Yoga & Fitness</h4>
                </div>
              </div>
              <div className="program-content">
                <h3>Physical Education & Wellness</h3>
                <p>
                  Promoting physical education and sports through comprehensive Yoga and fitness 
                  programs designed to improve community health and well-being [5].
                </p>
                <ul>
                  <li>Daily yoga sessions for all age groups</li>
                  <li>Fitness training and conditioning</li>
                  <li>Health awareness programs</li>
                  <li>Community wellness initiatives</li>
                </ul>
              </div>
            </div>
            
            <div className="program-card">
              <div className="program-image">
                <img src={sportsInfraImg} alt="Sports Infrastructure Development" />
                <div className="program-overlay">
                  <h4>Infrastructure</h4>
                </div>
              </div>
              <div className="program-content">
                <h3>Sports Infrastructure</h3>
                <p>
                  Improving basic infrastructure for sports including playgrounds, courts, and 
                  indoor stadium facilities to create world-class sporting environments [5].
                </p>
                <ul>
                  <li>Playground development and maintenance</li>
                  <li>Court construction and renovation</li>
                  <li>Indoor stadium facilities</li>
                  <li>Equipment provision and maintenance</li>
                </ul>
              </div>
            </div>
            
            <div className="program-card">
              <div className="program-image">
                <img src={tournamentImg} alt="Sports Tournaments" />
                <div className="program-overlay">
                  <h4>Tournaments</h4>
                </div>
              </div>
              <div className="program-content">
                <h3>Competitions & Events</h3>
                <p>
                  Organizing different levels of tournaments and sporting events to provide 
                  competitive platforms for athletes at all levels [5].
                </p>
                <ul>
                  <li>Local and regional tournaments</li>
                  <li>Inter-school competitions</li>
                  <li>Community sports festivals</li>
                  <li>Awards and recognition programs</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Leadership Development Section */}
        <div className="leadership-section">
          <div className="section-content">
            <div className="leadership-text">
              <h2>Leadership Through Sports</h2>
              <div className="underline leadership-underline"></div>
              <p>
                Our foundation offers comprehensive leadership training and developmental courses 
                that build character, teamwork, and community leadership through sports [5].
              </p>
              <div className="leadership-features">
                <div className="feature-item">
                  <FaHeart className="feature-icon" />
                  <div className="feature-content">
                    <h4>Character Building</h4>
                    <p>Developing integrity, perseverance, and sportsmanship</p>
                  </div>
                </div>
                <div className="feature-item">
                  <FaUsers className="feature-icon" />
                  <div className="feature-content">
                    <h4>Team Leadership</h4>
                    <p>Training young leaders to guide and inspire their teams</p>
                  </div>
                </div>
                <div className="feature-item">
                  <FaTrophy className="feature-icon" />
                  <div className="feature-content">
                    <h4>Achievement Excellence</h4>
                    <p>Supporting athletes to reach their highest potential</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="leadership-image">
              <img src={youthSportsImg} alt="Youth Leadership Development" />
            </div>
          </div>
        </div>

        {/* Focus Areas Section */}
        <div className="focus-areas-section">
          <div className="section-header">
            <h2>Our Sports Focus Areas</h2>
            <div className="underline"></div>
            <p>Comprehensive coverage across multiple sporting disciplines and development areas</p>
          </div>
          
          <div className="focus-grid">
            <div className="focus-card">
              <div className="focus-icon youth"></div>
              <h3>Youth Development</h3>
              <p>Empowering young athletes with skills, confidence, and opportunities for growth</p>
            </div>
            
            <div className="focus-card">
              <div className="focus-icon fitness"></div>
              <h3>Health & Fitness</h3>
              <p>Promoting physical wellness and healthy lifestyle choices through sports</p>
            </div>
            
            <div className="focus-card">
              <div className="focus-icon inclusion"></div>
              <h3>Inclusive Sports</h3>
              <p>Creating equal opportunities for all participants regardless of background</p>
            </div>
            
            <div className="focus-card">
              <div className="focus-icon community"></div>
              <h3>Community Building</h3>
              <p>Strengthening social bonds and community spirit through shared sporting activities</p>
            </div>
          </div>
        </div>

        {/* Conferences & Workshops Section */}
        <div className="conferences-section">
          <div className="section-header">
            <h2>Conferences & Workshops</h2>
            <div className="underline"></div>
            <p>Organizing national and international level events for sports development</p>
          </div>
          
          <div className="conferences-content">
            <div className="conferences-image">
              <img src={fitnessImg} alt="Sports Conferences and Workshops" />
            </div>
            <div className="conferences-text">
              <h3>Knowledge Sharing & Skill Development</h3>
              <p>
                Pramila Foundation organizes national and international level conferences, workshops 
                and symposiums to promote sports education, share best practices, and develop 
                technical expertise in sports management and coaching [5].
              </p>
              <ul className="conferences-list">
                <li>Annual Sports Development Conferences</li>
                <li>Coaching Certification Workshops</li>
                <li>Sports Management Symposiums</li>
                <li>Technical Skills Development Programs</li>
                <li>International Collaboration Forums</li>
                <li>Research and Innovation Seminars</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Impact Stories Section */}
        <div className="impact-section">
          <div className="section-header">
            <h2>Sports Impact Stories</h2>
            <div className="underline"></div>
            <p>Real stories of transformation through our sports programs</p>
          </div>
          
          <div className="impact-grid">
            <div className="impact-story">
              <div className="story-image">
                <img src={communityImg} alt="Community Sports Success" />
              </div>
              <div className="story-content">
                <h4>Village Champions Program</h4>
                <p>
                  "Through Pramila Foundation's sports programs, our village youth discovered their 
                  potential. From basic fitness to competitive sports, the foundation has created 
                  champions not just in sports, but in life."
                </p>
                <div className="story-author">- Community Leader, Telangana</div>
              </div>
            </div>
            
            <div className="impact-story">
              <div className="story-content">
                <h4>Women's Fitness Revolution</h4>
                <p>
                  "The yoga and fitness programs have transformed our women's health in rural areas. 
                  What started as simple exercise sessions has become a movement for women's 
                  empowerment and wellness."
                </p>
                <div className="story-author">- Women's Group Representative</div>
              </div>
              <div className="story-image">
                <img src={yogaClassImg} alt="Women's Fitness Programs" />
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="cta-section">
          <div className="cta-content">
            <h2>Join Our Sports Mission</h2>
            <div className="underline cta-underline"></div>
            <p>
              Help us use the power of sport to transform more lives. Whether through volunteering, 
              donations, or partnerships, there are many ways to support our sports initiatives.
            </p>
            <div className="cta-buttons">
              <button className="cta-button primary">Become a Volunteer</button>
              <button className="cta-button secondary">Support Our Programs</button>
            </div>
          </div>
        </div>

        {/* Home Button */}
        <div className="home-button-container">
          <button className="home-button" onClick={() => window.location.href = '/'}>
            <FaHome className="button-icon" /> Back to Home
          </button>
        </div>
      </div>
    </section>
  );
}

export default Sports;
