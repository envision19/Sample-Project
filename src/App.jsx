import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import CartDrawer from './components/CartDrawer';
import Footer from './components/Footer';

const products = [
  { id: 1, name: 'Lunar Chronograph', price: 420, category: 'Accessories', image: 'https://images.pexels.com/photos/13007642/pexels-photo-13007642.jpeg' },
  { id: 2, name: 'Arc Chair', price: 850, category: 'Furniture', image: 'https://images.pexels.com/photos/12269762/pexels-photo-12269762.jpeg' },
  { id: 3, name: 'Heritage Phone', price: 120, category: 'Accessories', image: 'https://images.pexels.com/photos/13734676/pexels-photo-13734676.jpeg' },
  { id: 4, name: 'Vortex Speaker', price: 299, category: 'Accessories', image: 'https://images.pexels.com/photos/14309812/pexels-photo-14309812.jpeg' },
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
    }
  };

  // --- Cart Handlers ---
  const addToCart = (product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => item.id === product.id 
          ? { ...item, quantity: item.quantity + 1 } 
          : item
        );
      }
      
      return [...prev, { ...product, quantity: 1 }];
    });
  }; 

  const removeFromCart = (productId) => {
    setCart(prev => prev.filter(item => item.id !== productId));
  };

  // --- Filtering & Search Logic ---
  const filteredProducts = products.filter(p => {
    const matchesCategory = activeCategory === 'ALL ITEMS' || p.category.toUpperCase() === activeCategory;
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-white text-black font-sans relative">
      <Navbar 
        wishlistCount={wishlist.length}
        cartCount={cart.reduce((sum, item) => sum + item.quantity, 0)}
        onOpenWishlist={handleOpenWishlist}
        onOpenPromos={handlePromos}
        onOpenWhatsNew={handleWhatsNew}
        onOpenCart={() => setIsCartOpen(true)}
        isSearchOpen={isSearchOpen}
        setIsSearchOpen={setIsSearchOpen}
        currency={currency}
        setCurrency={setCurrency}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      <main className="pt-20"> 
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

              <section className="pt-20 pb-10 px-6">
        <div className="max-w-7xl mx-auto border-b border-gray-100 pb-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-400 mb-3">
                Curated Selection
              </p>
              <h2 className="text-3xl md:text-5xl font-black tracking-tighter uppercase">
                Featured <span className="text-gray-300">Objects</span>
              </h2>
            </div>
            <p className="text-[10px] md:text-xs font-bold text-gray-400 uppercase tracking-widest max-w-[200px] leading-relaxed">
              A collection of pieces that redefine the boundary between art and utility.
            </p>
          </div>
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