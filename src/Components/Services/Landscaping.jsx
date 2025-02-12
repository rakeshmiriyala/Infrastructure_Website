import React from "react";
import { FaTools, FaClipboardList, FaCogs, FaShieldAlt } from "react-icons/fa";
import civilImg from "../../assets/Services_bg.jpg";
import Navbar from "../Navabar";

const services = [
  { title: "Civil Works", link: "/#/services/civil-works" },
  { title: "Interior Works", link: "/#/services/interior-works" },
  { title: "Plumbing Works", link: "/#/services/plumbing-works" },
  { title: "Electrical Works", link: "/#/services/electrical-works" },
  { title: "Fire Fitting Works", link: "/#/services/fire-fitting-works" },
  { title: "HVAC Works", link: "/#/services/hvac-works" },
  { title: "Landscaping Works", link: "/#/services/landscaping-works" },
  { title: "Water Proofing Works", link: "/#/services/water-proofing-works" },
  { title: "Painting/Texture", link: "/#/services/painting-works" },
];

const serviceFeatures = [
  {
    icon: <FaTools className="text-3xl text-blue-500" />,
    title: "Expert Craftsmanship",
    content: "Our skilled professionals ensure high-quality service execution.",
  },
  {
    icon: <FaClipboardList className="text-3xl text-green-500" />,
    title: "Detailed Planning",
    content: "We follow a structured approach to ensure seamless execution.",
  },
  {
    icon: <FaCogs className="text-3xl text-yellow-500" />,
    title: "Modern Equipment",
    content: "Using the latest technology for efficient service delivery.",
  },
  {
    icon: <FaShieldAlt className="text-3xl text-red-500" />,
    title: "Safety & Compliance",
    content: "Strict adherence to industry safety standards and regulations.",
  },
];

const LandscapingWorks = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col md:flex-row px-5 py-8">
        {/* Left Sidebar - Services List (Appears on Top in Small Screens) */}
        <div className="w-full md:w-1/4 md:pr-0 border-gray-300">
          <h2 className="text-xl font-bold mb-4">Our Services</h2>
          <ul>
            {services.map((s) => (
              <li key={s.title} className="mb-2">
                <a
                  href={s.link}
                  className={`block px-4 py-4 ${
                    s.link === "/services/landscaping-works"
                      ? "bg-[#2a2c38] text-white font-semibold"
                      : "text-black hover:text-white hover:bg-[#2a2c38]"
                  }`}
                >
                  {s.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Content - Appears Below in Small Screens */}
        <div className="w-full md:w-3/4 md:pl-4 mt-6 md:mt-0">
          {/* Service Image */}
          <img
            src={civilImg}
            alt="Electrical Works"
            className="w-full h-80 object-cover mb-6"
          />
          {/* Service Title */}
          <h1 className="text-3xl font-bold mb-4">Landscaping Works</h1>
          {/* Service Description */}
          <p className="text-lg text-gray-700 mb-4">
            We provide top-notch civil construction services ensuring strong
            foundations.
          </p>
          <p className="text-gray-600">
            Our team brings expertise in building construction, infrastructure,
            and urban development.
          </p>
          <p className="text-gray-600 mt-2">
            We focus on durability, efficiency, and cost-effective solutions.
          </p>
          <p className="text-gray-600 mt-2">
            Our skilled workforce ensures quality work with advanced machinery.
          </p>
          <p className="text-gray-600 mt-2">
            From site preparation to finishing, we handle every step with
            precision.
          </p>

          {/* Service Features */}
          <h1 className="text-3xl py-4 font-bold">Services Offered</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
            {serviceFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-4 shadow-md rounded-lg flex items-start space-x-4"
              >
                {feature.icon}
                <div>
                  <h3 className="text-lg font-semibold hover:text-amber-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default LandscapingWorks;
