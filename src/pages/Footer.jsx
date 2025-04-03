import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { IoMailOutline } from "react-icons/io5";
import { SlEarphonesAlt } from "react-icons/sl";
import { FaFacebookSquare, FaTwitterSquare, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer id="footer" className="bg-gray-100 py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row justify-between items-center">
          {/* Left Side (Contact Info) */}
          <div className="text-center lg:text-left mb-4 lg:mb-0">
            <p className="mb-2 flex items-center justify-center lg:justify-start">
              <CiLocationOn className="text-gray-xl mr-2 " />
              <small className="text-gray-500">
                New Mumbai, Maharashtra, India
              </small>
            </p>
            <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4">
              <p className="mb-2 flex items-center">
                <IoMailOutline />
                <a
                  className="ml-2 text-pink-500 hover:underline"
                  href="mailto:support@kgamify.com"
                >
                  support@kgamify.com
                </a>
              </p>
              <p className="mb-0 flex items-center">
                <SlEarphonesAlt />
                <a
                  className="ml-2 text-pink-500 hover:underline"
                  href="tel:51836362800"
                >
                  518-3636-2800
                </a>
              </p>
            </div>
          </div>

          {/* Right Side (Social Media Icons) */}
          <div className="flex space-x-4">
            <a
              href="https://www.facebook.com/k.gamify.1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lightpink-400 hover:text-pink-600 text-2xl"
            >
              <FaFacebookSquare size={40} />
            </a>
            <a
              href="https://twitter.com/GamifyK"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lightpink-400 hover:text-pink-600 text-2xl"
            >
              <FaTwitterSquare size={40} />
            </a>
            <a
              href="https://www.instagram.com/kgamify/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lightpink-400 hover:text-pink-600 text-2xl"
            >
              <FaInstagram size={40} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
