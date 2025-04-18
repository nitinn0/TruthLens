import React from 'react';
import { Link } from 'react-router-dom';
import { FaTwitter, FaGithub, FaLinkedin, FaNewspaper } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <span className="text-xl font-bold">Truth Lens</span>
            </Link>
            <p className="text-gray-300 mb-4 max-w-md text-sm">
              Empowering users to identify and combat fake news through advanced AI technology.
              Stay informed with accurate and reliable information.
            </p>
            <div className="flex space-x-4">
              <a href="" className="text-gray-300 hover:text-blue-400 transition-colors">
                <FaTwitter className="text-lg" />
              </a>
              <a href="" className="text-gray-300 hover:text-gray-100 transition-colors">
                <FaGithub className="text-lg" />
              </a>
              <a href="" className="text-gray-300 hover:text-blue-400 transition-colors">
                <FaLinkedin className="text-lg" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-base font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/article-checker" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Check Articles
                </Link>
              </li>
              <li>
                <a href="" className="text-gray-300 hover:text-white transition-colors text-sm">
                  About Us
                </a>
              </li>
              <li>
                <a href="" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-base font-semibold mb-4">Stay Updated</h3>
            <p className="text-gray-300 mb-4 text-sm">
              Subscribe to our newsletter for the latest updates and tips.
            </p>
            <form className="flex flex-col space-y-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 rounded-lg bg-white/10 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 border border-white/20 text-sm"
              />
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors text-sm"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-xs">
              © 2025 Fake News Detector. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="" className="text-gray-300 hover:text-white text-xs transition-colors">
                Privacy Policy
              </a>
              <a href="" className="text-gray-300 hover:text-white text-xs transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 