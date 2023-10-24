import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { product_data } from "../productData";
import { RiArrowDropDownLine } from "react-icons/ri";
import Footer from "../components/Footer";

const ProductDetails = () => {
  const { slug } = useParams();
  const productData = product_data.filter(
    (data) => data.title.split(" ").join("-") === slug
  );
  const navigate = useNavigate();
  const images = productData.length > 0 ? productData[0].imageSlide : [];

  const [mainImage, setMainImage] = useState(
    images.length > 0 ? images[0] : ""
  );

  const handleImageClick = (image) => {
    setMainImage(image);
  };
  const categoryList = [
    "OutBoard Motors",
    "Diesel Engine & Fishing Nets",
    "Inflatable Boats",
    "RIB Boats",
    "Gasoline Generators",
    "Water Pumps",
  ];
  const [displayedProducts, setDisplayedProducts] = useState(6);
  const [selectedCategory, setSelectedCategory] = useState(null);
  return (
    <div>
    <div className="max-w-[1690px] mx-auto">
      <div className="flex  ">
        <div className="w-[400px] hidden sm:block mt-[60px] bg-gray-100 p-4 h-fit">
          {categoryList.map((category, index) => {
            const matchingProducts = product_data.filter(
              (data) => data.category === category
            );

            return (
              <div key={index} className="mb-4">
                <h1
                  onClick={() =>
                    setSelectedCategory(
                      selectedCategory === category ? null : category
                    )
                  }
                  className="cursor-pointer rounded-lg font-semibold  flex justify-between items-center bg-gray-300 p-3 mb-2"
                >
                  <span>{category} </span>
                  <span
                    className={`${
                      selectedCategory === category
                        ? "rotate-180 transition-all ease-in-out duration-150"
                        : "rotate-0"
                    }`}
                  >
                    <RiArrowDropDownLine className="text-3xl" />
                  </span>
                </h1>
                {selectedCategory === category && (
                  <div className="pl-6"   data-aos="fade-down"
                  data-aos-delay="40" >
                    {matchingProducts
                      .slice(0, displayedProducts)
                      .map((data, index) => (
                        <div key={index}>
                          <h2
                            className="text-blue-700 mb-1 cursor-pointer border-b-2 hover:text-blue-900"
                            onClick={() =>
                             { navigate(
                                `/products/${category
                                  .split(" ")
                                  .join("-")}/${data.title
                                  .split(" ")
                                  .join("-")}`
                              );window.location.reload();}
                            }
                          >
                            {data.title}

                          </h2>
                        </div>
                      ))}
                    {matchingProducts.length > displayedProducts && (
                      <button
                        className="text-black font-semibold cursor-pointer"
                        onClick={() =>
                          navigate(`/products/${category.split(" ").join("-")}`)
                        }
                      >
                        Show more
                      </button>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="w-[90%] p-6 ">
          <div className="flex justify-center items-center  my-8">
            <img
              src={mainImage}
              alt=""
              loading="lazy"
              className=" lg:max-w-[40%]  "
            />
          </div>
          <div className="flex justify-center items-center">
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                loading="lazy"
                alt=""
                className={`w-16 h-16 object-cover mx-2 cursor-pointer ${
                  mainImage === image ? "border-2 border-cyan-500" : " border-2"
                }  `}
                onClick={() => handleImageClick(image)}
              />
            ))}
          </div>

          <div className=" mt-10 lg:mt-[100px]">
            {productData.map((data, index) => {
              return (
                <div key={index}>
                  <h1 className=" w-full text-3xl text-blue-900 ">
                    {data.title}
                  </h1>

                  <h1 className="text-3xl  font-semibold mt-[100px] mb-[40px]">
                    Product Details
                  </h1>

                  <div className="flex-1 sm:block flex items-center justify-center ">
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2 w-full mx-auto justify-center items-center  flex-col">
                      {Object.entries(data?.product_details).map(
                        ([key, value]) => (
                          <li className="" key={key}>
                            <span className="text-black  text-base font-bold mr-2">{key}:</span> 
                            {" "}<span className=" from-neutral-500 tracking-wide">{value}</span>
                          </li>
                        )
                      )}
                    </ul>
                    <div className="flex sm:flex-row flex-col">
                      {data?.imageDesc?.map((image, index) => {
                        return (
                          <div key={index}>
                            <img
                              className="max-w-[300px] w-[300px] lg:w-[500px] md:max-w-[900px] "
                              src={image}
                              alt=""
                              loading="lazy"
                            />
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  <div className="mt-[60px]">{data?.shortDesc}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default ProductDetails;
