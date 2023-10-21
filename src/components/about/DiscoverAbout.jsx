import React from "react";
import { useNavigate } from "react-router-dom";

const DiscoverAbout = () => {
    const navigate =useNavigate()
  return (
    <div className="text-center my-10 w-[90%] mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-blue-900">
        Discover the difference with APP Engineering and Supplies
      </h2>
      <p className="text-lg mb-8">
        Your partner in marine excellence. Let's navigate the seas together,
        setting new standards in quality, reliability, and service.
      </p>
      <button onClick={()=>navigate("/products")} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
        Get Started
      </button>
    </div>
  );
};

export default DiscoverAbout;
