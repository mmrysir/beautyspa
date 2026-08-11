'use client';

import { useState } from 'react';
import { useCart } from '@/context/CartContext';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CartDrawer({ isOpen, onClose }: CartDrawerProps) {
  const { cart, removeFromCart, updateQuantity, totalPrice } = useCart();
  const [formData, setFormData] = useState({
    name: '',
    date: '',
    time: '',
  });

  if (!isOpen) return null;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleWhatsAppBooking = () => {
    if (!formData.name || !formData.date || !formData.time) {
      alert('Please fill out all booking details.');
      return;
    }

    const phoneNumber = '255717126282'; // From index.html
    let message = `Hello Beauty Spa! I would like to book an appointment.\n\n`;
    message += `*Booking Details:*\n`;
    message += `- Name: ${formData.name}\n`;
    message += `- Date: ${formData.date}\n`;
    message += `- Time: ${formData.time}\n\n`;
    
    message += `*Treatments Selected:*\n`;
    cart.forEach(item => {
      message += `- ${item.quantity}x ${item.name} ($${item.price * item.quantity})\n`;
    });
    
    message += `\n*Total: $${totalPrice}*`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
  };

  return (
    <>
      <div 
        className="fixed inset-0 bg-spa-dark/40 z-40 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      />
      
      <div className="fixed inset-y-0 right-0 z-50 w-full md:w-[480px] bg-spa-light shadow-2xl flex flex-col transform transition-transform duration-500 rounded-l-[2rem] overflow-hidden">
        <div className="flex items-center justify-between p-8 border-b border-spa-dark/10 bg-white">
          <h2 className="text-3xl font-amatic font-bold uppercase tracking-wider font-medium flex items-center gap-3 text-spa-dark">
            <span className="w-10 h-10 rounded-full bg-spa-accent/10 flex items-center justify-center">
              <span className="material-symbols-outlined text-[20px] text-spa-accent block">shopping_bag</span>
            </span>
            Your Journey
          </h2>
          <button 
            onClick={onClose}
            className="w-10 h-10 flex items-center justify-center hover:bg-spa-dark/5 rounded-full transition-colors text-spa-dark/50 hover:text-spa-dark"
          >
            <span className="material-symbols-outlined text-[20px] block">close</span>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto">
          {cart.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-spa-dark/40 space-y-6 p-8">
              <div className="w-24 h-24 rounded-full bg-white flex items-center justify-center shadow-sm">
                <span className="material-symbols-outlined text-[40px] text-spa-dark/20 block">shopping_bag</span>
              </div>
              <p className="text-lg font-amatic font-bold uppercase tracking-wider">Your selection is empty</p>
              <button 
                onClick={onClose}
                className="text-spa-accent font-medium hover:text-spa-dark transition-colors flex items-center gap-2"
              >
                Browse Treatments <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </button>
            </div>
          ) : (
            <div className="p-8 space-y-8">
              <div className="space-y-4">
                {cart.map((item) => (
                  <div key={item.id} className="flex gap-4 p-4 bg-white rounded-3xl border border-spa-dark/5 shadow-sm">
                    <div className="w-24 h-24 rounded-2xl flex-shrink-0 bg-spa-accent/10 border border-spa-accent/20 flex items-center justify-center text-spa-accent relative group overflow-hidden">
                      <span className="material-symbols-outlined text-[40px]">{item.icon || 'spa'}</span>
                      <div className="absolute inset-0 bg-spa-dark/0 group-hover:bg-spa-dark/5 transition-colors" />
                    </div>
                    <div className="flex-1 flex flex-col justify-between py-1">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-amatic font-bold uppercase tracking-wider font-medium text-lg text-spa-dark leading-tight mb-1">{item.name}</h3>
                          <p className="text-xs text-spa-dark/50 uppercase tracking-widest">{item.duration}</p>
                        </div>
                        <button 
                          onClick={() => removeFromCart(item.id)}
                          className="text-spa-dark/30 hover:text-red-500 transition-colors p-1"
                        >
                          <span className="material-symbols-outlined text-[16px] block">close</span>
                        </button>
                      </div>
                      
                      <div className="flex items-center justify-between mt-4">
                        <div className="flex items-center bg-spa-light rounded-xl border border-spa-dark/5">
                          <button 
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="p-2 hover:bg-spa-dark/5 text-spa-dark/70 rounded-l-xl transition-colors flex items-center justify-center"
                          >
                            <span className="material-symbols-outlined text-[14px]">remove</span>
                          </button>
                          <span className="w-8 text-center text-sm font-medium text-spa-dark">{item.quantity}</span>
                          <button 
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="p-2 hover:bg-spa-dark/5 text-spa-dark/70 rounded-r-xl transition-colors flex items-center justify-center"
                          >
                            <span className="material-symbols-outlined text-[14px]">add</span>
                          </button>
                        </div>
                        <p className="font-medium text-spa-dark">${item.price * item.quantity}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-8 border-t border-spa-dark/10">
                <h3 className="font-amatic font-bold uppercase tracking-wider text-2xl font-medium mb-6 text-spa-dark">Reservation Details</h3>
                <div className="space-y-4">
                  <div className="relative group">
                    <span className="material-symbols-outlined absolute left-4 top-4 text-[20px] text-spa-dark/40 group-focus-within:text-spa-accent transition-colors">person</span>
                    <input 
                      type="text" 
                      name="name"
                      placeholder="Your Full Name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full pl-12 pr-4 py-4 bg-white border border-spa-dark/10 rounded-2xl focus:outline-none focus:ring-1 focus:ring-spa-accent focus:border-spa-accent transition-all text-spa-dark placeholder-spa-dark/30 shadow-sm"
                    />
                  </div>
                  <div className="flex gap-4">
                    <div className="relative group flex-1">
                      <span className="material-symbols-outlined absolute left-4 top-4 text-[20px] text-spa-dark/40 group-focus-within:text-spa-accent transition-colors">calendar_today</span>
                      <input 
                        type="date" 
                        name="date"
                        value={formData.date}
                        onChange={handleInputChange}
                        className="w-full pl-12 pr-4 py-4 bg-white border border-spa-dark/10 rounded-2xl focus:outline-none focus:ring-1 focus:ring-spa-accent focus:border-spa-accent transition-all text-spa-dark shadow-sm"
                      />
                    </div>
                    <div className="relative group flex-1">
                      <span className="material-symbols-outlined absolute left-4 top-4 text-[20px] text-spa-dark/40 group-focus-within:text-spa-accent transition-colors">schedule</span>
                      <input 
                        type="time" 
                        name="time"
                        value={formData.time}
                        onChange={handleInputChange}
                        className="w-full pl-12 pr-4 py-4 bg-white border border-spa-dark/10 rounded-2xl focus:outline-none focus:ring-1 focus:ring-spa-accent focus:border-spa-accent transition-all text-spa-dark shadow-sm"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {cart.length > 0 && (
          <div className="p-8 bg-white border-t border-spa-dark/10 shadow-[0_-10px_40px_-15px_rgba(0,0,0,0.05)]">
            <div className="flex justify-between items-end mb-6">
              <span className="text-spa-dark/60 font-medium uppercase tracking-widest text-xs">Total Amount</span>
              <span className="text-4xl font-amatic font-bold uppercase tracking-wider font-medium text-spa-dark">${totalPrice}</span>
            </div>
            <button 
              onClick={handleWhatsAppBooking}
              className="group w-full bg-spa-dark hover:bg-[#1A2F25]/90 text-white py-4 rounded-2xl font-medium tracking-wide flex items-center justify-center gap-3 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1"
            >
              Confirm on WhatsApp
              <span className="material-symbols-outlined text-[20px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </button>
            <p className="text-xs text-center text-spa-dark/40 mt-4">
              Our team will confirm your appointment shortly.
            </p>
          </div>
        )}
      </div>
    </>
  );
}
