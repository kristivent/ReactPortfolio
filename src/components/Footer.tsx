import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark text-white py-3">
      <div className="container text-center">
        <p>
          <a href="https://github.com/kristivent" target="_blank" rel="noopener noreferrer" className="text-white mx-2">GitHub</a> | 
          <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="text-white mx-2">LinkedIn</a> | 
          <a href="mailto:ventk84@gmail.com" className="text-white mx-2">Email</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;