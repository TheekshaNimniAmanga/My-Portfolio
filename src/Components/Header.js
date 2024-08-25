import React from 'react';
import './Header.css'; // Create this CSS file for styling

function Header() {
  return (
    <header className="header">
      <nav className="navbar">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <button className="hire-me-btn">Hire Me</button>
      </nav>
      <div className="hero-section">
        <h1>Hello! I'm <span className="name-highlight">Theeksha Nimni Amanga</span></h1>
        <h2>I'm a <span className="role-highlight">UI/UX Designer</span></h2>
        <div className="social-icons">
          {/* Add your social media icons here */}
        </div>
        <div className="action-buttons">
          <button className="download-cv-btn">Download CV</button>
          <button className="contact-me-btn">Contact Me</button>
        </div>
      </div>
    </header>
  );
}

export default Header;