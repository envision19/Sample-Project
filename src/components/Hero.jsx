import React from 'react';

export default function Hero() {
  const handleShopClick = () => {
    const shopSection = document.getElementById('shop');
    if (shopSection) {
      shopSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      console.warn("Element with ID 'shop' not found.");
    }
  };

  return (
    <section className="relative pt-32 pb-20 flex flex-col items-center text-center px-6">
      {/* Badge */}
      <div className="inline-block px-4 py-1.5 mb-8 border border-gray-100 rounded-full text-[10px] font-bold uppercase tracking-[0.3em] text-gray-400 animate-in fade-in slide-in-from-bottom-4 duration-1000">
        New Collection 2026
      </div>

      
      <h1 className="text-5xl md:text-8xl font-bold tracking-tighter mb-8 max-w-4xl leading-[0.9] animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-150">
        High-end aesthetics for the modern home.
      </h1>

      
      <p className="text-gray-500 text-base md:text-lg mb-12 max-w-xl font-light leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
        Carefully curated pieces designed to blend functionality with minimalist design. 
        Experience the art of living.
      </p>

     
      <div className="flex flex-col sm:flex-row gap-4 animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-500">
        {/* FIXED: Added onClick here */}
        <button 
          onClick={handleShopClick}
          className="bg-black text-white px-10 py-4 text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-neutral-800 transition-all active:scale-95"
        >
          Shop Collection
        </button>
        
       
        <button 
          onClick={() => alert("The 2026 Lookbook is coming soon!")}
          className="bg-white border border-gray-200 text-black px-10 py-4 text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-gray-50 transition-all active:scale-95"
        >
          View Lookbook
        </button>
      </div>

      {/* Background Decorative Element */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-[0.03] pointer-events-none">
        <div className="w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-400 via-transparent to-transparent"></div>
      </div>
    </section>
  );
}