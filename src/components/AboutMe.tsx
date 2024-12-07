import React from 'react';
import developer from '../assets/images/developer.jpg';

const AboutMe: React.FC = () => {
  return (
    <section id="about-me" className="container my-5">
      <h2 className="text-primary mb-4">About Me</h2>
      <div className="row">
        <div className="col-md-4">
          <img src={developer} alt="Developer" className="img-fluid rounded-circle" />
        </div>
        <div className="col-md-8">
          <p>Current high school English teacher and department chair with 18 years experience.</p>
          <p>M.S.Ed. in Education - Instructional Technology</p>
          <p>B.S.Ed. in Secondary Education - English</p>
          <p>Currently enrolled in Coding and Programming BootCamp.</p>
          <p>Looking to make a career change and/or gain experience in a technology-based career path.</p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;