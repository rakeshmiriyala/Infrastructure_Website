import React, { useEffect } from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import contactBg from "../assets/contact-bg-1.png";
import Navbar from "./Navabar";
import Footer from "./Footer";

const ContactPage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <>
      <Navbar />
      <div
        className="py-16 px-4 bg-cover bg-center"
        id="contact"
        style={{ backgroundImage: `url(${contactBg})` }}
      >
        {/* Color Overlay */}
        <div className="inset-0 bg-[#F2EEEA] opacity-50 z-2"></div>

        {/* Content */}
        <div className="z-10">
          <div className="mx-auto px-4 lg:px-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-8 xs:gap-4">
            {/* Left Section - Animates from Left to Right */}
            <div
              className="text-center lg:text-left relative"
              data-aos="fade-right"
            >
              <div className="mb-6 pl-4 p-2 md:p-0 sm:p-4 xs:pl-0 relative">
                <div className="flex flex-col lg:flex-row mb-10 xs:mb-5">
                  <div className="flex flex-col items-start justify-center mb-4 lg:mb-0">
                    <h3 className="text-2xl sm:text-2xl lg:text-xl font-bold transform lg:rotate-270">
                      Contact
                    </h3>
                  </div>

                  <div className="flex flex-col items-start justify-start">
                    <h3 className="text-3xl xs:text-2xl text-start sm:text-2xl lg:text-5xl font-bold">
                      Reach out &amp; <br /> Connect with Us
                    </h3>
                  </div>
                </div>
                <hr className="font-thin text-sm mb-6" />

                <div className="mb-6 xs:mb-2">
                  <p className="md:text-lg sm:text-md xs:text-md text-start lg:text-lg text-gray-600 mb-6 xs:mb-4">
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour passages of available, but the
                    majority have suffered alteration in some form, by injected
                    humour.
                  </p>
                  <div className="space-y-4 bg-transparent">
                    {/* Phone */}
                    <div className="flex items-center group hover:cursor-pointer py-2 px-4 rounded-md">
                      <div className="bg-[#00a69c] text-white p-3 mr-4">
                        <FaPhoneAlt className="text-xl" />
                      </div>
                      <a
                        href="tel:+91-1234567890"
                        className="text-lg text-gray-600 hover:text-[#00a69c]"
                      >
                        +91-1234567890
                      </a>
                    </div>
                    {/* Email */}
                    <div className="flex items-center group hover:cursor-pointer py-2 px-4 rounded-md">
                      <div className="bg-[#00a69c] text-white p-3 mr-4">
                        <FaEnvelope className="text-xl" />
                      </div>
                      <a
                        href="mailto:info@aveluelconic.com"
                        className="text-lg text-gray-600 hover:text-[#00a69c]"
                      >
                        info@aveluelconic.com
                      </a>
                    </div>
                    {/* Location */}
                    <div className="flex items-center group hover:cursor-pointer py-2 px-4 rounded-md">
                      <div className="bg-[#00a69c] text-white p-3 mr-4">
                        <FaMapMarkerAlt className="text-xl" />
                      </div>
                      <address className="text-lg text-gray-600 hover:text-[#00a69c]">
                        Ameerpet, Hyderabad, Telangana - 500038.
                      </address>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Section - Animates from Right to Left */}
            <div
              className="text-center lg:text-left relative w-full max-w-lg mx-auto"
              data-aos="fade-left"
            >
              <form
                className="bg-white p-8 xs:p-6 relative group hover:bg-opacity-90 transition-all duration-300"
                action="#"
                method="POST"
                noValidate
              >
                <h2 className="md:text-xl xs:text-lg sm:text-xl lg:text-2xl font-bold mb-6">
                  Get In Touch With Us And Enjoy <br /> Top-Notch Support
                </h2>
                <div className="space-y-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your name"
                    className="w-full border-gray-400 focus:outline-none focus:border-[#00a69c] py-3 px-4 transition-all duration-300 border-b"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Your email"
                    className="w-full border-gray-400 focus:outline-none focus:border-[#00a69c] py-3 px-4 transition-all duration-300 border-b"
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Your phone no"
                    className="w-full border-gray-400 focus:outline-none focus:border-[#00a69c] py-3 px-4 transition-all duration-300 border-b"
                  />
                  <textarea
                    name="message"
                    placeholder="Write message"
                    className="w-full border-b border-gray-400 focus:outline-none focus:border-[#00a69c] p-3 px-4 transition-all duration-300"
                  ></textarea>

                  <div className="flex justify-start">
                    <button
                      type="submit"
                      className="px-6 py-3 bg-[#00a69c] text-white hover:cursor-pointer transition-all duration-300 w-full lg:w-auto"
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
      <Footer />
    </>
  );
};

export default ContactPage;
