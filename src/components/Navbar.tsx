'use client';

import { useState, useEffect } from 'react';
import { useCart } from '@/context/CartContext';
import CartDrawer from './CartDrawer';
import Link from 'next/link';

const WHATSAPP_NUMBER = '255717126282';
const WHATSAPP_HREF = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hello Beauty Spa! I would like to book an appointment.')}`;

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { totalItems, isCartOpen, openCart, closeCart } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Treatments', href: '#services' },
    { name: 'Spaces', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      {/* Announcement Marquee Strip */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-spa-dark text-spa-light overflow-hidden h-8 flex items-center">
        <div className="animate-marquee whitespace-nowrap flex items-center gap-12 text-[11px] uppercase tracking-[0.25em] font-semibold">
          {[
            '🌿 Traditional Wellness',
            '✦ Jambiani, Zanzibar',
            '💆 Expert Therapists',
            '🌺 Organic Herbal Blends',
            '✦ Book via WhatsApp',
            '🪨 Hot Stone Therapy',
            '✦ Private Wellness Suites',
            '🌿 Traditional Wellness',
            '✦ Jambiani, Zanzibar',
            '💆 Expert Therapists',
            '🌺 Organic Herbal Blends',
            '✦ Book via WhatsApp',
            '🪨 Hot Stone Therapy',
            '✦ Private Wellness Suites',
          ].map((item, i) => (
            <span key={i} className="text-spa-light/80 hover:text-spa-accent transition-colors cursor-default">{item}</span>
          ))}
        </div>
      </div>

      <header
        className={`fixed w-full top-8 z-40 transition-all duration-500 ${
          isScrolled ? 'bg-white/80 backdrop-blur-lg shadow-sm py-4' : 'bg-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
          <Link href="#home" className={`flex items-center gap-2.5 transition-colors ${isScrolled ? 'text-spa-dark' : 'text-white md:text-spa-dark'}`}>
            <div className={`w-9 h-9 rounded-full flex items-center justify-center border ${
              isScrolled ? 'border-spa-dark/20 bg-spa-light' : 'border-white/30 bg-white/10 md:border-spa-dark/20 md:bg-spa-light'
            }`}>
              <span className="material-symbols-outlined text-[18px] text-spa-accent">eco</span>
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-amatic font-bold uppercase tracking-wider text-xl">Beauty Spa</span>
              <span className="text-[9px] uppercase tracking-[0.2em] font-semibold mt-0.5 text-spa-accent">Spa &amp; Wellness</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm font-medium tracking-widest uppercase transition-colors hover:text-spa-accent ${isScrolled ? 'text-spa-dark/80' : 'text-spa-dark/80'}`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            {/* Cart icon — desktop only (mobile uses sticky bottom bar) */}
            <button
              onClick={openCart}
              className={`hidden md:flex relative p-2.5 rounded-full transition-all ${isScrolled ? 'bg-spa-light text-spa-dark hover:bg-spa-dark hover:text-white' : 'bg-spa-dark/5 text-spa-dark hover:bg-spa-dark hover:text-white'}`}
            >
              <span className="material-symbols-outlined text-[20px] block">shopping_bag</span>
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-spa-accent text-white text-[10px] font-bold rounded-full flex items-center justify-center shadow-sm">
                  {totalItems}
                </span>
              )}
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`md:hidden p-2.5 rounded-full backdrop-blur-sm transition-colors flex items-center justify-center ${isScrolled ? 'bg-spa-light text-spa-dark' : 'bg-white/20 text-white'}`}
            >
              {isMobileMenuOpen ? <span className="material-symbols-outlined text-[20px]">close</span> : <span className="material-symbols-outlined text-[20px]">menu</span>}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 z-30 bg-spa-dark text-spa-light transition-transform duration-500 ease-in-out ${isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="flex flex-col h-full pt-32 px-8 pb-32">
          <nav className="flex flex-col gap-8">
            {navLinks.map((link, index) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-4xl font-amatic font-bold uppercase tracking-wider hover:text-spa-accent transition-colors"
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="mt-auto border-t border-spa-light/10 pt-8">
            <p className="text-spa-light/50 text-sm mb-4">Bookings &amp; Inquiries</p>
            <p className="font-amatic font-bold uppercase tracking-wider text-xl">+255 717 126 282</p>
          </div>
        </div>
      </div>

      {/* ── STICKY MOBILE BOTTOM BAR ─────────────────────────────────────── */}
      {/* Hidden on md+ screens, always visible on mobile */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-t border-spa-dark/10 shadow-[0_-4px_24px_rgba(0,0,0,0.08)]">
        <div className="flex items-stretch h-16 px-4 gap-3">

          {/* View Cart button */}
          <button
            id="mobile-bottom-cart"
            onClick={openCart}
            className="relative flex-1 flex items-center justify-center gap-2 rounded-xl border-2 border-spa-dark/15 text-spa-dark font-semibold text-sm tracking-wide hover:border-spa-dark/40 active:scale-95 transition-all"
          >
            <span className="material-symbols-outlined text-[20px]">shopping_bag</span>
            <span>View Cart</span>
            {totalItems > 0 && (
              <span className="absolute top-2 right-2 w-5 h-5 bg-spa-accent text-white text-[10px] font-bold rounded-full flex items-center justify-center shadow-sm">
                {totalItems}
              </span>
            )}
          </button>

          {/* Book via WhatsApp button */}
          <a
            id="mobile-bottom-book"
            href={WHATSAPP_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-[1.6] flex items-center justify-center gap-2 rounded-xl bg-spa-accent text-white font-semibold text-sm tracking-wide shadow-lg active:scale-95 transition-all"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 flex-shrink-0">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            <span>Book Now</span>
          </a>

        </div>
        {/* Safe area spacer for iOS home indicator */}
        <div className="h-safe-bottom bg-white/95" style={{ height: 'env(safe-area-inset-bottom)' }} />
      </div>
      {/* ─────────────────────────────────────────────────────────────────── */}

      <CartDrawer isOpen={isCartOpen} onClose={closeCart} />
    </>
  );
}
