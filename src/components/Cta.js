import React, { useState } from "react";
import { Link } from "react-router-dom";

import video from "../media/companyProcessVideo.mp4";

const TabList = ({ tabs, activeTab, onTabClick }) => {
  return (
    <ul
      className=" flex sm:flex-row flex-col"
      id="myTab"
      role="tablist"
      style={{ borderBottom: "revert" }}
    >
      {tabs.map((tab) => (
        <li className="nav-item m-[2px] sm:m-3" role="presentation" key={tab.id}>
          <button
            className={`nav-link text-[10px] md:text-[18px] ${activeTab === tab.id ? "active" : ""}`}
            onClick={() => onTabClick(tab.id)}
            type="button"
            role="tab"
            aria-controls={tab.id}
            aria-selected={activeTab === tab.id}
            style={{
              color: activeTab === tab.id ? "white" : "#ddd6ac",
              // fontSize: "1.1em",
              fontWeight: 800,
              letterSpacing: ".08em",
              textTransform: "uppercase",
              backgroundColor: "transparent",
              borderColor: "transparent",
              borderBottom:
                activeTab === tab.id
                  ? "2px solid #fff"
                  : "2px solid transparent",
            }}
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
    <div className="tab-content">
      {panels.map((panel) => (
        <div
          className={`tab-pane w-full mx-auto overflow-hidden md:mt-4 mt-2 text-[14px] md:text-[18px] ${activeTab === panel.id ? "active" : "hidden"}`}
          id={panel.id}
          role="tabpanel"
          aria-labelledby={panel.id}
          key={panel.id}
          style={{
            color: "#f6f5e9",
            // fontSize: "1.2em",
            // marginTop: "16px",
          }}
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
    <div className="w-full h-96 flex items-center justify-center text-white cta relative">
      <div className="absolute w-full h-full" style={{ zIndex: -2 }}>
        <video
          poster="023.png"
          className="object-fill"
          src={video}
          style={{ height: "100%", width: "100%" }}
          autoplay="autoplay"
          muted
          loop={true}
        />
      </div>
      <div className="px-2 md:mx-8 w-full  text-center lg:text-left py-16 md:px-12 flex lg:justify-between items-center">
        <div className="w-full flex flex-col lg:flex-row lg:justify-around">
          <div className="flex justify-between flex-col h-full items-stretch ">
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
  );
};

export default Cta;
