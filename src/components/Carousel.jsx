import React, { useState, useEffect } from "react";
import slide1 from "../assets/images/about/equipe1.jpg";
import slide2 from "../assets/images/about/equipe3.jpg";
import slide3 from "../assets/images/about/equipe2.jpg";


const Carousel = () => {
  const slides = [slide1, slide2, slide3];
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === slides.length - 1 ? 0 : prevSlide + 1
      );
    }, 3000); // Change d'image toutes les 3 secondes (3000ms)

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-96">
      {slides.map((slide, index) => (
        <img
          key={index}
          src={slide}
          alt={`Slide ${index + 1}`}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
    </div>
  );
};

export default Carousel;
