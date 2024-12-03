import React from 'react';
import app1 from '../assets/app1.jpg';
import app2 from '../assets/app2.jpg';
import app3 from '../assets/app3.jpg';
import app4 from '../assets/app4.jpg';
import app5 from '../assets/app5.jpg';
import app6 from '../assets/app6.jpg';

const Portfolio: React.FC = () => {
  return (
    <section id="portfolio">
      <h2>Portfolio</h2>
      <div>
        <div>
          <img src={app1} alt="Application 1" />
          <h3>Application 1</h3>
          <a href="deployed-link-1">Deployed Application</a>
          <a href="github-link-1">GitHub Repository</a>
        </div>
        <div>
          <img src={app2} alt="Application 2" />
          <h3>Application 2</h3>
          <a href="deployed-link-2">Deployed Application</a>
          <a href="github-link-2">GitHub Repository</a>
        </div>
        <div>
          <img src={app3} alt="Application 3" />
          <h3>Application 3</h3>
          <a href="deployed-link-3">Deployed Application</a>
          <a href="github-link-3">GitHub Repository</a>
        </div>
        <div>
          <img src={app4} alt="Application 4" />
          <h3>Application 4</h3>
          <a href="deployed-link-4">Deployed Application</a>
          <a href="github-link-4">GitHub Repository</a>
        </div>
        <div>
          <img src={app5} alt="Application 5" />
          <h3>Application 5</h3>
          <a href="deployed-link-5">Deployed Application</a>
          <a href="github-link-5">GitHub Repository</a>
        </div>
        <div>
          <img src={app6} alt="Application 6" />
          <h3>Application 6</h3>
          <a href="deployed-link-6">Deployed Application</a>
          <a href="github-link-6">GitHub Repository</a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;