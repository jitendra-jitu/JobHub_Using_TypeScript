import { create } from 'zustand';
import { Song } from '../types/song';

interface CartStore {
  items: Song[];
  addToCart: (song: Song) => void;
  removeFromCart: (songId: string) => void;
  total: number;
}

export const useCartStore = create<CartStore>((set) => ({
  items: [],
  total: 0,
  addToCart: (song) =>
    set((state) => ({
      items: [...state.items, song],
      total: state.total + song.price,
    })),
  removeFromCart: (songId) =>
    set((state) => ({
      items: state.items.filter((item) => item.id !== songId),
      total: state.total - state.items.find((item) => item.id === songId)!.price,
    })),
}));