import React from "react";
import { FaCog } from "react-icons/fa"; // Import settings icon from react-icons

const Loader = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-100">
      <div className="relative">
        {/* Big Spinning Gear - Positioned Bottom Right */}
        <FaCog className="text-8xl text-[#00a69c] animate-spin" />
        
        {/* Small Spinning Gear - Positioned Top Left */}
        <FaCog className="text-4xl text-black animate-spin absolute top-[-20px] left-[-20px]" />
      </div>
      
      {/* Loading Text */}
    </div>
  );
};

export default Loader;
