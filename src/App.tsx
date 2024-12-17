import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [currentSection, setCurrentSection] = useState('About Me');

  const renderSection = () => {
    switch (currentSection) {
      case 'About Me':
        return <AboutMe />;
      case 'Portfolio':
        return <Portfolio />;
      case 'Contact':
        return <Contact />;
      case 'Resume':
        return <Resume />;
      default:
        return <AboutMe />;
    }
  };

  return (
    <div className="App">
      <Header />
      <nav>
        <ul>
          <li onClick={() => setCurrentSection('About Me')}>About Me</li>
          <li onClick={() => setCurrentSection('Portfolio')}>Portfolio</li>
          <li onClick={() => setCurrentSection('Contact')}>Contact</li>
          <li onClick={() => setCurrentSection('Resume')}>Resume</li>
        </ul>
      </nav>
      <main>
        {renderSection()}
      </main>
      <Footer />
    </div>
  );
}

export default App;