import React from "react";
import { product_data } from "../productData";

import { RiArrowDropDownLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
const Products = () => {
  // Create a dictionary to hold product data for each category
  const categoryData = {};
  const navigate = useNavigate();
  product_data.forEach((data) => {
    if (!categoryData[data.category]) {
      categoryData[data.category] = [];
    }
    categoryData[data.category].push(data);
  });

  const categoryList = [
    "OutBoard Motors",
    "Diesel Engine & Fishing Nets",
    "Inflatable Boats",
    "RIB Boats",
    "Gasoline Generators",
    "Water Pumps",
  ];

  return (
    <div>
      <Helmet>
        <title>APP Engineering | Products</title>
        <meta
          name="description"
          content="Discover a wide selection of top-notch marine engineering products including mooring and docking accessories, safety equipment, lighting solutions, deck hardware, navigation aids, and communication devices."
        />
        <meta
          name="keywords"
          content="marine engineering products, mooring accessories, safety equipment, lighting solutions, deck hardware, navigation aids, communication devices"
        />
      </Helmet>

      <div className="max-w-7xl mx-auto mt-[100px]">
        {/* nav */}

        <nav aria-label="Breadcrumb">
          <ol
            role="list"
            className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8"
          >
            <li className="text-sm">
              <Link
                aria-current="page"
                className="font-medium cursor-pointer text-gray-500 hover:text-gray-600 "
                onClick={() => navigate(`/`)}
              >
                Home
              </Link>
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
              <Link
                aria-current="page"
                className="font-medium text-gray-500 hover:text-gray-600"
              >
                Products
              </Link>
            </li>
          </ol>
        </nav>

        <div className="max-w-6xl flex justify-center flex-col items-center mx-auto px-5">
          {categoryList.map((category, index) => (
            <div key={index} className="mb-[100px]">
              <div className="flex justify-between items-center my-8 gap-4">
                <h1 className="text-2xl text-blue-900">{category}</h1>

                <div
                  onClick={() =>
                    navigate(`/products/${category.split(" ").join("-")}`)
                  }
                  className="sm:text-lg text-[14px]  border-none bg-slate-200 shadow-md px-3 min-w-[100px] sm:px-4 py-1 flex items-center gap-1 justify-center hover:scale-95 transition-all ease-in-out duration-200 cursor-pointer"
                >
                  <button className="">Learn More </button>
                  <RiArrowDropDownLine className="rotate-[270deg] md:block hidden text-3xl mt-1" />
                </div>
              </div>
              <div className="border-b-[1px] border-gray-500"></div>
              <div className="mt-[30px] grid lg:grid-cols-4 grid-cols-2 items-center justify-center gridContainer sm:grid-cols-3 gap-6">
                {categoryData[category]?.slice(0, 8).map((data, index) => (
                  <div
                    data-aos="fade-up"
                    data-aos-delay="200"
                    onClick={() =>
                      navigate(
                        `/products/${category.split(" ").join("-")}/${data.title
                          .split(" ")
                          .join("-")}`
                      )
                    }
                    key={index}
                    className="group cursor-pointer h-[280px] singleProductCategoryPage w-[250px] rounded-xl flex flex-col justify-center items-center gap-3 p-3"
                  >
                    <img
                      src={data.imageSlide[0]}
                      className="w-[170px] group-hover:scale-105 "
                      alt=""
                      loading="lazy"
                    />
                    <h1 className="text-center sm:max-w-[70%] max-w-[95%] mx-auto">
                      {data.title.length > 70 ? (
                        <h1>{data.title.substring(0, 70)}...</h1>
                      ) : (
                        data.title
                      )}
                    </h1>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Products;
