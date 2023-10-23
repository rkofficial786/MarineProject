import React from "react";
import { Link } from "react-router-dom";
import ImageData, { logo } from "./../ImageData";

const Footer = () => {
  const logos = {
    // maxWidth: "380px",
    height: "auto",
    // width: "25vw",
    minWidth: "250px",
  };
  return (
    <>
      <footer>
        <div className="fooer max-w-full mx-auto px-4 sm:px-6 bg-gray-800 border-t border-b py-30">
          {/* Top area: Blocks */}
          <div className="grid sm:grid-cols-12 gap-5 py-8 md:py-12 border-t border-gray-200 lg:ml-11">
            {/* 1st block */}
            <div className="col-span-12 lg:col-span-4">
              <div className="box-border border-b-4 border-blue-900 p-1 flex justify-center items-center bg-gray-200 text-center rounded-lg xl:w-82 mx-auto">
                {/* <h3 className="font-bold text-4xl mb-4">App</h3>
                <h3 className="font-bold text-4xl mb-4">Engeering</h3> */}
                <img
                  src={logo}
                  alt="Logo"
                  style={logos}
                  className="w-full object-fill md:w-auto"
                />
              </div>
            </div>

            {/* 2nd block */}
            <div className="col-span-6 md:col-span-6 lg:col-span-2 ml-7 mx-auto">
              <h6 className="mb-6 text-md font-semibold uppercase text-white">
                LINKS
              </h6>
              <ul className="text-md">
                <li className="mb-2">
                  <Link
                    to="/about"
                    className="mb-6 text-sm font-base text-gray-400 hover:text-white"
                  >
                    About
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    to="/services"
                    className="mb-6 text-sm font-base text-gray-400 hover:text-white"
                  >
                    Services
                  </Link>
                </li>{" "}
                <li className="mb-2">
                  <Link
                    to="/products"
                    className="mb-6 text-sm font-base text-gray-400 hover:text-white"
                  >
                    Products
                  </Link>
                </li>{" "}
                <li className="mb-2">
                  <Link
                    to="/spareParts"
                    className="mb-6 text-sm font-base text-gray-400 hover:text-white"
                  >
                    Spare Parts
                  </Link>
                </li>{" "}
                <li className="mb-2">
                  <Link
                    to="/foodAndBeverages"
                    className="mb-6 text-sm font-base text-gray-400 hover:text-white"
                  >
                    Food and Beverages
                  </Link>
                </li>
              </ul>
            </div>

            {/* 3rd block */}
            <div className="col-span-6 md:col-span-6 lg:col-span-6 mx-auto">
              <h6 className="mb-6 text-md font-semibold uppercase text-white ">
                CONTACT US
              </h6>
              <ul className="text-md">
                <li className="mb-2">
                  <p to="#" className="mb-6 text-sm font-base text-gray-400">
                    Singapore: - #08-14 PS100 100 PECK SEAH STREET
                    SINGAPORE(079333).
                    <br />
                    India: - NO:44, Govinthan nagar, Thaenpathi(PO) Sirkali(TK)
                    muayiladuthurai, Tamilnadu, India, 609111
                  </p>
                </li>
                <li className="mb-2">
                  <p to="#" className="mb-6 text-sm font-base text-gray-400 hover:text-white">
                    {/* Ph: */}
                    <a href="tel:+91 8220144237">+91 8220144237</a> ,
                    <a href="tel:+6596833561"> +6596833561</a>
                  </p>
                </li>
                <li className="mb-2">
                  <p
                    to="#"
                    className="text-gray-400  hover:text-white transition duration-250 ease-in-out"
                  >
                    {/* Email address:{" "} */}
                    <a href="mailto:admin@appmarines.com">
                      admin@appmarines.com
                    </a>
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <hr className="bg-gray-300 h-[1.5px]" />
          <div className="items-center justify-center flex text-gray-400 py-4">
            <h1>© Copyright : All Rights Reserved.</h1>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Footer;
