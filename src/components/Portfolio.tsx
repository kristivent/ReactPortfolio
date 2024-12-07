import React from 'react';
import app1 from '../assets/app1.jpg';
import app2 from '../assets/app2.jpg';
import app3 from '../assets/app3.jpg';
import app4 from '../assets/app4.jpg';
import app5 from '../assets/app5.jpg';
import app6 from '../assets/app6.jpg';

const Portfolio: React.FC = () => {
  const applications = [
    { img: app1, title: 'Nodejs and Inquirer: Vehicle Builder', deployedLink: 'deployed-link-1', githubLink: 'github-link-1' },
    { img: app2, title: 'Postgres: Employee Tracker', deployedLink: 'deployed-link-2', githubLink: 'github-link-2' },
    { img: app3, title: 'Nodejs: README Generator', deployedLink: 'deployed-link-3', githubLink: 'github-link-3' },
    { img: app4, title: 'React: Portfolio', deployedLink: 'deployed-link-4', githubLink: 'github-link-4' },
    { img: app5, title: 'Application 5 TBA', deployedLink: 'deployed-link-5', githubLink: 'github-link-5' },
    { img: app6, title: 'Application 6 TBA', deployedLink: 'deployed-link-6', githubLink: 'github-link-6' },
  ];

  return (
    <section id="portfolio" className="container my-5">
      <h2 className="text-primary mb-4">Portfolio</h2>
      <div className="row">
        {applications.map((app, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card">
              <img src={app.img} className="card-img-top" alt={app.title} />
              <div className="card-body">
                <h5 className="card-title">{app.title}</h5>
                <a href={app.deployedLink} className="btn btn-primary">Deployed Application</a>
                <a href={app.githubLink} className="btn btn-secondary ml-2">GitHub Repository</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio; 