import React from 'react';

const Resume: React.FC = () => {
  return (
    <section id="resume">
      <h2>Resume</h2>
      <a href="path/to/resume.pdf" download>Download Resume</a>
      <h3>Proficiencies</h3>
      <ul>
        <li>Leadership</li>
        <li>Communication Skills 2</li>
        <li>Experience with: HTML, CSS, JavaScript, TypeScript, React, Nodejs, Postgres</li>
      </ul>
    </section>
  );
};

export default Resume;