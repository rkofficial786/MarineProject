import React from "react";

const Expertise = ({
  image,
  text = "Welcome to TecFinics, your trusted partner in delivering cutting-edge solutions for the digital age. With a strong commitment to innovation and a deep understanding of today's technology landscape, we specialize in providing a comprehensive suite of services that empower businesses to excel in the modern world. We are driven by a passion for harnessing the full potential of technology to drive growth, efficiency, and transformation for our clients.",
  reverse,
  title = "Seamlessly Engineered Futures",
}) => {
  return (
    <div
    data-aos="flip-up"
      className="flex expertiseCard gap-5  flex-col lg:flex-row max-w-screen-xl "
      style={{ flexDirection: reverse }}
    >
      <div className="flex flex-col gap-5 w-[90%] mx-auto lg:w-[50%]   md:gap-4 md:mx-8">
        <h2 className="text-2xl font-bold text-blue-900 md:text-3xl">
          {title}
        </h2>

        <p className="text-gray-700 text-[17px] md:text-2xl">{text}</p>
      </div>

      <img
        loading="lazy"
        alt=""
        src={image}
        className="w-[90%] mx-auto  lg:w-[500px] h-80 object-cover"
      />
    </div>
  );
};

export default Expertise;
