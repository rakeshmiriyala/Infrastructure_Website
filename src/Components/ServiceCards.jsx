import React , {useState} from "react";
import { WrenchScrewdriverIcon } from "@heroicons/react/20/solid";

// Importing images
import serviceImage from "../assets/Services_5.png";
import iconRepairs from "../assets/icon8.png";
import iconMaintenance from "../assets/icon9.png";
import iconTireReplacement from "../assets/icon11.png";
import iconBatteryServices from "../assets/icon12.png";
import iconBrakeServices from "../assets/icon12.png";
import iconEngineRepair from "../assets/icon7.png";
import iconEngineRepairr from "../assets/icon10.png";

const services = [
  {
    step: "01",
    name: "Modern Ideas",
    extraname: "for Home",
    imageUrl: serviceImage,
    description:
      "Innovative and stylish interior concepts that redefine your living space with elegance and functionality.",
  },
  {
    step: "02",
    name: "Electrical Works",
    imageUrl: serviceImage,
    iconUrl: iconRepairs,
    description:
      "Safe and efficient electrical solutions, ensuring seamless power distribution for homes and commercial spaces.",
  },
  {
    step: "03",
    name: "Fire Fitting Works",
    imageUrl: serviceImage,
    iconUrl: iconMaintenance,
    description:
      "Advanced fire safety systems designed to protect your space with top-tier fire-resistant solutions.",
  },
  {
    step: "04",
    name: "Water Proofing Works",
    imageUrl: serviceImage,
    iconUrl: iconEngineRepairr,
    description:
      "Reliable waterproofing techniques to safeguard your building from leaks, moisture, and long-term damage.",
  },
  {
    step: "05",
    name: "Consultation",
    imageUrl: serviceImage,
    iconUrl: iconTireReplacement,
    description:
      "Expert guidance to help you plan and execute the perfect interior and structural designs for your project.",
  },
  {
    step: "06",
    name: "Building Design",
    imageUrl: serviceImage,
    iconUrl: iconBatteryServices,
    description:
      "Architectural excellence that blends creativity and practicality to craft stunning and functional spaces.",
  },
  {
    step: "07",
    name: "Plumbing",
    imageUrl: serviceImage,
    iconUrl: iconBrakeServices,
    description:
      "Efficient plumbing solutions ensuring a smooth water supply and waste management system for your property.",
  },
  {
    step: "08",
    name: "Painting",
    imageUrl: serviceImage,
    iconUrl: iconEngineRepair,
    description:
      "Premium painting services that add life and personality to your spaces with high-quality finishes.",
  },
];

const ServiceCards = () => {
  const [flipped, setFlipped] = useState(Array(services.length).fill(false));

  const toggleFlip = (index) => {
    setFlipped((prev) => {
      return prev.map((_, i) => i === index ? !prev[i] : false);
    });
  };
  return (
    <section className="px-4 sm:px-10 xs:px-2 md:px-20 md:py-20 sm:py-10 bg-[#d2d2d2cc] xs:pb-10">
      <div className="mx-auto flex justify-center object-center px-4 xs:px-0 lg:py-8 md:py-0">
        <div className="flex justify-center object-center flex-col gap-3 xs:gap-0 sm:gap-6 md:gap-8 lg:gap-16">
          <div className="grid gap-4 lg:gap-7 space-y-10 md:space-y-0 sm:gap-16 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 xs:grid-cols-1">
            {/* First card with separate styling */}
            <div
              key={services[0].name}
              className="h-96 w-full md:w-72 sm:w-64 xs:w-72 [perspective:1000px] transform-none"
            >
              <div className="relative h-full w-full transition-all duration-500 [transform-style:preserve-3d] ">
                {/* Front Face */}
                <div className="absolute inset-0 h-full w-full [backface-visibility:hidden] flex items-center justify-center">
                  <div className="text-start">
                    <h1 className="text-3xl text-start font-semibold mt-4">
                      {services[0].name}
                    </h1>
                    <h1 className="text-3xl text-[#00a69c] text-start font-semibold mt-4">
                      {services[0].extraname}
                    </h1>
                    <p className="text-lg mt-2">{services[0].description}</p>
                    {/* Button added at the top */}
                    <a href="tel:555-555-5555" className="text-start">
                      <button className="my-2 bg-[#00a69c] hover:cursor-pointer text-start text-white font-bold py-2 px-4 w-auto rounded-full items-start justify-start">
                        <span>Schedule Service</span>
                      </button>
                    </a>
                  </div>
                </div>

                {/* Back Face */}
                <div
                  className="absolute inset-0 h-full w-full bg-cover bg-center [transform:rotateY(180deg)] [backface-visibility:hidden]"
                  style={{ backgroundImage: `url(${services[0].imageUrl})` }}
                >
                  <div className="flex min-h-full flex-col items-center justify-center bg-black/60 rounded-xl">
                    <h2 className="text-2xl font-bold text-white mb-4">
                      {services[0].name}
                    </h2>
                    <p className="text-lg text-white mb-4 text-center">
                      {services[0].description}
                    </p>
                    <a href="tel:555-555-5555" className="inline-flex">
                      <button className="my-2 bg-yellow-800 hover:bg-yellow-700 text-white font-bold py-2 px-4 w-auto rounded-full inline-flex items-center">
                        <span>Schedule Service</span>
                        <WrenchScrewdriverIcon className="h-6 w-6 ml-2" />
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Other services */}
            {services.slice(1).map((service, index) => (
              <div
                key={service.name}
                className="h-96 w-full md:w-72 sm:w-64 xs:w-72 [perspective:1000px] group"
                onClick={() => toggleFlip(index)}
              >
                <div
                  className={`relative h-full w-full transition-all duration-500 [transform-style:preserve-3d] 
                    ${flipped[index] ? "rotate-y-180" : ""}
                    group-hover:lg:[transform:rotateY(180deg)]`}
                >
                  {/* Front Face */}
                  <div className="absolute inset-0 h-full w-full [backface-visibility:hidden] flex items-center justify-center bg-white">
                    <div className="text-center">
                      {/* Icon above the title */}
                      <img
                        src={service.iconUrl}
                        alt="Service Icon"
                        className="h-12 w-12 mx-auto mb-4"
                      />
                      <h1 className="text-3xl font-semibold mt-4">
                        {service.name}
                      </h1>
                      <p className="text-lg mt-2">{service.description}</p>
                    </div>
                  </div>

                  {/* Back Face */}
                  <div
                    className="absolute inset-0 h-full w-full bg-cover bg-center [transform:rotateY(180deg)] [backface-visibility:hidden]"
                    style={{ backgroundImage: `url(${service.imageUrl})` }}
                  >
                    <div className="flex min-h-full flex-col items-center justify-center rounded-xl">
                      {/* Icon above the title */}
                      <img
                        src={service.iconUrl}
                        alt="Service Icon"
                        className="h-12 w-12 mx-auto mb-4"
                      />
                      <h2 className="text-2xl font-bold text-white mb-4">
                        {service.name}
                      </h2>
                      <p className="text-lg text-white mb-4 text-center">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceCards;
