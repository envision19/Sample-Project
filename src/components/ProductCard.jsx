import React from 'react';
import { Plus } from 'lucide-react';

export default function ProductCard({ product, onAddToCart, currency, exchangeRate }) {
  // 1. Logic for dynamic currency display
  const displayPrice = currency === 'USD' 
    ? `$${product.price}` 
    : `₱${(product.price * exchangeRate).toLocaleString()}`;

  // 2. Fallback for the missing Solis Lamp image
  const imageUrl = product.image || 'https://images.unsplash.com/photo-1507473885765-e6ed457f7d1f?auto=format&fit=crop&q=80&w=800';

  return (
    <div className="group relative bg-white border border-gray-100 overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-1">
      {/* Image Container with 4:5 Aspect Ratio */}
      <div className="aspect-[4/5] overflow-hidden bg-gray-50">
        <img 
          src={imageUrl} 
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>
      
      {/* Content Area */}
      <div className="p-6 flex justify-between items-end">
        <div>
          <p className="text-[10px] uppercase tracking-[0.2em] text-gray-400 mb-1 font-bold">
            Edition 01
          </p>
          <h3 className="font-medium text-lg tracking-tight uppercase">{product.name}</h3>
          <p className="text-gray-500 font-light">{displayPrice}</p>
        </div>
        
        {/* Add to Cart Button */}
        <button 
          onClick={() => onAddToCart(product)}
          className="bg-black text-white p-3 rounded-full hover:bg-neutral-800 transition-all active:scale-95 shadow-lg transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 duration-300"
        >
          <Plus className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}