import React, { useState } from 'react';
import {  ShoppingBag, Search, Menu, X, Heart, Tag, Sparkles } from 'lucide-react';

const Navbar = ({ 
  wishlistCount, 
  cartCount, 
  onOpenWishlist, 
  onOpenPromos, 
  onOpenWhatsNew, 
  onOpenCart, 
  setIsSearchOpen 
}) => {
  return (
    <header className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-100">
      <nav className="flex items-center justify-between px-4 py-4 max-w-7xl mx-auto w-full">
        
        {/* Logo */}
        <div className="flex-1 text-xl font-black tracking-tighter">
          ENVISION
        </div>

        {/* Wishlist, Promos, What's New */}
        
        <div className="flex gap-4 md:gap-8 items-center overflow-x-auto no-scrollbar px-4">
          <button 
            onClick={onOpenWishlist}
            className="flex items-center gap-1 md:gap-2 text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-gray-500 hover:text-black transition-all shrink-0"
          >
            <div className="relative">
              <Heart 
                size={14} 
                className={wishlistCount > 0 ? "fill-red-400 text-red-400" : "text-gray-400"} 
              />
              {wishlistCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 text-[7px] bg-black text-white w-2.5 h-2.5 rounded-full flex items-center justify-center font-bold border border-white">
                  {wishlistCount}
                </span>
              )}
            </div>
            Wishlist
          </button>

          <button 
            onClick={onOpenPromos} 
            className="flex items-center gap-1 text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-gray-500 hover:text-black shrink-0 transition-all"
          >
            <Tag size={14} className="text-blue-400" /> Promos
          </button>

          <button 
            onClick={onOpenWhatsNew} 
            className="flex items-center gap-1 text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-gray-500 hover:text-black shrink-0 transition-all"
          >
            <Sparkles size={14} className="text-amber-400" /> What's New
          </button>
        </div>

        {/* 3. RIGHT SIDE: Search & Shopping Bag */}
        <div className="flex-1 flex items-center justify-end gap-4 md:gap-6">
          <button 
            onClick={() => setIsSearchOpen(true)} 
            className="p-1 hover:scale-110 transition-transform shrink-0"
          >
            <Search size={20} />
          </button>
          
          <button 
            onClick={onOpenCart} 
            className="relative group p-1 shrink-0"
          >
            <ShoppingBag size={20} className="group-hover:scale-110 transition-transform" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-black text-white text-[8px] w-3.5 h-3.5 rounded-full flex items-center justify-center font-bold border border-white">
                {cartCount}
              </span>
            )}
          </button>
        </div>

      </nav>
    </header>
  );
};

export default Navbar;