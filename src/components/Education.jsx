import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";

// Import your logos/photos
import mcaLogo from "../images/pibm.jpeg"; // replace with your path
import bscLogo from "../images/vpl.png"; // replace with your path

const Education = () => {
  return (
    <section className="education" id="education">
      <h2 className="section-title">
        <FontAwesomeIcon icon={faGraduationCap} /> Education
      </h2>

      <div className="education-container">
        {/* MCA Card */}
        <div className="education-card">
          <div className="edu-header">
            <img src={mcaLogo} alt="MCA Logo" className="edu-logo" />
            <h3>MCA – Master of Computer Applications</h3>
          </div>
          <p>
            KES Pratibha Institute Of Business Management, Chinchwad, Pune, 
            Savitribai Phule Pune University
          </p>
          <span className="edu-year">2024 – 2026</span>
        </div>

        {/* Bachelor's Card */}
        <div className="education-card">
          <div className="edu-header">
            <img src={bscLogo} alt="BSc Logo" className="edu-logo" />
            <h3>Bachelor’s Degre – Bsc Computer Science</h3>
          </div>
          <p>
            Vidya Pratishthan's Arts Science College, Baramati, Pune
          </p>
          <span className="edu-year">2021 – 2024</span>
        </div>
      </div>
    </section>
  );
};

export default Education;
