import React, { useEffect, useState, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './style/styles.css';
import Navbar from './components/Navbar';
import HomeSlider from './components/Slider';
import About from './components/About';
import LearningMaterials from './components/LearningMaterials';
import Team from './components/Team';
import Footer from './components/Footer';
import MaterialDetail from './components/materialdetail'; // Import the MaterialDetail component
import { FaArrowUp } from 'react-icons/fa'; // Mengimpor ikon panah ke atas dari Font Awesome
import ContactUs from './components/contact';
import backSound from './images/sound/backsound.mp3';

const App = () => {
  const [showScroll, setShowScroll] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef(null); // Membuat referensi untuk elemen audio

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

  useEffect(() => {
    // Mengatur mute dan volume saat komponen dimuat
    const audio = audioRef.current;
    if (audio) {
      audio.volume = 0.5; // Atur volume default
      audio.muted = isMuted; // Mute jika isMuted true
      audio.play().catch((error) => {
        console.error('Error playing audio:', error);
      });
    }
  }, [isMuted]);

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  return (
    <Router>
      <div>
        {/* Backsound */}
        <audio ref={audioRef} src={backSound} loop />
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <HomeSlider />
              <About />
              <LearningMaterials />
              <Team />
              <ContactUs />
              <Footer />
            </>
          } />
          <Route path="/material/:title" element={<MaterialDetail />} /> {/* Dynamic route for learning material */}
        </Routes>

        {showScroll && (
          <button className="floating-button" onClick={scrollToTop}>
            <FaArrowUp />
          </button>
        )}

        {/* Kontrol mute, bisa diaktifkan dengan menambahkan tombol */}
        <div style={{ display: 'none' }}>
          <button onClick={toggleMute}>
            {isMuted ? 'Unmute' : 'Mute'}
          </button>
        </div>
      </div>
    </Router>
  );
}

export default App;
