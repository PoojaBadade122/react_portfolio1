import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Education from "./components/Education";
import Personal from "./components/Personal";
import Certification from "./components/Certification";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Skills />
      <Portfolio />
      <About />
      <Education/>
      <Certification/>
      <Personal/>
      <Contact />
      <Footer />
    </>
  );
}

export default App;
