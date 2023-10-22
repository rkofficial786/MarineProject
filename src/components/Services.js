import React from "react";
import JsonData from "../JsonData";
import SlideshowCard from "./slideshowcard";
import Cta from "./Cta";
import Slider from "./core/Slider";

const Services = () => {
  return (
    <div id="services" className="bg-gray-100 py-12">
      <section data-aos="zoom-in-down">
        <div className="my-4 py-4">
          <h2 className="my-2 text-center text-3xl text-blue-900 uppercase font-bold">
            Spare Parts
          </h2>

          <div className="flex justify-center">
            <div className="w-24 border-b-4 border-blue-900"></div>
          </div>
        </div>

        {/* <div class="w-full   rounded-lg px-12">
          <SlideshowCard itemsArray={JsonData.spareParts} />
        </div> */}

        <div className="flex">
          <div
            className="px-12 w-full"
            data-aos="fade-down"
            data-aos-delay="600"
          >
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto gap-6">
              {JsonData.spareParts.map((item) => (
                <div className="bg-white  transition-all ease-in-out duration-400  overflow-hidden text-gray-700  rounded-lg shadowCard  p-3 group">
                  <div className="m-2 text-justify text-sm">
                    <div className="flex justify-center">
                      <img
                        alt="card img"
                        className="rounded-t group-hover:scale-[1.15] h-[140px] w-[280px] transition duration-1000 ease-in-out"
                        // style={{ height: "140px" }}
                        src={item.img}
                      />
                    </div>
                    <h2 className="font-semibold my-4 text-2xl text-center">
                      {item.name}
                    </h2>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section data-aos="zoom-in-down">
        <div className="my-4 py-4">
          <h2 className="my-2 text-center text-3xl text-blue-900 uppercase font-bold">
            Professional Services
          </h2>

          <div className="flex justify-center">
            <div className="w-24 border-b-4 border-blue-900"></div>
          </div>
        </div>
        <div class="w-full ">
          {/* <SlideshowCard itemsArray={JsonData.services} /> */}
          <Slider bg={require("../images/About/1.jpeg")} data={JsonData.services}/>
        </div>

        {/* <div className="flex">
          <div
            className="px-12 w-full"
            data-aos="fade-down"
            data-aos-delay="600"
          >
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {JsonData.services.map((item) => (
                <div className=" flex flex-col  justify-between bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
                  <div className="m-2 text-justify text-sm">
                    <div className="flex justify-center">
                      <img
                        alt="card img"
                        className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out"
                        style={{ height: "140px" }}
                        src={item.img}
                      />
                    </div>
                  </div>
                  <div className="font-semibold my-4 text-2xl text-center">
                    {item.name}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div> */}
      </section>

      <section data-aos="zoom-in-down">
        <div className="my-4 py-4">
          <h2 className="my-2 text-center text-3xl text-blue-900 uppercase font-bold">
            Products
          </h2>

          <div className="flex justify-center">
            <div className="w-24 border-b-4 border-blue-900"></div>
          </div>
        </div>

        <div class="w-full  ">
          <Slider bg={require("../images/About/79.jpg")} data={JsonData.products} />
        </div>

        {/* <div className="flex">
          <div
            className="px-12 w-full"
            data-aos="fade-down"
            data-aos-delay="600"
          >
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {JsonData.products.map((item) => (
                <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
                  <div className="m-2 text-justify text-sm">
                    <div className="flex justify-center">
                      <img
                        alt="card img"
                        className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out"
                        style={{ height: "140px" }}
                        src={item.img}
                      />
                    </div>
                    <h2 className="font-semibold my-4 text-2xl text-center">
                      {item.name}
                    </h2>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div> */}
      </section>

      <section
        data-aos="zoom-in-down"
        className="rounded"
        style={{ marginTop: "80px" }}
      >
        <div className="w-full rounded-lg px-12">
          <Cta />
        </div>
      </section>
    </div>
  );
};

export default Services;
