import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 px-8 text-base">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 text-lg">
        {/* Column 1: Our Services */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Our Services</h3>
          <p className="mb-2 text-lg"><a href="#" className="hover:text-gray-400">{'> '} Civil Works</a></p>
          <p className="mb-2 text-lg"><a href="#" className="hover:text-gray-400">{'> '}Interior Works</a></p>
          <p className="mb-2 text-lg"><a href="#" className="hover:text-gray-400">{'> '}Plumbing Works</a></p>
          <p className="text-lg"><a href="#" className="hover:text-gray-400">{'>> '}Electrical Works</a></p>
        </div>
        {/* Column 2: Additional Services */}
        <div>
          <p className="mb-2 lg:mt-12 sm:mt-0 text-lg"><a href="#" className="hover:text-gray-400">{'> '}Fire Fitting Works</a></p>
          <p className="mb-2 text-lg"><a href="#" className="hover:text-gray-400">{'> '}Consultation</a></p>
          <p className="mb-2 text-lg"><a href="#" className="hover:text-gray-400">{'> '}Building Design</a></p>
          <p className="text-lg"><a href="#" className="hover:text-gray-400">{'> '}Residentials</a></p>
        </div>

        {/* Column 3: Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <p className="mb-2 text-lg"><a href="#" className="hover:text-gray-400">{'> '}Home</a></p>
          <p className="mb-2 text-lg"><a href="#" className="hover:text-gray-400">{'> '}About Us</a></p>
          <p className="mb-2 text-lg"><a href="#" className="hover:text-gray-400">{'> '}Industries</a></p>
          <p className="text-lg"><a href="#" className="hover:text-gray-400">{'> '}Infrastructure</a></p>
        </div>

        {/* Column 4: Contact Information */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
          <p className="mb-2 text-lg" ><a href="#" className="hover:text-gray-400">{'> '}Suraram, Hyderabad, Telangana - 500055.</a></p>
          <p className="mb-2 text-lg"><a href="#" className="hover:text-gray-400">{'> '}+91-9700071115 , +91-9121231237</a></p>
          <p className="text-lg"><a href="mailto:info@exelusiconic.com" className="hover:text-gray-400">{'> '}info@exelusiconic.com</a></p>
        </div>

        {/* Column 5: Social Media Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Socials</h3>
          <p className="flex items-center mb-2 text-lg"><a href="https://www.facebook.com/ExelusIconicEngineering/" className="flex items-center hover:text-gray-400"><FaFacebook className="mr-2 text-blue-600 text-xl sm:text-2xl" /> Facebook</a></p>
          <p className="flex items-center mb-2 text-lg"><a href="#" className="flex items-center hover:text-gray-400"><FaTwitter className="mr-2 text-blue-400 text-xl sm:text-2xl" /> Twitter</a></p>
          <p className="flex items-center mb-2 text-lg"><a href="https://www.instagram.com/exelus_iconic_engineering/" className="flex items-center hover:text-gray-400"><FaInstagram className="mr-2 text-pink-500 text-xl sm:text-2xl" /> Instagram</a></p>
          <p className="flex items-center text-lg"><a href="https://youtube.com/@exelusiconicandengineering?si=nLrBOaXa8qTGwYPG" className="flex items-center hover:text-gray-400"><FaYoutube className="mr-2 text-red-600 text-xl sm:text-2xl" /> YouTube</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
