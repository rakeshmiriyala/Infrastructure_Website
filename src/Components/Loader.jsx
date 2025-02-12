import React from "react";
import { FaCog } from "react-icons/fa";

const Loader = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-100">
      <div className="relative">
        <FaCog className="text-8xl text-[#00a69c] animate-spin" />
        <FaCog className="text-4xl text-black animate-spin absolute top-[-20px] left-[-20px]" />
      </div>
    </div>
  );
};

export default Loader;



// import React from "react";
// import logo from "../assets/Logo-1.png"; 

// const Loader = () => {
//   return (
//     <div className="flex justify-center items-center h-screen bg-gray-100">
//       {/* Flipping Logo */}
//       <img
//         src={logo}
//         alt="Loading..."
//         className="w-24 h-24 animate-flip"
//       />
//     </div>
//   );
// };

// export default Loader;

