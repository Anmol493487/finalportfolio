import React from "react";
import "./Navbar.css"; // Import your CSS file

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">Portfolio</div>
      <ul className="navbar-menu">
        <li className="navbar-item">
          <a href="#about" className="navbar-link">About</a>
        </li>
        <li className="navbar-item">
          <a href="#services" className="navbar-link">Services</a>
        </li>
        <li className="navbar-item">
          <a href="#skills" className="navbar-link">Skills</a>
        </li>
        <li className="navbar-item">
          <a href="#projects" className="navbar-link">Projects</a>
        </li>
        <li className="navbar-item">
          <a href="#timeline" className="navbar-link">Timeline</a>
        </li>
        <li className="navbar-item">
          <a href="#testimonials" className="navbar-link">Testimonials</a>
        </li>
        <li className="navbar-item">
          <a href="#social" className="navbar-link">Social</a>
        </li>
        <li className="navbar-item">
          <a href="#contact" className="navbar-link">Contact</a>
        </li>
      </ul>
    </nav>
  );
}
