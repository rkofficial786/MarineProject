import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { product_data } from "../productData";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const CategoryProduct = () => {
  const { category } = useParams();

  const categoryProduct = product_data.filter(
    (product) => product.category === category.split("-").join(" ")
  );
  const navigate = useNavigate();
  console.log(categoryProduct);
  const categoryList = [
    "OutBoard Motor",
    "Diesel Engine & Fishing Nets",
    "Inflatable Boat",
    "RIB Boat",
    "Gasoline Generator",
    "Water Pump",
  ];

  // Pagination
  const itemsPerPage = 12;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(categoryProduct.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = categoryProduct.slice(startIndex, endIndex);

  const goToPage = (page) => {
    setCurrentPage(page);
  };
  return (
    <div>
      <Helmet>
  <title>APP Engineering | {category}</title>
  <meta name="description" content="Explore the range of specialized marine engineering products and services offered by APP Engineering & Supplies for vessels in the marine industry." />
  <meta name="keywords" content="APP Engineering, marine engineering, products, services, vessel equipment" />
</Helmet>

      <div className="max-w-7xl mx-auto mt-[60px]">
        {/* naviagte */}

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
                className="font-medium text-gray-500 cursor-pointer hover:text-gray-600"
                onClick={() => navigate(`/products`)}
              >
                Products
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
                {category.split("-").join(" ")}
              </Link>
            </li>
          </ol>
        </nav>

        <div className="max-w-6xl mx-auto flex flex-col items-center justify-center mt-[60px] px-[10px] sm:px-[30px]">
          {/* <div>
           {
            categoryList.map((data,index)=>{
                return (<div>
                    {data}
                </div>)
            })
           }
            </div> */}

          <div>
            <h1 className="text-2xl text-blue-900">
              {category.split("-").join(" ")}
            </h1>

            <div className="mt-[50px] grid gridContainer lg:grid-cols-4 justify-center items-center grid-cols-2 sm:grid-cols-3 gap-6">
        {currentItems.map((data, index) => {
          return (
            <div 
            // data-aos="fade-up"
            // data-aos-delay="200"
            onClick={()=>navigate(`/products/${category.split(" ").join("-")}/${data.title.split(" ").join("-")}`)}
              key={index}
              className="group cursor-pointer h-[280px] singleProductCategoryPage2 hover:scale-110  w-[250px] rounded-xl flex flex-col justify-center items-center gap-3 p-3"
            >
              <img
                src={data.imageSlide[0]}
                className="w-[170px] h-auto object-center group-hover:scale-105 "
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
          );
        })}
      </div>
          </div>
        </div>

        {/* Pagination */}
        <div className="flex my-[100px] justify-center  space-x-2">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToPage(index + 1)}
              className={`px-4 py-2 rounded-md ${
                currentPage === index + 1
                  ? "bg-blue-900 text-white"
                  : "bg-gray-200"
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default CategoryProduct;
