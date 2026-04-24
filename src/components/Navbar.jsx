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
    <header className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md z-[100] border-b border-gray-100">
      <nav className="flex items-center justify-between px-4 md:px-8 py-4 max-w-7xl mx-auto w-full h-16 md:h-20 gap-2 md:gap-4">
        
        {/* LEFT: Logo & Currency */}
        <div className="flex items-center gap-3 md:gap-6 shrink-0">
          <div className="text-xl md:text-2xl font-black tracking-tighter uppercase">
            ENVISION
          </div>
          
          {/* Hides currency on mobile ONLY when search is open */}
          <div className={`flex items-center gap-1.5 md:gap-2 text-[9px] md:text-[11px] tracking-widest font-bold ${isSearchOpen ? 'hidden sm:flex' : 'flex'}`}>
            <button 
              onClick={() => setCurrency('PHP')}
              className={`transition-all ${currency === 'PHP' ? 'text-black border-b-2 border-black' : 'text-gray-300 hover:text-black'}`}
            >
              PHP
            </button>
            <span className="text-gray-200">|</span>
            <button 
              onClick={() => setCurrency('USD')}
              className={`transition-all ${currency === 'USD' ? 'text-black border-b-2 border-black' : 'text-gray-300 hover:text-black'}`}
            >
              USD
            </button>
          </div>
        </div>

        {/* CENTER */}
        <div className="flex-1 flex justify-center items-center px-2 min-w-0">
          {isSearchOpen ? (
            <div className="flex items-center w-full max-w-md animate-in fade-in slide-in-from-top-1 duration-300 border-b border-black pb-1">
              <Search size={16} className="mr-2 text-gray-400 shrink-0" />
              <input 
                autoFocus
                type="text"
                placeholder="SEARCH..."
                className="w-full bg-transparent outline-none text-[10px] md:text-xs font-bold tracking-widest uppercase"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button onClick={() => {setIsSearchOpen(false); setSearchQuery('');}} className="ml-2 hover:rotate-90 transition-transform">
                <X size={16} />
              </button>
            </div>
          ) : (
        
            /* Links visible on mobile, hiding only during search */

            <div className="flex gap-2 sm:gap-6 items-center animate-in fade-in duration-500 overflow-hidden">
              <button onClick={onOpenPromos} className="group relative flex items-center gap-1 px-2 py-1 bg-gray-50 rounded-full hover:bg-black hover:text-white transition-all shrink-0">
                <Tag size={10} className="md:w-[12px] text-black group-hover:text-white" />
                <span className="text-[7px] md:text-[9px] font-black uppercase tracking-widest">Promos</span>
                <span className="absolute -top-0.5 -right-0.5 flex h-1.5 w-1.5 md:h-2 md:w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 md:h-2 md:w-2 bg-red-500"></span>
                </span>
              </button>

              <button onClick={onOpenWhatsNew} className="group relative flex items-center gap-1 px-2 py-1 bg-gray-50 rounded-full hover:bg-black hover:text-white transition-all shrink-0">
                <Sparkles size={10} className="md:w-[12px] text-black group-hover:text-white" />
                <span className="text-[7px] md:text-[9px] font-black uppercase tracking-widest">New</span>
                <span className="absolute -top-0.5 -right-0.5 flex h-1.5 w-1.5 md:h-2 md:w-2">
                   <span className="animate-pulse relative inline-flex rounded-full h-1.5 w-1.5 md:h-2 md:w-2 bg-blue-500"></span>
                </span>
              </button>
            </div>
          )}
        </div>
            

        {/* RIGHT: Actions */}
        <div className="flex items-center gap-2 md:gap-5 shrink-0 z-10">
          {!isSearchOpen && (
            <button onClick={() => setIsSearchOpen(true)} className="p-1 hover:scale-110 transition-transform">
              <Search size={20} md:size={22} strokeWidth={2.5} />
            </button>
          )}

          {/* Wishlist */}
          <button onClick={onOpenWishlist} className="relative p-1 group">
            <Heart 
              size={20} md:size={22}
              strokeWidth={2.5}
              className={wishlistCount > 0 ? "fill-red-500 text-red-500" : "text-black group-hover:text-red-500 transition-colors"} 
            />
            {wishlistCount > 0 && (
              <span className="absolute -top-1 -right-2 bg-black text-white text-[8px] font-black w-3.5 h-3.5 rounded-full flex items-center justify-center border-2 border-white shadow-sm">
                {wishlistCount}
              </span>
            )}
          </button>
          
          {/* Shopping Bag */}
          <button onClick={onOpenCart} className="relative p-1 group">
            <ShoppingBag size={20} md:size={22} strokeWidth={2.5} className="group-hover:text-gray-600 transition-colors" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-2 bg-black text-white text-[8px] font-black w-3.5 h-3.5 rounded-full flex items-center justify-center border-2 border-white shadow-sm">
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