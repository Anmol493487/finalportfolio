import React, { useState, useEffect } from "react";
import "./Skills.css"; // Import your CSS file

export default function Skills() {
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch skills data from the API
    fetch("https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae")
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        // Check if data.skills is defined before setting the state
        if (data.user.skills) {
          setSkills(data.user.skills);
          setLoading(false); // Set loading to false when data is fetched
        } else {
          console.error("Skills data is undefined:", data);
          setLoading(false); // Set loading to false in case of error
        }
      })
      .catch((error) => {
        console.error("Error fetching skills:", error);
        setLoading(false); // Set loading to false in case of error
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <section id="skills" className="skills-section">
      <div className="sk1">
        <div className="sk2">
          <h1 className="skills-title">Skills & Technologies</h1>
          <p className="skills-description">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi sit
            ipsa delectus eum quo voluptas aspernatur accusantium distinctio
            possimus est.
          </p>
        </div>
        <div className="skills-list">
          {skills.map((skill) => (
            <div key={skill._id} className="skill">
              <img
                alt="skill"
                src={skill.image.url}
                className="skill-image"
              />
              <div className="skill-details">
                <h2 className="skill-name">{skill.name}</h2>
                <div className="skill-progress-bar">
                  <div
                    className="skill-progress"
                    style={{ width: `${skill.percentage}%` }}
                  ></div>
                </div>
                <span className="skill-percentage">{skill.percentage}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
