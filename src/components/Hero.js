import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/Navbar/NavBar";
import heroImg from "../images/web-dev.svg";
import boatImg from "../images/boat3.png";

import ImageData from "../ImageData";
import "./hero.css";

const Hero = () => {
  const { banner1, banner2, banner3 } = ImageData.ImageData;
  const img = [banner1, banner2, banner3];

  const bannerTexts = [
    "Hydraulic Work and Machining Work",
    "All Types of Crane Service, Repair and Load Testing",
    "Steel, Pipe Frabrication , HydroBlasting and Coating",
    "All Types of Anchorage and Offshore Works",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(changeBackgroundImage, 3000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const changeBackgroundImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % img.length);
  };

  return (
    <>
      <div className="hero" id="hero">
        <div
          className="m-auto h-screen overflow-hidden mx-4 mt-8 lg:mt-4 p-2 md:p-12 h-5/6"
          data-aos="zoom-in"
        >
          <div className="flex flex-col lg:flex-row py-0 justify-around text-center lg:text-left">
            <div
              className="lg:w-1/2 flex flex-col justify-center"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <h1 className="mb-5 md:text-5xl text-3xl font-bold text-blue-900">
                {/* We build digital solutions to help businesses scale */}We have Earned People's Trust
              </h1>

              <div className="text-xl font-semibold tracking-tight mb-8 text-gray-500">
                We are specialize in:
              </div>

              <div className="flex flex-col justify-center">
                {bannerTexts.map((text,index) => (
                  <div className=" flex justify-center items-center lg:justify-start  mb-4 space-x-2  " key={index}>
                    <div className="text-blue-900 ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="25"
                        viewBox="0 0 24 24"
                        className="fill-current"
                      >
                        <path d="M2 12h2a7.986 7.986 0 0 1 2.337-5.663 7.91 7.91 0 0 1 2.542-1.71 8.12 8.12 0 0 1 6.13-.041A2.488 2.488 0 0 0 17.5 7C18.886 7 20 5.886 20 4.5S18.886 2 17.5 2c-.689 0-1.312.276-1.763.725-2.431-.973-5.223-.958-7.635.059a9.928 9.928 0 0 0-3.18 2.139 9.92 9.92 0 0 0-2.14 3.179A10.005 10.005 0 0 0 2 12zm17.373 3.122c-.401.952-.977 1.808-1.71 2.541s-1.589 1.309-2.542 1.71a8.12 8.12 0 0 1-6.13.041A2.488 2.488 0 0 0 6.5 17C5.114 17 4 18.114 4 19.5S5.114 22 6.5 22c.689 0 1.312-.276 1.763-.725A9.965 9.965 0 0 0 12 22a9.983 9.983 0 0 0 9.217-6.102A9.992 9.992 0 0 0 22 12h-2a7.993 7.993 0 0 1-.627 3.122z"></path>
                        <path d="M12 7.462c-2.502 0-4.538 2.036-4.538 4.538S9.498 16.538 12 16.538s4.538-2.036 4.538-4.538S14.502 7.462 12 7.462zm0 7.076c-1.399 0-2.538-1.139-2.538-2.538S10.601 9.462 12 9.462s2.538 1.139 2.538 2.538-1.139 2.538-2.538 2.538z"></path>
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold tracking-tight  text-gray-500">
                      {text}
                    </h3>
                  </div>
                ))}
              </div>
            </div>

            <div
              className="flex  w-auto	  "
              data-aos="fade-up"
              data-aos-delay="700"
            >
              <img
                alt="card img"
                className="rounded-t float-right duration-1000 w-full"
                src={boatImg}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
