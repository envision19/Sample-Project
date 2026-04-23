import React, { useState } from 'react';
import {  ShoppingBag, Search, Menu, X, Heart, Tag, Sparkles } from 'lucide-react';

const Navbar = ({ 
  wishlistCount, 
  cartCount, 
  onOpenWishlist, 
  onOpenPromos, 
  onOpenWhatsNew, 
  onOpenCart, 
  isSearchOpen, 
  setIsSearchOpen,
  currency,
  setCurrency,
  searchQuery,
  setSearchQuery
}) => {
  return (
    
      <header className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md z-[100] border-b border-gray-100">
      <nav className="flex items-center justify-between px-4 py-4 max-w-7xl mx-auto w-full h-16">
        
        {/* LOGO - Hides when searching */}
        {!isSearchOpen && (
          <div className="flex-1 text-xl font-black tracking-tighter animate-in fade-in duration-300">
            ENVISION
          </div>
        )}

        {/* MIDDLE SECTION */}
        <div className={`flex items-center transition-all duration-300 ${isSearchOpen ? 'flex-1' : 'flex-none'}`}>
          {isSearchOpen ? (
            /* SEARCH LINE MODE */
            <div className="flex items-center w-full gap-4 animate-in slide-in-from-right-4 duration-300">
              <Search size={18} className="text-gray-400" />
              <input 
                autoFocus
                type="text"
                placeholder="SEARCH COLLECTION..."
                className="w-full bg-transparent outline-none text-sm font-bold tracking-widest uppercase"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button onClick={() => setIsSearchOpen(false)} className="p-1 hover:rotate-90 transition-transform">
                <X size={18} />
              </button>
            </div>
          ) : (
            /* NORMAL LINKS MODE */
            <div className="flex gap-4 md:gap-8 items-center overflow-x-auto no-scrollbar px-4 animate-in fade-in duration-300">
              <button onClick={onOpenWishlist} className="flex items-center gap-1 md:gap-2 text-[9px] font-bold uppercase tracking-widest text-gray-500 hover:text-black shrink-0 relative">
                <Heart size={14} className={wishlistCount > 0 ? "fill-red-400 text-red-400" : ""} />
                {wishlistCount > 0 && (
                  <span className="absolute -top-2 -right-1 bg-black text-white text-[7px] w-3 h-3 rounded-full flex items-center justify-center border border-white">
                    {wishlistCount}
                  </span>
                )}
                Wishlist
              </button>
              <button onClick={onOpenPromos} className="flex items-center gap-1 text-[9px] font-bold uppercase tracking-widest text-gray-500 shrink-0"><Tag size={14} /> Promos</button>
              <button onClick={onOpenWhatsNew} className="flex items-center gap-1 text-[9px] font-bold uppercase tracking-widest text-gray-500 shrink-0"><Sparkles size={14} /> New</button>
            </div>
          )}
        </div>

        {/* RIGHT SIDE: Currency, Search Toggle, Cart */}
        <div className="flex-1 flex items-center justify-end gap-3 md:gap-6">
          {!isSearchOpen && (
            <>
              {/* CURRENCY CHANGER */}
              <button 
                onClick={() => setCurrency(currency === 'USD' ? 'PHP' : 'USD')}
                className="hidden md:flex items-center gap-1 text-[10px] font-bold text-gray-400 hover:text-black transition-colors"
              >
                <Globe size={14} />
                {currency}
              </button>

              <button onClick={() => setIsSearchOpen(true)} className="p-1"><Search size={20} /></button>
            </>
          )}
          
          <button onClick={onOpenCart} className="relative p-1">
            <ShoppingBag size={20} />
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