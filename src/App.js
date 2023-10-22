import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NavBar from "./components/Navbar/NavBar";

import OverViewPage from "./pages/OverViewPage";
import ScrollToTop from "./components/ScrollToTop";
import ContactUs from "./pages/ContactUs";
import Products from "./pages/Products";
import ProductPage from "./pages/ProductPage";
import CategoryProduct from "./pages/CategoryProduct";
import ProductDetails from "./pages/ProductDetails";
import About from "./pages/About";

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

            <Route path="/:item/:id" element={<OverViewPage />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/:item" element={<ProductPage />} />
            <Route path="/products" element={<Products />} />
            <Route path="/about" element={<About />} />
            <Route path="/products/:category" element={<CategoryProduct />} />
            <Route
              path="/products/:category/:slug"
              element={<ProductDetails />}
            />
          </Routes>
        </ScrollToTop>
      </Router>
    </>
  );
}

export default App;
