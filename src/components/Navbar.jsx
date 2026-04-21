import React, { useState } from 'react';
import { ShoppingBag, Search, Menu, X, Heart, Tag, Sparkles } from 'lucide-react';

// FIXED: Added wishlistCount to the props list
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
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* Left Side: Logo & Currency Switcher */}
        <div className="flex items-center gap-8">
          <h1 
            className="text-xl font-bold tracking-tighter uppercase cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            ENVISION SHOP SAMPLE.
          </h1>

          {/* Added Currency back in so users can actually switch to PHP */}
          <div className="hidden lg:flex items-center gap-3 text-[9px] font-bold tracking-widest border-l pl-8 border-gray-200">
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

        {/* Center: Navigation Actions */}
        <div className="hidden md:flex gap-10 items-center">
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

          <button 
            onClick={onOpenPromos}
            className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-gray-500 hover:text-black transition-all"
          >
            <Tag size={16} className="text-blue-400" /> Promos
          </button>

          <button 
            onClick={onOpenWhatsNew}
            className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-gray-500 hover:text-black transition-all"
          >
            <Sparkles size={16} className="text-amber-400" /> What's New
          </button>
        </div>

        {/* Right Side: Search & Cart */}
        <div className="flex items-center gap-6">
          <div className="relative flex items-center">
            {isSearchOpen && (
              <input 
                type="text" 
                placeholder="SEARCH..." 
                autoFocus
                className="absolute right-10 bg-transparent border-b border-black text-[10px] w-32 focus:outline-none animate-in fade-in slide-in-from-right-2"
              />
            )}
            <button onClick={() => setIsSearchOpen(!isSearchOpen)}>
              {isSearchOpen ? <X size={20} /> : <Search size={20} />}
            </button>
          </div>
          
          <button onClick={onOpenCart} className="relative group">
            <ShoppingBag size={20} className="group-hover:scale-110 transition-transform" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-black text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                {cartCount}
              </span>
            )}
          </button>
          
          <Menu size={20} className="md:hidden cursor-pointer" />
        </div>
      </div>
    </nav>
  );
}