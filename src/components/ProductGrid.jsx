import React from 'react';
import { Heart } from 'lucide-react'; // FIXED: Added Heart import

export default function ProductGrid({ 
    products = [], 
    onAddToCart, 
    currency, 
    exchangeRate, 
    activeCategory, 
    setActiveCategory, 
    wishlist = [], 
    onToggleWishlist
}) {
  const categories = ['ALL ITEMS', 'FURNITURE', 'ACCESSORIES'];

  return (
    <section id="shop" className="py-24">
      {/* Header Section & Category Tabs */}
      <div className="flex flex-col md:flex-row justify-between items-baseline mb-16 gap-6 border-b border-gray-100 pb-8">
        <div>
          <h2 className="text-3xl font-bold tracking-tighter uppercase italic">
            Featured Products
          </h2>
          <p className="text-gray-400 text-sm mt-2 font-light uppercase tracking-widest">
            Selection 01 — Spring 2026
          </p>
        </div>
        
        {/* Category Navigation */}
        <div className="flex gap-8 items-center">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`text-[10px] font-bold uppercase tracking-[0.3em] transition-all pb-1 ${
                activeCategory === cat 
                  ? 'text-black border-b-2 border-black' 
                  : 'text-gray-300 hover:text-black'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
        {products.map((product) => {
          // Check if this specific product is in the wishlist array
          const isWishlisted = wishlist.some(item => item.id === product.id);
          
          // Price Calculation based on Currency
          const displayPrice = currency === 'PHP' 
            ? (product.price * exchangeRate).toLocaleString() 
            : product.price.toLocaleString();

          return (
            <div key={product.id} className="group flex flex-col">
              {/* Image Container */}
              <div className="aspect-[4/5] bg-gray-100 overflow-hidden relative mb-6">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
                
                {/* Heart Button */}
                <button 
                  onClick={() => onToggleWishlist(product)}
                  className="absolute top-4 right-4 p-2 bg-white/80 backdrop-blur-sm rounded-full transition-all hover:bg-white active:scale-90"
                >
                  <Heart 
                    size={18} 
                    className={isWishlisted ? "fill-red-500 text-red-500" : "text-gray-400 hover:text-gray-600"} 
                  />
                </button>

                {/* Quick Add Overlay */}
                <button 
                  onClick={() => onAddToCart(product)}
                  className="absolute bottom-0 w-full py-4 bg-black text-white text-[10px] font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  Add to Bag
                </button>
              </div>

              {/* Product Info */}
              <div className="flex flex-col gap-1">
                <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">
                  Edition 01 / {product.category}
                </p>
                <h3 className="font-bold text-sm uppercase tracking-tighter">
                  {product.name}
                </h3>
                <p className="text-gray-500 text-sm">
                  {currency === 'PHP' ? '₱' : '$'}{displayPrice}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}