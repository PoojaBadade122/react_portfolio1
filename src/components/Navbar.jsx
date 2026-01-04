import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2 className="logo">Pooja Dilip Badade</h2>
      <ul className="nav-links">
        <li><a href="#skills">Skills</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#education">Education</a></li> 
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
