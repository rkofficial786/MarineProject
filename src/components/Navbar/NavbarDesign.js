import React, { useState } from "react";
import JsonData from "../../JsonData";
import NavLinks from "../Navbar/NavLinks";

const NavBarDesign = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isProductOpen, setIsProductOpen] = useState(false);
  const [isSparePartOpen, setIsSparePartOpen] = useState(false);
  const [isFnBOpen, setIsFnBOpen] = useState(false);

  const toggleDropdown = (flag, func) => {
    func(!flag);
  };

  return (
    <div className="lg:flex lg:gap-3">
      <NavLinks navLinkName="Home" />
      <div className="separator"></div>
      <NavLinks navLinkName="About Us" />
      <div className="separator"></div>
      <NavLinks
        navLinkName="Services"
        isDropdownOpen={isServicesOpen}
        setDropDownOpen={setIsServicesOpen}
        toggleDropdown={toggleDropdown}
        itemList={JsonData.services}
        isDropDownNeeded={true}
      />
      <div className="separator"></div>
      <NavLinks
        navLinkName="Products"
        isDropdownOpen={isProductOpen}
        setDropDownOpen={setIsProductOpen}
        toggleDropdown={toggleDropdown}
        itemList={JsonData.products}
        isDropDownNeeded={true}
      />
      <div className="separator"></div>
      <NavLinks
        navLinkName="Spare Parts"
        isDropdownOpen={isSparePartOpen}
        setDropDownOpen={setIsSparePartOpen}
        toggleDropdown={toggleDropdown}
        itemList={JsonData.spareParts}
        isDropDownNeeded={true}
      />
      <div className="separator"></div>
      <NavLinks
        navLinkName="Food and Beverages"
        isDropdownOpen={isFnBOpen}
        setDropDownOpen={setIsFnBOpen}
        toggleDropdown={toggleDropdown}
        itemList={JsonData.foodAndBeverages}
        isDropDownNeeded={true}
      />
      <div className="separator"></div>
      <NavLinks navLinkName="Contact Us" isDropDownNeeded={false} />
    </div>
  );
  
};

export default NavBarDesign;
