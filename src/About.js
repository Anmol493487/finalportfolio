import React from "react";
import "./About.css"; // Import your CSS file

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="s1">
        <div className="s2" >
          <h1 className="about-title">
            Hi, I'm Reed.
            <br className="s3" />I love to build amazing
            apps.
          </h1>
          <p className="about-description">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui
            laborum quasi, incidunt dolore iste nostrum cupiditate voluptas?
            Laborum, voluptas natus?
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="about-button work-button"
            >
              Work With Me
            </a>
            <a
              href="#projects"
              className="about-button see-work-button"
            >
              See My Past Work
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
