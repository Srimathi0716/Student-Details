import React from 'react'


import { useState } from "react";

function Skills() {
  const [category, setCategory] = useState("All");

  const skills = [
    { name: "Java", type: "Programming" },
    { name: "JavaScript", type: "Programming" },
    { name: "React", type: "Frontend" },
    { name: "HTML", type: "Frontend" },
    { name: "CSS", type: "Frontend" },
    { name: "SQL", type: "Database" }
  ];

  const filteredSkills =
    category === "All"
      ? skills
      : skills.filter((skill) => skill.type === category);

  return (
    <section className="section">
      <h1>My Skills</h1>

      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option>All</option>
        <option>Programming</option>
        <option>Frontend</option>
        <option>Database</option>
      </select>

      <div className="skills-container">
        {filteredSkills.map((skill) => (
          <div className="skill-card" key={skill.name}>
            {skill.name}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;