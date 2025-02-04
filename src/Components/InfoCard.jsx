import { FaArrowRight } from "react-icons/fa";
import sampleImage from "../assets/InfoCard.jpg";

const InfoCard = () => {
  return (
    <div className="flex justify-center sm:px-4 xs:px-2 lg:px-40 md:px-20 items-center md:gap-8 h-auto lg:py-30 md:py-20">
      {/* Left Div */}
      <div className="lg:w-3/4 md:w-1/2 sm:w-full xs:w-full">
        <img src={sampleImage} alt="Sample" className="h-auto" />
      </div>
      {/* Right Div */}
      <div className="lg:w-1/4 md:w-1/2 flex flex-col justify-center sm:w-full xs:w-full">
        <h1 className="lg:text-4xl md:text-2xl font-bold lg:ml-[-250px] lg:pl-10 lg:py-8 lg:mb-3 lg:leading-15 text-black lg:mt-5 sm:text-xl xs:text-lg text-center sm:ml-0 xs:ml-0" style={{ backgroundColor: "rgba(255, 255, 255, 0.8)" }}>
          Expertise and Innovation of Interior to Inspire You
        </h1>
        <p className="text-black lg:ml-[-100px] mt-2 sm:text-center xs:text-center sm:ml-0 xs:ml-0">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour.
        </p>
        {/* More Information */}
        <div className="lg:mt-6 md:mt-2 flex items-center lg:ml-[-100px] hover:cursor-pointer sm:justify-center xs:justify-center">
          <p className="mr-2">More Information</p>
          <FaArrowRight className="text-xl" />
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
