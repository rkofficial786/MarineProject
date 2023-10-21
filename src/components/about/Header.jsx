import React from "react";

const Header = () => {
  return (
    <div className="mt-16 mb-16 flex flex-col gap-10 w-[90%] mx-auto">
      <div className="">
       <p className="text-3xl font-bold text-blue-900 mx-auto max-w-1/2 text-center"> Welcome to APP Engineering and Supplies PTE LTD </p>
        <p className="text-2xl font-bold text-blue-900 mx-auto max-w-1/2 text-center">Your Premier Partner in Marine Excellence</p>
      </div>
      <p className="mx-auto max-w-1/2 text-2xl text-justify">
        At APP Engineering and Supplies, we take pride in being a leading
        provider of marine spare parts and comprehensive services tailored to
        meet the diverse needs of the maritime industry. With a commitment to
        excellence and a legacy of reliability, we are your trusted partner for
        all things marine.
      </p>
    </div>
  );
};

export default Header;
