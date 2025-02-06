import { Lightbulb } from "lucide-react";
import mainImage from "../assets/About_1.jpg";
import overlayImage from "../assets/About_2.jpg";

function AboutSection() {
  return (
    <div id="about" className="xs:px-8 xs:py-4 sm:px-0 md:py-12 md:px-12 lg:px-40 flex items-center justify-center h-auto lg:h-screen w-full flex-col md:flex-row">
      {/* Left Side */}
      <div className="relative w-full sm:w-3/4 md:w-1/2 flex justify-center py-5 sm:py-5 md:py-0">
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

      {/* Right Side */}
      <div className="w-full sm:w-3/4 md:w-1/2 xs:space-y-6 md:space-y-2 sm:space-y-8 md:mt-0 xs:mt-10 sm:mt-0">
        <p className="text-lg text-gray-500">About Story</p>
        <h2 className="text-3xl sm:text-4xl md:text-2xl lg:text-6xl font-bold text-gray-800">
          Start Your Healthy Life Today With Us
        </h2>
        <p className="lg:text-lg md:text-md text-gray-500">
          There are many variations of passages of Lorem Ipsum available, but the majority
          have suffered alteration in some form, by injected humour, or randomised words
          which don't look even. The generated Lorem Ipsum is therefore always free from
          repetition, injected humour, or non-characteristic words etc by injected humour,
          or randomised words.
        </p>  
        <br />
        <div className="p-4 mb-4 lg:mb-0 sm:p-6 md:p-4 w-full bg-black text-white rounded-4xl shadow-md">
          <div className="flex items-start space-x-6">
            <Lightbulb className="w-16 h-16 xs:w-26 xs:h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 text-primary" />
            <div>
              <h3 className="text-xl sm:text-2xl md:text-xl lg:text-2xl font-semibold">Our Vision</h3>
              <p className="mt-2 lg:text-lg md:text-sm">
                It uses a dictionary of over 200 Latin words, combined with a handful of
                model sentence structures, to generate Lorem Ipsum which looks reasonable.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
