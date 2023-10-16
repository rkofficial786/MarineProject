import React, { useState, useEffect } from "react";
import ImageData from "../ImageData";

const { banner1, banner2, banner3 } = ImageData.ImageData;
const images = [banner1, banner2, banner3];

const ImageSlider = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      // Move to the next image
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change slide every 3 seconds

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="relative w-full">
      <div className="w-full h-64 md:h-1/2	 overflow-hidden">
        <div
          className="background-image"
          style={{
            backgroundImage: `url(${images[currentImageIndex]})`,
          }}
        />
      </div>
    </div>
  );
};

export default ImageSlider;
