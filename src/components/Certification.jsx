import React, { useState } from "react";

// Certificate images / PDFs
import cert1 from "../images/power.jpg"; 
import cert2 from "../images/tcs1.jpg"; 
import cert3 from "../assets/psc.pdf"; 
import cert4 from "../assets/irjmets.pdf"; 

// Activity images
import udaanImg from "../images/u.jpg";
import suryadattaImg from "../images/ss.jpg"; // NEW IMAGE

// Logos of issuers
import logoMicrosoft from "../images/mp.jpeg";
import logoTCS from "../images/t1.png";
import logoNPTEL from "../images/np.png";
import logoVIOSA from "../images/v.png";

// Activity logo (college / fest logo)
import collegeLogo from "../images/as.jpg";

// Your personal logo for heading
import myLogo from "../images/c.jpeg";

const Certifications = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  const certifications = [
    {
      title: "PL-300: Microsoft Power BI",
      year: "2025",
      img: cert1,
      logo: logoMicrosoft
    },
    {
      title: "TCS iON Career Edge: Young Professional",
      year: "2023",
      img: cert2,
      logo: logoTCS
    },
    {
      title: "Software Testing (NPTEL SWAYAM)",
      year: "2024",
      img: cert3,
      logo: logoNPTEL
    },
    {
      title: "Corporate Mentorship Program",
      year: "2024",
      img: cert4,
      logo: logoVIOSA
    },

    /* ===== ACTIVITIES ===== */

    {
      title: "Udaan – Intercollegiate Fest (Natya Street Play)",
      year: "Performer / Team Member",
      img: udaanImg,
      logo: collegeLogo
    },
    {
      title: "Suryadatta TechFest",
      year: "Participant / Presenter",
      img: suryadattaImg,
      logo: collegeLogo
    }
  ];

  return (
    <section className="certifications" id="certifications">
      <h2 className="cert-heading">
        <img src={myLogo} alt="My Logo" className="heading-logo" />
        Certifications & Activities
      </h2>

      <div className="cert-container">
        {certifications.map((cert, index) => (
          <div
            key={index}
            className="cert-card"
            onClick={() => setSelectedCert(cert.img)}
          >
            <img src={cert.logo} alt="Logo" className="cert-logo" />
            <h3>{cert.title}</h3>
            <span>{cert.year}</span>
          </div>
        ))}
      </div>

      {/* Modal / Lightbox */}
      {selectedCert && (
        <div className="cert-modal" onClick={() => setSelectedCert(null)}>
          {selectedCert.endsWith(".pdf") ? (
            <iframe
              src={selectedCert}
              title="Certificate PDF"
              width="90%"
              height="90%"
            ></iframe>
          ) : (
            <img src={selectedCert} alt="Certificate / Activity" />
          )}
        </div>
      )}
    </section>
  );
};

export default Certifications;
