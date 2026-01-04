import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRobot, faBook, faPenFancy, faPalette } from "@fortawesome/free-solid-svg-icons";

const PersonalInterests = () => {
  const interests = [
    { icon: faRobot, label: "Continuous Learning in Technology & AI" },
    { icon: faBook, label: "Reading Literature" },
    { icon: faPenFancy, label: "Creative Writing (Poetry)" },
    { icon: faPalette, label: "Artistic Expression" },
  ];

  return (
    <section className="interests" id="interests">
      <div className="interests-wrapper">
        <h2>Personal Interests</h2>
        <div className="interests-container">
          {interests.map((interest, index) => (
            <div className="interest-card" key={index}>
              <FontAwesomeIcon icon={interest.icon} className="interest-icon" />
              <p>{interest.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PersonalInterests;
