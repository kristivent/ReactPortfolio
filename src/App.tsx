import React from 'react';
import Header from './components/Header';
import Project from './components/Project';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <section id="about">
          <h2>About Me</h2>
          <p>I am a recent Coding and Programming Bootcamp graduate hoping to make a career change into the technology field.  I am currently an 18-year veteran high school English teacher and department chair.</p>
        </section>
        <section id="projects">
          <h2>My Projects</h2>
          <Project title="Project 1" description="Description of project 1." />
          <Project title="Project 2" description="Description of project 2." />
          <Project title="Project 3" description="Description of project 3." />
          <Project title="Project 4" description="Description of project 4." />
          <Project title="Project 5" description="Description of project 5." />
          <Project title="Project 6" description="Description of project 6." />
        </section>
        <section id="contact">
          <h2>Contact Me</h2>
          <p>Provide your contact information here.</p>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;
