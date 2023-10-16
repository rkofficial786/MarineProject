import React, { useState } from "react";
import { useParams } from "react-router-dom";

import JsonData from "../JsonData";

const routeMapper = {
  services: "Services",
  products: "Products",
  spareParts: "Spare Parts",
  foodAndBeverages: "Food and Beverages",
};

export default function OverViewPage() {
  let { item, id } = useParams();

  const selectedId = parseInt(id);

  if (!JsonData[item]) {
    return <div>No data</div>;
  }

  let selectedCategory = JsonData[item];
  let selectedDataItem;

  selectedDataItem = selectedCategory.find((item) => item.id === selectedId);

  if (!selectedDataItem) {
    return <div>Product not found.</div>;
  }

  console.log(selectedDataItem);
  return (
    <div className="bg-white">
      <div className="pt-6">
        <nav aria-label="Breadcrumb">
          <ol
            role="list"
            className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8"
          >
            <li className="text-sm">
              <a
                aria-current="page"
                className="font-medium text-gray-500 hover:text-gray-600"
              >
                {routeMapper[item]}
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
                {selectedDataItem.name}
              </a>
            </li>
          </ol>
        </nav>

        {/* Image gallery */}
        <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
          <div className="aspect-h-4 aspect-w-3 hidden overflow-hidden rounded-lg lg:block">
            <img
              src={selectedDataItem.img}
              alt={selectedDataItem.name}
              className="h-full w-full object-cover object-center"
            />
          </div>
        </div>
      </div>

      {/* Product info */}
      <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
        <div className="mt-4 lg:row-span-3 lg:mt-0 lg:border-r lg:border-gray-200">
          <div className="lg:col-span-2 lg:pr-8">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              {selectedDataItem.name}
            </h1>
          </div>

          <div className="py-10 lg:col-span-2 lg:col-start-1  lg:pb-16 lg:pr-8 lg:pt-6">
            {/* Description and details */}
            <div>
              <h3 className="sr-only">Description</h3>

              <div className="space-y-6">
                <p className="text-base text-gray-900">
                  {selectedDataItem.summary}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-4 lg:row-span-3 lg:mt-0">
          <div className="mt-10">
            <h2 className="text-sm font-medium text-gray-900">
              Our Extensive Product Range
            </h2>

            <div className="mt-4 space-y-6">
              <p className="text-sm text-gray-600">
                {selectedDataItem.productRange || <>No data</>}
              </p>
            </div>
          </div>
          <div className="mt-10">
            <h2 className="text-sm font-medium text-gray-900">
              Quality Assurance
            </h2>
            <div className="mt-4 space-y-6">
              <p className="text-sm text-gray-600">
                {selectedDataItem.qa || <>No data</>}
              </p>
            </div>
          </div>
          <div className="mt-10">
            <h2 className="text-sm font-medium text-gray-900">
              Expert Guidance and Support:
            </h2>
            <div className="mt-4 space-y-6">
              <p className="text-sm text-gray-600">
                {selectedDataItem.guide || <>No data</>}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
