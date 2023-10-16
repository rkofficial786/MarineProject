import React, { useEffect, useState } from "react";

import video from "../media/companyProcessVideo.mp4";

const TabList = ({ tabs, activeTab, onTabClick }) => {
  return (
    <ul
      className="nav nav-underline nav-tabs"
      id="myTab"
      role="tablist"
      style={{ borderBottom: "revert" }}
    >
      {tabs.map((tab) => (
        <li className="nav-item" role="presentation" key={tab.id}>
          <button
            className={`nav-link ${activeTab === tab.id ? "active" : ""}`}
            onClick={() => onTabClick(tab.id)}
            type="button"
            role="tab"
            aria-controls={tab.id}
            aria-selected={activeTab === tab.id}
            style={{
              color: activeTab === tab.id ? "white" : "#ddd6ac",
              fontSize: "1.1em",
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
          className={`tab-pane ${activeTab === panel.id ? "active" : ""}`}
          id={panel.id}
          role="tabpanel"
          aria-labelledby={panel.id}
          key={panel.id}
          style={{
            color: "#f6f5e9",
            fontFamily: "Sen, sans-serif",
            fontSize: "1.2em",
            marginTop: "16px",
          }}
        >
          {panel.content}
        </div>
      ))}
    </div>
  );
};

const CompanyProcessSection = ({ id, img, currentIndex }) => {
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

  // const requireVideo = "../../media/companyProcessVideo.mp4";

  return (
    <section
      id={id}
      class="row background-image company-section"
      // style={{
      //   backgroundImage: `url(${img[currentIndex]})`,
      // }}
    >
      <div className="col-1"></div>

      {/* <video controls width="600" height="400">
        <source src="path-to-your-video.mp4" type="video/mp4">
          <h2>Our 360 Process</h2>
          <TabList
            tabs={tabs}
            activeTab={activeTab}
            onTabClick={handleTabClick}
          />
          <TabPanel panels={panels} activeTab={activeTab} />
        </source>
      </video> */}

      <video
        poster="023.png"
        // width="100%"
        height="100%"
        style={{ position: "absolute", width: "100%" }}
        autoplay="autoplay"
        muted
        loop={true}
      >
        <source src={video} type="video/mp4" />
      </video>
      <div className="company-process-section-container col-10 d-flex flex-column justify-content-center">
        {/* <video src={video} muted loop autoplay></video> */}

        {/* <video playsinline autoplay muted loop>
     <source src={video} type="video/mp4" />
 </video> */}

        <h2>Our 360 Process</h2>
        <TabList
          tabs={tabs}
          activeTab={activeTab}
          onTabClick={handleTabClick}
        />
        <TabPanel panels={panels} activeTab={activeTab} />
        {/* <video controls width="600" height="400">
          <source src={"/companyProcessVideo.mp4"} type="video/mp4"/>
            <h2>Our 360 Process</h2>
            <TabList
              tabs={tabs}
              activeTab={activeTab}
              onTabClick={handleTabClick}
            />
            <TabPanel panels={panels} activeTab={activeTab} />
        </video> */}
      </div>

      <div className="col-1"></div>
    </section>
  );
};

export default CompanyProcessSection;
