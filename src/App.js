import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NavBar from "./components/Navbar/NavBar";

import ProductPage from "./pages/ProductPage";
import OverViewPage from "./pages/OverViewPage";
import ScrollToTop from "./components/ScrollToTop";
import ContactUs from "./pages/ContactUs";

function App() {
  useEffect(() => {
    const aos_init = () => {
      AOS.init({
        once: true,
        duration: 1000,
        easing: "ease-out-cubic",
      });
    };

    window.addEventListener("load", () => {
      aos_init();
    });
  }, []);

  return (
    <>
      <Router>
        <NavBar />
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:item" element={<ProductPage />} />
            <Route path="/:item/:id" element={<OverViewPage />} />
            <Route path="/contact" element={<ContactUs/>}/>
          </Routes>
        </ScrollToTop>
      </Router>
    </>
  );
}

export default App;
