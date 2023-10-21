import React from "react";
import { HashLink } from "react-router-hash-link";
import JsonData from "../../JsonData";

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
        <a
          href={`/${routeMapper[navLinkName]}`}
          className="nav-link px-2 font-extrabold text-gray-500 hover:text-blue-900"
        >
          {navLinkName}
        </a>
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
        <a
          href={`/${routeMapper[navLinkName]}`}
          className="nav-link px-4 font-extrabold text-gray-500 hover:text-blue-900"
        >
          {navLinkName}
        </a>

        {isDropDownNeeded && (
          <ul
            className={`dropdown-menu absolute bg-white mt-2 p-4 rounded shadow-md  ${
              isDropdownOpen
                ? "transform translate-y-0 opacity-100"
                : "transform translate-y-2 opacity-0"
            } transition-transform duration-300 ${itemList.length>6 ?"grid grid-cols-2 w-[600px] gap-x-3 gap-y-1":"w-[400px]"}`}
            // style={{ width: "400px" }}
          >
            {itemList.map((item, id) => (
              <li>
                <a
                  href={`/${
                    routeMapper[navLinkName] === "products"
                      ? `products/${item.name.split(" ").join("-")}`
                      : `${routeMapper[navLinkName]}/${item.id}`
                  }`}
                  key={id}
                  className={`block min-w-fit hover:text-blue-600 font-semibold ${itemList.length>6?"":"py-2"}`}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        )}
      </li>
    </>
  );
};

export default NavLinks;
