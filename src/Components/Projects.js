import React from 'react';
import './Projects.css';

function Projects() {
  return (
    <section id="projects" className="projects-section">
      <h2>My Projects</h2>
      <div className="project-list">
        <div className="project-item">
          <h3>Project 1</h3>
          <p>Description of the project...</p>
          <a href="https://github.com/your-repo" target="_blank" rel="noopener noreferrer">View on GitHub</a>
        </div>
        {/* Add more project items here */}
      </div>
    </section>
  );
}

export default Projects;
