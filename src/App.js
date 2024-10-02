import React from 'react';
import './style/styles.css';
import Navbar from './components/Navbar';
import HomeSlider from './components/Slider';
import About from './components/About';
import LearningMaterials from './components/LearningMaterials';
import Team from './components/Team';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <Navbar />
      <HomeSlider />
      <About />
      <LearningMaterials />
      <Team />
      <Footer />
    </div>
  );
}

export default App;
