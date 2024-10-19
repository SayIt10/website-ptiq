import React, { useEffect, useState } from 'react';
import './style/styles.css';
import Navbar from './components/Navbar';
import HomeSlider from './components/Slider';
import About from './components/About';
import LearningMaterials from './components/LearningMaterials';
import Team from './components/Team';
import Footer from './components/Footer';

const App = () => {
  const [showScroll, setShowScroll] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setShowScroll(true);
    } else {
      setShowScroll(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <Navbar />
      <HomeSlider />
      <About />
      <LearningMaterials />
      <Team />
      <Footer />

      {showScroll && (
        <button className="floating-button" onClick={scrollToTop}>
          ^
        </button>
      )}
    </div>
  );
}

export default App;
