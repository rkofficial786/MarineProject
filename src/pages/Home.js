import React from "react";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Intro from "../components/Intro";
import Services from "../components/Services";
import Intro2 from "../components/about/Intro2";

const Home = () => {
  return (
    <>
      <Hero />
      <Intro />
      <Intro2/>
      <Services />
      <Footer />
    </>
  );
};

export default Home;
