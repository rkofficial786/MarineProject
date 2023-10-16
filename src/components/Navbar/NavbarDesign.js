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
    <>
      <NavLinks navLinkName="Home" />
      <NavLinks navLinkName="About Us" />
      <NavLinks
        navLinkName="Services"
        isDropdownOpen={isServicesOpen}
        setDropDownOpen={setIsServicesOpen}
        toggleDropdown={toggleDropdown}
        itemList={JsonData.services}
        isDropDownNeeded={true}
      />
      <NavLinks
        navLinkName="Products"
        isDropdownOpen={isProductOpen}
        setDropDownOpen={setIsProductOpen}
        toggleDropdown={toggleDropdown}
        itemList={JsonData.products}
        isDropDownNeeded={true}
      />
      <NavLinks
        navLinkName="Spare Parts"
        isDropdownOpen={isSparePartOpen}
        setDropDownOpen={setIsSparePartOpen}
        toggleDropdown={toggleDropdown}
        itemList={JsonData.spareParts}
        isDropDownNeeded={true}
      />
      <NavLinks
        navLinkName="Food and Beverages"
        isDropdownOpen={isFnBOpen}
        setDropDownOpen={setIsFnBOpen}
        toggleDropdown={toggleDropdown}
        itemList={JsonData.foodAndBeverages}
        isDropDownNeeded={true}
      />
      <NavLinks navLinkName="Contact Us" isDropDownNeeded={false} />
    </>
  );
};

export default NavBarDesign;
