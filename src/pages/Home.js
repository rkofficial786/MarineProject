import React from "react";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Intro from "../components/Intro";
import Services from "../components/Services";
import Intro2 from "../components/about/Intro2";
import Slider from "../components/core/Slider";
import { Crousel } from "../components/core/Crousel/Crousel";

const Home = () => {
  return (
    <>
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
