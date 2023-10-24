import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import {IoArrowBackOutline,IoArrowForwardOutline} from "react-icons/io5"
import './swiper.css'

import { EffectCoverflow, Pagination, Navigation ,FreeMode ,Autoplay } from 'swiper/modules';
// import JsonData from '../../JsonData'


const Slider = ({data,bg}) => {

  const containerStyle = {
    // minHeight: '100vh',
    width: "100%",
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.30), rgba(0, 0, 0, 0.30)), url(${bg})`,
    backgroundPosition: `center`,
    backgroundSize: "cover",
  };
  return (
    <div className="container1" style={containerStyle}>
    
    <Swiper
      effect={'coverflow'}
      grabCursor={true}
      freeMode={true}
      centeredSlides={true}
      loop={true}
      slidesPerView={'auto'}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      coverflowEffect={{
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 2.5,
      }}
      pagination={{ el: '.swiper-pagination', clickable: true }}
      navigation={{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        clickable: true,
      }}
      modules={[EffectCoverflow, FreeMode, Pagination, Autoplay, Navigation]}
      className="swiper_container"
    >
   {
      data.map((image,index)=>{
        return (
            <div className='relative border-2'>
            <SwiperSlide>
            <img src={image.img} alt="slide_image" className='swiperImage' loading="lazy" />
            
            <h1 className='text-2xl text-white font-bold text-center '>{image.name}</h1>
          </SwiperSlide>
          </div>
        )
      })
   }

      <div className="slider-controler m-[30px]">
        <div className="swiper-button-prev slider-arrow mt-16">
        <IoArrowBackOutline className="text-white hover:scale-90 "  />
        </div>
        <div className="swiper-button-next slider-arrow ">
        <IoArrowForwardOutline className='text-white  hover:scale-90'/>
        </div>
        <div className="swiper-pagination "></div>
      </div>
    </Swiper>
  </div>
  )
}

export default Slider