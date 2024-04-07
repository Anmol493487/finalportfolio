import React, { useState } from "react";
import "./Contact.css"; // Import your CSS file

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    // Your form submission logic here
    console.log("Form submitted!");
  }

  return (
    <section id="contact" className="contact-section">
      <div className="c1">
        <form
          name="contact"
          onSubmit={handleSubmit}
          className="c3"
        >
          <h2 className="contact-title">Hire Me</h2>
          <p className="contact-description">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum
            suscipit officia aspernatur veritatis. Asperiores, aliquid?
          </p>
          <div className="contact-field">
            <label htmlFor="name" className="contact-label">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="contact-input"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="contact-field">
            <label htmlFor="email" className="contact-label">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="contact-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="contact-field">
            <label htmlFor="message" className="contact-label">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="contact-input contact-textarea"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <button type="submit" className="contact-button">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
