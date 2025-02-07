import React from "react";
import { FaExclamationCircle, FaSearch, FaPencilRuler, FaCode, FaBug, FaRocket } from "react-icons/fa";

const stages = [
  {
    icon: <FaExclamationCircle size={40} className="text-red-500" />,
    title: "Problem Identification",
    description: "Defining challenges and setting clear goals.",
  },
  {
    icon: <FaSearch size={40} className="text-blue-500" />,
    title: "Research & Strategy",
    description: "Analyzing market trends and defining a roadmap.",
  },
  {
    icon: <FaPencilRuler size={40} className="text-green-500" />,
    title: "Design & Prototyping",
    description: "Creating user-friendly wireframes and mockups.",
  },
  {
    icon: <FaCode size={40} className="text-yellow-500" />,
    title: "Development & Execution",
    description: "Building the solution with optimized code.",
  },
  {
    icon: <FaBug size={40} className="text-purple-500" />,
    title: "Testing & Quality Assurance",
    description: "Ensuring performance, security, and usability.",
  },
  {
    icon: <FaRocket size={40} className="text-indigo-500" />,
    title: "Launch & Continuous Improvement",
    description: "Deploying, gathering feedback, and refining.",
  },
];

const StageCard = ({ icon, title, description }) => (
  <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center text-center hover:shadow-xl transition duration-300">
    {icon}
    <h2 className="text-xl font-semibold mt-4">{title}</h2>
    <p className="text-gray-600 mt-2">{description}</p>
  </div>
);

const OurProcess = () => {
  return (
    <div className="max-w-5xl mx-auto py-12 px-10">
      <h1 className="text-3xl font-bold text-center text-gray-800">Our Process</h1>
      <hr className="border-gray-300 my-4 w-20 mx-auto" />
      <p className="text-gray-700 text-center max-w-2xl mx-auto">
        A structured workflow ensuring innovation, efficiency, and impact.
      </p>
      {/* Grid Layout for Responsive Columns */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-8">
        {stages.map((stage, index) => (
          <StageCard key={index} {...stage} />
        ))}
      </div>
    </div>
  );
};

export default OurProcess;
