import React from 'react';
import { Instagram, Twitter, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        {/* Brand Column */}
        <div className="col-span-1 md:col-span-1">
          <h2 className="text-xl font-bold tracking-tighter uppercase mb-6">ENVISION.</h2>
          <p className="text-gray-400 text-sm leading-relaxed font-light">
            Crafting high-end aesthetics for the modern home. Designed for those who value the art of living.
          </p>
        </div>

        {/* Links Columns */}
        <div>
          <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] mb-6">Shop</h4>
          <ul className="space-y-4 text-sm text-gray-500 font-light">
            <li><a href="#" className="hover:text-black transition-colors">All Collections</a></li>
            <li><a href="#" className="hover:text-black transition-colors">Furniture</a></li>
            <li><a href="#" className="hover:text-black transition-colors">Lighting</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] mb-6">Support</h4>
          <ul className="space-y-4 text-sm text-gray-500 font-light">
            <li><a href="#" className="hover:text-black transition-colors">Shipping Policy</a></li>
            <li><a href="#" className="hover:text-black transition-colors">Returns & Exchanges</a></li>
            <li><a href="#" className="hover:text-black transition-colors">Contact Us</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] mb-6">Newsletter</h4>
          <div className="flex border-b border-black pb-2">
            <input 
              type="email" 
              placeholder="YOUR EMAIL" 
              className="bg-transparent text-xs w-full focus:outline-none placeholder:text-gray-300"
            />
            <button className="text-[10px] font-bold uppercase tracking-widest">Join</button>
          </div>
          <div className="flex gap-4 mt-8">
            <Instagram size={18} className="text-gray-400 hover:text-black cursor-pointer" />
            <Twitter size={18} className="text-gray-400 hover:text-black cursor-pointer" />
            <Facebook size={18} className="text-gray-400 hover:text-black cursor-pointer" />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-8 border-t border-gray-50 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-[10px] text-gray-400 uppercase tracking-widest">
          © 2026 ENVISION. ALL RIGHTS RESERVED.
        </p>
        <p className="text-[10px] text-gray-400 uppercase tracking-widest">
          DAVAO CITY, PHILIPPINES
        </p>
      </div>
    </footer>
  );
}