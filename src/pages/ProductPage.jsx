import React from "react";
import { product_data } from "../productData";
import {RiArrowDropDownLine} from "react-icons/ri"
import { useNavigate } from "react-router-dom";
const ProductPage = () => {
  // Create a dictionary to hold product data for each category
  const categoryData = {};
  const navigate =useNavigate()
  product_data.forEach((data) => {
    if (!categoryData[data.category]) {
      categoryData[data.category] = [];
    }
    categoryData[data.category].push(data);
  });

  const categoryList = [
    "OutBoard Motor",
    "Diesel Engine & Fishing Nets",
    "Inflatable Boat",
    "RIB Boat",
    "Gasoline Generator",
    "Water Pump",
  ];

  return (
    <div className="max-w-7xl mx-auto mt-[100px]">




{/* nav */}

<nav aria-label="Breadcrumb">
          <ol
            role="list"
            className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8"
          >
            <li className="text-sm">
              <a
                aria-current="page"
                className="font-medium cursor-pointer text-gray-500 hover:text-gray-600 "
                onClick={() => navigate(`/`)}
              >
                Home
              </a>
            </li>
            <svg
              width={16}
              height={20}
              viewBox="0 0 16 20"
              fill="currentColor"
              aria-hidden="true"
              className="h-5 w-4 text-gray-300"
            >
              <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
            </svg>
            <li className="text-sm">
              <a
                aria-current="page"
                className="font-medium text-gray-500 hover:text-gray-600"
              >
                Products
              </a>
            </li>
          </ol>
        </nav>












      <div className="max-w-6xl mx-auto">
        {categoryList.map((category, index) => (
          <div key={index} className="mb-[100px]">
            <div className="flex justify-between items-center my-8">
              <h1 className="text-2xl text-blue-900">{category}</h1>

              <div className="text-lg border-none bg-slate-200 shadow-md px-4 py-1 flex items-center gap-1 justify-center">
             
                <button className="">Learn More </button>
                <RiArrowDropDownLine className="rotate-[270deg] text-3xl mt-1"/>
              </div>
            </div>
            <div className="border-b-[1px] border-gray-500"></div>
            <div className="mt-[30px]">
              {categoryData[category]?.map((data, index) => (
                <div
                  key={index}
                  className="group cursor-pointer singleProductCategoryPage w-[250px] rounded-xl flex flex-col justify-center items-center gap-3 p-3"
                >
                  <img
                    src={data.description_images[0]}
                    className="w-[170px] group-hover:scale-105 "
                    alt=""
                  />
                  <h1 className="text-center max-w-[70%] mx-auto">
                    {data.title}
                  </h1>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
