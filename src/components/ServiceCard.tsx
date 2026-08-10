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
    <div className="group bg-white rounded-3xl p-4 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-spa-dark/5 flex flex-col h-full border border-spa-dark/5">
      <div className="relative aspect-square w-full rounded-2xl overflow-hidden mb-6 bg-spa-light">
        <img 
          src={item.image || '/assets/img/hero-img.jpeg'} 
          alt={item.name} 
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
        />
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-medium text-spa-dark shadow-sm">
          {item.duration}
        </div>
      </div>
      
      <div className="flex-1 flex flex-col px-2">
        <div className="flex justify-between items-start mb-3 gap-2">
          <h3 className="font-amatic font-bold uppercase tracking-wider text-xl font-medium text-spa-dark group-hover:text-spa-accent transition-colors">
            {item.name}
          </h3>
          <span className="font-medium text-lg text-spa-dark">${item.price}</span>
        </div>
        
        <p className="text-spa-dark/60 text-sm mb-8 flex-1 font-light leading-relaxed line-clamp-3">
          {item.description}
        </p>
        
        <button 
          onClick={handleAdd}
          className={`w-full py-4 rounded-2xl flex items-center justify-center gap-2 font-medium text-sm transition-all duration-300 ${
            added 
              ? 'bg-spa-sage text-white'
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
