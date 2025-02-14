import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

// Importing images
import serviceImage1 from "../assets/Electrical_vr_card.jpg";
import serviceImage2 from "../assets/firefitting_vr_cards.jpg";
import serviceImage3 from "../assets/waterproofing_vr_cards.jpg";
import serviceImage4 from "../assets/Services_4.jpg";
import serviceImage5 from "../assets/Services_4.jpg";
import serviceImage6 from "../assets/plumbing_vr_cards.jpg";
import serviceImage7 from "../assets/painting_vr_cards.jpg";
import serviceImage8 from "../assets/civil_vr_cards.jpg";
import iconRepairs from "../assets/icon8.png";
import iconMaintenance from "../assets/icon9.png";
import iconTireReplacement from "../assets/icon11.png";
import iconBatteryServices from "../assets/icon12.png";
import iconBrakeServices from "../assets/icon6.png";
import iconEngineRepair from "../assets/icon7.png";
import iconEngineRepairr from "../assets/icon10.png";

const services = [
  {
    step: "01",
    name: "Electrical Works",
    imageUrl: serviceImage1,
    iconUrl: iconRepairs,
    link: "/services/electrical-works",
  },
  {
    step: "02",
    name: "Fire Fitting Works",
    imageUrl: serviceImage2,
    iconUrl: iconMaintenance,
    link: "/services/fire-fitting-works",
  },
  {
    step: "03",
    name: "Water Proofing Works",
    imageUrl: serviceImage3,
    iconUrl: iconEngineRepairr,
    link: "/services/water-proofing-works",
  },
  {
    step: "04",
    name: "Imported Interior Decors",
    imageUrl: serviceImage4,
    iconUrl: iconTireReplacement,
    link: "/services/interior-works",
  },
  {
    step: "05",
    name: "Architectural Design",
    imageUrl: serviceImage5,
    iconUrl: iconBatteryServices,
    link: "/services/civil-works",
  },
  {
    step: "06",
    name: "Plumbing",
    imageUrl: serviceImage6,
    iconUrl: iconBrakeServices,
    link: "/services/plumbing-works",
  },
  {
    step: "07",
    name: "Painting & Art Works",
    imageUrl: serviceImage7,
    iconUrl: iconEngineRepair,
    link: "/services/painting-works",
  },
  {
    step: "08",
    name: "Civil Works",
    imageUrl: serviceImage8,
    iconUrl: iconRepairs,
    link: "/services/civil-works",
  },
];

const ServiceCards = () => {
  return (
    <section className="px-4 sm:px-10 xs:px-2 md:px-20 md:py-20 sm:py-10 bg-[#f7f5f5cc] xs:pb-10">
      <div className="mx-auto flex justify-center object-center px-4 xs:px-0 lg:py-8 md:py-0">
        <div className="flex justify-center object-center flex-col gap-3 xs:gap-0 sm:gap-6 md:gap-8 lg:gap-16">
          <div className="grid gap-4 lg:gap-7 space-y-10 md:space-y-0 sm:gap-16 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 xs:grid-cols-1">
            {services.map((service) => (
              <div
                key={service.name}
                className="relative h-96 w-full md:w-72 sm:w-64 xs:w-72 bg-white p-6 overflow-hidden group transition-all duration-500"
              >
                {/* Background Image with Zoom Effect on Hover */}
                <div
                  className="absolute inset-0 bg-black opacity-0 transition-all duration-500 group-hover:opacity-80"
                  style={{
                    backgroundImage: `url(${service.imageUrl})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                ></div>
                {/* Content */}
                <div className="relative flex flex-col items-center text-center z-10">
                  {/* Icon with Disappear Effect on Hover */}
                  <img
                    src={service.iconUrl}
                    alt="Service Icon"
                    className="h-16 w-16 mx-auto mb-4 transition-all duration-700 group-hover:-translate-y-10 group-hover:opacity-0"
                  />
                  <br />
                  <br />
                  <br />
                  {/* Heading with Fade-Up Effect */}
                  <h1 className="text-3xl font-semibold mt-4 text-black transition-all duration-500 group-hover:-translate-y-8 group-hover:text-white opacity-100 group-hover:opacity-100">
                    {service.name}
                  </h1>
                  {/* Read More Button with Fade-Up Effect */}
                  <Link
                    to={service.link}
                    className="mt-6 flex items-center gap-2 px-4 py-2 text-amber-400 rounded-full text-lg font-medium opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:-translate-y-8"
                  >
                    Read More <FaArrowRight />
                  </Link>
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
