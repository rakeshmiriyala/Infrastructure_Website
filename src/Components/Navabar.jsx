import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom"; // Import from react-router-dom
import logo from "../assets/Logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white sticky top-0 z-50">
      <div className="flex justify-between items-center p-4 lg:px-40 sm:px-10 xs:px-10 lg:py-6">
        {/* Logo */}
        <Link to="/" id="logo" className="text-2xl font-bold cursor-pointer">
          <img src={logo} alt="Logo" className="h-10" />
        </Link>
        {/* Desktop Menu */}
        <nav className="hidden lg:flex space-x-10 text-md font-semibold">
          <Link
            to="/"
            className="text-gray-700 hover:text-[#00A69C] uppercase hover:cursor-pointer"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-gray-700 hover:text-[#00A69C] uppercase hover:cursor-pointer"
          >
            About Us
          </Link>
          <Link
            to="/services"
            className="text-gray-700 hover:text-[#00A69C] uppercase hover:cursor-pointer"
          >
            Services
          </Link>
          <Link
            to="/contact"
            className="text-gray-700 hover:text-[#00A69C] uppercase hover:cursor-pointer"
          >
            Contact Us
          </Link>
        </nav>
        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <nav className="lg:hidden bg-white shadow-md absolute w-full z-10">
          <ul className="flex flex-col items-end xs:pr-10 sm:pr-15 py-4 space-y-4">
            <li>
              <Link
                to="/"
                className="text-gray-700 hover:text-[#00A69C] uppercase hover:cursor-pointer"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="text-gray-700 hover:text-[#00A69C] uppercase hover:cursor-pointer"
                onClick={() => setIsOpen(false)}
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className="text-gray-700 hover:text-[#00A69C] uppercase hover:cursor-pointer"
                onClick={() => setIsOpen(false)}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="text-gray-700 hover:text-[#00A69C] uppercase hover:cursor-pointer"
                onClick={() => setIsOpen(false)}
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
