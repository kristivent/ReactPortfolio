import React, { useState } from 'react';

const Header: React.FC = () => {
  const [currentSection, setCurrentSection] = useState('About Me');

  const handleNavClick = (section: string) => {
    setCurrentSection(section);
    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="bg-primary text-dark p-3">
      <div className="container">
        <h1>Developer's Name</h1>
        <nav>
          <ul className="nav nav-pills">
            <li className="nav-item">
              <a
                href="#about-me"
                className={`nav-link ${currentSection === 'About Me' ? 'active' : ''}`}
                onClick={() => handleNavClick('About Me')}
              >
                About Me
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#portfolio"
                className={`nav-link ${currentSection === 'Portfolio' ? 'active' : ''}`}
                onClick={() => handleNavClick('Portfolio')}
              >
                Portfolio
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#contact"
                className={`nav-link ${currentSection === 'Contact' ? 'active' : ''}`}
                onClick={() => handleNavClick('Contact')}
              >
                Contact
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#resume"
                className={`nav-link ${currentSection === 'Resume' ? 'active' : ''}`}
                onClick={() => handleNavClick('Resume')}
              >
                Resume
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;