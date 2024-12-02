import React from 'react';
import { ShoppingCart, X } from 'lucide-react';
import { useCartStore } from '../store/useCartStore';

const Cart = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const { items, total, removeFromCart } = useCartStore();

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 bg-white/10 p-2 rounded-full hover:bg-white/20"
      >
        <ShoppingCart className="h-5 w-5" />
        {items.length > 0 && (
          <span className="bg-green-500 text-black text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
            {items.length}
          </span>
        )}
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-80 bg-zinc-800 rounded-lg shadow-lg p-4 z-50">
          <h3 className="text-lg font-bold mb-4">Shopping Cart</h3>
          {items.length === 0 ? (
            <p className="text-gray-400">Your cart is empty</p>
          ) : (
            <>
              <div className="space-y-3 max-h-96 overflow-y-auto">
                {items.map((item) => (
                  <div key={item.id} className="flex items-center gap-3 bg-zinc-700/50 p-2 rounded">
                    <img src={item.image} alt={item.title} className="w-12 h-12 rounded" />
                    <div className="flex-1">
                      <h4 className="text-sm font-medium">{item.title}</h4>
                      <p className="text-xs text-gray-400">{item.artist}</p>
                      <p className="text-sm text-green-500">${item.price.toFixed(2)}</p>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-gray-400 hover:text-white"
                    >
                      <X className="h-5 w-5" />
                    </button>
                  </div>
                ))}
              </div>
              <div className="mt-4 pt-4 border-t border-zinc-700">
                <div className="flex justify-between items-center mb-4">
                  <span className="font-medium">Total:</span>
                  <span className="text-green-500 font-bold">${total.toFixed(2)}</span>
                </div>
                <button className="w-full bg-green-500 text-black font-bold py-2 rounded-full hover:bg-green-400">
                  Checkout
                </button>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default Cart;