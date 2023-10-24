import React from "react";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import boatImg from "../images/boat3.png";
import Intro2 from "../components/about/Intro2";
const locationsData = [
  {
    country: "India",
    address:
      "NO: 44, Govinthan nagar , Thenpathi (PO) Sirkali(TK) muayiladuthurai (district) Tamilnadu , India, pin :609111",
    image: require("../media/flags/india.bba9449f.png"),
    companyName:"APP Engineering & Supplies"
  },
  {
    country: "Singapore",
    address: "#08-14 PS100 100 PECK SEAH STREET SINGAPORE (079333)",
    image: require("../media/flags/singapore.2536222e.png"),
    companyName:"APP Marine Power Machinery"
  },
];

const ContactUs = () => {
  return (
    <div className="mt-4">
      {/* <img src={require("../images/contact.c728fa4c.png")} className="w-screen" alt="" /> */}

      <div className="flex    flex-col  py-0 justify-around text-center lg:text-left">
        {/* <div
          className=" flex flex-col justify-center items-center"
          data-aos="zoom-in"
          data-aos-delay="200"
        >
          <h1 className="mb-5 md:text-5xl text-3xl font-bold text-blue-900">
            Contact Us
          </h1>
          <div className="text-xl max-w-[80%] lg:max-w-[60%] mx-auto md:mx-0 font-semibold tracking-tight mb-8 text-gray-500">
            If you have any questions about our products or need assistance with
            your order, feel free to get in touch with us. Our team is here to
            help you!
          </div>
        </div> */}
        <Intro2/>
        {/* 
        <div className="flex w-auto" data-aos="fade-up" data-aos-delay="700">
          <img
            alt="card img"
            className="rounded-t float-right duration-1000 w-full"
            src={boatImg}
          />
        </div> */}
      </div>

      {/* contacts */}
      <div className="flex mt-[100px] justify-center flex-wrap  gap-20">
        <div
          data-aos="fade-up-right"
          data-aos-delay="200"
          className="flex flex-col gap-3 "
        >
          <h1 className="text-4xl font-semibold">A.Arjunan</h1>
          <p className="text-base text-gray-500 hover:text-gray-700">
            PH No : <a href="tel:+6581867004">+6581867004</a> ( WhatsApp/We
            Chat)
          </p>
          <p className="text-base text-gray-500 hover:text-gray-700">
            MOB : <a href="tel:+918220144237">+918220144237</a> (WhatsApp)
          </p>
          <a href="mailto:arjunan@appmarines.com">
            {" "}
            <p className="text-base text-gray-500 hover:text-gray-700">
              arjunan@appmarines.com
            </p>
          </a>
        </div>

        <div className=" border-l-2 hidden lg:block border-gray-600 h-[160px] "></div>

        <div
          data-aos="fade-up-left"
          data-aos-delay="200"
          className="flex flex-col gap-3"
        >
          <h1 className="text-4xl font-semibold">DEREK NG</h1>
          <p className="text-base text-gray-500 hover:text-gray-700">
            Phone : <a href="tel:+6596833561">+659683 3561</a> (WhatsApp / We
            Chat)
          </p>
          <a href="mailto:derekngts@appmarines.com">
            {" "}
            <p className="text-base text-gray-500 hover:text-gray-700">
              derekngts@appmarines.com
            </p>
          </a>
        </div>
      </div>

      {/* locations */}

      <div className="border-t-2 mt-[50px] border-gray-500 w-[60%]  mx-auto"></div>

      <div className="flex my-[100px] justify-center  max-w-[90%]  xl:max-w-[60%] flex-col md:flex-row  mx-auto gap-20">
        {locationsData.map((location, index) => (
          <div
            key={index}
            className=" min-w-[30%] w-[90%]  mx-auto flex flex-col items-center justify-center gap-4 locationCard p-[20px]"
          >
            <img
              data-aos="zoom-in"
              data-aos-delay="200"
              src={location.image}
              alt={location.country}
              loading="lazy"
            />
            <h1  data-aos="fade-down" data-aos-delay="300" className="text-2xl text-center">{location.companyName}</h1>
            <h1 data-aos="fade-down" data-aos-delay="300" className="text-4xl">
              {location.country}
            </h1>
            
            <p
              data-aos="fade-up"
              data-aos-delay="300"
              className="w-[60%] mx-auto text-center"
            >
              {location.address}
            </p>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default ContactUs;
