import React from "react";
import servicesImg from "../../images/About/WhatsApp Image 2023-10-21 at 17.39.34_4183b3f0.jpg";

export default function Intro2() {
  return (
    <div className="relative bg-white py-24 sm:py-32 overflow-hidden flex items-center justify-center">
      <div className="flex flex-col lg:flex-row md:gap-14 justify-center items-center">
        <div
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          className="flex max-w-xl"
        >
          <img
            alt="card img"
            className="rounded-t float-right duration-1000 w-full"
            src={servicesImg}
          />
        </div>
        <div
          data-aos="fade-left"
          data-aos-anchor="#example-anchor"
          data-aos-offset="500"
          data-aos-duration="500"
          className="mx-auto max-w-7xl px-6 lg:px-8 mt-16"
        >
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="mb-5 md:text-5xl text-3xl font-bold text-blue-900">
              Our Commitment to Excellence
            </h2>
            <p className="mt-6 text-lg leading-8 text-black">
              At APP Engineering & Supplies, we are dedicated to providing the
              highest quality marine engine technical consumables. We take pride
              in offering a comprehensive range of essential products that
              ensure marine engines operate at optimal performance. With a focus
              on exceptional products and superior service, we are your trusted
              partner in the marine industry.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
