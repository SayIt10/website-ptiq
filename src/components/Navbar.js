// components/Navbar.js
import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src="/img/logo_ptiq.png" alt="Company Logo" className="logo"/>
      </div>
      <div className="navbar-right">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#materials">Materi Pembelajaran</a></li>
          <li><a href="#team">Anggota Tim</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

