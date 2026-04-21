import React from 'react';
import { X, ShoppingBag, Trash2 } from 'lucide-react';

export default function CartDrawer({ isOpen, onClose, cart, currency, exchangeRate, onRemove }) {
  // Calculate total based on quantity and price
  const total = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  
  const formatPrice = (price) => currency === 'USD' 
    ? `$${price.toLocaleString()}` 
    : `₱${(price * exchangeRate).toLocaleString()}`;

  return (
    <>
      {/* Backdrop */}
      <div 
        className={`fixed inset-0 bg-black/20 backdrop-blur-sm z-[60] transition-opacity duration-500 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
      />
      
      {/* Sidebar */}
      <div className={`fixed right-0 top-0 h-full w-full max-w-md bg-white z-[70] shadow-2xl transition-transform duration-500 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-8 flex flex-col h-full">
          
          {/* Header */}
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-xl font-light tracking-tight uppercase">Your Cart</h2>
              <p className="text-[10px] text-gray-400 font-bold tracking-widest uppercase mt-1">
                {cart.length} {cart.length === 1 ? 'Item' : 'Items'}
              </p>
            </div>
            <button onClick={onClose} className="p-2 hover:rotate-90 transition-transform duration-300">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar">
            {cart.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-gray-300">
                <ShoppingBag size={48} strokeWidth={1} className="mb-4 opacity-20" />
                <p className="text-sm font-light uppercase tracking-widest">Cart is empty</p>
              </div>
            ) : (
              <div className="space-y-8">
                {cart.map((item) => (
                  <div key={item.id} className="flex gap-6 animate-in fade-in slide-in-from-right-4 duration-500">
                    <div className="w-20 h-28 bg-gray-50 flex-shrink-0">
                      <img src={item.image} className="w-full h-full object-cover" alt={item.name} />
                    </div>
                    <div className="flex-1 flex flex-col justify-between py-1">
                      <div>
                        <div className="flex justify-between items-start">
                          <h4 className="text-sm font-medium tracking-tight uppercase">{item.name}</h4>
                          <button 
                            onClick={() => onRemove(item.id)}
                            className="text-gray-400 hover:text-black transition-colors"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                        <p className="text-xs text-gray-400 mt-1 uppercase tracking-tighter">
                          Qty: {item.quantity}
                        </p>
                      </div>
                      <p className="text-sm font-light text-gray-600">
                        {formatPrice(item.price * item.quantity)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer / Total */}
          <div className="pt-8 mt-4 border-t border-gray-100">
            <div className="flex justify-between items-end mb-8">
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-400">Total</span>
              <span className="text-2xl font-light tracking-tighter">
                {formatPrice(total)}
              </span>
            </div>
            
            <button className="w-full bg-black text-white py-5 text-[10px] font-bold uppercase tracking-[0.3em] hover:bg-neutral-800 transition-all active:scale-[0.98]">
              Checkout Now
            </button>
            
            <p className="text-[9px] text-center text-gray-400 uppercase tracking-widest mt-6">
              Free shipping on orders over {currency === 'USD' ? '$500' : '₱28,000'}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}