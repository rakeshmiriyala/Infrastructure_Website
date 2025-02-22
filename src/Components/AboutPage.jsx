import { useEffect } from "react";
import { Lightbulb } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import mainImage from "../assets/About_1.jpg";
import overlayImage from "../assets/About_2.jpg";
import founderImage from "../assets/founder.jpg";
import cofounderImage from "../assets/cofounder.jpg";
import Navbar from "./Navabar"; // Importing the Navbar component

function AboutPage() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <>
      <Navbar />
      <div className="xs:px-8 xs:py-4 sm:px-0 md:py-12 md:px-12 lg:px-40 flex items-center justify-center h-auto lg:h-screen w-full flex-col md:flex-row">
        {/* Left Side with AOS animation (Fade Right) */}
        <div
          className="relative w-full sm:w-3/4 md:w-1/2 flex justify-center py-5 sm:py-5 md:py-0"
          data-aos="fade-right"
        >
          <img
            src={mainImage}
            alt="Main"
            className="w-full h-auto sm:w-3/4 md:w-3/4 rounded-4xl object-cover"
          />
          <img
            src={overlayImage}
            alt="Overlay"
            className="absolute top-1/2 lg:left-1/4 md:left-1/4 xs:left-12 sm:left-1/4 transform -translate-x-1/2 -translate-y-1/2 w-1/2 sm:w-2/3 md:w-1/2 h-auto rounded-4xl"
          />
        </div>
        {/* Right Side with AOS animation (Fade Left) */}
        <div
          className="w-full sm:w-3/4 md:w-1/2 xs:space-y-6 md:space-y-2 sm:space-y-8 md:mt-0 xs:mt-10 sm:mt-0"
          data-aos="fade-left"
        >
          <p className="text-lg text-gray-500">About Story</p>
          <h2 className="text-3xl sm:text-4xl md:text-2xl lg:text-6xl font-bold text-gray-800">
            Crafting excellence, designing dreams!
          </h2>
          <p className="lg:text-lg md:text-sm text-gray-500">
            Welcome to your trusted partner in premium interior solutions! We
            are committed to transforming spaces with unparalleled
            craftsmanship, innovative design, and precision execution. Our
            expertise spans across a wide range of services, including ceiling
            installations, electrical works, civil engineering, HVAC solutions,
            sophisticated lighting designs, advanced plumbing systems, and
            cutting-edge waterproofing techniques.
          </p>
          <p className="lg:text-lg md:text-sm text-gray-500">
            With a team of seasoned professionals, we bring visionary concepts
            to life whether it's a residential, commercial, or industrial
            project. Our holistic approach ensures functionality, aesthetics,
            and sustainability in every design. Beyond execution, we provide
            expert consulting and full-scale building design solutions, guiding
            you through every step to turn your vision into reality.
          </p>
          <br />
          <div className="p-4 mb-4 lg:mb-0 sm:p-6 md:p-4 w-full bg-black text-white rounded-4xl shadow-md">
            <div className="flex items-start space-x-6">
              <Lightbulb className="w-16 h-16 xs:w-26 xs:h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 text-primary" />
              <div>
                <h3 className="text-xl sm:text-2xl md:text-sm lg:text-2xl font-semibold">
                  Our Vision
                </h3>
                <p className="mt-2 lg:text-lg md:text-xs">
                  By blending creativity with precision, we craft interiors that
                  reflect personality, enhance comfort, and elevate lifestyles.
                  Our goal is to redefine spaces with innovative design
                  solutions, exceptional craftsmanship, and a seamless blend of
                  aesthetics and functionality.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Founder and Co-founder Cards */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 py-1 px-8 md:px-20">
        {/* Founder Card */}
        <div
          className="bg-white  p-6 text-center w-full md:w-1/3"
          data-aos="fade-up"
        >
          <img
            src={founderImage}
            alt="Founder"
            className="w-36 h-32 rounded-xs mx-auto mb-4"
          />
          <h3 className="text-2xl font-semibold text-gray-800">Founder</h3>
          <p className="text-gray-500 mt-2">
            A visionary leader dedicated to excellence in interior solutions.
          </p>
        </div>
        {/* Co-founder Card */}
        <div
          className="bg-white p-6 text-center w-full md:w-1/3"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <img
            src={cofounderImage}
            alt="Co-founder"
            className="w-24 h-32 rounded-xs mx-auto mb-4"
          />
          <h3 className="text-2xl font-semibold text-gray-800">Co-founder</h3>
          <p className="text-gray-500 mt-2">
            Passionate about innovative designs and quality craftsmanship.
          </p>
        </div>
      </div>
    </>
  );
}

export default AboutPage;
