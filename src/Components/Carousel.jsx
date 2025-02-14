import React from "react";
import Slider from "react-slick";
import Typewriter from "typewriter-effect";
import "./Crousel.css";

// Import images
import image1 from "../assets/carousel_1.jpg";
import image2 from "../assets/carousel_2.jpg";
import image3 from "../assets/carousel_1.jpg";

const CarouselPage = () => {
  // Array of image data
  const images = [
    { id: 1, src: image1, alt: "Carousel 1" },
    { id: 2, src: image2, alt: "Carousel 2" },
    { id: 3, src: image3, alt: "Carousel 3" },
  ];
  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    customPaging: (i) => (
      <span className="w-2.5 h-2.5 bg-white rounded-full mx-1" />
    ),
  };

  return (
    <div className=" w-full h-screen overflow-hidden">
      <Slider {...settings}>
        {/* Dynamically render carousel images */}
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
                {/* Typewriter Text */}
                <h4 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-5xl font-medium mb-4">
                  <a href="#" className="typewrite">
                    <Typewriter
                      options={{
                        strings: [
                          "Interior Works",
                          "Civil Works",
                          "Painting/Texture",
                          "Landscaping Works",
                          "Electrical Works",
                        ],
                        autoStart: true,
                        loop: true,
                        deleteSpeed: 50,
                        delay: 100,
                      }}
                    />
                  </a>
                </h4>
                {/* Subheading Text */}
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
