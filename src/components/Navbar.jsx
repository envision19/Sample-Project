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
      <nav className="flex items-center justify-between px-4 md:px-6 py-4 max-w-7xl mx-auto w-full h-16 md:h-20 relative">
        
        {/* LEFT SIDE */}
        {!isSearchOpen && (
          <div className="flex items-center gap-3 md:gap-6 shrink-0">
            <div className="text-lg md:text-2xl font-black tracking-tighter uppercase">
              ENVISION
            </div>
            
            <div className="flex items-center gap-1.5 md:gap-2 text-[8px] md:text-[10px] tracking-widest text-gray-400 font-medium">
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
        )}

       
        <div className={`flex items-center justify-end transition-all duration-300 ${isSearchOpen ? 'flex-1' : 'flex-none'}`}>
          {isSearchOpen ? (
            /* SEARCH MODE: Covers middle and hides other nav items */
            <div className="flex items-center w-full max-w-md animate-in slide-in-from-right-5 duration-300 border-b border-black ml-4">
              <Search size={16} className="mr-2 shrink-0" />
              <input 
                autoFocus
                type="text"
                placeholder="SEARCH..."
                className="w-full bg-transparent outline-none text-[10px] md:text-xs font-bold tracking-widest uppercase pb-1"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button onClick={() => {setIsSearchOpen(false); setSearchQuery('');}} className="ml-2 pb-1 hover:opacity-50">
                <X size={16} />
              </button>
            </div>
          ) : (
            
            <div className="flex items-center gap-3 md:gap-8 overflow-x-auto no-scrollbar px-2">
              <button onClick={onOpenWishlist} className="flex items-center gap-1.5 text-[8px] md:text-[10px] font-bold uppercase tracking-widest text-gray-500 hover:text-black shrink-0 relative">
                <div className="relative">
                  <Heart size={14} className={wishlistCount > 0 ? "fill-red-400 text-red-400" : ""} />
                  {wishlistCount > 0 && (
                    <span className="absolute -top-1.5 -right-1.5 bg-black text-white text-[6px] w-3 h-3 rounded-full flex items-center justify-center border border-white font-black">
                      {wishlistCount}
                    </span>
                  )}
                </div>
                <span className="hidden xs:inline">Wishlist</span>
              </button>

              <button onClick={onOpenPromos} className="flex items-center gap-1.5 text-[8px] md:text-[10px] font-bold uppercase tracking-widest text-gray-500 hover:text-black shrink-0">
                <Tag size={14} />
                <span className="hidden xs:inline">Promos</span>
              </button>

              <button onClick={onOpenWhatsNew} className="flex items-center gap-1.5 text-[8px] md:text-[10px] font-bold uppercase tracking-widest text-gray-500 hover:text-black shrink-0">
                <Sparkles size={14} />
                <span className="hidden xs:inline">New</span>
              </button>
            </div>
          )}
        </div>

       
        <div className="flex items-center gap-2 md:gap-4 ml-2 md:ml-4">
          {!isSearchOpen && (
            <button onClick={() => setIsSearchOpen(true)} className="p-1.5 hover:scale-110 transition-transform">
              <Search size={20} className="md:w-[22px] md:h-[22px]" />
            </button>
          )}
          
          <button onClick={onOpenCart} className="relative p-1.5 hover:scale-110 transition-transform">
            <ShoppingBag size={20} className="md:w-[22px] md:h-[22px]" />
            {cartCount > 0 && (
              <span className="absolute top-0.5 right-0.5 bg-black text-white text-[7px] md:text-[8px] w-3.5 h-3.5 md:w-4 md:h-4 rounded-full flex items-center justify-center font-bold border border-white">
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