import React from 'react';
import './Skills.css';

function Skills() {
  return (
    <section id="skills" className="skills-section">
      <h2>My Skills</h2>
      <ul className="skills-list">
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>React</li>
        {/* Add more skills here */}
      </ul>
    </section>
  );
}

export default Skills;
