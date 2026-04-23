import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import CartDrawer from './components/CartDrawer';
import Footer from './components/Footer';
import { X } from 'lucide-react'; // Make sure lucide-react is installed

const products = [
  { id: 1, name: 'Lunar Chronograph', price: 420, category: 'Accessories', image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=800' },
  { id: 2, name: 'Arc Chair', price: 850, category: 'Furniture', image: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&q=80&w=800' },
  { id: 3, name: 'Telephone', price: 120, category: 'Accessories', image: 'https://images.unsplash.com/photo-1534073828943-f801091bb18c?auto=format&fit=crop&q=80&w=800' },
  { id: 4, name: 'Vortex Speaker', price: 299, category: 'Accessories', image: 'https://images.unsplash.com/photo-1543512214-318c7553f230?auto=format&fit=crop&q=80&w=800' },
];

export default function App() {
  // --- State Management ---
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [currency, setCurrency] = useState('USD');
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('ALL ITEMS');
  const [searchQuery, setSearchQuery] = useState('');
  
  const exchangeRate = 56.50;

  // --- Wishlist Logic ---
  const toggleWishlist = (product) => {
    setWishlist(prev => 
      prev.find(item => item.id === product.id)
        ? prev.filter(item => item.id !== product.id)
        : [...prev, product]
    );
  };

  const handleOpenWishlist = () => {
    if (wishlist.length === 0) {
      alert("Your wishlist is empty.");
    } else {
      const list = wishlist.map(item => `- ${item.name}`).join('\n');
      alert(`Your Wishlist:\n${list}`);
    }
  };

  // --- Nav Action Handlers ---
  const handlePromos = () => {
    alert("Active Promos: \n- MINIMAL20 (20% Off)\n- FREE_SHIP_DVO (Free Shipping to Davao)");
  };

  const handleWhatsNew = () => {
    const shopSection = document.getElementById('shop');
    if (shopSection) {
      shopSection.scrollIntoView({ behavior: 'smooth' });
      alert("Check out our Spring 2026 Collection below!");
    }
  };

  // --- Cart Handlers ---
  const addToCart = (product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => item.id === product.id 
          ? {...item, quantity: item.quantity + 1} 
          : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (productId) => {
    setCart((prev) => prev.filter((item) => item.id !== productId));
  };

  // --- Filtering & Search Logic ---
  const filteredProducts = products.filter(p => {
    const matchesCategory = activeCategory === 'ALL ITEMS' || p.category.toUpperCase() === activeCategory;
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-black selection:text-white relative">
      
      {/* 1. FIXED NAVBAR */}
      <Navbar 
        wishlistCount={wishlist.length}
        cartCount={cart.reduce((sum, item) => sum + item.quantity, 0)}
        onOpenWishlist={handleOpenWishlist}
        onOpenPromos={handlePromos}
        onOpenWhatsNew={handleWhatsNew}
        onOpenCart={() => setIsCartOpen(true)}
        setIsSearchOpen={setIsSearchOpen}
      />

      {/* SEARCH OVERLAY  */}
      {isSearchOpen && (
        <div className="fixed inset-0 bg-white/98 backdrop-blur-sm z-[100] flex flex-col animate-in fade-in duration-300">
    {/* Header of Search */}
    <div className="flex justify-between items-center px-8 py-6">
      <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-400">Search</span>
      <button onClick={() => setIsSearchOpen(false)} className="p-2 hover:opacity-50 transition-opacity">
        <X size={20} strokeWidth={1.5} />
      </button>
    </div>

    {/* Search Input Area */}
    <div className="flex-1 flex flex-col items-center justify-center px-6">
      <div className="w-full max-w-xl">
        <input 
          autoFocus
          type="text" 
          placeholder="What are you looking for?"
          className="w-full pb-4 text-xl md:text-2xl font-light tracking-tight outline-none border-b border-gray-100 placeholder:text-gray-300 text-center uppercase"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <div className="mt-6 flex justify-center gap-8">
           <p className="text-[9px] font-bold uppercase tracking-widest text-gray-300">
             Results: {filteredProducts.length}
           </p>
        </div>
      </div>
    </div>
  </div>
      )}
      
      <main>
        <Hero />

        {/* Philosophy Section */}
        <section id="philosophy" className="py-24 px-6 bg-gray-50/50">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-gray-400 mb-8">
              The Philosophy
            </p>
            <h2 className="text-2xl md:text-4xl font-light italic leading-relaxed text-gray-800">
              "We believe that a home should be a sanctuary of calm. Our collection focuses on 
              <span className="font-medium not-italic"> purposeful design</span> and 
              <span className="font-medium not-italic"> silent luxury</span>."
            </h2>
          </div>
        </section>

        {/* Product Grid Section */}
        <div id="shop" className="max-w-7xl mx-auto px-6 py-12">
          <ProductGrid 
            products={filteredProducts} 
            onAddToCart={addToCart} 
            currency={currency} 
            exchangeRate={exchangeRate} 
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
            wishlist={wishlist}
            onToggleWishlist={toggleWishlist}
          />
        </div>
      </main>

      <Footer />

      <CartDrawer 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
        cart={cart}
        currency={currency}
        exchangeRate={exchangeRate}
        onRemove={removeFromCart}
      />
    </div>
  );
}