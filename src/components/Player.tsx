import React from 'react';
import { Play, SkipBack, SkipForward, Repeat, Shuffle, Volume2 } from 'lucide-react';

const Player = () => {
  return (
    <div className="h-20 bg-zinc-900 border-t border-zinc-800 px-4 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <img 
          src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=50&h=50&fit=crop" 
          alt="Album cover" 
          className="w-12 h-12 rounded"
        />
        <div>
          <h4 className="text-sm text-white">Song Title</h4>
          <span className="text-xs text-gray-400">Artist Name</span>
        </div>
      </div>

      <div className="flex flex-col items-center gap-2">
        <div className="flex items-center gap-6">
          <button className="text-gray-400 hover:text-white">
            <Shuffle className="h-4 w-4" />
          </button>
          <button className="text-gray-400 hover:text-white">
            <SkipBack className="h-5 w-5" />
          </button>
          <button className="w-8 h-8 flex items-center justify-center pl-1 rounded-full bg-white text-black hover:scale-105 transition">
            <Play className="h-5 w-5" />
          </button>
          <button className="text-gray-400 hover:text-white">
            <SkipForward className="h-5 w-5" />
          </button>
          <button className="text-gray-400 hover:text-white">
            <Repeat className="h-4 w-4" />
          </button>
        </div>
        
        <div className="flex items-center gap-2">
          <span className="text-xs text-gray-400">1:45</span>
          <div className="h-1 rounded-full w-96 bg-zinc-600">
            <div className="bg-white w-40 h-1 rounded-full"></div>
          </div>
          <span className="text-xs text-gray-400">3:45</span>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <Volume2 className="h-5 w-5 text-gray-400" />
        <div className="h-1 rounded-full w-24 bg-zinc-600">
          <div className="bg-white w-20 h-1 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default Player;