import React from "react";
import project1 from "../images/pf.jpeg";
import project2 from "../images/db.jpeg";
import project3 from "../images/water.jpeg";
import project4 from "../images/id2.jpeg";
import project5 from "../images/sug.jpeg";
import project6 from "../images/sug.jpeg";

const Portfolio = () => {
  const projects = [
    { img: project1, title: "Portfolio Website", desc: "Responsive portfolio using React", link: "http://reactportfolio1-five.vercel.app" },
    { img: project2, title: "Diabetes Prediction", desc: "ML based diabetes prediction system", link: "#" },
    { img: project3, title: "Smart Water Purification", desc: "React system for water anomaly detection", link: "#" },
    { img: project4, title: "ID card Mnagement", desc: "PHP based Project to create dynamic ID cards", link: "#" },
    { img: project5, title: "Sugarcane disease detection", desc: "ML/AI system to detect sugarcane diseases", link: "#" },
    { img: project6, title: "Tech Meets Tradition", desc: "Reseach Project ('Published In IRJMETS Journal')", link: "#" },

  ];

  return (
    <section className="portfolio" id="portfolio">
      <h2>My Projects </h2>
      <div className="portfolio-container">
        {projects.map((project, idx) => (
          <div className="project-card" key={idx}>
            <img src={project.img} alt={project.title} style={{ width: "100%", borderRadius: "8px", marginBottom: "10px" }} />
            <h3>{project.title}</h3>
            <p>{project.desc}</p>
            <a href={project.link}>View Project</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
