import Marquee from "react-fast-marquee";
import { LuArrowDownRight } from "react-icons/lu"; // Import the icon
import image1 from "../assets/Services_1.jpg";
import image2 from "../assets/Services_2.jpg";
import image3 from "../assets/Services_3.jpg";
import image4 from "../assets/Services_4.jpg";
import { Link } from "react-router-dom";

import React, { useState, useEffect } from "react";

const Services = () => {
  // Define words with their corresponding links
  const words = [
    { word: "CIVIL WORKS", link: "/word1" },
    { word: "INTERIOR WORKS", link: "/word2" },
    { word: "PLIMBING WORKS", link: "/word3" },
    { word: "ELECTRICAL WORKS", link: "/word4" },
    { word: "FIRE FITTING WORKS", link: "/word5" },
    { word: "HVAC WORKS", link: "/word6" },
    { word: "LANDSCAPING WORKS", link: "/word6" },
    { word: "WATER PROOFING WORKS", link: "/word6" },
    { word: "PAINTING/TEXTURE", link: "/word6" },
  ];

  // Define image data with links and specific titles
  const images = [
    { src: image1, alt: "Image 1", link: "/image1", title: "Interior Works" },
    { src: image2, alt: "Image 2", link: "/image2", title: "Civil Works" },
    { src: image3, alt: "Image 3", link: "/image3", title: "HVAC Works" },
    {
      src: image4,
      alt: "Image 4",
      link: "/image4",
      title: "Landscaping Works",
    },
  ];

  // State for controlling marquee pause
  const [isPaused, setIsPaused] = useState(false);

  return (
    <div className="bg-black" id="services">
      {/* First div with marquee */}
      <div className="py-5 pt-10 lg:mb-10 md:mb-5">
        <Marquee speed={150} gradient={false} pauseOnHover={isPaused}>
          {words.map((item, index) => (
            <div
              key={index}
              className="flex items-center"
              onMouseEnter={() => setIsPaused(true)} // Pause the marquee on hover
              onMouseLeave={() => setIsPaused(false)} // Resume the marquee
            >
              <Link
                to={item.link} // Use 'to' instead of 'href' for React Router navigation
                className="lg:text-7xl md:text-5xl xs:text-4xl text-white font-extrabold rounded-lg transition-all duration-300"
              >
                {item.word}
              </Link>
              {/* Use the LuArrowDownRight icon */}
              <LuArrowDownRight className="mx-2 text-[#00a69c] lg:text-8xl md:text-6xl xs:text-5xl" />
            </div>
          ))}
        </Marquee>
      </div>

      {/* Second div with services section */}
      <div className="flex lg:px-40 lg:mb-20 md:px-20 md:mb-15 sm:px-10 sm:mb-10 xs:px-8 xs:mb-8 rounded-lg shadow-md flex-col sm:flex-row">
        {/* Left Part */}
        <div className="w-full sm:w-1/2">
          <h3 className="lg:text-5xl md:text-4xl xs:text-4xl font-semibold text-white">
            Services We
          </h3>
          <h3 className="tlg:ext-5xl md:text-4xl xs:text-4xl font-semibold text-white">
            {" "}
            Provide
          </h3>
        </div>

        {/* Right Part */}
        <div className="w-full sm:w-1/2 mt-5 sm:mt-0">
          <p className="lg:text-lg md:text-md text-white">
            We offer top-notch interior solutions, blending creativity with
            precision to transform your spaces. From elegant ceilings and
            efficient electrical works to durable plumbing and expert
            waterproofing, our team ensures perfection in every detail. Whether
            it’s lighting, HVAC, civil works, or complete building design, we
            bring innovation and expertise to every project. Let’s craft spaces
            that inspire!{" "}
          </p>
        </div>
      </div>

      {/* Third div with image hover section */}
      <div className="grid grid-cols-2 lg:grid-cols-4 lg:gap-10 md:gap-12 sm:px-10 sm:gap-6 p-5 pb-10 xs:pb-8 xs:px-8 lg:px-40 md:px-20 pt-0 gap-5 sm:grid-cols-2">
        {images.map((image, index) => (
          <div
            key={index}
            className="group relative overflow-hidden transition-transform duration-300"
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-auto object-cover group-hover:scale-105 group-hover:opacity-80 transition-all duration-300"
            />
            {/* Hover effect for only the bottom section */}
            <div className="absolute bottom-0 w-full bg-transparent mb-5 pb-3 pt-1 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {/* Add the specific title from the 'images' array */}
              <h3 className="text-black pl-5 text-2xl mb-2 text-start">
                {image.title}
              </h3>
              {/* Add the link to the "More Info" text */}
              <Link
                to={image.link} // Use 'to' instead of 'href' for React Router navigation
                className="text-black pl-5 hover:cursor-pointer text-start hover:underline"
              >
                More Information
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
