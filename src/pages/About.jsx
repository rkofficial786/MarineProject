import React from "react";
import Header from "../components/about/Header";
import Expertise from "../components/about/Expertise";
import img1 from "../images/About/spareParts.png";
import img2 from "../images/About/technincal.jpg";
import img3 from "../images/About/Service.png";
import img4 from "../images/About/supply.png";
import WhyChooseAPP from "../components/about/WhyChoose";
import DiscoverAbout from "../components/about/DiscoverAbout";
import Footer from "../components/Footer";
import { data } from "autoprefixer";

const expertiseData = [
  {
    id: 1,
    img: img1,
    title: "Marine Spare Parts Sales",
    text: "Embark on a journey of efficiency with our extensive range of marine spare parts. From Diesel Engine Parts to Generator Spare Parts, Pumps, Valves, and Vessel Accessories, we offer a one-stop solution for all your marine component needs.",
  },

  {
    id: 2,
    img: img2,
    title: "Technical Consumables",
    text: "Elevate your engine's performance with our premium technical consumables. We provide top-notch products to keep your engines running smoothly and efficiently",
  },

  {
    id: 3,
    img: img3,
    title: "Comprehensive Services",
    text: "Experience excellence in our array of services, including Hydraulic Works, Machining Works, Motor Rewinding, Electrical and Electronic Instrumentation Service for Oil & Gas Vessels, Steel and Pipes Fabrication, Hydro Blasting & Coating, Cranes Servicing, Gearbox Maintenance and Repair, Deck & Engine - Riding Crew for Voyage Repairs, HVAC Works, Anchorage and Offshore Works, Piping and Accommodation Insulation Works, and more.",
  },

  {
    id: 4,
    img: img4,
    title: "Supply and Support",
    text: ".We go beyond parts and services, we are your dedicated Ship Chandlers Agents, providing support during Dry Docking (DDX). Our extensive range of victuals, from fresh seafood to poultry, red meat, fruits, vegetables, dairy products, and condiments, ensures your vessel is well-stocked for every journey. Explore our bonded products, including beers, wines, liquors, and cigarettes, to make your maritime experience truly exceptional.",
  },
];
const About = () => {
  return (
    <div>
      <div className="max-w-7xl mx-auto">
        <Header />
        <div className="flex mt-[80px] flex-col gap-14">
          {expertiseData.map((data, index) => {
            return (
              <div>
                <Expertise
                  reverse={index % 2 == 0 ? "row-reverse" : ""}
                  image={data.img}
                  text={data.text}
                  title={data.title}
                />
              </div>
            );
          })}
        </div>
      </div>
      <WhyChooseAPP />

      <DiscoverAbout />

      <Footer />
    </div>
  );
};

export default About;
