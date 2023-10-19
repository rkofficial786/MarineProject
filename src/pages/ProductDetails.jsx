import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { product_data } from "../data1";

const ProductDetails = () => {
  const { slug } = useParams();
  const productData = product_data.filter(
    (data) => data.title.split(" ").join("-") === slug
  );

  // Get the image slide data
  const images = productData.length > 0 ? productData[0].imageSlide : [];

  // Set the first image as the main one
  const [mainImage, setMainImage] = useState(
    images.length > 0 ? images[0] : ""
  );

  const handleThumbnailClick = (image) => {
    setMainImage(image);
  };

  return (
    <div className="max-w-7xl mx-auto">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-center items-center my-8">
          <img src={mainImage} alt="" className="max-w-[600px]" />
        </div>
        <div className="flex justify-center items-center">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt=""
              className={`w-16 h-16 object-cover mx-2 cursor-pointer ${
                mainImage === image ? "border-2 border-cyan-500" : " border-2"
              }  `}
              onClick={() => handleThumbnailClick(image)}
            />
          ))}
        </div>

        <div className="mt-[100px]">
          {productData.map((data, index) => {
            return (
              <div>
                <h1 className="text-center text-2xl">{data.title}</h1>
                <p>Pending...</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
