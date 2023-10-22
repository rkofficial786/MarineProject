"use client";

import React, { useEffect, useState } from "react";
import { CarouselItem } from "./CarouselItem";
import "./crousel.css"
import { crouselData } from "./craouselData";

export const Crousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = crouselData.length - 1;
    } else if (newIndex >= crouselData.length) {
      newIndex = 0;
    }

    setActiveIndex(newIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      updateIndex(activeIndex + 1);
    }, 5000);

    return () => clearInterval(interval); // Clear the interval on component unmount
  }, [activeIndex]);

  return (
    <div className="carousel">
      <div
        className="inner"
        style={{ transform: `translate(-${activeIndex * 100}%)` }}
      >
        {crouselData.map((item, index) => {
          return <CarouselItem key={index} item={item} width={"100%"} />;
        })}
      </div>
    </div>
  );
};
