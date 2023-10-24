import React from "react";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Intro from "../components/Intro";
import Services from "../components/Services";
import Intro2 from "../components/about/Intro2";
import Slider from "../components/core/Slider";
import { Crousel } from "../components/core/Crousel/Crousel";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <>
   <Helmet>
  <title>APP Engineering | Home</title>
  <meta name="description" content="Leading provider of specialized Ship Chandelling Support services during Dry Docking (DDX) for vessels in the marine industry." />
  <meta name="keywords" content="APP Engineering, Ship Chandelling Support, Dry Docking, marine industry" />
</Helmet>

    <Crousel/>
      <Hero />
      <Intro />
      
      <Services />
      {/* <Slider/> */}
      <Footer />
    </>
  );
};

export default Home;
