import React, { useState } from "react";
import { Link } from "react-router-dom";

import video from "../media/companyProcessVideo.mp4";

const TabList = ({ tabs, activeTab, onTabClick }) => {
  return (
    <ul className="flex sm:flex-row flex-col" role="tablist">
      {tabs.map((tab) => (
        <li className="mr-3" role="presentation" key={tab.id}>
          <button
            className={`text-xs md:text-base font-bold py-2 mb-2 px-4 rounded-md focus:outline-none ${activeTab === tab.id ? "bg-white text-black" : "bg-transparent text-white border-white border"}`}
            onClick={() => onTabClick(tab.id)}
            type="button"
            role="tab"
            aria-controls={tab.id}
            aria-selected={activeTab === tab.id}
          >
            {tab.title}
          </button>
        </li>
      ))}
    </ul>
  );
};

const TabPanel = ({ panels, activeTab }) => {
  return (
    <div className="lg:mt-4">
      {panels.map((panel) => (
        <div
          className={`text-sm md:text-xl md:max-w-[60%] ${activeTab === panel.id ? "block" : "hidden"}`}
          id={panel.id}
          role="tabpanel"
          aria-labelledby={panel.id}
          key={panel.id}
        >
          {panel.content}
        </div>
      ))}
    </div>
  );
};

const Cta = () => {
  const tabs = [
    { id: "Quality Assurance", title: "Quality Assurance" },
    { id: "Global Reach", title: "Global Reach" },
    { id: "Expert Guidance and Support", title: "Expert Guidance and Support" },
  ];

  const panels = [
    {
      id: "Quality Assurance",
      content:
        "At APP Engineering and Supply, we take pride in our commitment to delivering top-quality products and services to our valued clients. Our stringent Quality Assurance measures ensure that every aspect of our operations, from sourcing the finest materials to the final delivery of products and services, meets the highest industry standards. We continuously monitor and improve our processes to guarantee consistency, reliability, and customer satisfaction in every project we undertake.",
    },
    {
      id: "Global Reach",
      content:
        "With a well-established global network, we cater to clients from various industries and regions around the world. Our efficient logistics and supply chain management enable us to reach your doorstep, no matter where you are located. Rest assured that APP Engineering and Supply can deliver our products and services with speed and precision to meet your specific needs, no matter the location.",
    },
    {
      id: "Expert Guidance and Support",
      content:
        "Our team of seasoned professionals is here to guide and support you throughout your journey with APP Engineering and Supply. Whether you require technical assistance, product recommendations, or personalized solutions for your unique requirements, we are ready to lend our expertise. We understand that each client is unique, and our commitment to providing tailored guidance ensures that you receive the best possible outcomes for your projects.",
    },
  ];

  const [activeTab, setActiveTab] = useState("Quality Assurance");

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <div className="relative">
      <div className="w-full h-96 relative overflow-hidden">
        <video
          poster="023.png"
          className="object-cover w-full h-full"
          src={video}
          autoPlay
          muted
          loop
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      <div className="container mx-auto lg:py-12 py-4 text-white z-10 absolute top-0">
        <div className="mx-2 md:mx-8 text-center lg:text-left">
          <div className="flex flex-col lg:flex-row lg:justify-around">
            <div className="flex flex-col justify-between h-full">
              <div>
                <TabList
                  tabs={tabs}
                  activeTab={activeTab}
                  onTabClick={handleTabClick}
                />
              </div>
              <div>
                <TabPanel panels={panels} activeTab={activeTab} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cta;
