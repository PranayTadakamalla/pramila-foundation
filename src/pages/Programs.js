import "./Programs.css";
import { FaTree, FaBookOpen, FaUserGraduate, FaHandsHelping, FaHome } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Programs() {
  const navigate = useNavigate();

  const handleReturnHome = () => {
    navigate("/");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section id="programs" className="programs-section">
      <div className="container">
        <div className="section-header">
          <h2>Our Core Initiatives</h2>
          <div className="underline"></div>
          <p className="section-intro">Simple Actions. Strong Impact.</p>
        </div>

        <div className="programs-grid">
          <div className="program-card">
            <div className="program-icon"><FaTree /></div>
            <h4>Green India Movement</h4>
            <p>We lead plantation drives across communities to improve green cover, fight climate change, and nurture environmental responsibility among youth.</p>
          </div>

          <div className="program-card">
            <div className="program-icon"><FaBookOpen /></div>
            <h4>Knowledge Sharing for Exams</h4>
            <p>We conduct free coaching and workshops for SSC, TET, Police, Banking & other government exams, enabling access to competitive success for all.</p>
          </div>

          <div className="program-card">
            <div className="program-icon"><FaUserGraduate /></div>
            <h4>Sponsoring Education</h4>
            <p>By identifying bright yet underprivileged students, we sponsor their education, guiding them to pursue academic and professional dreams without barriers.</p>
          </div>

          <div className="program-card">
            <div className="program-icon"><FaHandsHelping /></div>
            <h4>Grassroots Efforts</h4>
            <p>From community awareness to health camps, skill-building to clean-up drives — our team is actively involved on the ground, every single day.</p>
          </div>
        </div>

        <div className="impact-message">
          <h3>Every Step Counts</h3>
          <p>We're not just running programs. We're building a movement — one where education, nature, and opportunity come together for a brighter, collective future.</p>
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

export default Programs;
