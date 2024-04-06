import React from "react";

import Navbar from "./Home";
import About from "./About";
import Service from "./Services";
import Skills from "./Skills";
import Projects from "./Project";
import TimeLine from "./TimeLine";
import Testimonials from "./Testimonials";
import Contact from "./Contact";

import "./styles.css";

export default function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <Navbar />
      <About />
      <Service />
      <Skills />
      <Projects />
      <TimeLine />
      <Testimonials />
      <Contact />
    </main>
  );
}
