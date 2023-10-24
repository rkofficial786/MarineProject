import React, { useState } from "react";
import JsonData from "../../JsonData";
import NavLinks from "../Navbar/NavLinks";

const NavBarDesign = ({ setisOpen }) => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isProductOpen, setIsProductOpen] = useState(false);
  const [isSparePartOpen, setIsSparePartOpen] = useState(false);
  const [isFnBOpen, setIsFnBOpen] = useState(false);

  const toggleDropdown = (flag, func) => {
    func(!flag);
  };
  const handleNavLinkClick = () => {
    setisOpen(false);
  };

  return (
    <div className="lg:flex lg:gap-3">
      <div onClick={handleNavLinkClick}>
        {" "}
        <NavLinks navLinkName="Home" />
      </div>
      <div className="separator"></div>
      <div onClick={handleNavLinkClick}>
        {" "}
        <NavLinks navLinkName="About Us" />
      </div>
      <div className="separator"></div>
      <div onClick={handleNavLinkClick}>
        {" "}
        <NavLinks
          navLinkName="Services"
          isDropdownOpen={isServicesOpen}
          setDropDownOpen={setIsServicesOpen}
          toggleDropdown={toggleDropdown}
          itemList={JsonData.services}
          isDropDownNeeded={true}
        />
      </div>
      <div className="separator"></div>
      <div onClick={handleNavLinkClick}>
        <NavLinks
          navLinkName="Products"
          isDropdownOpen={isProductOpen}
          setDropDownOpen={setIsProductOpen}
          toggleDropdown={toggleDropdown}
          itemList={JsonData.products}
          isDropDownNeeded={true}
        />
      </div>
      <div className="separator"></div>
      <div onClick={handleNavLinkClick}>
        <NavLinks
          navLinkName="Spare Parts"
          isDropdownOpen={isSparePartOpen}
          setDropDownOpen={setIsSparePartOpen}
          toggleDropdown={toggleDropdown}
          itemList={JsonData.spareParts}
          isDropDownNeeded={true}
        />
      </div>
      <div className="separator"></div>
      <div onClick={handleNavLinkClick}>
        <NavLinks
          navLinkName="Food and Beverages"
          isDropdownOpen={isFnBOpen}
          setDropDownOpen={setIsFnBOpen}
          toggleDropdown={toggleDropdown}
          itemList={JsonData.foodAndBeverages}
          isDropDownNeeded={true}
        />
      </div>
      <div className="separator"></div>
      <div onClick={handleNavLinkClick}>
        <NavLinks navLinkName="Contact Us" isDropDownNeeded={false} />
      </div>
    </div>
  );
};

export default NavBarDesign;
