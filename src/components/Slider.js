import React from 'react';

const Slider = () => {
  const handleGetStarted = () => {
    // Scroll ke bagian 'explore' atau bagian tertentu di halaman
    document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="slider">
      <div className="content">
        <h1>Selamat datang di dunia seru kami! 🎉</h1>
        <p>
          Kami adalah Kelompok 1 dari mata kuliah TIK di Universitas PTIQ Jakarta, dan di sini kami ingin ngajak kamu untuk belajar sambil menikmati keseruan! Di website ini, kamu nggak cuma dapetin info penting, tapi juga cerita seru, game interaktif, dan kejutan lainnya yang bikin belajar terasa kayak main. 🚀 Penasaran? Yuk, jelajahi semua yang ada di sini dan rasakan gimana serunya belajar tanpa rasa bosan. Karena buat kami, belajar harus seru, asyik, dan bikin kamu ketagihan buat terus eksplor! 😎
        </p>
        <button className="get-started-btn" onClick={handleGetStarted}>
          Let’s get started!
        </button>
      </div>
    </section>
  );
};

export default Slider;
