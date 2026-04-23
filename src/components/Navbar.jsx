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
    <header className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md z-[100] border-b border-gray-100">
      <nav className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto w-full h-20 relative">
        
        {/* LEFT SIDE */}
        <div className="flex-1 flex items-center gap-6">
          <div className="text-2xl font-black tracking-tighter uppercase">
            ENVISION
          </div>
          
          {/* PHP | USD  */}
          <div className="flex items-center gap-2 text-[10px] tracking-widest text-gray-400 font-medium">
            <button 
              onClick={() => setCurrency('PHP')}
              className={`transition-all ${currency === 'PHP' ? 'text-black font-black scale-110' : 'hover:text-black'}`}
            >
              PHP
            </button>
            <span className="text-gray-200">|</span>
            <button 
              onClick={() => setCurrency('USD')}
              className={`transition-all ${currency === 'USD' ? 'text-black font-black scale-110' : 'hover:text-black'}`}
            >
              USD
            </button>
          </div>
        </div>

        {/*  SEARCH bar */}
        {isSearchOpen ? (
          <div className="absolute inset-x-0 inset-y-0 bg-white/95 backdrop-blur-xl z-[110] flex items-center px-6 animate-in fade-in zoom-in duration-300">
            <div className="flex items-center w-full max-w-2xl mx-auto gap-4">
              <Search size={20} className="text-black" />
              <input 
                autoFocus
                type="text"
                placeholder="SEARCH COLLECTION..."
                className="w-full bg-transparent outline-none text-xl font-light tracking-[0.2em] uppercase placeholder:text-gray-200"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            {/* X Button  */}
            <button 
              onClick={() => {setIsSearchOpen(false); setSearchQuery('');}}
              className="absolute right-8 p-2 hover:rotate-90 transition-transform duration-300"
            >
              <X size={24} strokeWidth={1.5} />
            </button>
          </div>
        ) : (
          /*  */
          <div className="hidden md:flex gap-10 items-center animate-in fade-in duration-500">
            <button onClick={onOpenWishlist} className="group flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500 hover:text-black transition-all relative">
              <div className="relative">
                <Heart size={16} className={wishlistCount > 0 ? "fill-red-400 text-red-400" : "group-hover:scale-110 transition-transform"} />
                {wishlistCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-black text-white text-[7px] min-w-[14px] h-[14px] rounded-full flex items-center justify-center border border-white font-black px-0.5">
                    {wishlistCount}
                  </span>
                )}
              </div>
              Wishlist
            </button>
            <button onClick={onOpenPromos} className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500 hover:text-black transition-all"><Tag size={16} /> Promos</button>
            <button onClick={onOpenWhatsNew} className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500 hover:text-black transition-all"><Sparkles size={16} /> New</button>
          </div>
        )}

        {/* Icons  */}
        <div className="flex-1 flex items-center justify-end gap-6">
          {!isSearchOpen && (
            <button 
              onClick={() => setIsSearchOpen(true)}
              className="p-2 hover:scale-110 transition-transform"
            >
              <Search size={22} />
            </button>
          )}
          
          <button onClick={onOpenCart} className="relative p-2 hover:scale-110 transition-transform">
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