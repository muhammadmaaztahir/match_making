import React, { useState } from "react";
import carousel1 from '../assets/carousel1.png'
import carousel2 from '../assets/carousel2.png'
import carousel3 from '../assets/carousel3.png'

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    {
      image: carousel1,
    },
    {
      image: carousel2,
    },
    {
      image: carousel3,
    },
    {
      image: carousel1,
  
    },
    {
      image: carousel2,
    },
  ];

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 3 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 3 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative w-full max-w-6xl mx-auto">
      <div className="flex justify-end space-x-2 mb-4">
        <button
          className="text-white bg-gray-500 p-2"
          onClick={prevSlide}
        >
          &#8592;
        </button>
        <button
          className="text-white bg-gray-500 p-2"
          onClick={nextSlide}
        >
          &#8594;
        </button>
      </div>

      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 33.33}%)` }}
        >
          {slides.map((slide, index) => (
            <div key={index} className="min-w-[33.33%] flex flex-col items-center p-4">
              <img
                src={slide.image}
                alt={slide.title}
                className="h-64 object-cover"
              />
              <h2 className="mt-4 text-xl font-bold">{slide.title}</h2>
              <p className="text-gray-600">{slide.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center mt-4">
        <button className="bg-blue-600 text-white px-4 py-2 rounded">
          Read More
        </button>
      </div>
    </div>
  );
};

export default Carousel;
