import React from 'react';
import { Heart, Tag, Sparkles, Search, ShoppingBag, X, Globe } from 'lucide-react';

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
        
        {/* LOGO - Hides when searching to make room */}
        {!isSearchOpen && (
          <div className="flex-1 text-xl font-black tracking-tighter animate-in fade-in duration-300">
            ENVISION
          </div>
        )}

        {/* MIDDLE SECTION: Swaps between Links and Search Input */}
        <div className={`flex items-center transition-all duration-300 ${isSearchOpen ? 'flex-1' : 'flex-none'}`}>
          {isSearchOpen ? (
            <div className="flex items-center w-full gap-4 animate-in slide-in-from-right-4 duration-300 border-b border-black pb-1">
              <Search size={16} className="text-black" />
              <input 
                autoFocus
                type="text"
                placeholder="SEARCH COLLECTION..."
                className="w-full bg-transparent outline-none text-xs font-bold tracking-widest uppercase placeholder:text-gray-300"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button onClick={() => {setIsSearchOpen(false); setSearchQuery('');}} className="p-1 hover:rotate-90 transition-transform">
                <X size={16} />
              </button>
            </div>
          ) : (
            <div className="flex gap-4 md:gap-8 items-center overflow-x-auto no-scrollbar px-4 animate-in fade-in duration-300">
              <button onClick={onOpenWishlist} className="flex items-center gap-1 md:gap-2 text-[9px] font-bold uppercase tracking-widest text-gray-500 hover:text-black shrink-0 relative">
                <div className="relative">
                  <Heart size={14} className={wishlistCount > 0 ? "fill-red-400 text-red-400" : ""} />
                  {wishlistCount > 0 && (
                    <span className="absolute -top-2 -right-2 bg-black text-white text-[7px] w-3.5 h-3.5 rounded-full flex items-center justify-center border border-white font-black">
                      {wishlistCount}
                    </span>
                  )}
                </div>
                Wishlist
              </button>
              <button onClick={onOpenPromos} className="flex items-center gap-1 text-[9px] font-bold uppercase tracking-widest text-gray-500 shrink-0"><Tag size={14} /> Promos</button>
              <button onClick={onOpenWhatsNew} className="flex items-center gap-1 text-[9px] font-bold uppercase tracking-widest text-gray-500 shrink-0"><Sparkles size={14} /> New</button>
            </div>
          )}
        </div>

        {/* RIGHT SIDE: Currency, Search, and Cart */}
        <div className="flex-1 flex items-center justify-end gap-3 md:gap-6">
          {!isSearchOpen && (
            <>
              {/* CURRENCY CHANGER (USD/PHP Toggle) */}
              <button 
                onClick={() => setCurrency(currency === 'USD' ? 'PHP' : 'USD')}
                className="flex items-center gap-1 text-[10px] font-black text-gray-400 hover:text-black transition-colors border border-gray-200 px-2 py-1 rounded"
              >
                <Globe size={12} />
                {currency}
              </button>

              <button onClick={() => setIsSearchOpen(true)} className="p-1 hover:scale-110 transition-transform"><Search size={20} /></button>
            </>
          )}
          
          <button onClick={onOpenCart} className="relative p-1 hover:scale-110 transition-transform">
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