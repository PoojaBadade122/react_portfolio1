import React, { useState } from "react";

// ===== Certificate images / PDFs =====
import cert1 from "../images/power.jpg";
import cert2 from "../images/tcs1.jpg";
import cert3 from "../assets/psc.pdf";
import cert4 from "../assets/irjmets.pdf";

// ===== Activity images =====
import udaanImg from "../images/u.jpg";
import suryadattaImg from "../images/ss.jpg";

// ===== Logos =====
import logoMicrosoft from "../images/mp.jpeg";
import logoTCS from "../images/t1.png";
import logoNPTEL from "../images/np.png";
import logoVIOSA from "../images/v.png";
import collegeLogo from "../images/as.jpg";

// ===== Heading logo =====
import myLogo from "../images/c.jpeg";

const Certifications = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  const certifications = [
    {
      title: "PL-300: Microsoft Power BI",
      subtitle: "2025",
      file: cert1,
      logo: logoMicrosoft
    },
    {
      title: "TCS iON Career Edge: Young Professional",
      subtitle: "2023",
      file: cert2,
      logo: logoTCS
    },
    {
      title: "Software Testing (NPTEL SWAYAM)",
      subtitle: "2024",
      file: cert3,
      logo: logoNPTEL
    },
    {
      title: "Corporate Mentorship Program",
      subtitle: "2024",
      file: cert4,
      logo: logoVIOSA
    },
    {
      title: "Udaan – Intercollegiate Fest (Natya Street Play)",
      subtitle: "Performer / Team Member",
      file: udaanImg,
      logo: collegeLogo
    },
    {
      title: "Suryadatta TechFest",
      subtitle: "Participant / Presenter",
      file: suryadattaImg,
      logo: collegeLogo
    }
  ];

  return (
    <section className="certifications" id="certifications">
      <h2 className="cert-heading">
        <img src={myLogo} alt="Logo" className="heading-logo" />
        Certifications & Activities
      </h2>

      <div className="cert-container">
        {certifications.map((cert, index) => (
          <div
            key={index}
            className="cert-card"
            onClick={() => setSelectedCert(cert.file)}
          >
            <img src={cert.logo} alt="Issuer Logo" className="cert-logo" />
            <h3>{cert.title}</h3>
            <span>{cert.subtitle}</span>
          </div>
        ))}
      </div>

      {/* ===== Modal ===== */}
      {selectedCert && (
        <div className="cert-modal" onClick={() => setSelectedCert(null)}>
          {selectedCert.endsWith(".pdf") ? (
            <iframe
              src={selectedCert}
              title="Certificate PDF"
              frameBorder="0"
            />
          ) : (
            <img src={selectedCert} alt="Certificate" />
          )}
        </div>
      )}
    </section>
  );
};

export default Certifications;
