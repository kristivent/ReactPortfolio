import React from 'react';
import developer from '../assets/images/developer.jpg';

const AboutMe: React.FC = () => {
  return (
    <section id="about-me">
      <h2>About Me</h2>
      <img src={developer} alt="Developer" />
      <p>Current high school English teacher and department chair with 18 years experience. Recent Coding and Programming BootCamp graduate.  Looking to make career change and/or gain experience in a technology-based career path.</p>
    </section>
  );
};

export default AboutMe;