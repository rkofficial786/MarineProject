import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import JsonData from "../JsonData";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet";

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
  }, [item]);

  if (!JsonData[item]) {
    return <div>No data</div>;
  }

  return (
    <div className="bg-white">
      <Helmet>
  <title>APP Engineering | {routeMapper[item]}</title>
  <meta name="description" content="Explore detailed information about a specific marine engineering product from APP Engineering & Supplies, ensuring quality and durability for vessel performance and safety." />
  <meta name="keywords" content="marine engineering product, vessel equipment, quality, durability" />
</Helmet>

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
                  loading="lazy"
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between text-center">
                <div>
                  <h3 className="text-xl font-semibold tracking-tight  text-gray-500">
                    <Link to={product.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </Link>
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer/>
    </div>
  );
}
