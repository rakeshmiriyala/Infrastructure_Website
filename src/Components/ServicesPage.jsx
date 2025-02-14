import React from "react";
import civilImg from "../assets/civil.jpg";
import interiorImg from "../assets/interior.jpg";
import plumbingImg from "../assets/plumbing.jpg";
import electricalImg from "../assets/Electrical.jpg";
import fireImg from "../assets/firefitting.jpg";
import hvacImg from "../assets/hvac.jpg";
import landscapingImg from "../assets/landscaping.jpg";
import waterproofingImg from "../assets/waterproofing.jpg";
import paintingImg from "../assets/painting.jpg";
import servicesMainImg from "../assets/Services_bg.jpg";
import Navbar from "./Navabar";

const services = [
  {
    title: "Civil Works",
    image: civilImg,
    link: "/#/services/civil-works",
    description:
      "We provide top-notch civil construction services ensuring strong foundations.",
  },
  {
    title: "Interior Works",
    image: interiorImg,
    link: "/#/services/interior-works",
    description:
      "Modern and aesthetic interior design solutions for all spaces.",
  },
  {
    title: "Plumbing Works",
    image: plumbingImg,
    link: "/#/services/plumbing-works",
    description:
      "Expert plumbing services with high-quality materials and installation.",
  },
  {
    title: "Electrical Works",
    image: electricalImg,
    link: "/#/services/electrical-works",
    description:
      "Safe and efficient electrical solutions for residential & commercial needs.",
  },
  {
    title: "Fire Fitting Works",
    image: fireImg,
    link: "/#/services/fire-fitting-works",
    description:
      "Fire safety installations and maintenance for maximum security.",
  },
  {
    title: "HVAC Works",
    image: hvacImg,
    link: "/#/services/hvac-works",
    description:
      "Heating, ventilation, and air conditioning solutions for comfort.",
  },
  {
    title: "Landscaping Works",
    image: landscapingImg,
    link: "/#/services/landscaping-works",
    description:
      "Beautiful and sustainable landscaping designs for outdoor spaces.",
  },
  {
    title: "Water Proofing Works",
    image: waterproofingImg,
    link: "/#/services/water-proofing-works",
    description:
      "Advanced waterproofing solutions to protect buildings from moisture.",
  },
  {
    title: "Painting/Texture",
    image: paintingImg,
    link: "/#/services/painting-works",
    description:
      "High-quality painting and texture solutions for a fresh look.",
  },
];

const ServicesPage = () => {
  return (
    <>
      <Navbar />
      <div className="px-4 lg:px-40 md:20 xs:px-10 py-12">
        {/* First Section - Responsive Order Adjustments */}
        <div className="flex flex-col-reverse md:flex-row gap-2 items-center mb-12">
          {/* Left Content - Top on Small Screens */}
          <div className="w-full md:w-1/2 text-center md:text-left mt-6 md:mt-0">
            <h1 className="text-4xl font-bold mb-4 text-gray-800">
              What We Do
            </h1>
            <p className="text-lg text-start text-gray-600">
              We are committed to delivering top-tier construction and interior
              solutions that blend innovation, quality, and functionality. With
              a keen focus on customer satisfaction, we specialize in a wide
              range of construction, infrastructure, and interior design
              services tailored to meet the diverse needs of residential,
              commercial, and industrial projects. From initial planning to
              execution, our expert team ensures meticulous attention to detail,
              maintaining the highest industry standards in every aspect of your
              project.
            </p>
            <p className="text-lg text-start text-gray-600 lg:block hidden ">
              <br />
              Our services encompass residential and commercial construction,
              interior design, ceiling and lighting solutions, HVAC
              installations, plumbing, and waterproofing. We also offer
              structural repairs, custom finishes, painting, and polishing,
              ensuring a seamless and aesthetically pleasing transformation.
              Whether you need a complete building project, a modern renovation,
              or elegant interior upgrades, we bring creativity and technical
              expertise to every space, enhancing its functionality and visual
              appeal.
            </p>
          </div>
          {/* Right Image - Bottom on Small Screens */}
          <div className="w-full md:w-1/2 flex lg:py-10">
            <img src={servicesMainImg} alt="Our Services" className="w-full" />
          </div>
        </div>

        <h1 className="text-center text-4xl font-semibold mb-4">
          All Services
        </h1>
        {/* Second Section: Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white overflow-hidden">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-black">
                  <a
                    href={service.link}
                    className="hover:text-amber-500 cursor-pointer"
                  >
                    {service.title}
                  </a>
                </h3>
                <p className="text-gray-600 mt-2">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ServicesPage;
