import React from 'react';
import { 
  FiFacebook, 
  FiTwitter, 
  FiInstagram, 
  FiYoutube, 
  FiLinkedin, 
  FiMail, 
  FiPhone, 
  FiMapPin, 
  FiHeart 
} from 'react-icons/fi';

const Footer = () => {
  const year = new Date().getFullYear();
  
  const footerLinks = {
    discover: [
      { name: 'Groups', url: '/groups' },
      { name: 'Events', url: '/events' },
      { name: 'Members', url: '/members' },
      { name: 'Blog', url: '/blog' }
    ],
    join: [
      { name: 'Create Account', url: '/signup' },
      { name: 'Start a Group', url: '/create-group' },
      { name: 'Mobile App', url: '/app' },
      { name: 'Invite Friends', url: '/invite' }
    ],
    about: [
      { name: 'Our Story', url: '/about' },
      { name: 'Careers', url: '/careers' },
      { name: 'Press', url: '/press' },
      { name: 'Contact Us', url: '/contact' }
    ],
    help: [
      { name: 'FAQs', url: '/faqs' },
      { name: 'Support Center', url: '/support' },
      { name: 'Privacy Policy', url: '/privacy' },
      { name: 'Terms of Service', url: '/terms' }
    ]
  };

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
              <div className="bg-blue-600 h-10 w-10 rounded-lg flex items-center justify-center mr-3">
                <FiHeart className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-white">Hoobyhub</h2>
            </div>
            <p className="text-gray-400 mb-6">
              Connecting people with shared interests and passions. Join our community and find your hobby group today!
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">
                <FiFacebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">
                <FiTwitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">
                <FiInstagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">
                <FiYoutube className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">
                <FiLinkedin className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Discover</h3>
            <ul className="space-y-2">
              {footerLinks.discover.map((link, index) => (
                <li key={index}>
                  <a href={link.url} className="text-gray-400 hover:text-blue-500 transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Join Us</h3>
            <ul className="space-y-2">
              {footerLinks.join.map((link, index) => (
                <li key={index}>
                  <a href={link.url} className="text-gray-400 hover:text-blue-500 transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.about.map((link, index) => (
                <li key={index}>
                  <a href={link.url} className="text-gray-400 hover:text-blue-500 transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Info */}
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

      {/* Copyright Section */}
      <div className="bg-gray-950 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © {year} Hoobyhub. All rights reserved.
          </p>
          <div className="flex space-x-6">
            {footerLinks.help.map((link, index) => (
              <a 
                key={index} 
                href={link.url} 
                className="text-gray-500 hover:text-blue-500 text-sm transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;