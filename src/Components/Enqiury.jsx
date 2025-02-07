import React from "react";
import yourImage from "../assets/Enquiry.png"; // Update with your actual image path

function AppointmentPage() {
  return (
    <div className="px-4 sm:px-20 xs:px-8 md:px-14 lg:px-32 lg:py-15 xs:py-6 sm:py-14 md:py-20 flex flex-col md:flex-row justify-between items-center">
      {/* Left Section */}
      <div className="w-full md:w-1/2 lg:space-y-6 xs:space-y-6 md:space-y-2 ">
        <p className="lg:text-lg xs:text-lg text-black md:text-md">
          BOOK YOUR APPOINTMENT
        </p>
        <h2 className="text-2xl sm:text-3xl md:text-xl lg:text-4xl font-bold text-[#e9b100]">
          The Smart Way of Home Services
        </h2>
        <p className="text-base sm:text-lg lg:text-lg md:text-sm text-black">
          Transform your space with expert interior solutions tailored to your
          needs. From concept to completion, we ensure elegance, functionality,
          and precision in every detail. Let’s create something extraordinary
          together!
        </p>
        <br />
        <button className="px-6 py-3 bg-[#00a69c] text-white hover:cursor-pointer font-semibold rounded-4xl">
          Equiry Now
        </button>
      </div>

      {/* Right Section */}
      <div className="w-full md:w-1/2 mt-10 md:mt-0 flex justify-center">
        <img
          src={yourImage}
          alt="Home Services"
          className="w-full sm:w-4/5 md:w-3/4 lg:w-180 lg:h-[550px]"
        />
      </div>
    </div>
  );
}

export default AppointmentPage;
