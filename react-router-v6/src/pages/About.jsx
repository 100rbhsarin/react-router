import React from "react";
import "./About.css";

export const About = () => {
  return (
    <section className="about-container">
      <div className="about-header">
        <h1 className="about-title">About Me</h1>
        <p className="about-subtitle">
          I am a passionate developer, designer, and dreamer, dedicated to turning ideas into reality.
        </p>
      </div>
      <div className="about-content">
        <p>
          With a deep love for technology and creativity, I have spent the past years exploring web development, designing user-centric solutions, and continuously learning new skills.  
          My journey started with simple code experiments and has grown into a full-fledged passion for building scalable, impactful projects.  
        </p>
        <p>
          When I'm not coding, you can find me exploring books, writing ideas in my journal, or connecting with like-minded individuals to create something meaningful.
        </p>
      </div>
    </section>
  );
};


