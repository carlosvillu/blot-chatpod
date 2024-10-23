import React from 'react';
import { Link } from 'react-router-dom';
import { Mic2, User } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Mic2 className="h-8 w-8 text-purple-600" />
              <span className="text-xl font-bold text-gray-900">PodcastAI</span>
            </Link>
          </div>
          
          <div className="flex items-center space-x-4">
            <Link to="/podcasts" className="text-gray-700 hover:text-purple-600 px-3 py-2 rounded-md">
              Podcasts
            </Link>
            <Link to="/login" className="text-gray-700 hover:text-purple-600 px-3 py-2 rounded-md flex items-center">
              <User className="h-5 w-5 mr-1" />
              Login
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;