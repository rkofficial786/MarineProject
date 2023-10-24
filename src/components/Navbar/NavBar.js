import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import NavLinks from "../Navbar/NavLinks";
import NavBarDesign from "../Navbar/NavbarDesign";
import ImageData from "../../ImageData";
import "./styles.css";
import { BsFillTelephoneFill } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { BiCloudDownload } from "react-icons/bi";
import brochureFile from "../../media/grockle_brochure-epayindia.pdf";

const Navbar = () => {
  const [top, setTop] = useState(true);
  const [isOpen, setisOpen] = React.useState(false);
  function handleClick() {
    setisOpen(!isOpen);
  }

  const navigate = useNavigate();

  const handleDownload = () => {
    const anchor = document.createElement("a");
    anchor.href = brochureFile;
    anchor.download = "brochure.pdf";
    anchor.target = "_blank";
    anchor.click();
  };

  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 10 ? setTop(false) : setTop(true);
    };
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [top]);

  return (
    <nav className="bg-white text-gray-800 pt-2">
      <div className=" flex justify-between lg:items-center px-8">
        <div className="flex items-center">
          <img
            src={ImageData.ImageData.logo}
            alt="logo"
            onClick={() => navigate("/")}
            className="ml-0 mr-0 w-[300px]  lg:w-[400px] cursor-pointer"
            // width={500}
            // height={600}
            style={{ objectFit: "cover" }}
            loading="lazy"
          />
        </div>

        {/* contact */}

        <div className="flex  justify-end flex-grow">
          <div
            className="bg-gray-500 mr-2 text-white p-2 px-4 gap-2 items-center hidden lg:flex cursor-pointer hover:scale-95 duration-300"
            onClick={handleDownload}
          >
            <BiCloudDownload></BiCloudDownload>
            <p>Brochure</p>
          </div>
          <div className="bg-blue-900  text-white p-2  px-4 gap-2 items-center hidden lg:flex cursor-pointer">
            <BsFillTelephoneFill></BsFillTelephoneFill>
            <p className="border-r-[1px]  pr-4 border-black">+6581867004</p>
          </div>
          <div className="bg-blue-900 text-white p-2   gap-2 items-center hidden lg:flex cursor-pointer">
            <AiOutlineMail></AiOutlineMail>
            <a href="mailto:admin@appmarines.com">admin@appmarines.com</a>
          </div>
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
        </div>
      </div>
      <hr />

      {/* lower navbar */}
      <div className="flex flex-col items-center lower-nav-bg">
        <div className="hidden space-x-6 lg:inline-block py-4">
          <ul className=" flex ">
            <NavBarDesign setisOpen={setisOpen} />
          </ul>
        </div>

        {/* mobile */}
        <div
          className={`fixed z-10 transition-transform duration-400 ease-in-out transit flex  justify-center items-center left-0 w-full h-auto rounded-md p-12 bg-white  lg:hidden shadow-xl top-16 ${
            isOpen ? "block" : "hidden"
          } `}
          // style={{ top: "80px" }}
        >
          <ul className="flex justify-center items-center flex-col">
            <NavBarDesign setisOpen={setisOpen} />
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
