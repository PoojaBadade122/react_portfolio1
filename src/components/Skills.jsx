import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaPython,
  FaJava,
  FaPhp,
  FaDatabase,
  FaReact,
  FaNodeJs,
} from "react-icons/fa";

import { SiMongodb, SiTableau } from "react-icons/si";
import { MdBugReport, MdPsychology, MdGroups } from "react-icons/md";
import { AiOutlineClockCircle } from "react-icons/ai";
import { GiPuzzle } from "react-icons/gi";

import "../App.css";


const Skills = () => {
  const skillsData = [
    {
      category: "Technical Skills",
      skills: [
        { name: "HTML", icon: <FaHtml5 color="#E44D26" /> },
        { name: "CSS", icon: <FaCss3Alt color="#264DE4" /> },
        { name: "JavaScript", icon: <FaJsSquare color="#F7DF1E" /> },
        { name: "React", icon: <FaReact color="#61DBFB" /> },
        { name: "Node.js", icon: <FaNodeJs color="#68A063" /> },
        { name: "MongoDB", icon: <SiMongodb color="#4DB33D" /> },
        { name: "Python", icon: <FaPython color="#3776AB" /> },
        { name: "Java", icon: <FaJava color="#ED1D25" /> },
        { name: "PHP", icon: <FaPhp color="#777BB3" /> },
        { name: "SQL", icon: <FaDatabase color="#00758F" /> },
        { name: "Software Testing", icon: <MdBugReport color="#6A1B9A" /> },
      ],
    },
    {
      category: "Data & AI",
      skills: [
        { name: "Machine Learning", icon: <MdPsychology color="#0D47A1" /> },
        { name: "Deep Learning", icon: <MdPsychology color="#1A237E" /> },
        { name: "Power BI", icon: <FaDatabase color="#F2C811" /> },
        { name: "Tableau", icon: <SiTableau color="#1E88E5" /> },
        { name: "Statistics", icon: <GiPuzzle color="#2E7D32" /> },
        { name: "Data Analysis", icon: <GiPuzzle color="#1565C0" /> },
      ],
    },
    {
      category: "Soft Skills",
      skills: [
        { name: "Effective Communication", icon: <MdGroups color="#6A1B9A" /> },
        { name: "Problem Solving", icon: <GiPuzzle color="#EF6C00" /> },
        { name: "Team Collaboration", icon: <MdGroups color="#2E7D32" /> },
        { name: "Time Management", icon: <AiOutlineClockCircle color="#0277BD" /> },
        { name: "Adaptability", icon: <MdPsychology color="#AD1457" /> },
      ],
    },
  ];

  return (
    <section className="skills-section" id="skills">
      <h2>My Skills</h2>

      {skillsData.map((section, index) => (
        <div key={index} className="skills-category">
          <h3>{section.category}</h3>

          <div className="skills-grid">
            {section.skills.map((skill) => (
              <div className="skill-card" key={skill.name}>
                <span className="skill-icon">{skill.icon}</span>
                <span className="skill-name">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Skills;
