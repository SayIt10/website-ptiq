// components/Slider.js
import React from 'react';

const Slider = () => {
  const slides = [
    { id: 1, src: '/img/slide1.jpg', alt: 'Slide 1' },
    { id: 2, src: '/img/slide2.jpg', alt: 'Slide 2' },
    { id: 3, src: '/img/slide3.jpg', alt: 'Slide 3' }
  ];

  return (
    <div className="slider">
      {slides.map((slide) => (
        <div className="slide" key={slide.id}>
          <img src={slide.src} alt={slide.alt} className="slide-image" />
        </div>
      ))}
    </div>
  );
};

export default Slider;
