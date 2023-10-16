import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import NavLinks from "../Navbar/NavLinks";
import NavBarDesign from "../Navbar/NavbarDesign";

import ImageData from "../../ImageData";

import "./styles.css";

const Navbar = () => {
  const [top, setTop] = useState(true);
  const [isOpen, setisOpen] = React.useState(false);
  function handleClick() {
    setisOpen(!isOpen);
  }

  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 10 ? setTop(false) : setTop(true);
    };
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [top]);

  return (
    <nav className="bg-white text-gray-800 py-2 ">
      <div className="container mx-5 flex justify-between items-center">
        <div className="flex items-center">
          <img
            src={ImageData.ImageData.logo}
            alt="logo"
            className="ml-0 mr-0"
            width={500}
            height={600}
            style={{ objectFit: "cover" }}
          />
          
        </div>
        <div className="group flex flex-col items-center">
          <button
            className="p-2 rounded-lg lg:hidden text-blue-900"
            onClick={handleClick}
          >
            <svg
              className="h-6 w-6 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              {isOpen && (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                />
              )}
              {!isOpen && (
                <path
                  fillRule="evenodd"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                />
              )}
            </svg>
          </button>
          <div className="hidden space-x-6 lg:inline-block p-6">
            <ul className=" flex ">
              <NavBarDesign />
            </ul>
          </div>

          <div
            className={`fixed z-10 transition-transform duration-400 ease-in-out transit flex  left-0 w-full h-auto rounded-md p-12 bg-white rounded-lg block lg:hidden shadow-xl top-14 ${
              isOpen ? "block" : "hidden"
            } `}
            style={{ top: "80px" }}
          >
            <ul className=" ">
              <NavBarDesign />
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
