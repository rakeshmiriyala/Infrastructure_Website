import React from "react";
import loaderVideo from "../assets/loader_animation.mp4"; // Adjust path based on location

const Loader = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <video autoPlay loop muted className="w-full h-screen">
        <source src={loaderVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Loader;
