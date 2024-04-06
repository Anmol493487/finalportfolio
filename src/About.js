import React from "react";
import "./About.css"; // Import your CSS file

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="about-title">
            Hi, I'm Reed.
            <br className="hidden lg:inline-block" />I love to build amazing
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
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="about-image"
            alt="hero"
            src="./coding.svg"
          />
        </div>
      </div>
    </section>
  );
}
