import React from 'react';
import { Link } from 'react-router-dom';
import { FaNewspaper } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-br from-blue-900 via-purple-600 to-blue-400 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold"></span>
          </Link>

          <div className="flex items-center space-x-4">
            <Link
              to="/"
              className="px-4 py-2 rounded-lg text-sm font-medium bg-white/10 hover:bg-white/20 
                       transition duration-200 border border-white/10"
            >
              Home
            </Link>
            <Link
              to="/article-checker"
              className="px-4 py-2 rounded-lg text-sm font-medium bg-white/20 hover:bg-white/30 
                       transition duration-200 text-white font-semibold"
            >
              Check Articles
            </Link>
            <Link
              to="/fake-articles"
              className="px-4 py-2 rounded-lg text-sm font-medium bg-white/20 hover:bg-white/30 
                       transition duration-200 text-white font-semibold"
            >
              Fake Articles
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 