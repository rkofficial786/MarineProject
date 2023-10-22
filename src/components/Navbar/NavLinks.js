import React from "react";
import { HashLink } from "react-router-hash-link";
import JsonData from "../../JsonData";
import { Link, NavLink } from "react-router-dom";
import {MdOutlineArrowDropDown} from 'react-icons/md'
const NavLinks = ({
  navLinkName,
  isDropdownOpen = null,
  setDropDownOpen = null,
  toggleDropdown = null,
  itemList = null,
  isDropDownNeeded = false,
}) => {
  const routeMapper = {
    Home: "",
    "About Us": "about",
    Services: "services",
    Products: "products",
    "Spare Parts": "spareParts",
    "Food and Beverages": "foodAndBeverages",
    "Contact Us": "contact",
  };

  if (!isDropDownNeeded) {
    return (
      <li className="relative group nav-link-li p-3 lg:p-0">
        <NavLink
          to={`/${routeMapper[navLinkName]}`}
          className="nav-link px-2 font-bold text-gray-500 lg:text-white hover:text-blue-900"
        >
          {navLinkName}
        </NavLink>
      </li>
    );
  }
  return (
    <>
      <li
        className={`relative group nav-link-li p-3 lg:p-0 ${
          isDropdownOpen ? "dropdown-open z-10" : ""
        }`}
        onMouseEnter={() => toggleDropdown(isDropdownOpen, setDropDownOpen)}
        onMouseLeave={() => toggleDropdown(isDropdownOpen, setDropDownOpen)}
      >
        <NavLink
          to={`/${routeMapper[navLinkName]}`}
          className="nav-link px-2 font-bold text-gray-500 lg:text-white hover:text-blue-900 lg:flex lg:justify-center lg:items-center"
        >
          {navLinkName}
          <MdOutlineArrowDropDown className="hidden lg:block"></MdOutlineArrowDropDown>
          
        </NavLink>

        <div className="hidden lg:block">
          {isDropDownNeeded && (
            <ul
              className={`dropdown-menu absolute bg-blue-900 text-white mt-2 p-4 shadow-md  ${
                isDropdownOpen
                  ? "transform translate-y-0 opacity-100"
                  : "transform translate-y-2 opacity-0"
              } transition-transform duration-700 ${
                itemList.length > 6
                  ? "grid grid-cols-2 w-[600px] gap-x-3 gap-y-1"
                  : "w-[400px]"
              }`}
              // style={{ width: "400px" }}
            >
              {itemList.map((item, id) => (
                <li className="nav-link-li">
                  <NavLink
                    to={`/${
                      routeMapper[navLinkName] === "products"
                        ? `products/${item.name.split(" ").join("-")}`
                        : `${routeMapper[navLinkName]}/${item.id}`
                    }`}
                    key={id}
                    className={`block min-w-fit hover:text-gray-400 font-semibold ${
                      itemList.length > 6 ? "" : "py-2"
                    }`}
                  >
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          )}
        </div>
      </li>
    </>
  );
};

export default NavLinks;
