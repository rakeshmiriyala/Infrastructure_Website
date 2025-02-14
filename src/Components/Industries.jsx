import React from "react";
import { Link } from "react-router-dom";
import image1 from "../assets/Software.jpg";
import image2 from "../assets/Hospital.jpg";
import image3 from "../assets/RetailShowRooms.jpg";
import image4 from "../assets/Education.jpg";
import bgImage from "../assets/carousel_2.jpg";

const images = [
  { src: image1, alt: "Image 1", title: "Software Company", link: "/info1" },
  { src: image2, alt: "Image 2", title: "Hospitals", link: "/info2" },
  { src: image3, alt: "Image 3", title: "Retail Show Rooms", link: "/info3" },
  { src: image4, alt: "Image 4", title: "Education", link: "/info4" },
];

const Industries = () => {
  return (
    <div className="relative" id="industries">
      {/* Background Image Section with Black Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: `url(${bgImage})`, // Apply imported background image
          backgroundPosition: "center",
          backgroundSize: "cover",
          opacity: 0.3, // Slight opacity for the image
          backgroundColor: "rgb(0, 0, 0,0.2)", // Semi-transparent black overlay
        }}
      ></div>
      {/* First Row Div with 2 Sections (Headings and Description) */}
      <div className="flex flex-col lg:flex-row mb-10 xs:mb-5 relative z-10">
        {/* Left Div for Headings */}
        <div className="mx-auto px-4 lg:px-40 py-10 xs:py-5 xs:px-8 sm:px-10 md:px-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-8 xs:gap-0">
          {/* Left Section */}
          <div className="text-center lg:pt-16 lg:text-left relative fadeInUp animate-fadeIn">
            <div className="pl-4 p-2 md:p-0 sm:p-4 xs:pl-0 relative">
              {/* Upper Div (for h6 and h3) */}
              <div className="flex flex-col lg:flex-row mb-10 xs:mb-5">
                {/* Left Div for "Features" */}
                <div className="flex flex-col items-start justify-center mb-4 lg:mb-0">
                  <h3 className="text-2xl sm:text-2xl md:pt-5 lg:pt-0 lg:text-lg font-bold transform lg:rotate-270">
                    FEATURES
                  </h3>
                </div>
                {/* Right Div for "Industries We Serve" */}
                <div className="flex flex-col items-start justify-start">
                  <h3 className="text-3xl xs:text-2xl pb-4 text-start sm:text-2xl lg:text-4xl font-bold">
                    Industries We Serve:
                  </h3>
                  <h3 className="text-3xl xs:text-2xl pb-4 text-start sm:text-2xl lg:text-4xl font-bold">
                    Software Company,
                  </h3>
                  <h3 className="text-3xl xs:text-2xl pb-4 text-start sm:text-2xl lg:text-4xl font-bold">
                    Hospitals,
                  </h3>
                  <h3 className="text-3xl xs:text-2xl pb-4 text-start sm:text-2xl lg:text-4xl font-bold">
                    Retail Show Rooms,
                  </h3>
                  <h3 className="text-3xl xs:text-2xl pb-4 text-start sm:text-2xl lg:text-4xl font-bold">
                    Education,
                  </h3>
                  <h3 className="text-3xl xs:text-2xl pb-4 text-start sm:text-2xl lg:text-4xl font-bold">
                    Government Projects,
                  </h3>
                  <h3 className="text-3xl xs:text-2xl pb-4 text-start sm:text-2xl lg:text-4xl font-bold">
                    Residential Projects ...
                  </h3>
                </div>
              </div>
            </div>
          </div>
          {/* Right Section for Description */}
          <div className="flex flex-col items-start justify-start xs:mt-0 lg:mt-0">
            <p className="lg:mt-4 sm:pt-13 lg:text-md sm:text-xl">
              We cater to a diverse range of industries, including Software
              Companies, Hospitals, Retail Showrooms, Educational Institutions,
              and Government Projects.With innovation at our core, we redefine
              spaces to enhance functionality, aesthetics, and user experience.
              Let’s build a better future together
            </p>
          </div>
        </div>
      </div>
      {/* Second Row Div with Images */}
      <div className="grid grid-cols-2 lg:grid-cols-4 lg:gap-10 md:gap-12 sm:px-10 sm:gap-6 p-5 pb-10 md:pb-10 lg:pb-10 xs:pb-8 xs:px-8 lg:px-40 md:px-20 pt-0 gap-5 sm:grid-cols-2">
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

export default Industries;
