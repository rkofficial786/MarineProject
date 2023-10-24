import React from "react";
import { useNavigate } from "react-router-dom";

export const CarouselItem = ({ item, width }) => {

  const navigate =useNavigate()

  return (
    <div className="carousel_item" style={{ width: width }}>
      <div className="layer"></div>
      <img className="carousel_img" alt="" src={item.image} />
      <div
     
        className=  "carousel_item_text"
        data-aos="zoom-in"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
        
      >
        <h1>{item.heading}</h1>
        <p>{item.text}</p>
        <button onClick={()=>navigate("/products")}>More info</button>
      </div>
    </div>
  );
};
