import sampleImage from "../assets/InfoCard.jpg";

const InfoCard = () => {
  return (
    <div className="flex flex-col xs:flex-col sm:flex-row justify-center sm:px-10 sm:py-10 xs:px-10 xs:py-10 lg:px-40 md:px-20 items-center md:gap-8 sm:gap-4 h-auto lg:py-30 md:py-10">
      {/* Left Div (Image Section) */}
      <div className="lg:w-3/4 md:w-1/2 sm:w-full xs:w-full">
        <img src={sampleImage} alt="Sample" className="h-auto" />
      </div>
      {/* Right Div (Text Section) */}
      <div className="lg:w-1/4 md:w-1/2 flex flex-col justify-center sm:w-full xs:w-full">
        <h1
          className="lg:text-4xl md:text-2xl font-bold lg:ml-[-250px] lg:pl-10 lg:py-8 lg:mb-3 lg:leading-15 text-black lg:mt-5 sm:text-xl xs:text-xl xs:text-start text-center md:text-start sm:text-start sm:ml-0 xs:ml-0"
          style={{ backgroundColor: "rgba(255, 255, 255, 0.8)" }}
        >
          Expertise & Innovation in Interior Design to Inspire You
        </h1>
        <p className="text-black lg:ml-[-100px] mt-2 xs:text-start sm:text-start md:text-start sm:ml-0 xs:ml-0">
          Discover the perfect blend of creativity and precision in every
          detail. We craft stunning interiors that reflect elegance,
          functionality, and innovation.
        </p>
      </div>
    </div>
  );
};

export default InfoCard;
