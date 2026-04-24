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
      <nav className="flex items-center justify-between px-4 md:px-8 py-4 max-w-7xl mx-auto w-full h-16 md:h-20 gap-4">
        
        {/* LEFT SECTION: Logo & Currency (ALWAYS VISIBLE) */}
        <div className="flex items-center gap-3 md:gap-6 shrink-0 z-10">
          <div className="text-lg md:text-2xl font-black tracking-tighter uppercase">
            ENVISION
          </div>
          
          <div className="flex items-center gap-1.5 md:gap-2 text-[9px] md:text-[11px] tracking-widest font-bold">
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

        {/* CENTER SECTION: Search Bar OR Links */}
        <div className="flex-1 flex justify-center items-center min-w-0">
          {isSearchOpen ? (
            /* Search Input - Only hides the center links */
            <div className="flex items-center w-full max-w-md animate-in fade-in slide-in-from-top-1 duration-300 border-b border-black pb-1 mx-2">
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
            /* Navigation Links - Hidden ONLY when search is active */
            <div className="hidden lg:flex gap-10 items-center animate-in fade-in duration-500">
              <button onClick={onOpenPromos} className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 hover:text-black transition-all shrink-0">
                <Tag size={15} /> Promos
              </button>
              <button onClick={onOpenWhatsNew} className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 hover:text-black transition-all shrink-0">
                <Sparkles size={15} /> New
              </button>
            </div>
          )}
        </div>

        {/* RIGHT SECTION: Search Toggle, Wishlist, & Bag */}
        <div className="flex items-center gap-3 md:gap-5 shrink-0 z-10">
          {!isSearchOpen && (
            <button onClick={() => setIsSearchOpen(true)} className="p-1 hover:scale-110 transition-transform">
              <Search size={22} strokeWidth={2} />
            </button>
          )}

          {/* Wishlist Icon with Fixed Badge Visibility */}
          <button onClick={onOpenWishlist} className="relative p-1 group shrink-0">
            <Heart 
              size={22} 
              strokeWidth={2}
              className={wishlistCount > 0 ? "fill-red-500 text-red-500" : "text-black group-hover:text-red-500 transition-colors"} 
            />
            {wishlistCount > 0 && (
              <span className="absolute -top-1 -right-2 bg-black text-white text-[9px] font-black w-4 h-4 rounded-full flex items-center justify-center border-2 border-white shadow-sm z-20">
                {wishlistCount}
              </span>
            )}
          </button>
          
          {/* Shopping Bag */}
          <button onClick={onOpenCart} className="relative p-1 shrink-0">
            <ShoppingBag size={22} strokeWidth={2} />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-2 bg-black text-white text-[9px] font-black w-4 h-4 rounded-full flex items-center justify-center border-2 border-white shadow-sm z-20">
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