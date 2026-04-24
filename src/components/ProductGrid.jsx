import React, { useState } from 'react';
import { Plus, Heart } from 'lucide-react'; // Import Plus icon

const categories = ['ALL ITEMS', 'FURNITURE', 'ACCESSORIES'];

const ProductGrid = ({ 
  products, 
  onAddToCart, 
  currency, 
  exchangeRate, 
  activeCategory, 
  setActiveCategory,
  wishlist,
  onToggleWishlist
}) => {
  return (
    <section id="shop" className="py-24 px-6 md:px-12 bg-white">
     
      <div className="flex justify-center md:justify-end gap-6 md:gap-10 mb-16 border-b border-gray-100 pb-6 overflow-x-auto no-scrollbar">
        {categories.map(cat => (
          <button 
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`text-[10px] md:text-xs font-black uppercase tracking-[0.3em] pb-2 transition-all whitespace-nowrap ${activeCategory === cat ? 'text-black border-b-2 border-black' : 'text-gray-300 hover:text-black'}`}
          >
            {cat}
          </button>
        ))}
      </div>

      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-12">
        {products.map((product) => {
          const isWishlisted = wishlist.some(item => item.id === product.id);
          
          return (
            <div key={product.id} className="group flex flex-col h-full relative">
              
           
              <div className="aspect-square w-full bg-gray-50 rounded-sm overflow-hidden mb-5 relative">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
                
               
                <button 
                  onClick={() => onToggleWishlist(product)} 
                  className="absolute top-3 right-3 p-1.5 bg-white/80 backdrop-blur-sm rounded-full z-10 transition-all shadow-sm"
                >
                  <Heart size={14} className={isWishlisted ? "fill-red-400 text-red-400" : "text-black hover:text-red-400"} />
                </button>

                
                <div className="hidden md:flex absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity flex-items-center justify-center">
                  <button 
                    onClick={() => onAddToCart(product)} 
                    className="absolute bottom-3 right-3 w-8 h-8 bg-black rounded-full flex items-center justify-center shadow-lg active:scale-90 transition-transform z-10"
                  >
                    <Plus size={18} className="text-white" />
                  </button>
                </div>
              </div>

       
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <p className="text-[9px] font-bold text-gray-400 uppercase tracking-widest mb-1.5">
                    EDITION 01 // {product.category}
                  </p>
                  <h3 className="text-[11px] md:text-xs font-black uppercase tracking-[0.2em] mb-2 leading-snug">
                    {product.name}
                  </h3>
                </div>
                
                <p className="text-xs md:text-sm font-medium mt-auto pt-1">
                  {currency === 'PHP' ? '₱' : '$'}
                  {(currency === 'PHP' ? product.price * exchangeRate : product.price).toLocaleString()}
                </p>
              </div>

             
              <button 
                onClick={() => onAddToCart(product)} 
                className="md:hidden mt-4 w-full bg-black text-white text-[9px] font-black uppercase tracking-widest py-3 hover:bg-gray-800 transition-colors"
              >
                + ADD
              </button>

            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ProductGrid;