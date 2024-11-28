import React from 'react';

const Portfolio: React.FC = () => {
  return (
    <section>
      <h2>Portfolio</h2>
      <div>
        {/* Repeat for six applications */}
        <div>
          <img src="path/to/image.jpg" alt="Application" />
          <h3>Application Title</h3>
          <a href="deployed-link">Deployed Application</a>
          <a href="github-link">GitHub Repository</a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;