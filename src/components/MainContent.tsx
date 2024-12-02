import React from 'react';
import { Play, Heart, ShoppingCart } from 'lucide-react';
import { useCartStore } from '../store/useCartStore';
import { Song } from '../types/song';

const MainContent = () => {
  const addToCart = useCartStore((state) => state.addToCart);

  const songs: Song[] = [
    {
      id: '1',
      title: "Today's Top Hits",
      artist: "Jung Kook",
      price: 1.99,
      image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300&h=300&fit=crop"
    },
    {
      id: '2',
      title: "RapCaviar",
      artist: "Drake",
      price: 2.99,
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop"
    },
    {
      id: '3',
      title: "All Out 2010s",
      artist: "Various Artists",
      price: 1.49,
      image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=300&h=300&fit=crop"
    },
    {
      id: '4',
      title: "Rock Classics",
      artist: "Rock Legends",
      price: 2.49,
      image: "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?w=300&h=300&fit=crop"
    }
  ];

  return (
    <div className="flex-1 bg-gradient-to-b from-indigo-900 to-zinc-900 overflow-y-auto">
      <div className="p-8">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-white">Good afternoon</h1>
        </div>

        <div className="grid grid-cols-3 gap-4 mt-6">
          {songs.slice(0, 6).map((song) => (
            <div 
              key={song.id} 
              className="group relative flex items-center gap-4 bg-white/5 rounded overflow-hidden hover:bg-white/10 transition-colors cursor-pointer"
            >
              <img 
                src={song.image}
                alt={song.title}
                className="h-20 w-20"
              />
              <div className="flex-1">
                <strong className="text-white block">{song.title}</strong>
                <span className="text-sm text-gray-400">{song.artist}</span>
                <span className="text-green-500 text-sm block">${song.price.toFixed(2)}</span>
              </div>
              <div className="absolute right-4 flex gap-2">
                <button 
                  onClick={() => addToCart(song)}
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-green-500 text-black shadow-lg opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <ShoppingCart className="h-5 w-5" />
                </button>
                <button className="w-10 h-10 flex items-center justify-center rounded-full bg-green-500 text-black shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
                  <Play className="h-5 w-5 pl-1" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold text-white mt-10">Featured Songs</h2>
        <div className="grid grid-cols-4 gap-4 mt-4">
          {songs.map((song) => (
            <div key={song.id} className="bg-zinc-800 p-4 rounded-lg hover:bg-zinc-700 transition-colors group">
              <div className="relative">
                <img 
                  src={song.image}
                  className="w-full rounded-md"
                  alt={song.title}
                />
                <div className="absolute right-2 bottom-2 flex gap-2">
                  <button 
                    onClick={() => addToCart(song)}
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-green-500 text-black shadow-lg opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <ShoppingCart className="h-5 w-5" />
                  </button>
                  <button className="w-10 h-10 flex items-center justify-center rounded-full bg-green-500 text-black shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
                    <Play className="h-5 w-5 pl-1" />
                  </button>
                </div>
              </div>
              <strong className="text-white block mt-4">{song.title}</strong>
              <span className="text-sm text-zinc-400 block">{song.artist}</span>
              <span className="text-green-500 text-sm font-medium block mt-1">
                ${song.price.toFixed(2)}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainContent;