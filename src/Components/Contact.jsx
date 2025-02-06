import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import contactBg from "../assets/contact-bg-1.png";

const ContactSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Animation occurs only once
      easing: "ease-out",
    });
  }, []);

  return (
    <div
      className="py-16 px-4 bg-cover bg-center relative"
      id="contact"
      style={{ backgroundImage: `url(${contactBg})` }}
    >
      {/* Color Overlay */}
      <div className="absolute inset-0 bg-[#F2EEEA] opacity-50"></div>

      {/* Content */}
      <div className="relative z-10">
        <div className="mx-auto px-4 lg:px-20 grid grid-cols-1 sm:grid-cols-2 gap-8">
          {/* Left Section (Moves from Left to Right) */}
          <div
            className="text-center lg:text-left"
            data-aos="fade-left"
          >
            <div className="mb-6 pl-4">
              <div className="flex flex-col lg:flex-row mb-10">
                <div className="flex flex-col items-start justify-center mb-4 lg:mb-0">
                  <h3 className="text-2xl font-bold transform lg:rotate-270">
                    Contact
                  </h3>
                </div>
                <div className="flex flex-col items-start">
                  <h3 className="text-3xl lg:text-5xl font-bold">
                    Reach out &amp; <br /> Connect with Us
                  </h3>
                </div>
              </div>
              <hr className="mb-6" />
              <p className="text-lg text-gray-600 mb-6">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour.
              </p>
              <div className="space-y-4">
                {/* Phone */}
                <div className="flex items-center group transition-all hover:cursor-pointer py-2 px-4 rounded-md">
                  <div className="bg-[#00a69c] text-white p-3 mr-4">
                    <FaPhoneAlt className="text-xl" />
                  </div>
                  <a
                    href="tel:+91-1234567890"
                    className="text-lg text-gray-600 group-hover:text-[#00a69c] transition-all"
                  >
                    +91-1234567890
                  </a>
                </div>
                {/* Email */}
                <div className="flex items-center group transition-all hover:cursor-pointer py-2 px-4 rounded-md">
                  <div className="bg-[#00a69c] text-white p-3 mr-4">
                    <FaEnvelope className="text-xl" />
                  </div>
                  <a
                    href="mailto:info@aveluelconic.com"
                    className="text-lg text-gray-600 group-hover:text-[#00a69c] transition-all"
                  >
                    info@aveluelconic.com
                  </a>
                </div>
                {/* Location */}
                <div className="flex items-center group transition-all hover:cursor-pointer py-2 px-4 rounded-md">
                  <div className="bg-[#00a69c] text-white p-3 mr-4">
                    <FaMapMarkerAlt className="text-xl" />
                  </div>
                  <address className="text-lg text-gray-600 group-hover:text-[#00a69c] transition-all">
                    Ameerpet, Hyderabad, Telangana - 500038.
                  </address>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section (Moves from Right to Left) */}
          <div
            className="w-full max-w-lg mx-auto"
            data-aos="fade-right"
          >
            <form className="bg-white p-8 group hover:bg-opacity-90 transition-all duration-300">
              <h2 className="text-2xl font-bold mb-6">
                Get In Touch With Us And Enjoy <br /> Top-Notch Support
              </h2>
              <div className="space-y-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  className="w-full border-b border-gray-400 focus:border-[#00a69c] py-3 px-4 transition-all"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your email"
                  className="w-full border-b border-gray-400 focus:border-[#00a69c] py-3 px-4 transition-all"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Your phone no"
                  className="w-full border-b border-gray-400 focus:border-[#00a69c] py-3 px-4 transition-all"
                />
                <textarea
                  name="message"
                  placeholder="Write message"
                  className="w-full border-b border-gray-400 focus:border-[#00a69c] p-3 px-4 transition-all"
                ></textarea>

                <div className="flex justify-start">
                  <button
                    type="submit"
                    className="px-6 py-3 bg-[#00a69c] text-white hover:bg-[#7c472a] transition-all w-full lg:w-auto"
                  >
                    Send Message
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
