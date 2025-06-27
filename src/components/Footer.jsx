import React from "react";
import {
  FiFacebook,
  FiTwitter,
  FiInstagram,
  FiYoutube,
  FiLinkedin,
  FiMail,
  FiPhone,
  FiMapPin,
  FiHeart,
} from "react-icons/fi";
import { Link } from "react-router-dom";

const Footer = () => {
  const year = new Date().getFullYear();

  const footerLinks = {
    discover: [
      { name: "Home", url: "/" },
      { name: "All Groups", url: "/groups" },
      { name: "My groups", url: "/my-groups" },
      { name: "Create groups", url: "/create" },
    ],


  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-3">
            <div className="flex items-center mb-4">
              <div className="bg-blue-600 h-10 w-10 rounded-lg flex items-center justify-center mr-3">
                <FiHeart className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-white">Hoobyhub</h2>
            </div>
            <p className="text-gray-400 mb-6 md:pr-40">
              Connecting people with shared interests and passions. Join our
              community and find your hobby group today!
            </p>
            <div className="flex space-x-4 ">
              <a
                href="https://facebook.com/dev.abdullahalnirob"
                className="text-gray-400 hover:text-blue-500 transition-colors"
              >
                <FiFacebook className="h-6 w-6" />
              </a>
              <a
                href="https://x.com/AbdullahN66467"
                className="text-gray-400 hover:text-blue-500 transition-colors"
              >
                <FiTwitter className="h-6 w-6" />
              </a>
              <a
                href="https://instagram.com/dev.abdullahalnirob"
                className="text-gray-400 hover:text-blue-500 transition-colors"
              >
                <FiInstagram className="h-6 w-6" />
              </a>
              <a
                href="https://www.youtube.com/@abdullahalnirob12"
                className="text-gray-400 hover:text-blue-500 transition-colors"
              >
                <FiYoutube className="h-6 w-6" />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Discover</h3>
            <ul className="space-y-2">
              {footerLinks.discover.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.url}
                    className="text-gray-400 hover:text-blue-500 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-start">
              <FiMapPin className="h-6 w-6 text-blue-500 mr-3 mt-1 flex-shrink-0" />
              <span className="text-gray-400">
                123 Community Way, Hobbyville, CA 94105, USA
              </span>
            </div>
            <div className="flex items-center">
              <FiPhone className="h-6 w-6 text-blue-500 mr-3 flex-shrink-0" />
              <span className="text-gray-400">+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center">
              <FiMail className="h-6 w-6 text-blue-500 mr-3 flex-shrink-0" />
              <span className="text-gray-400">hello@hoobyhub.com</span>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-950 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © {year} Hoobyhub. All rights reserved.
          </p>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
