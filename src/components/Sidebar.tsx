import React from 'react';
import { Home, Search, Library, Plus, Heart } from 'lucide-react';
import Cart from './Cart';

const Sidebar = () => {
  return (
    <div className="w-64 bg-black h-full flex flex-col">
      <div className="p-6">
        <div className="flex items-center justify-between mb-8">
          <div className="text-2xl font-bold text-white">Spotify</div>
          <Cart />
        </div>
        
        <nav className="space-y-4">
          <a href="#" className="flex items-center text-gray-300 hover:text-white">
            <Home className="h-6 w-6 mr-4" />
            Home
          </a>
          <a href="#" className="flex items-center text-gray-300 hover:text-white">
            <Search className="h-6 w-6 mr-4" />
            Search
          </a>
          <a href="#" className="flex items-center text-gray-300 hover:text-white">
            <Library className="h-6 w-6 mr-4" />
            Your Library
          </a>
        </nav>

        <div className="mt-8 space-y-4">
          <button className="flex items-center text-gray-300 hover:text-white">
            <Plus className="h-6 w-6 mr-4 p-1 bg-gray-300 text-black rounded-sm" />
            Create Playlist
          </button>
          <button className="flex items-center text-gray-300 hover:text-white">
            <Heart className="h-6 w-6 mr-4 p-1 bg-gradient-to-br from-indigo-500 to-pink-500 text-white rounded-sm" />
            Liked Songs
          </button>
        </div>
      </div>

      <div className="mt-4 px-6">
        <div className="border-t border-gray-800 pt-4">
          <div className="text-xs text-gray-400 hover:text-white cursor-pointer">Your Playlist #1</div>
          <div className="text-xs text-gray-400 hover:text-white cursor-pointer mt-2">Chill Vibes</div>
          <div className="text-xs text-gray-400 hover:text-white cursor-pointer mt-2">Workout Mix</div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;