import React from 'react';
import { X, ShoppingBag, Trash2 } from 'lucide-react';

const CartDrawer = ({ isOpen, onClose, cart, currency, exchangeRate, onRemove }) => {
  if (!isOpen) return null;

  const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const displayTotal = currency === 'PHP' ? total * exchangeRate : total;

  return (
    <>
      {/* BACKGROUND OVERLAY: Adds blur effect to the page content */}
      <div 
        className="fixed inset-0 z-[190] bg-black/20 backdrop-blur-sm animate-in fade-in duration-300"
        onClick={onClose}
      />

      {/* CART DRAWER: Sidebar on Desktop, Full-screen on Mobile */}
      <div className={`fixed top-0 right-0 z-[200] h-full bg-white shadow-2xl transition-all duration-500 ease-out
                      w-full md:w-[450px] /* Sidebar width on desktop */
                      animate-in slide-in-from-right`}
      >
        {/* HEADER with X Button */}
        <div className="flex items-center justify-between px-6 py-6 md:py-8 border-b border-gray-100">
          <div className="flex items-center gap-2">
            <span className="text-[10px] md:text-xs font-black uppercase tracking-widest text-gray-400">
              {cart.length} ITEMS
            </span>
          </div>
          
          <button 
            onClick={onClose}
            className="p-2 -mr-2 hover:rotate-90 transition-transform duration-300"
          >
            <X size={24} strokeWidth={1.5} />
          </button>
        </div>

        {/* CART CONTENT (Scrolling Area) */}
        <div className="flex flex-col h-[calc(100vh-280px)] overflow-y-auto px-6 md:px-8 py-8">
          {cart.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full opacity-20">
              <ShoppingBag size={64} strokeWidth={1} />
              <p className="mt-4 text-[10px] md:text-xs font-bold uppercase tracking-[0.3em]">Cart is Empty</p>
            </div>
          ) : (
            <div className="space-y-8 md:space-y-10">
              {cart.map((item) => (
                <div key={item.id} className="flex gap-5 md:gap-6 items-center">
                  <img src={item.image} alt={item.name} className="w-16 h-16 md:w-20 md:h-20 object-cover rounded-sm shrink-0" />
                  <div className="flex-1">
                    <h4 className="text-[10px] md:text-xs font-black uppercase tracking-[0.2em]">{item.name}</h4>
                    <p className="text-[10px] text-gray-400 mt-1.5 uppercase font-medium">QTY: {item.quantity}</p>
                    <p className="text-xs md:text-sm font-black mt-2.5">
                      {currency === 'PHP' ? '₱' : '$'}
                      {(currency === 'PHP' ? item.price * exchangeRate : item.price).toLocaleString()}
                    </p>
                  </div>
                  <button 
                    onClick={() => onRemove(item.id)} 
                    className="text-gray-200 hover:text-black transition-colors p-1"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* FOOTER (Fixed at bottom) */}
        <div className="absolute bottom-0 left-0 w-full bg-white border-t border-gray-100 p-8 md:p-10">
          <div className="flex justify-between items-end mb-8 md:mb-10">
            <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">Total</span>
            <span className="text-2xl md:text-3xl font-light">
              {currency === 'PHP' ? '₱' : '$'}
              {displayTotal.toLocaleString()}
            </span>
          </div>
          
          <button className="w-full bg-black text-white py-6 md:py-7 text-[10px] md:text-xs font-black uppercase tracking-[0.3em] hover:bg-gray-800 transition-colors shadow-lg">
            Checkout Now
          </button>
          
          <p className="text-[8px] md:text-[9px] text-gray-300 text-center mt-6 md:mt-8 uppercase tracking-widest font-medium">
            Free shipping on orders over {currency === 'PHP' ? '₱28,000' : '$500'}
          </p>
        </div>
      </div>
    </>
  );
};

export default CartDrawer;