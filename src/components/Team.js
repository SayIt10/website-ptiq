// components/Team.js
import React from 'react';
import Slider from 'react-slick';
import '../images/anggota/fauzi.gif'; // Pastikan ini adalah jalur yang benar untuk gambar
import '../images/anggota/della.gif';
import '../images/anggota/indah.gif';
import '../images/anggota/andini.gif';
import '../images/anggota/firah.gif';
import '../images/anggota/kintan.gif';
import '../images/anggota/fina.gif';
//import '../images/anggota/aghniya.gif';
import '../images/anggota/zullfahmi.gif';
import '../images/anggota/eka.gif';
import '../images/anggota/wildan.gif';
//import '../images/anggota/fatha.gif';
import '../style/styles.css';

const fauzi = require('../images/anggota/fauzi.gif');
const della = require('../images/anggota/della.gif');
const indah = require('../images/anggota/indah.gif');
const andini = require('../images/anggota/andini.gif');
const firah = require('../images/anggota/firah.gif');
const kintan = require('../images/anggota/kintan.gif');
const fina = require('../images/anggota/fina.gif');
//const aghniya = require('../images/anggota/aghniya.gif');
const zullfahmi = require('../images/anggota/zullfahmi.gif');
const eka = require('../images/anggota/eka.gif');
const wildan = require('../images/anggota/wildan.gif');
//const fatha = require('../images/anggota/fatha.gif');

const teamMembers = [
  { name: 'Fauzi Ramdani', role: 'Project Leader(PL)', photo: fauzi },
  { name: 'Della Fatma Wijaya', role: 'Anggota', photo: della },
  { name: 'Indah Nihayati', role: 'Anggota', photo: indah },
  { name: 'Andini Fajri', role: 'Anggota', photo: andini },
  { name: 'Firah Khansa Nuraini', role: 'Anggota', photo: firah },
  { name: 'Kintan Dwi Banowati', role: 'Anggota', photo: kintan },
  { name: 'Fina Rahmania', role: 'Anggota', photo: fina },
  //{ name: 'Aghniya Siti Fatimah', role: 'Anggota', photo: aghniya },
  { name: 'Mhd zullfahmi', role: 'Anggota', photo: zullfahmi },
  { name: 'Eka Hardiansyah', role: 'Anggota', photo: eka },
  { name: 'Ahmad Wildan', role: 'Anggota', photo: wildan },
  //{ name: 'Fatha Meiva Sheptian', role: 'Anggota', photo: fatha },
];

// Pengaturan untuk slider
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1, // Pastikan pengguliran satu kartu
      },
    },
  ],
};

const Team = () => {
  return (
    <section id="team">
      <h2>Anggota Tim</h2>
      <Slider {...settings}>
        {teamMembers.map((member, index) => (
          <div className="team-card" key={index}>
            <div className="team-photo" style={{ backgroundImage: `url(${member.photo})` }}></div>
            <h3 className="team-name">{member.name}</h3>
            <p className="team-role">{member.role}</p>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Team;
