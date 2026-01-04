import React from "react";
import heroBg from "../images/poojab.jpg"; // Hero background image
import resume from "../assets/pb_resume.pdf"; // path now matches renamed file

const Hero = () => {
  return (
    <section
      className="hero"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="hero-content">
        <h3>Pooja Badade</h3>
        <h1>Masters of Computer Applications student</h1>
        <a href={resume} download>
          <button>DOWNLOAD RESUME</button>
        </a>
      </div>
    </section>
  );
};

export default Hero;
