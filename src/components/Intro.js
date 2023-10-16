import React, { useState, useEffect } from "react";
import ImageData from "../ImageData";
import brochureFile from "../media/grockle_brochure-epayindia.pdf";
import NavLinks from "./Navbar/NavLinks";

const { banner1, banner2, banner3 } = ImageData.ImageData;
const images = [banner1, banner2, banner3];

const handleDownload = () => {
  const anchor = document.createElement("a");
  anchor.href = brochureFile;
  anchor.download = "brochure.pdf";
  anchor.target = "_blank";
  anchor.click();
};
const handleServicepage = ()=> {
  const anchor = document.createElement("a");
  anchor.target = "";

}
const links = [
  { name: "Goto Our List of Service Pages", func: handleServicepage },
  {
    name: "Please download our brochure for more info",
    func: handleDownload,
  },
];

export default function Intro() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      // Move to the next image
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change slide every 3 seconds

    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
      <img
        src={images[currentImageIndex]}
        alt=""
        className="img-fade fade absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
      />
      <div id="overlay"></div>
      {/* <img
        className="background-image absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
        src={images[currentImageIndex]}
      /> */}
      <div
        className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
        aria-hidden="true"
      >
        <div
          className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      <div
        className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
        aria-hidden="true"
      >
        <div
          className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Values That Keep Us On Track
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            At APP Engineering and Supply, your satisfaction is paramount. We
            prioritize open communication and collaboration with our clients,
            actively seeking feedback to improve our services continually. From
            the moment you engage with us to the completion of your project,
            your contentment with our products and services remains our ultimate
            goal.
          </p>
        </div>
        <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10">
            {links.map((link) => (
              <div
                key={link.name}
                onClick={link.func}
                className="hover:scale-[1.1] transition duration-200 ease-in-out"
                style={{ cursor: "pointer" }}
              >
                {link.name} <span aria-hidden="true">&rarr;</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
