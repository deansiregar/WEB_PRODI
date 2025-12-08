import React, { useState, useEffect } from 'react';

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: 'slide1.jpg',
      title: 'ILMU KOMPUTER',
      description: 'Program Studi Unggul di Bidang Artificial Intelligence'
    },
    {
      image: 'slide2.png',
      title: 'ILMU KOMPUTER',
      description: 'Menyiapkan Mahasiswa untuk Menjadi Programmer Handal'
    },
    {
      image: 'slide3.jpg',
      title: 'ILMU KOMPUTER',
      description: 'Fasilitas Laboratorium yang Modern dan Lengkap'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 7000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="carousel-section">
      <div className="carousel-container">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`carousel-slide ${currentSlide === index ? 'active' : ''}`}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="carousel-overlay"></div>
            <div className="carousel-text">
              <h2>{slide.title}</h2>
              <p>{slide.description}</p>
            </div>
          </div>
        ))}
        <div className="carousel-indicators">
          {slides.map((_, index) => (
            <div
              key={index}
              className={`carousel-indicator ${currentSlide === index ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;