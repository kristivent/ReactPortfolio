import React, { useState } from 'react';

const Header: React.FC = () => {
  const [currentSection, setCurrentSection] = useState('About Me');

  const handleNavClick = (section: string) => {
    setCurrentSection(section);
    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header>
      <h1>Developer's Name</h1>
      <nav>
        <ul>
          <li className={currentSection === 'About Me' ? 'active' : ''}>
            <a href="#about-me" onClick={() => handleNavClick('About Me')}>About Me</a>
          </li>
          <li className={currentSection === 'Portfolio' ? 'active' : ''}>
            <a href="#portfolio" onClick={() => handleNavClick('Portfolio')}>Portfolio</a>
          </li>
          <li className={currentSection === 'Contact' ? 'active' : ''}>
            <a href="#contact" onClick={() => handleNavClick('Contact')}>Contact</a>
          </li>
          <li className={currentSection === 'Resume' ? 'active' : ''}>
            <a href="#resume" onClick={() => handleNavClick('Resume')}>Resume</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;