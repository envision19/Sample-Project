import React, { useState } from 'react';
import { ShoppingBag, Search, Menu, X, Heart, Tag, Sparkles } from 'lucide-react';

export default function Navbar({ 
  currency, 
  setCurrency, 
  cartCount, 
  wishlistCount, 
  onOpenCart, 
  onOpenWishlist, 
  onOpenPromos, 
  onOpenWhatsNew 
}) {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      {/* Search Overlay: This covers the entire navbar when active to prevent overlapping text */}
      {isSearchOpen && (
        <div className="absolute inset-0 bg-white z-[60] flex items-center px-6 animate-in fade-in duration-200">
          <div className="flex items-center w-full max-w-7xl mx-auto">
            <Search size={20} className="text-gray-400" />
            <input 
              type="text" 
              placeholder="SEARCH OUR COLLECTION..." 
              autoFocus
              className="flex-1 ml-4 bg-transparent border-none text-sm tracking-widest focus:outline-none uppercase"
            />
            <button onClick={() => setIsSearchOpen(false)} className="p-2">
              <X size={20} />
            </button>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        
        {/*Logo & Currency */}
        <div className="flex items-center gap-4 md:gap-8">
          <h1 
            className="text-lg md:text-xl font-bold tracking-tighter uppercase cursor-pointer whitespace-nowrap"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            ENVISION SHOP SAMPLE.
          </h1>

          {/* Currency Switcher */}
          <div className="flex items-center gap-2 text-[9px] font-bold tracking-widest border-l pl-4 md:pl-8 border-gray-200">
            <button 
              onClick={() => setCurrency('USD')}
              className={currency === 'USD' ? 'text-black' : 'text-gray-300'}
            >
              USD
            </button>
            <span className="text-gray-200">/</span>
            <button 
              onClick={() => setCurrency('PHP')}
              className={currency === 'PHP' ? 'text-black' : 'text-gray-300'}
            >
              PHP
            </button>
          </div>
        </div>

        {/* Center: Desktop Navigation */}
        <div className="hidden lg:flex gap-10 items-center">
          <button 
            onClick={onOpenWishlist}
            className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-gray-500 hover:text-black transition-all"
          >
            <div className="relative">
              <Heart 
                size={16} 
                className={wishlistCount > 0 ? "fill-red-400 text-red-400" : "text-gray-400"} 
              />
              {wishlistCount > 0 && (
                <span className="absolute -top-2 -right-2 text-[8px] bg-black text-white w-3 h-3 rounded-full flex items-center justify-center font-bold">
                  {wishlistCount}
                </span>
              )}
            </div>
            Wishlist
          </button>

          <button onClick={onOpenPromos} className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-gray-500 hover:text-black transition-all">
            <Tag size={16} className="text-blue-400" /> Promos
          </button>

          <button onClick={onOpenWhatsNew} className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-gray-500 hover:text-black transition-all">
            <Sparkles size={16} className="text-amber-400" /> What's New
          </button>
        </div>

        {/* Right Side: Icons */}
        <div className="flex items-center gap-4 md:gap-6">
          <button onClick={() => setIsSearchOpen(true)} className="p-1">
            <Search size={20} />
          </button>
          
          <button onClick={onOpenCart} className="relative group p-1">
            <ShoppingBag size={20} className="group-hover:scale-110 transition-transform" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-black text-white text-[8px] w-3.5 h-3.5 rounded-full flex items-center justify-center font-bold">
                {cartCount}
              </span>
            )}
          </button>
          
          {/* Hamburger menu for small screens */}
          <button className="lg:hidden p-1">
             <Menu size={20} />
          </button>
        </div>
      </div>
    </nav>
  );
}