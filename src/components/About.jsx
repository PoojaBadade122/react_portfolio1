import React from "react";
import profile from "../images/poojab.jpg"; // Profile image
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-container">
        <img src={profile} alt="Pooja Badade" />  {/* Profile image */}
        <div className="about-content">
          <h2>About Me</h2>
          <p>
            An aspiring AI,ML & data analytics with a strong background in Computer Science and MCA, passionate about using data, AI, and modern web technologies to solve real‑world problems. Experienced in developing machine learning and deep learning models, visualizing data with business intelligence tools, and building full‑stack web applications that deliver practical, measurable impact.
          </p>

          {/* Social Links */}
          <div className="social-links" style={{ marginTop: "20px", display: "flex", gap: "15px", fontSize: "24px" }}>
            <a href="https://linkedin.com/in/pooja-badade-0917a1289" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="https://github.com/PoojaBadade122" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href="mailto:poojabadade35@gmail.com">
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
            <a href="tel:+918149301457">
              <FontAwesomeIcon icon={faPhone} />
            </a>
            <a href="https://www.instagram.com/your-instagram" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
