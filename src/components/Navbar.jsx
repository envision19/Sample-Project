import React from 'react';
import { Heart, Tag, Sparkles, Search, ShoppingBag, X } from 'lucide-react';

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
    <header className="fixed top-0 left-0 w-full bg-white z-[100] border-b border-gray-100">
      <nav className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto w-full h-20">
        
        {/* LEFT SIDE: Logo & Currency Switcher */}
        <div className="flex-1 flex items-center gap-6">
          <div className="text-2xl font-black tracking-tighter uppercase">
            ENVISION
          </div>
          
          <div className="flex items-center gap-2 text-[10px] tracking-widest text-gray-400 font-medium">
            <button 
              onClick={() => setCurrency('PHP')}
              className={`transition-all ${currency === 'PHP' ? 'text-black font-black' : 'hover:text-black'}`}
            >
              PHP
            </button>
            <span className="text-gray-200">|</span>
            <button 
              onClick={() => setCurrency('USD')}
              className={`transition-all ${currency === 'USD' ? 'text-black font-black' : 'hover:text-black'}`}
            >
              USD
            </button>
          </div>
        </div>

        {/* MIDDLE: Navigation Links (Always visible unless mobile screen is too small) */}
        <div className="hidden md:flex gap-10 items-center">
          <button onClick={onOpenWishlist} className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500 hover:text-black relative">
            <Heart size={16} className={wishlistCount > 0 ? "fill-red-400 text-red-400" : ""} />
            {wishlistCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-black text-white text-[7px] w-3.5 h-3.5 rounded-full flex items-center justify-center border border-white font-black">
                {wishlistCount}
              </span>
            )}
            Wishlist
          </button>
          <button onClick={onOpenPromos} className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500 hover:text-black"><Tag size={16} /> Promos</button>
          <button onClick={onOpenWhatsNew} className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500 hover:text-black"><Sparkles size={16} /> New</button>
        </div>

        {/* RIGHT SIDE: Inline Search & Cart */}
        <div className="flex-1 flex items-center justify-end gap-4">
          <div className="flex items-center">
            {isSearchOpen && (
              <div className="flex items-center animate-in slide-in-from-right-5 duration-300 border-b border-black mr-2">
                <input 
                  autoFocus
                  type="text"
                  placeholder="SEARCH..."
                  className="bg-transparent outline-none text-[10px] font-bold tracking-widest uppercase w-32 md:w-48 pb-1"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button onClick={() => {setIsSearchOpen(false); setSearchQuery('');}} className="ml-2 pb-1">
                  <X size={14} />
                </button>
              </div>
            )}
            
            {!isSearchOpen && (
              <button onClick={() => setIsSearchOpen(true)} className="p-2">
                <Search size={22} />
              </button>
            )}
          </div>

          <button onClick={onOpenCart} className="relative p-2">
            <ShoppingBag size={22} />
            {cartCount > 0 && (
              <span className="absolute top-1 right-1 bg-black text-white text-[8px] w-4 h-4 rounded-full flex items-center justify-center font-bold border border-white">
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