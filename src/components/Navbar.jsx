import React from 'react';

const Navbar = () => {
  const handleScroll = (sectionId) => {
    // Mencari elemen berdasarkan ID
    const section = document.getElementById(sectionId);
    if (section) {
      // Jika elemen ditemukan, lakukan smooth scroll
      section.scrollIntoView({ behavior: 'smooth' });
    } else {
      // Jika elemen tidak ditemukan, tampilkan peringatan di console
      console.warn(`Section with ID '${sectionId}' not found.`);
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src="/img/logo_ptiq.png" alt="Company Logo" className="logo" />
      </div>
      <div className="navbar-right">
        <ul>
          <li>
            <a href="#home" onClick={() => handleScroll('home')}>
              Home
            </a>
          </li>
          <li>
            <a href="#about" onClick={() => handleScroll('about')}>
              About
            </a>
          </li>
          <li>
            <a href="#materials" onClick={() => handleScroll('materials')}>
              Materi Pembelajaran
            </a>
          </li>
          <li>
            <a href="#team" onClick={() => handleScroll('team')}>
              Anggota Tim
            </a>
          </li>
          <li>
            <a href="#contact" onClick={() => handleScroll('contact')}>
              Contact Us
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
