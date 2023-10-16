import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const SlideshowCard = ({ itemsArray }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % itemsArray.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [itemsArray.length]);

  const handlePrevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + itemsArray.length) % itemsArray.length
    );
  };

  const handleNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % itemsArray.length);
  };

  return (
    <div
      className="w-full bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-xl"
      data-aos="zoom-in"
    >
      <div className="relative h-56 md:h-56 lg:h-96">
        {itemsArray.map((image, index) => (
          <div
            key={index}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ${
              index === currentIndex
                ? "opacity-100"
                : "opacity-0 pointer-events-none"
            }`}
          >
            <img
              src={image.img}
              alt={image.name}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
      <div className="p-3 flex justify-between items-center">
        <button
          className="text-gray-600 focus:outline-none hover:text-gray-900"
          onClick={handlePrevSlide}
          aria-label="Previous Slide"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <div className="px-3 ">
          <h2 className="text-lg font-semibold text-gray-800 flex justify-center">
            {itemsArray[currentIndex].name}
          </h2>
        </div>
        <button
          className="text-gray-600 focus:outline-none hover:text-gray-900"
          onClick={handleNextSlide}
          aria-label="Next Slide"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default SlideshowCard;
