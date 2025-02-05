import React from "react";
import spinImage from "../assets/spin-image.png";
import mainImage from "../assets/Infrastructure.png";

const Infrastructure = () => {
  return (
    <div className="px-6 md:px-10 lg:px-40 py-12 md:py-16 lg:py-20 bg-[#fef7f1]" id="infrastructure">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-10">
        {/* Left Side */}
        <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left">
          <h1 className="text-3xl md:text-4xl font-bold">Our Infrastructure</h1>
          <p className="text-sm md:text-md xs:text-start lg:text-lg text-gray-600">
            Exelus Iconic possesses well-equipped machines and sophisticated technology. Our 
            infrastructural setup is our biggest strength. Our efficient staff and diligent workers 
            provide prompt solutions to the specific requirements of a wide spectrum of clients.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 md:gap-8 mt-8">
            {/* Circle 1 */}
            <div className="w-40 h-40 md:w-48 md:h-48 lg:w-52 lg:h-52 bg-white rounded-full flex flex-col items-center justify-center text-black shadow-md">
              <h1 className="text-3xl md:text-4xl mb-2 text-[#f37e21] font-extrabold">130+</h1>
              <h2 className="text-md md:text-lg mb-2">Completed Projects</h2>
              <p className="text-xs md:text-sm text-center">Lorem ipsum simply</p>
            </div>
            {/* Circle 2 */}
            <div className="w-40 h-40 md:w-48 md:h-48 lg:w-52 lg:h-52 bg-white rounded-full flex flex-col items-center justify-center text-black shadow-md">
              <h1 className="text-3xl md:text-4xl mb-2 text-[#f37e21] font-extrabold">10+</h1>
              <h2 className="text-md md:text-lg mb-2">Years of Experience</h2>
              <p className="text-xs md:text-sm text-center">Unique Opportunity</p>
            </div>
          </div>
        </div>
        {/* Right Side */}
        <div className="w-full lg:w-1/2 relative flex items-center xs:px-10 justify-center">
          {/* Spinning Image */}
          <img
            src={spinImage}
            alt="Spinning"
            className="w-24 md:w-32 lg:w-36 h-24 md:h-32 lg:h-36 absolute top-4 xs:left-0 sm:left-20 lg:left-0 md:left-10 slow-spin animate-spin z-10"
          />
          {/* Main Image with Overlay */}
          <img
            src={mainImage}
            alt="Main Image"
            className="w-auto max-w-xs md:max-w-md lg:max-w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Infrastructure;
