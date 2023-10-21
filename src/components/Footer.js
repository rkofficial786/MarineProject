import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import ImageData, { logo } from "./../ImageData";

const Footer = () => {
  const logos = {
    maxWidth: "380px",
    height: "auto",
    width: "25vw",
    minWidth: "250px",
  };
  return (
    <>
      {/* <footer class="footer footer-center p-4 bg-base-300 text-base-content">
        
  <aside>
    <p>Copyright © 2023 - All right reserved by APP Engineering & Supplies PTE LTD</p>
  </aside>
</footer> */}

      <footer>
        <div className="footer max-w-full mx-auto px-4 sm:px-6 bg-gray-100 border-t border-b py-30">
          {/* Top area: Blocks */}
          <div className="grid sm:grid-cols-12 gap-5 py-8 md:py-12 border-t border-gray-200 lg:ml-11">
            {/* 1st block */}
            <div className="col-span-12 lg:col-span-4">
              <div className="box-border border-b-4 border-blue-900 p-10 bg-gray-200 text-center rounded-lg xl:w-82 mx-auto">
                {/* <h3 className="font-bold text-4xl mb-4">App</h3>
                <h3 className="font-bold text-4xl mb-4">Engeering</h3> */}
                <img src={logo} alt="Logo" style={logos} className="w-[200px] md:w-auto" />
                <div className="text-md font-medium text-gray-600">
                  {/* <h5>APP Engineering and Supply</h5> */}
                </div>
              </div>
            </div>

            {/* 2nd block */}
            <div className="col-span-6 md:col-span-6 lg:col-span-2 ml-7 mx-auto">
              <h6 className="text-[#013289] text-xl font-bold mb-4">LINKS</h6>
              <ul className="text-md">
                <li className="mb-2">
                  <HashLink
                    to="#"
                    className="text-[#013289] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out"
                  >
                    About
                  </HashLink>
                </li>
                <li className="mb-2">
                  <HashLink
                    to="#"
                    className="text-[#013289] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out"
                  >
                    Services
                  </HashLink>
                </li>{" "}
                <li className="mb-2">
                  <HashLink
                    to="#"
                    className="text-[#013289] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out"
                  >
                    Products
                  </HashLink>
                </li>{" "}
                <li className="mb-2">
                  <HashLink
                    to="#"
                    className="text-[#013289] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out"
                  >
                    Spare Parts
                  </HashLink>
                </li>{" "}
                <li className="mb-2">
                  <HashLink
                    to="#"
                    className="text-[#013289] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out"
                  >
                    Food and Beverages
                  </HashLink>
                </li>
              </ul>
            </div>

            {/* 3rd block */}
            <div className="col-span-6 md:col-span-6 lg:col-span-6 mx-auto">
              <h6 className="text-[#013289] text-xl font-bold mb-4">
                CONTACT US
              </h6>
              <ul className="text-md">
                <li className="mb-2">
                  <p
                    to="#"
                    className="text-[#013289] hover:text-gray-900  transition duration-250 ease-in-out"
                  >
                    Singapore: - #08-14 PS100 100 PECK SEAH STREET
                    SINGAPORE(079333).
                    <br />
                    India: - NO:44, Govinthan nagar, Thaenpathi(PO) Sirkali(TK)
                    muayiladuthurai, Tamilnadu, India, 609111
                  </p>
                </li>
                <li className="mb-2">
                  <p
                    to="#"
                    className="text-[#013289] hover:text-gray-900  transition duration-250 ease-in-out"
                  >
                    Ph: <a href="tel:+91 8220144237">+91 8220144237</a> ,
                    <a href="tel:+6596833561"> +6596833561</a>
                  </p>
                </li>
                <li className="mb-2">
                  <p
                    to="#"
                    className="text-[#013289] hover:text-gray-900  transition duration-250 ease-in-out"
                  >
                    Email address:{" "}
                    <a href="mailto:admin@appmarines.com">
                      admin@appmarines.com
                    </a>
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Footer;
