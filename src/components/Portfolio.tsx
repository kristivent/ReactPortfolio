import React from 'react';
import app1 from '../assets/images/app1.jpg';
import app2 from '../assets/images/app2.jpg';
import app3 from '../assets/images/app3.jpg';
import app4 from '../assets/images/app4.jpg';
import app5 from '../assets/images/app5.jpg';
import app6 from '../assets/images/app6.jpg';

const Portfolio: React.FC = () => {
  const applications = [
    { img: app1, title: 'Nodejs and Inquirer: Vehicle Builder', deployedLink: 'https://deployed-link-1.com', githubLink: 'https://github.com/kristivent/VehicleBuilderNode' },
    { img: app2, title: 'Postgres: Employee Tracker', deployedLink: 'https://deployed-link-2.com', githubLink: 'https://github.com/kristivent/EmployeeTrackSQL' },
    { img: app3, title: 'Nodejs: README Generator', deployedLink: 'https://deployed-link-3.com', githubLink: 'https://github.com/kristivent/READMEgen_nodejs' },
    { img: app4, title: 'React: Portfolio', deployedLink: 'https://deployed-link-4.com', githubLink: 'https://github.com/kristivent/ReactPortfolio' },
    { img: app5, title: 'Application 5 TBA', deployedLink: 'https://deployed-link-5.com', githubLink: 'https://github.com/your-username/repo-5' },
    { img: app6, title: 'Application 6 TBA', deployedLink: 'https://deployed-link-6.com', githubLink: 'https://github.com/your-username/repo-6' },
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
                <a href={app.deployedLink} className="btn btn-primary" target="_blank" rel="noopener noreferrer">Deployed Application</a>
                <a href={app.githubLink} className="btn btn-secondary ml-2" target="_blank" rel="noopener noreferrer">GitHub Repository</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;