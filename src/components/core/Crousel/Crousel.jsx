"use client";

import React, { useEffect, useState } from "react";
import { CarouselItem } from "./CarouselItem";
import "./crousel.css"
import { crouselData } from "./craouselData";
import {BsArrowRight,BsArrowLeft} from "react-icons/bs"
import {IoRadioButtonOnSharp,} from "react-icons/io5"
import {IoMdRadioButtonOff} from "react-icons/io"

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
    <div className="carousel relative">
      <div
        className="inner"
        style={{ transform: `translate(-${activeIndex * 100}%)` }}
      >
        {crouselData.map((item, index) => {
          return <CarouselItem key={index} item={item} width={"100%"} />;
        })}
      </div>



      {/* buttons */}

      <div className="carouselButton  absolute bottom-[5%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <button
          className="buttonArrow"
          onClick={() => {
            updateIndex(activeIndex - 1);
          }}
        >
          <span ><BsArrowLeft className="text-white text-2xl hover:scale-110" /></span>{" "}
        </button>
        <div className="indicators">
          {crouselData.map((item, index) => {
            return (
              <button
                className="indicator_buttons"
                onClick={() => {
                  updateIndex(index);
                }}
                key={index}
              >
                <span
                 
                >
                 {/* <IoRadioButtonOnSharp  className={` ${
                    index === activeIndex
                      ? "indicator_symbol_active"
                      : "indicator_symbol"
                  }`}/> */}
                  {
                    index === activeIndex ? <IoRadioButtonOnSharp className="text-cyan-400" /> :<IoMdRadioButtonOff className="text-cyan-400"/>
                  }
                </span>
              </button>
            );
          })}
        </div>
        <button
          className="button_arrow"
          onClick={() => {
            updateIndex(activeIndex + 1);
          }}
        >
          <span ><BsArrowRight className="text-white text-2xl hover:scale-110"/></span>
        </button>
      </div>



    </div>
  );
};
