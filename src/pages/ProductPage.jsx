import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import JsonData from "../JsonData";

const routeMapper = {
  services: "Services",
  products: "Products",
  spareParts: "Spare Parts",
  foodAndBeverages: "Food and Beverages",
};

export default function ProductPage() {
  let { item } = useParams();
  const navigate = useNavigate();

  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(JsonData[item]);
  }, []);

  if (!JsonData[item]) {
    return <div>No data</div>;
  }

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl flex justify-center font-bold tracking-tight text-gray-900">
          {routeMapper[item]}
        </h2>

        <div
          className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 "
          style={{ cursor: "pointer" }}
        >
          {products.map((product) => (
            <div
              key={product.id}
              className="group relative hover:scale-[1.1] transition duration-200 ease-in-out"
              onClick={() => {
                navigate(`/${item}/${product.id}`);
              }}
            >
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                  src={product.img}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between text-center">
                <div>
                  <h3 className="text-xl font-semibold tracking-tight  text-gray-500">
                    <a href={product.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </a>
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
