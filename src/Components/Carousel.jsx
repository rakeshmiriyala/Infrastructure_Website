import React, { useState } from "react";
import Slider from "react-slick";
import Typewriter from "typewriter-effect";
import "./Crousel.css";

// Import images
import civilImg from "../assets/civil.jpg";
import interiorImg from "../assets/interior.jpg";
import plumbingImg from "../assets/plumbing.jpg";
import electricalImg from "../assets/Electrical.jpg";
import fireImg from "../assets/firefitting.jpg";
import hvacImg from "../assets/hvac.jpg";
import landscapingImg from "../assets/landscaping.jpg";
import waterproofingImg from "../assets/waterproofing.jpg";
import paintingImg from "../assets/painting.jpg";

const CarouselPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Array of image data with unique speeds
  const images = [
    { id: 1, src: civilImg, alt: "Carousel 1", speed: 3000 },
    { id: 2, src: interiorImg, alt: "Carousel 2", speed: 4200 },
    { id: 3, src: plumbingImg, alt: "Carousel 3", speed: 4200 },
    { id: 4, src: electricalImg, alt:"Carousel 4", speed: 4400 },
    { id: 5, src: fireImg, alt: "Carousel 5", speed: 4200 },
    { id: 6, src: hvacImg, alt: "Carousel 6", speed: 4200 },
    { id: 7, src: landscapingImg, alt: "Carousel 7", speed: 4400 },
    { id: 8, src: waterproofingImg, alt: "Carousel 8", speed: 4800 },
    { id: 9, src: paintingImg, alt: "Carousel 9", speed: 4200 },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: images[currentSlide].speed, // Dynamically adjust speed
    pauseOnHover: false, // ❌ Prevent pausing on hover
    beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex), // Update current slide index
    customPaging: (i) => (
      <span className="w-2.5 h-2.5 bg-white rounded-full mx-1" />
    ),
  };

  return (
    <div className="w-full h-screen overflow-hidden">
      <Slider {...settings}>
        {images.map((image) => (
          <div key={image.id} className="w-full h-screen relative">
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover"
            />
            {/* Typing animation text using Typewriter */}
            <div className="absolute inset-0 flex justify-center items-center">
              <div className="text-center text-white px-4 sm:px-6 md:px-8 lg:px-10 xl:px-16">
                <h4 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-5xl font-medium mb-4">
                  <a href="#" className="typewrite">
                    <Typewriter
                      options={{
                        strings: [
                          "Civil Works",
                          "Interior Works",
                          "Plumbing Works",
                          "Electrical Works",
                          "Fire Fitting Works",
                          "HVAC Works",
                          "Landscaping Works",
                          "Water Proofing Works",
                          "Painting/Texture",
                        ],
                        autoStart: true,
                        loop: true,
                        deleteSpeed: 50,
                        delay: 100,
                      }}
                    />
                  </a>
                </h4>
                <h5 className="text-xl sm:text-2xl md:text-xl lg:text-3xl xl:text-2xl font-thin mt-1">
                  We Provide High-Quality Interior Services
                </h5>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CarouselPage;
