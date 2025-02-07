import { useEffect } from "react";
import { Lightbulb } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import mainImage from "../assets/About_1.jpg";
import overlayImage from "../assets/About_2.jpg";

function AboutSection() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div
      id="about"
      className="xs:px-8 xs:py-4 sm:px-0 md:py-12 md:px-12 lg:px-40 flex items-center justify-center h-auto lg:h-screen w-full flex-col md:flex-row"
    >
      {/* Left Side - Image Section (Fade from Left to Right) */}
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

      {/* Right Side - Text Content (Fade from Right to Left) */}
      <div
        className="w-full sm:w-3/4 md:w-1/2 xs:space-y-6 md:space-y-2 sm:space-y-8 md:mt-0 xs:mt-10 sm:mt-0"
        data-aos="fade-left"
      >
        <p className="text-lg text-gray-500">About Story</p>
        <h2 className="text-3xl sm:text-4xl md:text-2xl lg:text-6xl font-bold text-gray-800">
          Crafting excellence, designing dreams!
        </h2>
        <p className="lg:text-lg md:text-md text-gray-500">
          Welcome to your trusted partner in premium interior solutions. We
          specialize in ceiling, electrical, civil, HVAC, lighting, plumbing,
          and waterproofing services. With a commitment to quality craftsmanship
          and innovative designs, our expert team transforms spaces with
          precision and care. From professional consulting to complete building
          design, we bring your vision to reality. Let's create exceptional
          spaces together!
        </p>
        <br />
        <div className="p-4 mb-4 lg:mb-0 sm:p-6 md:p-4 w-full bg-black text-white rounded-4xl shadow-md">
          <div className="flex items-start space-x-6">
            <Lightbulb className="w-16 h-16 xs:w-26 xs:h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 text-primary" />
            <div>
              <h3 className="text-xl sm:text-2xl md:text-xl lg:text-2xl font-semibold">
                Our Vision
              </h3>
              <p className="mt-2 lg:text-lg md:text-sm">
                It uses a dictionary of over 200 Latin words, combined with a
                handful of model sentence structures, to generate Lorem Ipsum
                which looks reasonable.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
