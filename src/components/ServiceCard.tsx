'use client';

import { MenuItem } from '@/data/menu';
import { useCart } from '@/context/CartContext';
import { useState } from 'react';

interface ServiceCardProps {
  item: MenuItem;
}

export default function ServiceCard({ item }: ServiceCardProps) {
  const { addToCart, cart } = useCart();
  const [added, setAdded] = useState(false);
  
  const inCart = cart.some(cartItem => cartItem.id === item.id);

  const handleAdd = () => {
    addToCart(item);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="group bg-white rounded-3xl p-6 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-spa-dark/5 flex flex-col h-full border border-spa-dark/5">
      
      <div className="flex justify-between items-start mb-4">
        {/* Avatar */}
        <div className="w-14 h-14 rounded-full bg-spa-accent/10 border border-spa-accent/20 text-spa-accent flex items-center justify-center group-hover:bg-spa-accent group-hover:text-white transition-colors duration-300">
          <span className="material-symbols-outlined text-[28px]">{item.icon || 'spa'}</span>
        </div>

        {/* Price & Duration */}
        <div className="flex flex-col items-end gap-1">
          <span className="font-medium text-xl text-spa-dark">${item.price}</span>
          <span className="bg-spa-light px-3 py-1 rounded-full text-xs font-medium text-spa-dark/80">
            {item.duration}
          </span>
        </div>
      </div>
      
      <div className="flex-1 flex flex-col">
        <h3 className="font-amatic font-bold uppercase tracking-wider text-2xl text-spa-dark mb-2 group-hover:text-spa-accent transition-colors">
          {item.name}
        </h3>
        
        <p className="text-spa-dark/60 text-sm mb-6 flex-1 font-light leading-relaxed line-clamp-4">
          {item.description}
        </p>
        
        <button 
          onClick={handleAdd}
          className={`w-full py-3.5 rounded-2xl flex items-center justify-center gap-2 font-medium text-sm transition-all duration-300 ${
            added 
              ? 'bg-spa-sage text-white shadow-md'
              : 'bg-spa-light text-spa-dark hover:bg-spa-dark hover:text-white'
          }`}
        >
          {added ? (
            <>
              <span className="material-symbols-outlined text-[18px]">check</span> Added to Journey
            </>
          ) : (
            <>
              <span className="material-symbols-outlined text-[18px]">add</span> {inCart ? 'Add Another' : 'Select Treatment'}
            </>
          )}
        </button>
      </div>
    </div>
  );
}
